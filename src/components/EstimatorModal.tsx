import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calculator, Sparkle, Sliders, CalendarClock, ArrowUpRight, CheckCircle, Zap } from 'lucide-react';
import { EstimatorOptions } from '../types';

interface EstimatorProps {
  onInjectBlueprint: (blueprintText: string, selectedService: string) => void;
}

export default function EstimatorModal({ onInjectBlueprint }: EstimatorProps) {
  const [options, setOptions] = useState<EstimatorOptions>({
    projectType: 'landing',
    pagesCount: 5,
    hasAnimations: true,
    hasCMS: false,
    hasAuth: false,
    deliveryTimeline: 'standard',
  });

  const [pricing, setPricing] = useState({ cost: 0, weeks: 0 });

  // Calculate pricing whenever options change
  useEffect(() => {
    let basePrice = 0;
    let baseWeeks = 0;

    switch (options.projectType) {
      case 'landing':
        basePrice = 2800;
        baseWeeks = 3;
        break;
      case 'ecommerce':
        basePrice = 5800;
        baseWeeks = 6;
        break;
      case 'saas':
        basePrice = 12000;
        baseWeeks = 10;
        break;
      case 'portal':
        basePrice = 7500;
        baseWeeks = 8;
        break;
    }

    // Add cost for page count
    const extraPages = Math.max(0, options.pagesCount);
    basePrice += extraPages * 220;
    // Add additional weeks based on size
    baseWeeks += Math.ceil(extraPages / 4);

    // Specialized elements
    if (options.hasAnimations) {
      basePrice += 800;
      baseWeeks += 1;
    }
    if (options.hasCMS) {
      basePrice += 1500;
      baseWeeks += 2;
    }
    if (options.hasAuth) {
      basePrice += 1200;
      baseWeeks += 1.5;
    }

    // Delivery Multiplier
    let multiplier = 1.0;
    if (options.deliveryTimeline === 'rush') {
      multiplier = 1.35;
      baseWeeks = Math.max(2, Math.round(baseWeeks * 0.65)); // 35% faster
    } else if (options.deliveryTimeline === 'relaxed') {
      multiplier = 0.9;
      baseWeeks = Math.round(baseWeeks * 1.2); // 20% slow
    }

    const finalCost = Math.round(basePrice * multiplier);

    setPricing({
      cost: finalCost,
      weeks: baseWeeks,
    });
  }, [options]);

  const handleExportBlueprint = () => {
    const typeLabel = {
      landing: 'Interactive Branding Landing Single-Page',
      ecommerce: 'Neo E-Commerce Catalog Platform',
      saas: 'Nova Analytics SaaS Dashboard Panel',
      portal: 'Secure Hyperion Enterprise Client Portal',
    }[options.projectType];

    const timelineLabel = {
      standard: 'Standard Sprints Pipeline',
      rush: 'Express Rush Pipeline (Accelerated 35%)',
      relaxed: 'Relaxed Timeline Budget Rate',
    }[options.deliveryTimeline];

    const blueprint = `// Vortex Client Generated System Specs:
- Architecture Type: ${typeLabel}
- Structural Size: ${options.pagesCount} Active App Views
- Motion Effects: ${options.hasAnimations ? 'High Fidelity Smooth Parallax' : 'Static Standards'}
- CMS Integration: ${options.hasCMS ? 'Dynamic Administration Panel Enabled' : 'No Admin CMS'}
- Secure auth: ${options.hasAuth ? 'Active Enclave Accounts Authorized' : 'No User Portal Client'}
- Priority Delivery: ${timelineLabel}
- Estimated Total Budget Metric: $${pricing.cost.toLocaleString()} USD
- Estimated Duration Timeline: ${pricing.weeks} Project Sprints / Weeks.`;

    const mappedServiceId = {
      landing: 'ui-ux',
      ecommerce: 'ecommerce',
      saas: 'web-dev',
      portal: 'ai-integrations',
    }[options.projectType] || 'web-dev';

    onInjectBlueprint(blueprint, mappedServiceId);

    // Smooth scroll to contact section
    const contact = document.querySelector('#contact');
    if (contact) {
      const topOffset = contact.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="estimate" 
      className="relative py-24 sm:py-32 px-6 overflow-hidden bg-cyber-grid bg-repeat"
    >
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-brand-red-deep/5 blur-[120px] pointer-events-none" />
      
      <div className="relative w-full max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs text-brand-red uppercase tracking-widest font-semibold block mb-3">
            // INTERACTIVE PLANNER
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase col-span-3">
            Design Your Project <span className="text-brand-red">Specs.</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Select features dynamically to preview budget estimates instantly. Inject your requirements blueprint directly into our pipeline contact console below.
          </p>
        </div>

        {/* Calculator workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Options select pane */}
          <div className="lg:col-span-7 bg-[#090909]/90 border border-white/5 rounded-xl p-6 sm:p-8 space-y-8" id="estimator-form">
            
            {/* Project Type Grid */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sliders className="w-4 h-4 text-brand-red" />
                <span className="font-mono text-xs text-gray-400 uppercase tracking-wider font-semibold">1. SELECT STRUCTURAL ARCHETYPE</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'landing', label: 'Agency Landing', price: '$2,800+', tech: 'Branding & Identity UI' },
                  { id: 'ecommerce', label: 'E-Commerce Store', price: '$5,800+', tech: 'Stripe, Products Catalog' },
                  { id: 'saas', label: 'Nova SaaS Platform', price: '$12,000+', tech: 'Secure Admin Panels, Charts' },
                  { id: 'portal', label: 'Hyperion Work Portal', price: '$7,500+', tech: 'User Upload/Database Sync' },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setOptions({ ...options, projectType: tier.id as any })}
                    className={`p-4 rounded-lg border text-left cursor-pointer transition-luxury flex flex-col justify-between h-28 ${
                      options.projectType === tier.id
                        ? 'border-brand-red bg-brand-red/5 hover:bg-brand-red/10'
                        : 'border-white/5 bg-[#0f0f0f]/60 hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`font-display font-bold text-sm ${options.projectType === tier.id ? 'text-brand-red' : 'text-gray-200'}`}>
                        {tier.label}
                      </span>
                      {options.projectType === tier.id && <CheckCircle className="w-4 h-4 text-brand-red" />}
                    </div>
                    <div>
                      <div className="text-gray-400 font-bold font-mono text-xs mt-1">{tier.price}</div>
                      <div className="text-gray-500 font-sans text-[10px] mt-0.5">{tier.tech}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Pages Slider counter */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-mono text-xs text-gray-400 uppercase tracking-wider font-semibold">2. VIEWS OR PAGE ROUTE COUNT</span>
                <span className="font-mono text-xs text-brand-red font-bold select-none">{options.pagesCount} Active Templates</span>
              </div>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={options.pagesCount}
                  onChange={(e) => setOptions({ ...options, pagesCount: parseInt(e.target.value) })}
                  className="w-full accent-brand-red h-1.5 bg-[#171717] rounded-full appearance-none cursor-pointer"
                />
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    type="button"
                    onClick={() => setOptions({ ...options, pagesCount: Math.max(1, options.pagesCount - 1) })}
                    className="w-8 h-8 rounded bg-white/5 hover:bg-white/10 flex items-center justify-center font-bold text-sm text-gray-400 hover:text-white cursor-pointer active:scale-95"
                  >
                    -
                  </button>
                  <button
                    type="button"
                    onClick={() => setOptions({ ...options, pagesCount: Math.min(30, options.pagesCount + 1) })}
                    className="w-8 h-8 rounded bg-white/5 hover:bg-white/10 flex items-center justify-center font-bold text-sm text-gray-400 hover:text-white cursor-pointer active:scale-95"
                  >
                    +
                  </button>
                </div>
              </div>
              <p className="text-[10px] text-gray-500 mt-2 font-mono">// Includes robust responsive scaling, customized tables, and navigation links.</p>
            </div>

            {/* Specialized components check */}
            <div>
              <span className="font-mono text-xs text-gray-400 uppercase tracking-wider font-semibold block mb-4">3. INTEGRATED CUSTOM SYSTEM DECK</span>
              <div className="space-y-3">
                {[
                  { id: 'hasAnimations', label: 'Parallax Architecture & Framer Motion Transitions', price: '+$800', desc: 'Sensationally smooth visual transitions & hover micro-interactions' },
                  { id: 'hasCMS', label: 'Fluid Administrators CMS System Integration', price: '+$1,500', desc: 'Secure backend content updater (blogs, projects, statistics)' },
                  { id: 'hasAuth', label: 'Cognitive User Accounts & Secured Storage Vaults', price: '+$1,200', desc: 'Encrypted document sharing & custom client logins' },
                ].map((element) => {
                  const isChecked = (options as any)[element.id];
                  return (
                    <label
                      key={element.id}
                      className={`flex gap-3.5 p-4 rounded-lg border cursor-pointer transition-luxury items-start ${
                        isChecked 
                          ? 'border-brand-red/40 bg-brand-red/5' 
                          : 'border-white/5 bg-[#0f0f0f]/40 hover:border-white/10'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => setOptions({ ...options, [element.id]: e.target.checked })}
                        className="mt-1 accent-brand-red w-4 h-4 rounded"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-display font-medium text-xs sm:text-sm text-white">{element.label}</span>
                          <span className="font-mono text-xs font-bold text-brand-red">{element.price}</span>
                        </div>
                        <p className="text-gray-500 text-[10px] sm:text-xs mt-1 leading-relaxed">{element.desc}</p>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Timeframe priorities */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CalendarClock className="w-4 h-4 text-brand-red" />
                <span className="font-mono text-xs text-gray-400 uppercase tracking-wider font-semibold">4. PRIORITY TIMELINE DISPATCH</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'relaxed', label: 'Relaxed Timeline', factor: '0.9x rate' },
                  { id: 'standard', label: 'Standard Sprints', factor: 'Standard rate' },
                  { id: 'rush', label: 'Rush Fast-Track', factor: '1.35x rate' },
                ].map((time) => (
                  <button
                    key={time.id}
                    type="button"
                    onClick={() => setOptions({ ...options, deliveryTimeline: time.id as any })}
                    className={`py-3.5 px-2 rounded border text-center cursor-pointer transition-luxury ${
                      options.deliveryTimeline === time.id
                        ? 'border-brand-red bg-brand-red/5 text-white font-bold'
                        : 'border-white/5 bg-[#0f0f0f]/40 hover:border-white/10 text-gray-400'
                    }`}
                  >
                    <div className="font-display text-xs font-bold">{time.label}</div>
                    <div className="font-mono text-[9px] text-gray-500 mt-1">{time.factor}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results preview board display column */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#120505] to-[#050505] border border-brand-red/35 rounded-xl p-6 sm:p-8 sticky top-24 glow-red">
            <span className="font-mono text-[10px] text-brand-red uppercase tracking-widest font-bold block mb-4">// CALCULATED PROJECTION METRIC</span>
            
            {/* Visual price tag dial */}
            <div className="text-center py-6 border-b border-white/5">
              <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">ESTIMATED PROPOSAL TOTAL</span>
              <div className="mt-3 font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight animate-pulse-slow">
                ${pricing.cost.toLocaleString()}
                <span className="text-brand-red text-2xl font-normal">.USD</span>
              </div>
              <p className="text-[10px] text-gray-500 mt-2 font-mono leading-relaxed">Estimations are derived on design systems, code complexity, and delivery targets. Subject to consultation.</p>
            </div>

            {/* Sprint timelines metrics */}
            <div className="grid grid-cols-2 gap-4 py-6 border-b border-white/5">
              <div className="text-center border-r border-white/5">
                <span className="font-mono text-[10px] text-gray-500 block uppercase">SPRINT TIMELINE</span>
                <span className="font-display text-xl font-bold text-white block mt-1.5">{pricing.weeks} Sprints</span>
                <span className="font-mono text-[9px] text-gray-400 mt-1 block">~ {pricing.weeks * 5} Development Days</span>
              </div>
              <div className="text-center">
                <span className="font-mono text-[10px] text-gray-500 block uppercase">CORE TECH CLASS</span>
                <span className="font-display text-xl font-bold text-brand-red block mt-1.5 uppercase">L1 Enterprise</span>
                <span className="font-mono text-[9px] text-green-500 mt-1 block">99.8% Speed Rank Valid</span>
              </div>
            </div>

            {/* List of features packed */}
            <div className="py-6 space-y-3.5">
              <div className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">// BLUEPRINT CONTAINS:</div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2.5 text-xs text-gray-300">
                  <div className="w-1.5 h-1.5 bg-brand-red rounded-full shrink-0" />
                  <span>Responsive UI Layout across table & phone</span>
                </li>
                {options.hasAnimations && (
                  <li className="flex items-center gap-2.5 text-xs text-gray-300">
                    <div className="w-1.5 h-1.5 bg-brand-red rounded-full shrink-0" />
                    <span>Lottie Vector & Framer Parallax effects</span>
                  </li>
                )}
                {options.hasCMS && (
                  <li className="flex items-center gap-2.5 text-xs text-gray-300">
                    <div className="w-1.5 h-1.5 bg-brand-red rounded-full shrink-0" />
                    <span>Fluid Markdown CRM Administrator Panel</span>
                  </li>
                )}
                <li className="flex items-center gap-2.5 text-xs text-gray-300">
                  <div className="w-1.5 h-1.5 bg-brand-red rounded-full shrink-0" />
                  <span>W3C Standard Compliance, Core Web Vitals optimized</span>
                </li>
              </ul>
            </div>

            {/* CTAs */}
            <button
              onClick={handleExportBlueprint}
              className="w-full py-4 bg-brand-red hover:bg-brand-red-hot text-black hover:text-black hover:shadow-[0_0_20px_rgba(255,30,39,0.4)] cursor-pointer select-none font-mono font-bold text-sm uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 active:scale-97 transition-luxury"
              id="btn-blueprint-trigger"
            >
              <Zap className="w-4 h-4" />
              Export Blueprint to Contact Section
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
