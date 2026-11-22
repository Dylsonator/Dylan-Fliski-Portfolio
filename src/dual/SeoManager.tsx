import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { projects } from '../projects';
import { publishedWebProjects, websitePackages } from '../web/data';
import { extraServices } from '../web/offerings';

const SITE = 'https://dylanfliski.com';
const DEFAULT_OG = `${SITE}/images/dylan-full-logo.png`;

type PageMeta = { title: string; description: string; image?: string; type?: string };

const META: Record<string, PageMeta> = {
  '/': {
    title: 'Dylan Fliski | Games Programmer',
    description: 'Dylan Fliski’s Games Programming portfolio, featuring released games, AI simulations and technical projects made with Unreal Engine, Unity, C++ and C#.',
  },
  '/games': {
    title: 'Games Programmer | Dylan Fliski',
    description: 'Dylan Fliski’s games programming portfolio: gameplay systems, game AI, Unreal Engine, Unity, C++, C# and published projects.',
  },
  '/games/projects': {
    title: 'Game Projects | Dylan Fliski',
    description: 'Browse game programming projects, AI simulations, technical tools, released games and prototypes by Dylan Fliski.',
  },
  '/games/about': {
    title: 'About Dylan | Games Programming',
    description: 'Learn about Dylan Fliski’s Games Programming degree, Unreal Engine and Unity work, technical skills and game projects.',
  },
  '/games/contact': {
    title: 'Contact Dylan | Game Development',
    description: 'Get in touch with Dylan Fliski about games programming, Unreal Engine, Unity, projects and opportunities.',
  },
  '/web': {
    title: 'Affordable Web Developer Cheltenham | Dylan Fliski',
    description: 'Modern, responsive websites for local businesses in Cheltenham, Gloucester and Tewkesbury. Independent developer with clear introductory prices.',
  },
  '/web/services': {
    title: 'Web Design Prices & Packages | Dylan Fliski Cheltenham',
    description: 'Introductory website packages from £79 to £349, from single-page refreshes to five-page business websites. Clear scope and straightforward pricing.',
  },
  '/web/maintenance': {
    title: 'Monthly Website Care Plans | Dylan Fliski Cheltenham',
    description: 'Clear monthly website maintenance and small editing allowances: Essential £15, Business £29 and Priority £49 per month. No unlimited support.',
  },
  '/web/projects': {
    title: 'Web Development Work | Dylan Fliski',
    description: 'Explore two real portfolio websites built by Dylan Fliski: a Games Programming portfolio and a Web Development services site, with live demos, screenshots and project breakdowns.',
  },
  '/web/about': {
    title: 'About Your Web Developer | Dylan Fliski Cheltenham',
    description: 'Meet Dylan, an independent Cheltenham-based web developer building responsive websites with React, TypeScript, JavaScript, HTML and CSS.',
  },
  '/web/contact': {
    title: 'Get a Free Website Quote | Dylan Fliski',
    description: 'Tell Dylan about your business website project, package, budget and requirements. Serving Cheltenham, Gloucester, Tewkesbury and nearby.',
  },
  '/web/privacy': {
    title: 'Enquiry Privacy Information | Dylan Fliski',
    description: 'How enquiry details are used and handled when contacting Dylan Fliski about web-development services.',
  },
};

function setMeta(selector: string, create: () => HTMLMetaElement, content: string) {
  let node = document.head.querySelector<HTMLMetaElement>(selector);
  if (!node) { node = create(); document.head.appendChild(node); }
  node.setAttribute('content', content);
}

/** Minimal route metadata for this existing Vite SPA. No SEO ranking claims. */
export function SeoManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    const normalised = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
    let meta = META[normalised];
    if (normalised.startsWith('/games/projects/')) {
      const project = projects.find(p => p.slug === normalised.split('/').pop() && (p.workType !== 'Client' || p.clientApproved === true));
      if (project) meta = { title: `${project.title} | Dylan Fliski Games`, description: project.summary, image: project.image ?? undefined, type: 'article' };
    }
    if (normalised.startsWith('/web/services/')) {
      const service = extraServices.find(item => item.id === normalised.split('/').pop());
      if (service) meta = { title: `${service.name} | Dylan Fliski Web`, description: service.seoDescription };
    }
    if (normalised.startsWith('/web/projects/')) {
      const project = publishedWebProjects.find(p => p.slug === normalised.split('/').pop());
      if (project) meta = { title: `${project.title} | Dylan Fliski Web`, description: project.summary, image: project.coverImage, type: 'article' };
    }
    meta ||= { title: 'Page Not Found | Dylan Fliski', description: 'Explore the games programming and web development portfolios of Dylan Fliski.' };
    // Root and /games both show the game homepage; avoid duplicate canonical URLs.
    const canonical = `${SITE}${normalised === '/games' ? '/' : normalised}`;
    document.title = meta.title;
    setMeta('meta[name="description"]', () => {
      const el = document.createElement('meta'); el.name = 'description'; return el;
    }, meta.description);
    const og = (property: string, content: string) => setMeta(`meta[property="${property}"]`, () => {
      const el = document.createElement('meta'); el.setAttribute('property', property); return el;
    }, content);
    og('og:title', meta.title);
    og('og:description', meta.description);
    og('og:type', meta.type || 'website');
    og('og:url', canonical);
    const image = meta.image ? new URL(meta.image, SITE).href : DEFAULT_OG;
    og('og:image', image);
    setMeta('meta[name="twitter:card"]', () => {
      const el = document.createElement('meta'); el.name = 'twitter:card'; return el;
    }, 'summary_large_image');
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
    link.href = canonical;
    setMeta('meta[name="theme-color"]', () => {
      const el = document.createElement('meta'); el.name = 'theme-color'; return el;
    }, normalised.startsWith('/web') ? '#f9faf6' : '#0d0e11');

    let ld = document.head.querySelector<HTMLScriptElement>('script[data-dual-portfolio-ld]');
    if (!ld) { ld = document.createElement('script'); ld.type = 'application/ld+json'; ld.dataset.dualPortfolioLd = 'true'; document.head.appendChild(ld); }
    const provider = { '@type': 'Person', name: 'Dylan Fliski', url: SITE, jobTitle: normalised.startsWith('/web') ? 'Freelance Web Developer' : 'Games Programmer', address: { '@type': 'PostalAddress', addressLocality: 'Cheltenham', addressCountry: 'GB' } };
    if (normalised === '/') {
      ld.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': [provider, { '@type': 'WebSite', name: 'Dylan Fliski', url: SITE }] });
    } else if (normalised === '/web/services') {
      ld.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', name: 'Small Business Website Development', provider, areaServed: ['Cheltenham', 'Gloucester', 'Tewkesbury'], offers: websitePackages.map(pkg => ({ '@type': 'Offer', name: pkg.name, price: pkg.priceGBP, priceCurrency: 'GBP' })) });
    } else {
      ld.textContent = '';
    }
  }, [pathname]);
  return null;
}
