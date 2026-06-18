export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  gradient: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'ecommerce' | 'saas' | 'webapp' | 'branding';
  image: string;
  description: string;
  longDescription: string;
  technologies: string[];
  client: string;
  duration: string;
  impact: string;
}

export interface ContactFormInput {
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  budget?: string;
  message?: string;
}

export interface EstimatorOptions {
  projectType: 'landing' | 'ecommerce' | 'saas' | 'portal';
  pagesCount: number;
  hasAnimations: boolean;
  hasCMS: boolean;
  hasAuth: boolean;
  deliveryTimeline: 'standard' | 'rush' | 'relaxed';
}
