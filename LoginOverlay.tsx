import React from 'react';
import { useAuth } from './AuthProvider';
import { Button } from './ui/Button';
import { Chrome, User as UserIcon } from 'lucide-react';
import { FadeIn } from './animations';

export function LoginOverlay() {
  const { user, signInWithGoogle, signInAsGuest } = useAuth();

  if (user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-aura-950/80 backdrop-blur-md">
      <FadeIn className="w-full max-w-md">
        <div className="bg-aura-900 border border-aura-700/50 p-8 rounded-2xl shadow-2xl flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-teal-500/20 rounded-full blur-[50px]" />
          
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 via-indigo-500 to-purple-500 p-[2px] mb-6 shadow-glow">
            <div className="w-full h-full bg-aura-950 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border-4 border-t-teal-400 border-r-indigo-400 border-b-purple-400 border-l-transparent animate-spin-slow"></div>
            </div>
          </div>

          <h2 className="text-3xl font-display font-bold text-white mb-2">Welcome to CoreDeFi</h2>
          <p className="text-gray-400 mb-8">Sign in to access your financial operating system.</p>

          <div className="w-full space-y-4 relative z-10">
            <Button 
              size="lg" 
              variant="secondary"
              className="w-full h-12"
              onClick={signInAsGuest}
            >
              <UserIcon className="w-5 h-5 mr-3" /> Continue as Guest
            </Button>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
