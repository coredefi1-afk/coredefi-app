import React from 'react';
import { Card } from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';
import { FadeIn, SlideUp } from '@/src/components/animations';
import { Wallet, PieChart, TrendingUp, AlertTriangle, ChevronRight } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

export function PortfolioAssistant() {
  const chartData = Array.from({ length: 20 }, (_, i) => ({
    value: 10000 + (i * 200) + Math.random() * 500
  }));

  return (
    <section className="py-12 relative z-10" id="portfolio">
      <FadeIn>
        <div className="flex items-center space-x-3 mb-8">
          <div className="p-2 bg-emerald-500/10 rounded-lg">
            <Wallet className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold text-white">Portfolio Assistant</h2>
            <p className="text-gray-400">AI-driven analysis of your specific holdings and strategy.</p>
          </div>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SlideUp className="lg:col-span-2">
          <Card className="bg-aura-800/30 border-aura-700/50 p-6 h-full flex flex-col">
            <div className="flex justify-between items-start mb-6">
               <div>
                  <h3 className="text-lg font-bold text-white mb-1">Estimated 30D Growth</h3>
                  <p className="text-sm text-gray-400">Projected APY based on current staking allocations.</p>
               </div>
               <div className="text-right">
                  <p className="text-2xl font-display font-bold text-emerald-400">12.4% APY</p>
                  <p className="text-sm text-gray-500">+2.1% vs Protocol Avg</p>
               </div>
            </div>

            <div className="flex-1 min-h-[200px] -mx-2">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="value" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorGrowth)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <div className="flex gap-4 mt-6">
               <Button className="flex-1 bg-aura-700 hover:bg-aura-600 text-white">Analyze Portfolio</Button>
               <Button className="flex-1 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white border-0">
                  Improve Strategy
               </Button>
            </div>
          </Card>
        </SlideUp>

        <div className="space-y-6">
          <SlideUp delay={0.1}>
            <Card className="bg-aura-800/30 border-aura-700/50 p-5">
               <div className="flex items-center space-x-3 mb-4">
                  <PieChart className="w-5 h-5 text-blue-400" />
                  <h4 className="font-bold text-white">Optimal Allocation</h4>
               </div>
               <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                  Based on your risk tolerance, AI suggests moving 10% from Flexi-Stake to the long-term DAO vault to maximize governance rewards.
               </p>
               <button className="text-sm text-cyan-400 font-medium flex items-center hover:text-cyan-300 transition-colors">
                  View Suggestion <ChevronRight className="w-4 h-4 ml-1" />
               </button>
            </Card>
          </SlideUp>

          <SlideUp delay={0.2}>
            <Card className="bg-aura-800/30 border-aura-700/50 p-5">
               <div className="flex items-center space-x-3 mb-4">
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                  <h4 className="font-bold text-white">Risk Assessment</h4>
               </div>
               <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Portfolio Risk Score</span>
                  <span className="text-lg font-bold text-emerald-400">24/100 (Low)</span>
               </div>
               <div className="w-full h-1.5 bg-aura-900 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: '24%' }} />
               </div>
            </Card>
          </SlideUp>
        </div>
      </div>
    </section>
  );
}
