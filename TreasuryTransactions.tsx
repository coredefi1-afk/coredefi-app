import React, { useState } from 'react';
import { Search, Filter, Download, ArrowUpRight, ArrowDownRight, RefreshCw } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';

const mockTransactions = [
  { id: 'tx-1', date: '2026-07-04', type: 'Yield Harvest', asset: 'USDC', amount: '+45,000', dest: 'Aave V3 Pool', status: 'Completed', hash: '0x8f...3a2b', icon: ArrowDownRight, color: 'text-emerald-400' },
  { id: 'tx-2', date: '2026-07-02', type: 'Grant Distribution', asset: 'AURAXX', amount: '-150,000', dest: 'AIP-42 Grantee', status: 'Completed', hash: '0x1c...9d4e', icon: ArrowUpRight, color: 'text-aura-purple' },
  { id: 'tx-3', date: '2026-07-01', type: 'Liquidity Provision', asset: 'USDT/AURAXX', amount: '-500,000', dest: 'Uniswap V3', status: 'Completed', hash: '0x5b...7f1a', icon: ArrowUpRight, color: 'text-aura-purple' },
  { id: 'tx-4', date: '2026-06-28', type: 'Protocol Fee Accrual', asset: 'WETH', amount: '+12.5', dest: 'Treasury Wallet', status: 'Completed', hash: '0x9a...2c5d', icon: ArrowDownRight, color: 'text-emerald-400' },
  { id: 'tx-5', date: '2026-06-25', type: 'Asset Swap', asset: 'DAI', amount: '250,000', dest: 'Curve Finance', status: 'Processing', hash: 'Pending', icon: RefreshCw, color: 'text-amber-400' },
];

export function TreasuryTransactions() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <section className="py-12 relative z-10" id="treasury-transactions">
      <FadeIn>
        <div className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-2">Treasury Transactions</h2>
          <p className="text-gray-400">On-chain transparency of all inflows and outflows.</p>
        </div>
      </FadeIn>

      <SlideUp>
        <Card className="bg-aura-800/40 border-aura-700/50 overflow-hidden">
          {/* Toolbar */}
          <div className="p-4 border-b border-aura-700/50 flex flex-col sm:flex-row items-center justify-between gap-4 bg-aura-900/30">
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search transactions..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-aura-900/50 border border-aura-700/50 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-aura-accent/50 transition-colors"
              />
            </div>
            
            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <button className="flex-1 sm:flex-none flex items-center justify-center space-x-2 px-4 py-2 bg-aura-900/50 border border-aura-700/50 rounded-lg text-sm text-gray-300 hover:text-white transition-colors">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
              <button className="flex-1 sm:flex-none flex items-center justify-center space-x-2 px-4 py-2 bg-aura-900/50 border border-aura-700/50 rounded-lg text-sm text-gray-300 hover:text-white transition-colors">
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-aura-900/40 text-gray-400 text-xs uppercase tracking-wider">
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">Transaction Type</th>
                  <th className="px-6 py-4 font-medium">Asset</th>
                  <th className="px-6 py-4 font-medium text-right">Amount</th>
                  <th className="px-6 py-4 font-medium">Destination / Source</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium text-right">Tx Hash</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-aura-700/30 text-sm">
                {mockTransactions.map((tx) => {
                  const Icon = tx.icon;
                  return (
                    <tr key={tx.id} className="hover:bg-aura-800/30 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-gray-400">{tx.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-white font-medium">
                        <div className="flex items-center space-x-2">
                          <div className={`p-1.5 rounded-md bg-aura-900 ${tx.color}`}>
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <span>{tx.type}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300 font-medium">{tx.asset}</td>
                      <td className={`px-6 py-4 whitespace-nowrap text-right font-bold ${tx.color}`}>
                        {tx.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-400">{tx.dest}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold border ${tx.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20'}`}>
                          {tx.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <a href="#" className="text-aura-accent hover:text-cyan-300 font-mono text-xs transition-colors">
                          {tx.hash}
                        </a>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="p-4 border-t border-aura-700/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400 bg-aura-900/20">
            <span>Showing 1 to 5 of 124 transactions</span>
            <div className="flex space-x-2">
              <button className="px-3 py-1.5 rounded-md border border-aura-700 bg-aura-900/50 hover:text-white transition-colors disabled:opacity-50" disabled>Previous</button>
              <button className="px-3 py-1.5 rounded-md border border-aura-accent/50 bg-aura-accent/10 text-aura-accent font-medium">1</button>
              <button className="px-3 py-1.5 rounded-md border border-aura-700 bg-aura-900/50 hover:text-white transition-colors">2</button>
              <button className="px-3 py-1.5 rounded-md border border-aura-700 bg-aura-900/50 hover:text-white transition-colors">3</button>
              <button className="px-3 py-1.5 rounded-md border border-aura-700 bg-aura-900/50 hover:text-white transition-colors">Next</button>
            </div>
          </div>
        </Card>
      </SlideUp>
    </section>
  );
}
