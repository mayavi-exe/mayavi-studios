import { motion } from 'motion/react';

const variants = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 0,
  },
  exit: {
    scaleY: 1,
  },
};

export default function RouteShutter() {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      exit="exit"
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 bg-biolu z-[150] origin-bottom pointer-events-none"
    />
  );
}
