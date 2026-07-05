import React from 'react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';
import { BookOpen, ChevronRight, Lock, Landmark, Vote, Gift, BarChart2, Shield } from 'lucide-react';

const topics = [
  { title: 'Staking & Yield', icon: Lock, color: 'text-emerald-400', desc: 'Learn about flexi-staking, emission curves, and yield optimization strategies.', prompts: ['How do I stake?', 'What is the current APY?'] },
  { title: 'Treasury Management', icon: Landmark, color: 'text-amber-400', desc: 'Understand how the DAO treasury manages assets and generates protocol revenue.', prompts: ['Treasury asset breakdown', 'How are funds allocated?'] },
  { title: 'Governance Process', icon: Vote, color: 'text-cyan-400', desc: 'Dive into the proposal lifecycle, voting power calculation, and execution timelocks.', prompts: ['How do I create an AIP?', 'Voting power calculation'] },
  { title: 'Reward Mechanisms', icon: Gift, color: 'text-fuchsia-400', desc: 'Explore Web Rewards, DAO Rewards, and the gamified progression system.', prompts: ['How to earn Web Rewards?', 'What are DAO missions?'] },
  { title: 'Protocol Analytics', icon: BarChart2, color: 'text-blue-400', desc: 'Master reading the data: TVL, supply dynamics, and network health indicators.', prompts: ['Explain TVL calculation', 'Circulating supply details'] },
  { title: 'Security & Audits', icon: Shield, color: 'text-red-400', desc: 'Review smart contract architecture, multi-sig setups, and external security audits.', prompts: ['Is the protocol audited?', 'Smart contract security'] },
];

export function KnowledgeCenter() {
  return (
    <section className="py-12 relative z-10" id="knowledge-center">
      <FadeIn>
        <div className="flex items-center space-x-3 mb-8">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <BookOpen className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold text-white">Knowledge Center</h2>
            <p className="text-gray-400">Deep dive into the core pillars of the ecosystem.</p>
          </div>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic, index) => {
          const Icon = topic.icon;
          return (
            <SlideUp key={topic.title} delay={index * 0.1}>
              <Card className="bg-aura-800/30 border-aura-700/50 p-6 h-full flex flex-col group hover:bg-aura-800/50 transition-colors">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-2 rounded-lg bg-aura-900 border border-aura-700/50 group-hover:border-aura-600 transition-colors`}>
                    <Icon className={`w-5 h-5 ${topic.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{topic.title}</h3>
                </div>
                
                <p className="text-sm text-gray-400 mb-6 flex-1">
                  {topic.desc}
                </p>

                <div className="space-y-2 mb-6">
                   <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Example Prompts</p>
                   {topic.prompts.map((prompt, i) => (
                      <button key={i} className="block w-full text-left text-xs text-aura-accent hover:text-cyan-300 transition-colors truncate">
                         "{prompt}"
                      </button>
                   ))}
                </div>

                <button className="flex items-center text-sm font-medium text-gray-300 group-hover:text-white transition-colors mt-auto">
                  Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </Card>
            </SlideUp>
          );
        })}
      </div>
    </section>
  );
}
