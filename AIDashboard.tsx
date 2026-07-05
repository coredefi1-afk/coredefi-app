import React from 'react';
import { MessageSquare, CheckCircle, Database, Clock, Lightbulb, Smile, Zap, Activity } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';
import { motion } from 'motion/react';

const metrics = [
  { label: 'AI Conversations', value: '1.2', symbol: 'M', icon: MessageSquare, color: 'text-blue-400' },
  { label: 'Questions Answered', value: '3.4', symbol: 'M', icon: CheckCircle, color: 'text-emerald-400' },
  { label: 'Knowledge Coverage', value: '99', symbol: '%', icon: Database, color: 'text-aura-accent' },
  { label: 'Avg. Response Time', value: '1.2', symbol: 's', icon: Clock, color: 'text-amber-400' },
  { label: 'Suggested Topics', value: '450', symbol: '+', icon: Lightbulb, color: 'text-fuchsia-400' },
  { label: 'User Satisfaction', value: '4.8', symbol: '/5', icon: Smile, color: 'text-cyan-400' },
  { label: 'AI Confidence Score', value: '98', symbol: '%', icon: Zap, color: 'text-emerald-400' },
  { label: 'System Status', value: 'Online', symbol: '', icon: Activity, color: 'text-green-400' },
];

export function AIDashboard() {
  return (
    <section className="py-12 relative z-10" id="ai-dashboard">
      <FadeIn>
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-2">AI Dashboard</h2>
            <p className="text-gray-400">Real-time metrics on CoreDeFi AI performance and usage.</p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-green-400 bg-green-500/10 px-3 py-1.5 rounded-full border border-green-500/20">
             <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
             <span>Live Status</span>
          </div>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <SlideUp key={metric.label} delay={index * 0.05} className="h-full">
              <Card className="h-full bg-aura-800/40 border-aura-700/50 hover:bg-aura-800/60 transition-colors group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 to-fuchsia-500/0 group-hover:from-fuchsia-500/5 group-hover:to-transparent transition-colors duration-500" />
                
                <div className="p-5 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <p className="text-sm font-medium text-gray-400">{metric.label}</p>
                    <div className="p-2 rounded-lg bg-aura-900/80 border border-aura-700/50 group-hover:border-fuchsia-500/30 transition-colors">
                      <Icon className={`w-4 h-4 ${metric.color}`} />
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex items-baseline space-x-2">
                      <span className={`text-2xl font-display font-bold ${metric.value === 'Online' ? 'text-green-400' : 'text-white group-hover:text-fuchsia-400'} transition-colors duration-300`}>
                        {metric.value}
                      </span>
                      {metric.symbol && (
                        <span className="text-sm font-medium text-gray-500">{metric.symbol}</span>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Mini sparkline placeholder effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-aura-900">
                  <motion.div 
                    className={`h-full opacity-50 ${metric.color.replace('text-', 'bg-')}`} 
                    initial={{ width: "20%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                  />
                </div>
              </Card>
            </SlideUp>
          );
        })}
      </div>
    </section>
  );
}
