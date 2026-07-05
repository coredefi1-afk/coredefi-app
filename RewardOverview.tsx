import React from 'react';
import { Shield, Vote, FileText, Gift, Clock, Award, Trophy, Activity } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';
import { motion } from 'motion/react';

const metrics = [
  { label: 'Governance Score', value: '98', symbol: '/100', icon: Shield, color: 'text-aura-accent' },
  { label: 'Votes Cast', value: '42', icon: Vote, color: 'text-blue-400' },
  { label: 'Active Proposals', value: '3', icon: FileText, color: 'text-fuchsia-400' },
  { label: 'Rewards Earned', value: '3,250', symbol: 'AURAXX', icon: Gift, color: 'text-emerald-400' },
  { label: 'Pending Rewards', value: '125', symbol: 'AURAXX', icon: Clock, color: 'text-orange-400' },
  { label: 'Reputation Level', value: 'Elite', icon: Award, color: 'text-aura-purple' },
  { label: 'Community Rank', value: 'Top 5%', icon: Trophy, color: 'text-yellow-400' },
  { label: 'Participation Rate', value: '92', symbol: '%', icon: Activity, color: 'text-cyan-400' },
];

export function RewardOverview() {
  return (
    <section className="py-12 relative z-10" id="reward-overview">
      <FadeIn>
        <div className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-2">DAO Rewards Overview</h2>
          <p className="text-gray-400">Track your governance participation and rewards.</p>
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
