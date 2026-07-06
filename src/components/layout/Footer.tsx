import React from 'react';
import { Mail, Github, Linkedin, Youtube, MessageCircle, Send } from 'lucide-react';
import { motion } from 'motion/react';

const socialLinks = [
  {
    name: 'Telegram',
    icon: MessageCircle,
    href: 'https://t.me/coredefi',
    color: 'hover:text-blue-400',
    label: 'Join CoreDeFi Telegram Community'
  },
  {
    name: 'X (Twitter)',
    icon: Send,
    href: 'https://x.com/coredefi',
    color: 'hover:text-white',
    label: 'Follow CoreDeFi on X'
  },
  {
    name: 'Discord',
    icon: MessageCircle,
    href: 'https://discord.gg/coredefi',
    color: 'hover:text-indigo-400',
    label: 'Join CoreDeFi Discord'
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/coredefi',
    color: 'hover:text-gray-300',
    label: 'View CoreDeFi on GitHub'
  },
  {
    name: 'YouTube',
    icon: Youtube,
    href: 'https://youtube.com/@coredefi',
    color: 'hover:text-red-500',
    label: 'Subscribe to CoreDeFi YouTube'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/company/coredefi',
    color: 'hover:text-blue-600',
    label: 'Follow CoreDeFi on LinkedIn'
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:hello@coredefi.id',
    color: 'hover:text-aura-accent',
    label: 'Email CoreDeFi'
  }
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/20 backdrop-blur-3xl mt-auto">
      {/* Mobile - Stacked Footer */}
      <div className="md:hidden">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-3">
              <img src="/coredefi-logo.svg" alt="CoreDeFi" className="w-8 h-8 mr-2" />
              <span className="font-display font-bold text-lg">CoreDeFi</span>
            </div>
            <p className="text-sm text-gray-400">The Intelligent Web3 Financial Operating System</p>
          </div>

          <div className="grid grid-cols-4 gap-3 mb-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center justify-center p-2 rounded-lg bg-aura-900/50 border border-border transition-all duration-300 ${link.color}`}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>

          <div className="space-y-2 text-center text-xs text-gray-400 mb-4 border-t border-border pt-4">
            <p><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></p>
            <p><a href="#" className="hover:text-white transition-colors">Terms of Service</a></p>
            <p><a href="#" className="hover:text-white transition-colors">Security</a></p>
          </div>

          <p className="text-center text-xs text-gray-500">
            © {currentYear} CoreDeFi. All rights reserved.
          </p>
        </div>
      </div>

      {/* Desktop - Horizontal Footer */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-3">
                <img src="/coredefi-logo.svg" alt="CoreDeFi" className="w-8 h-8 mr-2" />
                <span className="font-display font-bold text-lg">CoreDeFi</span>
              </div>
              <p className="text-sm text-gray-400">The Intelligent Web3 Financial Operating System. Build Together. Grow Forever.</p>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Product</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#staking" className="hover:text-white transition-colors">Staking</a></li>
                <li><a href="#treasury" className="hover:text-white transition-colors">Treasury</a></li>
                <li><a href="#governance" className="hover:text-white transition-colors">Governance</a></li>
                <li><a href="#launchpad" className="hover:text-white transition-colors">Launchpad</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Community</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Docs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Forum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Disclosures</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 pt-8">
            <div className="flex justify-center items-center gap-4 mb-6 flex-wrap">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-aura-900/50 border border-border transition-all duration-300 text-gray-400 ${link.color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <p className="text-sm text-gray-500">
                © {currentYear} CoreDeFi. All rights reserved.
              </p>
              <p className="text-sm text-gray-500 mt-2 md:mt-0">
                Built with ❤️ for the future of Web3
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}