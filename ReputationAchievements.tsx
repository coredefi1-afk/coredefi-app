import React from 'react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';
import { Target, TrendingUp, Users, Vote, Lock } from 'lucide-react';
import { motion } from 'motion/react';

const reputations = [
  { label: 'Governance', score: 85, icon: Vote, color: 'text-cyan-400', bg: 'bg-cyan-500' },
  { label: 'Community', score: 92, icon: Users, color: 'text-pink-400', bg: 'bg-pink-500' },
  { label: 'Learning', score: 65, icon: Target, color: 'text-emerald-400', bg: 'bg-emerald-500' },
  { label: 'Staking', score: 98, icon: Lock, color: 'text-blue-400', bg: 'bg-blue-500' },
];

export function ReputationAchievements() {
  return (
    <FadeIn delay={0.1}>
      <Card className="bg-aura-800/30 border-aura-700/50 p-6">
        <div className="flex justify-between items-center mb-6">
           <h3 className="text-lg font-bold text-white flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-purple-400" /> Reputation Matrix
           </h3>
           <span className="text-xs font-bold bg-purple-500/20 text-purple-400 px-2 py-1 rounded">Rank: Elite</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {reputations.map((rep, idx) => {
              const Icon = rep.icon;
              return (
                 <SlideUp key={idx} delay={0.1 + (idx * 0.05)}>
                    <div className="p-4 bg-aura-900/50 border border-aura-700/50 rounded-xl hover:border-aura-600 transition-colors">
                       <div className="flex items-center space-x-3 mb-3">
                          <div className={`p-2 rounded-lg bg-aura-800 border border-aura-700/50`}>
                             <Icon className={`w-4 h-4 ${rep.color}`} />
                          </div>
                          <div>
                             <h4 className="text-sm font-bold text-white">{rep.label}</h4>
                             <p className="text-xs text-gray-400">Level {Math.floor(rep.score / 10)}</p>
                          </div>
                          <div className="ml-auto text-lg font-display font-bold text-white">{rep.score}</div>
                       </div>
                       
                       <div className="w-full h-1.5 bg-aura-800 rounded-full overflow-hidden">
                          <motion.div 
                             className={`h-full ${rep.bg}`}
                             initial={{ width: 0 }}
                             whileInView={{ width: `${rep.score}%` }}
                             viewport={{ once: true }}
                             transition={{ duration: 1, delay: 0.2 }}
                          />
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
