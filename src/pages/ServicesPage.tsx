import { motion } from 'motion/react';
import Footer from '../components/Footer';
import Services from '../components/Services';

export default function ServicesPage() {
  return (
    <div className="pt-32">
      <section className="px-4 md:px-12 mb-32">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[12vw] leading-none mb-24 text-center md:text-left"
          >
            OUR <span className="text-electric">CRAFT.</span>
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
            {[
              { title: 'STRATEGY', desc: 'Defining the cognitive map of your digital universe.', points: ['Market Intelligence', 'AI Feasibility', 'Digital Positioning'] },
              { title: 'CREATIVE', desc: 'Synthesizing magic and math into visual interfaces.', points: ['Cyber-surrealism', 'Motion Systems', '3D Architecture'] },
              { title: 'ENGINEERING', desc: 'Building high-performance portals with machine precision.', points: ['Scalable Architecture', 'Web3 / AI Integration', 'Next-Gen Performance'] },
            ].map((col, i) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="w-12 h-12 bg-ghost/5 border border-white/10 flex items-center justify-center font-mono text-xs">
                   0{i + 1}
                </div>
                <h2 className="text-4xl">{col.title}</h2>
                <p className="text-muted-gray leading-relaxed">{col.desc}</p>
                <ul className="space-y-3">
                   {col.points.map(p => (
                     <li key={p} className="flex items-center space-x-3 text-sm">
                       <span className="w-1 h-1 bg-biolu rounded-full" />
                       <span>{p}</span>
                     </li>
                   ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Services />

      <Footer />
    </div>
  );
}
