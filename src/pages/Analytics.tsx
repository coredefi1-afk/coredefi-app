import { motion } from 'motion/react';
import { BarChart3, TrendingUp, Activity, Zap } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';

export function Analytics() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="mb-8">
        <h1 className="text-4xl font-display font-bold mb-2">Analytics Dashboard</h1>
        <p className="text-gray-400">Real-time insights into protocol metrics and ecosystem health.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Volume', value: '$856M', icon: BarChart3, change: '+23.5%' },
          { label: 'TVL', value: '$145M', icon: TrendingUp, change: '+15.2%' },
          { label: 'Active Users', value: '45.3K', icon: Activity, change: '+8.9%' },
          { label: 'Transactions', value: '2.3M', icon: Zap, change: '+34.1%' },
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
                    <p className="text-xs text-emerald-400 mt-1">{stat.change}</p>
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
          <h2 className="text-xl font-bold mb-4">Key Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'Market Cap', value: '$485M', trend: 'up' },
              { title: 'Holders', value: '125.3K', trend: 'up' },
              { title: '24h Volume', value: '$28.5M', trend: 'up' },
              { title: 'Price', value: '$12.45', trend: 'up' },
            ].map((metric, i) => (
              <div key={i} className="p-4 rounded-lg bg-aura-900/30 border border-border/50">
                <p className="text-gray-400 text-sm mb-2">{metric.title}</p>
                <p className="text-xl font-bold">{metric.value}</p>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}