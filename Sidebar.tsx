import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, Layers, Globe, Vote, Landmark, LayoutDashboard, 
  Scale, Brain, GraduationCap, Fingerprint, Settings, Shield, PieChart,
  ChevronLeft, ChevronRight, X, Rocket, Code2
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const navItems = [
  { label: 'Home', icon: Home, href: '#' },
  { label: 'Smart Flexi Staking', icon: Layers, href: '#staking' },
  { label: 'Smart Web Reward', icon: Globe, href: '#web-reward' },
  { label: 'Smart DAO Reward', icon: Vote, href: '#dao-reward' },
  { label: 'Treasury', icon: Landmark, href: '#treasury' },
  { label: 'Tokenomics', icon: PieChart, href: '#tokenomics' },
  { label: 'Launchpad', icon: Rocket, href: '#launchpad' },
  { label: 'Dashboard', icon: LayoutDashboard, href: '#dashboard' },
  { label: 'Governance', icon: Scale, href: '#governance' },
  { label: 'CoreDeFi AI', icon: Brain, href: '#ai' },
  { label: 'CoreDeFi Academy', icon: GraduationCap, href: '#academy' },
  { label: 'CoreDeFi Identity', icon: Fingerprint, href: '#identity' },
  { label: 'Settings', icon: Settings, href: '#settings' },
];

export function Sidebar({ 
  isCollapsed, 
  setIsCollapsed,
  isMobileOpen,
  setIsMobileOpen
}: { 
  isCollapsed: boolean, 
  setIsCollapsed: (v: boolean) => void,
  isMobileOpen: boolean,
  setIsMobileOpen: (v: boolean) => void
}) {
  const [activeHash, setActiveHash] = useState(window.location.hash || '#');

  React.useEffect(() => {
    const onHashChange = () => setActiveHash(window.location.hash || '#');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const NavContent = () => (
    <nav className="flex-1 py-6 px-3 space-y-1.5 overflow-y-auto custom-scrollbar">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeHash === item.href || (activeHash === '#' && item.href === '#');
        
        return (
          <a
            key={item.label}
            href={item.href}
            onClick={() => {
              if (isMobileOpen) setIsMobileOpen(false);
            }}
            className={cn(
              "relative flex items-center px-3 py-3 rounded-xl transition-all duration-300 group",
              isActive ? "text-white" : "text-gray-400 hover:text-white hover:bg-white/5"
            )}
          >
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-gradient-to-r from-aura-accent/10 to-transparent border-l-2 border-aura-accent rounded-xl"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            
            <Icon className={cn(
              "w-5 h-5 flex-shrink-0 relative z-10 transition-colors duration-300",
              isActive ? "text-aura-accent drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" : "group-hover:text-aura-accent"
            )} />
            
            <AnimatePresence initial={false}>
              {(!isCollapsed || isMobileOpen) && (
                <motion.span
                  initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                  animate={{ opacity: 1, width: "auto", marginLeft: 12 }}
                  exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                  className="font-medium whitespace-nowrap overflow-hidden relative z-10 text-sm"
                >
                  {item.label}
                </motion.span>
              )}
            </AnimatePresence>
          </a>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isCollapsed ? 80 : 280 }}
        className="relative hidden md:flex flex-col border-r border-border bg-card/20 backdrop-blur-3xl z-20"
      >
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-6 bg-aura-900 border border-border rounded-full p-1 hover:bg-aura-800 transition-colors z-30 shadow-glass group"
        >
          {isCollapsed ? 
            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-white" /> : 
            <ChevronLeft className="w-4 h-4 text-gray-400 group-hover:text-white" />
          }
        </button>

        <NavContent />
      </motion.aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed inset-y-0 left-0 w-72 bg-aura-900/95 backdrop-blur-3xl border-r border-border z-50 flex flex-col md:hidden shadow-2xl"
            >
              <div className="h-16 flex items-center justify-between px-6 border-b border-border bg-card/40">
                <span className="font-display font-bold text-xl tracking-tight text-white">Menu</span>
                <button 
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <NavContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
