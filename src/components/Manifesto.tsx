import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

function Word({ children, progress, range }: { children: string; progress: any; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <span className="relative mr-3 mt-3">
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}

export default function Manifesto() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.8', 'start 0.25'],
  });

  const text = "We are architects of intelligent solutions, building the future one project at a time. At Mayavi, we believe in creating applications that combine modern web technologies with artificial intelligence. Our goal is to build solutions that are not only functional but also intelligent, scalable, and user-friendly for the digital age.";
  const words = text.split(" ");

  return (
    <section ref={container} className="relative min-h-[70vh] w-full px-4 md:px-12 py-32 bg-obsidian">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="mb-12"
        >
          <span className="font-mono text-xs tracking-widest text-biolu uppercase">Manifesto / 001</span>
        </motion.div>
        
        <div className="flex flex-wrap text-4xl md:text-5xl lg:text-7xl font-sans font-medium leading-[1.1] tracking-tight">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </div>
      </div>
      
      <div className="absolute right-0 bottom-0 w-1/2 h-[1px] bg-ghost/10" />
    </section>
  );
}
