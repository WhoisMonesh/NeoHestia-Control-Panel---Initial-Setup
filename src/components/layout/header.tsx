import { Bell, User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex-1" />
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Bell className="h-5 w-5 text-gray-600" />
          </button>
          <button className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100">
            <User className="h-5 w-5 text-gray-600" />
            <span className="text-sm text-gray-700">Admin</span>
          </button>
        </div>
      </div>
    </header>
  );
}