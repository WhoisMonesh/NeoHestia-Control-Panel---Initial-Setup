export interface SystemSettings {
  hostname: string;
  timezone: string;
  language: string;
  backupEnabled: boolean;
  backupFrequency: 'daily' | 'weekly' | 'monthly';
  updatePolicy: 'automatic' | 'manual';
}

export interface NotificationSettings {
  email: boolean;
  security: boolean;
  updates: boolean;
  backups: boolean;
}