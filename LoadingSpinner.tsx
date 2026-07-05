import React from 'react';
import { cn } from '@/src/lib/utils';

export function LoadingSpinner({ className, size = 'default' }: { className?: string, size?: 'sm' | 'default' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    default: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
  };

  return (
    <div className={cn('flex items-center justify-center', className)}>
      <div 
        className={cn(
          'border-aura-800 border-t-aura-accent rounded-full animate-spin',
          sizeClasses[size]
        )} 
      />
    </div>
  );
}
