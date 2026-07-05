import React from 'react';
import { motion } from 'motion/react';

export function Background() {
  return (
    <div className="fixed inset-0 z-[-1] bg-aura-900 overflow-hidden">
      {/* Ambient Cosmic Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0a0a0c] to-[#121216]" />
      
      {/* Animated Aurora */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-aura-accent/15 blur-[120px] mix-blend-screen animate-pulse-slow" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-aura-purple/15 blur-[120px] mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[30%] left-[40%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[100px] mix-blend-screen animate-pulse-slow" style={{ animationDelay: '4s' }} />
      
      {/* Moving Particles */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20 blur-[1px]"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -Math.random() * 100 - 50],
              opacity: [0, Math.random() * 0.5 + 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>
      
      {/* Glass reflections overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/[0.04] via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
    </div>
  );
}
