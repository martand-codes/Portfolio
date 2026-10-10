import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const BootSequence = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const sequence = [
      { msg: 'INITIALIZING MARTAND.PRKHAR...', delay: 100 },
      { msg: 'SYSTEMS ................. ONLINE', delay: 400 },
      { msg: 'BACKEND ................. ONLINE', delay: 700 },
      { msg: 'DATABASES ............... CONNECTED', delay: 1000 },
      { msg: 'AI ...................... RUNNING', delay: 1300 },
      { msg: 'CURIOSITY ............... UNLIMITED', delay: 1600 },
      { msg: 'WELCOME.', delay: 2000 }
    ];

    sequence.forEach(({ msg, delay }) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, msg]);
      }, delay);
    });

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 500); // Shorter wait after 100%
          return 100;
        }
        return prev + Math.floor(Math.random() * 20) + 10;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-accent p-6 font-mono">
      <div className="w-full max-w-2xl">
        <div className="mb-8 h-48 flex flex-col justify-end">
          {logs.map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-2"
            >
              {log}
            </motion.div>
          ))}
        </div>
        
        <div className="flex items-center gap-4 mb-2">
          <span>[</span>
          <div className="flex-1 h-4 bg-panel border border-accent/30 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-accent"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.2 }}
            />
          </div>
          <span>] {Math.min(progress, 100)}%</span>
        </div>
      </div>
    </div>
  );
};
