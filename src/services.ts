/**
 * Freelance services and external profile destinations.
 * Edit this file when you add/remove offerings or receive your profile URLs.
 * Set profile.url to a real HTTPS URL to activate its button.
 */
export type ServiceIcon = 'website' | 'game' | 'testing';

export type FreelanceService = {
  id: string;
  title: string;
  icon: ServiceIcon;
  description: string;
  highlights: string[];
};

export const freelanceServices: FreelanceService[] = [
  {
    id: 'websites',
    title: 'Website Development',
    icon: 'website',
    description: 'Responsive, well-built websites and frontends, whether you are starting fresh or improving an existing site.',
    highlights: [
      'Custom responsive websites',
      'Personal portfolios and landing pages',
      'React, TypeScript, JavaScript, HTML and CSS',
      'Website improvements, maintenance and bug fixes',
      'Interactive elements and animations'
    ]
  },
  {
    id: 'games',
    title: 'Game Development',
    icon: 'game',
    description: 'Gameplay systems, prototypes and practical development support for Unreal Engine and Unity projects.',
    highlights: [
      'Unreal Engine 5 — C++ and Blueprints',
      'Unity development using C#',
      'Gameplay mechanics, systems and prototypes',
      'Improvements to existing gameplay systems',
      'Debugging, optimisation and bug fixes',
      'Game UI and interactive features'
    ]
  },
  {
    id: 'testing',
    title: 'Testing & Debugging',
    icon: 'testing',
    description: 'A fresh set of eyes on your project, with reproducible issues and clear, useful feedback.',
    highlights: [
      'Website functionality testing',
      'Game testing and QA',
      'Bug identification and reproduction',
      'Clear, detailed bug reports',
      'Desktop and mobile responsiveness checks',
      'Fix verification and usability feedback'
    ]
  }
];

export type FreelanceProfile = {
  name: 'Upwork' | 'Fiverr';
  url: string | null;
  description: string;
};

export const freelanceProfiles: FreelanceProfile[] = [
  {
    name: 'Upwork',
    url: 'https://www.upwork.com/services/product/development-it-a-modern-responsive-portfolio-website-tailored-to-your-needs-2111189356567039620?ref=project_share',
    description: 'View my portfolio website service'
  },
  {
    name: 'Fiverr',
    url: null,
    description: 'Public gig links coming soon'
  }
];
