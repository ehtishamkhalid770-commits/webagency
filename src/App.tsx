import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import EstimatorModal from './components/EstimatorModal';
import Testimonials from './components/Testimonials';
import Faqs from './components/Faqs';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [injectedMessage, setInjectedMessage] = useState('');
  const [injectedService, setInjectedService] = useState('');

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sections = ['hero', 'portfolio', 'services', 'estimate', 'faqs', 'contact'];
    const observers = sections.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: '-30% 0px -40% 0px', // Triggers when the section takes up the central viewport
        }
      );

      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.element);
        }
      });
    };
  }, []);

  // Handler to open and scroll to project estimator
  const handleOpenEstimator = () => {
    const estimateSec = document.getElementById('estimate');
    if (estimateSec) {
      const topOffset = estimateSec.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  // Handler to scroll to contact
  const handleScrollToContact = () => {
    const contactSec = document.getElementById('contact');
    if (contactSec) {
      const topOffset = contactSec.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  // Cross-component blueprint bridge callback
  const handleInjectBlueprint = (blueprintText: string, serviceId: string) => {
    setInjectedMessage(blueprintText);
    setInjectedService(serviceId);
  };

  const handleClearInjected = () => {
    setInjectedMessage('');
    setInjectedService('');
  };

  return (
    <div className="relative min-h-screen bg-black text-[#fafafa] selection:bg-brand-red selection:text-black">
      {/* 1. Header/Navigation */}
      <Navbar 
        onOpenEstimator={handleOpenEstimator} 
        activeSection={activeSection} 
      />

      {/* 2. Primary Showcase Section */}
      <main id="main-content">
        {/* Parallax Hero Arena */}
        <Hero 
          onOpenEstimator={handleOpenEstimator}
          onScrollToContact={handleScrollToContact}
        />

        {/* Dynamic Project Portfolio Grid */}
        <Portfolio />

        {/* Bento Grid Services */}
        <Services />

        {/* Mid-Page Marquee Parallax Spacer Banner */}
        <div className="relative bg-[#070707] border-y border-white/5 py-12 overflow-hidden select-none">
          <div className="animate-marquee whitespace-nowrap flex gap-16 text-3xl font-display font-extrabold tracking-widest text-[#151515] uppercase">
            <span>HIGH PERFORMANCE APPLICATIONS</span>
            <span className="text-brand-red/30">//</span>
            <span>CINEMATIC MOTION VISUALS</span>
            <span className="text-brand-red/30">//</span>
            <span>STRIKING CONTRAST DESIGN</span>
            <span className="text-brand-red/30">//</span>
            <span>SPEED OPTIMIZED ZERO DESCRIPTORS</span>
            <span className="text-brand-red/30">//</span>
          </div>
        </div>

        {/* Custom Price & Timeframe Estimator */}
        <EstimatorModal 
          onInjectBlueprint={handleInjectBlueprint} 
        />

        {/* Executive endorsements */}
        <Testimonials />

        {/* Telemetry Accordion FAQs */}
        <Faqs />

        {/* Secure Form validated Contact Pipeline */}
        <Contact 
          injectedMessage={injectedMessage}
          injectedService={injectedService}
          clearInjectedMessage={handleClearInjected}
        />
      </main>

      {/* 3. Outer branding footer */}
      <Footer />
    </div>
  );
}
