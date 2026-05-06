import { motion } from 'motion/react';
import Footer from '../components/Footer';

const team = [
  { name: 'Kavita Iyer', role: 'Design Lead', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop' },
  { name: 'Arjun Das', role: 'CTO / AI Architect', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop' },
  { name: 'Sana Khan', role: 'WebGL Developer', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop' },
];

export default function Studio() {
  return (
    <div className="pt-32">
      <section className="px-4 md:px-12 mb-32">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[14vw] md:text-[12vw] leading-none mb-12"
          >
            INTELLIGENT <span className="text-biolu">SOLUTIONS.</span>
          </motion.h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <p className="text-2xl md:text-3xl text-ghost/90 leading-tight font-medium">
                "I believe in creating applications that combine modern web technologies with artificial intelligence."
              </p>
              <p className="text-lg text-muted-gray leading-relaxed italic">
                — Rishabh Gupta, Founder
              </p>
              <p className="text-lg text-ghost/70 leading-relaxed">
                My goal is to build solutions that are not only functional but also intelligent, scalable, and user-friendly. We are building the future, one project at a time.
              </p>
            </div>
            
            <div className="glass p-8 space-y-6">
              <span className="font-mono text-[10px] tracking-widest text-electric uppercase">Our Philosophy</span>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Intelligence</span>
                  <span className="text-muted-gray">AI-First</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Scalability</span>
                  <span className="text-muted-gray">Architecture</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Usability</span>
                  <span className="text-muted-gray">User-Centric</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-12 py-32 bg-ghost/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl mb-16">THE ILLUSIONISTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700">
                   <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="mt-6">
                  <h3 className="text-2xl mb-1">{member.name}</h3>
                  <p className="font-mono text-[10px] tracking-widest text-muted-gray uppercase">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-12 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 space-y-6 md:space-y-0 text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-display">TECH STACK</h2>
            <div className="flex space-x-12">
               <div className="text-center">
                 <p className="text-4xl md:text-6xl font-display">99%</p>
                 <p className="text-xs text-muted-gray">STABILITY</p>
               </div>
               <div className="text-center">
                 <p className="text-4xl md:text-6xl font-display">0MS</p>
                 <p className="text-xs text-muted-gray">LATENCY</p>
               </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
             {['Next.js', 'React', 'Three.js', 'Framer Motion', 'Tailwind', 'AI/ML', 'Python', 'WebGL', 'Go'].map((tech) => (
               <span key={tech} className="px-6 py-3 border border-white/10 font-mono text-xs tracking-widest hover:bg-ghost hover:text-obsidian transition-colors">
                 {tech}
               </span>
             ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
