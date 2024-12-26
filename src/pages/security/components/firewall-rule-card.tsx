import { Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';
import type { FirewallRule } from '../types';

interface FirewallRuleCardProps {
  rule: FirewallRule;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function FirewallRuleCard({ rule, onToggle, onDelete }: FirewallRuleCardProps) {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Shield className={`w-6 h-6 ${rule.type === 'allow' ? 'text-green-500' : 'text-red-500'}`} />
          <div>
            <h3 className="font-medium">{rule.ip}</h3>
            <div className="flex space-x-2 text-sm text-gray-500">
              <span className={`px-2 py-0.5 rounded-full ${
                rule.type === 'allow' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {rule.type}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-gray-100">
                Port: {rule.port}
              </span>
            </div>
            {rule.comment && (
              <p className="text-sm text-gray-500 mt-1">{rule.comment}</p>
            )}
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => onToggle(rule.id)}
            className={`px-3 py-1 text-sm rounded ${
              rule.status === 'active'
                ? 'text-yellow-600 hover:bg-yellow-50'
                : 'text-green-600 hover:bg-green-50'
            }`}
          >
            {rule.status === 'active' ? 'Disable' : 'Enable'}
          </button>
          <button
            onClick={() => onDelete(rule.id)}
            className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </Card>
  );
}