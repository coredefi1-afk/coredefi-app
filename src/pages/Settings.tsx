import { motion } from 'motion/react';
import { Settings2, Bell, Lock, Eye, Save } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';

export function Settings() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6 max-w-2xl"
    >
      <div className="mb-8">
        <h1 className="text-4xl font-display font-bold mb-2">Settings</h1>
        <p className="text-gray-400">Manage your CoreDeFi account preferences and security.</p>
      </div>

      {/* Notifications */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="p-6">
          <div className="flex items-center mb-4">
            <Bell className="w-5 h-5 text-aura-accent mr-3" />
            <h2 className="text-xl font-bold">Notifications</h2>
          </div>
          <div className="space-y-3">
            {[
              { label: 'Email Notifications', enabled: true },
              { label: 'Push Notifications', enabled: true },
              { label: 'SMS Alerts', enabled: false },
              { label: 'Governance Updates', enabled: true },
            ].map((notif, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-gray-300">{notif.label}</span>
                <input type="checkbox" defaultChecked={notif.enabled} className="w-5 h-5 rounded" />
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Privacy */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="p-6">
          <div className="flex items-center mb-4">
            <Eye className="w-5 h-5 text-aura-accent mr-3" />
            <h2 className="text-xl font-bold">Privacy</h2>
          </div>
          <div className="space-y-3">
            {[
              { label: 'Public Profile', enabled: true },
              { label: 'Show Portfolio', enabled: false },
              { label: 'Allow Analytics', enabled: true },
            ].map((privacy, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-gray-300">{privacy.label}</span>
                <input type="checkbox" defaultChecked={privacy.enabled} className="w-5 h-5 rounded" />
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Security */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="p-6">
          <div className="flex items-center mb-4">
            <Lock className="w-5 h-5 text-aura-accent mr-3" />
            <h2 className="text-xl font-bold">Security</h2>
          </div>
          <div className="space-y-3">
            <button className="w-full px-4 py-2 rounded-lg bg-aura-900/50 border border-border hover:bg-aura-800 transition-colors text-left text-gray-300 hover:text-white">
              Change Password
            </button>
            <button className="w-full px-4 py-2 rounded-lg bg-aura-900/50 border border-border hover:bg-aura-800 transition-colors text-left text-gray-300 hover:text-white">
              Enable Two-Factor Authentication
            </button>
            <button className="w-full px-4 py-2 rounded-lg bg-aura-900/50 border border-border hover:bg-aura-800 transition-colors text-left text-gray-300 hover:text-white">
              Manage Connected Devices
            </button>
          </div>
        </Card>
      </motion.div>

      {/* Save Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-aura-accent to-aura-purple hover:from-cyan-400 hover:to-purple-400 text-aura-900 font-bold transition-all duration-300 flex items-center justify-center gap-2"
      >
        <Save className="w-5 h-5" />
        Save Changes
      </motion.button>
    </motion.div>
  );
}