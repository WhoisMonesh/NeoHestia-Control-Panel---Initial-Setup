export interface FirewallRule {
  id: string;
  type: 'allow' | 'deny';
  ip: string;
  port: string;
  comment: string;
  status: 'active' | 'disabled';
}

export interface SecurityAlert {
  id: string;
  type: 'brute_force' | 'suspicious_login' | 'system_update';
  severity: 'low' | 'medium' | 'high';
  message: string;
  timestamp: string;
}