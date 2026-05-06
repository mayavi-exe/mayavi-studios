import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';

const projects = [
  { id: 'aura', title: 'PROJECT_AURA', category: 'ROLE: FULL-STACK & 3D // STATUS: DEPLOYED', image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800&auto=format&fit=crop' },
  { id: 'neural-weave', title: 'NEURAL_WEAVE', category: 'ROLE: AI INTEGRATION // STATUS: DEPLOYED', image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop' },
  { id: 'chronos', title: 'CHRONOS_UI', category: 'ROLE: CREATIVE FRONTEND // STATUS: IN DEVELOPMENT', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop' },
  { id: 'void-lab', title: 'VOID_LAB', category: 'ROLE: 3D DEVELOPMENT // STATUS: DEPLOYED', image: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=800&auto=format&fit=crop' },
];

export default function SelectedWorks() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-65%']);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-obsidian">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="px-4 md:px-12 absolute top-24 left-0 z-20">
            <h2 className="text-5xl md:text-8xl font-display leading-[0.8] tracking-tighter">SELECTED<br /><span className="text-biolu text-glow">WORKS</span></h2>
            <p className="font-mono text-[10px] text-muted-gray tracking-[0.3em] mt-4 uppercase">Scroll to pan / [01 — 04]</p>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-4 md:px-12">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="group relative h-[60vh] md:h-[70vh] aspect-[4/5] flex-shrink-0 glass overflow-hidden interactive"
            >
              <Link to={`/work/${project.id}`} className="block h-full w-full">
                 <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100" 
                 />
                 <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-obsidian/80 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                    <span className="font-mono text-[10px] text-electric uppercase tracking-widest mb-2">{project.category}</span>
                    <h3 className="text-3xl md:text-5xl font-display">{project.title}</h3>
                 </div>
              </Link>
            </div>
          ))}
          
          <div className="flex flex-col justify-center items-center h-[70vh] aspect-square text-center p-12">
             <h3 className="text-4xl mb-8">VIEW ALL PROJECTS</h3>
             <Link to="/work" className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center hover:bg-ghost hover:text-obsidian transition-all">
                →
             </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
