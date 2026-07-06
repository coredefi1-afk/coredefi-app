import { motion } from 'motion/react';
import { Brain, Sparkles, Zap, TrendingUp } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';

export function CoreDeFiAI() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="mb-8">
        <h1 className="text-4xl font-display font-bold mb-2">CoreDeFi AI</h1>
        <p className="text-gray-400">Intelligent insights powered by advanced AI and machine learning.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'AI Predictions', value: '94.2%', icon: Brain },
          { label: 'Accuracy', value: 'High', icon: Sparkles },
          { label: 'Requests', value: '1.2M', icon: Zap },
          { label: 'Insights/Day', value: '542', icon: TrendingUp },
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
        <Card className="p-6 bg-gradient-to-br from-aura-accent/10 to-aura-purple/10 border-aura-accent/20">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-aura-accent" />
            AI Features
          </h2>
          <div className="space-y-3">
            {[
              'Portfolio optimization recommendations',
              'Market trend analysis and predictions',
              'Risk assessment and alerts',
              'Smart transaction routing',
              'Yield farming strategy suggestions',
            ].map((feature, i) => (
              <div key={i} className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-aura-accent mr-3"></div>
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}