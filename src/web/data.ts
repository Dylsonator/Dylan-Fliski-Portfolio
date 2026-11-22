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
  /** Real captures of this website, with an implementation walkthrough. */
  walkthrough?: {
    image: string;
    alt: string;
    title: string;
    what: string;
    why: string;
    how: string;
  }[];
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
    coverImage: '/images/portfolio/captures/games-home.jpg',
    walkthrough: [
      {
        image: '/images/portfolio/captures/games-home.jpg',
        alt: 'Actual Games Programming homepage with a dark red design, introduction and featured The Last Service project.',
        title: 'Homepage and featured project',
        what: 'The homepage introduces me as a Games Programming graduate and places a genuine featured project beside my introduction, with direct routes to the project archive and background.',
        why: 'It gives recruiters and collaborators an immediate sense of my specialism, then points them towards completed work rather than leaving them with just a skills list.',
        how: 'I built the landing view as React components with a responsive CSS Grid layout. A state-driven featured-project carousel reads from the approved project data and uses React Router links for navigation.',
      },
      {
        image: '/images/portfolio/captures/games-projects.jpg',
        alt: 'Actual Games Programming project archive showing search, status filters, personal or client-work filters and project cards.',
        title: 'Searchable project archive',
        what: 'A searchable gallery of games, simulations and programming tools, with filters for project status and whether work is personal or client-related.',
        why: 'Visitors can quickly find the projects or technologies that matter to them without reading every project page. Only client work cleared for publication appears.',
        how: 'React useState holds the search term and selected filters. The project array is filtered by title, summary, technologies, status and origin, then rendered through reusable cards styled with responsive CSS.',
      },
      {
        image: '/images/portfolio/captures/games-case-study.jpg',
        alt: 'Actual The Last Service case-study page showing the project overview and genuine in-game bus-stop screenshot.',
        title: 'Detailed technical case studies',
        what: 'Individual pages present a project summary, development details, technical stack, status, original screenshots and relevant links. This example features The Last Service.',
        why: 'A short card cannot explain how a game was built. These pages give potential employers evidence of shipped work and the programming decisions behind it.',
        how: 'React Router resolves each project slug and reads its content from a typed project catalogue. Reusable detail components present text, technology tags and approved media without inventing outcomes.',
      },
    ],
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
    coverImage: '/images/portfolio/captures/web-home.jpg',
    walkthrough: [
      {
        image: '/images/portfolio/captures/web-home.jpg',
        alt: 'Actual Web Development homepage with cream and green styling, small-business website headline, quote action and responsive-site illustration.',
        title: 'Service-focused homepage',
        what: 'The landing page explains my website-development offer, gives an indication of who it is for and provides direct routes to pricing and enquiries.',
        why: 'Small-business visitors need to understand the service and next step quickly, rather than navigate a technical programmer résumé or a vague agency-style pitch.',
        how: 'I created a separate React layout for the web business, with its own cream-and-green CSS design system, responsive grid, decorative desktop-and-phone illustration and React Router calls to action.',
      },
      {
        image: '/images/portfolio/captures/web-services.jpg',
        alt: 'Actual Web Development pricing page showing four responsive website package cards, prices, included work and exclusions.',
        title: 'Transparent packages and pricing',
        what: 'Four introductory website packages show their prices, deliverables and revision allowances, with a separate explanation of exclusions and actions to enquire about each option.',
        why: 'Clear comparisons help a prospective customer choose a sensible scope and understand what is not included before contacting me.',
        how: 'The cards are rendered from a typed packages array rather than individually hard-coded. CSS Grid adapts the layout across screen sizes, and each enquiry link carries the selected package into the contact flow.',
      },
      {
        image: '/images/portfolio/captures/web-contact.jpg',
        alt: 'Actual Web Development contact page showing the enquiry area, Cheltenham contact information and a direct-email fallback while the hosted form is not enabled.',
        title: 'Contact and enquiry journey',
        what: 'The contact page explains how to start a project conversation and offers a direct email action while the hosted form is still being verified.',
        why: 'A potential customer should never be directed to a form that appears functional but cannot deliver their message. The alternative keeps the contact route usable.',
        how: 'React reads the selected service from the URL, validates it against known options and prepares a subject-specific mailto link. The separate Netlify form is gated until its delivery and spam controls are tested.',
      },
    ],
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
