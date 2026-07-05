import React, { useState, useMemo } from 'react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function TreasuryPerformance() {
  const [timeframe, setTimeframe] = useState('1Y');

  const chartData = useMemo(() => {
    const data = [];
    const now = new Date();
    const days = timeframe === '7D' ? 7 : timeframe === '30D' ? 30 : timeframe === '90D' ? 90 : timeframe === '1Y' ? 365 : 730;
    
    let baseValue = 25.0; // Starting at 25M
    
    for (let i = days; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      
      // Simulate upward trend with some volatility
      baseValue = baseValue + (Math.random() * 0.4 - 0.15); 
      
      data.push({
        date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        value: Number(baseValue.toFixed(2)),
      });
    }
    return data;
  }, [timeframe]);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-aura-900/95 border border-aura-700/50 p-3 rounded-lg shadow-xl backdrop-blur-sm">
          <p className="text-gray-400 text-xs mb-1">{label}</p>
          <p className="text-emerald-400 font-bold text-lg">
            ${payload[0].value}M
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-12 relative z-10" id="treasury-performance">
      <FadeIn>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-2">Treasury Performance</h2>
            <p className="text-gray-400">Historical growth and total value locked over time.</p>
          </div>
          
          <div className="flex items-center space-x-1 mt-4 md:mt-0 p-1 bg-aura-900/50 rounded-lg border border-aura-700/50">
            {['7D', '30D', '90D', '1Y', 'All Time'].map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
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
        <Card className="bg-aura-800/30 border-aura-700/50 p-6">
          <div className="flex flex-col mb-6">
            <span className="text-gray-400 text-sm font-medium mb-1">Total Treasury Value</span>
            <div className="flex items-end space-x-3">
              <span className="text-4xl font-display font-bold text-white">${chartData[chartData.length - 1]?.value}M</span>
              <span className="text-emerald-400 font-medium pb-1 flex items-center">
                +14.2% <span className="text-gray-500 ml-1 text-xs">(vs previous period)</span>
              </span>
            </div>
          </div>

          <div className="w-full h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorTreasury" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#34d399" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#34d399" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} opacity={0.3} />
                <XAxis dataKey="date" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} minTickGap={30} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}M`} />
                <Tooltip content={<CustomTooltip />} />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#34d399" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorTreasury)" 
                  animationDuration={1500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </SlideUp>
    </section>
  );
}
