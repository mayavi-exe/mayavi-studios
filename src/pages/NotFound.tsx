import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-obsidian overflow-hidden relative">
      <div className="absolute inset-0 noise-bg opacity-20 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-[20vw] leading-none mb-4 text-ghost/10 select-none">404</h1>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
           <h2 className="text-4xl md:text-6xl mb-8">LOST IN THE VOID.</h2>
           <Link to="/" className="px-8 py-4 border border-white/10 hover:bg-ghost hover:text-obsidian transition-all duration-500 font-mono text-xs tracking-widest uppercase interactive">
              Return to Reality
           </Link>
        </div>
      </motion.div>
    </div>
  );
}
