import { ArrowRight, ArrowUpRight, Code2, Gamepad2, Layers3 } from 'lucide-react';
import { Link } from 'react-router-dom';

/** The only page intended to visually bridge the two independent portfolios. */
export function PortfolioChooser() {
  return (
    <main className="portfolio-choice">
      <div className="portfolio-choice__top">
        <Link className="portfolio-choice__wordmark" to="/" aria-label="Dylan Fliski home">
          <span className="portfolio-choice__mark">DF<span>.</span></span>
          <span>INDEPENDENT DEVELOPER <span className="portfolio-choice__top-separator">/</span> CHELTENHAM, UK</span>
        </Link>
        <a className="portfolio-choice__email" href="mailto:dylsonator.b@gmail.com">
          Get in touch <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>

      <div className="portfolio-choice__intro">
        <div className="portfolio-choice__eyebrow"><span /> TWO SPECIALISATIONS. ONE DEVELOPER.</div>
        <h1>Dylan <em>Fliski.</em></h1>
        <p>Games Programmer <span>&amp;</span> Freelance Web Developer</p>
        <div className="portfolio-choice__explain">Choose which side of my work you'd like to explore.</div>
      </div>

      <div className="portfolio-choice__grid">
        <Link to="/games" className="portfolio-card portfolio-card--games">
          <div className="portfolio-card__background" aria-hidden="true" />
          <div className="portfolio-card__tint" aria-hidden="true" />
          <div className="portfolio-card__topline">
            <span><Gamepad2 size={19} aria-hidden="true" /> 01 / GAME DEVELOPMENT</span>
            <ArrowUpRight size={23} aria-hidden="true" />
          </div>
          <div className="portfolio-card__content">
            <div className="portfolio-card__pill">UNREAL ENGINE · UNITY · C++ · C#</div>
            <h2>Building the<br /><em>unpredictable.</em></h2>
            <p>Gameplay systems, AI, simulations and games. See the technical work behind what I build.</p>
            <span className="portfolio-card__action">Explore Game Development <ArrowRight size={18} aria-hidden="true" /></span>
          </div>
        </Link>

        <Link to="/web" className="portfolio-card portfolio-card--web">
          <div className="portfolio-card__browser" aria-hidden="true">
            <div className="portfolio-card__browser-top"><span /><span /><span /><i /></div>
            <div className="portfolio-card__browser-content">
              <div className="portfolio-card__browser-nav"><i /><i /><i /></div>
              <div className="portfolio-card__browser-title" />
              <div className="portfolio-card__browser-line" />
              <div className="portfolio-card__browser-line short" />
              <div className="portfolio-card__browser-button" />
              <div className="portfolio-card__browser-tiles"><i /><i /><i /></div>
            </div>
          </div>
          <div className="portfolio-card__topline">
            <span><Code2 size={19} aria-hidden="true" /> 02 / WEB DEVELOPMENT</span>
            <ArrowUpRight size={23} aria-hidden="true" />
          </div>
          <div className="portfolio-card__content">
            <div className="portfolio-card__pill"><Layers3 size={13} aria-hidden="true" /> WEBSITES FOR LOCAL BUSINESS</div>
            <h2>Good websites.<br /><em>No fuss.</em></h2>
            <p>Clean, responsive websites and practical support for small businesses, with straightforward pricing.</p>
            <span className="portfolio-card__action">Explore Web Development <ArrowRight size={18} aria-hidden="true" /></span>
          </div>
        </Link>
      </div>
      <footer className="portfolio-choice__footer">
        <span>© {new Date().getFullYear()} Dylan Fliski</span>
        <span>BUILT WITH INTENTION <span aria-hidden="true">✳</span></span>
      </footer>
    </main>
  );
}
