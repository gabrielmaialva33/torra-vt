import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Chart } from '../components/Chart';
import { RecentOrders } from '../components/RecentOrders';

export function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-500">Total Sales</h3>
          <p className="text-3xl font-bold text-gray-800">$2,456</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-500">Total Orders</h3>
          <p className="text-3xl font-bold text-gray-800">3,456</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-500">Total Customers</h3>
          <p className="text-3xl font-bold text-gray-800">1,234</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-500">Pending Orders</h3>
          <p className="text-3xl font-bold text-gray-800">123</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-500">Sales Chart</h3>
          <Chart />
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-500">Recent Orders</h3>
          <RecentOrders />
        </div>
      </div>
    </DashboardLayout>
  );
}
