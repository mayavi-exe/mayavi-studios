import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [-200, 0]);

  return (
    <footer ref={container} className="relative min-h-screen bg-obsidian flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 z-0 noise-bg opacity-20 pointer-events-none" />
      
      <div className="relative z-10 w-full px-4 md:px-12 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 space-y-12 lg:space-y-0">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl max-w-xl leading-tight">
              READY TO BUILD SOMETHING <span className="text-electric">UNFORGETTABLE?</span>
            </h2>
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 md:px-12 md:py-6 bg-ghost text-obsidian rounded-full font-display text-lg md:text-xl tracking-tighter hover:bg-biolu hover:text-ghost transition-colors duration-500 flex items-center group"
              >
                START A PROJECT
                <ArrowUpRight className="ml-2 w-5 h-5 md:w-6 md:h-6 group-hover:rotate-45 transition-transform duration-500" />
              </motion.button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-12 md:gap-24">
            <div className="space-y-4">
              <span className="font-mono text-[10px] text-muted-gray uppercase tracking-widest">Connect</span>
              <ul className="space-y-2">
                <li><a href="#" className="flex items-center space-x-2 text-ghost/70 hover:text-electric transition-colors"><span>Instagram</span> <Instagram size={14} /></a></li>
                <li><a href="#" className="flex items-center space-x-2 text-ghost/70 hover:text-electric transition-colors"><span>Twitter</span> <Twitter size={14} /></a></li>
                <li><a href="#" className="flex items-center space-x-2 text-ghost/70 hover:text-electric transition-colors"><span>LinkedIn</span> <Linkedin size={14} /></a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <span className="font-mono text-[10px] text-muted-gray uppercase tracking-widest">Location</span>
              <p className="text-ghost/70">
                Studio 01 / Void<br />
                Deep Space, Orion<br />
                404-999-000
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-ghost/10 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 font-mono text-[9px] md:text-[10px] text-muted-gray tracking-widest uppercase">
          <span>© 2026 MAYAVI STUDIO</span>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:gap-x-6">
            <Link to="/contact" className="hover:text-electric transition-colors">TRANSMISSION</Link>
            <span className="hidden md:block opacity-20">//</span>
            <span className="cursor-not-allowed">PRIVACY MATRIX</span>
            <span className="hidden md:block opacity-20">//</span>
            <span className="cursor-not-allowed">SYSTEM STATUS</span>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[25vh] md:h-[50vh] flex items-center justify-center overflow-hidden pointer-events-none">
        <motion.h1
          style={{ scale, y }}
          className="text-[25vw] md:text-[25vw] font-display leading-none text-ghost/5 select-none text-center whitespace-nowrap"
        >
          BEND REALITY.
        </motion.h1>
      </div>
    </footer>
  );
}
