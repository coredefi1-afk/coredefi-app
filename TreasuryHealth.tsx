import React from 'react';
import { Shield, Activity, Droplets, HeartPulse } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';
import { motion } from 'motion/react';

export function TreasuryHealth() {
  return (
    <section className="py-12 relative z-10" id="treasury-health">
      <FadeIn>
        <div className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-2">Treasury Health Center</h2>
          <p className="text-gray-400">Comprehensive analysis of the protocol's financial resilience.</p>
        </div>
      </FadeIn>

      <SlideUp>
        <Card className="bg-aura-800/30 border-aura-700/50 p-6 md:p-8 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
            
            {/* Overall Score Graphic */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-48 h-48 flex items-center justify-center">
                {/* Background Track */}
                <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(30, 41, 59, 0.5)" strokeWidth="8" />
                  <motion.circle 
                    cx="50" cy="50" r="45" 
                    fill="none" 
                    stroke="url(#healthGradient)" 
                    strokeWidth="8" 
                    strokeLinecap="round"
                    initial={{ strokeDasharray: "283", strokeDashoffset: "283" }}
                    whileInView={{ strokeDashoffset: "5.66" }} // 98%
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
                  />
                  <defs>
                    <linearGradient id="healthGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22c55e" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                </svg>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-4xl font-display font-bold text-white mb-1">98</span>
                  <span className="text-xs font-medium uppercase tracking-wider text-emerald-400">Excellent</span>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center space-x-2">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                 <span className="text-sm font-medium text-gray-300">Live Health Indicator</span>
              </div>
            </div>

            {/* Sub Metrics */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-aura-900/50 border border-aura-700/50 p-5 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Reserve Strength</h4>
                    <p className="text-xs text-gray-400">Backing vs Liabilities</p>
                  </div>
                </div>
                <div className="w-full bg-aura-800 rounded-full h-2 mb-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '95%' }} />
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Target: 100%</span>
                  <span className="text-emerald-400 font-bold">145%</span>
                </div>
              </div>

              <div className="bg-aura-900/50 border border-aura-700/50 p-5 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                    <Droplets className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Liquidity Score</h4>
                    <p className="text-xs text-gray-400">Available Capital</p>
                  </div>
                </div>
                <div className="w-full bg-aura-800 rounded-full h-2 mb-2">
                  <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '92%' }} />
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Target: &gt;80</span>
                  <span className="text-cyan-400 font-bold">92/100</span>
                </div>
              </div>

              <div className="bg-aura-900/50 border border-aura-700/50 p-5 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-aura-purple/10 rounded-lg text-aura-purple">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Sustainability</h4>
                    <p className="text-xs text-gray-400">Yield vs Emissions</p>
                  </div>
                </div>
                <div className="w-full bg-aura-800 rounded-full h-2 mb-2">
                  <div className="bg-aura-purple h-2 rounded-full" style={{ width: '88%' }} />
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Target: &gt;85</span>
                  <span className="text-aura-purple font-bold">88/100</span>
                </div>
              </div>

              <div className="bg-aura-900/50 border border-aura-700/50 p-5 rounded-xl flex flex-col justify-center">
                 <div className="flex items-center justify-between mb-2">
                   <h4 className="font-bold text-white text-sm">Risk Indicator</h4>
                   <span className="px-2 py-0.5 rounded text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">Low Risk</span>
                 </div>
                 <p className="text-xs text-gray-400 leading-relaxed">Treasury is well-capitalized with a heavy stablecoin weighting, minimizing market volatility impact on protocol reserves.</p>
              </div>

            </div>

          </div>
        </Card>
      </SlideUp>
    </section>
  );
}
