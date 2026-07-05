import React from 'react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'USDC', value: 15.2, color: '#2775ca', percentage: 35.7 },
  { name: 'USDT', value: 8.5, color: '#26a17b', percentage: 20.0 },
  { name: 'DAI', value: 3.9, color: '#f4b731', percentage: 9.3 },
  { name: 'WETH', value: 6.8, color: '#627eea', percentage: 16.0 },
  { name: 'POL', value: 4.1, color: '#8247e5', percentage: 9.6 },
  { name: 'AURAXX Reserve', value: 4.0, color: '#22d3ee', percentage: 9.4 },
];

export function AssetAllocation() {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-aura-900/95 border border-aura-700/50 p-3 rounded-lg shadow-xl backdrop-blur-sm">
          <p className="text-white font-bold mb-1 flex items-center">
            <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: data.color }} />
            {data.name}
          </p>
          <p className="text-gray-300 text-sm">${data.value}M</p>
          <p className="text-aura-accent text-sm font-medium">{data.percentage}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-12 relative z-10" id="asset-allocation">
      <FadeIn>
        <div className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-2">Asset Allocation</h2>
          <p className="text-gray-400">Diversification of treasury holdings across various assets.</p>
        </div>
      </FadeIn>

      <SlideUp>
        <Card className="bg-aura-800/30 border-aura-700/50 p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Chart Area */}
            <div className="w-full md:w-1/2 h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Legend / Details */}
            <div className="w-full md:w-1/2">
              <h3 className="text-lg font-bold text-white mb-6">Holdings Breakdown</h3>
              <div className="space-y-4">
                {data.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-aura-900/40 border border-aura-700/30 hover:border-aura-700/80 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="font-medium text-white">{item.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-white">${item.value}M</div>
                      <div className="text-xs font-medium text-gray-500">{item.percentage}% Allocation</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Card>
      </SlideUp>
    </section>
  );
}
