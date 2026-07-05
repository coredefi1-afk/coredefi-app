import React from 'react';
import { motion } from 'motion/react';
import { Megaphone, ExternalLink } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';

const announcements = [
  {
    category: 'Protocol Updates',
    title: 'CoreDeFi V3 Beta is now live',
    date: 'Oct 24, 2026',
    priority: 'High',
    color: 'bg-aura-accent/10 text-aura-accent border-aura-accent/20'
  },
  {
    category: 'Governance',
    title: 'Proposal AXP-14: Treasury Diversification',
    date: 'Oct 22, 2026',
    priority: 'Medium',
    color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
  },
  {
    category: 'Community News',
    title: 'CoreDeFi Academy Inaugural Cohort Graduation',
    date: 'Oct 18, 2026',
    priority: 'Low',
    color: 'bg-aura-purple/10 text-aura-purple border-aura-purple/20'
  },
  {
    category: 'Maintenance',
    title: 'Scheduled RPC Node Upgrades',
    date: 'Oct 15, 2026',
    priority: 'Low',
    color: 'bg-orange-500/10 text-orange-400 border-orange-500/20'
  }
];

export function Announcements() {
  return (
    <section className="py-12 relative z-10" id="announcements">
      <FadeIn>
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-2 flex items-center">
              <Megaphone className="w-6 h-6 mr-3 text-orange-400" />
              Announcements
            </h2>
            <p className="text-gray-400">Latest news and updates from the CoreDeFi ecosystem.</p>
          </div>
          <div className="flex space-x-2 mt-4 md:mt-0">
             <button className="px-3 py-1 text-xs font-medium bg-aura-800 text-white rounded-md border border-aura-700">All</button>
             <button className="px-3 py-1 text-xs font-medium text-gray-400 hover:text-white rounded-md transition-colors">Updates</button>
             <button className="px-3 py-1 text-xs font-medium text-gray-400 hover:text-white rounded-md transition-colors">Governance</button>
          </div>
        </div>
      </FadeIn>

      {/* Auto-scrolling ticker */}
      <FadeIn delay={0.1} className="mb-8">
        <div className="w-full bg-aura-900/50 border border-aura-800 rounded-lg p-2 overflow-hidden flex items-center">
          <div className="px-3 py-1 bg-aura-accent text-aura-900 text-xs font-bold rounded flex-shrink-0 mr-4 z-10">LATEST</div>
          <div className="flex-1 overflow-hidden relative">
            <motion.div 
              className="whitespace-nowrap text-sm text-gray-300 inline-block"
              animate={{ x: ["100%", "-100%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              Smart Flexi Staking APY has increased by 2.4% following successful Treasury rebalance. Next epoch begins in 2 hours.
            </motion.div>
          </div>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {announcements.map((ann, index) => (
          <SlideUp key={ann.title} delay={index * 0.1}>
            <Card className="bg-aura-800/30 border-aura-700/50 hover:bg-aura-800/60 transition-colors p-5 h-full flex flex-col group cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <span className={`text-[10px] uppercase font-semibold px-2 py-1 rounded-sm border ${ann.color}`}>
                  {ann.category}
                </span>
                {ann.priority === 'High' && (
                  <span className="w-2 h-2 rounded-full bg-aura-accent animate-pulse" />
                )}
              </div>
              <h3 className="font-medium text-white mb-3 group-hover:text-aura-accent transition-colors">
                {ann.title}
              </h3>
              <div className="mt-auto flex items-center justify-between text-xs text-gray-500">
                <span>{ann.date}</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Card>
          </SlideUp>
        ))}
      </div>
    </section>
  );
}
