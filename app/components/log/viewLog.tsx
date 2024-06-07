'use client'
import { useLogger } from '@/app/components/hooks/useLogger';
import React, { FC, useRef } from 'react';

interface Props {
  module: string;
  target: string;
  children: React.ReactNode;
}

export const ViewLog: FC<Props> = ({ module, target, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  useLogger({ views: [{ ref, target, module }] });

  return <div ref={ref}>{children}</div>;
};
