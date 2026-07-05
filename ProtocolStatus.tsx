import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Clock, Activity, Users, ShieldCheck, Landmark, Flame } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn } from '@/src/components/animations';

const kpis = [
  { label: 'Current AURAXX Price', value: '$1.42', change: '+5.2%', isPositive: true, icon: TrendingUp },
  { label: 'Current Epoch', value: '4,291', desc: 'Rebase Every 6 Hours', icon: Clock },
  { label: 'Next Rebase In', value: '02:14:45', desc: 'Countdown', icon: Flame },
  { label: 'Total Value Locked', value: '$124.5M', change: '+2.1%', isPositive: true, icon: Activity },
  { label: 'Treasury Value', value: '$84.2M', change: '+1.5%', isPositive: true, icon: Landmark },
  { label: 'Protocol Health', value: '100%', desc: 'Optimal', icon: ShieldCheck },
  { label: 'Community Members', value: '124K', change: '+420 today', isPositive: true, icon: Users },
  { label: 'Active Stakers', value: '45,231', change: '+124 today', isPositive: true, icon: Activity },
];

export function ProtocolStatus() {
  return (
    <section className="py-12 relative z-10" id="protocol-status">
      <FadeIn>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-2">Live Protocol Status</h2>
            <p className="text-gray-400">Real-time ecosystem metrics and health indicators</p>
          </div>
          <div className="hidden sm:flex items-center text-xs font-medium text-aura-accent px-3 py-1 rounded-full bg-aura-accent/10 border border-aura-accent/20">
            <span className="w-1.5 h-1.5 rounded-full bg-aura-accent mr-2 animate-pulse" />
            Live Updates
          </div>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <Card className="h-full bg-aura-800/40 border-aura-700/50 hover:bg-aura-800/60 transition-colors group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-aura-accent/0 to-aura-accent/0 group-hover:from-aura-accent/5 group-hover:to-transparent transition-colors duration-500" />
                <div className="p-5">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 rounded-lg bg-aura-900/80 border border-aura-700/50 group-hover:border-aura-accent/30 transition-colors">
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-aura-accent transition-colors" />
                    </div>
                    {kpi.change && (
                      <span className={`text-xs font-medium px-2 py-1 rounded-md ${kpi.isPositive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
                        {kpi.change}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-medium text-gray-400 mb-1">{kpi.label}</p>
                  <p className="text-2xl font-display font-bold text-white group-hover:text-aura-accent transition-colors duration-300">
                    {kpi.value}
                  </p>
                  {kpi.desc && (
                    <p className="text-xs text-gray-500 mt-1">{kpi.desc}</p>
                  )}
                </div>
                
                {/* Mini sparkline placeholder effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-aura-900">
                  <motion.div 
                    className="h-full bg-aura-accent/40" 
                    initial={{ width: "30%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                  />
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
