import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Footer from '../components/Footer';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const projectData: Record<string, any> = {
  'aura': {
    title: 'PROJECT_AURA',
    subtitle: 'NEURAL VISUALIZATION ENGINE',
    category: 'AI / WEBGL',
    description: 'Aura is an experimental visualization platform that uses neural networks to map human emotional states into generative 3D environments in real-time.',
    directive: 'The client needed a platform that didn\'t just host design assets, but actively generated them based on user behavioral data patterns.',
    architecture: 'We engineered a custom middleware using Python to handle real-time LLM requests, wrapping the entire experience in a buttery-smooth WebGL interface built on React Three Fiber.',
    year: '2026',
    client: 'STEALTH STARTUP',
    timeline: '4 WEEKS',
    stack: ['NEXT.JS', 'THREE.JS', 'PYTHON', 'OPENAI API'],
    image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    ],
    next: { id: 'neural-weave', title: 'NEURAL_WEAVE' }
  },
  'neural-weave': {
    title: 'NEURAL_WEAVE',
    subtitle: 'AI-POWERED DESIGN ECOSYSTEM',
    category: 'INTERFACE',
    description: 'Autonomous interface systems designed for deep space mission control, focusing on cognitive load reduction through generative UI elements.',
    directive: 'The challenge was to create a zero-latency interface for space-faring logistics where every millisecond of cognitive friction costs millions.',
    architecture: 'By utilizing edge-computing and local-first neural caches, we bypassed traditional API bottlenecks, delivering a predictive UI that anticipates intent.',
    year: '2026',
    client: 'VOID LABS',
    timeline: '6 WEEKS',
    stack: ['REACT', 'WEBGL', 'RUST', 'LOCAL AI'],
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1200&auto=format&fit=crop',
    ],
    next: { id: 'chronos', title: 'CHRONOS_UI' }
  }
};

function ParallaxImage({ src, speed }: { src: string; speed: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);

  return (
    <div ref={ref} className="overflow-hidden rounded-sm aspect-[16/10] bg-ghost/5">
      <motion.img 
        style={{ y: y }}
        src={src} 
        alt="Gallery Image" 
        className="w-full h-full object-cover scale-110" 
      />
    </div>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectData[id || ''] || projectData['aura'];

  return (
    <div className="pt-32">
      <section className="px-4 md:px-12 mb-32">
        <div className="max-w-7xl mx-auto">
          <Link to="/work" className="inline-flex items-center space-x-2 text-muted-gray hover:text-ghost transition-colors mb-24 interactive group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-[10px] tracking-widest uppercase">Back to all initiatives</span>
          </Link>

          <header className="mb-24">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               className="mb-6 flex items-center space-x-4"
             >
               <span className="font-mono text-xs text-biolu tracking-[0.3em] uppercase">{project.category}</span>
               <div className="h-[1px] w-24 bg-biolu/30" />
             </motion.div>
             <motion.h1 
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="text-[10vw] leading-[0.8] mb-8"
             >
               {project.title}
             </motion.h1>
             <p className="text-2xl md:text-4xl text-ghost/90 font-light max-w-4xl leading-tight">
               {project.subtitle}
             </p>
          </header>

          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full aspect-[21/9] overflow-hidden rounded-sm bg-obsidian/50 mb-32"
          >
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
             <div className="lg:col-span-8 space-y-24">
               <div className="space-y-6">
                 <h2 className="text-xl font-mono text-muted-gray uppercase tracking-widest">The Directive</h2>
                 <p className="text-3xl md:text-5xl leading-[1.1] font-light">
                   {project.directive}
                 </p>
               </div>
               
               <div className="space-y-6">
                 <h2 className="text-xl font-mono text-muted-gray uppercase tracking-widest">The Architecture</h2>
                 <p className="text-2xl md:text-3xl leading-relaxed text-ghost/80">
                   {project.architecture}
                 </p>
               </div>
             </div>

             <div className="lg:col-span-4 lg:pl-12">
               <div className="glass p-8 space-y-12 sticky top-32">
                 <div className="grid grid-cols-2 gap-8">
                   <div>
                     <span className="block font-mono text-[10px] text-muted-gray uppercase mb-2">Client</span>
                     <p className="text-lg">{project.client}</p>
                   </div>
                   <div>
                     <span className="block font-mono text-[10px] text-muted-gray uppercase mb-2">Timeline</span>
                     <p className="text-lg">{project.timeline}</p>
                   </div>
                   <div className="col-span-2">
                     <span className="block font-mono text-[10px] text-muted-gray uppercase mb-2">Stack</span>
                     <div className="flex flex-wrap gap-2">
                       {project.stack.map((s: string) => (
                         <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 font-mono text-[9px] tracking-widest uppercase">{s}</span>
                       ))}
                     </div>
                   </div>
                 </div>
                 
                 <a href="#" className="flex items-center justify-between group p-4 border border-white/10 hover:bg-ghost hover:text-obsidian transition-all">
                    <span className="font-mono text-xs tracking-widest uppercase">Explore Live Build</span>
                    <ExternalLink size={14} className="group-hover:rotate-45 transition-transform" />
                 </a>
               </div>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
             <ParallaxImage src={project.gallery[0]} speed={0.5} />
             <div className="space-y-12 lg:px-12">
                <ParallaxImage src={project.gallery[1]} speed={-0.3} />
             </div>
          </div>

          {project.next && (
            <Link 
              to={`/work/${project.next.id}`} 
              className="group block w-full py-32 border-t border-white/10 mt-32 hover:bg-biolu/5 transition-colors"
            >
              <span className="font-mono text-xs text-muted-gray tracking-[0.3em] uppercase mb-8 block">Next Initiative</span>
              <div className="flex justify-between items-end">
                <h2 className="text-6xl md:text-[10vw] leading-none transition-transform group-hover:translate-x-6">
                  {project.next.title}
                </h2>
                <div className="hidden md:flex w-24 h-24 rounded-full border border-white/20 items-center justify-center group-hover:bg-ghost group-hover:text-obsidian transition-all duration-500">
                  <ArrowLeft size={32} className="rotate-180" />
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
