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
};

/**
 * Empty by design: outreach is not evidence of completed client work.
 * Client entries only become visible with clientPermission: true and status: 'Completed'.
 * You can add your own real self-initiated web work with type: 'Personal'.
 */
export const webProjects: WebProject[] = [];

export const publishedWebProjects = webProjects.filter(
  project => project.type === 'Personal' ||
    (project.type === 'Client' && project.clientPermission === true && project.status === 'Completed'),
);
