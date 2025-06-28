import { useAuth } from '@/features/auth/store/useAuthStore';

export function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b-2 border-gray-200">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold text-gray-700">Dashboard</h1>
      </div>
      <div className="flex items-center">
        <div className="relative">
          <button className="relative z-10 block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none">
            <img
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
              alt="Your avatar"
            />
          </button>
        </div>
        <div className="ml-3">
          <p className="text-sm font-semibold text-gray-700">{user?.name}</p>
          <p className="text-xs text-gray-500">Admin</p>
        </div>
        <button
          onClick={logout}
          className="px-4 py-2 ml-6 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
