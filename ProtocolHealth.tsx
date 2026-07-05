import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { SlideUp } from '@/src/components/animations';
import { 
  Heart, ShieldAlert, BrainCircuit, TrendingUp, AlertTriangle, 
  CheckCircle2, ArrowRight, Zap, Info
} from 'lucide-react';

export function ProtocolHealth() {
  const healthMetrics = [
    { label: 'Total Value Locked', value: '$84.2M', status: 'Healthy', trend: '+4.2%' },
    { label: 'Treasury Reserves', value: '$12.5M', status: 'Healthy', trend: '+1.1%' },
    { label: 'Liquidity Depth', value: '$22.4M', status: 'Warning', trend: '-2.4%' },
    { label: 'Protocol Revenue (30d)', value: '$450K', status: 'Healthy', trend: '+12.5%' },
    { label: 'Reward Emissions', value: '45K AURAX/d', status: 'Optimal', trend: '0%' },
  ];

  const anomalies = [
    { type: 'Liquidity Drop', severity: 'High', conf: '94%', desc: 'Sudden 15% drop in DEX liquidity for AURAX/ETH pair.', time: '10m ago' },
    { type: 'Whale Movement', severity: 'Medium', conf: '88%', desc: 'Large unstaking event (250K AURAX) detected from top 10 holder.', time: '1h ago' },
    { type: 'Governance Spike', severity: 'Low', conf: '98%', desc: 'Unusual spike in voting activity on Proposal #42.', time: '3h ago' },
  ];

  const aiInsights = [
    { title: 'Ecosystem Growth', desc: 'Active wallets have increased by 12% WoW, driven by recent launchpad sales.' },
    { title: 'Treasury Sustainability', desc: 'Current runway is 34 months at present emission rates. Low risk of depletion.' },
    { title: 'Staking Trend', desc: 'Average lock duration has increased to 8.4 months, indicating strong long-term conviction.' },
  ];

  return (
    <div className="space-y-6">
      <SlideUp delay={0.1}>
        <Card className="p-6 border-aura-500/20 bg-gradient-to-br from-gray-900 to-aura-900/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full border-4 border-green-500/30 flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full border-4 border-green-500 border-l-transparent animate-spin-slow" />
              <span className="text-2xl font-bold text-white">92</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">Unified Health Score</h2>
              <p className="text-gray-400 text-sm">Aggregated health index across TVL, liquidity, and treasury.</p>
            </div>
          </div>
          <Button variant="outline" className="gap-2">
            <Info className="w-4 h-4" /> View Methodology
          </Button>
        </Card>
      </SlideUp>

      <SlideUp delay={0.2}>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {healthMetrics.map((metric, i) => (
            <Card key={i} className="p-4 border-gray-800/50 bg-gray-900/50">
              <h3 className="text-gray-400 text-xs mb-2">{metric.label}</h3>
              <div className="text-xl font-bold text-white mb-2">{metric.value}</div>
              <div className="flex items-center justify-between text-xs font-medium">
                <span className={metric.status === 'Warning' ? 'text-yellow-400' : 'text-green-400'}>
                  {metric.status}
                </span>
                <span className={metric.trend.startsWith('-') ? 'text-red-400' : 'text-green-400'}>
                  {metric.trend}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </SlideUp>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SlideUp delay={0.3}>
          <Card className="p-6 border-gray-800/50 bg-gray-900/50 h-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-red-400" /> AI Anomaly Detection
              </h3>
              <span className="text-xs font-medium bg-red-500/10 text-red-400 px-2 py-1 rounded">3 Active</span>
            </div>
            
            <div className="space-y-4">
              {anomalies.map((anomaly, i) => (
                <div key={i} className="p-4 rounded-xl bg-gray-950/50 border border-gray-800 flex flex-col gap-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className={`w-4 h-4 ${anomaly.severity === 'High' ? 'text-red-500' : anomaly.severity === 'Medium' ? 'text-yellow-500' : 'text-blue-500'}`} />
                      <span className="font-bold text-white text-sm">{anomaly.type}</span>
                    </div>
                    <span className="text-xs text-gray-500">{anomaly.time}</span>
                  </div>
                  <p className="text-sm text-gray-400">{anomaly.desc}</p>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-800">
                    <span className="text-xs text-gray-500">AI Confidence: <span className="text-aura-400">{anomaly.conf}</span></span>
                    <Button variant="outline" size="sm" className="h-6 text-xs px-2">Analyze</Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </SlideUp>

        <SlideUp delay={0.4}>
          <Card className="p-6 border-gray-800/50 bg-gray-900/50 h-full">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-6">
              <BrainCircuit className="w-5 h-5 text-aura-500" /> AI Insight Engine
            </h3>
            <div className="space-y-4">
              {aiInsights.map((insight, i) => (
                <div key={i} className="p-4 rounded-xl bg-aura-900/10 border border-aura-500/20">
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-aura-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-medium text-sm mb-1">{insight.title}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{insight.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="default" className="w-full mt-6 gap-2">
              Generate New Report <ArrowRight className="w-4 h-4" />
            </Button>
          </Card>
        </SlideUp>
      </div>
    </div>
  );
}
