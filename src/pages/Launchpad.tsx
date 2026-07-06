import { motion } from 'motion/react';
import { Rocket, Star, Users, TrendingUp } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';

export function Launchpad() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="mb-8">
        <h1 className="text-4xl font-display font-bold mb-2">Launchpad</h1>
        <p className="text-gray-400">Discover and invest in promising Web3 projects at the earliest stage.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Active Launches', value: '8', icon: Rocket },
          { label: 'Total Raised', value: '$45M', icon: TrendingUp },
          { label: 'Projects', value: '156', icon: Star },
          { label: 'Participants', value: '32.5K', icon: Users },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <Icon className="w-6 h-6 text-aura-accent" />
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Featured Projects</h2>
          <div className="space-y-4">
            {[
              { name: 'Web3Finance Pro', raised: '$3.2M', cap: '$5M', status: 'Active' },
              { name: 'DeFi Analytics', raised: '$2.8M', cap: '$4M', status: 'Active' },
              { name: 'AI Protocol', raised: '$5.1M', cap: '$8M', status: 'Active' },
            ].map((project, i) => (
              <div key={i} className="p-4 rounded-lg bg-aura-900/30 border border-border/50 hover:border-aura-accent/50 transition-colors cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-white">{project.name}</h3>
                  <span className="px-2 py-1 rounded-full text-xs font-semibold bg-aura-accent/20 text-aura-accent">
                    {project.status}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Raised: {project.raised}</span>
                  <span>Cap: {project.cap}</span>
                </div>
                <div className="mt-3 h-2 bg-aura-900/50 rounded-full overflow-hidden">
                  <div className="h-full w-3/5 bg-gradient-to-r from-aura-accent to-aura-purple"></div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}