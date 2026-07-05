import React from 'react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';
import { Sparkles, TrendingUp, TrendingDown, Activity, ShieldCheck } from 'lucide-react';

const insights = [
  {
    title: 'Treasury Optimization Opportunity',
    category: 'Treasury Health',
    content: 'Reallocating 15% of stablecoin reserves to the newly whitelisted institutional lending pool could increase annualized protocol revenue by an estimated $420,000 without significantly altering the risk profile.',
    confidence: 94,
    trend: 'up',
    icon: LandmarkIcon,
    color: 'amber'
  },
  {
    title: 'Staking Inflow Surge',
    category: 'Protocol Metrics',
    content: 'Detected a 34% increase in net staking inflows over the past 72 hours, correlating strongly with the passing of AIP-41. This suggests high community confidence in the upcoming ecosystem grants program.',
    confidence: 88,
    trend: 'up',
    icon: TrendingUp,
    color: 'emerald'
  },
  {
    title: 'Governance Participation Anomaly',
    category: 'Community Health',
    content: 'Current voting participation for AIP-43 is 22% below the 30-day average. Consider utilizing the DAO Rewards system to incentivize voter turnout before the timelock expires.',
    confidence: 91,
    trend: 'down',
    icon: Activity,
    color: 'cyan'
  },
  {
    title: 'Smart Contract Security',
    category: 'Risk Analysis',
    content: 'Continuous monitoring confirms all core modules are operating within expected parameters. No anomalous transactions or flash-loan vectors detected in the past 30 days.',
    confidence: 99,
    trend: 'neutral',
    icon: ShieldCheck,
    color: 'blue'
  }
];

function LandmarkIcon(props: any) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>;
}

export function AIInsights() {
  const getColorClasses = (color: string) => {
    switch(color) {
      case 'emerald': return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'amber': return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
      case 'cyan': return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20';
      case 'blue': return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
      default: return 'text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20';
    }
  };

  return (
    <section className="py-12 relative z-10" id="insights">
      <FadeIn>
        <div className="flex items-center space-x-3 mb-8">
          <div className="p-2 bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 rounded-lg">
            <Sparkles className="w-6 h-6 text-fuchsia-400" />
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold text-white">AI-Generated Insights</h2>
            <p className="text-gray-400">Automated observations and actionable recommendations.</p>
          </div>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          const colorClasses = getColorClasses(insight.color);
          
          return (
            <SlideUp key={insight.title} delay={index * 0.1}>
              <Card className="bg-aura-800/30 border-aura-700/50 p-6 h-full relative overflow-hidden group hover:bg-aura-800/50 transition-colors">
                
                <div className="flex justify-between items-start mb-4">
                   <div className="flex flex-col">
                      <span className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${getColorClasses(insight.color).split(' ')[0]}`}>{insight.category}</span>
                      <h3 className="text-lg font-bold text-white">{insight.title}</h3>
                   </div>
                   <div className={`p-2 rounded-lg border shrink-0 ${colorClasses}`}>
                      <Icon className="w-4 h-4" />
                   </div>
                </div>

                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                  {insight.content}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-aura-700/50 mt-auto">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">Confidence</span>
                    <div className="w-16 h-1.5 bg-aura-900 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${insight.color === 'emerald' ? 'bg-emerald-500' : insight.color === 'amber' ? 'bg-amber-500' : insight.color === 'cyan' ? 'bg-cyan-500' : 'bg-blue-500'}`} 
                        style={{ width: `${insight.confidence}%` }} 
                      />
                    </div>
                    <span className="text-xs font-bold text-white">{insight.confidence}%</span>
                  </div>
                  
                  <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <span>Just now</span>
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
