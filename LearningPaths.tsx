import React from 'react';
import { Card } from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';
import { FadeIn, SlideUp } from '@/src/components/animations';
import { Map, Clock, BookOpen, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const paths = [
  { title: 'Web3 Fundamentals', diff: 'Beginner', time: '4h 30m', lessons: 12, progress: 100, color: 'emerald' },
  { title: 'Smart Flexi Staking', diff: 'Intermediate', time: '3h 15m', lessons: 8, progress: 65, color: 'blue' },
  { title: 'Treasury Management', diff: 'Advanced', time: '5h 45m', lessons: 15, progress: 0, color: 'amber' },
  { title: 'Governance', diff: 'Intermediate', time: '2h 50m', lessons: 6, progress: 0, color: 'cyan' },
];

export function LearningPaths() {
  const getColorClasses = (color: string) => {
    switch(color) {
      case 'emerald': return 'text-emerald-400 bg-emerald-500';
      case 'amber': return 'text-amber-400 bg-amber-500';
      case 'cyan': return 'text-cyan-400 bg-cyan-500';
      default: return 'text-blue-400 bg-blue-500';
    }
  };

  return (
    <section className="py-12 relative z-10" id="learning-paths">
      <FadeIn>
        <div className="flex items-center space-x-3 mb-8">
          <div className="p-2 bg-indigo-500/10 rounded-lg">
            <Map className="w-6 h-6 text-indigo-400" />
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold text-white">Learning Paths</h2>
            <p className="text-gray-400">Structured journeys to master the CoreDeFi ecosystem.</p>
          </div>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {paths.map((path, index) => {
          const colorClasses = getColorClasses(path.color);
          const textColor = colorClasses.split(' ')[0];
          const bgColor = colorClasses.split(' ')[1];

          return (
            <SlideUp key={path.title} delay={index * 0.1}>
              <Card className="bg-aura-800/30 border-aura-700/50 p-6 h-full flex flex-col group hover:bg-aura-800/50 transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">{path.title}</h3>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${bgColor}/10 ${textColor}`}>
                    {path.diff}
                  </span>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-6">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1.5" />
                    {path.time}
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-1.5" />
                    {path.lessons} Lessons
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="flex justify-between items-center text-xs mb-2">
                    <span className="text-gray-400">Completion</span>
                    <span className="font-bold text-white">{path.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-aura-900 rounded-full overflow-hidden mb-4">
                    <motion.div 
                      className={`h-full ${bgColor}`} 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${path.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                  <Button variant="secondary" className="w-full justify-between group-hover:bg-indigo-500/20 group-hover:text-indigo-300 group-hover:border-indigo-500/30 transition-colors">
                    {path.progress === 100 ? 'Review Path' : path.progress > 0 ? 'Continue Learning' : 'Start Path'}
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </SlideUp>
          );
        })}
      </div>
    </section>
  );
}
