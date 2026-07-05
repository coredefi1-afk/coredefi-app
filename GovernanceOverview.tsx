import React from 'react';
import { FileText, CheckCircle, Vote, Landmark, Users, TrendingUp, Activity, MessageSquare } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';
import { motion } from 'motion/react';

const metrics = [
  { label: 'Active Proposals', value: '12', symbol: '', icon: FileText, color: 'text-blue-400' },
  { label: 'Passed Proposals', value: '148', symbol: '', icon: CheckCircle, color: 'text-emerald-400' },
  { label: 'Voting Participation', value: '72', symbol: '%', icon: Vote, color: 'text-aura-accent' },
  { label: 'Treasury Impact', value: '14.5', symbol: 'M', icon: Landmark, color: 'text-amber-400' },
  { label: 'Total Voters', value: '45,210', symbol: '', icon: Users, color: 'text-fuchsia-400' },
  { label: 'Proposal Success', value: '88', symbol: '%', icon: TrendingUp, color: 'text-cyan-400' },
  { label: 'Governance Health', value: '98', symbol: '/100', icon: Activity, color: 'text-emerald-400' },
  { label: 'Community Engagement', value: '15.4', symbol: 'K', icon: MessageSquare, color: 'text-aura-purple' },
];

export function GovernanceOverview() {
  return (
    <section className="py-12 relative z-10" id="governance-overview">
      <FadeIn>
        <div className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-2">Governance Overview</h2>
          <p className="text-gray-400">Key metrics of DAO participation and execution.</p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <SlideUp key={metric.label} delay={index * 0.05} className="h-full">
              <Card className="h-full bg-aura-800/40 border-aura-700/50 hover:bg-aura-800/60 transition-colors group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-aura-accent/0 to-aura-accent/0 group-hover:from-emerald-500/5 group-hover:to-transparent transition-colors duration-500" />
                
                <div className="p-5 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <p className="text-sm font-medium text-gray-400">{metric.label}</p>
                    <div className="p-2 rounded-lg bg-aura-900/80 border border-aura-700/50 group-hover:border-emerald-500/30 transition-colors">
                      <Icon className={`w-4 h-4 ${metric.color}`} />
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl font-display font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
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
