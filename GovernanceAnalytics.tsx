import React, { useState } from 'react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export function GovernanceAnalytics() {
  const [timeframe, setTimeframe] = useState('30D');

  const activityData = Array.from({ length: 30 }, (_, i) => ({
    date: `Day ${i + 1}`,
    proposals: Math.floor(Math.random() * 5),
    votes: Math.floor(1000 + Math.random() * 5000),
  }));

  const participationData = Array.from({ length: 30 }, (_, i) => ({
    date: `Day ${i + 1}`,
    rate: 45 + (i * 0.5) + Math.random() * 10,
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-aura-900/95 border border-aura-700/50 p-3 rounded-lg shadow-xl backdrop-blur-sm">
          <p className="text-gray-400 text-xs mb-1">{label}</p>
          {payload.map((entry: any, index: number) => (
             <p key={index} className="font-bold text-sm" style={{ color: entry.color }}>
               {entry.name}: {entry.value}
             </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-12 relative z-10" id="governance-analytics">
      <FadeIn>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-2">Governance Analytics</h2>
            <p className="text-gray-400">Trends in DAO participation and decision-making.</p>
          </div>
          <div className="flex items-center space-x-1 mt-4 md:mt-0 p-1 bg-aura-900/50 rounded-lg border border-aura-700/50">
            {['7D', '30D', '90D', 'All Time'].map((tf) => (
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <SlideUp>
          <Card className="bg-aura-800/30 border-aura-700/50 p-6 h-full">
            <h3 className="text-lg font-bold text-white mb-6">Voting Activity</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={activityData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} opacity={0.3} />
                  <XAxis dataKey="date" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} minTickGap={10} />
                  <YAxis yAxisId="left" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `${(v/1000).toFixed(0)}k`} />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: '#334155', opacity: 0.2 }} />
                  <Bar yAxisId="left" name="Votes Cast" dataKey="votes" fill="#10b981" radius={[4, 4, 0, 0]} opacity={0.8} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </SlideUp>

        <SlideUp delay={0.1}>
          <Card className="bg-aura-800/30 border-aura-700/50 p-6 h-full">
            <h3 className="text-lg font-bold text-white mb-6">Participation Rate Growth</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={participationData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorPart" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} opacity={0.3} />
                  <XAxis dataKey="date" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} minTickGap={10} />
                  <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}%`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area type="monotone" name="Participation" dataKey="rate" stroke="#06b6d4" strokeWidth={3} fillOpacity={1} fill="url(#colorPart)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </SlideUp>
      </div>
    </section>
  );
}
