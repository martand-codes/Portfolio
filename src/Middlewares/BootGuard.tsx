import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { BootSequence } from '../Components/BootSequence';
import { motion, AnimatePresence } from 'framer-motion';

export const BootGuard = ({ children }: { children: ReactNode }) => {
  const [hasBooted, setHasBooted] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the boot sequence in this session
    const booted = sessionStorage.getItem('system_booted');
    if (booted === 'true') {
      setHasBooted(true);
    }
  }, []);

  const handleBootComplete = () => {
    sessionStorage.setItem('system_booted', 'true');
    setHasBooted(true);
  };

  return (
    <AnimatePresence mode="wait">
      {!hasBooted ? (
        <motion.div key="boot" exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
          <BootSequence onComplete={handleBootComplete} />
        </motion.div>
      ) : (
        <motion.div key="app" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
