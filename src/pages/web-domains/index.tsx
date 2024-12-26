import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Globe, Plus } from 'lucide-react';

interface Domain {
  id: string;
  name: string;
  status: 'active' | 'suspended' | 'error';
  ssl: boolean;
  php: string;
}

export function WebDomains() {
  const [domains] = useState<Domain[]>([
    {
      id: '1',
      name: 'example.com',
      status: 'active',
      ssl: true,
      php: '8.2',
    },
    {
      id: '2',
      name: 'test.com',
      status: 'active',
      ssl: true,
      php: '8.1',
    },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Web Domains</h1>
        <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          <Plus className="w-4 h-4 mr-2" />
          Add Domain
        </button>
      </div>

      <div className="grid gap-4">
        {domains.map((domain) => (
          <Card key={domain.id} className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Globe className="w-6 h-6 text-blue-500" />
                <div>
                  <h3 className="font-medium">{domain.name}</h3>
                  <div className="flex space-x-2 text-sm text-gray-500">
                    <span className={`px-2 py-0.5 rounded-full ${
                      domain.status === 'active' ? 'bg-green-100 text-green-700' :
                      domain.status === 'suspended' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {domain.status}
                    </span>
                    {domain.ssl && (
                      <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                        SSL
                      </span>
                    )}
                    <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">
                      PHP {domain.php}
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