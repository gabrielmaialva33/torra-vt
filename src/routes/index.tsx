import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from '@/features/auth/routes/LoginPage';
import { DashboardPage } from '@/features/dashboard/routes/DashboardPage';
import { ProtectedRoute } from './ProtectedRoute';
import { OrderManagementPage } from '@/features/orders/routes/OrderManagementPage';
import { LockerPage } from '@/features/lockers/routes/LockerPage';
import { UserManagementPage } from '@/features/users/routes/UserManagementPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/orders',
    element: (
      <ProtectedRoute>
        <OrderManagementPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/lockers',
    element: (
      <ProtectedRoute>
        <LockerPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/users',
    element: (
      <ProtectedRoute>
        <UserManagementPage />
      </ProtectedRoute>
    ),
  },
]);
