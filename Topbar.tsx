import React, { useState, useEffect } from 'react';
import { Hexagon, Bell, Settings, Fingerprint, Wallet, ChevronDown, Menu, LogOut, User, Search } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';
import { useWallet } from '@/src/components/WalletProvider';
import { useAuth } from '@/src/components/AuthProvider';
import { notificationService, Notification } from '@/src/services/NotificationService';
import { motion, AnimatePresence } from 'motion/react';
import { GlobalSearch } from '@/src/components/GlobalSearch';

export function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  const { address, network, connectWallet, disconnectWallet } = useWallet();
  const { user, profile, logout } = useAuth();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showNotifs, setShowNotifs] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    if (user) {
      notificationService.getNotifications(user.uid).then(setNotifications);
    }
  }, [user]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <header className="h-16 border-b border-border bg-card/40 backdrop-blur-2xl flex items-center justify-between px-4 md:px-6 z-30 sticky top-0">
      <GlobalSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <div className="flex items-center space-x-4">
        <button className="md:hidden p-2 text-gray-400 hover:text-white transition-colors rounded-md hover:bg-white/5" onClick={onMenuClick}>
          <Menu className="w-6 h-6" />
        </button>
        <div className="flex items-center">
          <img src="/coredefi-logo.svg" alt="CoreDeFi Logo" className="w-8 h-8 mr-3 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
          <span className="font-display font-bold text-xl tracking-tight hidden sm:inline-block">CoreDeFi</span>
        </div>
      </div>

      <div className="flex items-center space-x-2 md:space-x-4">
        {/* Search */}
        <Button variant="ghost" size="sm" className="hidden md:flex bg-aura-900/50 border-border rounded-full hover:bg-aura-800 text-gray-400 justify-start w-48" onClick={() => setIsSearchOpen(true)}>
          <Search className="w-4 h-4 mr-2" />
          <span>Search...</span>
          <span className="ml-auto text-[10px] font-mono bg-aura-800 px-1.5 py-0.5 rounded">⌘K</span>
        </Button>

        {/* Network Selector */}
        <Button variant="outline" size="sm" className="hidden md:flex bg-aura-900/50 border-border rounded-full hover:bg-aura-800">
          <span className="w-2 h-2 rounded-full bg-aura-purple mr-2 animate-pulse"></span>
          {network || 'CoreDeFi Mainnet'}
          <ChevronDown className="w-4 h-4 ml-2 text-gray-400" />
        </Button>

        {/* Notifications */}
        <div className="relative">
          <Button variant="ghost" size="icon" className="relative hidden sm:flex text-gray-400 hover:text-white rounded-full" onClick={() => setShowNotifs(!showNotifs)}>
            <Bell className="w-5 h-5" />
            {unreadCount > 0 && <span className="absolute top-2 right-2 w-2 h-2 bg-aura-accent rounded-full border border-aura-900 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>}
          </Button>
          
          <AnimatePresence>
            {showNotifs && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute right-0 mt-2 w-80 bg-aura-900 border border-aura-700/50 rounded-xl shadow-2xl overflow-hidden z-50"
              >
                <div className="p-4 border-b border-aura-700/50 flex justify-between items-center bg-aura-800/50">
                  <h3 className="font-bold text-white text-sm">Notifications</h3>
                  <span className="text-xs text-aura-accent bg-aura-accent/10 px-2 py-0.5 rounded-full">{unreadCount} New</span>
                </div>
                <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
                  {notifications.length === 0 ? (
                    <div className="p-4 text-center text-gray-500 text-sm">No notifications</div>
                  ) : (
                    notifications.map(notif => (
                      <div key={notif.id} className={`p-4 border-b border-aura-700/50 hover:bg-aura-800 transition-colors ${!notif.read ? 'bg-aura-800/30' : ''}`} onClick={() => {
                        notificationService.markAsRead(notif.id);
                        setNotifications(notifications.map(n => n.id === notif.id ? { ...n, read: true } : n));
                      }}>
                        <div className="flex justify-between mb-1">
                          <span className={`text-sm font-bold ${!notif.read ? 'text-white' : 'text-gray-300'}`}>{notif.title}</span>
                          {!notif.read && <span className="w-2 h-2 rounded-full bg-aura-accent"></span>}
                        </div>
                        <p className="text-xs text-gray-400">{notif.message}</p>
                      </div>
                    ))
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="h-6 w-px bg-border hidden sm:block mx-1"></div>

        {/* Wallet Connect */}
        {address ? (
          <Button size="sm" variant="secondary" className="border-aura-700/50 rounded-full hover:bg-aura-800" onClick={disconnectWallet}>
            <Wallet className="w-4 h-4 mr-2 text-emerald-400" />
            {address.slice(0, 6)}...{address.slice(-4)}
          </Button>
        ) : (
          <Button size="sm" className="bg-gradient-to-r from-aura-accent to-aura-purple hover:from-cyan-400 hover:to-purple-400 text-aura-900 shadow-glow border-0 rounded-full font-semibold" onClick={connectWallet}>
            <Wallet className="w-4 h-4 mr-2" />
            Connect
          </Button>
        )}

        {/* User Profile Menu */}
        {user && (
          <Button variant="ghost" size="sm" className="rounded-full flex items-center gap-2 pl-2" onClick={logout}>
            {profile?.avatarUrl ? (
              <img src={profile.avatarUrl} alt="Avatar" className="w-6 h-6 rounded-full" />
            ) : (
              <div className="w-6 h-6 rounded-full bg-aura-800 flex items-center justify-center">
                <User className="w-4 h-4 text-gray-400" />
              </div>
            )}
            <span className="hidden sm:inline-block text-sm max-w-[100px] truncate">
              {profile?.displayName || 'User'}
            </span>
            <LogOut className="w-4 h-4 text-gray-500 ml-1" />
          </Button>
        )}
      </div>
    </header>
  );
}
