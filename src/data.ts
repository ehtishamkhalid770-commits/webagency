import { Service, Project } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Custom Web Apps',
    description: 'Bespoke, blazingly fast full-stack applications tailored to solve complex business operations with beautiful responsive execution.',
    iconName: 'CodeXml',
    features: ['Next.js & React Architectures', 'Edge-rendered microservices', 'Real-time database sync', 'Scalable serverless backends'],
    gradient: 'from-red-600 to-black',
  },
  {
    id: 'ui-ux',
    title: 'Futuristic UI/UX Design',
    description: 'Immersive, hyper-interactive visual prototypes and systems built with high-fidelity animations, extreme negative space, and modern layouts.',
    iconName: 'Layers',
    features: ['High-fidelity interactive visual maps', 'Component design system creation', 'Prototyping & user micro-interaction', 'Contrast & accessibility certification'],
    gradient: 'from-amber-600 to-red-600',
  },
  {
    id: 'ecommerce',
    title: 'Neo E-Commerce',
    description: 'Transform buying into an immersive sensory adventure with customized filters, rapid instant-checkout pipelines, and responsive carts.',
    iconName: 'ShoppingBag',
    features: ['Stripes & PayPal payment gateways', 'Blazing-fast page load optimizations', 'Rich catalog filtering engines', 'Fully integrated CRM tracking tools'],
    gradient: 'from-red-700 to-rose-950',
  },
  {
    id: 'speed-opt',
    title: 'Performance & SEO Engineering',
    description: 'Lifting speed ratios to reach absolute 100% Core Web Vitals rankings, accelerating system interactions for optimal user retention.',
    iconName: 'Zap',
    features: ['Ultra-responsive visual assets scaling', 'Durable modern CDN distribution caching', 'Structured schema rich results injection', 'Zero redundancy styles purging'],
    gradient: 'from-black via-red-900 to-red-600',
  },
  {
    id: 'ai-integrations',
    title: 'Cognitive AI Pipelines',
    description: 'Integrate advanced generative models, automated custom chatbots, semantic data-routing, and smart search into your system.',
    iconName: 'Cpu',
    features: ['Gemini LLM model alignment', 'Semantic search & autocomplete engines', 'Automatic media transcription & tagging', 'Custom workflow decision trees'],
    gradient: 'from-rose-550 via-red-700 to-black',
  },
  {
    id: 'brand-identity',
    title: 'Digital Branding Systems',
    description: 'Establish absolute aesthetic authority with high-contrast visual standards, custom vector assets, motion guidelines, and interactive rules.',
    iconName: 'Sparkles',
    features: ['Futuristic vector logo files', 'Cohesive chromatic guidelines', 'Custom display typeface selection', 'Fully animated brand launch videos'],
    gradient: 'from-red-500 to-stone-900',
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'neo-commerce',
    title: 'Neo-Commerce Platform',
    category: 'ecommerce',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    description: 'A futuristic digital marketplace featuring robust catalog exploration, seamless checkout steps, and full currency conversions.',
    longDescription: 'Neo-Commerce is a leading-edge virtual marketplace designed to process thousands of simultaneous cart additions with zero latency. It implements progressive image decoders, optimized CSS state systems, and intelligent micro-interaction layers to make online purchasing a truly fluid experience.',
    technologies: ['React', 'Tailwind v4', 'Vite', 'Lucide Icons', 'Motion Animations'],
    client: 'NeoCorp Retail Solutions',
    duration: '10 Weeks',
    impact: 'Elevated checkout speed indexes by 47% and increased user duration average'
  },
  {
    id: 'nova-analytics',
    title: 'Nova Dashboard SaaS',
    category: 'saas',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    description: 'High-speed metrics analyzer that organizes multi-channel data telemetry feeds into real-time interactive charting widgets.',
    longDescription: 'Nova Analytics processes over 15 distinct API data feeds, organizing compound telemetry elements into an elegant, custom dark-themed dashboard. Integrated with rapid data caching layers, customizable responsive grids, and detailed analytical filtering panels for instant metric rendering.',
    technologies: ['D3.JS', 'React', 'Motion', 'Tailwind', 'WebSockets'],
    client: 'Nova Core Technology Group',
    duration: '12 Weeks',
    impact: 'Aggregated 15 million active metric telemetry records into live single-viewport dashboards'
  },
  {
    id: 'hyperion-portal',
    title: 'Hyperion Client Portal',
    category: 'webapp',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    description: 'A high-end modern client workstation with fully encrypted drag-and-drop document vaults and immediate event triggers.',
    longDescription: 'Hyperion delivers advanced workspaces for secure documents collaboration. Built with local cryptographical sandboxes, responsive real-time notifications via dynamic alert brokers, and fully responsive layout tables that scale smoothly from phones to wide-view screens.',
    technologies: ['React v19', 'Crypto Sandbox', 'Tailwind CSS', 'Vite Server'],
    client: 'Hyperion Wealth Advisors',
    duration: '8 Weeks',
    impact: 'Replaced traditional legacy emailing systems with secure encrypted uploads used by 12,000 active clients'
  },
  {
    id: 'spectra-branding',
    title: 'Spectra Visual System',
    category: 'branding',
    image: 'https://images.unsplash.com/photo-1541462608141-27b2c0cd1a76?auto=format&fit=crop&w=800&q=80',
    description: 'Brand transformation including custom typographical pairs, interactive brand guidelines, and high-contrast motion assets.',
    longDescription: 'Spectra Cyber-security required an authoritative visual aesthetic that represented safety, high-precision engineering, and high-performance. We conceptualized their entire core design language, developing geometric vector guidelines, automated interactive brand cards, and structured web stylesheets.',
    technologies: ['Brand Design', 'Figma Systems', 'SVG Masterclass', 'Lottie Vectors'],
    client: 'Spectra Cyber Shield Ltd',
    duration: '6 Weeks',
    impact: 'Increased web interactions count by 140% after launching customized striking red themes'
  },
  {
    id: 'veloce-academy',
    title: 'Veloce Dynamic Academy',
    category: 'webapp',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    description: 'Dynamic academic academy with customizable learning maps, responsive video playback, and beautiful interactive score metrics.',
    longDescription: 'Veloce Academy reinvents remote education. It tracks user progress states locally, presenting multi-step skill trees with bespoke SVG paths that animate as lessons are mastered, complemented by flawless responsive grids tailored for tablets.',
    technologies: ['React 19', 'Zustand State', 'Tailwind Grid', 'HTML5 Media Services'],
    client: 'Veloce Edu-Group Global',
    duration: '14 Weeks',
    impact: 'Graduated 85,000 global digital creators with an active completion score increase of 65%'
  },
  {
    id: 'apex-crm',
    title: 'Apex Dashboard CRM',
    category: 'saas',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    description: 'Command center managing modern leads tracking, interactive kanban streams, and dynamic notification widgets.',
    longDescription: 'The Apex CRM consolidates complex customer pipelines into slick visual records. Features beautiful drag-and-drop mechanics for card movements, contextual menu helpers, rapid inline client file notes editing, and automated weekly action item reports.',
    technologies: ['React SPA', 'Tailwind Grid', 'Motion Core', 'Kanban API'],
    client: 'Apex Enterprise Consulting',
    duration: '16 Weeks',
    impact: 'Automated 12 core workflow milestones, scaling administrative efficiency by 225%'
  }
];

