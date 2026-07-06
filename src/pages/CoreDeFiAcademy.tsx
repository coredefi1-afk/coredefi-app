import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Award, Users } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';

export function CoreDeFiAcademy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="mb-8">
        <h1 className="text-4xl font-display font-bold mb-2">CoreDeFi Academy</h1>
        <p className="text-gray-400">Learn about Web3, DeFi, and CoreDeFi through interactive courses.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Courses', value: '42', icon: GraduationCap },
          { label: 'Lessons', value: '385', icon: BookOpen },
          { label: 'Certificates', value: '12.3K', icon: Award },
          { label: 'Students', value: '85.2K', icon: Users },
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
          <h2 className="text-xl font-bold mb-4">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'DeFi Fundamentals', level: 'Beginner', students: '12.5K' },
              { title: 'Smart Contracts 101', level: 'Beginner', students: '9.3K' },
              { title: 'Advanced Trading', level: 'Advanced', students: '3.2K' },
              { title: 'Protocol Development', level: 'Advanced', students: '2.1K' },
            ].map((course, i) => (
              <div key={i} className="p-4 rounded-lg bg-aura-900/30 border border-border/50 hover:border-aura-accent/50 transition-colors cursor-pointer">
                <h3 className="font-semibold text-white mb-2">{course.title}</h3>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span className="px-2 py-1 rounded bg-aura-accent/20 text-aura-accent">{course.level}</span>
                  <span>{course.students} students</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}