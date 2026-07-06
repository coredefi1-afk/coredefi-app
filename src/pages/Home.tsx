import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';

export function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-12"
    >
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="py-12 md:py-20"
      >
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-aura-accent via-white to-aura-purple bg-clip-text text-transparent">
          The Intelligent Web3 Financial Operating System
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-3xl">
          CoreDeFi empowers users with advanced tools for governance, treasury management, and intelligent trading. Build together. Grow forever.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#staking"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-aura-accent to-aura-purple hover:from-cyan-400 hover:to-purple-400 text-aura-900 font-bold transition-all duration-300 shadow-glow"
          >
            Get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#governance"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-border bg-aura-900/50 hover:bg-aura-800 text-white font-semibold transition-all duration-300"
          >
            Learn More
          </motion.a>
        </div>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-3xl font-display font-bold mb-8">Why Choose CoreDeFi?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Sparkles,
              title: 'Intelligent AI Integration',
              desc: 'Powered by advanced machine learning for predictive analytics and smart insights.'
            },
            {
              icon: Shield,
              title: 'Enterprise-Grade Security',
              desc: 'Multi-sig wallets, audit trails, and comprehensive security protocols.'
            },
            {
              icon: Zap,
              title: 'Lightning-Fast Performance',
              desc: 'Optimized for speed with real-time data and instant transactions.'
            },
          ].map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-aura-900/30 border border-border hover:border-aura-accent/50 transition-all duration-300"
              >
                <Icon className="w-8 h-8 text-aura-accent mb-4" />
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Total Value Locked', value: '$245M' },
            { label: 'Active Users', value: '125K+' },
            { label: 'Transactions', value: '2.3M+' },
            { label: 'Uptime', value: '99.9%' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              className="p-6 rounded-lg bg-aura-900/30 border border-border text-center"
            >
              <p className="text-2xl font-bold mb-1 text-aura-accent">{stat.value}</p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}