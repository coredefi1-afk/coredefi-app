import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, BookOpen, Bot } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';
import { FadeIn, SlideUp } from '@/src/components/animations';

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-32 flex flex-col items-center justify-center text-center overflow-hidden min-h-[80vh]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-aura-accent/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      
      <FadeIn delay={0.1}>
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-aura-800/80 border border-aura-700/50 backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse" />
          <span className="text-sm font-medium text-gray-300">Live Protocol Status: Optimal</span>
        </div>
      </FadeIn>

      <SlideUp delay={0.2} className="max-w-4xl relative z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6">
          <span className="block text-white drop-shadow-md">Welcome to CoreDeFi</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-aura-accent via-aura-purple to-cyan-400 animate-gradient-x py-2 drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]">
            The Web3 Financial OS
          </span>
        </h1>
      </SlideUp>

      <SlideUp delay={0.3} className="max-w-2xl mx-auto z-10">
        <p className="text-xl md:text-2xl font-medium text-gray-300 mb-2">
          Build Together. Grow Forever.
        </p>
        <p className="text-lg font-medium text-aura-accent mb-6">
          Powering the Future of Decentralized Finance.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          CoreDeFi combines Smart Flexi Staking, Smart Web Reward, Smart DAO Reward, Transparent Treasury and CoreDeFi AI into one intelligent decentralized ecosystem.
        </p>
      </SlideUp>

      <SlideUp delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto z-10">
        <Button onClick={() => window.location.hash = '#dashboard'} size="lg" className="w-full sm:w-auto bg-gradient-to-r from-aura-accent to-aura-purple hover:from-cyan-400 hover:to-purple-400 text-aura-900 font-semibold shadow-glow group rounded-full border-0 h-12 px-8">
          <Sparkles className="w-5 h-5 mr-2 group-hover:animate-pulse" />
          Enter Dashboard
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button size="lg" variant="secondary" className="w-full sm:w-auto rounded-full h-12 px-8 group bg-aura-800/80 backdrop-blur-md border-aura-700/50 hover:bg-aura-700">
          <BookOpen className="w-5 h-5 mr-2 text-gray-400 group-hover:text-white transition-colors" />
          Read Whitepaper
        </Button>
        <Button size="lg" variant="ghost" className="w-full sm:w-auto rounded-full h-12 px-8 group text-gray-300 hover:text-white hover:bg-white/5">
          <Bot className="w-5 h-5 mr-2 text-aura-purple group-hover:text-purple-400 transition-colors" />
          Launch CoreDeFi AI
        </Button>
      </SlideUp>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 md:left-20 w-16 h-16 rounded-2xl bg-gradient-to-br from-aura-800/80 to-aura-900/80 border border-aura-700/50 backdrop-blur-xl flex items-center justify-center shadow-glass"
      >
        <div className="w-8 h-8 rounded-full bg-aura-accent/20 blur-sm absolute" />
        <span className="font-display font-bold text-aura-accent text-xl relative z-10">X</span>
      </motion.div>

      <motion.div
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-10 md:right-20 w-20 h-20 rounded-full bg-gradient-to-br from-aura-800/80 to-aura-900/80 border border-aura-700/50 backdrop-blur-xl flex items-center justify-center shadow-glass"
      >
        <div className="w-10 h-10 rounded-full bg-aura-purple/20 blur-sm absolute" />
        <Bot className="w-8 h-8 text-aura-purple relative z-10" />
      </motion.div>
    </section>
  );
}
