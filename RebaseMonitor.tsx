import React from 'react';
import { Card } from '../../components/ui/Card';
import { RefreshCw, TrendingUp, Clock, Target } from 'lucide-react';
import { SlideUp } from '@/src/components/animations';

export function RebaseMonitor() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <SlideUp delay={0.1}>
          <Card className="p-4 border-gray-800/50 bg-gray-900/50">
            <div className="flex items-center gap-3 mb-2">
              <RefreshCw className="w-5 h-5 text-aura-500" />
              <h3 className="text-gray-400 text-sm font-medium">Current Epoch</h3>
            </div>
            <p className="text-2xl font-bold text-white tracking-tight">43</p>
          </Card>
        </SlideUp>
        <SlideUp delay={0.2}>
          <Card className="p-4 border-gray-800/50 bg-gray-900/50">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-5 h-5 text-blue-500" />
              <h3 className="text-gray-400 text-sm font-medium">Next Rebase</h3>
            </div>
            <p className="text-2xl font-bold text-white tracking-tight">04:12:35</p>
          </Card>
        </SlideUp>
        <SlideUp delay={0.3}>
          <Card className="p-4 border-gray-800/50 bg-gray-900/50">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <h3 className="text-gray-400 text-sm font-medium">Current APY</h3>
            </div>
            <p className="text-2xl font-bold text-white tracking-tight">214.5%</p>
          </Card>
        </SlideUp>
        <SlideUp delay={0.4}>
          <Card className="p-4 border-gray-800/50 bg-gray-900/50">
            <div className="flex items-center gap-3 mb-2">
              <Target className="w-5 h-5 text-purple-500" />
              <h3 className="text-gray-400 text-sm font-medium">Rebase Efficiency</h3>
            </div>
            <p className="text-2xl font-bold text-white tracking-tight">98.2%</p>
          </Card>
        </SlideUp>
      </div>
      
      <SlideUp delay={0.5}>
        <Card className="p-6 border-gray-800/50 bg-gray-900/50">
          <h2 className="text-xl font-bold text-white mb-6">Compounding Curve & APY Trend</h2>
          <div className="h-64 flex items-center justify-center border border-gray-800 rounded-lg bg-gray-950/50">
             <div className="text-center text-gray-500">
               <TrendingUp className="w-8 h-8 mx-auto mb-2 opacity-50" />
               <p>Interactive APY chart will render here.</p>
             </div>
          </div>
        </Card>
      </SlideUp>
    </div>
  );
}
