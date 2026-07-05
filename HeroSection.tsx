import React from 'react';
import { motion } from 'motion/react';
import { Share2, Copy, Gift } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';
import { FadeIn, SlideUp } from '@/src/components/animations';

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-24 flex flex-col items-center justify-center text-center overflow-hidden min-h-[70vh]">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-aura-accent/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-aura-purple/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <FadeIn delay={0.1}>
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-aura-800/80 border border-aura-700/50 backdrop-blur-md mb-8">
          <Share2 className="w-4 h-4 text-aura-accent mr-2" />
          <span className="text-sm font-medium text-gray-300">Invite. Educate. Expand. Reward.</span>
        </div>
      </FadeIn>

      <SlideUp delay={0.2} className="max-w-4xl relative z-10">
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">
          <span className="block text-white drop-shadow-md">Smart Web Reward</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-aura-accent via-aura-purple to-cyan-400 animate-gradient-x py-2 drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]">
            Grow the Ecosystem. Earn Together.
          </span>
        </h1>
      </SlideUp>

      <SlideUp delay={0.3} className="max-w-2xl mx-auto z-10">
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10">
          Earn rewards by helping grow the CoreDeFi ecosystem through verified referrals and meaningful community participation.
        </p>
      </SlideUp>

      <SlideUp delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto z-10">
        <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-aura-accent to-aura-purple hover:from-cyan-400 hover:to-purple-400 text-aura-900 font-semibold shadow-glow group rounded-full border-0 h-14 px-8 text-base">
          Invite Friends
          <Share2 className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
        </Button>
        <Button size="lg" variant="secondary" className="w-full sm:w-auto rounded-full h-14 px-8 group bg-aura-800/80 backdrop-blur-md border-aura-700/50 hover:bg-aura-700 text-base">
          <Copy className="w-5 h-5 mr-2 text-gray-400 group-hover:text-white transition-colors" />
          Copy Referral Link
        </Button>
        <Button size="lg" variant="ghost" className="w-full sm:w-auto rounded-full h-14 px-8 group text-gray-300 hover:text-white hover:bg-white/5 text-base">
          <Gift className="w-5 h-5 mr-2 text-aura-purple group-hover:text-purple-400 transition-colors" />
          View Rewards
        </Button>
      </SlideUp>

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-aura-accent/40 blur-[1px]"
          animate={{
            y: [0, -120, 0],
            x: [0, (i % 2 === 0 ? 60 : -60), 0],
            opacity: [0, 1, 0],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4
          }}
          style={{
            left: `${10 + i * 11}%`,
            top: `${60 + (i % 4) * 10}%`
          }}
        />
      ))}
    </section>
  );
}
