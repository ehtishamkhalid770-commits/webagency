import React, { useState, useEffect } from 'react';
import { ArrowDown, CodeXml, Flame, Users, Sparkle, Globe, Terminal, Play, Zap, ShieldAlert, Activity } from 'lucide-react';
import { motion } from 'motion/react';
import { AGENCY_STATS } from '../data';

interface HeroProps {
  onOpenEstimator: () => void;
  onScrollToContact: () => void;
}

export default function Hero({ onOpenEstimator, onScrollToContact }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState<'latency' | 'bandwidth' | 'system'>('latency');
  const [techTicks, setTechTicks] = useState({ fps: 120, latency: 14, systemLoad: 12 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 30,
        y: (e.clientY - window.innerHeight / 2) / 30,
      });
    };

    // Simulate minor variations in technical metrics for raw authenticity
    const interval = setInterval(() => {
      setTechTicks({
        fps: Math.floor(118 + Math.random() * 3),
        latency: Math.floor(12 + Math.random() * 5),
        systemLoad: Math.floor(9 + Math.random() * 7),
      });
    }, 1500);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  const handleScrollDown = (e: React.MouseEvent) => {
    e.preventDefault();
    const portfolio = document.querySelector('#portfolio');
    if (portfolio) {
      portfolio.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[105vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 px-6 bg-black"
    >
      {/* 1. Cyber Grid Background */}
      <div 
        className="absolute inset-0 bg-cyber-grid bg-repeat opacity-60 z-0 animate-grid-shift pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.12}px)`,
        }}
      />

      {/* 2. Slow Drifting Glass Orbs */}
      <div 
        className="absolute top-1/4 left-1/3 w-[50vw] h-[50vw] max-w-[600px] rounded-full bg-brand-red-deep/10 blur-[130px] pointer-events-none z-0"
        style={{
          transform: `translate(calc(-50% + ${mousePosition.x * 0.3}px), calc(-50% + ${mousePosition.y * 0.3}px + ${scrollY * 0.05}px))`,
        }}
      />
      <div 
        className="absolute bottom-10 right-10 w-[40vw] h-[40vw] max-w-[500px] rounded-full bg-red-950/10 blur-[120px] pointer-events-none z-0"
        style={{
          transform: `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.5}px)`,
        }}
      />

      {/* MAIN LAYOUT ROW: Responsive Asymmetric Two-Column */}
      <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-20">
        
        {/* LEFT COLUMN: Premium typography & content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-8">
          
          {/* Flag badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded bg-brand-red/10 border border-brand-red/20 font-mono text-[10px] md:text-xs text-brand-red tracking-widest uppercase"
            id="hero-badge"
          >
            <Flame className="w-3.5 h-3.5 text-brand-red animate-pulse" />
            <span>CRIMSON & BLACK DESIGN AUTHORITY</span>
          </motion.div>

          {/* Huge Dynamic Heading */}
          <h1 
            className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white uppercase leading-[0.9] max-w-2xl"
            id="hero-heading"
          >
            Engineering <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-red to-brand-red-hot animate-text-shimmer bg-[size:200%_auto] glow-text-red">
              Immersive
            </span> <br />
            Digital Fronts.
          </h1>

          {/* Premium Sub-description */}
          <p
            className="text-gray-400 text-sm sm:text-base md:text-lg font-sans max-w-xl leading-relaxed"
            id="hero-description"
          >
            We deploy hyper-interactive, custom-built interfaces with precise responsive frameworks, extreme performance layers, and seamless parallax architectures built to dominate user attention.
          </p>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto" id="hero-ctas">
            <button
              onClick={onOpenEstimator}
              className="px-8 py-4 font-mono font-bold text-xs tracking-wider uppercase bg-brand-red hover:bg-brand-red-hot text-black hover:text-black rounded cursor-pointer transform hover:scale-102 active:scale-98 transition-luxury shadow-[0_0_25px_rgba(255,30,39,0.3)] flex items-center justify-center gap-2"
              id="hero-primary-cta"
            >
              <span>Build Scope Blueprint</span>
              <Activity className="w-4 h-4" />
            </button>
            
            <button
              onClick={onScrollToContact}
              className="px-8 py-4 font-mono font-bold text-xs tracking-wider uppercase text-white hover:text-brand-red border border-white/10 hover:border-brand-red/60 rounded bg-[#0b0b0b]/60 hover:bg-brand-red/5 cursor-pointer backdrop-blur-sm transition-luxury active:scale-98 flex items-center justify-center gap-1.5"
              id="hero-secondary-cta"
            >
              <span>Discover Pipeline</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red inline-block mb-0.5" />
            </button>
          </div>

          {/* Tech Metadata String Line */}
          <div className="pt-6 font-mono text-[10px] text-gray-500 flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
              WEB SYSTEM: LIVE
            </span>
            <span>// DEPLOYMENT_REGION: CLOUD_RUN_EDGE</span>
            <span>// LAYOUT: COMPLIANT_MOBILE_RESPONSIVE</span>
          </div>

        </div>

        {/* RIGHT COLUMN: The Interactive Custom Cyber Panel Cockpit */}
        <div 
          className="lg:col-span-5 relative w-full h-[360px] sm:h-[440px]"
          style={{
            transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`,
          }}
        >
          {/* Main outer Glassmorphic Cyber Deck */}
          <div className="absolute inset-0 rounded-2xl border border-white/10 cyber-glass-card p-6 flex flex-col justify-between glow-red overflow-hidden cyber-panel-angle group">
            
            {/* Visual Laser Scanning sweep line */}
            <div className="absolute top-0 bottom-0 left-0 w-[5px] bg-brand-red/35 blur-md animate-laser-sweep pointer-events-none" />

            {/* Header / Tabs controls */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 z-10">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse" />
                <span className="font-mono text-xs font-bold text-gray-200 tracking-wider">VORTEX CORE ENGINE</span>
              </div>
              
              <div className="flex gap-2">
                {['latency', 'bandwidth'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`px-2.5 py-1 rounded font-mono text-[9px] uppercase tracking-wider cursor-pointer ${
                      activeTab === tab 
                        ? 'bg-brand-red text-black font-bold' 
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Center Telemetry Graphic */}
            <div className="my-4 flex-1 flex flex-col justify-center space-y-4">
              
              {/* Active Tab Screen 1: Latency simulation */}
              {activeTab === 'latency' && (
                <div className="space-y-3.5">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-gray-400">EDGE RESPONSE TICK</span>
                    <span className="text-green-500">{techTicks.latency}ms</span>
                  </div>
                  {/* Visual simulated bar graphs */}
                  <div className="h-20 flex gap-1 items-end bg-[#050505] p-2 rounded border border-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-cyber-grid opacity-30" />
                    {[...Array(18)].map((_, i) => {
                      const h = Math.abs(Math.sin(i * 0.4 + scrollY * 0.05)) * 90 + 5;
                      return (
                        <div 
                          key={i} 
                          className="flex-1 bg-gradient-to-t from-brand-red-deep to-brand-red rounded-sm transition-all duration-300"
                          style={{ height: `${h}%` }}
                        />
                      );
                    })}
                  </div>
                  <div className="flex items-center justify-between font-mono text-[9px] text-gray-500">
                    <span>INDEX: RED_LATENCY_STREAM_L1</span>
                    <span>CORE REACTION STABLE</span>
                  </div>
                </div>
              )}

              {/* Active Tab Screen 2: Bandwidth simulation */}
              {activeTab === 'bandwidth' && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-gray-400">FPS REFRESH FREQUENCY</span>
                    <span className="text-brand-red">{techTicks.fps} FPS</span>
                  </div>
                  {/* Radial dials simulation via grid metrics */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: 'SEO SCORE', val: '100%', c: 'text-emerald-400' },
                      { label: 'ACCESSIBLE', val: 'AAA', c: 'text-brand-red' },
                      { label: 'CO2 SAVED', val: '93%', c: 'text-emerald-400' },
                    ].map((dial, idx) => (
                      <div key={idx} className="p-3 rounded bg-black/60 border border-white/5 text-center">
                        <span className="font-mono text-[8px] text-gray-500 block">{dial.label}</span>
                        <span className={`font-display font-extrabold text-sm block mt-1 ${dial.c}`}>{dial.val}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] text-gray-500 font-mono text-center leading-relaxed">// Verified by structural analytics engines under 120fps physics engines.</p>
                </div>
              )}

            </div>

            {/* Bottom Deck metrics readout */}
            <div className="border-t border-white/5 pt-4 flex justify-between items-center">
              <div className="font-mono text-[9px] text-gray-500 space-y-0.5">
                <div>SYS STATUS: STABLE</div>
                <div>RENDER COORD: {mousePosition.x.toFixed(1)}, {mousePosition.y.toFixed(1)}</div>
              </div>

              {/* Action Blueprint Button */}
              <button
                onClick={onOpenEstimator}
                className="px-4 py-2 bg-white/5 hover:bg-brand-red/15 border border-white/10 hover:border-brand-red/60 rounded font-mono text-[9px] text-gray-300 hover:text-white uppercase tracking-widest cursor-pointer flex items-center gap-1.5 active:scale-95 transition-luxury"
              >
                <span>Calibrate</span>
                <Zap className="w-3 h-3 text-brand-red" />
              </button>
            </div>

          </div>

          {/* Absolute decorative red corner flags */}
          <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-brand-red" />
          <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-brand-red" />
        </div>

      </div>

      {/* Outer Statistics Ribbon: Large display figures on desktop */}
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t border-white/5 pt-4 z-20 pointer-events-none opacity-40">
        <span className="font-mono text-[10px] text-gray-500">// EXPLORE CREATIVE DIRECTION</span>
        <div className="flex items-center gap-1 cursor-pointer pointer-events-auto" onClick={handleScrollDown}>
          <ArrowDown className="w-3.5 h-3.5 text-brand-red animate-bounce" />
        </div>
      </div>

    </section>
  );
}
