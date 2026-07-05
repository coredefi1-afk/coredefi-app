import React, { useState } from 'react';
import { Card } from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';
import { FadeIn, SlideUp } from '@/src/components/animations';
import { PenTool, Target, Calendar, DollarSign, UploadCloud, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function ProposalCreation() {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const steps = [
    { id: 1, title: 'Basic Info', icon: PenTool },
    { id: 2, title: 'Details', icon: Target },
    { id: 3, title: 'Budget & Timeline', icon: DollarSign },
    { id: 4, title: 'Review', icon: CheckCircleIcon }
  ];

  function CheckCircleIcon(props: any) {
    return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
  }

  return (
    <section className="py-12 relative z-10" id="create-proposal">
      <FadeIn>
        <div className="mb-8 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-2">Create Proposal</h2>
          <p className="text-gray-400">Shape the ecosystem by submitting a structured governance proposal.</p>
        </div>
      </FadeIn>

      <SlideUp className="max-w-4xl mx-auto">
        <Card className="bg-aura-800/30 border-aura-700/50 p-0 overflow-hidden">
          
          {/* Progress Header */}
          <div className="bg-aura-900/50 border-b border-aura-700/50 p-6 flex justify-between items-center relative">
             <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-500" style={{ width: `${(step / totalSteps) * 100}%` }} />
             
             {steps.map((s) => {
                const Icon = s.icon;
                const isActive = step >= s.id;
                return (
                  <div key={s.id} className="flex flex-col items-center flex-1 relative z-10">
                     <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 mb-2 transition-colors ${isActive ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' : 'bg-aura-800 border-aura-700 text-gray-500'}`}>
                        <Icon className="w-4 h-4" />
                     </div>
                     <span className={`text-xs font-medium hidden md:block ${isActive ? 'text-white' : 'text-gray-500'}`}>{s.title}</span>
                  </div>
                )
             })}
          </div>

          {/* Form Content Area */}
          <div className="p-6 md:p-10 min-h-[400px]">
             <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                     <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Proposal Title</label>
                        <input type="text" placeholder="e.g. Integrate Chainlink Price Feeds" className="w-full bg-aura-900/50 border border-aura-700/50 rounded-xl p-3 text-white focus:outline-none focus:border-emerald-500/50 transition-colors" />
                     </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                        <select className="w-full bg-aura-900/50 border border-aura-700/50 rounded-xl p-3 text-white focus:outline-none focus:border-emerald-500/50 transition-colors appearance-none">
                           <option>Protocol Upgrade</option>
                           <option>Treasury Allocation</option>
                           <option>Integrations</option>
                           <option>Ecosystem Growth</option>
                        </select>
                     </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Executive Summary</label>
                        <textarea placeholder="Briefly describe the proposal..." className="w-full bg-aura-900/50 border border-aura-700/50 rounded-xl p-3 text-white focus:outline-none focus:border-emerald-500/50 transition-colors resize-none h-24" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Full Description (Markdown supported)</label>
                        <textarea placeholder="Provide detailed specifications, objectives, and risks..." className="w-full bg-aura-900/50 border border-aura-700/50 rounded-xl p-3 text-white focus:outline-none focus:border-emerald-500/50 transition-colors resize-none h-48" />
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                           <label className="block text-sm font-medium text-gray-300 mb-2">Requested Budget (AURAXX)</label>
                           <div className="relative">
                              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                              <input type="number" placeholder="0.00" className="w-full bg-aura-900/50 border border-aura-700/50 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-emerald-500/50 transition-colors" />
                           </div>
                        </div>
                        <div>
                           <label className="block text-sm font-medium text-gray-300 mb-2">Execution Timeline (Days)</label>
                           <div className="relative">
                              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                              <input type="number" placeholder="e.g. 30" className="w-full bg-aura-900/50 border border-aura-700/50 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-emerald-500/50 transition-colors" />
                           </div>
                        </div>
                     </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Attachments (Optional)</label>
                        <div className="border-2 border-dashed border-aura-700/50 rounded-xl p-8 text-center bg-aura-900/20 hover:bg-aura-900/40 transition-colors cursor-pointer group">
                           <UploadCloud className="w-8 h-8 text-gray-500 mx-auto mb-3 group-hover:text-emerald-400 transition-colors" />
                           <p className="text-sm text-gray-400">Drag and drop files, or <span className="text-emerald-400">browse</span></p>
                           <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG up to 10MB</p>
                        </div>
                     </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                       <CheckCircleIcon className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Ready to Submit</h3>
                    <p className="text-gray-400 mb-8 max-w-md mx-auto">Please review your proposal details. Once submitted, it will enter the draft phase for community review before proceeding to an on-chain vote.</p>
                    
                    <div className="bg-aura-900/50 border border-aura-700/50 rounded-xl p-6 text-left mb-8 max-w-md mx-auto">
                       <div className="flex justify-between mb-2">
                          <span className="text-gray-400">Creation Fee</span>
                          <span className="text-white">100 AURAXX</span>
                       </div>
                       <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Refundable upon approval</span>
                       </div>
                    </div>
                  </motion.div>
                )}
             </AnimatePresence>
          </div>

          {/* Footer Navigation */}
          <div className="bg-aura-900/50 border-t border-aura-700/50 p-6 flex justify-between">
             <Button 
                variant="ghost" 
                className="text-gray-400 hover:text-white"
                onClick={() => setStep(Math.max(1, step - 1))}
                disabled={step === 1}
             >
                Back
             </Button>
             
             {step < totalSteps ? (
                <Button 
                   className="bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/50 group"
                   onClick={() => setStep(Math.min(totalSteps, step + 1))}
                >
                   Next Step
                   <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
             ) : (
                <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white border-0 shadow-glow">
                   Submit Proposal
                </Button>
             )}
          </div>

        </Card>
      </SlideUp>
    </section>
  );
}
