import React, { useState } from 'react';
import { Activity } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';

const mockData = [
  { name: 'Mon', tvl: 110, users: 4000 },
  { name: 'Tue', tvl: 115, users: 4200 },
  { name: 'Wed', tvl: 112, users: 4500 },
  { name: 'Thu', tvl: 120, users: 5100 },
  { name: 'Fri', tvl: 118, users: 4900 },
  { name: 'Sat', tvl: 122, users: 5400 },
  { name: 'Sun', tvl: 124, users: 6000 },
];

export function ProtocolInsights() {
  const [timeframe, setTimeframe] = useState('7D');
  const [metric, setMetric] = useState<'tvl' | 'users'>('tvl');

  const maxValue = Math.max(...mockData.map(d => d[metric]));

  return (
    <section className="py-12 relative z-10" id="insights">
      <FadeIn>
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-2 flex items-center">
              <Activity className="w-6 h-6 mr-3 text-aura-purple" />
              Protocol Insights
            </h2>
            <p className="text-gray-400">Track ecosystem growth and network activity.</p>
          </div>
          
          <div className="flex items-center space-x-2 mt-4 md:mt-0 p-1 bg-aura-900/50 rounded-lg border border-aura-700/50">
            {['7D', '30D', 'ALL'].map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                  timeframe === tf ? 'bg-aura-800 text-white shadow-sm' : 'text-gray-400 hover:text-white hover:bg-aura-800/50'
                }`}
              >
                {tf}
              </button>
            ))}
          </div>
        </div>
      </FadeIn>

      <SlideUp>
        <Card className="bg-aura-800/30 border-aura-700/50 p-6 relative overflow-hidden">
          <div className="flex items-center space-x-4 mb-6">
            <button
              onClick={() => setMetric('tvl')}
              className={`pb-2 text-sm font-medium border-b-2 transition-colors ${
                metric === 'tvl' ? 'border-aura-accent text-aura-accent' : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              Total Value Locked
            </button>
            <button
              onClick={() => setMetric('users')}
              className={`pb-2 text-sm font-medium border-b-2 transition-colors ${
                metric === 'users' ? 'border-aura-purple text-aura-purple' : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              Active Users
            </button>
          </div>

          <div className="h-[350px] w-full flex items-end justify-between pt-10 pb-4">
            {mockData.map((d, i) => {
              const heightPercentage = (d[metric] / maxValue) * 100;
              return (
                <div key={d.name} className="flex flex-col items-center w-full group relative">
                  {/* Tooltip */}
                  <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-aura-900 border border-aura-700 rounded px-2 py-1 text-xs text-white whitespace-nowrap z-10">
                    {metric === 'tvl' ? `$${d[metric]}M` : d[metric]}
                  </div>
                  
                  {/* Bar */}
                  <div className="w-4/5 flex items-end justify-center h-[280px]">
                    <div 
                      className={`w-full rounded-t-sm transition-all duration-500 ${metric === 'tvl' ? 'bg-aura-accent/80 hover:bg-aura-accent' : 'bg-aura-purple/80 hover:bg-aura-purple'}`}
                      style={{ height: `${heightPercentage}%` }}
                    />
                  </div>
                  
                  {/* Label */}
                  <span className="text-xs text-gray-500 mt-2">{d.name}</span>
                </div>
              );
            })}
          </div>
        </Card>
      </SlideUp>
    </section>
  );
}
