import { Database as DatabaseIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import type { Database } from '../types';

interface DatabaseCardProps {
  database: Database;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export function DatabaseCard({ database, onEdit, onDelete }: DatabaseCardProps) {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <DatabaseIcon className="w-6 h-6 text-purple-500" />
          <div>
            <h3 className="font-medium">{database.name}</h3>
            <div className="flex space-x-2 text-sm text-gray-500">
              <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                {database.type}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">
                {database.size}
              </span>
              <span className={`px-2 py-0.5 rounded-full ${
                database.status === 'active' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-yellow-100 text-yellow-700'
              }`}>
                {database.status}
              </span>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={() => onEdit(database.id)}
            className="px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded"
          >
            Edit
          </button>
          <button 
            onClick={() => onDelete(database.id)}
            className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </Card>
  );
}