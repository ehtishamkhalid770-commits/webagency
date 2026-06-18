import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      id="testimonials" 
      className="relative py-24 sm:py-32 px-6 overflow-hidden bg-cyber-grid bg-repeat"
    >
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-red-deep/5 blur-[120px] pointer-events-none" />
      
      <div className="relative w-full max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16 md:mb-20">
          <span className="font-mono text-xs text-brand-red uppercase tracking-widest font-semibold block mb-3">
            // CLIENT ADVOCATES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase col-span-3">
            Trusted by Modern <span className="text-brand-red">Leaders.</span>
          </h2>
        </div>

        {/* Carousel Slide container */}
        <div className="relative" id="testimonials-carousel">
          <div className="absolute -top-12 -left-4 md:-left-12 text-brand-red/8 opacity-60">
            <Quote className="w-24 h-24 rotate-180 shrink-0" />
          </div>

          <div className="min-h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center space-y-6 px-4 md:px-12"
              >
                {/* Quotation text */}
                <p className="text-base sm:text-lg md:text-xl text-gray-300 italic font-sans leading-relaxed max-w-3xl mx-auto">
                  "{TESTIMONIALS[activeIndex].quote}"
                </p>

                {/* Rating Stars */}
                <div className="flex items-center justify-center gap-1 text-brand-red">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-red" />
                  ))}
                </div>

                {/* Author profile */}
                <div className="flex items-center justify-center gap-3.5 pt-4">
                  <img
                    src={TESTIMONIALS[activeIndex].avatar}
                    alt={TESTIMONIALS[activeIndex].author}
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 rounded-full object-cover border border-brand-red/30"
                  />
                  <div className="text-left">
                    <div className="font-display font-bold text-sm text-white uppercase">{TESTIMONIALS[activeIndex].author}</div>
                    <div className="font-mono text-[10px] text-gray-500 uppercase">{TESTIMONIALS[activeIndex].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-white/5 hover:border-brand-red bg-white/5 text-gray-400 hover:text-white cursor-pointer transition-luxury active:scale-95"
              aria-label="Previous testimonial"
              id="btn-prev-testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-1.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === i ? 'w-6 bg-brand-red' : 'w-1.5 bg-zinc-800'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-white/5 hover:border-brand-red bg-white/5 text-gray-400 hover:text-white cursor-pointer transition-luxury active:scale-95"
              aria-label="Next testimonial"
              id="btn-next-testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
