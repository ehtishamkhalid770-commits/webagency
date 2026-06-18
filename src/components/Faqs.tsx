import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQS } from '../data';

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faqs" 
      className="relative py-24 sm:py-32 px-6 overflow-hidden bg-black"
    >
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-brand-red-deep/5 blur-[120px] pointer-events-none" />
      
      <div className="relative w-full max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16 md:mb-20">
          <span className="font-mono text-xs text-brand-red uppercase tracking-widest font-semibold block mb-3">
            // CONTEXT CHECKLIST
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
            Frequently Asked <span className="text-brand-red">Inquiries.</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            Detailed telemetry answers on contract timelines, web core performance, design blueprints, and project integration.
          </p>
        </div>

        {/* Accordion container */}
        <div className="space-y-4" id="faqs-accordion">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen 
                    ? 'border-brand-red/30 bg-[#090909]/90' 
                    : 'border-white/5 bg-[#050505] hover:border-white/10'
                }`}
              >
                {/* Question trigger bar */}
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 sm:py-6 flex items-center justify-between gap-4 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-4 h-4 shrink-0 transition-colors ${isOpen ? 'text-brand-red' : 'text-gray-500'}`} />
                    <span className="font-display font-bold text-sm sm:text-base text-white tracking-wide">
                      {item.question}
                    </span>
                  </div>
                  
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border border-white/10 hover:border-brand-red/40 transition-colors text-gray-500`}>
                    {isOpen ? (
                      <Minus className="w-3 h-3 text-brand-red" />
                    ) : (
                      <Plus className="w-3 h-3" />
                    )}
                  </div>
                </button>

                {/* Animated collapse workspace */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-white/5 text-xs sm:text-sm text-gray-400 leading-relaxed font-sans mt-1">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
