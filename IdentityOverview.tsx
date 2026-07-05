import React from 'react';
import { Star, Vote, Lock, GraduationCap, Users, ShieldCheck, Activity, CheckCircle2 } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';
import { motion } from 'motion/react';

const metrics = [
  { label: 'Reputation Score', value: '8,420', icon: Star, color: 'text-yellow-400' },
  { label: 'Governance Level', value: 'Council', icon: Vote, color: 'text-cyan-400' },
  { label: 'Staking Tier', value: 'Diamond', icon: Lock, color: 'text-blue-400' },
  { label: 'Learning Progress', value: '85%', icon: GraduationCap, color: 'text-emerald-400' },
  { label: 'Referral Rank', value: 'Top 5%', icon: Users, color: 'text-purple-400' },
  { label: 'NFT Badges', value: '12', icon: ShieldCheck, color: 'text-fuchsia-400' },
  { label: 'Community Score', value: '94/100', icon: Activity, color: 'text-pink-400' },
  { label: 'Identity Status', value: 'Verified', icon: CheckCircle2, color: 'text-green-400' },
];

export function IdentityOverview() {
  return (
    <section className="py-12 relative z-10" id="identity-overview">
      <FadeIn>
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-2">Identity Overview</h2>
            <p className="text-gray-400">Your reputation and standing within the ecosystem.</p>
          </div>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          const isVerified = metric.value === 'Verified';
          return (
            <SlideUp key={metric.label} delay={index * 0.05} className="h-full">
              <Card className="h-full bg-aura-800/40 border-aura-700/50 hover:bg-aura-800/60 transition-colors group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:to-transparent transition-colors duration-500" />
                
                <div className="p-5 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <p className="text-sm font-medium text-gray-400">{metric.label}</p>
                    <div className="p-2 rounded-lg bg-aura-900/80 border border-aura-700/50 group-hover:border-purple-500/30 transition-colors">
                      <Icon className={`w-4 h-4 ${metric.color}`} />
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex items-baseline space-x-2">
                      <span className={`text-2xl font-display font-bold ${isVerified ? 'text-green-400' : 'text-white group-hover:' + metric.color} transition-colors duration-300`}>
                        {metric.value}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Mini sparkline placeholder effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-aura-900">
                  <motion.div 
                    className={`h-full opacity-50 ${metric.color.replace('text-', 'bg-')}`} 
                    initial={{ width: "20%" }}
                    whileInView={{ width: metric.value.includes('%') ? metric.value : "100%" }}
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
