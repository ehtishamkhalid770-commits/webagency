import React, { useState } from 'react';
import { Mail, ArrowRight, Github, Twitter, Linkedin, Instagram, Terminal, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email.trim()) {
      setErrorMsg('Please supply an email endpoint.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMsg('Please enter a valid format (e.g., mail@domain.com).');
      return;
    }

    // Success simulation
    setIsSubscribed(true);
    setEmail('');
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <footer className="relative bg-[#020202] border-t border-white/5 py-16 px-6 overflow-hidden" id="app-footer">
      
      {/* Background flares */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 rounded-full bg-brand-red-deep/5 blur-[90px] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Column 1: Info */}
          <div className="md:col-span-4 space-y-6">
            <a 
              href="#hero" 
              onClick={(e) => handleLinkClick(e, '#hero')}
              className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-white group"
              id="footer-logo"
            >
              <div className="w-8 h-8 rounded bg-gradient-to-tr from-brand-red to-black flex items-center justify-center border border-brand-red/40">
                <Terminal className="w-4 h-4 text-white" />
              </div>
              <span>
                VORTEX<span className="text-brand-red font-bold">.</span>
              </span>
            </a>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              We engineer beautiful web atmospheres combining cinematic typography, extreme responsive layouts, and modern parallax animation layers. 
            </p>
            
            {/* Social handles vectors */}
            <div className="flex items-center gap-3" id="footer-socials">
              {[
                { icon: Twitter, href: '#', label: 'Twitter Handle' },
                { icon: Github, href: '#', label: 'Github Repository' },
                { icon: Linkedin, href: '#', label: 'Linkedin Network' },
                { icon: Instagram, href: '#', label: 'Instagram Profile' },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    className="w-10 h-10 rounded border border-white/5 bg-white/5 text-gray-400 hover:text-white hover:border-brand-red flex items-center justify-center transition-luxury cursor-pointer active:scale-90"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <span className="block font-mono text-[10px] text-gray-500 uppercase tracking-widest font-bold">// STATION INDEX</span>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#portfolio" onClick={(e) => handleLinkClick(e, '#portfolio')} className="text-gray-400 hover:text-white transition-luxury">Selected Works</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="text-gray-400 hover:text-white transition-luxury">Services Bento</a>
              </li>
              <li>
                <a href="#estimate" onClick={(e) => handleLinkClick(e, '#estimate')} className="text-gray-400 hover:text-white transition-luxury">Estimate Planner</a>
              </li>
              <li>
                <a href="#faqs" onClick={(e) => handleLinkClick(e, '#faqs')} className="text-gray-400 hover:text-white transition-luxury font-display">Technical FAQs</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="text-gray-400 hover:text-brand-red transition-luxury font-bold">Secure Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter input with reactive states */}
          <div className="md:col-span-5 space-y-4" id="footer-newsletter">
            <span className="block font-mono text-[10px] text-gray-500 uppercase tracking-widest font-bold">// CORE BULLETINS</span>
            <p className="text-xs text-gray-400 max-w-sm">
              Receive advanced reviews, visual case updates, and engineering tips directly into your coordinate folder. No spam. Encrypted delivery.
            </p>

            <AnimatePresence mode="wait">
              {!isSubscribed ? (
                <motion.form 
                  key="subscribe-form"
                  onSubmit={handleSubscribe} 
                  className="space-y-2"
                  noValidate
                >
                  <div className="flex items-center relative overflow-hidden rounded-lg border border-white/10 focus-within:border-brand-red/60 transition-luxury h-12 bg-black">
                    <input
                      type="email"
                      placeholder="adviser@gmail.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setErrorMsg('');
                      }}
                      className="w-full bg-transparent px-4 py-2.5 text-xs text-white focus:outline-none pr-12"
                    />
                    <button
                      type="submit"
                      className="absolute right-1 top-1 bottom-1 px-3.5 bg-brand-red hover:bg-brand-red-hot text-black hover:text-black rounded font-bold cursor-pointer transition-luxury active:scale-95 flex items-center justify-center shrink-0"
                      aria-label="Subscribe"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {errorMsg && (
                    <motion.div 
                      initial={{ y: -5, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="flex items-center gap-1.5 text-brand-red text-[10px] font-mono"
                    >
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errorMsg}</span>
                    </motion.div>
                  )}
                </motion.form>
              ) : (
                <motion.div 
                  key="subscribe-done"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="p-3 bg-brand-red/10 border border-brand-red/20 rounded-lg flex items-center gap-3 text-brand-red"
                >
                  <CheckCircle2 className="w-4 h-4 text-brand-red animate-bounce shrink-0" />
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-white">SUBSCRIBED SECURELY</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Outer credit bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-600 font-mono text-[10px]">
          <div>
            &copy; {new Date().getFullYear()} VORTEX STUDY. ALL DESIGN SCHEMATICS PROTECTED.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-brand-red transition-luxury cursor-pointer">PRIVACY PROTOCOL</span>
            <span className="w-1.5 h-1.5 bg-brand-red rounded-full" />
            <span className="hover:text-brand-red transition-luxury cursor-pointer">SYSTEM RETRIEVALS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
