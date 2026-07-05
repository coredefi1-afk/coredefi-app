import React, { useState, useMemo } from 'react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

export function EarningsAnalytics() {
  const [timeframe, setTimeframe] = useState('30D');
  const [chartType, setChartType] = useState<'daily' | 'weekly' | 'monthly' | 'conversion'>('daily');

  const chartData = useMemo(() => {
    const data = [];
    const now = new Date();
    const days = timeframe === '7D' ? 7 : timeframe === '30D' ? 30 : timeframe === '90D' ? 90 : 365;
    
    for (let i = days; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      
      let value;
      if (chartType === 'daily') {
        value = Math.random() * 50 + 10;
      } else if (chartType === 'weekly') {
        value = Math.random() * 300 + 100;
      } else if (chartType === 'monthly') {
        value = Math.random() * 1000 + 500;
      } else {
        // conversion
        value = 40 + Math.random() * 30;
      }
      
      data.push({
        date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        value: Number(value.toFixed(1)),
      });
    }
    return data;
  }, [timeframe, chartType]);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-aura-900/95 border border-aura-700/50 p-3 rounded-lg shadow-xl backdrop-blur-sm">
          <p className="text-gray-400 text-xs mb-1">{label}</p>
          <p className="text-aura-accent font-bold text-lg">
            {payload[0].value} {chartType === 'conversion' ? '%' : 'AURAXX'}
          </p>
        </div>
      );
    }
    return null;
  };

  const renderChart = () => {
    if (chartType === 'conversion') {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValueEarning" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#c084fc" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#c084fc" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} opacity={0.5} />
            <XAxis dataKey="date" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} minTickGap={30} />
            <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}%`} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="value" stroke="#c084fc" strokeWidth={3} fillOpacity={1} fill="url(#colorValueEarning)" />
          </AreaChart>
        </ResponsiveContainer>
      );
    }

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} opacity={0.5} />
          <XAxis dataKey="date" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} minTickGap={30} />
          <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: '#334155', opacity: 0.2 }} />
          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index === chartData.length - 1 ? '#c084fc' : '#22d3ee'} opacity={index === chartData.length - 1 ? 1 : 0.7} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  };

  return (
    <section className="py-12 relative z-10" id="earnings-analytics">
      <FadeIn>
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-2">Earnings Analytics</h2>
            <p className="text-gray-400">Track the performance of your referral network.</p>
          </div>
          
          <div className="flex items-center space-x-2 mt-4 md:mt-0 p-1 bg-aura-900/50 rounded-lg border border-aura-700/50">
            {['7D', '30D', '90D', 'All'].map((tf) => (
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
        <Card className="bg-aura-800/30 border-aura-700/50 p-6">
          <div className="flex flex-wrap gap-4 mb-8 border-b border-aura-700/50 pb-4">
            {(['daily', 'weekly', 'monthly', 'conversion'] as const).map((type) => {
              const labels = {
                daily: 'Daily Rewards',
                weekly: 'Weekly Growth',
                monthly: 'Monthly Income',
                conversion: 'Conversion Trend'
              };
              return (
                <button
                  key={type}
                  onClick={() => setChartType(type)}
                  className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                    chartType === type 
                      ? 'bg-aura-accent/10 text-aura-accent border border-aura-accent/20' 
                      : 'text-gray-400 hover:text-white hover:bg-aura-800/50 border border-transparent'
                  }`}
                >
                  {labels[type]}
                </button>
              );
            })}
          </div>

          <div className="w-full h-[300px] pt-4 pb-2">
            {renderChart()}
          </div>
        </Card>
      </SlideUp>
    </section>
  );
}
