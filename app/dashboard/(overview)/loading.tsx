// loading.tsx 是一个基于 Suspense 构建的特殊 Next.js 文件，它允许您创建回退 UI，以在页面内容加载时显示为替代。
import DashboardSkeleton from '@/app/ui/skeletons';

export default function Loading() {
  return <DashboardSkeleton />;
}
