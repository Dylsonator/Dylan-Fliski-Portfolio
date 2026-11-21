/**
 * Central catalogue for optional website work and recurring care.
 * Prices are introductory indicative ranges, not automatic quotations.
 * The four original fixed-scope website packages stay in data.ts.
 */
export type ExtraServiceId =
  | 'speed-optimisation'
  | 'local-seo'
  | 'google-business-profile'
  | 'contact-forms'
  | 'galleries'
  | 'booking-systems';

export type ExtraService = {
  id: ExtraServiceId;
  name: string;
  description: string;
  minGBP: number;
  maxGBP: number;
  scope: string;
  included: readonly string[];
  excluded: readonly string[];
  suitableFor: readonly string[];
  note?: string;
  seoDescription: string;
};

export const extraServices: readonly ExtraService[] = [
  {
    id: 'speed-optimisation',
    name: 'Website Speed Optimisation',
    description: 'Help your website load more efficiently and feel smoother to use.',
    minGBP: 49,
    maxGBP: 99,
    scope: 'One to three agreed pages, depending on complexity and platform.',
    included: [
      'Initial page-speed assessment',
      'Review of Google PageSpeed Insights and Lighthouse findings',
      'Image optimisation where practical',
      'Review of unnecessary scripts and page assets',
      'Basic CSS and JavaScript loading improvements where supported',
      'Mobile performance improvements where feasible',
      'Before-and-after measurements using comparable test conditions',
      'Short written summary of work completed',
    ],
    excluded: [
      'Full website rebuilds', 'Server migrations or hosting upgrades',
      'Replacement of complex third-party plugins', 'Extensive application refactoring',
      'Paid optimisation tools and subscriptions',
    ],
    suitableFor: ['Image-heavy service websites', 'Slow mobile landing pages', 'Sites with excessive scripts'],
    note: 'Measured results depend on the original site and hosting. No particular Lighthouse score or loading-time improvement is guaranteed.',
    seoDescription: 'Practical page-speed assessments, images and frontend improvements for small-business websites. Indicative introductory price £49–£99.',
  },
  {
    id: 'local-seo',
    name: 'Local SEO Setup',
    description: 'Make your services and local coverage clearer to search engines.',
    minGBP: 59,
    maxGBP: 119,
    scope: 'Up to five agreed pages depending on the chosen quotation.',
    included: [
      'Basic website SEO audit', 'Review and improvements to titles and meta descriptions',
      'Heading structure and internal-link improvements',
      'Relevant local service and location keyword research',
      'Image alternative text where appropriate',
      'Basic structured data where justified',
      'Sitemap and indexing checks', 'Google Search Console help where access is available',
      'Short written recommendations',
    ],
    excluded: [
      'Guaranteed search rankings, traffic or sales', 'Paid ads or backlink campaigns',
      'Long-form content writing', 'Ongoing SEO management',
      'Manipulative or spam-based SEO tactics',
    ],
    suitableFor: ['Tradespeople and local services', 'Businesses covering several towns', 'Sites missing basic SEO information'],
    note: 'SEO setup does not guarantee improved rankings, visitors or enquiries.',
    seoDescription: 'Local SEO setup for small businesses in Cheltenham, Gloucester and Tewkesbury. Titles, headings, indexing and on-page improvements from £59–£119.',
  },
  {
    id: 'google-business-profile',
    name: 'Google Business Profile Assistance',
    description: 'Help customers find accurate business information on Google Search and Maps.',
    minGBP: 39,
    maxGBP: 69,
    scope: 'One eligible business profile for one location or service-area business.',
    included: [
      'Review an existing profile or assist with eligible initial setup',
      'Recommendations for business categories and description',
      'Review of opening hours and contact details',
      'Service-area configuration',
      'Guidance on genuine business photographs',
      'Website and contact link review',
      'Basic profile improvement recommendations',
    ],
    excluded: [
      'Google account or profile ownership', 'Guaranteed verification or Maps placement',
      'Search ranking guarantees', 'Fake reviews or review manipulation',
      'Google Ads and ongoing profile management',
    ],
    suitableFor: ['Local garages', 'Cleaning and landscaping companies', 'Shops with a genuine public-facing location'],
    note: 'A Google Business Profile is free. The fee is for my setup assistance. You retain ownership and control; I never need your password.',
    seoDescription: 'Help setting up or improving an eligible Google Business Profile. One-business introductory assistance from £39–£69; Google provides the profile for free.',
  },
  {
    id: 'contact-forms',
    name: 'Contact Form Upgrades',
    description: 'Make it easier for customers to send a clear enquiry from any device.',
    minGBP: 29,
    maxGBP: 59,
    scope: 'One existing contact form, where the website and hosting support changes.',
    included: [
      'Review and improve the form layout',
      'Clear labels, input validation and mobile usability',
      'Useful success and error feedback',
      'Email notification configuration where supported',
      'Basic spam-prevention measures',
      'Submission testing and privacy notice/link review',
    ],
    excluded: [
      'Full customer relationship management systems', 'Complex lead scoring or automation',
      'Payments and customer account systems', 'SMS gateway fees',
      'Paid form services and subscriptions',
    ],
    suitableFor: ['Enquiry forms on service websites', 'Unreliable mobile forms', 'Sites missing confirmation messages'],
    note: 'Delivery must be configured and tested on the client website before any upgraded form is described as operational.',
    seoDescription: 'Contact form layout, validation, mobile improvements and delivery testing for business websites. Introductory estimates £29–£59.',
  },
  {
    id: 'galleries',
    name: 'Portfolio & Gallery Improvements',
    description: 'Show your completed work with a cleaner, easier-to-browse gallery.',
    minGBP: 39,
    maxGBP: 79,
    scope: 'Up to 12 client-supplied photographs in the agreed introductory scope.',
    included: [
      'Improved gallery layout and responsive image display',
      'Basic image optimisation',
      'Image enlargement or lightbox where appropriate',
      'Useful project descriptions and captions',
      'Before-and-after comparisons using supplied images',
      'Links to relevant services and enquiry pages',
    ],
    excluded: [
      'Professional photography and paid stock photos', 'Advanced video production',
      'Large-scale editing and complex custom gallery applications',
      'Hundreds of image or product uploads',
    ],
    suitableFor: ['Landscapers showing past jobs', 'Tradespeople with before-and-after photos', 'Independent makers and service businesses'],
    note: 'You must own or have permission to use the images. Third-party watermarks and copyright notices are not removed without authorisation.',
    seoDescription: 'Responsive galleries, image optimisation and simple before-and-after layouts for local businesses. Indicative introductory price £39–£79.',
  },
  {
    id: 'booking-systems',
    name: 'Booking System Integration',
    description: 'Let customers request appointments using a suitable existing booking service.',
    minGBP: 79,
    maxGBP: 149,
    scope: 'Basic setup and integration with one compatible third-party booking provider.',
    included: [
      'Review of the basic booking requirements',
      'Recommendation of an established, suitable provider',
      'Supported booking link, embed or API integration where appropriate',
      'Mobile-friendly placement',
      'Basic appointment and service configuration',
      'Customer-facing booking instructions',
      'Confirmation-flow testing',
      'Short handover guide',
    ],
    excluded: [
      'Building a booking platform from scratch', 'Custom payment processing',
      'Complex staff scheduling or enterprise multi-location features',
      'Advanced calendar integrations', 'Third-party subscriptions',
      'Ongoing booking administration',
    ],
    suitableFor: ['Salons and hairdressers', 'Garages and cleaners', 'Consultants and tutors'],
    note: 'You own the booking-provider account. Provider features and any special privacy/security requirements are checked before integration.',
    seoDescription: 'Integrate a supported booking provider into your small-business website. Practical introductory setup estimates £79–£149.',
  },
];

