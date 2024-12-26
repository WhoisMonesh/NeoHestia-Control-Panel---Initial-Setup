import { DatabaseCard } from './database-card';
import type { Database } from '../types';

interface DatabaseListProps {
  databases: Database[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export function DatabaseList({ databases, onEdit, onDelete }: DatabaseListProps) {
  return (
    <div className="grid gap-4">
      {databases.map((database) => (
        <DatabaseCard
          key={database.id}
          database={database}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}