import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-[#181945] text-white">
        <div className="p-4">
          <h2 className="text-2xl font-bold">Dashboard</h2>
        </div>
        <nav className="mt-4">
          <Link
            to="/dashboard"
            className="block px-4 py-2 text-sm hover:bg-[#3B3C7A]"
          >
            Home
          </Link>
          <Link
            to="/users"
            className="block px-4 py-2 text-sm hover:bg-[#3B3C7A]"
          >
            Users
          </Link>
        </nav>
      </div>
      <div className="flex-1 p-10">{children}</div>
    </div>
  );
}
