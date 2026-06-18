import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenEstimator: () => void;
  activeSection: string;
}

export default function Navbar({ onOpenEstimator, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Work', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'Interactive Estimate', href: '#estimate' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Let\'s Discuss', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-luxury ${
          isScrolled 
            ? 'backdrop-blur-md bg-[#030303]/85 border-b border-brand-red/15 py-4 glow-red' 
            : 'bg-transparent py-6'
        }`}
        id="app-header"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-white group"
            id="nav-logo"
          >
            <div className="relative w-8 h-8 rounded bg-gradient-to-tr from-brand-red to-black flex items-center justify-center border border-brand-red/40 group-hover:border-brand-red transition-luxury">
              <Terminal className="w-4 h-4 text-white group-hover:text-brand-red-hot transition-luxury" />
              <div className="absolute inset-0 rounded bg-brand-red opacity-0 group-hover:opacity-10 blur-sm transition-luxury" />
            </div>
            <span>
              VORTEX<span className="text-brand-red group-hover:text-white transition-luxury">.</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium" id="desktop-nav">
            {navItems.map((item) => {
              const cleanedHref = item.href;
              const isActive = activeSection === cleanedHref.substring(1);
              return (
                <a
                  key={item.label}
                  href={cleanedHref}
                  onClick={(e) => handleNavClick(e, cleanedHref)}
                  className={`relative py-1 text-gray-400 hover:text-white transition-luxury ${
                    isActive ? 'text-white font-semibold' : ''
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span 
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-red shadow-[0_0_8px_#ff1e27]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4" id="nav-actions">
            <button
              onClick={onOpenEstimator}
              className="px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-red hover:text-white border border-brand-red/30 hover:border-brand-red rounded bg-brand-dark/20 hover:bg-brand-red/10 cursor-pointer transition-luxury flex items-center gap-1.5 active:scale-95"
              id="btn-fast-quote"
            >
              Get Custom Estimate
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white cursor-pointer active:scale-90 transition-luxury"
            id="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer (FullScreen overlay) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 z-40 bg-[#020202]/98 backdrop-blur-lg flex flex-col justify-center items-center pointer-events-auto"
            id="mobile-menu-overlay"
          >
            {/* Background elements */}
            <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-brand-red-deep/10 blur-[120px]" />
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-black blur-[120px]" />

            <motion.nav 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="flex flex-col gap-6 text-center z-10"
              id="mobile-nav-list"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-gray-600 font-mono text-xs mb-4 uppercase tracking-widest">
                // VORTEX NAVIGATION RAIL
              </div>
              {navItems.map((item, idx) => {
                const cleanedHref = item.href;
                return (
                  <motion.a
                    key={item.label}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    href={cleanedHref}
                    onClick={(e) => handleNavClick(e, cleanedHref)}
                    className="text-2xl font-display font-medium text-gray-300 hover:text-brand-red transition-luxury py-2"
                  >
                    {item.label}
                  </motion.a>
                );
              })}

              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 + navItems.length * 0.05 }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenEstimator();
                }}
                className="mt-6 px-6 py-3 font-mono font-bold text-sm tracking-wider uppercase bg-brand-red hover:bg-brand-red-hot text-black hover:text-black rounded-lg cursor-pointer transform hover:scale-105 active:scale-95 transition-luxury shadow-[0_0_20px_rgba(255,30,39,0.3)]"
                id="btn-fast-quote-mobile"
              >
                Get Custom Quote
              </motion.button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
