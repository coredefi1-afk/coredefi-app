import React from 'react';
import { Card } from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';
import { FadeIn, SlideUp } from '@/src/components/animations';
import { Shield, ShieldAlert, MonitorSmartphone, Key } from 'lucide-react';

export function SecurityCenter() {
  return (
    <FadeIn delay={0.4}>
      <Card className="bg-aura-800/30 border-aura-700/50 p-6">
        <div className="flex justify-between items-center mb-6">
           <h3 className="text-lg font-bold text-white flex items-center">
              <Shield className="w-5 h-5 mr-2 text-green-400" /> Security Center
           </h3>
           <div className="flex items-center text-sm font-bold text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
              Score: 100/100
           </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
           <SlideUp delay={0.1}>
              <div className="p-4 bg-aura-900/50 border border-aura-700/50 rounded-xl">
                 <div className="flex items-center space-x-3 mb-2">
                    <MonitorSmartphone className="w-5 h-5 text-gray-400" />
                    <h4 className="text-sm font-bold text-white">Active Devices</h4>
                 </div>
                 <p className="text-xs text-gray-400 mb-3">1 session currently active on this device.</p>
                 <Button variant="secondary" className="w-full text-xs h-8 text-rose-400 hover:text-rose-300 hover:bg-rose-500/10">
                    Logout All Devices
                 </Button>
              </div>
           </SlideUp>
           
           <SlideUp delay={0.2}>
              <div className="p-4 bg-aura-900/50 border border-aura-700/50 rounded-xl">
                 <div className="flex items-center space-x-3 mb-2">
                    <Key className="w-5 h-5 text-gray-400" />
                    <h4 className="text-sm font-bold text-white">Wallet Security</h4>
                 </div>
                 <p className="text-xs text-gray-400 mb-3">Hardware wallet connected.</p>
                 <Button variant="secondary" className="w-full text-xs h-8">
                    Review Security
                 </Button>
              </div>
           </SlideUp>
        </div>
        
        <div className="pt-4 border-t border-aura-700/50">
           <div className="flex items-start p-3 bg-rose-500/5 border border-rose-500/20 rounded-lg">
              <ShieldAlert className="w-5 h-5 text-rose-400 mr-3 mt-0.5 shrink-0" />
              <div>
                 <h5 className="text-sm font-bold text-rose-400">Security Alert History</h5>
                 <p className="text-xs text-gray-400 mt-1">No suspicious activity detected in the last 30 days. Your account and connected wallets are secure.</p>
              </div>
           </div>
        </div>
      </Card>
    </FadeIn>
  );
}
