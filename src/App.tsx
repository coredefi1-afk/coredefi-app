import { useState, useEffect } from 'react';
import { AppLayout } from './components/layout/AppLayout';
import { Home } from './pages/Home';
import { Staking } from './pages/Staking';
import { WebReward } from './pages/WebReward';
import { DAOReward } from './pages/DAOReward';
import { Treasury } from './pages/Treasury';
import { Analytics } from './pages/Analytics';
import { Governance } from './pages/Governance';
import { CoreDeFiAI } from './pages/CoreDeFiAI';
import { CoreDeFiAcademy } from './pages/CoreDeFiAcademy';
import { CoreDeFiIdentity } from './pages/CoreDeFiIdentity';
import { Settings } from './pages/Settings';
import { Tokenomics } from './pages/Tokenomics';
import { Launchpad } from './pages/Launchpad';
import { NotFound } from './pages/NotFound';
import { Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const routeMap: Record<string, React.ComponentType> = {
  '#': Home,
  '#home': Home,
  '#staking': Staking,
  '#web-reward': WebReward,
  '#dao-reward': DAOReward,
  '#treasury': Treasury,
  '#dashboard': Analytics,
  '#analytics': Analytics,
  '#governance': Governance,
  '#aura-ai': CoreDeFiAI,
  '#ai': CoreDeFiAI,
  '#aura-academy': CoreDeFiAcademy,
  '#academy': CoreDeFiAcademy,
  '#coredefi.identity': CoreDeFiIdentity,
  '#identity': CoreDeFiIdentity,
  '#settings': Settings,
  '#tokenomics': Tokenomics,
  '#launchpad': Launchpad,
};

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#');
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const onHashChange = () => {
      setIsNavigating(true);
      setTimeout(() => {
        setCurrentHash(window.location.hash || '#');
        setIsNavigating(false);
      }, 300);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const renderContent = () => {
    const Component = routeMap[currentHash];
    return Component ? <Component /> : <NotFound />;
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
            role="status"
            aria-label="Loading page"
          >
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="w-10 h-10 text-aura-accent animate-spin" />
              <p className="text-gray-400 animate-pulse font-medium">Loading...</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={currentHash}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {renderContent()}
          </motion.div>
        )}
      </AnimatePresence>
    </AppLayout>
  );
}