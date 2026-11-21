import { useState, type FormEvent } from 'react';
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Check, CheckCircle2, ChevronRight,
  Code2, ExternalLink, Globe2, LayoutTemplate, Mail, MapPin, Menu,
  MonitorSmartphone, ShieldCheck, Wrench, X,
} from 'lucide-react';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import { freelanceProfiles } from '../services';
import { publishedWebProjects, websitePackages } from './data';

const EMAIL = 'dylsonator.b@gmail.com';

function WebHeader() {
  const [open, setOpen] = useState(false);
  const links = [
    ['/web', 'Home'],
    ['/web/services', 'Services & Pricing'],
    ['/web/projects', 'Projects'],
    ['/web/about', 'About'],
    ['/web/contact', 'Contact'],
  ] as const;

  return (
    <header className="web-header">
      <div className="web-container web-header__inner">
        <Link className="web-brand" to="/web" onClick={() => setOpen(false)}>
          <span className="web-brand__mark">
            <img src="/images/logo-mark.png" alt="" width={400} height={400} />
          </span>
          <span>Dylan Fliski <small>WEB DEVELOPMENT</small></span>
        </Link>
        <button
          className="web-menu-button" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-controls="web-primary-nav" aria-expanded={open} onClick={() => setOpen(!open)}
        >{open ? <X size={23} /> : <Menu size={23} />}</button>
        <nav id="web-primary-nav" className={`web-navigation${open ? ' web-navigation--open' : ''}`} aria-label="Web development navigation">
          {links.map(([path, name]) => (
            <NavLink key={path} to={path} end={path === '/web'} onClick={() => setOpen(false)}>
              {name}
            </NavLink>
          ))}
        </nav>
        <Link className="web-header__quote" to="/web/contact">
          Get a Free Quote <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </header>
  );
}

function WebFooter() {
  return (
    <footer className="web-footer">
      <div className="web-container web-footer__grid">
        <div>
          <strong>Dylan Fliski<span>.</span></strong>
          <p>Independent web development for small businesses in Cheltenham, Gloucester, Tewkesbury and nearby.</p>
          <span>© {new Date().getFullYear()} Dylan Fliski</span>
        </div>
        <nav aria-label="Web portfolio footer">
          <Link to="/web/services">Services & Pricing</Link>
          <Link to="/web/projects">Projects</Link>
          <Link to="/web/contact">Get a Quote</Link>
          <Link to="/web/privacy">Privacy</Link>
        </nav>
        <div className="web-footer__contact">
          <span>START A WEBSITE PROJECT</span>
          <Link to="/web/contact">Get a Free Quote <ArrowUpRight size={16} aria-hidden="true" /></Link>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
      </div>
    </footer>
  );
}

export function WebLayout() {
  return (
    <div className="web-site">
      <WebHeader />
      <Outlet />
      <WebFooter />
    </div>
  );
}

