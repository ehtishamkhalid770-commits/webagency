import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutGrid, ShoppingBag, Terminal, Network, ShieldCheck, X, Calendar, User, Info, Trophy, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects', icon: LayoutGrid },
    { id: 'ecommerce', label: 'E-Commerce', icon: ShoppingBag },
    { id: 'saas', label: 'SaaS Systems', icon: Terminal },
    { id: 'webapp', label: 'Web Apps', icon: Network },
    { id: 'branding', label: 'Branding Systems', icon: ShieldCheck },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section 
      id="portfolio" 
      className="relative py-24 sm:py-32 px-6 overflow-hidden bg-black"
    >
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-red/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-brand-red-deep/5 blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="max-w-xl mb-16">
          <span className="font-mono text-xs text-brand-red uppercase tracking-widest font-semibold block mb-3">
            // SELECTED PROJECTS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase">
            Crafting Digital <span className="text-brand-red">Masterpieces.</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            Click on any case study to open the technical blueprints, metrics achieved, and design systems integration.
          </p>
        </div>

        {/* Category Filters (Scrollable on small touch devices) */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-12 scrollbar-none select-none" id="portfolio-filters">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded font-mono text-xs uppercase tracking-wider whitespace-nowrap cursor-pointer transform duration-300 active:scale-95 ${
                  isActive 
                    ? 'bg-brand-red text-black font-bold shadow-[0_0_15px_rgba(255,30,39,0.3)]' 
                    : 'bg-[#101010] hover:bg-[#181818] text-gray-400 hover:text-white border border-white/5'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid with AnimatePresence for smooth entering/leaving */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="portfolio-projects-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-xl cyber-glass-card cyber-glass-card-hover overflow-hidden cursor-pointer flex flex-col justify-between"
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden bg-zinc-950">
                  {/* Neon laser pulse border for active hover elements */}
                  <div className="absolute inset-x-0 bottom-0 h-[3px] bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20 shadow-[0_0_12px_#ff1e27]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform duration-700 ease-out scale-103 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  />
                  {/* Hover telemetry label overlay */}
                  <div className="absolute top-4 left-4 z-20 font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 bg-black/90 border border-brand-red/35 rounded text-brand-red transition-all">
                    {project.category}
                  </div>

                  <div className="absolute top-4 right-4 z-20 font-mono text-[9px] text-gray-400 bg-black/85 px-2 py-1 rounded border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                    LCP: {project.id === '1' ? '0.6' : '0.8'}s
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                      <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest">// blue_print_loaded</span>
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-brand-red transition-luxury">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-xs line-clamp-3 leading-relaxed mt-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-white/5">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="font-mono text-[9px] text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="font-mono text-[9px] text-brand-red/80 px-1 py-0.5">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Project Blueprints Spec Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto pointer-events-auto"
              id="portfolio-case-modal"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.93, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.93, y: 15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl bg-[#0b0b0b] border border-brand-red/20 rounded-2xl glow-red-strong overflow-hidden flex flex-col"
              >
                {/* Hero Showcase Area */}
                <div className="relative h-64 sm:h-80 w-full overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-black/40 to-transparent z-10" />
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-80"
                  />
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-30 p-2 text-white/70 hover:text-white bg-black/60 hover:bg-brand-red/90 rounded-full cursor-pointer hover:rotate-90 transition-all duration-300 active:scale-90"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <span className="font-mono text-[10px] text-brand-red uppercase tracking-widest px-3 py-1 bg-black/80 border border-brand-red/30 rounded-full inline-block mb-3.5">
                      {selectedProject.category} Blueprints
                    </span>
                    <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Modal Info Workspace */}
                <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-8 overflow-y-auto max-h-[calc(105vh-350px)]">
                  {/* Left Column: Metadata list */}
                  <div className="space-y-6 md:border-r md:border-white/5 md:pr-6">
                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5 text-brand-red shrink-0" />
                      <div>
                        <div className="font-mono text-[10px] text-gray-500 uppercase">CLIENT ACCOUNT</div>
                        <div className="text-gray-200 text-sm font-semibold">{selectedProject.client}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-brand-red shrink-0" />
                      <div>
                        <div className="font-mono text-[10px] text-gray-500 uppercase">DURATION</div>
                        <div className="text-gray-200 text-sm font-semibold">{selectedProject.duration}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Trophy className="w-5 h-5 text-emerald-500 shrink-0" />
                      <div>
                        <div className="font-mono text-[10px] text-emerald-500 uppercase">MEASURED IMPACT</div>
                        <div className="text-emerald-400 text-sm font-semibold">{selectedProject.impact}</div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="font-mono text-[10px] text-gray-500 uppercase mb-2">INTEGRATED TECH</div>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.technologies.map((tech, i) => (
                          <span key={i} className="font-mono text-[9px] text-gray-300 bg-white/5 border border-white/5 px-2 py-0.5 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right 2 Columns: Detailed narrative */}
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <div className="flex items-center gap-1.5 font-mono text-xs text-brand-red font-bold uppercase mb-2.5">
                        <Info className="w-4 h-4" />
                        <span>Case Overview</span>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed font-sans">
                        {selectedProject.longDescription}
                      </p>
                    </div>

                    {/* Architectural Blueprint block design */}
                    <div className="p-4 rounded bg-[#101010] border border-white/5 font-mono text-xs text-gray-400 space-y-2">
                      <div className="text-brand-red text-[11px] font-bold">// SYSTEM ARCHITECT SPECS</div>
                      <div>- Deployment: VORTEX Cloud Edge Nodes</div>
                      <div>- Client caching: Implemented local progressive cache</div>
                      <div>- Load metric index: LCP 0.8s, CLS 0.0</div>
                      <div>- Layout stability: Satisfies mobile-first responsive scaling</div>
                    </div>

                    <div className="pt-2 flex justify-end">
                      <button 
                        onClick={() => setSelectedProject(null)}
                        className="px-5 py-2.5 rounded bg-brand-red text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-brand-red-hot cursor-pointer hover:shadow-[0_0_15px_rgba(255,30,39,0.3)] transition-luxury active:scale-95 flex items-center gap-1.5"
                      >
                        Accept Schematic
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
