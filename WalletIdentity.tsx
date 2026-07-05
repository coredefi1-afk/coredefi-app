import React from 'react';
import { Card } from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';
import { FadeIn } from '@/src/components/animations';
import { Wallet, Copy, RefreshCcw, ShieldCheck } from 'lucide-react';

export function WalletIdentity() {
  return (
    <FadeIn delay={0.1}>
      <Card className="bg-aura-800/30 border-aura-700/50 p-6">
        <h3 className="text-lg font-bold text-white mb-6 flex items-center">
           <Wallet className="w-5 h-5 mr-2 text-blue-400" /> Wallet & Identity
        </h3>
        
        <div className="space-y-4">
           <div className="p-4 bg-aura-900/50 border border-aura-700/50 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                 <span className="text-xs text-gray-400">Connected Wallet</span>
                 <span className="text-xs text-emerald-400 flex items-center"><div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-1" /> Active</span>
              </div>
              <div className="flex items-center justify-between">
                 <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-400 to-pink-500" />
                    <div>
                       <p className="text-sm font-mono text-white">0x71C...3a2F</p>
                       <p className="text-xs text-gray-500">Ethereum Mainnet</p>
                    </div>
                 </div>
                 <button className="p-2 text-gray-400 hover:text-white transition-colors"><Copy className="w-4 h-4" /></button>
              </div>
           </div>
           
           <div className="p-4 bg-aura-900/50 border border-aura-700/50 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                 <span className="text-xs text-gray-400">Identity Verification</span>
                 <span className="text-xs text-green-400 font-bold">Level 2</span>
              </div>
              <p className="text-sm text-gray-300 mb-3">Basic KYC and Sybil resistance checks completed.</p>
              <div className="flex space-x-2">
                 <Button variant="secondary" className="flex-1 text-xs h-8">
                    <ShieldCheck className="w-3.5 h-3.5 mr-1" /> View Status
                 </Button>
              </div>
           </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-aura-700/50">
           <Button variant="ghost" className="w-full text-gray-400 hover:text-white">
              <RefreshCcw className="w-4 h-4 mr-2" /> Change Wallet
           </Button>
        </div>
      </Card>
    </FadeIn>
  );
}
