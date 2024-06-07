import { MutableRefObject } from 'react';
import { isBrowser } from '@/app/utils';
import debounceFn from 'lodash/debounce';
import omit from 'lodash/omit';
import { useIsomorphicLayoutEffect } from 'ahooks';

type El = HTMLElement | MutableRefObject<HTMLElement>;

type TargetItem<T extends Record<string, any> = any> = T & {
  ref: El;
};

interface UseClickWatch<T extends Record<string, any> = any> {
  (
    targets: TargetItem<T>[],
    options?: {
      /** 点击事件防抖 */
      debounce?: number;
      onClick?: (param: T) => void;
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

const DEFAULT_DEBOUNCE = 300;

export const useClickWatch: UseClickWatch = (
  targets,
  { debounce = DEFAULT_DEBOUNCE, onClick }: { debounce?: number; onClick?: (param: any) => void } = {},
) => {
  useIsomorphicLayoutEffect(() => {
    if (!isBrowser) return;

    const parsedTargets = targets
      .map(parseTarget)
      .filter((target) => target.ref);

    const listenerWeakMap = new WeakMap<HTMLElement, () => void>();

    const getClickListener = (item: TargetItem) =>
      debounceFn(() => {
        const param = omit(item, 'ref');
        onClick?.(param);
      }, debounce);

    parsedTargets.forEach((target) => {
      const listener = getClickListener(target);
      listenerWeakMap.set(target.ref, listener);
      target.ref.addEventListener('click', listener);
    });

    return () => {
      parsedTargets.forEach((target) => {
        const listener = listenerWeakMap.get(target.ref);
        target.ref.removeEventListener('click', listener);
      });
    };
  }, [targets, debounce, onClick]);
};
