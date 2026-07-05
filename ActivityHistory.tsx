import React, { useState } from 'react';
import { Search, Filter, ExternalLink, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';

const historyData = [
  { id: '1', date: 'Oct 24, 2026', proposal: 'AIP-41: Network Upgrade v2.4', vote: 'Yes', reward: '12.50', repChange: '+2', status: 'Executed' },
  { id: '2', date: 'Oct 18, 2026', proposal: 'AIP-40: Adjust Staking APY', vote: 'No', reward: '10.00', repChange: '+1', status: 'Executed' },
  { id: '3', date: 'Oct 12, 2026', proposal: 'AIP-39: New DEX Pair Listing', vote: 'Abstain', reward: '5.00', repChange: '+0', status: 'Executed' },
  { id: '4', date: 'Oct 05, 2026', proposal: 'AIP-38: Treasury Diversification', vote: 'Yes', reward: '25.00', repChange: '+3', status: 'Rejected' },
];

export function ActivityHistory() {
  const [searchTerm, setSearchTerm] = useState('');

  const getVoteColor = (vote: string) => {
    switch (vote) {
      case 'Yes': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      case 'No': return 'text-red-400 bg-red-400/10 border-red-400/20';
      case 'Abstain': return 'text-gray-300 bg-gray-500/20 border-gray-500/30';
      default: return '';
    }
  };

  const getRepIcon = (change: string) => {
    if (change.startsWith('+') && change !== '+0') return <TrendingUp className="w-3 h-3 text-emerald-400 mr-1" />;
    if (change.startsWith('-')) return <TrendingDown className="w-3 h-3 text-red-400 mr-1" />;
    return <Minus className="w-3 h-3 text-gray-500 mr-1" />;
  };

  return (
    <section className="py-12 relative z-10" id="activity-history">
      <FadeIn>
        <div className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-2">Governance Activity</h2>
          <p className="text-gray-400">Review your past votes and earned rewards.</p>
        </div>
      </FadeIn>

      <SlideUp>
        <Card className="bg-aura-800/40 border-aura-700/50 overflow-hidden">
          <div className="p-4 md:p-6 border-b border-aura-700/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search proposals..." 
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
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-aura-900/30 text-gray-400 text-xs uppercase tracking-wider">
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">Proposal</th>
                  <th className="px-6 py-4 font-medium text-center">Vote</th>
                  <th className="px-6 py-4 font-medium text-right">Reward (AURAXX)</th>
                  <th className="px-6 py-4 font-medium text-center">Rep Change</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-aura-700/30 text-sm">
                {historyData.map((row) => (
                  <tr key={row.id} className="hover:bg-aura-800/30 transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap text-gray-300">{row.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-white hover:text-aura-accent cursor-pointer transition-colors">
                      <div className="flex items-center">
                        {row.proposal}
                        <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                       <span className={`inline-block px-2 py-1 rounded text-xs font-bold border ${getVoteColor(row.vote)}`}>
                         {row.vote}
                       </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-emerald-400 text-right">+{row.reward}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="flex items-center justify-center">
                        {getRepIcon(row.repChange)}
                        <span className={row.repChange.startsWith('+') && row.repChange !== '+0' ? 'text-emerald-400' : 'text-gray-400'}>{row.repChange}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-xs ${row.status === 'Executed' ? 'text-emerald-400' : 'text-orange-400'}`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 border-t border-aura-700/50 flex items-center justify-between text-sm text-gray-400">
            <span>Showing 1 to 4 of 32 entries</span>
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
