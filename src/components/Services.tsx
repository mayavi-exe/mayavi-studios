import { motion } from 'motion/react';
import { Code2, Monitor, Palette, Sparkles, Cpu, Zap } from 'lucide-react';

const services = [
  {
    title: "[01] Immersive Web Architecture",
    desc: "We push the boundaries of the browser. Using Next.js and WebGL, we build platforms that captivate users from the first pixel.",
    icon: <Monitor className="w-6 h-6" />,
    size: "col-span-2 row-span-1",
    color: "from-biolu/20 to-transparent"
  },
  {
    title: "[02] Intelligent Systems",
    desc: "The future is autonomous. We embed smart algorithms and custom LLMs directly into your products.",
    icon: <Cpu className="w-6 h-6" />,
    size: "col-span-1 row-span-1",
    color: "from-electric/20 to-transparent"
  },
  {
    title: "[03] Neural Code",
    desc: "High-performance systems built for the future edge using modern neural architectures.",
    icon: <Code2 className="w-6 h-6" />,
    size: "col-span-1 row-span-2",
    color: "from-biolu/10 via-electric/10 to-transparent"
  },
  {
    title: "[04] Cyber-Aesthetic UI",
    desc: "Interfaces designed for the next era. High-contrast, motion-rich systems prioritizing visual impact.",
    icon: <Palette className="w-6 h-6" />,
    size: "col-span-2 row-span-1",
    color: "from-ghost/5 to-transparent"
  },
  {
    title: "[05] Void Engine",
    desc: "Proprietary rendering logic for deep-space digital experiences.",
    icon: <Sparkles className="w-6 h-6" />,
    size: "col-span-1 row-span-1",
    color: "from-biolu/5 to-transparent"
  },
  {
    title: "[06] Beyond Speed",
    desc: "Optimized to 0ms perceived latency for seamless flow.",
    icon: <Zap className="w-6 h-6" />,
    size: "col-span-1 row-span-1",
    color: "from-electric/5 to-transparent"
  },
];

export default function Services() {
  return (
    <section className="w-full px-4 md:px-12 py-32 bg-obsidian relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-5xl md:text-7xl mb-4">CAPABILITIES</h2>
            <p className="font-mono text-xs text-muted-gray tracking-widest">DEFINING THE DIGITAL FRONTIER</p>
          </div>
          <div className="hidden md:block w-32 h-[1px] bg-ghost/20 mb-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`group relative p-8 glass overflow-hidden flex flex-col justify-between interactive ${service.size.includes('col-span-2') ? 'md:col-span-2' : 'md:col-span-1'} ${service.size.includes('row-span-2') ? 'md:row-span-2' : 'md:row-span-1'}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="mb-4 text-ghost/50 group-hover:text-electric transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-2xl mb-2">{service.title}</h3>
                <p className="text-sm text-muted-gray leading-relaxed max-w-[200px]">
                  {service.desc}
                </p>
              </div>
              
              <div className="relative z-10 flex justify-end">
                <div className="w-10 h-10 rounded-full border border-ghost/10 flex items-center justify-center group-hover:bg-ghost group-hover:text-obsidian transition-all duration-500">
                  <span className="text-xs">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
