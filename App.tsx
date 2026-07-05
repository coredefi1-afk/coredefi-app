import { useState, useEffect } from 'react';
import { AppLayout } from './components/layout/AppLayout';
import { Home } from './pages/Home';
import { Staking } from './pages/Staking';
import { WebReward } from './pages/WebReward';
import { DAOReward } from './pages/DAOReward';
import { Treasury } from './pages/Treasury';
import { Analytics } from './pages/Analytics';
import { Governance } from './pages/Governance';
import { AuraAI } from './pages/AuraAI';
import { AuraAcademy } from './pages/AuraAcademy';
import { AuraIdentity } from './pages/AuraIdentity';
import { Settings } from './pages/Settings';
import { Tokenomics } from './pages/Tokenomics';
import { Launchpad } from './pages/Launchpad';
import { Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#');
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const onHashChange = () => {
      setIsNavigating(true);
      setTimeout(() => {
        setCurrentHash(window.location.hash || '#');
        setIsNavigating(false);
      }, 400); // 400ms loading spinner
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const renderContent = () => {
    switch (currentHash) {
      case '#staking': return <Staking />;
      case '#web-reward': return <WebReward />;
      case '#dao-reward': return <DAOReward />;
      case '#treasury': return <Treasury />;
      case '#dashboard': 
      case '#analytics': return <Analytics />;
      case '#governance': return <Governance />;
      case '#aura-ai': 
      case '#ai': return <AuraAI />;
      case '#aura-academy':
      case '#academy': return <AuraAcademy />;
      case '#coredefi.identity':
      case '#identity': return <AuraIdentity />;
      case '#settings': return <Settings />;
      case '#tokenomics': return <Tokenomics />;
      case '#launchpad': return <Launchpad />;
      default: return <Home />;
    }
  };

  return (
    <AppLayout>
      <AnimatePresence mode="wait">
        {isNavigating ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex items-center justify-center min-h-[50vh]"
          >
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="w-10 h-10 text-aura-accent animate-spin" />
              <p className="text-gray-400 animate-pulse font-medium">Entering Dashboard...</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={currentHash}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            {renderContent()}
          </motion.div>
        )}
      </AnimatePresence>
    </AppLayout>
  );
}
