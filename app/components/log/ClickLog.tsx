'use client'
import { useLogger } from '@/app/components/hooks/useLogger';
import { FC, useRef } from 'react';

interface Props {
  module: string;
  target: string;
  children: React.ReactNode;
}

export const ClickLog: FC<Props> = ({ module, target, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  useLogger({ clicks: [{ ref, target, module }] });

  return <div ref={ref}>{children}</div>;
};
