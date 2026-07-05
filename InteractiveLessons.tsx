import React from 'react';
import { Card } from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';
import { FadeIn, SlideUp } from '@/src/components/animations';
import { CheckCircle2, Circle, ChevronLeft, ChevronRight, Bookmark, BookOpen, Layers } from 'lucide-react';
import { motion } from 'motion/react';

const syllabus = [
  { id: 1, title: 'Introduction to Flexi-Staking', completed: true },
  { id: 2, title: 'Understanding Emission Curves', completed: true },
  { id: 3, title: 'Calculating Auto-Compound APY', completed: false, active: true },
  { id: 4, title: 'Risk vs. Reward Mechanics', completed: false },
  { id: 5, title: 'Unstaking and Cool-down Periods', completed: false },
];

export function InteractiveLessons() {
  return (
    <section className="py-12 relative z-10" id="interactive-lessons">
      <FadeIn>
        <div className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-2">Interactive Lesson Environment</h2>
          <p className="text-gray-400">Preview of the immersive learning interface.</p>
        </div>
      </FadeIn>

      <SlideUp>
        <Card className="bg-aura-900 border-aura-700/50 p-0 overflow-hidden flex flex-col md:flex-row min-h-[600px]">
          
          {/* Sidebar */}
          <div className="w-full md:w-64 lg:w-80 bg-aura-950 border-r border-aura-700/50 flex flex-col">
             <div className="p-4 border-b border-aura-700/50">
                <h3 className="font-bold text-white mb-1">Smart Flexi Staking</h3>
                <p className="text-xs text-gray-500">Module 2 • 5 Lessons</p>
                <div className="mt-4 w-full h-1.5 bg-aura-800 rounded-full overflow-hidden">
                   <div className="h-full bg-blue-500 rounded-full" style={{ width: '40%' }} />
                </div>
             </div>
             <div className="flex-1 overflow-y-auto p-2 custom-scrollbar">
                {syllabus.map((item) => (
                  <button 
                    key={item.id}
                    className={`w-full flex items-start text-left p-3 rounded-lg transition-colors mb-1 ${
                      item.active 
                        ? 'bg-blue-500/10 border border-blue-500/20 text-blue-400' 
                        : 'text-gray-400 hover:bg-aura-800 hover:text-white'
                    }`}
                  >
                     {item.completed ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0 mr-3" />
                     ) : item.active ? (
                        <div className="w-4 h-4 rounded-full border-2 border-blue-400 mt-0.5 shrink-0 mr-3 flex items-center justify-center">
                           <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                        </div>
                     ) : (
                        <Circle className="w-4 h-4 text-gray-600 mt-0.5 shrink-0 mr-3" />
                     )}
                     <span className="text-sm font-medium leading-tight">{item.title}</span>
                  </button>
                ))}
             </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col bg-aura-900">
             {/* Top Bar */}
             <div className="h-14 border-b border-aura-700/50 flex items-center justify-between px-4 lg:px-8">
                <div className="flex items-center text-sm font-medium text-gray-300">
                   <BookOpen className="w-4 h-4 mr-2 text-blue-400" />
                   Reading
                </div>
                <button className="p-2 text-gray-400 hover:text-white hover:bg-aura-800 rounded-lg transition-colors">
                   <Bookmark className="w-4 h-4" />
                </button>
             </div>

             {/* Lesson Content */}
             <div className="flex-1 overflow-y-auto p-6 lg:p-10 custom-scrollbar">
                <div className="max-w-3xl mx-auto prose prose-invert prose-blue">
                   <h1 className="text-3xl font-display font-bold text-white mb-6">Calculating Auto-Compound APY</h1>
                   <p className="text-gray-300 leading-relaxed text-lg mb-8">
                      Unlike traditional staking where rewards sit idle, Aura's Auto-Compounding feature automatically harvests and restakes your earnings at optimal intervals. This creates an exponential growth curve.
                   </p>

                   {/* Mock Interactive Diagram */}
                   <div className="my-10 p-6 rounded-2xl border border-aura-700/50 bg-aura-800/30 relative overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
                      <div className="flex items-center justify-between mb-6">
                         <h4 className="text-white font-bold m-0 flex items-center"><Layers className="w-4 h-4 mr-2 text-indigo-400" /> APY vs APR Comparison</h4>
                         <span className="text-xs text-gray-500 bg-aura-900 px-2 py-1 rounded">Interactive</span>
                      </div>
                      <div className="h-48 flex items-end space-x-8 px-4">
                         <div className="flex-1 flex flex-col items-center group">
                            <span className="text-sm text-gray-400 mb-2 group-hover:text-white transition-colors">Standard APR</span>
                            <motion.div className="w-full bg-blue-500/20 border border-blue-500/50 rounded-t-lg relative" initial={{ height: 0 }} whileInView={{ height: '60%' }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}>
                               <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-blue-400">10.0%</div>
                            </motion.div>
                         </div>
                         <div className="flex-1 flex flex-col items-center group">
                            <span className="text-sm text-gray-400 mb-2 group-hover:text-white transition-colors">Auto-Compound APY</span>
                            <motion.div className="w-full bg-indigo-500/40 border border-indigo-500/50 rounded-t-lg relative" initial={{ height: 0 }} whileInView={{ height: '85%' }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4 }}>
                               <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-indigo-400">10.51%</div>
                            </motion.div>
                         </div>
                      </div>
                      <div className="mt-6 flex justify-center space-x-4">
                         <button className="px-3 py-1.5 rounded bg-aura-900 text-xs text-gray-300 hover:text-white border border-aura-700 transition-colors">Daily Compound</button>
                         <button className="px-3 py-1.5 rounded bg-indigo-500/20 text-xs text-indigo-300 border border-indigo-500/30 transition-colors">Optimal (Hourly)</button>
                      </div>
                   </div>

                   <h3 className="text-xl font-bold text-white mb-4 mt-8">The Formula</h3>
                   <p className="text-gray-400 mb-4">The formula for calculating APY with periodic compounding is:</p>
                   
                   {/* Mock Code Block */}
                   <div className="bg-[#0d1117] rounded-lg p-4 border border-aura-700/50 mb-8 font-mono text-sm overflow-x-auto text-gray-300">
                      <span className="text-fuchsia-400">APY</span> = (1 + <span className="text-blue-400">r</span> / <span className="text-emerald-400">n</span>)^<span className="text-emerald-400">n</span> - 1
                      <br/><br/>
                      <span className="text-gray-500">// Where:</span><br/>
                      <span className="text-gray-500">// r = Annual Interest Rate (APR)</span><br/>
                      <span className="text-gray-500">// n = Number of compounding periods per year</span>
                   </div>
                </div>
             </div>

             {/* Bottom Navigation */}
             <div className="p-4 border-t border-aura-700/50 flex items-center justify-between bg-aura-950">
                <Button variant="ghost" className="text-gray-400 hover:text-white">
                   <ChevronLeft className="w-4 h-4 mr-2" /> Previous Lesson
                </Button>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                   Complete & Continue <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
             </div>
          </div>
        </Card>
      </SlideUp>
    </section>
  );
}
