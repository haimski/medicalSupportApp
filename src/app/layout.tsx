import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-pink-600">Nayara AI</h1>
        <nav className="flex gap-4">
          <Link
            to="/chat"
            className={`px-4 py-2 rounded-md ${
              location.pathname === '/chat'
                ? 'bg-pink-100 text-pink-700 font-semibold'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Chat
          </Link>
          <Link
            to="/dashboard"
            className={`px-4 py-2 rounded-md ${
              location.pathname === '/dashboard'
                ? 'bg-pink-100 text-pink-700 font-semibold'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Dashboard
          </Link>
        </nav>
      </header>

      {/* Page content */}
      <main id="page-content" className="flex-grow overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
