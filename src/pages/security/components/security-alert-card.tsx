import { AlertTriangle, AlertCircle, RefreshCw } from 'lucide-react';
import { Card } from '@/components/ui/card';
import type { SecurityAlert } from '../types';

const alertIcons = {
  brute_force: AlertTriangle,
  suspicious_login: AlertCircle,
  system_update: RefreshCw,
};

interface SecurityAlertCardProps {
  alert: SecurityAlert;
  onDismiss: (id: string) => void;
}

export function SecurityAlertCard({ alert, onDismiss }: SecurityAlertCardProps) {
  const Icon = alertIcons[alert.type];

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Icon className={`w-6 h-6 ${
            alert.severity === 'high' ? 'text-red-500' :
            alert.severity === 'medium' ? 'text-yellow-500' :
            'text-blue-500'
          }`} />
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-medium">{alert.message}</h3>
              <span className={`px-2 py-0.5 text-xs rounded-full ${
                alert.severity === 'high' ? 'bg-red-100 text-red-700' :
                alert.severity === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                'bg-blue-100 text-blue-700'
              }`}>
                {alert.severity}
              </span>
            </div>
            <p className="text-sm text-gray-500">{alert.timestamp}</p>
          </div>
        </div>
        <button
          onClick={() => onDismiss(alert.id)}
          className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded"
        >
          Dismiss
        </button>
      </div>
    </Card>
  );
}