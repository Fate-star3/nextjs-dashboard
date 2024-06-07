import { type MutableRefObject, useRef } from 'react';
import { isBrowser } from '@/app/utils';
import omit from 'lodash/omit';
import { useIsomorphicLayoutEffect } from 'ahooks';

type El = HTMLElement | MutableRefObject<HTMLElement>;

type TargetItem<T extends Record<string, any> = any> = T & {
  ref: El;
};

interface UseInViewWatch<T extends Record<string, any> = any> {
  (
    targets: TargetItem<T>[],
    options?: {
      /** 视图进入比例 */
      ratio?: number;
      /** 视图元素 */
      root?: Element;
      /** 视图中停留多长时间触发onStanding事件 */
      standing?: number;
      /** 元素高度为0是否不记录 */
      muteZeroHeight?: boolean;
      onEnter?: (param: T) => void;
      onLeave?: (param: T, standing: number) => void;
      onStanding?: (param: T, standing: number) => void;
    },
  ): void;
}

const parseTarget = (target: TargetItem) => {
  let targetElement;

  const { ref } = target;

  if (!isBrowser) {
    targetElement = null;
  } else if ('current' in ref) {
    targetElement = ref.current;
  } else {
    targetElement = ref;
  }

  return {
    ...target,
    ref: targetElement,
  };
};

export const useInViewWatch: UseInViewWatch = (
  targets,
  { root, standing, muteZeroHeight = true, onEnter, onLeave, onStanding } = {},
) => {
  const timerWeakMap = useRef(
    new WeakMap<
      TargetItem,
      {
        eventTimer: any;
        enterTime: number;
      }
    >(),
  );

  const handleItemObserver = (
    item: TargetItem,
    entry: IntersectionObserverEntry,
  ) => {
    const current = Date.now();
    const { enterTime = 0, eventTimer } = timerWeakMap.current.get(item.ref) || {};
    const standingTime = current - enterTime;

    clearTimeout(eventTimer);
    const param = omit(item, 'ref');

    if (entry.isIntersecting) {
      let timer;
      if (standing && onStanding) {
        timer = setTimeout(() => {
          const { enterTime = 0} = timerWeakMap.current.get(item.ref) || {};
          onStanding?.(param, Date.now() - enterTime);
        }, standing);
      }
      onEnter?.({ target: item.target, module: item.module });
      timerWeakMap.current.set(item.ref, {
        enterTime: current,
        eventTimer: timer,
      });
    } else if (enterTime) {
      onLeave?.(param, standingTime);
      timerWeakMap.current.delete(item.ref);
    }
  };

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser) return;

    const items = targets
      .map(parseTarget)
      .filter((target) => target.ref)
      .filter((target) => {
        const itemHeight = target.ref.getBoundingClientRect().height;
        return itemHeight || !muteZeroHeight;
      });

    if (!items.length) return;
    const weakMap = new WeakMap<Element, TargetItem>();

    items.forEach((item) => {
      weakMap.set(item.ref, item);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const entryTarget = entry.target;
          const item = weakMap.get(entryTarget);

          if (!item) return;

          handleItemObserver(item, entry);
        }
      },
      {
        root: root || document,
      },
    );

    items.forEach((item) => {
      observer.observe(item.ref as Element);
    });

    return () => {
      observer.disconnect();
    };
  }, [targets, root]);
};
