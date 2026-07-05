import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, Mic, ArrowRight, X } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { FadeIn, SlideUp } from '@/src/components/animations';
import { Button } from '@/src/components/ui/Button';

const suggestions = [
  'Explain Smart Flexi Staking',
  'Explain Smart Web Reward',
  'Explain DAO Reward',
  'Explain Treasury',
  'Explain CoreDeFi AI'
];

export function AuraAIPanel() {
  const [typedText, setTypedText] = useState('');
  const fullText = "Hello, how can CoreDeFi AI help you today?";
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="py-12 relative z-10" id="aura-ai">
      <SlideUp>
        <Card className="bg-gradient-to-br from-aura-900/90 to-aura-800/90 border-aura-700/50 p-1 overflow-hidden relative shadow-[0_0_50px_rgba(34,211,238,0.1)]">
          {/* Animated gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-aura-accent via-aura-purple to-cyan-400 opacity-20 animate-gradient-x" />
          
          <div className="relative bg-aura-900 rounded-[10px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 bg-aura-purple/20 rounded-full animate-pulse blur-md" />
                  <div className="w-12 h-12 bg-aura-900 border border-aura-purple/50 rounded-full flex items-center justify-center relative z-10">
                    <Bot className="w-6 h-6 text-aura-purple" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">CoreDeFi AI</h3>
                  <p className="text-sm text-aura-accent flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-aura-accent mr-2 animate-pulse" />
                    Online
                  </p>
                </div>
              </div>
              
              <div className="mb-8 h-8">
                <p className="text-lg md:text-xl font-medium text-gray-200">
                  {typedText}
                  <span className="inline-block w-2 h-5 bg-aura-accent ml-1 animate-pulse" />
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion, index) => (
                  <motion.button
                    key={suggestion}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 + (index * 0.1) }}
                    className="px-3 py-1.5 text-xs font-medium bg-aura-800/50 hover:bg-aura-700 text-gray-300 hover:text-white border border-aura-700 rounded-full transition-colors flex items-center"
                  >
                    {suggestion}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-aura-800 pt-8 md:pt-0 pl-0 md:pl-8">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-aura-accent/10 to-aura-purple/10 rounded-full blur-xl pointer-events-none" />
                <Button size="lg" className="w-full rounded-full h-14 bg-white/5 hover:bg-white/10 border border-aura-700/50 backdrop-blur-md text-white font-medium group transition-all duration-300">
                  <span className="flex-1 text-left px-2">Ask me anything...</span>
                  <div className="w-10 h-10 rounded-full bg-aura-accent flex items-center justify-center group-hover:scale-105 transition-transform">
                    <ArrowRight className="w-5 h-5 text-aura-900" />
                  </div>
                </Button>
              </div>
              
              <div className="mt-4 flex items-center text-sm text-gray-500">
                <span className="mx-2">or</span>
              </div>
              
              <Button variant="ghost" className="mt-4 rounded-full group text-gray-400 hover:text-aura-accent">
                <Mic className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Use Voice Assistant
              </Button>
            </div>
          </div>
        </Card>
      </SlideUp>
    </section>
  );
}
