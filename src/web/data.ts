/**
 * All web-business offerings and approved web case studies live here.
 * Keep client projects unpublished until permission has been received.
 */

export type WebsitePackage = {
  id: string;
  name: string;
  priceGBP: number;
  description: string;
  deliverables: readonly string[];
  revisions: string;
  featured?: boolean;
};

export const websitePackages: readonly WebsitePackage[] = [
  {
    id: 'refresh',
    name: 'Website Refresh',
    priceGBP: 79,
    description: 'Give one existing page some much-needed attention.',
    deliverables: [
      'Improvements to one existing webpage',
      'Layout and presentation adjustments',
      'Mobile usability improvements',
      'Clearer contact options',
    ],
    revisions: 'One revision',
  },
  {
    id: 'starter',
    name: 'Starter Website',
    priceGBP: 149,
    description: 'A straightforward one-page home for your business.',
    deliverables: [
      'One responsive webpage',
      'Business and service information',
      'Contact options',
      'Basic on-page SEO',
    ],
    revisions: 'One revision',
  },
  {
    id: 'small-business',
    name: 'Small Business Website',
    priceGBP: 249,
    description: 'A little more space for your services and your story.',
    deliverables: [
      'Three responsive pages',
      'Services, business information and contact',
      'Basic on-page SEO',
      'Mobile-friendly layout throughout',
    ],
    revisions: 'Two revision rounds',
    featured: true,
  },
  {
    id: 'complete',
    name: 'Complete Business Website',
    priceGBP: 349,
    description: 'A fuller five-page site for an established small business.',
    deliverables: [
      'Five responsive pages',
      'Services and business information',
      'Gallery or portfolio and contact',
      'Basic on-page SEO',
    ],
    revisions: 'Two revision rounds',
  },
];

export type WebProject = {
  slug: string;
  title: string;
  summary: string;
  sector: string;
  type: 'Client' | 'Personal';
  clientPermission?: boolean;
  status: 'Completed' | 'In Development';
  tech: string[];
  coverImage?: string;
  beforeImage?: string;
  afterImage?: string;
  description: string[];
  publishedUrl?: string;
  /** Public code repository when authorised to share (optional). */
  sourceUrl?: string;
};

/**
 * Two genuine, self-initiated portfolio experiences in ONE shared codebase.
 * These are not paid client commissions or two unrelated website builds.
 * Client entries remain hidden until permission and completion are confirmed.
 */
export const webProjects: WebProject[] = [
  {
    slug: 'games-programming-portfolio',
    title: 'Games Programming Portfolio',
    summary: 'A responsive portfolio for my games and software projects, with a searchable project archive, technical case studies and links to playable releases.',
    sector: 'Personal Portfolio Website',
    type: 'Personal',
    status: 'Completed',
    tech: ['React', 'TypeScript', 'Vite', 'CSS', 'React Router'],
    publishedUrl: 'https://dylanfliski.com/',
    sourceUrl: 'https://github.com/Dylsonator/Dylan-Fliski-Portfolio',
    description: [
      'I built the Games Programming section of my own website to present released games, technical experiments and software projects in one navigable portfolio.',
      'The site includes a searchable and filterable project archive, individual case-study routes, project imagery, technical breakdowns and links to public demos or repositories where available.',
      'The dark visual design uses red accents to give this portfolio a distinct identity, with responsive layouts, accessible navigation and reduced-motion support.',
      'It is one part of the same React, TypeScript and Vite application as my Web Development portfolio. Both sections share a codebase but have different presentation and navigation.',
    ],
  },
  {
    slug: 'web-development-portfolio',
    title: 'Web Development Services Portfolio',
    summary: 'This responsive web-development website, with clear website packages, service details, maintenance options and a practical enquiry route.',
    sector: 'Freelance Services Website',
    type: 'Personal',
    status: 'Completed',
    tech: ['React', 'TypeScript', 'Vite', 'CSS', 'React Router'],
    publishedUrl: 'https://dylanfliski.com/web',
    sourceUrl: 'https://github.com/Dylsonator/Dylan-Fliski-Portfolio',
    description: [
      'I designed and built this Web Development section of my own website to explain the services I offer and let prospective customers explore them before making contact.',
      'It presents four website packages, six optional improvements and three monthly care plans, with individual service details and clearly stated scope and exclusions.',
      'A separate green-and-cream design, responsive layouts and route-specific metadata distinguish this section from the Games Programming portfolio while keeping the same underlying website.',
      'The contact experience supports service-specific enquiries. The hosted form remains disabled until delivery is verified, with a working direct-email alternative in the meantime. Both portfolio sections share the same public source repository.',
    ],
  },
];

export const publishedWebProjects = webProjects.filter(
  project => project.type === 'Personal' ||
    (project.type === 'Client' && project.clientPermission === true && project.status === 'Completed'),
);
