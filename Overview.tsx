import React from 'react';
import { Card } from '../../components/ui/Card';
import { PieChart, Activity, DollarSign, Lock, Flame, Coins, ShieldCheck, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { SlideUp } from '@/src/components/animations';

export function TokenomicsOverview() {
  const metrics = [
    { label: 'Total Supply', value: '1,000,000,000 AURAX', icon: PieChart, color: 'text-aura-500' },
    { label: 'Circulating Supply', value: '450,000,000 AURAX', icon: Activity, color: 'text-green-500' },
    { label: 'Locked Supply', value: '350,000,000 AURAX', icon: Lock, color: 'text-blue-500' },
    { label: 'Treasury Backing', value: '150,000,000 AURAX', icon: ShieldCheck, color: 'text-purple-500' },
    { label: 'Burned Tokens', value: '50,000,000 AURAX', icon: Flame, color: 'text-orange-500' },
    { label: 'Staked Tokens', value: '300,000,000 AURAX', icon: Coins, color: 'text-cyan-500' },
    { label: 'Inflation Rate', value: '4.5% / yr', icon: ArrowUpRight, color: 'text-red-500' },
    { label: 'Deflation Rate', value: '2.1% / yr', icon: ArrowDownRight, color: 'text-green-500' },
    { label: 'Market Cap', value: '$45,000,000', icon: DollarSign, color: 'text-yellow-500' },
    { label: 'Fully Diluted Valuation', value: '$100,000,000', icon: DollarSign, color: 'text-yellow-500' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      {metrics.map((metric, i) => {
        const Icon = metric.icon;
        return (
          <SlideUp key={metric.label} delay={i * 0.05}>
            <Card className="p-4 border-gray-800/50 bg-gray-900/50 hover:bg-gray-900/80 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 bg-gray-800 rounded-lg ${metric.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-gray-400 text-sm font-medium">{metric.label}</h3>
              </div>
              <p className="text-xl font-bold text-white tracking-tight">{metric.value}</p>
            </Card>
          </SlideUp>
        );
      })}
    </div>
  );
}
