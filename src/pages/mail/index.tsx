import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Mail as MailIcon, Plus } from 'lucide-react';

interface MailAccount {
  id: string;
  email: string;
  status: 'active' | 'suspended';
  quota: string;
  usage: string;
}

export function Mail() {
  const [accounts] = useState<MailAccount[]>([
    {
      id: '1',
      email: 'admin@example.com',
      status: 'active',
      quota: '1GB',
      usage: '250MB',
    },
    {
      id: '2',
      email: 'info@example.com',
      status: 'active',
      quota: '2GB',
      usage: '1.5GB',
    },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mail Accounts</h1>
        <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          <Plus className="w-4 h-4 mr-2" />
          Add Account
        </button>
      </div>

      <div className="grid gap-4">
        {accounts.map((account) => (
          <Card key={account.id} className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <MailIcon className="w-6 h-6 text-green-500" />
                <div>
                  <h3 className="font-medium">{account.email}</h3>
                  <div className="flex space-x-2 text-sm text-gray-500">
                    <span className={`px-2 py-0.5 rounded-full ${
                      account.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {account.status}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                      {account.usage} / {account.quota}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded">
                  Edit
                </button>
                <button className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded">
                  Delete
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}