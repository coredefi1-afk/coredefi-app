import React from 'react';
import { Book, CheckCircle, Clock, Award, Star, Flame, Trophy, TrendingUp } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';
import { motion } from 'motion/react';

const metrics = [
  { label: 'Courses Enrolled', value: '4', icon: Book, color: 'text-blue-400' },
  { label: 'Lessons Completed', value: '28', icon: CheckCircle, color: 'text-emerald-400' },
  { label: 'Learning Hours', value: '12.5', icon: Clock, color: 'text-amber-400' },
  { label: 'Certificates Earned', value: '2', icon: Award, color: 'text-fuchsia-400' },
  { label: 'Quiz Score (Avg)', value: '92%', icon: Star, color: 'text-yellow-400' },
  { label: 'Learning Streak', value: '7 Days', icon: Flame, color: 'text-orange-400' },
  { label: 'Skill Level', value: 'Advanced', icon: Trophy, color: 'text-purple-400' },
  { label: 'Overall Progress', value: '64%', icon: TrendingUp, color: 'text-cyan-400' },
];

export function LearningDashboard() {
  return (
    <section className="py-12 relative z-10" id="learning-dashboard">
      <FadeIn>
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-2">Learning Dashboard</h2>
            <p className="text-gray-400">Track your progress and achievements across the academy.</p>
          </div>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <SlideUp key={metric.label} delay={index * 0.05} className="h-full">
              <Card className="h-full bg-aura-800/40 border-aura-700/50 hover:bg-aura-800/60 transition-colors group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-transparent transition-colors duration-500" />
                
                <div className="p-5 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <p className="text-sm font-medium text-gray-400">{metric.label}</p>
                    <div className="p-2 rounded-lg bg-aura-900/80 border border-aura-700/50 group-hover:border-blue-500/30 transition-colors">
                      <Icon className={`w-4 h-4 ${metric.color}`} />
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex items-baseline space-x-2">
                      <span className={`text-2xl font-display font-bold text-white group-hover:${metric.color} transition-colors duration-300`}>
                        {metric.value}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Progress bar for "Overall Progress" or "Quiz Score" style metrics */}
                {metric.value.includes('%') && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-aura-900">
                    <motion.div 
                      className={`h-full opacity-50 ${metric.color.replace('text-', 'bg-')}`} 
                      initial={{ width: 0 }}
                      whileInView={{ width: metric.value }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                    />
                  </div>
                )}
              </Card>
            </SlideUp>
          );
        })}
      </div>
    </section>
  );
}
