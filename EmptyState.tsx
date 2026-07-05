import React from 'react';
import { cn } from '@/src/lib/utils';
import { LayoutDashboard } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: React.ElementType;
  action?: React.ReactNode;
  className?: string;
}

export function EmptyState({ 
  title = 'No data available', 
  description = 'There is currently nothing to show here.', 
  icon: Icon = LayoutDashboard,
  action,
  className 
}: EmptyStateProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center p-12 text-center rounded-xl border border-dashed border-border bg-aura-800/20', className)}>
      <div className="w-16 h-16 rounded-full bg-aura-800/50 flex items-center justify-center mb-6 border border-border">
        <Icon className="w-8 h-8 text-gray-500" />
      </div>
      <h3 className="font-display font-semibold text-lg text-gray-200 mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-6 max-w-sm">{description}</p>
      {action && <div>{action}</div>}
    </div>
  );
}
