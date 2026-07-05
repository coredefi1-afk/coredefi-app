import React, { useState } from 'react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';
import { Search, Terminal, MessageSquarePlus } from 'lucide-react';

const categories = ['All', 'Beginner', 'Staking', 'Treasury', 'Governance', 'Analytics', 'Advanced'];

const prompts = [
  { title: 'Explain Staking', desc: 'A simple breakdown of how Flexi-Staking works.', category: 'Beginner' },
  { title: 'Calculate Yield', desc: 'Calculate expected returns for a specific token amount over time.', category: 'Staking' },
  { title: 'Treasury Health', desc: 'Get a summary of the current treasury reserves and growth.', category: 'Treasury' },
  { title: 'Summarize Proposal', desc: 'Paste an AIP ID to get a concise summary of its objectives.', category: 'Governance' },
  { title: 'TVL Trends', desc: 'Analyze the Total Value Locked trend over the last 90 days.', category: 'Analytics' },
  { title: 'Impermanent Loss Risk', desc: 'Evaluate potential risks in current liquidity pools.', category: 'Advanced' },
  { title: 'Draft a Proposal', desc: 'Get help structuring a new governance proposal draft.', category: 'Governance' },
  { title: 'Smart Contract Audit', desc: 'Request a summary of the latest protocol security audit.', category: 'Advanced' },
];

export function PromptLibrary() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPrompts = activeCategory === 'All' 
    ? prompts 
    : prompts.filter(p => p.category === activeCategory);

  return (
    <section className="py-12 relative z-10" id="prompt-library">
      <FadeIn>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-aura-purple/10 rounded-lg">
              <Terminal className="w-6 h-6 text-aura-purple" />
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold text-white">Prompt Library</h2>
              <p className="text-gray-400">Pre-built prompts to get the most out of CoreDeFi AI.</p>
            </div>
          </div>
          
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search prompts..." 
              className="w-full bg-aura-900/50 border border-aura-700/50 rounded-xl py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-fuchsia-500/50 transition-colors"
            />
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="flex overflow-x-auto gap-2 pb-4 mb-6 custom-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeCategory === cat 
                  ? 'bg-fuchsia-500/20 text-fuchsia-400 border border-fuchsia-500/30' 
                  : 'bg-aura-900/50 text-gray-400 border border-aura-700/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredPrompts.map((prompt, index) => (
          <SlideUp key={prompt.title} delay={index * 0.05}>
            <Card className="bg-aura-800/30 border-aura-700/50 p-5 h-full flex flex-col group hover:bg-aura-800/50 transition-colors">
              <div className="mb-3">
                 <span className="text-[10px] uppercase font-bold tracking-wider text-fuchsia-400 bg-fuchsia-500/10 px-2 py-1 rounded-md">
                    {prompt.category}
                 </span>
              </div>
              <h3 className="font-bold text-white text-sm mb-2 group-hover:text-cyan-400 transition-colors">{prompt.title}</h3>
              <p className="text-xs text-gray-400 mb-6 flex-1">{prompt.desc}</p>
              
              <button className="w-full flex items-center justify-center p-2 rounded-lg bg-aura-900 border border-aura-700/50 text-xs text-gray-300 group-hover:bg-fuchsia-500/10 group-hover:border-fuchsia-500/30 group-hover:text-fuchsia-400 transition-all mt-auto">
                <MessageSquarePlus className="w-3.5 h-3.5 mr-1.5" />
                Use Prompt
              </button>
            </Card>
          </SlideUp>
        ))}
      </div>
    </section>
  );
}
