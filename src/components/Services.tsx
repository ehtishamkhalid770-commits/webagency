import React from 'react';
import { motion } from 'motion/react';
import { CodeXml, Layers, ShoppingBag, Zap, Cpu, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../data';

// Map icon strings to Lucide components
const IconMapper: Record<string, React.ComponentType<{ className?: string }>> = {
  CodeXml: CodeXml,
  Layers: Layers,
  ShoppingBag: ShoppingBag,
  Zap: Zap,
  Cpu: Cpu,
  Sparkles: Sparkles,
};

export default function Services() {
  return (
    <section 
      id="services" 
      className="relative py-24 sm:py-32 px-6 overflow-hidden bg-cyber-grid bg-repeat"
    >
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-brand-red/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-black blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div className="max-w-xl">
            <span className="font-mono text-xs text-brand-red uppercase tracking-widest font-semibold block mb-3">
              // EXPERTISE FIELDS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase">
              Web Capabilities Built for <span className="text-brand-red">Dominance.</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm sm:text-base max-w-sm md:border-l md:border-white/10 md:pl-6">
            We merge stunning graphical precision with high-performance codebase architectures. Every stack element is fully optimized from layout to load-speeds.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="services-grid">
          {SERVICES.map((service, index) => {
            const IconComp = IconMapper[service.iconName] || CodeXml;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col justify-between p-8 rounded-xl cyber-glass-card cyber-glass-card-hover overflow-hidden"
              >
                {/* Neon sweep element */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-red/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                
                <div>
                  {/* Icon & Glow */}
                  <div className="relative w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-brand-red border border-white/10 group-hover:border-brand-red/50 group-hover:bg-brand-red/10 transition-all duration-300 mb-6">
                    <IconComp className="w-5.5 h-5.5 group-hover:scale-110 group-hover:text-white transition-luxury" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-brand-red transition-luxury mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet Bullet features */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-gray-500 group-hover:text-gray-300 transition-luxury">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-red/40 group-hover:text-brand-red transition-luxury shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow hint */}
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-brand-red font-bold uppercase tracking-widest pt-2 border-t border-white/5 mt-auto opacity-60 group-hover:opacity-100 transition-luxury">
                  <span>Explore Stack</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
