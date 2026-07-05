import React from 'react';
import { Target, Shuffle, Sprout, Network } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';

const strategies = [
  {
    icon: Target,
    title: 'Treasury Objectives',
    description: 'The primary goal is to ensure long-term protocol sustainability, provide deep liquidity for ecosystem assets, and fund ongoing development through strategic grants.',
    color: 'text-aura-accent',
    bg: 'bg-aura-accent/10'
  },
  {
    icon: Shuffle,
    title: 'Diversification Strategy',
    description: 'Mitigating risk by maintaining a high ratio of decentralized stablecoins (USDC, DAI) while strategically holding productive yield-bearing assets (WETH, LSTs).',
    color: 'text-aura-purple',
    bg: 'bg-aura-purple/10'
  },
  {
    icon: Network,
    title: 'Capital Allocation',
    description: 'Capital is dynamically allocated across whitelisted DeFi protocols to generate yield, which is then used to buy back and burn AURAXX or fund the DAO reward pool.',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10'
  },
  {
    icon: Sprout,
    title: 'Sustainability Model',
    description: 'Strict adherence to a minimum 100% backing ratio ensures that all circulating AURAXX remains fully collateralized, preventing inflation and preserving value.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10'
  }
];

export function TreasuryStrategy() {
  return (
    <section className="py-12 relative z-10" id="treasury-strategy">
      <FadeIn>
        <div className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-2">Treasury Strategy</h2>
          <p className="text-gray-400">The core principles governing CoreDeFi reserve management.</p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {strategies.map((strategy, index) => {
          const Icon = strategy.icon;
          return (
            <SlideUp key={strategy.title} delay={index * 0.1}>
              <Card className="bg-aura-800/30 border-aura-700/50 p-6 md:p-8 h-full flex flex-col group hover:bg-aura-800/50 transition-colors duration-300">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl ${strategy.bg} ${strategy.color} shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-aura-accent transition-colors">{strategy.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {strategy.description}
                    </p>
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
