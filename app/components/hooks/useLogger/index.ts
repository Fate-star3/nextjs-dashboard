'use client';
import { usePathname } from 'next/navigation';
import { useCallback } from 'react';
import {
  PageRouterMap,
  EventSceneEnum,
  UseEventLoggerOptions,
  LogParams,
  EventSchema,
  DeviceType,
} from './type';
import { useInViewWatch } from './useInViewWatch';
import { useClickWatch } from './useClickWatch';
import dayjs from 'dayjs';
import 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(require('dayjs/plugin/timezone'));

// ...

/** GA埋点事件名称 */
const EVENT_NAME = 'dev_test';

/**
 *  识别用户的设备类型
 * @returns
 */
function getDeviceType(): DeviceType {
  const userAgent = navigator.userAgent;
  if (/tablet|ipad|playbook|silk/i.test(userAgent)) {
    return DeviceType.tablet;
  }
  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      userAgent,
    )
  ) {
    return DeviceType.mobile;
  }
  return DeviceType.pc;
}

export const useLogger = ({
  views = [],
  clicks = [],
}: UseEventLoggerOptions = {}) => {
  const router = usePathname();

  const getEventParams = useCallback((): Partial<EventSchema> => {
    const route = router || '';

    const page = PageRouterMap[route] || route;

    return {
      page,
      create_time: dayjs().tz('America/New_York').format('YYYY-MM-DD HH:mm:ss'),
      device: getDeviceType(),
      referrer: document.referrer,
    };
  }, [router]);

  const log = useCallback(
    ({ scene, target, module }: LogParams) => {
      if (!window?.gtag) return;

      if (!(window as any)._LOG) (window as any)._LOG = [];

      (window as any)._LOG.push({
        ...getEventParams(),
        target,
        module,
        scene: EventSceneEnum[scene],
      });

      window.gtag('event', EVENT_NAME, {
        ...getEventParams(),
        target,
        module,
        scene: EventSceneEnum[scene],
      });
    },
    [getEventParams],
  );

  useInViewWatch(views, {
    standing: 500,
    onStanding: ({ module, target } = {}, _standing) => {
      log({ scene: 'view', module, target });
    },
  });

  useClickWatch(clicks, {
    debounce: 500,
    onClick: ({ module, target } = {}) => {
      log({ scene: 'click', module, target });
    },
  });

  return [log];
};
