import React from 'react';
import { AlertTriangle, TrendingDown, RefreshCcw, Activity } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';

const riskMetrics = [
  {
    title: 'Market Risk',
    score: 'Low',
    value: 15,
    max: 100,
    icon: TrendingDown,
    color: 'emerald',
    description: 'Exposure to volatile crypto assets is strictly limited.'
  },
  {
    title: 'Liquidity Risk',
    score: 'Minimal',
    value: 8,
    max: 100,
    icon: RefreshCcw,
    color: 'emerald',
    description: 'High availability of liquid stablecoins for immediate deployment.'
  },
  {
    title: 'Protocol Risk',
    score: 'Medium',
    value: 35,
    max: 100,
    icon: Activity,
    color: 'amber',
    description: 'Yield generation involves smart contract risk across DeFi protocols.'
  },
  {
    title: 'Diversification',
    score: 'High',
    value: 85,
    max: 100,
    icon: AlertTriangle,
    color: 'emerald', // Higher is better here, so keeping emerald for high score
    description: 'Capital is distributed across multiple assets and blockchains.'
  }
];

export function TreasuryRiskMonitor() {
  const getColorClasses = (color: string) => {
    switch(color) {
      case 'emerald': return { text: 'text-emerald-400', bg: 'bg-emerald-500', bgLight: 'bg-emerald-500/10' };
      case 'amber': return { text: 'text-amber-400', bg: 'bg-amber-500', bgLight: 'bg-amber-500/10' };
      case 'red': return { text: 'text-red-400', bg: 'bg-red-500', bgLight: 'bg-red-500/10' };
      default: return { text: 'text-aura-accent', bg: 'bg-aura-accent', bgLight: 'bg-aura-accent/10' };
    }
  };

  return (
    <section className="py-12 relative z-10" id="treasury-risk">
      <FadeIn>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-2">Institutional Risk Monitor</h2>
            <p className="text-gray-400">Continuous assessment of treasury exposure and security.</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center space-x-2 px-3 py-1.5 bg-aura-900/50 border border-aura-700/50 rounded-lg">
             <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
             <span className="text-sm font-medium text-gray-300">Stress Test: <span className="text-emerald-400">Passed</span></span>
          </div>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {riskMetrics.map((metric, index) => {
          const Icon = metric.icon;
          const colors = getColorClasses(metric.color);
          const percentage = (metric.value / metric.max) * 100;

          return (
            <SlideUp key={metric.title} delay={index * 0.1}>
              <Card className="bg-aura-800/40 border-aura-700/50 p-6 h-full relative overflow-hidden group hover:bg-aura-800/60 transition-colors">
                
                {/* Background glow based on risk */}
                <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full blur-[50px] opacity-20 pointer-events-none transition-opacity group-hover:opacity-40 ${colors.bg}`} />

                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className={`p-2 rounded-lg ${colors.bgLight} ${colors.text}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full border ${colors.bgLight} border-${metric.color}-500/20 ${colors.text}`}>
                    {metric.score}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 relative z-10">{metric.title}</h3>
                <p className="text-xs text-gray-400 mb-4 h-10 relative z-10">{metric.description}</p>

                <div className="relative z-10 mt-auto">
                  <div className="flex justify-between items-end mb-1">
                    <span className="text-2xl font-bold text-white">{metric.value}</span>
                    <span className="text-xs text-gray-500 mb-1">/ {metric.max}</span>
                  </div>
                  <div className="w-full bg-aura-900 rounded-full h-1.5 overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${colors.bg}`} 
                      style={{ width: `${percentage}%` }}
                    />
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
