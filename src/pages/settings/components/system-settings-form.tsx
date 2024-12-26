import { useState } from 'react';
import { Save } from 'lucide-react';
import { Card } from '@/components/ui/card';
import type { SystemSettings } from '../types';

interface SystemSettingsFormProps {
  settings: SystemSettings;
  onSave: (settings: SystemSettings) => void;
}

export function SystemSettingsForm({ settings, onSave }: SystemSettingsFormProps) {
  const [formData, setFormData] = useState(settings);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">System Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Hostname</label>
          <input
            type="text"
            value={formData.hostname}
            onChange={(e) => setFormData({ ...formData, hostname: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Timezone</label>
          <select
            value={formData.timezone}
            onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="UTC">UTC</option>
            <option value="America/New_York">Eastern Time</option>
            <option value="Europe/London">London</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Update Policy</label>
          <select
            value={formData.updatePolicy}
            onChange={(e) => setFormData({ ...formData, updatePolicy: e.target.value as 'automatic' | 'manual' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="automatic">Automatic</option>
            <option value="manual">Manual</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="backupEnabled"
            checked={formData.backupEnabled}
            onChange={(e) => setFormData({ ...formData, backupEnabled: e.target.checked })}
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="backupEnabled" className="text-sm font-medium text-gray-700">
            Enable Automatic Backups
          </label>
        </div>

        <button
          type="submit"
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </button>
      </form>
    </Card>
  );
}