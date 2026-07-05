import React, { useState } from 'react';
import { Search, Filter, ExternalLink, ArrowRight, UserPlus, Gift } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';

const historyData = [
  { id: '1', date: 'Oct 24, 2026', referral: '0x3d...f8e2', type: 'Direct Invite', amount: '50.00', status: 'Completed', tx: '0x4f...a2b1' },
  { id: '2', date: 'Oct 25, 2026', referral: '0x9c...3f4e', type: 'Level 2 Reward', amount: '12.50', status: 'Completed', tx: '0x1c...99d2' },
  { id: '3', date: 'Oct 26, 2026', referral: '0x1a...b9c0', type: 'Direct Invite', amount: '50.00', status: 'Pending', tx: 'Processing' },
  { id: '4', date: 'Oct 27, 2026', referral: 'System', type: 'Milestone Bonus', amount: '250.00', status: 'Completed', tx: '0x7e...8d1f' },
];

export function RewardHistory() {
  const [searchTerm, setSearchTerm] = useState('');

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Direct Invite': return <UserPlus className="w-4 h-4 text-aura-accent mr-2" />;
      case 'Level 2 Reward': return <ArrowRight className="w-4 h-4 text-aura-purple mr-2" />;
      case 'Milestone Bonus': return <Gift className="w-4 h-4 text-emerald-400 mr-2" />;
      default: return null;
    }
  };

  const getStatusColor = (status: string) => {
    if (status === 'Completed') return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
    if (status === 'Pending') return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
    return 'text-gray-400 bg-gray-800 border-gray-700';
  };

  return (
    <section className="py-12 relative z-10" id="reward-history">
      <FadeIn>
        <div className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-2">Reward History</h2>
          <p className="text-gray-400">Track every referral and bonus earned.</p>
        </div>
      </FadeIn>

      <SlideUp>
        <Card className="bg-aura-800/40 border-aura-700/50 overflow-hidden">
          <div className="p-4 md:p-6 border-b border-aura-700/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search addresses..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-aura-900/50 border border-aura-700/50 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-aura-accent/50 transition-colors"
              />
            </div>
            
            <button className="flex items-center space-x-2 px-4 py-2 bg-aura-900/50 border border-aura-700/50 rounded-lg text-sm text-gray-300 hover:text-white transition-colors">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-aura-900/30 text-gray-400 text-xs uppercase tracking-wider">
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">Referral / Source</th>
                  <th className="px-6 py-4 font-medium">Reward Type</th>
                  <th className="px-6 py-4 font-medium">Amount (AURAXX)</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Transaction</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-aura-700/30 text-sm">
                {historyData.map((row) => (
                  <tr key={row.id} className="hover:bg-aura-800/30 transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap text-gray-300">{row.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-mono text-gray-400">{row.referral}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-gray-200">
                        {getTypeIcon(row.type)}
                        {row.type}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-emerald-400">+{row.amount}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(row.status)}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {row.tx !== 'Processing' ? (
                        <a href="#" className="flex items-center text-aura-accent hover:text-cyan-300 transition-colors">
                          {row.tx}
                          <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        <span className="text-gray-500 italic">{row.tx}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 border-t border-aura-700/50 flex items-center justify-between text-sm text-gray-400">
            <span>Showing 1 to 4 of 24 entries</span>
            <div className="flex space-x-2">
              <button className="px-3 py-1 rounded-md border border-aura-700 bg-aura-900/50 hover:text-white transition-colors disabled:opacity-50" disabled>Previous</button>
              <button className="px-3 py-1 rounded-md border border-aura-700 bg-aura-900/50 hover:text-white transition-colors">Next</button>
            </div>
          </div>
        </Card>
      </SlideUp>
    </section>
  );
}