export type CarePlanId = 'essential-care' | 'business-care' | 'priority-care';
export type CarePlan = {
  id: CarePlanId;
  name: string;
  monthlyGBP: number;
  description: string;
  included: readonly string[];
  notes: readonly string[];
};

export const carePlans: readonly CarePlan[] = [
  {
    id: 'essential-care',
    name: 'Essential Care',
    monthlyGBP: 15,
    description: 'Monthly checks to help you spot problems before they go unnoticed.',
    included: [
      'Monthly website health check',
      'Uptime monitoring setup where supported',
      'Contact form and link checks',
      'Applicable software and security update checks',
      'Email reporting of identified issues',
    ],
    notes: ['Fixes and content edits quoted separately.', 'Hosting and domain fees are not included.'],
  },
  {
    id: 'business-care',
    name: 'Business Care',
    monthlyGBP: 29,
    description: 'Routine checks plus a small monthly allowance for keeping your site current.',
    included: [
      'Everything in Essential Care',
      'Up to 30 minutes of small edits each month (text, images, hours, services)',
      'Basic broken-link fixes within the time allowance',
      'Monthly backup check where the platform supports it',
      'Priority over non-plan change requests where available',
    ],
    notes: ['Unused minutes do not roll over.', 'Larger fixes are quoted separately.'],
  },
  {
    id: 'priority-care',
    name: 'Priority Care',
    monthlyGBP: 49,
    description: 'More time for small changes and priority handling of urgent website issues.',
    included: [
      'Everything in Business Care',
      'Up to 60 minutes total of edits or minor fixes each month',
      'Priority handling for urgent issues',
      'Best-efforts emergency assistance when available',
      'Monthly performance review',
      'Basic SEO health checks and suggestions',
    ],
    notes: ['No 24/7 coverage or guaranteed response/repair times.', 'Larger work is quoted separately.'],
  },
];

export const introEstimateDisclaimer =
  'Prices are introductory estimates for straightforward projects. Final quotations depend on your existing website, required changes and technical complexity. Hosting, subscriptions and paid third-party tools are charged separately where applicable.';

export const quotePath = (id: string) => `/web/contact?service=${encodeURIComponent(id)}`;
