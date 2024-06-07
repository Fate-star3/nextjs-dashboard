import { Ref } from 'react';

export enum EventSceneEnum {
  view = '曝光',
  click = '点击',
  trigger = '触发',
}

export enum DeviceType {
  'tablet' = '平板',
  'mobile' = '手机',
  'pc' = 'PC',
}

export interface EventSchema {
  scene: EventSceneEnum;
  /** subscriber_id */
  uid?: number;
  create_time: string;
  referrer?: string;
  invite_code?: string;
  device: DeviceType;
  page: string;
  module: string;
  target: string;
}

export const PageRouterMap: Record<string, string> = {
  '/': 'Home',
  '/stores/[brand]': 'Detail',
  '/stores': 'Store',
};

export type EVENT_SCENE = keyof typeof EventSceneEnum;

export interface UseEventLoggerOptionItem {
  ref: Ref<HTMLElement>;
  target?: string;
  module?: string;
}

export interface UseEventLoggerOptions {
  views?: UseEventLoggerOptionItem[];
  clicks?: UseEventLoggerOptionItem[];
}

export interface LogParams {
  scene: EVENT_SCENE;
  target?: string;
  module?: 'floating-window' | '卡片' | 'zero-button' | string;
}
