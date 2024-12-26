import { Card } from '@/components/ui/card';
import { Shield, Lock, RefreshCw } from 'lucide-react';

interface SecurityMetric {
  icon: typeof Shield;
  title: string;
  value: string;
  status: 'good' | 'warning' | 'error';
}

const metrics: SecurityMetric[] = [
  {
    icon: Shield,
    title: 'Firewall',
    value: 'Active',
    status: 'good',
  },
  {
    icon: Lock,
    title: 'SSL/TLS',
    value: 'All certificates valid',
    status: 'good',
  },
  {
    icon: RefreshCw,
    title: 'Updates',
    value: 'System up to date',
    status: 'good',
  },
];

export function SecurityMetrics() {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Security Status</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          const bgColor = metric.status === 'good' ? 'bg-green-50' : 
                         metric.status === 'warning' ? 'bg-yellow-50' : 
                         'bg-red-50';
          const textColor = metric.status === 'good' ? 'text-green-700' :
                          metric.status === 'warning' ? 'text-yellow-700' :
                          'text-red-700';

          return (
            <div key={metric.title} className={`p-4 rounded-lg ${bgColor}`}>
              <div className="flex items-center space-x-2">
                <Icon className={`w-5 h-5 ${textColor}`} />
                <div className={`font-medium ${textColor}`}>{metric.title}</div>
              </div>
              <div className={`text-sm mt-1 ${textColor}`}>{metric.value}</div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}