import React from 'react';
import { cn } from '@/src/lib/utils';
import { AlertCircle } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  className?: string;
}

export function ErrorState({ title = 'Something went wrong', message, onRetry, className }: ErrorStateProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center p-8 text-center rounded-xl border border-red-500/20 bg-red-500/5', className)}>
      <AlertCircle className="w-12 h-12 text-red-500 mb-4 opacity-80" />
      <h3 className="font-display font-semibold text-lg text-red-400 mb-2">{title}</h3>
      {message && <p className="text-gray-400 text-sm mb-6 max-w-sm">{message}</p>}
      {onRetry && (
        <Button variant="outline" onClick={onRetry} className="border-red-500/30 text-red-400 hover:bg-red-500/10">
          Try Again
        </Button>
      )}
    </div>
  );
}
