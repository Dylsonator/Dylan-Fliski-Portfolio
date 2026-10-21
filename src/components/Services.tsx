import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Bug,
  Check,
  Code2,
  ExternalLink,
  Gamepad2,
  Globe2,
  Mail
} from 'lucide-react';
import { freelanceProfiles, freelanceServices, type ServiceIcon } from '../services';
import './Services.css';

const pageDescription =
  'Freelance web development, Unreal Engine and Unity gameplay programming, and testing and debugging by Dylan Fliski, a games programmer based in the UK.';

function ServiceSymbol({ type }: { type: ServiceIcon }) {
  switch (type) {
    case 'website':
      return <Globe2 size={25} aria-hidden="true" />;
    case 'game':
      return <Gamepad2 size={25} aria-hidden="true" />;
    case 'testing':
      return <Bug size={25} aria-hidden="true" />;
  }
}

/** The small homepage introduction keeps projects and games programming prominent. */
export function FreelanceTeaser() {
  return (
    <section className="shell section freelance-teaser" aria-labelledby="freelance-teaser-heading">
      <div className="freelance-teaser__copy">
        <span className="eyebrow red-label">FREELANCE / DEVELOPMENT</span>
        <h2 id="freelance-teaser-heading">Need a hand with a <em>project?</em></h2>
        <p>
          Alongside my game development work, I take on freelance websites, gameplay systems,
          testing and debugging. From building something new to fixing what already exists.
        </p>
        <Link className="btn secondary" to="/services">
          Explore freelance services <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </div>
      <div className="freelance-teaser__quicklinks" aria-label="Freelance specialties">
        <span><Globe2 size={19} aria-hidden="true" /> Websites</span>
        <span><Gamepad2 size={19} aria-hidden="true" /> Gameplay systems</span>
        <span><Bug size={19} aria-hidden="true" /> Testing &amp; debugging</span>
      </div>
    </section>
  );
}

function FreelanceSEO() {
  useEffect(() => {
    const oldTitle = document.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const oldDescription = description?.content;

    document.title = 'Freelance Services | Dylan Fliski — Games Programmer';
    if (description) description.content = pageDescription;

    return () => {
      document.title = oldTitle;
      if (description && oldDescription !== undefined) description.content = oldDescription;
    };
  }, []);

  return null;
}

/** Standalone route with the same content width, cards, accents and buttons as the rest of the site. */
export default function Services() {
  return (
    <main className="shell page freelance-page">
      <FreelanceSEO />
      <div className="freelance-page__intro">
        <span className="eyebrow red-label">FREELANCE / SERVICES</span>
        <h1 className="page-title">Let's build <em>something.</em></h1>
        <p className="page-intro">
          I'm a games programming graduate who also builds websites and helps people get their
          existing projects working better. Whether you've got a rough idea or a specific bug,
          I'm happy to talk through what you need.
        </p>
        <div className="freelance-page__intro-actions">
          <Link to="/contact" className="btn primary">
            Discuss a project <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
          <Link to="/projects" className="freelance-page__text-link">
            See my work <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <section className="freelance-page__offerings" aria-labelledby="freelance-services-title">
        <div className="section-heading">
          <span className="eyebrow red-label">01 / WHAT I CAN HELP WITH</span>
          <h2 id="freelance-services-title">Development &amp; support</h2>
          <p>Practical services, without an agency-sized process.</p>
        </div>
        <div className="freelance-services-grid">
          {freelanceServices.map((service, index) => (
            <article className="freelance-service-card" key={service.id}>
              <div className="freelance-service-card__top">
                <span className="freelance-service-card__icon">
                  <ServiceSymbol type={service.icon} />
                </span>
                <span className="freelance-service-card__number">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.highlights.map((highlight) => (
                  <li key={highlight}>
                    <Check size={15} aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="freelance-service-card__cta">
                Enquire about this service <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="freelance-page__platforms" aria-labelledby="freelance-platforms-title">
        <div className="section-heading">
          <span className="eyebrow red-label">02 / WORK WITH ME</span>
          <h2 id="freelance-platforms-title">Find me online</h2>
          <p>Prefer working through a freelance platform? You'll find my profiles here once linked.</p>
        </div>
        <div className="freelance-platform-grid">
          {freelanceProfiles.map((profile) => {
            const content = (
              <>
                <span className="freelance-platform__icon" aria-hidden="true">
                  {profile.name === 'Upwork' ? <BriefcaseBusiness /> : <Code2 />}
                </span>
                <span className="freelance-platform__details">
                  <strong>{profile.name}</strong>
                  <small>{profile.url ? 'View my freelance profile' : 'Profile link coming soon'}</small>
                </span>
                {profile.url && <ExternalLink size={18} aria-hidden="true" />}
              </>
            );
            return profile.url ? (
              <a
                className="freelance-platform"
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                key={profile.name}
              >
                {content}
              </a>
            ) : (
              <div className="freelance-platform freelance-platform--pending" key={profile.name}>
                {content}
              </div>
            );
          })}
          <Link className="freelance-platform freelance-platform--contact" to="/contact">
            <span className="freelance-platform__icon" aria-hidden="true"><Mail /></span>
            <span className="freelance-platform__details">
              <strong>Contact directly</strong>
              <small>Send me an enquiry through my contact page</small>
            </span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="freelance-page__closing" aria-labelledby="freelance-closing-title">
        <div>
          <span className="eyebrow red-label">GOT SOMETHING IN MIND?</span>
          <h2 id="freelance-closing-title">Tell me what you're working on.</h2>
          <p>A short description of your idea, the work involved and any deadlines is a great start.</p>
        </div>
        <Link className="btn primary" to="/contact">
          Get in touch <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
