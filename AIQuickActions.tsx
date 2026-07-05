import React from 'react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';
import { Calculator, FileSearch, ShieldAlert, Landmark, Vote, LineChart, Cpu, Search } from 'lucide-react';

const actions = [
  { icon: Search, title: 'Explain Smart Flexi Staking', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
  { icon: Cpu, title: 'Explain Web Rewards', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
  { icon: Vote, title: 'Governance Summary', color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/20' },
  { icon: Landmark, title: 'Treasury Analysis', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
  { icon: LineChart, title: 'Analytics Overview', color: 'text-fuchsia-400', bg: 'bg-fuchsia-500/10 border-fuchsia-500/20' },
  { icon: Calculator, title: 'Calculate Rewards', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
  { icon: ShieldAlert, title: 'Risk Assessment', color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/20' },
  { icon: FileSearch, title: 'Audit Reports', color: 'text-aura-accent', bg: 'bg-aura-accent/10 border-aura-accent/20' },
];

export function AIQuickActions() {
  return (
    <section className="py-12 relative z-10" id="quick-actions">
      <FadeIn>
        <div className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-2">AI Quick Actions</h2>
          <p className="text-gray-400">One-click analysis and common inquiries.</p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <SlideUp key={index} delay={index * 0.05}>
              <Card className="bg-aura-800/40 border-aura-700/50 p-4 hover:bg-aura-800/80 transition-all cursor-pointer group hover:scale-[1.02]">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center border mb-3 ${action.bg}`}>
                  <Icon className={`w-5 h-5 ${action.color}`} />
                </div>
                <h3 className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{action.title}</h3>
              </Card>
            </SlideUp>
          );
        })}
      </div>
    </section>
  );
}
