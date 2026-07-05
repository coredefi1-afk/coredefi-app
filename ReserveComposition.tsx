import React from 'react';
import { Coins, Flame, Layers, Lock, Landmark } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';

const reserves = [
  {
    title: 'Stablecoins',
    description: 'Capital preservation and operational runway.',
    icon: Landmark,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-400/10',
    borderColor: 'border-emerald-400/20',
    allocation: '65.0%',
    performance: '+4.2% APY',
    risk: 'Low Risk',
    status: 'Active'
  },
  {
    title: 'Native Assets',
    description: 'Protocol owned AURAXX for future growth.',
    icon: Coins,
    color: 'text-aura-accent',
    bgColor: 'bg-aura-accent/10',
    borderColor: 'border-aura-accent/20',
    allocation: '9.4%',
    performance: 'N/A',
    risk: 'Medium Risk',
    status: 'Locked'
  },
  {
    title: 'Liquidity Pools',
    description: 'Market making and trading fee generation.',
    icon: Layers,
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
    borderColor: 'border-blue-400/20',
    allocation: '15.6%',
    performance: '+18.5% APR',
    risk: 'Medium Risk',
    status: 'Active'
  },
  {
    title: 'Yield Strategies',
    description: 'Diversified yield generation in DeFi protocols.',
    icon: Flame,
    color: 'text-fuchsia-400',
    bgColor: 'bg-fuchsia-400/10',
    borderColor: 'border-fuchsia-400/20',
    allocation: '10.0%',
    performance: '+12.4% APY',
    risk: 'High Risk',
    status: 'Monitoring'
  }
];

export function ReserveComposition() {
  return (
    <section className="py-12 relative z-10" id="reserve-composition">
      <FadeIn>
        <div className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-2">Reserve Composition</h2>
          <p className="text-gray-400">Strategic breakdown of treasury capital deployment.</p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reserves.map((reserve, index) => {
          const Icon = reserve.icon;
          return (
            <SlideUp key={reserve.title} delay={index * 0.1}>
              <Card className="bg-aura-800/40 border-aura-700/50 hover:bg-aura-800/60 transition-all duration-300 h-full">
                <div className="p-6 flex flex-col h-full">
                  
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl ${reserve.bgColor} ${reserve.color} ${reserve.borderColor} border`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${reserve.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' : reserve.status === 'Locked' ? 'bg-aura-900 text-gray-400' : 'bg-amber-500/20 text-amber-400'}`}>
                      {reserve.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">{reserve.title}</h3>
                  <p className="text-sm text-gray-400 mb-6 flex-grow">{reserve.description}</p>

                  <div className="space-y-3 pt-4 border-t border-aura-700/50">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Allocation</span>
                      <span className="font-bold text-white">{reserve.allocation}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Performance</span>
                      <span className={`font-bold ${reserve.performance.startsWith('+') ? 'text-emerald-400' : 'text-gray-300'}`}>{reserve.performance}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Risk Profile</span>
                      <span className={`font-medium ${reserve.risk === 'Low Risk' ? 'text-emerald-400' : reserve.risk === 'Medium Risk' ? 'text-amber-400' : 'text-red-400'}`}>{reserve.risk}</span>
                    </div>
                  </div>

                </div>
              </Card>
            </SlideUp>
          );
        })}
      </div>
    </section>
  );
}
