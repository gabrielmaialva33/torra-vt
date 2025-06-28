import { NavLink } from 'react-router-dom';

export function Sidebar() {
  return (
    <div className="flex flex-col w-64 h-screen px-4 py-8 bg-gray-800 text-white">
      <div className="flex items-center justify-center">
        <img
          src="/assets/logos/click-and-collect-logo.svg"
          alt="Lojas Torra"
          className="w-32"
        />
      </div>
      <div className="flex flex-col justify-between mt-6">
        <aside>
          <ul>
            <li>
              <NavLink
                to="/dashboard"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? '#4A5568' : '',
                })}
                className="flex items-center px-4 py-2 rounded-md"
              >
                <span className="mx-4 font-medium">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/orders"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? '#4A5568' : '',
                })}
                className="flex items-center px-4 py-2 mt-5 rounded-md"
              >
                <span className="mx-4 font-medium">Order Management</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lockers"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? '#4A5568' : '',
                })}
                className="flex items-center px-4 py-2 mt-5 rounded-md"
              >
                <span className="mx-4 font-medium">Locker System</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? '#4A5568' : '',
                })}
                className="flex items-center px-4 py-2 mt-5 rounded-md"
              >
                <span className="mx-4 font-medium">User Management</span>
              </NavLink>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
