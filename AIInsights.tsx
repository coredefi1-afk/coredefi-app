import React from 'react';
import { Card } from '../../components/ui/Card';
import { BrainCircuit, Lightbulb, AlertCircle, CheckCircle2 } from 'lucide-react';
import { SlideUp } from '@/src/components/animations';

export function AIInsights() {
  const insights = [
    { 
      type: 'recommendation', 
      title: 'Treasury Sustainability', 
      desc: 'Current backing ratio indicates we can sustain the 214% APY for the next 180 days even under high sell pressure scenarios.',
      icon: CheckCircle2,
      color: 'text-green-500'
    },
    { 
      type: 'warning', 
      title: 'Inflation Warning', 
      desc: 'Projected supply expansion is slightly outpacing treasury revenue. Consider a temporary 5% reduction in base emissions.',
      icon: AlertCircle,
      color: 'text-orange-500'
    },
    { 
      type: 'insight', 
      title: 'Governance Participation', 
      desc: 'We are seeing a 12% week-over-week increase in unique voting wallets, indicating strengthening community decentralization.',
      icon: Lightbulb,
      color: 'text-blue-500'
    },
    { 
      type: 'recommendation', 
      title: 'Liquidity Optimization', 
      desc: 'Shifting 15% of idle USDC into active concentrated liquidity ranges could generate an additional $45k/mo in trading fees.',
      icon: BrainCircuit,
      color: 'text-purple-500'
    },
  ];

  return (
    <SlideUp delay={0.1}>
      <Card className="p-6 border-gray-800/50 bg-gray-900/50">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <BrainCircuit className="w-5 h-5 text-aura-500" />
          AI Protocol Intelligence
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {insights.map((insight, i) => {
            const Icon = insight.icon;
            return (
              <div key={i} className="p-5 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:bg-gray-800/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-lg bg-gray-800 ${insight.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">{insight.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{insight.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </SlideUp>
  );
}
