import { ArrowLeft, Home } from 'lucide-react';
import { motion } from 'motion/react';

export function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold bg-gradient-to-r from-aura-accent to-aura-purple bg-clip-text text-transparent mb-2">
            404
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl font-semibold mb-4">
            Page not found
          </p>
          <p className="text-gray-500 max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
        </motion.div>

        {/* Animation */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="mb-12"
        >
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-aura-accent/20 to-aura-purple/20 rounded-full flex items-center justify-center border border-aura-accent/30">
            <span className="text-4xl">🧭</span>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-aura-900/50 border border-border hover:bg-aura-800 transition-all duration-300 text-white font-semibold group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-aura-accent to-aura-purple hover:from-cyan-400 hover:to-purple-400 text-aura-900 font-semibold shadow-glow border-0 transition-all duration-300"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </motion.a>
        </div>

        {/* Additional Help */}
        <div className="mt-12 p-6 rounded-xl bg-aura-900/30 border border-border max-w-md mx-auto">
          <p className="text-sm text-gray-400 mb-4">
            <strong>Need help?</strong> Check out our:
          </p>
          <div className="space-y-2 text-sm">
            <a href="#" className="block text-aura-accent hover:text-cyan-300 transition-colors">📚 Documentation</a>
            <a href="#" className="block text-aura-accent hover:text-cyan-300 transition-colors">💬 Community Support</a>
            <a href="mailto:hello@coredefi.id" className="block text-aura-accent hover:text-cyan-300 transition-colors">📧 Contact Us</a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}