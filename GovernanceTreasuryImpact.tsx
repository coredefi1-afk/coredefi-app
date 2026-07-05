import React from 'react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';
import { Landmark, PieChart, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export function GovernanceTreasuryImpact() {
  return (
    <section className="py-12 relative z-10" id="treasury-impact">
      <FadeIn>
        <div className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-2">Treasury Impact</h2>
          <p className="text-gray-400">Financial overview of approved and pending governance allocations.</p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <SlideUp>
          <Card className="bg-aura-800/30 border-aura-700/50 p-6 h-full flex flex-col justify-center">
             <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400">
                   <Landmark className="w-5 h-5" />
                </div>
                <h3 className="text-gray-400 font-medium">Available Treasury</h3>
             </div>
             <p className="text-3xl font-bold text-white mb-2">42.5M <span className="text-xl text-gray-500 font-normal">AURAXX</span></p>
             <div className="flex items-center text-sm text-emerald-400">
                <ArrowUpRight className="w-4 h-4 mr-1" />
                +2.4% (30D)
             </div>
          </Card>
        </SlideUp>
        
        <SlideUp delay={0.1}>
          <Card className="bg-aura-800/30 border-aura-700/50 p-6 h-full flex flex-col justify-center">
             <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                   <PieChart className="w-5 h-5" />
                </div>
                <h3 className="text-gray-400 font-medium">Allocated Funds</h3>
             </div>
             <p className="text-3xl font-bold text-white mb-2">8.2M <span className="text-xl text-gray-500 font-normal">AURAXX</span></p>
             <div className="flex items-center text-sm text-gray-500">
                Active & Executing Proposals
             </div>
          </Card>
        </SlideUp>

        <SlideUp delay={0.2}>
          <Card className="bg-aura-800/30 border-aura-700/50 p-6 h-full flex flex-col justify-center relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <ArrowDownRight className="w-24 h-24 text-fuchsia-500" />
             </div>
             <div className="relative z-10">
               <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-fuchsia-500/10 rounded-lg text-fuchsia-400">
                     <ArrowDownRight className="w-5 h-5" />
                  </div>
                  <h3 className="text-gray-400 font-medium">Pending Requests</h3>
               </div>
               <p className="text-3xl font-bold text-white mb-2">2.4M <span className="text-xl text-gray-500 font-normal">AURAXX</span></p>
               <div className="flex items-center text-sm text-amber-400">
                  Awaiting Vote Resolution
               </div>
             </div>
          </Card>
        </SlideUp>
      </div>

      <SlideUp delay={0.3}>
         <Card className="bg-aura-800/30 border-aura-700/50 p-6">
            <h3 className="text-lg font-bold text-white mb-6">Recent Allocations</h3>
            <div className="overflow-x-auto">
               <table className="w-full text-left text-sm text-gray-400">
                  <thead className="text-xs uppercase bg-aura-900/50 text-gray-500 border-b border-aura-700/50">
                     <tr>
                        <th className="px-4 py-3 font-medium">Proposal</th>
                        <th className="px-4 py-3 font-medium">Category</th>
                        <th className="px-4 py-3 font-medium text-right">Amount</th>
                        <th className="px-4 py-3 font-medium text-right">Status</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-aura-700/50">
                     <tr className="hover:bg-aura-800/50 transition-colors">
                        <td className="px-4 py-4 text-white font-medium">AIP-38: Developer Grants Program Q2</td>
                        <td className="px-4 py-4">Ecosystem</td>
                        <td className="px-4 py-4 text-right font-mono text-emerald-400">1,500,000 AURAXX</td>
                        <td className="px-4 py-4 text-right"><span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-1 rounded-full">Executing</span></td>
                     </tr>
                     <tr className="hover:bg-aura-800/50 transition-colors">
                        <td className="px-4 py-4 text-white font-medium">AIP-35: Liquidity Provision on DEX</td>
                        <td className="px-4 py-4">Treasury</td>
                        <td className="px-4 py-4 text-right font-mono text-emerald-400">5,000,000 AURAXX</td>
                        <td className="px-4 py-4 text-right"><span className="text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-1 rounded-full">Completed</span></td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </Card>
      </SlideUp>

    </section>
  );
}
