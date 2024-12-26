import { useState } from 'react';
import { Plus } from 'lucide-react';
import { FirewallRuleCard } from './components/firewall-rule-card';
import { SecurityAlertCard } from './components/security-alert-card';
import { SecurityMetrics } from './components/security-metrics';
import { AddRuleModal } from './components/add-rule-modal';
import type { FirewallRule, SecurityAlert } from './types';

export function Security() {
  const [showAddRule, setShowAddRule] = useState(false);
  const [rules, setRules] = useState<FirewallRule[]>([
    {
      id: '1',
      type: 'deny',
      ip: '192.168.1.100',
      port: '80,443',
      comment: 'Blocked suspicious activity',
      status: 'active',
    },
    {
      id: '2',
      type: 'allow',
      ip: '10.0.0.0/24',
      port: 'all',
      comment: 'Internal network',
      status: 'active',
    },
  ]);

  const [alerts, setAlerts] = useState<SecurityAlert[]>([
    {
      id: '1',
      type: 'brute_force',
      severity: 'high',
      message: 'Multiple failed login attempts detected',
      timestamp: '2024-03-15 14:30:00',
    },
    {
      id: '2',
      type: 'system_update',
      severity: 'low',
      message: 'Security updates available',
      timestamp: '2024-03-15 12:00:00',
    },
  ]);

  const handleToggleRule = (id: string) => {
    setRules(rules.map(rule => 
      rule.id === id 
        ? { ...rule, status: rule.status === 'active' ? 'disabled' : 'active' }
        : rule
    ));
  };

  const handleDeleteRule = (id: string) => {
    setRules(rules.filter(rule => rule.id !== id));
  };

  const handleDismissAlert = (id: string) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  const handleAddRule = (newRule: Omit<FirewallRule, 'id' | 'status'>) => {
    const rule: FirewallRule = {
      ...newRule,
      id: Date.now().toString(),
      status: 'active',
    };
    setRules([rule, ...rules]);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Security</h1>
        <button 
          onClick={() => setShowAddRule(true)}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Rule
        </button>
      </div>

      <SecurityMetrics />

      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Firewall Rules</h2>
          {rules.map((rule) => (
            <FirewallRuleCard
              key={rule.id}
              rule={rule}
              onToggle={handleToggleRule}
              onDelete={handleDeleteRule}
            />
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Security Alerts</h2>
          {alerts.map((alert) => (
            <SecurityAlertCard
              key={alert.id}
              alert={alert}
              onDismiss={handleDismissAlert}
            />
          ))}
        </div>
      </div>

      {showAddRule && (
        <AddRuleModal
          onClose={() => setShowAddRule(false)}
          onAdd={handleAddRule}
        />
      )}
    </div>
  );
}