import React from 'react';
import { Card } from '../../components/ui/Card';
import { Layers, Flame, Unlock, CheckCircle } from 'lucide-react';
import { SlideUp } from '@/src/components/animations';

export function SupplyEngine() {
  const events = [
    { type: 'Mint', amount: '+10,000 AURAX', date: '2026-07-01', desc: 'Epoch 42 Rebase' },
    { type: 'Burn', amount: '-5,000 AURAX', date: '2026-06-28', desc: 'Protocol Revenue Burn' },
    { type: 'Unlock', amount: '+2,000,000 AURAX', date: '2026-06-15', desc: 'Team Vesting Unlock (Quarterly)' },
    { type: 'Mint', amount: '+9,800 AURAX', date: '2026-06-01', desc: 'Epoch 41 Rebase' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <SlideUp delay={0.1}>
        <Card className="p-6 border-gray-800/50 bg-gray-900/50">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Layers className="w-5 h-5 text-aura-500" />
            Supply Distribution
          </h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Ecosystem Allocation</span>
                <span className="text-white font-medium">40%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-aura-500 h-2 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Treasury Allocation</span>
                <span className="text-white font-medium">25%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '25%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Team & Advisors (Vesting)</span>
                <span className="text-white font-medium">15%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '15%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Public Sale</span>
                <span className="text-white font-medium">20%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '20%' }}></div>
              </div>
            </div>
          </div>
        </Card>
      </SlideUp>

      <SlideUp delay={0.2}>
        <Card className="p-6 border-gray-800/50 bg-gray-900/50">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Flame className="w-5 h-5 text-orange-500" />
            Recent Events
          </h2>
          <div className="space-y-4">
            {events.map((event, i) => (
              <div key={i} className="flex items-start justify-between p-3 rounded-lg bg-gray-800/50 border border-gray-700/50">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${event.type === 'Mint' ? 'bg-green-500/20 text-green-500' : event.type === 'Burn' ? 'bg-red-500/20 text-red-500' : 'bg-blue-500/20 text-blue-500'}`}>
                    {event.type === 'Mint' ? <CheckCircle className="w-4 h-4" /> : event.type === 'Burn' ? <Flame className="w-4 h-4" /> : <Unlock className="w-4 h-4" />}
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">{event.desc}</h4>
                    <span className="text-xs text-gray-500">{event.date}</span>
                  </div>
                </div>
                <span className={`font-medium ${event.type === 'Burn' ? 'text-red-400' : 'text-green-400'}`}>
                  {event.amount}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </SlideUp>
    </div>
  );
}
