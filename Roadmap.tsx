import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Circle, Rocket } from 'lucide-react';
import { FadeIn, SlideUp } from '@/src/components/animations';

const milestones = [
  { stage: 'Foundation', description: 'Core protocol architecture & smart contracts.', status: 'completed' },
  { stage: 'Development', description: 'Security audits, testnet deployment, and community building.', status: 'completed' },
  { stage: 'Testnet', description: 'Public beta testing, bug bounties, and feature refinements.', status: 'active' },
  { stage: 'Mainnet', description: 'Official launch of CoreDeFi OS and native token generation.', status: 'upcoming' },
  { stage: 'Expansion', description: 'Cross-chain integration and advanced AI features.', status: 'upcoming' },
];

export function Roadmap() {
  return (
    <section className="py-12 relative z-10" id="roadmap">
      <FadeIn>
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-2 flex items-center">
              <Rocket className="w-6 h-6 mr-3 text-cyan-400" />
              Roadmap
            </h2>
            <p className="text-gray-400">The journey to the ultimate Web3 Financial OS.</p>
          </div>
        </div>
      </FadeIn>

      <div className="relative">
        {/* Horizontal Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-aura-800 -translate-y-1/2 hidden md:block rounded-full overflow-hidden">
           <motion.div 
             className="h-full bg-gradient-to-r from-aura-accent to-aura-purple" 
             initial={{ width: "0%" }}
             whileInView={{ width: "50%" }}
             viewport={{ once: true }}
             transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
           />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
          {milestones.map((milestone, index) => (
            <SlideUp key={milestone.stage} delay={index * 0.15} className="flex flex-col items-center text-center">
              <div className="mb-6 bg-aura-900 md:bg-transparent rounded-full md:rounded-none p-1 md:p-0">
                {milestone.status === 'completed' ? (
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  </div>
                ) : milestone.status === 'active' ? (
                  <div className="w-12 h-12 rounded-full bg-aura-accent/20 border-2 border-aura-accent flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.5)] relative">
                    <div className="absolute inset-0 rounded-full border border-aura-accent animate-ping opacity-50" />
                    <Circle className="w-4 h-4 fill-aura-accent text-aura-accent" />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-aura-800 border-2 border-aura-700 flex items-center justify-center text-gray-500 font-medium">
                    {index + 1}
                  </div>
                )}
              </div>
              
              <div className={`p-4 rounded-xl border ${milestone.status === 'active' ? 'bg-aura-800/80 border-aura-accent/50 shadow-glass' : 'bg-aura-900/50 border-aura-800'} backdrop-blur-md transition-all duration-300 w-full`}>
                <h4 className={`font-display font-bold mb-2 ${milestone.status === 'completed' ? 'text-emerald-400' : milestone.status === 'active' ? 'text-aura-accent' : 'text-gray-400'}`}>
                  {milestone.stage}
                </h4>
                <p className="text-sm text-gray-400">{milestone.description}</p>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}
