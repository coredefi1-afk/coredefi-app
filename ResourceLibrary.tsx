import React from 'react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';
import { Library, FileText, Video, HelpCircle, Book, ExternalLink } from 'lucide-react';

const resources = [
  { icon: FileText, title: 'CoreDeFi Whitepaper v3', desc: 'The foundational document outlining tokenomics and core mechanics.', category: 'Whitepaper', color: 'text-gray-300' },
  { icon: Book, title: 'Smart Contracts Docs', desc: 'Technical documentation for developers integrating with Aura.', category: 'Documentation', color: 'text-blue-400' },
  { icon: Video, title: 'Treasury Dashboard Walkthrough', desc: 'A 5-minute video guide on how to read the treasury metrics.', category: 'Tutorial', color: 'text-red-400' },
  { icon: HelpCircle, title: 'Staking FAQ', desc: 'Answers to the most common questions regarding Flexi-Staking.', category: 'FAQ', color: 'text-amber-400' },
];

export function ResourceLibrary() {
  return (
    <section className="py-12 relative z-10" id="resources">
      <FadeIn>
        <div className="flex items-center space-x-3 mb-8">
          <div className="p-2 bg-orange-500/10 rounded-lg">
            <Library className="w-6 h-6 text-orange-400" />
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold text-white">Resource Library</h2>
            <p className="text-gray-400">Quick access to essential documentation and guides.</p>
          </div>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {resources.map((res, index) => {
          const Icon = res.icon;
          return (
            <SlideUp key={res.title} delay={index * 0.1}>
              <Card className="bg-aura-800/30 border-aura-700/50 p-5 flex items-start group hover:bg-aura-800/60 transition-colors cursor-pointer">
                <div className="p-3 bg-aura-900 rounded-lg border border-aura-700/50 mr-4 group-hover:border-orange-500/30 transition-colors shrink-0">
                  <Icon className={`w-6 h-6 ${res.color}`} />
                </div>
                <div className="flex-1">
                   <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-white group-hover:text-orange-400 transition-colors pr-4">{res.title}</h3>
                      <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white shrink-0" />
                   </div>
                   <p className="text-sm text-gray-400 mb-2">{res.desc}</p>
                   <span className="text-[10px] uppercase font-bold tracking-wider text-gray-500">{res.category}</span>
                </div>
              </Card>
            </SlideUp>
          );
        })}
      </div>
    </section>
  );
}
