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

export function RewardAnalytics() {
  const [timeframe, setTimeframe] = useState('30D');
  const [chartType, setChartType] = useState<'rewards' | 'activity' | 'reputation' | 'participation'>('rewards');

  const chartData = useMemo(() => {
    const data = [];
    const now = new Date();
    const days = timeframe === '7D' ? 7 : timeframe === '30D' ? 30 : timeframe === '90D' ? 90 : 365;
    
    for (let i = days; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      
      let value;
      if (chartType === 'rewards') {
        value = Math.random() * 50 + 10;
      } else if (chartType === 'activity') {
        value = Math.floor(Math.random() * 5);
      } else if (chartType === 'reputation') {
        // cumulative growth
        value = 50 + (days - i) * (50 / days) + (Math.random() * 5 - 2.5);
      } else {
        // participation trend
        value = 60 + Math.random() * 40;
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
            {payload[0].value} {chartType === 'participation' ? '%' : chartType === 'rewards' ? 'AURAXX' : chartType === 'activity' ? 'Votes' : 'Score'}
          </p>
        </div>
      );
    }
    return null;
  };

  const renderChart = () => {
    if (chartType === 'reputation' || chartType === 'participation') {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValueDAO" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={chartType === 'reputation' ? '#c084fc' : '#22d3ee'} stopOpacity={0.3} />
                <stop offset="95%" stopColor={chartType === 'reputation' ? '#c084fc' : '#22d3ee'} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} opacity={0.5} />
            <XAxis dataKey="date" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} minTickGap={30} />
            <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} domain={chartType === 'participation' ? [0, 100] : ['auto', 'auto']} tickFormatter={(v) => chartType === 'participation' ? `${v}%` : v} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="value" stroke={chartType === 'reputation' ? '#c084fc' : '#22d3ee'} strokeWidth={3} fillOpacity={1} fill="url(#colorValueDAO)" />
          </AreaChart>
        </ResponsiveContainer>
      );
    }

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} opacity={0.5} />
          <XAxis dataKey="date" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} minTickGap={30} />
          <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} allowDecimals={false} />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: '#334155', opacity: 0.2 }} />
          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index === chartData.length - 1 ? (chartType === 'rewards' ? '#22d3ee' : '#c084fc') : (chartType === 'rewards' ? '#22d3ee' : '#c084fc')} opacity={index === chartData.length - 1 ? 1 : 0.7} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  };

  return (
    <section className="py-12 relative z-10" id="reward-analytics">
      <FadeIn>
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-2">Governance Analytics</h2>
            <p className="text-gray-400">Track your participation and rewards over time.</p>
          </div>
          
          <div className="flex items-center space-x-2 mt-4 md:mt-0 p-1 bg-aura-900/50 rounded-lg border border-aura-700/50">
            {['7D', '30D', '90D', 'All Time'].map((tf) => (
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
            {(['rewards', 'activity', 'reputation', 'participation'] as const).map((type) => {
              const labels = {
                rewards: 'Governance Rewards',
                activity: 'Voting Activity',
                reputation: 'Reputation Growth',
                participation: 'Participation Trend'
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
