import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, AlertTriangle, CheckCircle, Flame, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ContactFormInput, FormErrors } from '../types';

interface ContactProps {
  injectedMessage: string;
  injectedService: string;
  clearInjectedMessage: () => void;
}

export default function Contact({ injectedMessage, injectedService, clearInjectedMessage }: ContactProps) {
  const [formData, setFormData] = useState<ContactFormInput>({
    name: '',
    email: '',
    service: '',
    budget: '5k-10k',
    message: '',
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const messageInputRef = useRef<HTMLTextAreaElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Sync injected values when they change from the Estimator tool
  useEffect(() => {
    if (injectedMessage) {
      setFormData((prev) => ({
        ...prev,
        message: injectedMessage,
        service: injectedService || prev.service,
      }));
      
      // Auto-validate form fields when injected
      if (messageInputRef.current) {
        messageInputRef.current.focus();
      }
      
      // Clear parent notification key so we can edit it freely
      clearInjectedMessage();
    }
  }, [injectedMessage, injectedService]);

  // Full runtime validation solver
  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name identifier is required';
        if (value.trim().length < 3) return 'Name must consist of 3 or more letters';
        return undefined;
      case 'email':
        if (!value.trim()) return 'Electronic mail endpoint is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please supply a correct responsive format (e.g., client@domain.com)';
        return undefined;
      case 'service':
        if (!value) return 'Please specify a service capability track';
        return undefined;
      case 'message':
        if (!value.trim()) return 'Project specs details are required';
        if (value.trim().length < 15) return 'Details details must contain at least 15 characters';
        return undefined;
      default:
        return undefined;
    }
  };

  // Live validator effect triggered on data modifications
  useEffect(() => {
    const nextErrors: FormErrors = {};
    Object.keys(formData).forEach((key) => {
      const fieldError = validateField(key, (formData as any)[key]);
      if (fieldError) {
        (nextErrors as any)[key] = fieldError;
      }
    });
    setErrors(nextErrors);
  }, [formData]);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Mark all as touched to display validation issues
    const allTouched: Record<string, boolean> = {};
    Object.keys(formData).forEach((key) => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    // If active validation anomalies exist, reject submission
    const errorsCount = Object.keys(errors).length;
    if (errorsCount > 0) {
      // Focus on first mistake
      if (errors.name && nameInputRef.current) {
        nameInputRef.current.focus();
      }
      return;
    }

    // Success transaction sequence simulation
    setIsSubmitting(true);
    await new Promise((res) => setTimeout(res, 2000)); // Simulating secure post delays
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Clear data after success
    setFormData({
      name: '',
      email: '',
      service: '',
      budget: '5k-10k',
      message: '',
    });
    setTouched({});
  };

  return (
    <section 
      id="contact" 
      className="relative py-24 sm:py-32 px-6 overflow-hidden bg-black"
    >
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-brand-red-deep/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Coordinates / Info details */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <span className="font-mono text-xs text-brand-red uppercase tracking-widest font-semibold block mb-3">
                // CONNECT PIPELINE
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase leading-none">
                Start the <span className="text-brand-red italic">Vortex</span> Conversation.
              </h2>
              <p className="mt-6 text-gray-400 text-sm sm:text-base leading-relaxed max-w-md">
                Have an ambitious vision or a complex system migration? Contact us to schedule an engineering sprint and align custom deliverables.
              </p>
            </div>

            {/* Direct coordinate labels */}
            <div className="space-y-6">
              <a 
                href="mailto:contact@vortexstudio.net" 
                className="flex items-center gap-4 p-4 rounded-xl bg-[#090909]/80 border border-white/5 hover:border-brand-red/30 transition-luxury group group"
                id="contact-email-link"
              >
                <div className="w-11 h-11 rounded-lg bg-white/5 flex items-center justify-center text-brand-red border border-white/10 group-hover:border-brand-red group-hover:bg-brand-red/10 transition-luxury shrink-0">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="font-mono text-[9px] text-gray-500 uppercase tracking-widest">TRANSACTION ENDPOINT</div>
                  <div className="text-sm font-bold text-gray-200 group-hover:text-white transition-luxury">contact@vortexstudio.net</div>
                </div>
              </a>

              <a 
                href="tel:+18005553000" 
                className="flex items-center gap-4 p-4 rounded-xl bg-[#090909]/80 border border-white/5 hover:border-brand-red/30 transition-luxury group group"
                id="contact-phone-link"
              >
                <div className="w-11 h-11 rounded-lg bg-white/5 flex items-center justify-center text-brand-red border border-white/10 group-hover:border-brand-red group-hover:bg-brand-red/10 transition-luxury shrink-0">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="font-mono text-[9px] text-gray-500 uppercase tracking-widest">VOICE SWITCHBOARD</div>
                  <div className="text-sm font-bold text-gray-200 group-hover:text-white transition-luxury">+1 (800) 555-3000</div>
                </div>
              </a>

              <div 
                className="flex items-center gap-4 p-4 rounded-xl bg-[#090909]/80 border border-white/5 hover:border-brand-red/30 transition-luxury group"
                id="contact-location-info"
              >
                <div className="w-11 h-11 rounded-lg bg-white/5 flex items-center justify-center text-brand-red border border-white/10 group-hover:border-brand-red group-hover:bg-brand-red/10 transition-luxury shrink-0">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="font-mono text-[9px] text-gray-500 uppercase tracking-widest">CREATIVE HQ</div>
                  <div className="text-sm font-bold text-gray-200">Suite 404, Tech District, USA</div>
                </div>
              </div>
            </div>

            {/* Integrity assurance label */}
            <div className="p-4 rounded-lg bg-brand-red/5 border border-brand-red/15 flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
              <div className="text-xs text-gray-400 font-mono">
                <span className="text-white font-bold block mb-1">SECURE CONDUIT ASSURED</span>
                We strictly protect all diagnostic secrets and design specifications. Client data tunnels are encrypted under active local retention schedules.
              </div>
            </div>
          </div>

          {/* Right Column: Contact form with realtime feedback */}
          <div className="lg:col-span-7 bg-[#090909]/90 border border-white/5 rounded-xl p-6 sm:p-8 relative" id="contact-form-card">
            
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form 
                  key="contact-form-node"
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                  noValidate
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block font-mono text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Your Identifier (Name) *</label>
                      <input
                        ref={nameInputRef}
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="e.g. Rachel Adams"
                        className={`w-full px-4 py-3 rounded-lg border text-sm bg-black/60 text-white focus:outline-none transition-luxury h-12 focus:ring-1 ${
                          touched.name && errors.name 
                            ? 'border-brand-red ring-brand-red/30 ring-1 focus:border-brand-red-hot bg-brand-red/5' 
                            : touched.name && !errors.name
                            ? 'border-green-500/50 focus:border-green-500/80 focus:ring-green-500/20'
                            : 'border-white/10 focus:border-brand-red focus:ring-brand-red/20'
                        }`}
                      />
                      {touched.name && errors.name && (
                        <div className="flex items-center gap-1.5 text-brand-red text-[11px] font-mono mt-1">
                          <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.name}</span>
                        </div>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block font-mono text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Electronic Endpoint (Email) *</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="rachel@domain.com"
                        className={`w-full px-4 py-3 rounded-lg border text-sm bg-black/60 text-white focus:outline-none transition-luxury h-12 focus:ring-1 ${
                          touched.email && errors.email 
                            ? 'border-brand-red ring-brand-red/30 ring-1 focus:border-brand-red-hot bg-brand-red/5' 
                            : touched.email && !errors.email
                            ? 'border-green-500/50 focus:border-green-500/80 focus:ring-green-500/20'
                            : 'border-white/10 focus:border-brand-red focus:ring-brand-red/20'
                        }`}
                      />
                      {touched.email && errors.email && (
                        <div className="flex items-center gap-1.5 text-brand-red text-[11px] font-mono mt-1">
                          <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Services Dropdown */}
                    <div className="space-y-2">
                      <label htmlFor="service" className="block font-mono text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Desired Agency Capability Core *</label>
                      <select
                        name="service"
                        id="service"
                        value={formData.service}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-3 rounded-lg border text-sm bg-black text-white focus:outline-none transition-luxury h-12 focus:ring-1 ${
                          touched.service && errors.service 
                            ? 'border-brand-red bg-brand-red/5 focus:border-brand-red' 
                            : 'border-white/10 focus:border-brand-red focus:ring-brand-red/20'
                        }`}
                      >
                        <option value="">-- Choose Category Track --</option>
                        <option value="web-dev">Custom Web Apps & Frontends</option>
                        <option value="ui-ux">Futuristic UI/UX Visual Designs</option>
                        <option value="ecommerce">Neo E-Commerce Catalog Systems</option>
                        <option value="speed-opt">Performance & SEO Enhancements</option>
                        <option value="ai-integrations">Cognitive AI Pipeline deployments</option>
                        <option value="brand-identity">High-Contrast Digital Branding</option>
                      </select>
                      {touched.service && errors.service && (
                        <div className="flex items-center gap-1.5 text-brand-red text-[11px] font-mono mt-1">
                          <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.service}</span>
                        </div>
                      )}
                    </div>

                    {/* Budget selectors */}
                    <div className="space-y-2">
                      <label htmlFor="budget" className="block font-mono text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Intended Budget Magnitude</label>
                      <select
                        name="budget"
                        id="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 rounded-lg border border-white/10 text-sm bg-black text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/20 transition-luxury h-12"
                      >
                        <option value="under-5k">Below $5,000 USD</option>
                        <option value="5k-10k">$5,000 to $10,000 USD</option>
                        <option value="10k-25k">$10,000 to $25,000 USD</option>
                        <option value="above-25k">Greater than $25,005 USD</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Specifications Field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block font-mono text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Vision Specifications & Context *</label>
                    <textarea
                      ref={messageInputRef}
                      name="message"
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Briefly state your vision goals or inject specifications output from the interactive estimate blueprint generator above..."
                      className={`w-full p-4 rounded-lg border text-sm bg-black/60 text-white focus:outline-none transition-luxury focus:ring-1 leading-relaxed ${
                        touched.message && errors.message 
                          ? 'border-brand-red ring-brand-red/30 ring-1 focus:border-brand-red-hot bg-brand-red/5' 
                          : touched.message && !errors.message
                          ? 'border-green-500/50 focus:border-green-500/80 focus:ring-green-500/20'
                          : 'border-white/10 focus:border-brand-red focus:ring-brand-red/20'
                      }`}
                    />
                    <div className="flex justify-between items-center text-[10px] font-mono mt-1">
                      {touched.message && errors.message ? (
                        <div className="flex items-center gap-1.5 text-brand-red">
                          <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.message}</span>
                        </div>
                      ) : (
                        <span className="text-gray-500">// Ensure specifications contain details.</span>
                      )}
                      <span className={`${formData.message.trim().length >= 15 ? 'text-green-500' : 'text-gray-500'}`}>
                        {formData.message.trim().length} chars
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-brand-red hover:bg-brand-red-hot text-black hover:text-black font-mono font-bold text-sm uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 cursor-pointer active:scale-97 transition-luxury shadow-[0_0_20px_rgba(255,30,39,0.2)] disabled:opacity-50"
                    id="submit-contact"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-black border-t-transparent animate-spin" />
                        Validating Payload Security Enclave...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Dispatch Proposal Request
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                /* Success screen layout on submit feedback */
                <motion.div 
                  key="contact-success-node"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-16 space-y-6 flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-500 mb-2">
                    <CheckCircle className="w-8 h-8 animate-pulse" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                    PAYLOAD ROUTED SUCCESSFULLY
                  </h3>
                  <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed font-sans">
                    Your agency proposal blueprint has been captured by the Vortex pipeline. An engineering lead has been alerted and will establish a response coordinate within 12 standard business hours.
                  </p>
                  
                  {/* Telemetry metadata block for added custom agency polish */}
                  <div className="p-4 rounded bg-[#101010] border border-green-500/20 font-mono text-[10px] text-green-400 space-y-1.5 text-left max-w-sm">
                    <div>[API TRANSMISSION TELEMETRY ROUTE]</div>
                    <div>- STATUS: 202 ACCEPTED (ASYNC_ALERT)</div>
                    <div>- ENCRYPTION_STREAM: AE_GCM_256</div>
                    <div>- BROADCAST_TIME: {new Date().toLocaleTimeString()}</div>
                    <div>- ADVISER_TICKET_HASH: #{Math.floor(100000 + Math.random() * 900000)}</div>
                  </div>

                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="px-6 py-2.5 rounded bg-white/5 border border-white/10 hover:border-brand-red text-xs font-mono text-gray-300 hover:text-white uppercase tracking-wider cursor-pointer transition-luxury active:scale-95"
                    id="success-dismiss"
                  >
                    Reset Channel State
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}
