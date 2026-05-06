import { motion } from 'motion/react';
import { ReactNode } from 'react';

const variants: any = {
  initial: {
    opacity: 0,
    clipPath: 'inset(0% 0% 100% 0%)',
  },
  enter: {
    opacity: 1,
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: {
      duration: 1.2,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    opacity: 0,
    clipPath: 'inset(100% 0% 0% 0%)',
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="enter"
      exit="exit"
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
