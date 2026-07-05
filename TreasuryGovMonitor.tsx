import React from 'react';
import { Card } from '../../components/ui/Card';
import { SlideUp } from '@/src/components/animations';
import { 
  Landmark, ArrowRightLeft, TrendingUp, PieChart, 
  Vote, FileText, Users, Activity
} from 'lucide-react';

export function TreasuryGovMonitor() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Treasury Monitor */}
        <div className="space-y-6">
          <SlideUp delay={0.1}>
            <div className="flex items-center gap-2 mb-4">
              <Landmark className="w-6 h-6 text-aura-500" />
              <h2 className="text-2xl font-bold text-white">Treasury Monitor</h2>
            </div>
            
            <Card className="p-6 border-gray-800/50 bg-gray-900/50 min-h-[300px] flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-aura-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <PieChart className="w-16 h-16 text-aura-500 mb-4 opacity-50 relative z-10" />
              <h3 className="text-lg font-bold text-white relative z-10">Asset Allocation</h3>
              <p className="text-gray-400 text-sm mt-2 text-center max-w-sm relative z-10">Animated chart displaying Treasury Reserve Health, Stablecoin Ratio, and Native Token Holdings.</p>
            </Card>
          </SlideUp>

          <SlideUp delay={0.2}>
            <Card className="p-6 border-gray-800/50 bg-gray-900/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <ArrowRightLeft className="w-4 h-4 text-gray-400" /> Recent Cashflow
              </h3>
              <div className="space-y-3">
                {[
                  { action: 'Protocol Fee Revenue', amount: '+$45,000 USDC', type: 'in', time: '2h ago' },
                  { action: 'Dev Grant Payout', amount: '-$15,000 USDC', type: 'out', time: '1d ago' },
                  { action: 'DEX Liquidity Provision', amount: '-100 ETH', type: 'out', time: '3d ago' },
                ].map((flow, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-gray-950/50 rounded-lg border border-gray-800">
                    <div>
                      <span className="text-white text-sm block">{flow.action}</span>
                      <span className="text-xs text-gray-500">{flow.time}</span>
                    </div>
                    <span className={`font-bold ${flow.type === 'in' ? 'text-green-400' : 'text-red-400'}`}>
                      {flow.amount}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </SlideUp>
        </div>

        {/* Governance Monitor */}
        <div className="space-y-6">
          <SlideUp delay={0.3}>
            <div className="flex items-center gap-2 mb-4">
              <Vote className="w-6 h-6 text-purple-500" />
              <h2 className="text-2xl font-bold text-white">Governance Monitor</h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 border-gray-800/50 bg-gray-900/50">
                <h3 className="text-gray-400 text-xs mb-1">Active Proposals</h3>
                <div className="text-xl font-bold text-white">3</div>
              </Card>
              <Card className="p-4 border-gray-800/50 bg-gray-900/50">
                <h3 className="text-gray-400 text-xs mb-1">Participation Rate</h3>
                <div className="text-xl font-bold text-white">42.5%</div>
              </Card>
            </div>
          </SlideUp>

          <SlideUp delay={0.4}>
            <Card className="p-6 border-gray-800/50 bg-gray-900/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 text-gray-400" /> Active Proposals
              </h3>
              <div className="space-y-4">
                {[
                  { id: 'AIP-42', title: 'Increase DEX Liquidity Provision by 15%', votesFor: 75, votesAgainst: 25, endsIn: '2 days' },
                  { id: 'AIP-43', title: 'Integrate Base Network for Staking', votesFor: 92, votesAgainst: 8, endsIn: '5 days' },
                ].map((prop, i) => (
                  <div key={i} className="p-4 rounded-xl bg-gray-950/50 border border-gray-800">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">{prop.id}</span>
                      <span className="text-xs text-gray-500">Ends in {prop.endsIn}</span>
                    </div>
                    <h4 className="text-white font-medium text-sm mb-3">{prop.title}</h4>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-green-400">For: {prop.votesFor}%</span>
                        <span className="text-red-400">Against: {prop.votesAgainst}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-red-500/20 rounded-full overflow-hidden flex">
                        <div className="h-full bg-green-500" style={{ width: `${prop.votesFor}%` }} />
                        <div className="h-full bg-red-500" style={{ width: `${prop.votesAgainst}%` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </SlideUp>

          <SlideUp delay={0.5}>
            <Card className="p-6 border-gray-800/50 bg-gray-900/50 min-h-[150px] flex flex-col items-center justify-center text-center">
              <Activity className="w-8 h-8 text-purple-500 mb-2 opacity-50" />
              <h3 className="text-sm font-bold text-white">Delegate Activity</h3>
              <p className="text-xs text-gray-400 mt-1 max-w-xs">Chart showing voting trends and top delegate influence across recent epochs.</p>
            </Card>
          </SlideUp>
        </div>
      </div>
    </div>
  );
}
