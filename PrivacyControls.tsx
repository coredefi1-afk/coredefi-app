import React from 'react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn } from '@/src/components/animations';
import { Eye, Bell, Shield, Download } from 'lucide-react';

export function PrivacyControls() {
  return (
    <FadeIn delay={0.2}>
      <Card className="bg-aura-800/30 border-aura-700/50 p-6">
        <h3 className="text-lg font-bold text-white mb-6 flex items-center">
           <Eye className="w-5 h-5 mr-2 text-gray-400" /> Privacy Controls
        </h3>
        
        <div className="space-y-5">
           <div className="flex items-center justify-between">
              <div>
                 <p className="text-sm font-medium text-white">Public Profile</p>
                 <p className="text-xs text-gray-500">Allow others to view your profile.</p>
              </div>
              <div className="w-10 h-5 bg-purple-500 rounded-full relative cursor-pointer">
                 <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full" />
              </div>
           </div>
           
           <div className="flex items-center justify-between">
              <div>
                 <p className="text-sm font-medium text-white">Portfolio Visibility</p>
                 <p className="text-xs text-gray-500">Show balances and staking tiers.</p>
              </div>
              <div className="w-10 h-5 bg-aura-900 border border-aura-700/50 rounded-full relative cursor-pointer">
                 <div className="absolute left-1 top-1 w-3 h-3 bg-gray-500 rounded-full" />
              </div>
           </div>
           
           <div className="flex items-center justify-between">
              <div>
                 <p className="text-sm font-medium text-white">Activity Sharing</p>
                 <p className="text-xs text-gray-500">Share timeline events publicly.</p>
              </div>
              <div className="w-10 h-5 bg-purple-500 rounded-full relative cursor-pointer">
                 <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full" />
              </div>
           </div>
           
           <div className="pt-4 border-t border-aura-700/50 mt-2">
              <button className="flex items-center text-sm text-gray-300 hover:text-white transition-colors">
                 <Download className="w-4 h-4 mr-2" /> Request Data Export
              </button>
           </div>
        </div>
      </Card>
    </FadeIn>
  );
}
