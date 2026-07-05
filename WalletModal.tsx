import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Loader2 } from 'lucide-react';
import { Button } from './ui/Button';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: (walletType: string) => void;
  isConnecting: boolean;
}

export function WalletModal({ isOpen, onClose, onConnect, isConnecting }: WalletModalProps) {
  if (!isOpen) return null;

  const wallets = [
    { id: 'metamask', name: 'MetaMask', description: 'Connect using browser extension', icon: '🦊' },
    { id: 'walletconnect', name: 'WalletConnect', description: 'Connect using mobile wallet', icon: '📱' },
    { id: 'coinbase', name: 'Coinbase Wallet', description: 'Connect using Coinbase', icon: '🔵' },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={!isConnecting ? onClose : undefined}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-md bg-aura-900 border border-aura-700/50 rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="p-4 border-b border-aura-700/50 flex items-center justify-between">
            <h2 className="text-xl font-display font-bold text-white">Connect Wallet</h2>
            <button onClick={onClose} disabled={isConnecting} className="text-gray-400 hover:text-white disabled:opacity-50">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4 space-y-3">
            {wallets.map((wallet) => (
              <button
                key={wallet.id}
                disabled={isConnecting}
                onClick={() => onConnect(wallet.id)}
                className="w-full flex items-center p-4 bg-aura-800/50 hover:bg-aura-800 border border-aura-700/50 hover:border-aura-accent/50 rounded-xl transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="text-2xl mr-4">{wallet.icon}</div>
                <div className="text-left flex-1">
                  <h3 className="text-white font-medium group-hover:text-aura-accent transition-colors">{wallet.name}</h3>
                  <p className="text-xs text-gray-400">{wallet.description}</p>
                </div>
                {isConnecting ? (
                  <Loader2 className="w-5 h-5 text-aura-accent animate-spin" />
                ) : (
                  <ExternalLink className="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </button>
            ))}
          </div>
          <div className="p-4 border-t border-aura-700/50 text-center">
            <p className="text-xs text-gray-500">
              By connecting a wallet, you agree to CoreDeFi's Terms of Service and Privacy Policy.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
