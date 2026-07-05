import React from 'react';
import { motion } from 'motion/react';
import { Users, User, ArrowRight } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';

export function ReferralTree() {
  return (
    <section className="py-12 relative z-10" id="referral-tree">
      <FadeIn>
        <div className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-2">Network Expansion Tree</h2>
          <p className="text-gray-400">Visualize your impact on the ecosystem.</p>
        </div>
      </FadeIn>

      <SlideUp>
        <Card className="bg-aura-800/30 border-aura-700/50 overflow-hidden min-h-[500px] relative flex items-center justify-center p-8">
          
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
          
          <div className="relative w-full max-w-3xl flex items-center justify-between px-4 sm:px-12">
            
            {/* User Node (Center/Left) */}
            <div className="relative group z-20">
              <div className="absolute -inset-4 bg-aura-accent/20 rounded-full blur-xl group-hover:bg-aura-accent/30 transition-colors" />
              <div className="relative w-20 h-20 bg-aura-900 border-2 border-aura-accent rounded-full flex flex-col items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                <User className="w-8 h-8 text-white mb-1" />
                <span className="text-[10px] font-bold text-aura-accent">YOU</span>
              </div>
              
              {/* Tooltip */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-aura-900 border border-aura-700 p-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity w-32 text-center pointer-events-none z-30">
                <p className="text-xs text-gray-400">Network Size</p>
                <p className="text-sm font-bold text-white">142 Members</p>
              </div>
            </div>

            {/* Connection Lines & Animated Particles */}
            <div className="absolute left-[5rem] right-[10rem] h-full flex flex-col justify-around py-8 z-10 pointer-events-none">
                {[0, 1, 2].map((i) => (
                   <div key={i} className="relative w-full border-t border-dashed border-aura-700/50 my-10">
                      <motion.div
                        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-aura-accent blur-[1px]"
                        animate={{ left: ["0%", "100%"], opacity: [0, 1, 0] }}
                        transition={{ duration: 2 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                      />
                   </div>
                ))}
            </div>

            {/* Direct Referrals (Right) */}
            <div className="flex flex-col gap-12 z-20">
              {[
                { name: '0x4A...2f1', tier: 'Gold', referrals: 12, color: 'text-amber-400', border: 'border-amber-400' },
                { name: '0x9B...8c2', tier: 'Silver', referrals: 5, color: 'text-gray-300', border: 'border-gray-400' },
                { name: '0x1C...3e9', tier: 'Bronze', referrals: 1, color: 'text-orange-300', border: 'border-orange-400/60' },
              ].map((node, i) => (
                <div key={i} className="relative group flex items-center cursor-pointer">
                  <div className={`relative w-16 h-16 bg-aura-900 border-2 ${node.border} rounded-full flex flex-col items-center justify-center shadow-lg transition-transform hover:scale-110`}>
                    <Users className={`w-6 h-6 ${node.color}`} />
                  </div>
                  
                  {/* Plus more nodes indicator */}
                  {i === 1 && (
                     <div className="absolute left-full ml-4 flex items-center space-x-2 opacity-50">
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                        <div className="w-10 h-10 border border-dashed border-gray-500 rounded-full flex items-center justify-center text-xs text-gray-500">
                          +86
                        </div>
                     </div>
                  )}

                  {/* Tooltip */}
                  <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-aura-900 border border-aura-700 p-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity w-36 text-center pointer-events-none z-30">
                    <p className="text-xs text-gray-400">{node.name}</p>
                    <p className="text-sm font-bold text-white mt-1">{node.tier} Tier</p>
                    <p className="text-xs text-aura-accent mt-1">{node.referrals} Directs</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-6 right-6 flex items-center space-x-4 bg-aura-900/80 px-4 py-2 rounded-full border border-aura-700/50 backdrop-blur-md">
             <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-aura-accent mr-2" /><span className="text-xs text-gray-300">You</span></div>
             <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-amber-400 mr-2" /><span className="text-xs text-gray-300">Active</span></div>
             <div className="flex items-center"><div className="w-3 h-3 rounded-full border border-dashed border-gray-500 mr-2" /><span className="text-xs text-gray-300">Expanding</span></div>
          </div>
        </Card>
      </SlideUp>
    </section>
  );
}
