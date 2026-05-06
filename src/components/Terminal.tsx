import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState<string[]>(['MAYAVI OS v4.0.4', 'INITIALIZING NEURAL LINK...', 'READY. TYPE "HELP" FOR COMMANDS.']);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`') {
        setIsOpen(!isOpen);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toUpperCase().trim();
    let response = `COMMAND NOT FOUND: ${cmd}`;

    if (cmd === 'HELP') response = 'AVAILABLE: VISION, TEAM, STATUS, CLEAR';
    if (cmd === 'VISION') response = 'TO COLLAPSE IMAGINATION INTO CODE.';
    if (cmd === 'TEAM') response = 'A COLLECTIVE OF DIGITAL ALCHEMISTS.';
    if (cmd === 'STATUS') response = 'ALL SYSTEMS OPERATIONAL. LATENCY: 0MS.';
    if (cmd === 'CLEAR') {
      setLogs([]);
      setInput('');
      return;
    }

    setLogs([...logs, `> ${cmd}`, response]);
    setInput('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
          className="fixed top-0 left-0 w-full h-[40vh] bg-obsidian/90 backdrop-blur-xl border-b border-white/10 z-[200] p-8 font-mono text-xs overflow-hidden flex flex-col"
        >
          <div className="flex-1 overflow-y-auto space-y-2 mb-4 scrollbar-hide">
            {logs.map((log, i) => (
              <div key={i} className={log.startsWith('>') ? 'text-electric' : 'text-muted-gray'}>
                {log}
              </div>
            ))}
          </div>
          
          <form onSubmit={handleCommand} className="flex items-center space-x-2">
            <span className="text-biolu">$</span>
            <input
              autoFocus
              className="bg-transparent outline-none flex-1 text-ghost"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="ENTER COMMAND..."
            />
          </form>
          
          <div className="absolute bottom-4 right-8 text-[8px] text-muted-gray uppercase tracking-widest opacity-30">
            Press ` to Exit
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
