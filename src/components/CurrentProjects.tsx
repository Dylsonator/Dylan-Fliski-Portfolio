import { Link } from 'react-router-dom';
import './CurrentProjects.css';

/**
 * Self-contained portfolio section: no dependency on src/projects.ts or Project types.
 * Insert <CurrentProjects /> wherever it fits your existing portfolio homepage.
 */
export default function CurrentProjects() {
  return (
    <section className="shell section df-current-work" id="currently-building" aria-labelledby="df-current-work-title">
      <div className="df-current-work__intro">
        <div className="df-current-work__eyebrow"><span className="df-current-work__signal" /> ON THE WORKBENCH</div>
        <h2 id="df-current-work-title">Currently building<span className="df-current-work__period">.</span></h2>
        <p>Two projects in development. One is a short game-jam horror project; the other revisits a university project with a more scalable C++ foundation.</p>
      </div>

      <div className="df-current-work__grid">
        <article className="df-current-work__card df-current-work__card--horror">
          <div className="df-current-work__card-top">
            <span className="df-current-work__tag">GAME JAM · IN DEVELOPMENT</span>
            <span className="df-current-work__date">OCT 2026</span>
          </div>
          <div className="df-current-work__symbol df-current-work__symbol--bus" aria-hidden="true">08</div>
          <div className="df-current-work__card-content">
            <p className="df-current-work__kicker">HORROR HATCH #3 · LIMINAL TRANSIT</p>
            <h3>The Last Service</h3>
            <p className="df-current-work__hook">The last bus is due. Your destination isn't.</p>
            <p className="df-current-work__description">A short PSX-inspired psychological horror game being made for a five-day game jam. A quiet roadside stop, a familiar journey, and a few things that don't seem quite right.</p>
            <div className="df-current-work__meta"><span>UNREAL ENGINE 5</span><span>C++ / BLUEPRINTS</span><span>PSX HORROR</span></div>
            <div className="df-current-work__card-foot"><span className="df-current-work__live-dot" /> More to be revealed after the jam</div>
          </div>
        </article>

        <article className="df-current-work__card df-current-work__card--creator">
          <div className="df-current-work__card-top">
            <span className="df-current-work__tag">REMASTER · IN PROGRESS</span>
            <span className="df-current-work__date">2026</span>
          </div>
          <div className="df-current-work__symbol df-current-work__symbol--code" aria-hidden="true">{`{ C++ }`}</div>
          <div className="df-current-work__card-content">
            <p className="df-current-work__kicker">UNIVERSITY PROJECT · TECHNICAL REBUILD</p>
            <h3>Character Creator <span className="df-current-work__title-minor">/ Remastered</span></h3>
            <p className="df-current-work__hook">From Blueprint-heavy prototype to a reusable customisation system.</p>
            <p className="df-current-work__description">Revisiting my modular character creator with C++ mesh-swapping logic, asset catalogue generation and a complete UI redesign in progress — while preserving the original university version for comparison.</p>
            <div className="df-current-work__meta"><span>UNREAL ENGINE 5</span><span>C++</span><span>UMG / BLUEPRINTS</span></div>
            <Link className="df-current-work__card-foot df-current-work__card-link" to="/projects/character-creator"><span className="df-current-work__live-dot" /> View original project &amp; remaster notes<span aria-hidden="true" className="df-current-work__arrow">↗</span></Link>
          </div>
        </article>
      </div>
    </section>
  );
}
