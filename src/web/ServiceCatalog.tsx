import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, ArrowUpRight, CalendarDays, Check, ClipboardCheck,
  Gauge, Images, MapPin, SearchCheck, ShieldCheck,
} from 'lucide-react';
import { carePlans, extraServices, introEstimateDisclaimer, quotePath, type ExtraServiceId } from './offerings';
import './service-catalog.css';

const serviceIcons = {
  'speed-optimisation': Gauge,
  'local-seo': SearchCheck,
  'google-business-profile': MapPin,
  'contact-forms': ClipboardCheck,
  galleries: Images,
  'booking-systems': CalendarDays,
} satisfies Record<ExtraServiceId, typeof Gauge>;

export function AdditionalWebsiteServices() {
  return (
    <section className="web-section web-section--tinted web-extras" aria-labelledby="web-extras-heading">
      <div className="web-container">
        <div className="web-section-heading">
          <span className="web-eyebrow">02 / OPTIONAL IMPROVEMENTS</span>
          <h2 id="web-extras-heading">Additional Website Services</h2>
          <p>Need help with an existing website? From faster loading times to easier customer bookings, I offer affordable, targeted improvements without requiring a full website rebuild.</p>
        </div>
        <div className="web-extra-grid">
          {extraServices.map(service => {
            const Icon = serviceIcons[service.id];
            return (
              <article className="web-extra-card" key={service.id}>
                <div className="web-extra-card__head">
                  <span className="web-extra-card__icon"><Icon size={21} aria-hidden="true" /></span>
                  <span className="web-extra-card__price">£{service.minGBP}–£{service.maxGBP} <small>indicative</small></span>
                </div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <ul>{service.included.slice(0, 3).map(feature => <li key={feature}><Check size={15} aria-hidden="true" />{feature}</li>)}</ul>
                <div className="web-extra-card__actions">
                  <Link to={`/web/services/${service.id}`} className="web-extra-card__detail">View Details <ArrowRight size={15} aria-hidden="true" /></Link>
                  <Link to={quotePath(service.id)} className="web-extra-card__quote">Request a Quote <ArrowUpRight size={15} aria-hidden="true" /></Link>
                </div>
              </article>
            );
          })}
        </div>
        <p className="web-extras__disclaimer">{introEstimateDisclaimer}</p>
      </div>
    </section>
  );
}

export function CarePlanTeaser() {
  return (
    <section className="web-section web-container web-care-teaser" aria-labelledby="web-care-teaser-heading">
      <div>
        <span className="web-eyebrow">03 / MONTHLY WEBSITE CARE</span>
        <h2 id="web-care-teaser-heading">A bit of help after launch.</h2>
        <p>Choose regular checks or a small monthly editing allowance. Plans start at £15/month and have clear limits — no surprise promises of unlimited support.</p>
      </div>
      <Link to="/web/maintenance" className="web-button web-button--primary">Explore Monthly Website Care <ArrowRight size={17} aria-hidden="true" /></Link>
    </section>
  );
}

export function ExtraServiceDetail() {
  const { slug } = useParams();
  const service = extraServices.find(item => item.id === slug);
  if (!service) {
    return (
      <main className="web-section web-container web-service-detail">
        <h1>Service not found.</h1>
        <p>That service isn't listed. See the current website options instead.</p>
        <Link to="/web/services" className="web-button web-button--outline">All services</Link>
      </main>
    );
  }
  const Icon = serviceIcons[service.id];
  return (
    <main className="web-container web-service-detail">
      <Link to="/web/services" className="web-back-link"><ArrowLeft size={16} aria-hidden="true" /> All Services</Link>
      <header className="web-service-detail__lead">
        <span className="web-eyebrow">ADDITIONAL WEBSITE SERVICES</span>
        <div className="web-service-detail__title"><span className="web-extra-card__icon"><Icon size={25} aria-hidden="true" /></span><h1>{service.name}</h1></div>
        <p>{service.description}</p>
        <div className="web-service-detail__offer"><strong>£{service.minGBP}–£{service.maxGBP}</strong><span>Indicative introductory estimate, subject to scope</span></div>
        <Link to={quotePath(service.id)} className="web-button web-button--primary">Request a Quote <ArrowUpRight size={17} aria-hidden="true" /></Link>
      </header>
      <div className="web-service-detail__grid">
        <section className="web-service-detail__panel"><h2>What's included</h2><ul>{service.included.map(value => <li key={value}><Check size={16} aria-hidden="true" />{value}</li>)}</ul></section>
        <div className="web-service-detail__side">
          <section className="web-service-detail__panel"><h2>Typical uses</h2><ul className="web-service-detail__simple">{service.suitableFor.map(value => <li key={value}>{value}</li>)}</ul></section>
          <section className="web-service-detail__panel"><h2>Scope</h2><p>{service.scope}</p></section>
        </div>
      </div>
      <section className="web-service-detail__exclusions"><h2>Not included</h2><ul>{service.excluded.map(value => <li key={value}>{value}</li>)}</ul></section>
      {service.note && <p className="web-service-detail__note"><ShieldCheck size={19} aria-hidden="true" />{service.note}</p>}
      <p className="web-extras__disclaimer">{introEstimateDisclaimer}</p>
      <div className="web-service-detail__end"><div><h2>Not sure this covers your site?</h2><p>Describe what needs fixing and I'll confirm what's realistic before giving you a price.</p></div><Link to={quotePath(service.id)} className="web-button web-button--primary">Ask About This Service <ArrowRight size={17} aria-hidden="true" /></Link></div>
    </main>
  );
}

export function WebMaintenance() {
  return (
    <main>
      <header className="web-page-lead web-container">
        <span className="web-eyebrow">MONTHLY WEBSITE CARE</span>
        <h1>Keep your website<br /><em>in good shape.</em></h1>
        <p>Small, clearly scoped monthly plans for checking your site and making limited updates. No 24/7 promises, and no obligation to choose a plan when your site is built.</p>
      </header>
      <section className="web-section web-container web-maintenance">
        <div className="web-maintenance__grid">
          {carePlans.map(plan => (
            <article key={plan.id} className="web-maintenance__card">
              <span className="web-eyebrow">MONTHLY CARE</span><h2>{plan.name}</h2><p>{plan.description}</p>
              <div className="web-maintenance__price">£{plan.monthlyGBP}<small> / month</small></div>
              <h3>What's included</h3><ul>{plan.included.map(item => <li key={item}><Check size={16} aria-hidden="true" />{item}</li>)}</ul>
              <div className="web-maintenance__notes">{plan.notes.map(item => <p key={item}>{item}</p>)}</div>
              <Link to={quotePath(plan.id)} className="web-button web-button--outline">Enquire About {plan.name}<ArrowRight size={17} aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
        <p className="web-extras__disclaimer">Hosting, domain registration, paid subscriptions and work beyond each plan's allowance are not included unless separately agreed. Plans do not include unlimited changes, guaranteed response times, immediate fixes or 24/7 support. Emergency help is best-efforts only.</p>
        <Link to="/web/services" className="web-back-link"><ArrowLeft size={16} aria-hidden="true" /> Back to website services</Link>
      </section>
    </main>
  );
}