export const AGENCY_STATS = [
  { value: '150+', label: 'Digital Products Launched' },
  { value: '99.8%', label: 'Core Vitals Performance Rank' },
  { value: '35+', label: 'Design Awards & Recognitions' },
  { value: '24/7', label: 'Dedicated Pipeline Support' }
];

export const TESTIMONIALS = [
  {
    quote: "Redline Agency completely transformed our customer experience. Their technical mastery and striking red & black design language elevated our corporate look. Our signup conversions surged immediately after the redesign.",
    author: "Elena Rostov",
    role: "VP of Product, Nova Systems",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    quote: "Working with them was an absolute breeze. They delivered a hyper-functional portal using cutting-edge animations and a clean responsive layout that scales flawlessly across our executive tablet screens.",
    author: "David Vance",
    role: "CEO, Hyperion Advisory",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    quote: "They don't just write code; they build digital immersive masterpieces. Their commitment to clean typography, accessibility standards, and lighting-fast serverless speeds set them far apart.",
    author: "Maya Lin",
    role: "Creative Director, Spectra Security",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

export const FAQS = [
  {
    question: "What is your main development framework stack?",
    answer: "We specialize in modern frontend stacks centered on React 19, TypeScript, and Vite, with optimized CSS systems like Tailwind. For server elements, we utilize modern serverless infrastructures, edge routing, and Node architectures depending on exact transaction size and security parameters."
  },
  {
    question: "Do you design everything from scratch, or use templates?",
    answer: "Absolutely everything is custom designed from scratch. We do not use cookie-cutter templates. Every layout, color palette, graphic spacing, and micro-animation is specifically designed to fit your unique brand archetype and optimize business conversations."
  },
  {
    question: "How do you handle SEO and load times?",
    answer: "Performance is engineered directly into our core process. We implement precise responsive image scales, lazy-load systems, optimal bundle segmentation, static and edge CDN caching, and strictly structured rich schemas to ensure your Google PageSpeed scores hit the 95-100% bracket."
  },
  {
    question: "What is your average timeline for a modern web application?",
    answer: "For standard marketing/agency landing configurations and brand revamps, timelines typically span 4 to 8 weeks. Highly interactive SaaS portals, custom CRM dashboards, and integrated e-commerce solutions generally scale to 10 to 16 weeks from wireframing to full validation."
  }
];
