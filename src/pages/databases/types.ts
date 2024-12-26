export interface Database {
  id: string;
  name: string;
  type: 'mysql' | 'postgresql';
  size: string;
  status: 'active' | 'suspended';
  user: string;
}