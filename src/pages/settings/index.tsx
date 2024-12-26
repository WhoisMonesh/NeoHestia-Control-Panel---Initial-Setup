import { useState } from 'react';
import type { SystemSettings, NotificationSettings } from './types';
import { SystemSettingsForm } from './components/system-settings-form';
import { NotificationSettings as NotificationSettingsComponent } from './components/notification-settings';

export function Settings() {
  const [systemSettings] = useState<SystemSettings>({
    hostname: 'server.example.com',
    timezone: 'UTC',
    language: 'en',
    backupEnabled: true,
    backupFrequency: 'daily',
    updatePolicy: 'automatic',
  });

  const [notificationSettings] = useState<NotificationSettings>({
    email: true,
    security: true,
    updates: true,
    backups: true,
  });

  const handleSystemSettingsSave = (settings: SystemSettings) => {
    console.log('Save system settings:', settings);
  };

  const handleNotificationSettingsSave = (settings: NotificationSettings) => {
    console.log('Save notification settings:', settings);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>
      
      <div className="grid gap-6">
        <SystemSettingsForm
          settings={systemSettings}
          onSave={handleSystemSettingsSave}
        />
        
        <NotificationSettingsComponent
          settings={notificationSettings}
          onSave={handleNotificationSettingsSave}
        />
      </div>
    </div>
  );
}