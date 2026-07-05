import React from 'react';
import { Card } from '../../components/ui/Card';
import { ShieldCheck, Database, DollarSign, Activity } from 'lucide-react';
import { SlideUp } from '@/src/components/animations';

export function TreasuryBacking() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <SlideUp delay={0.1}>
        <Card className="p-6 border-gray-800/50 bg-gray-900/50">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-purple-500" />
            Treasury Metrics
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-gray-800/30 border border-gray-700/50 flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-400 mb-1">Backing Per Token</p>
                <p className="text-xl font-bold text-white">$14.50</p>
              </div>
              <DollarSign className="w-8 h-8 text-green-500 opacity-20" />
            </div>
            <div className="p-4 rounded-xl bg-gray-800/30 border border-gray-700/50 flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-400 mb-1">Reserve Ratio</p>
                <p className="text-xl font-bold text-white">45.2%</p>
              </div>
              <Database className="w-8 h-8 text-blue-500 opacity-20" />
            </div>
            <div className="p-4 rounded-xl bg-gray-800/30 border border-gray-700/50 flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-400 mb-1">Treasury Sustainability Score</p>
                <p className="text-xl font-bold text-white">A+</p>
              </div>
              <Activity className="w-8 h-8 text-aura-500 opacity-20" />
            </div>
          </div>
        </Card>
      </SlideUp>

      <SlideUp delay={0.2}>
        <Card className="p-6 border-gray-800/50 bg-gray-900/50">
          <h2 className="text-xl font-bold text-white mb-6">Asset Allocation</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Stablecoins (USDC, USDT)</span>
                <span className="text-white font-medium">60%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Native Assets (ETH, MATIC)</span>
                <span className="text-white font-medium">30%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '30%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Liquidity Coverage</span>
                <span className="text-white font-medium">10%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '10%' }}></div>
              </div>
            </div>
          </div>
        </Card>
      </SlideUp>
    </div>
  );
}
