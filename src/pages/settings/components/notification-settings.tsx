import { useState } from 'react';
import { Bell } from 'lucide-react';
import { Card } from '@/components/ui/card';
import type { NotificationSettings } from '../types';

interface NotificationSettingsProps {
  settings: NotificationSettings;
  onSave: (settings: NotificationSettings) => void;
}

export function NotificationSettings({ settings, onSave }: NotificationSettingsProps) {
  const [formData, setFormData] = useState(settings);

  const handleChange = (key: keyof NotificationSettings) => {
    const newSettings = { ...formData, [key]: !formData[key] };
    setFormData(newSettings);
    onSave(newSettings);
  };

  return (
    <Card className="p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Bell className="w-5 h-5 text-blue-500" />
        <h2 className="text-lg font-semibold">Notification Settings</h2>
      </div>

      <div className="space-y-4">
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700 capitalize">
              {key} Notifications
            </label>
            <div className="relative inline-block w-10 mr-2 align-middle select-none">
              <input
                type="checkbox"
                checked={value}
                onChange={() => handleChange(key as keyof NotificationSettings)}
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label className={`toggle-label block overflow-hidden h-6 rounded-full ${
                value ? 'bg-blue-500' : 'bg-gray-300'
              }`} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}