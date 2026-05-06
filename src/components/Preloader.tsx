import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        return 100;
      });
    }, 20);

    if (count === 100) {
      const timeout = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onComplete, 1000);
      }, 500);
      return () => clearTimeout(timeout);
    }

    return () => clearInterval(interval);
  }, [count, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.83, 0, 0.17, 1] } }}
          className="fixed inset-0 z-[9999] bg-obsidian flex flex-col items-center justify-center"
        >
          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-display text-ghost"
            >
              MAYAVI
            </motion.h1>
          </div>
          
          <div className="w-48 h-[1px] bg-ghost/10 relative overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${count}%` }}
              className="absolute h-full bg-ghost"
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 font-mono text-xs tracking-[0.3em] text-muted-gray"
          >
            {count}%
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
