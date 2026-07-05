import React from 'react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';
import { History, Vote, Lock, Award, GraduationCap, Share2 } from 'lucide-react';
import { motion } from 'motion/react';

const activities = [
  { id: 1, type: 'governance', title: 'Voted on AIP-42', desc: 'Voted "For" to adjust treasury allocations.', time: '2 hours ago', icon: Vote, color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/30' },
  { id: 2, type: 'staking', title: 'Auto-compounded Rewards', desc: '142.5 AURAXX automatically restaked.', time: '1 day ago', icon: Lock, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' },
  { id: 3, type: 'learning', title: 'Completed Course', desc: 'DeFi Strategies Masterclass.', time: '3 days ago', icon: GraduationCap, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30' },
  { id: 4, type: 'badge', title: 'Earned Academy Scholar Badge', desc: 'Minted on-chain certificate.', time: '3 days ago', icon: Award, color: 'text-fuchsia-400', bg: 'bg-fuchsia-500/10', border: 'border-fuchsia-500/30' },
  { id: 5, type: 'social', title: 'Referral Joined', desc: 'User 0x99...2A signed up using your link.', time: '1 week ago', icon: Share2, color: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/30' },
];

export function ActivityTimeline() {
  return (
    <FadeIn delay={0.3}>
      <Card className="bg-aura-800/30 border-aura-700/50 p-6">
        <h3 className="text-lg font-bold text-white mb-6 flex items-center">
           <History className="w-5 h-5 mr-2 text-indigo-400" /> Activity Timeline
        </h3>
        
        <div className="relative pl-6 border-l border-aura-700/50 space-y-6">
           {activities.map((act, idx) => {
              const Icon = act.icon;
              return (
                 <SlideUp key={act.id} delay={0.1 + (idx * 0.1)}>
                    <div className="relative">
                       {/* Timeline Dot */}
                       <div className={`absolute -left-[35px] w-5 h-5 rounded-full ${act.bg} ${act.border} border flex items-center justify-center ring-4 ring-aura-900`}>
                          <Icon className={`w-3 h-3 ${act.color}`} />
                       </div>
                       
                       <div className="p-4 bg-aura-900/40 border border-aura-700/30 rounded-xl hover:bg-aura-900/60 transition-colors">
                          <div className="flex justify-between items-start mb-1">
                             <h4 className="text-sm font-bold text-white">{act.title}</h4>
                             <span className="text-xs text-gray-500 shrink-0">{act.time}</span>
                          </div>
                          <p className="text-xs text-gray-400 leading-relaxed">{act.desc}</p>
                       </div>
                    </div>
                 </SlideUp>
              );
           })}
        </div>
      </Card>
    </FadeIn>
  );
}
