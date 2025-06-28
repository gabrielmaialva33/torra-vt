import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { OrderFilters } from '../components/OrderFilters';
import { OrdersTable } from '../components/OrdersTable';

export function OrderManagementPage() {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Order Management
        </h1>
        <div className="mt-4">
          <OrderFilters />
        </div>
        <div className="mt-6">
          <OrdersTable />
        </div>
      </div>
    </DashboardLayout>
  );
}
