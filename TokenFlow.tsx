import React from 'react';
import { Card } from '../../components/ui/Card';
import { TrendingUp, ArrowRight, Wallet, Users, Database } from 'lucide-react';
import { SlideUp } from '@/src/components/animations';

export function TokenFlow() {
  return (
    <SlideUp delay={0.1}>
      <Card className="p-6 border-gray-800/50 bg-gray-900/50 min-h-[500px] flex flex-col">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-aura-500" />
          Interactive Token Flow Map
        </h2>
        
        <div className="flex-1 border border-gray-800 rounded-xl bg-gray-950/50 flex flex-col items-center justify-center p-8 relative">
          
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
             <div className="w-full h-full max-w-2xl max-h-96 border border-dashed border-white rounded-full animate-[spin_60s_linear_infinite]"></div>
          </div>

          <div className="grid grid-cols-3 gap-8 w-full max-w-4xl z-10">
            {/* Left Column */}
            <div className="flex flex-col gap-12">
              <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 text-center relative group">
                <Wallet className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <h3 className="text-white font-medium">Stakers</h3>
                <p className="text-sm text-gray-400">12,450 Wallets</p>
                <div className="absolute right-0 top-1/2 translate-x-full -translate-y-1/2 flex items-center">
                  <div className="h-0.5 w-16 bg-gradient-to-r from-blue-500/50 to-aura-500/50"></div>
                  <ArrowRight className="w-4 h-4 text-aura-500/50 -ml-2" />
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 text-center relative group">
                <Users className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <h3 className="text-white font-medium">DAO Treasury</h3>
                <p className="text-sm text-gray-400">$15.2M Assets</p>
                <div className="absolute right-0 top-1/2 translate-x-full -translate-y-1/2 flex items-center">
                  <div className="h-0.5 w-16 bg-gradient-to-r from-green-500/50 to-aura-500/50"></div>
                  <ArrowRight className="w-4 h-4 text-aura-500/50 -ml-2" />
                </div>
              </div>
            </div>

            {/* Middle Column */}
            <div className="flex items-center justify-center">
               <div className="bg-aura-900/50 p-8 rounded-full border border-aura-500/50 shadow-[0_0_50px_rgba(14,165,233,0.2)] text-center relative">
                 <Database className="w-12 h-12 text-aura-500 mx-auto mb-2" />
                 <h3 className="text-white font-bold text-lg">CoreDeFi Protocol</h3>
                 <p className="text-sm text-aura-300">Central Router</p>
               </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-12">
              <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 text-center relative group">
                <div className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 flex items-center">
                  <div className="h-0.5 w-16 bg-gradient-to-l from-purple-500/50 to-aura-500/50"></div>
                  <ArrowRight className="w-4 h-4 text-purple-500/50 ml-2 rotate-180" />
                </div>
                <Database className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <h3 className="text-white font-medium">Liquidity Pools</h3>
                <p className="text-sm text-gray-400">$8.4M TVL</p>
              </div>

              <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 text-center relative group">
                 <div className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 flex items-center">
                  <div className="h-0.5 w-16 bg-gradient-to-l from-orange-500/50 to-aura-500/50"></div>
                  <ArrowRight className="w-4 h-4 text-orange-500/50 ml-2 rotate-180" />
                </div>
                <Database className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <h3 className="text-white font-medium">Burn Wallet</h3>
                <p className="text-sm text-gray-400">50M AURAX</p>
              </div>
            </div>

          </div>
        </div>
      </Card>
    </SlideUp>
  );
}
