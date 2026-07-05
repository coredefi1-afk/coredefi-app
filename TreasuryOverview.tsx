import React from 'react';
import { DollarSign, ShieldCheck, TrendingUp, Coins, Droplets, PieChart, Activity, HeartPulse } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';
import { motion } from 'motion/react';

const metrics = [
  { label: 'Total Treasury Value', value: '42.5', symbol: 'M', icon: DollarSign, color: 'text-emerald-400' },
  { label: 'Reserve Ratio', value: '145', symbol: '%', icon: ShieldCheck, color: 'text-aura-accent' },
  { label: 'Treasury APY', value: '8.4', symbol: '%', icon: TrendingUp, color: 'text-fuchsia-400' },
  { label: 'Backing Per AURAXX', value: '1.24', symbol: '$', icon: Coins, color: 'text-blue-400' },
  { label: 'Liquidity Reserve', value: '12.8', symbol: 'M', icon: Droplets, color: 'text-cyan-400' },
  { label: 'Stablecoin Allocation', value: '65', symbol: '%', icon: PieChart, color: 'text-orange-400' },
  { label: 'Growth Rate (YoY)', value: '+24.5', symbol: '%', icon: Activity, color: 'text-emerald-400' },
  { label: 'Health Score', value: '98', symbol: '/100', icon: HeartPulse, color: 'text-aura-purple' },
];

export function TreasuryOverview() {
  return (
    <section className="py-12 relative z-10" id="treasury-overview">
      <FadeIn>
        <div className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-2">Treasury Overview</h2>
          <p className="text-gray-400">Real-time metrics on protocol reserves and financial health.</p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <SlideUp key={metric.label} delay={index * 0.05} className="h-full">
              <Card className="h-full bg-aura-800/40 border-aura-700/50 hover:bg-aura-800/60 transition-colors group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-aura-accent/0 to-aura-accent/0 group-hover:from-aura-accent/5 group-hover:to-transparent transition-colors duration-500" />
                
                <div className="p-5 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <p className="text-sm font-medium text-gray-400">{metric.label}</p>
                    <div className="p-2 rounded-lg bg-aura-900/80 border border-aura-700/50 group-hover:border-aura-accent/30 transition-colors">
                      <Icon className={`w-4 h-4 ${metric.color}`} />
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl font-display font-bold text-white group-hover:text-aura-accent transition-colors duration-300">
                        {metric.value}
                      </span>
                      {metric.symbol && (
                        <span className="text-sm font-medium text-gray-500">{metric.symbol}</span>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Mini sparkline placeholder effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-aura-900">
                  <motion.div 
                    className={`h-full opacity-50 ${metric.color.replace('text-', 'bg-')}`} 
                    initial={{ width: "20%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                  />
                </div>
              </Card>
            </SlideUp>
          );
        })}
      </div>
    </section>
  );
}
