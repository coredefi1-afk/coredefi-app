import React from 'react';
import { motion } from 'motion/react';
import { Layers, Globe, Vote, Landmark, Brain, GraduationCap, Scale, ArrowRight } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, HoverLift } from '@/src/components/animations';

const features = [
  {
    title: 'Smart Flexi Staking',
    description: 'Stake AURAXX and earn dynamic yields adjusted by protocol health.',
    icon: Layers,
    color: 'text-aura-accent',
    bg: 'from-aura-accent/10 to-transparent',
    status: 'Live'
  },
  {
    title: 'Smart Web Reward',
    description: 'Earn passive income by contributing bandwidth and storage.',
    icon: Globe,
    color: 'text-aura-purple',
    bg: 'from-aura-purple/10 to-transparent',
    status: 'Live'
  },
  {
    title: 'Smart DAO Reward',
    description: 'Participate in governance and get rewarded for your votes.',
    icon: Vote,
    color: 'text-emerald-400',
    bg: 'from-emerald-400/10 to-transparent',
    status: 'Live'
  },
  {
    title: 'Treasury',
    description: 'Transparent, decentralized treasury backing the ecosystem.',
    icon: Landmark,
    color: 'text-blue-400',
    bg: 'from-blue-400/10 to-transparent',
    status: 'Live'
  },
  {
    title: 'CoreDeFi AI',
    description: 'Intelligent assistant to navigate the Web3 financial OS.',
    icon: Brain,
    color: 'text-fuchsia-400',
    bg: 'from-fuchsia-400/10 to-transparent',
    status: 'Coming Soon'
  },
  {
    title: 'CoreDeFi Academy',
    description: 'Learn Web3 concepts and earn certificates on-chain.',
    icon: GraduationCap,
    color: 'text-orange-400',
    bg: 'from-orange-400/10 to-transparent',
    status: 'Coming Soon'
  },
  {
    title: 'Governance',
    description: 'Shape the future of CoreDeFi through decentralized voting.',
    icon: Scale,
    color: 'text-cyan-400',
    bg: 'from-cyan-400/10 to-transparent',
    status: 'Live'
  }
];

export function EcosystemOverview() {
  return (
    <section className="py-12 relative z-10" id="ecosystem">
      <FadeIn>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-display font-bold text-white mb-4">Ecosystem Overview</h2>
          <p className="text-gray-400">Discover the powerful modules that make up the CoreDeFi Financial Operating System.</p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <HoverLift key={feature.title} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="h-full"
              >
                <Card className="h-full bg-aura-800/30 border-aura-700/50 hover:border-aura-600 transition-all duration-300 group overflow-hidden relative flex flex-col">
                  <div className={`absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b ${feature.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="p-6 flex-1 flex flex-col relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-3 rounded-xl bg-aura-900 border border-aura-700/50 shadow-glass">
                        <Icon className={`w-6 h-6 ${feature.color}`} />
                      </div>
                      <span className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-full ${feature.status === 'Live' ? 'bg-aura-accent/10 text-aura-accent border border-aura-accent/20' : 'bg-gray-800 text-gray-400 border border-gray-700'}`}>
                        {feature.status}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-6 flex-1">
                      {feature.description}
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-aura-700/30 flex items-center text-sm font-medium text-gray-300 group-hover:text-aura-accent transition-colors">
                      Learn More <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            </HoverLift>
          );
        })}
      </div>
    </section>
  );
}
