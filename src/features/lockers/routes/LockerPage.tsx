import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { LockerGrid } from '../components/LockerGrid';

export function LockerPage() {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Locker System</h1>
        <div className="mt-6">
          <LockerGrid />
        </div>
      </div>
    </DashboardLayout>
  );
}
