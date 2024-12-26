import { Card } from '@/components/ui/card';
import { Server, Mail, Database, Shield } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="flex items-center space-x-4">
          <Server className="h-8 w-8 text-blue-500" />
          <div>
            <h3 className="font-medium">Web Domains</h3>
            <p className="text-2xl font-bold">5</p>
          </div>
        </Card>
        
        <Card className="flex items-center space-x-4">
          <Mail className="h-8 w-8 text-green-500" />
          <div>
            <h3 className="font-medium">Mail Accounts</h3>
            <p className="text-2xl font-bold">12</p>
          </div>
        </Card>
        
        <Card className="flex items-center space-x-4">
          <Database className="h-8 w-8 text-purple-500" />
          <div>
            <h3 className="font-medium">Databases</h3>
            <p className="text-2xl font-bold">8</p>
          </div>
        </Card>
        
        <Card className="flex items-center space-x-4">
          <Shield className="h-8 w-8 text-red-500" />
          <div>
            <h3 className="font-medium">Security</h3>
            <p className="text-sm text-green-500">Protected</p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h2 className="text-lg font-semibold mb-4">System Status</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>CPU Usage</span>
              <span className="font-medium">25%</span>
            </div>
            <div className="flex justify-between">
              <span>Memory Usage</span>
              <span className="font-medium">2.1GB / 8GB</span>
            </div>
            <div className="flex justify-between">
              <span>Disk Usage</span>
              <span className="font-medium">120GB / 500GB</span>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-3">
            <div className="flex items-center text-sm">
              <span className="w-32 text-gray-500">2 mins ago</span>
              <span>Database backup completed</span>
            </div>
            <div className="flex items-center text-sm">
              <span className="w-32 text-gray-500">1 hour ago</span>
              <span>SSL certificate renewed</span>
            </div>
            <div className="flex items-center text-sm">
              <span className="w-32 text-gray-500">3 hours ago</span>
              <span>New mail account created</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}