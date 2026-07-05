import React from 'react';
import { Card } from '../../components/ui/Card';
import { Activity, ShieldAlert, Heart, TrendingUp } from 'lucide-react';
import { SlideUp } from '@/src/components/animations';

export function EcosystemHealth() {
  return (
    <div className="space-y-6">
      <SlideUp delay={0.1}>
        <Card className="p-8 border-gray-800/50 bg-gradient-to-br from-gray-900 to-aura-900/20 text-center">
          <div className="inline-flex p-4 bg-aura-500/10 rounded-full mb-4">
            <Heart className="w-12 h-12 text-aura-500" />
          </div>
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Ecosystem Health Index</h2>
          <p className="text-5xl font-black text-white">92.4</p>
          <p className="text-aura-400 mt-2">Optimal conditions for protocol growth.</p>
        </Card>
      </SlideUp>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SlideUp delay={0.2}>
          <Card className="p-6 border-gray-800/50 bg-gray-900/50">
            <h3 className="text-gray-400 text-sm font-medium mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4 text-green-500" />
              Liquidity Health
            </h3>
            <div className="flex items-end gap-3">
              <span className="text-3xl font-bold text-white">Excellent</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">Sufficient depth across all major pairs.</p>
          </Card>
        </SlideUp>
        
        <SlideUp delay={0.3}>
          <Card className="p-6 border-gray-800/50 bg-gray-900/50">
            <h3 className="text-gray-400 text-sm font-medium mb-4 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-blue-500" />
              Governance Health
            </h3>
            <div className="flex items-end gap-3">
              <span className="text-3xl font-bold text-white">Strong</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">High participation rate in recent proposals.</p>
          </Card>
        </SlideUp>
        
        <SlideUp delay={0.4}>
          <Card className="p-6 border-gray-800/50 bg-gray-900/50">
            <h3 className="text-gray-400 text-sm font-medium mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-purple-500" />
              Network Growth
            </h3>
            <div className="flex items-end gap-3">
              <span className="text-3xl font-bold text-white">+14%</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">New wallets interacting with protocol (30d).</p>
          </Card>
        </SlideUp>
      </div>
    </div>
  );
}
