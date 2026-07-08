import { SLIDES } from '../data/slides.js';

const pad = (n) => ('0' + n).slice(-2);

/** Fixed UI chrome around the deck: background FX, progress bar, header chip,
 *  footer, page counter, dot navigation and the scroll hint. */
export default function Chrome({ activeIndex, progress, showHint, goTo }) {
  const active = SLIDES[activeIndex] || SLIDES[0];
  return (
    <>
      {/* animated background */}
      <div className="bgfx">
        <div className="hx" />
        <div className="wa a" />
        <div className="wa b" />
      </div>

      {/* scroll progress bar */}
      <div className="pbar" style={{ width: progress + '%' }} />

      {/* header */}
      <header className="hdr">
        <div className="brand">
          <img src="/assets/hive-logo.png" alt="HIVE" />
          <b>HIVE</b>
        </div>
        <div className="seclbl">{active.section}</div>
      </header>

      {/* footer + page number */}
      <div className="foot">
        <span className="hx">⬡</span> H.I.V.E. KIT
      </div>
      <div className="pnum">
        <b>{pad(activeIndex + 1)}</b> / {SLIDES.length}
      </div>

      {/* dot navigation */}
      <nav className="dotnav">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            data-label={s.nav || pad(i + 1)}
            className={i === activeIndex ? 'active' : ''}
            onClick={() => goTo(i)}
            aria-label={s.section}
          />
        ))}
      </nav>

      {/* scroll hint */}
      <div className="scrollhint" style={{ opacity: showHint ? 1 : 0 }}>
        <div className="mouse" />
        Scroll
      </div>
    </>
  );
}
