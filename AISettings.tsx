import React from 'react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';
import { Settings, Sliders, Bell, Shield, Trash2, Cpu } from 'lucide-react';

export function AISettings() {
  return (
    <section className="py-12 relative z-10" id="ai-settings">
      <FadeIn>
        <div className="flex items-center space-x-3 mb-8">
          <div className="p-2 bg-gray-500/10 rounded-lg">
            <Settings className="w-6 h-6 text-gray-400" />
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold text-white">AI Settings</h2>
            <p className="text-gray-400">Customize your Copilot experience.</p>
          </div>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SlideUp delay={0.1}>
          <Card className="bg-aura-800/30 border-aura-700/50 p-6">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
               <Sliders className="w-4 h-4 mr-2 text-cyan-400" /> Preferences
            </h3>
            
            <div className="space-y-6">
               <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">AI Model</label>
                  <select className="w-full bg-aura-900/50 border border-aura-700/50 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-cyan-500/50">
                     <option>CoreDeFi Intelligence v2.0 (Default)</option>
                     <option>CoreDeFi Pro (Advanced Analysis)</option>
                  </select>
               </div>
               
               <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Response Style</label>
                  <select className="w-full bg-aura-900/50 border border-aura-700/50 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-cyan-500/50">
                     <option>Balanced & Conversational</option>
                     <option>Concise & Data-Driven</option>
                     <option>Beginner Friendly</option>
                  </select>
               </div>
            </div>
          </Card>
        </SlideUp>

        <SlideUp delay={0.2}>
          <Card className="bg-aura-800/30 border-aura-700/50 p-6 h-full flex flex-col">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
               <Shield className="w-4 h-4 mr-2 text-fuchsia-400" /> Privacy & Data
            </h3>
            
            <div className="space-y-4 flex-1">
               <div className="flex items-center justify-between">
                  <div>
                     <p className="text-sm font-medium text-white">Save Conversation History</p>
                     <p className="text-xs text-gray-500">Allow AI to remember past contexts.</p>
                  </div>
                  <div className="w-10 h-5 bg-fuchsia-500 rounded-full relative cursor-pointer">
                     <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full" />
                  </div>
               </div>
               
               <div className="flex items-center justify-between">
                  <div>
                     <p className="text-sm font-medium text-white">Enable Notifications</p>
                     <p className="text-xs text-gray-500">Receive alerts for AI-generated insights.</p>
                  </div>
                  <div className="w-10 h-5 bg-aura-900 border border-aura-700/50 rounded-full relative cursor-pointer">
                     <div className="absolute left-1 top-1 w-3 h-3 bg-gray-500 rounded-full" />
                  </div>
               </div>
            </div>

            <div className="pt-6 mt-4 border-t border-aura-700/50">
               <button className="flex items-center text-sm text-red-400 hover:text-red-300 transition-colors">
                  <Trash2 className="w-4 h-4 mr-2" /> Clear All Conversations
               </button>
            </div>
          </Card>
        </SlideUp>
      </div>
    </section>
  );
}
