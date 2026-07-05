import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, Layers, Landmark, Scale, GraduationCap, Activity } from 'lucide-react';
import { Input } from './ui/Input';

interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GlobalSearch({ isOpen, onClose }: GlobalSearchProps) {
  const [query, setQuery] = useState('');

  // Handle Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // The toggle is handled outside, but we can do it here if needed
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const searchResults = [
    { title: 'Stake AURAXX', category: 'Staking', href: '#staking', icon: Layers },
    { title: 'Treasury Dashboard', category: 'Treasury', href: '#treasury', icon: Landmark },
    { title: 'AIP-14: Diversification', category: 'Governance', href: '#governance', icon: Scale },
    { title: 'DeFi Basics Lesson', category: 'Academy', href: '#academy', icon: GraduationCap },
    { title: 'Protocol Health', category: 'Analytics', href: '#analytics', icon: Activity },
  ].filter(item => item.title.toLowerCase().includes(query.toLowerCase()) || item.category.toLowerCase().includes(query.toLowerCase()));

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-2xl bg-aura-900 border border-aura-700/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        >
          <div className="p-4 border-b border-aura-700/50 flex items-center relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-8" />
            <Input 
              autoFocus
              placeholder="Search CoreDeFi..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-12 bg-aura-800/50 border-0 h-14 text-lg rounded-xl"
            />
            <button onClick={onClose} className="absolute right-8 text-gray-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-2 max-h-[60vh] overflow-y-auto">
            {searchResults.length > 0 ? (
              <div className="space-y-1">
                {searchResults.map((result, i) => {
                  const Icon = result.icon;
                  return (
                    <a 
                      key={i}
                      href={result.href}
                      onClick={onClose}
                      className="flex items-center p-3 hover:bg-aura-800 rounded-xl transition-colors group"
                    >
                      <div className="p-2 bg-aura-800 group-hover:bg-aura-700 rounded-lg mr-4">
                        <Icon className="w-5 h-5 text-gray-400 group-hover:text-aura-accent" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{result.title}</h4>
                        <p className="text-xs text-gray-400">{result.category}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            ) : (
              <div className="p-8 text-center text-gray-500">
                No results found for "{query}"
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
