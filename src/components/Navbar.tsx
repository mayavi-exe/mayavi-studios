import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import SoundToggle from './SoundToggle';

const navLinks = [
  { name: 'Studio', href: '/studio' },
  { name: 'Work', href: '/work' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuVariants: any = {
    closed: {
      opacity: 0,
      y: '-100%',
      transition: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] px-4 md:px-12 py-8 flex justify-between items-center pointer-events-none">
        <Link to="/" className="pointer-events-auto group">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-display tracking-tighter text-ghost group-hover:text-glow-biolu transition-all"
          >
            MAYAVI<span className="text-biolu group-hover:text-glow-electric transition-colors duration-500">.</span>
          </motion.span>
        </Link>

        <div className="flex items-center space-x-6 pointer-events-auto">
          <SoundToggle />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="interactive group flex items-center space-x-2"
          >
            <span className="font-mono text-[10px] tracking-widest text-muted-gray uppercase hidden md:inline-block">
              {isOpen ? 'Close' : 'Menu'}
            </span>
            <div className="relative w-8 h-8 flex items-center justify-center">
               <AnimatePresence mode="wait">
                 {isOpen ? (
                   <motion.div
                      key="close"
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 90 }}
                   >
                     <X size={24} className="text-ghost" />
                   </motion.div>
                 ) : (
                   <motion.div
                      key="menu"
                      initial={{ scale: 0, rotate: 90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: -90 }}
                   >
                     <Menu size={24} className="text-ghost" />
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[99] bg-atmosphere/95 backdrop-blur-2xl flex flex-col justify-center items-center"
          >
            <div className="absolute inset-0 noise-bg opacity-10 pointer-events-none" />
            
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-5xl md:text-8xl font-display tracking-tighter transition-all duration-500 hover:text-biolu hover:text-glow-biolu",
                      location.pathname === link.href ? "text-ghost pt-2 text-glow-biolu" : "text-muted-gray"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="absolute bottom-12 left-0 w-full flex justify-center space-x-8 font-mono text-[10px] text-muted-gray tracking-widest uppercase">
              <a href="#" className="hover:text-electric transition-colors">Instagram</a>
              <a href="#" className="hover:text-electric transition-colors">Twitter</a>
              <a href="#" className="hover:text-electric transition-colors">LinkedIn</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
