import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { SlideUp } from '@/src/components/animations';
import { 
  Wallet, Search, ShieldCheck, Activity, ArrowRight, Star, 
  History, Coins, Vote, Network
} from 'lucide-react';

export function WalletIntel() {
  const [query, setQuery] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    if (!query) return;
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setHasSearched(true);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <SlideUp delay={0.1}>
        <Card className="p-8 border-gray-800/50 bg-gray-900/50 text-center flex flex-col items-center">
          <Wallet className="w-12 h-12 text-aura-500 mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Wallet Intelligence</h2>
          <p className="text-gray-400 max-w-md mx-auto mb-6">Analyze on-chain behavior, risk profile, and ecosystem participation for any wallet address.</p>
          
          <div className="w-full max-w-xl flex relative">
            <input 
              type="text" 
              placeholder="Enter Wallet Address (0x...)" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-gray-950 border border-gray-800 rounded-l-xl px-4 py-3 text-white focus:outline-none focus:border-aura-500 transition-colors"
            />
            <Button 
              variant="default" 
              className="rounded-l-none px-6" 
              onClick={handleSearch}
              disabled={analyzing || !query}
            >
              {analyzing ? <Activity className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
            </Button>
          </div>
        </Card>
      </SlideUp>

      {hasSearched && !analyzing && (
        <div className="space-y-6">
          <SlideUp delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="p-4 border-gray-800/50 bg-gray-900/50 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center border border-green-500/30">
                  <ShieldCheck className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-xs">Risk Profile</h4>
                  <span className="text-white font-bold">Low Risk (98)</span>
                </div>
              </Card>
              <Card className="p-4 border-gray-800/50 bg-gray-900/50 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-aura-500/20 flex items-center justify-center border border-aura-500/30">
                  <Star className="w-5 h-5 text-aura-400" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-xs">CoreDeFi Tier</h4>
                  <span className="text-white font-bold">Gold Member</span>
                </div>
              </Card>
              <Card className="p-4 border-gray-800/50 bg-gray-900/50 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                  <History className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-xs">Wallet Age</h4>
                  <span className="text-white font-bold">425 Days</span>
                </div>
              </Card>
              <Card className="p-4 border-gray-800/50 bg-gray-900/50 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                  <Network className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-xs">Referral Network</h4>
                  <span className="text-white font-bold">14 Active</span>
                </div>
              </Card>
            </div>
          </SlideUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SlideUp delay={0.2}>
              <Card className="p-6 border-gray-800/50 bg-gray-900/50 h-full">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Coins className="w-5 h-5 text-aura-500" /> Ecosystem Holdings
                </h3>
                <div className="space-y-3">
                  {[
                    { token: 'AURAX', amount: '25,400', value: '$12,700' },
                    { token: 'sAURAX', amount: '10,000', value: '$5,000' },
                    { token: 'USDC', amount: '4,500', value: '$4,500' },
                  ].map((asset, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-gray-950/50 rounded-lg border border-gray-800">
                      <span className="text-white font-medium">{asset.token}</span>
                      <div className="text-right">
                        <div className="text-white">{asset.amount}</div>
                        <div className="text-xs text-gray-500">{asset.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </SlideUp>

            <SlideUp delay={0.3}>
              <Card className="p-6 border-gray-800/50 bg-gray-900/50 h-full">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Vote className="w-5 h-5 text-purple-500" /> Governance & Staking
                </h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-purple-900/10 border border-purple-500/20">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Total Staked</span>
                      <span className="text-white font-medium">10,000 AURAX</span>
                    </div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Voting Power</span>
                      <span className="text-white font-medium">25,000 vAURAX</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Proposals Voted</span>
                      <span className="text-white font-medium">12 / 15</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Recent Activity</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Voted YES on Prop #42</span>
                        <span className="text-gray-500">2d ago</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-green-400">Claimed 450 AURAXX Reward</span>
                        <span className="text-gray-500">5d ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </SlideUp>
          </div>
        </div>
      )}
    </div>
  );
}
