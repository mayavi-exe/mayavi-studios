import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const projects = [
  { id: 'aura', title: 'PROJECT_AURA', category: 'ROLE: FULL-STACK & 3D // STATUS: DEPLOYED', image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800&auto=format&fit=crop' },
  { id: 'neural-weave', title: 'NEURAL_WEAVE', category: 'ROLE: AI INTEGRATION // STATUS: DEPLOYED', image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop' },
  { id: 'chronos', title: 'CHRONOS_UI', category: 'ROLE: CREATIVE FRONTEND // STATUS: IN DEVELOPMENT', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop' },
  { id: 'void-lab', title: 'VOID_LAB', category: 'ROLE: 3D DEVELOPMENT // STATUS: DEPLOYED', image: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=800&auto=format&fit=crop' },
];

export default function Work() {
  return (
    <div className="pt-32">
      <section className="px-4 md:px-12 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-4 md:space-y-0">
             <h1 className="text-[12vw] leading-none">WORKS.</h1>
             <div className="flex space-x-4 mb-4">
               {['ALL', 'AI', 'WEBGL', 'DESIGN'].map(filter => (
                 <button key={filter} className="font-mono text-[10px] tracking-widest text-muted-gray hover:text-ghost transition-colors px-4 py-2 border border-white/5 rounded-full">
                    {filter}
                 </button>
               ))}
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group relative"
              >
                <Link to={`/work/${project.id}`} className="block interactive">
                  <div className="aspect-video overflow-hidden rounded-sm relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-obsidian/40 group-hover:bg-transparent transition-all duration-500" />
                  </div>
                  <div className="mt-6 flex justify-between items-start">
                    <div>
                      <h2 className="text-3xl font-display">{project.title}</h2>
                      <p className="font-mono text-[10px] tracking-widest text-muted-gray uppercase mt-1">{project.category}</p>
                    </div>
                    <span className="text-xl">↗</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