function SectionIntro({ eyebrow, title, description }: {
  eyebrow: string; title: string; description?: string;
}) {
  return (
    <div className="web-section-heading">
      <span className="web-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export function WebHome() {
  return (
    <main>
      <section className="web-hero">
        <div className="web-container web-hero__layout">
          <div className="web-hero__copy">
            <span className="web-eyebrow"><span className="web-signal" /> INDEPENDENT WEB DEVELOPER · CHELTENHAM</span>
            <h1>Modern Websites.<br /><em>Affordable Prices.</em><br />Built for Your Business.</h1>
            <p>I'm a Cheltenham-based freelance web developer helping local businesses build modern, mobile-friendly websites without expensive agency prices.</p>
            <div className="web-actions">
              <Link className="web-button web-button--primary" to="/web/contact">Get a Free Quote <ArrowUpRight size={18} aria-hidden="true" /></Link>
              <Link className="web-button web-button--outline" to="/web/services">View Services & Pricing <ArrowRight size={17} aria-hidden="true" /></Link>
            </div>
            <div className="web-hero__micro"><CheckCircle2 size={17} aria-hidden="true" /> Clear scope, upfront pricing and a site built around your business.</div>
          </div>
          <div className="web-hero-visual" aria-label="Concept illustration of a responsive business website">
            <div className="web-hero-visual__orbit" />
            <div className="web-mock-browser">
              <div className="web-mock-browser__top"><span /><span /><span /><i>yourbusiness.co.uk</i></div>
              <div className="web-mock-browser__inside">
                <div className="web-mock-browser__nav"><strong>YOUR BUSINESS.</strong><span>Home &nbsp;&nbsp; Services &nbsp;&nbsp; Contact</span></div>
                <div className="web-mock-browser__content"><span>BUILT AROUND YOUR CUSTOMERS</span><b>Make the right<br />first impression.</b><i>Simple, clear, and easy to use.</i><div className="web-mock-browser__cta">Get in touch <ArrowUpRight size={12} /></div></div>
                <div className="web-mock-browser__cards"><div /><div /><div /></div>
              </div>
            </div>
            <div className="web-mock-phone"><div className="web-mock-phone__notch" /><div className="web-mock-phone__hero" /><div className="web-mock-phone__bar" /><div className="web-mock-phone__bar short" /><div className="web-mock-phone__button" /><div className="web-mock-phone__tiles"><i /><i /></div></div>
            <div className="web-hero-visual__caption">RESPONSIVE BY DESIGN <MonitorSmartphone size={16} aria-hidden="true" /></div>
          </div>
        </div>
      </section>

      <section className="web-section web-container">
        <SectionIntro eyebrow="01 / WHAT I BUILD" title="The right website for where you are." description="Whether you're starting from scratch or your current site needs work, I'll keep the process straightforward." />
        <div className="web-benefit-grid">
          <article className="web-benefit"><span><LayoutTemplate aria-hidden="true" /></span><h3>Websites that make sense</h3><p>Clear information, useful contact options and a layout that helps visitors find what they need.</p></article>
          <article className="web-benefit"><span><MonitorSmartphone aria-hidden="true" /></span><h3>Made for every screen</h3><p>Responsive pages that adapt for customers on phones, tablets and desktop devices.</p></article>
          <article className="web-benefit"><span><Wrench aria-hidden="true" /></span><h3>Help with existing sites</h3><p>Layout fixes, improvements and practical troubleshooting without rebuilding everything.</p></article>
        </div>
      </section>

      <section className="web-section web-section--tinted">
        <div className="web-container web-home-pricing">
          <div>
            <span className="web-eyebrow">02 / INTRODUCTORY PRICES</span>
            <h2>Start small.<br /><em>Look professional.</em></h2>
            <p>Limited introductory rates from <strong>£79</strong>, with clear packages for one to five-page websites.</p>
            <Link className="web-button web-button--primary" to="/web/services">Explore Packages <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
          <div className="web-price-stack" aria-label="Available starting packages">
            {websitePackages.map(p => <Link to={`/web/services#${p.id}`} key={p.id}><span>{p.name}</span><strong>£{p.priceGBP}</strong><ArrowUpRight size={18} aria-hidden="true" /></Link>)}
          </div>
        </div>
      </section>

      <section className="web-section web-container web-home-local">
        <div><span className="web-eyebrow">BASED IN CHELTENHAM</span><h2>Local businesses,<br />real conversations.</h2><p>I work with independent businesses around Cheltenham, Gloucester and Tewkesbury — from trades and garages to cleaners, landscapers and local service providers.</p></div>
        <div className="web-local-map"><MapPin size={35} aria-hidden="true" /><strong>CHELTENHAM</strong><span>GLOUCESTER · TEWKESBURY · SURROUNDING AREAS</span></div>
      </section>
      <CallToAction />
    </main>
  );
}

function CallToAction() {
  return <section className="web-section web-cta"><div className="web-container web-cta__inner"><div><span className="web-eyebrow">LET'S TALK</span><h2>Got a website in mind?</h2><p>Tell me about your business and what you need. No pressure, just a clear starting point.</p></div><Link className="web-button web-button--light" to="/web/contact">Get a Free Quote <ArrowUpRight size={19} aria-hidden="true" /></Link></div></section>;
}

export function WebServices() {
  return (
    <main>
      <section className="web-page-lead web-container">
        <span className="web-eyebrow">SERVICES / SIMPLE PRICING</span>
        <h1>Websites without<br /><em>the agency price tag.</em></h1>
        <p>Four starting points, from polishing a single webpage to giving your business a full five-page website. These are limited introductory rates.</p>
      </section>
      <section className="web-section web-container web-pricing-section" aria-label="Website packages">
        <div className="web-pricing-grid">
          {websitePackages.map(pkg => (
            <article id={pkg.id} className={`web-package${pkg.featured ? ' web-package--featured' : ''}`} key={pkg.id}>
              {pkg.featured && <div className="web-package__tag">POPULAR STARTING POINT</div>}
              <div className="web-package__label">INTRODUCTORY RATE</div>
              <h2>{pkg.name}</h2>
              <p>{pkg.description}</p>
              <div className="web-package__price">£{pkg.priceGBP}<span> / project</span></div>
              <ul>{pkg.deliverables.map(item => <li key={item}><Check size={16} aria-hidden="true" />{item}</li>)}</ul>
              <div className="web-package__revisions"><CheckCircle2 size={17} aria-hidden="true" /> {pkg.revisions}</div>
              <Link className={`web-button ${pkg.featured ? 'web-button--primary' : 'web-button--outline'}`} to={`/web/contact?package=${encodeURIComponent(pkg.id)}`}>Ask About This Package <ArrowUpRight size={17} aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
        <div className="web-pricing-fine-print"><ShieldCheck size={23} aria-hidden="true" /><div><strong>What's included — and what's not</strong><p>These are limited introductory rates. Hosting, domain registration, premium plugins, ecommerce, advanced booking systems and third-party subscription costs are not included. Scope and any extra costs will be agreed before work starts. Basic SEO means on-page setup, not a promise of search rankings or customers.</p></div></div>
      </section>
      <section className="web-section web-section--tinted"><div className="web-container"><SectionIntro eyebrow="HOW IT WORKS" title="Straightforward from the start." /><div className="web-steps"><div><span>01</span><h3>Tell me the idea</h3><p>Share your business, goals and what needs building or fixing.</p></div><div><span>02</span><h3>Agree the scope</h3><p>We'll confirm pages, features, revisions and the price before work starts.</p></div><div><span>03</span><h3>Build and review</h3><p>I'll build the agreed site and work through the included revisions with you.</p></div></div></div></section>
      <section className="web-section web-container web-platform-section"><SectionIntro eyebrow="ALSO AVAILABLE" title="Find me on freelance platforms." /><div className="web-platforms">{freelanceProfiles.filter(p => p.url).map(p => <a key={p.name} target="_blank" rel="noopener noreferrer" href={p.url!}><Globe2 size={20} aria-hidden="true" /><span><strong>{p.name}</strong><small>{p.description}</small></span><ExternalLink size={19} aria-hidden="true" /></a>)}<Link to="/web/contact"><Mail size={20} aria-hidden="true" /><span><strong>Contact directly</strong><small>Tell me about your project</small></span><ArrowRight size={19} aria-hidden="true" /></Link></div></section>
      <CallToAction />
    </main>
  );
}

export function WebProjects() {
  return (
    <main>
      <section className="web-page-lead web-container"><span className="web-eyebrow">WEB DEVELOPMENT / WORK</span><h1>Work worth<br /><em>showing.</em></h1><p>Real websites and case studies will appear here as they're finished and cleared for public display.</p></section>
      <section className="web-section web-container">
        {publishedWebProjects.length > 0 ? (
          <div className="web-project-grid">{publishedWebProjects.map(project => <Link to={`/web/projects/${project.slug}`} key={project.slug} className="web-project-card">{project.coverImage && <img src={project.coverImage} alt={`${project.title} website`} loading="lazy" />}<span>{project.sector} · {project.type === 'Client' ? 'CLIENT PROJECT' : 'PERSONAL PROJECT'}</span><h2>{project.title}</h2><p>{project.summary}</p><strong>View case study <ArrowUpRight size={17} /></strong></Link>)}</div>
        ) : (
          <div className="web-empty-state"><div className="web-empty-state__graphic" aria-hidden="true"><div className="web-empty-state__browser"><span /><span /><span /><div /><i /><i /></div></div><span className="web-eyebrow">THE WORK IS COMING</span><h2>Building the portfolio properly.</h2><p>I'm currently getting my web development work off the ground, so there are no client case studies to show yet. I'll add finished projects here when I have permission to share them. No made-up testimonials or projects.</p><Link className="web-button web-button--primary" to="/web/contact">Let's Work Together <ArrowRight size={17} aria-hidden="true" /></Link></div>
        )}
      </section>
      <CallToAction />
    </main>
  );
}

export function WebProjectDetail() {
  const { slug } = useParams();
  const project = publishedWebProjects.find(p => p.slug === slug);
  if (!project) return <main className="web-section web-container web-project-notfound"><span className="web-eyebrow">CASE STUDY NOT FOUND</span><h1>Nothing published here yet.</h1><p>Only approved, completed client work is shown in this portfolio.</p><Link to="/web/projects" className="web-button web-button--primary"><ArrowLeft size={17} /> All Web Projects</Link></main>;

  return <main className="web-container web-case-study"><Link className="web-back-link" to="/web/projects"><ArrowLeft size={17} /> Back to web projects</Link><span className="web-eyebrow">{project.sector} · {project.type === 'Client' ? 'CLIENT PROJECT' : 'PERSONAL PROJECT'}</span><h1>{project.title}</h1><p className="web-case-study__lead">{project.summary}</p>{project.coverImage && <img className="web-case-study__cover" src={project.coverImage} alt={`${project.title} website preview`} />}
    <div className="web-case-study__columns"><article><h2>The work</h2>{project.description.map((paragraph, i) => <p key={i}>{paragraph}</p>)}</article><aside><h3>Project details</h3><p>{project.status}</p><div className="web-case-study__tech">{project.tech.map(t => <span key={t}>{t}</span>)}</div>{project.publishedUrl && <a href={project.publishedUrl} target="_blank" rel="noopener noreferrer" className="web-button web-button--primary">Visit Website <ExternalLink size={17} /></a>}</aside></div>
    {(project.beforeImage || project.afterImage) && <section className="web-section"><SectionIntro eyebrow="BEFORE & AFTER" title="The difference." /><div className="web-comparison">{project.beforeImage && <figure><img src={project.beforeImage} alt={`${project.title} before redesign`} /><figcaption>Before</figcaption></figure>}{project.afterImage && <figure><img src={project.afterImage} alt={`${project.title} after redesign`} /><figcaption>After</figcaption></figure>}</div></section>}
  </main>;
}

export function WebAbout() {
  return <main><section className="web-page-lead web-container"><span className="web-eyebrow">ABOUT / INDEPENDENT DEVELOPER</span><h1>A developer, not<br /><em>an agency.</em></h1><p>I'm Dylan — a Cheltenham-based freelance developer building responsive websites with React, TypeScript, JavaScript, HTML and CSS.</p></section><section className="web-section web-container web-about"><div><span className="web-eyebrow">WHY I DO THIS</span><h2>Good websites shouldn't be out of reach.</h2><p>I'm starting my freelance web development work with local small businesses in mind. Whether you need a first website or a better existing one, I focus on clear communication, usable design and a realistic scope.</p><p>My programming background gives me experience with problem-solving, interactive systems and debugging. I'm putting those skills to work in web development too, without pretending I've already got a long list of commercial website clients.</p><Link className="web-button web-button--primary" to="/web/contact">Talk About Your Website <ArrowRight size={17} /></Link></div><aside><span className="web-eyebrow">TOOLKIT</span><h3>What I work with</h3><div className="web-about__skills">{['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Responsive Design', 'Frontend Development', 'Accessibility Basics', 'Git / GitHub', 'Bug Fixing'].map(s => <span key={s}>{s}</span>)}</div><div className="web-about__location"><MapPin size={18} /> Cheltenham, Gloucestershire, UK</div></aside></section><CallToAction /></main>;
}

const formEnabled = import.meta.env.VITE_WEB_FORM_PROVIDER === 'netlify';
const packageChoices = [
  { value: '', name: 'Select a service or package' },
  ...websitePackages.map(p => ({ value: p.id, name: `${p.name} — £${p.priceGBP}` })),
  { value: 'unsure', name: 'Not sure yet / something else' },
];

type FormState = 'idle' | 'submitting' | 'success' | 'error';

/**
 * Netlify Forms is enabled ONLY with VITE_WEB_FORM_PROVIDER=netlify.
 * The matching HTML form in index.html must be present in the deployed build,
 * and delivery/anti-spam must be verified via a real preview submission.
 */
export function WebContact() {
  const [state, setState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const query = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const preferred = query.get('package') ?? '';
  const defaultPackage = packageChoices.some(choice => choice.value === preferred) ? preferred : '';

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    if (!formEnabled || state === 'submitting') return;
    setState('submitting');
    setErrorMessage('');
    const data = new FormData(formElement);
    // Never attempt a network submission for bot-filled requests.
    if (String(data.get('bot-field') || '').trim()) {
      setState('error');
      setErrorMessage('Please retry the form.');
      return;
    }
    const body = new URLSearchParams();
    data.forEach((value, key) => {
      if (typeof value === 'string') body.append(key, value);
    });
    body.set('form-name', 'web-enquiry');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (!response.ok) throw new Error(`Enquiry service returned ${response.status}`);
      setState('success');
      formElement.reset();
    } catch {
      setState('error');
      setErrorMessage('Your enquiry could not be confirmed. Please email me directly instead.');
    }
  };

  return <main><section className="web-page-lead web-container"><span className="web-eyebrow">CONTACT / FREE QUOTE</span><h1>Tell me what<br /><em>you have in mind.</em></h1><p>Just a few details about your business and the website you need. I'll use them to understand the scope and get back to you.</p></section><section className="web-section web-container web-contact-layout"><div className="web-contact-side"><span className="web-eyebrow">LET'S TALK ABOUT IT</span><h2>A good project starts with a conversation.</h2><p>Have a website that needs improving? Starting fresh? Not sure which package fits? That's all fine.</p><div className="web-contact-side__item"><Mail size={20} /><div><strong>Email me directly</strong><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div></div><div className="web-contact-side__item"><MapPin size={20} /><div><strong>Based in Cheltenham</strong><span>Working with local UK businesses</span></div></div><p className="web-contact-side__note">No obligation to book. Packages are starting points; final scope and pricing are agreed before any work starts.</p></div>
    <div className="web-contact-form-wrap">
      {state === 'success' ? <div className="web-form-feedback web-form-feedback--success" role="status"><CheckCircle2 size={34} /><h2>Enquiry submitted</h2><p>The form provider accepted your submission. You'll receive a reply by email if delivery is configured correctly.</p><button type="button" className="web-button web-button--outline" onClick={() => setState('idle')}>Send another enquiry</button></div> : <>
      <div className="web-contact-form__intro"><h2>Project enquiry</h2><span>Fields marked * are required.</span></div>
      {!formEnabled && <div className="web-form-unconfigured" role="status"><ShieldCheck size={19} /><p><strong>Online form setup pending.</strong> Enquiry delivery has not been verified yet. You can review the fields below, but submissions are disabled until the hosted form is configured. Please <a href={`mailto:${EMAIL}`}>email me directly</a> instead.</p></div>}
      <form name="web-enquiry" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" className="web-contact-form" onSubmit={submit}>
        <input type="hidden" name="form-name" value="web-enquiry" />
        <p className="web-honeypot"><label>Leave this field empty <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
        <div className="web-form-two"><label>Your name *<input name="name" type="text" autoComplete="name" maxLength={120} required placeholder="Your name" /></label><label>Business name *<input name="business" type="text" autoComplete="organization" maxLength={120} required placeholder="Business name" /></label></div>
        <div className="web-form-two"><label>Email address *<input name="email" type="email" autoComplete="email" maxLength={160} required placeholder="you@business.co.uk" /></label><label>Existing website <span>(optional)</span><input name="website" type="url" placeholder="https://..." maxLength={260} inputMode="url" /></label></div>
        <div className="web-form-two"><label>Service or package *<select name="package" defaultValue={defaultPackage} required>{packageChoices.map(c => <option value={c.value} key={c.value}>{c.name}</option>)}</select></label><label>Approximate budget <span>(optional)</span><select name="budget" defaultValue=""><option value="">Prefer not to say</option><option value="under-150">Under £150</option><option value="150-250">£150–£250</option><option value="250-350">£250–£350</option><option value="350-plus">Over £350</option><option value="unsure">Not sure yet</option></select></label></div>
        <label>Tell me about your project *<textarea name="description" rows={6} minLength={15} maxLength={5000} required placeholder="What does your business do? What would you like the website to achieve? Any existing pages, features or deadlines I should know about?" /></label>
        <label className="web-consent"><input type="checkbox" name="consent" value="yes" required /><span>I agree to be contacted about this enquiry and understand that the information I submit will be used to respond to my request. See the <Link to="/web/privacy">privacy information</Link>. *</span></label>
        <button className="web-button web-button--primary web-contact-submit" type="submit" disabled={!formEnabled || state === 'submitting'}>{state === 'submitting' ? 'Sending…' : 'Send Enquiry'} <ArrowUpRight size={18} /></button>
        {state === 'error' && <p className="web-form-feedback--error" role="alert">{errorMessage}</p>}
        <p className="web-contact-form__disclaimer">Please don't send passwords, payment details or sensitive personal information.</p>
      </form></>}
    </div></section></main>;
}

export function WebPrivacy() {
  return <main className="web-container web-privacy"><Link className="web-back-link" to="/web/contact"><ArrowLeft size={16} /> Back to enquiries</Link><span className="web-eyebrow">PRIVACY / WEB ENQUIRIES</span><h1>Privacy information.</h1><div className="web-privacy__content"><h2>Who handles your enquiry?</h2><p>Dylan Fliski, an independent developer based in Cheltenham, United Kingdom. Contact: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p><h2>What do you send?</h2><p>When the website enquiry form is enabled, it asks for your name, business name, email, optional website, selected service, optional budget and a description of what you need. It also asks for consent to follow up about that enquiry.</p><h2>Why and where?</h2><p>I use this information to respond to your enquiry, discuss a possible project and maintain relevant correspondence. The planned form provider is Netlify Forms, which may process and store submissions on its infrastructure when enabled. Delivery integration is not currently guaranteed until tested. If you email me, your email provider and mine process those messages.</p><h2>Retention and your choices</h2><p>I intend to keep enquiry details only for as long as reasonably necessary for the conversation, any agreed work and applicable record-keeping requirements. You can request access, correction or deletion of your enquiry information by emailing me. Requests will be assessed against any legal obligations to retain information.</p><h2>Before submitting</h2><p>Do not include passwords, payment information or sensitive personal details. If the form is disabled, use the direct email option instead.</p></div></main>;
}

/** Unmatched web URLs stay in the web design without linking to the games portfolio. */
export function WebNotFound() {
  return (
    <main className="web-section web-container web-project-notfound">
      <span className="web-eyebrow">404 / PAGE NOT FOUND</span>
      <h1>That page isn't here.</h1>
      <p>Return to my web development homepage or explore the available website packages.</p>
      <div className="web-actions">
        <Link className="web-button web-button--primary" to="/web">Web Development Home</Link>
        <Link className="web-button web-button--outline" to="/web/services">Services &amp; Pricing</Link>
      </div>
    </main>
  );
}
