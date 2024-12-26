import { useState } from 'react';
import { Plus } from 'lucide-react';
import { DatabaseList } from './components/database-list';
import type { Database } from './types';

export function Databases() {
  const [databases] = useState<Database[]>([
    {
      id: '1',
      name: 'wordpress_db',
      type: 'mysql',
      size: '250MB',
      status: 'active',
      user: 'wp_user',
    },
    {
      id: '2',
      name: 'app_analytics',
      type: 'postgresql',
      size: '1.2GB',
      status: 'active',
      user: 'analytics_user',
    },
  ]);

  const handleEdit = (id: string) => {
    console.log('Edit database:', id);
  };

  const handleDelete = (id: string) => {
    console.log('Delete database:', id);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Databases</h1>
        <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          <Plus className="w-4 h-4 mr-2" />
          Add Database
        </button>
      </div>

      <DatabaseList
        databases={databases}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}