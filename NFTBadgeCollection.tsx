import React from 'react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';
import { ShieldCheck, Award, Hexagon, Flame, Compass, Vote, Lock } from 'lucide-react';

const badges = [
  { title: 'Genesis Member', desc: 'Participated in the V1 launch event.', date: 'Oct 2023', icon: Hexagon, color: 'text-purple-400', rarity: 'Legendary' },
  { title: 'DAO Voter III', desc: 'Voted on 50+ governance proposals.', date: 'Dec 2023', icon: Vote, color: 'text-cyan-400', rarity: 'Rare' },
  { title: 'Diamond Hands', desc: 'Staked continuously for 12 months.', date: 'Jan 2024', icon: Lock, color: 'text-blue-400', rarity: 'Epic' },
  { title: 'Academy Scholar', desc: 'Completed all core learning paths.', date: 'Feb 2024', icon: Award, color: 'text-emerald-400', rarity: 'Uncommon' },
  { title: 'Community Catalyst', desc: 'Referred 10+ active members.', date: 'Mar 2024', icon: Flame, color: 'text-pink-400', rarity: 'Rare' },
  { title: 'Early Explorer', desc: 'Participated in the Testnet phase.', date: 'Aug 2023', icon: Compass, color: 'text-amber-400', rarity: 'Mythic' },
];

export function NFTBadgeCollection() {
  return (
    <FadeIn delay={0.2}>
      <Card className="bg-aura-800/30 border-aura-700/50 p-6">
        <div className="flex justify-between items-center mb-6">
           <h3 className="text-lg font-bold text-white flex items-center">
              <ShieldCheck className="w-5 h-5 mr-2 text-rose-400" /> NFT Badge Collection
           </h3>
           <span className="text-xs text-gray-400">12 Total</span>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
           {badges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                 <SlideUp key={idx} delay={0.1 + (idx * 0.05)}>
                    <div className="p-4 bg-aura-900/50 border border-aura-700/50 rounded-xl flex flex-col items-center text-center group hover:border-aura-500/50 hover:bg-aura-800/80 transition-all cursor-pointer relative overflow-hidden h-full">
                       <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 transition-colors" />
                       
                       <div className={`mb-3 p-3 rounded-full bg-aura-950 border border-aura-800 shadow-inner relative`}>
                          <div className={`absolute inset-0 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity ${badge.color.replace('text-', 'bg-')}`} />
                          <Icon className={`w-6 h-6 ${badge.color} relative z-10 drop-shadow-md`} />
                       </div>
                       
                       <span className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${
                          badge.rarity === 'Legendary' ? 'text-yellow-400' :
                          badge.rarity === 'Mythic' ? 'text-purple-400' :
                          badge.rarity === 'Epic' ? 'text-pink-400' :
                          badge.rarity === 'Rare' ? 'text-blue-400' : 'text-gray-400'
                       }`}>{badge.rarity}</span>
                       <h4 className="text-sm font-bold text-white mb-1 group-hover:text-rose-400 transition-colors">{badge.title}</h4>
                       <p className="text-xs text-gray-500 flex-1">{badge.desc}</p>
                       <span className="text-[9px] text-gray-600 mt-3 block">{badge.date}</span>
                    </div>
                 </SlideUp>
              );
           })}
        </div>
      </Card>
    </FadeIn>
  );
}
