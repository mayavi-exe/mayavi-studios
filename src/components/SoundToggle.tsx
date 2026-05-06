import { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function SoundToggle() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <button
      onClick={() => setIsMuted(!isMuted)}
      className="interactive px-4 py-2 flex items-center space-x-2 group"
    >
      <div className="relative w-4 h-4 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          {isMuted ? (
            <motion.div
              key="muted"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
            >
              <VolumeX size={14} className="text-muted-gray group-hover:text-electric transition-colors" />
            </motion.div>
          ) : (
            <motion.div
              key="unmuted"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
            >
              <Volume2 size={14} className="text-biolu" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <span className="font-mono text-[9px] tracking-widest text-muted-gray uppercase hidden sm:inline-block">
        {isMuted ? 'Sound Off' : 'Sound On'}
      </span>
    </button>
  );
}
