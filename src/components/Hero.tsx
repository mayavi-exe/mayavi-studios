import { motion } from 'motion/react';
import CanvasBackground from './CanvasBackground';
import { MousePointer2 } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants: any = {
    hidden: { y: '100%' },
    visible: {
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-obsidian">
      <CanvasBackground />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full px-4 md:px-12"
      >
        <div className="overflow-hidden flex flex-col items-center">
          <motion.h1
            variants={itemVariants}
            className="text-[20vw] lg:text-[22vw] leading-[0.8] text-center font-display tracking-tighter"
          >
            MAYAVI
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-center font-display text-sm md:text-xl lg:text-3xl tracking-[0.3em] md:tracking-[0.5em] text-biolu mt-2 md:mt-4"
          >
            ARCHITECTS OF DIGITAL ILLUSION
          </motion.p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mt-12 md:mt-16 space-y-8 md:space-y-0">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <motion.p
              variants={itemVariants}
              className="font-mono text-[9px] md:text-xs tracking-[0.2em] text-muted-gray uppercase leading-relaxed"
            >
              EST. 2026 // ENGINEERING IMMERSIVE EXPERIENCES<br className="hidden md:block" />
              WHERE CODE MEETS MAGIC.
            </motion.p>
          </div>
          
          <div className="flex items-center space-x-4">
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-ghost text-obsidian rounded-full font-display text-sm tracking-tighter hover:bg-biolu hover:text-ghost transition-all duration-500 interactive"
            >
              INITIATE SEQUENCE
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Static gradient overlays for depth */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-obsidian to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent z-10" />
    </section>
  );
}
