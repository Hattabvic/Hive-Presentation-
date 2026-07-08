import Slide from '../components/Slide.jsx';
import { LAB_INTRO, LAB_PREVIEW, LABS, TEAM } from '../data/content.js';

const dots = (
  <>
    <i style={{ background: '#ff5f57' }} />
    <i style={{ background: '#febc2e' }} />
    <i style={{ background: '#28c840' }} />
  </>
);
function BrowserFrame({ d, url, minHeight = 210, children }) {
  return (
    <div className="r bframe" style={{ '--d': d }}>
      <div className="btop">{dots}<div className="burl">{url}</div></div>
      <div className="bcnt" style={{ background: '#05070d', padding: '16px 15px', minHeight }}>{children}</div>
    </div>
  );
}

/* ─────────────────── 20b · DESIGNS · BOOK COVERS + WIREFRAMES ─────────────────── */
export function Designs() {
  const wireframes = [
    { id: 'A', name: 'Centered & Classic', rows: [18, 40, 14, 30, 46, 20] },
    { id: 'B', name: 'Split / Feature-Led', rows: [34, 22, 40, 16, 26] },
    { id: 'C', name: 'Compact / Technical', rows: [24, 50, 20, 34] },
  ];

  return (
    <Slide id="designs" className="wide">
      <div className="eyebrow r fade">Design Process</div>
      <h2 className="ttl r" style={{ '--d': '.07s', margin: '14px 0 8px' }}>
        From <span className="ac">concept</span> to cover.
      </h2>
      <p className="lead r" style={{ '--d': '.14s', marginBottom: 26 }}>
        Two book covers, one shared visual language — plus three wireframe directions explored before the landing page was built.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '260px 260px 1fr', gap: 24, alignItems: 'stretch' }}>
        {/* Theory book cover — blue */}
        <div className="r" style={{ '--d': '.2s' }}>
          <div style={{ background: '#080d18', borderRadius: 16, overflow: 'hidden', height: '100%', boxShadow: '0 24px 60px rgba(19,23,42,.28)', border: '1px solid rgba(0,200,255,.25)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '24px 22px 18px', flex: 1 }}>
              <div style={{ fontFamily: 'var(--fm)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: 14 }}>⬡ Theory Book</div>
              <div style={{ fontFamily: 'var(--fd)', fontWeight: 900, fontSize: 34, lineHeight: 1.05, color: '#F0F4F8' }}>
                Zero to<br /><span style={{ color: 'var(--cyan)' }}>Secure.</span>
              </div>
              <div style={{ marginTop: 14, fontSize: 11.5, color: '#8BAEC4', lineHeight: 1.4 }}>Behind the screen — a Jr. Agent&rsquo;s guide to the digital unknown.</div>
            </div>
            <div style={{ padding: '12px 22px', borderTop: '1px solid rgba(0,200,255,.15)', fontFamily: 'var(--fm)', fontSize: 9.5, color: '#5b7a8f' }}>Author · Abdalla Hattab</div>
            <div style={{ height: 4, background: 'linear-gradient(90deg,var(--cyan),var(--cyanl))' }} />
          </div>
        </div>

        {/* Lab book cover — purple */}
        <div className="r" style={{ '--d': '.28s' }}>
          <div style={{ background: '#0c0a1a', borderRadius: 16, overflow: 'hidden', height: '100%', boxShadow: '0 24px 60px rgba(19,23,42,.28)', border: '1px solid rgba(139,92,246,.3)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '24px 22px 18px', flex: 1 }}>
              <div style={{ fontFamily: 'var(--fm)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--purple)', marginBottom: 14 }}>⬡ Lab Workbook</div>
              <div style={{ fontFamily: 'var(--fd)', fontWeight: 900, fontSize: 34, lineHeight: 1.05, color: '#F0F4F8' }}>
                HIVE<br /><span style={{ color: 'var(--purple)' }}>Workbook.</span>
              </div>
              <div style={{ marginTop: 14, fontSize: 11.5, color: '#a99bd4', lineHeight: 1.4 }}>Every lab is a mission. Every skill builds your defense.</div>
            </div>
            <div style={{ padding: '12px 22px', borderTop: '1px solid rgba(139,92,246,.18)', fontFamily: 'var(--fm)', fontSize: 9.5, color: '#7a6a9c' }}>Author · Abdelrahman Mohamed</div>
            <div style={{ height: 4, background: 'linear-gradient(90deg,var(--purple),#c4b5fd)' }} />
          </div>
        </div>

        {/* Landing page wireframe explorations */}
        <div className="r" style={{ '--d': '.36s', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 16, padding: '20px 22px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontFamily: 'var(--fm)', fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink3)', marginBottom: 14 }}>Landing Page · 3 Layout Concepts</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14, flex: 1 }}>
            {wireframes.map((w) => (
              <div key={w.id} style={{ border: '1px solid var(--bordeR)', borderRadius: 8, background: '#fff', padding: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 3 }}>
                  <div style={{ width: 9, height: 9, borderRadius: '50%', border: '1.5px solid #9aa2b5' }} />
                  <div style={{ flex: 1, height: 4, background: '#d8dce6', borderRadius: 2 }} />
                  <div style={{ width: 16, height: 6, background: '#c7cbdb', borderRadius: 2 }} />
                </div>
                {w.rows.map((h, i) => (
                  <div key={i} style={{ height: h, background: i % 2 === 0 ? '#e7e9f1' : '#d3d7e4', borderRadius: 3 }} />
                ))}
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14, marginTop: 10 }}>
            {wireframes.map((w) => (
              <div key={w.id} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--fm)', fontSize: 11, fontWeight: 700, color: 'var(--cyanD)' }}>{w.id}</div>
                <div style={{ fontSize: 10.5, color: 'var(--ink2)' }}>{w.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}

/* ─────────────────── 21 · LANDING PAGE · PRODUCTS + SIEM + ARCHITECTURE ─────────────────── */
export function Lp1() {
  return (
    <Slide id="lp1" className="wide">
      <div className="eyebrow r fade">Landing Page · 1 of 2</div>
      <h2 className="ttl r" style={{ '--d': '.07s', margin: '14px 0 24px' }}>
        Products, <span className="ac">SIEM</span> &amp; Architecture pages.
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
        <BrowserFrame d=".14s" url="hive-landing.app/products" minHeight={230}>
          <div style={{ fontFamily: 'var(--fm)', fontSize: 9, letterSpacing: '.14em', color: 'var(--cyan)', marginBottom: 8 }}>PRODUCT 01 / 03 · HARDWARE</div>
          <div style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: 18, color: '#F0F4F8', lineHeight: 1.15, marginBottom: 4 }}>HIVE Kit</div>
          <div style={{ fontFamily: 'var(--fm)', fontSize: 8.5, letterSpacing: '.06em', color: 'var(--cyanD)', marginBottom: 10 }}>PORTABLE CYBERSECURITY HARDWARE</div>
          <div style={{ fontSize: 10, lineHeight: 1.5, color: '#8BAEC4', marginBottom: 14 }}>Clear acrylic enclosure housing two Raspberry Pi 4 nodes, a managed switch &amp; touchscreen with a live RGB status strip.</div>
          <div style={{ display: 'flex', gap: 7 }}>
            {[{ c: '#3aa0ff', l: 'Blue' }, { c: '#22c55e', l: 'Green' }, { c: '#ff4d4f', l: 'Red' }, { c: '#a855f7', l: 'Purple' }].map((v) => (
              <div key={v.l} style={{ width: 30, height: 30, borderRadius: 7, border: `1.5px solid ${v.c}`, background: `${v.c}22` }} />
            ))}
          </div>
        </BrowserFrame>
        <BrowserFrame d=".2s" url="hive-landing.app/siem" minHeight={230}>
          <div style={{ fontFamily: 'var(--fm)', fontSize: 9, letterSpacing: '.14em', color: 'var(--green)', marginBottom: 8 }}>PRODUCT 02 / 03 · SOFTWARE</div>
          <div style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: 18, color: '#F0F4F8', lineHeight: 1.15, marginBottom: 4 }}>HIVE SIEM Solution</div>
          <div style={{ fontFamily: 'var(--fm)', fontSize: 8.5, letterSpacing: '.06em', color: 'var(--green)', marginBottom: 10 }}>REAL-TIME THREAT DASHBOARD</div>
          <div style={{ fontSize: 10, lineHeight: 1.5, color: '#8BAEC4', marginBottom: 14 }}>Streams live attack data from Cowrie &amp; Dionaea honeypots via WebSocket, visualising every intrusion as it happens.</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 6 }}>
            {[{ v: '2,847', l: 'ATTACKS' }, { v: '94', l: 'IPS' }, { v: '17', l: 'CRIT' }, { v: '6', l: 'PROTO' }].map((s) => (
              <div key={s.l} style={{ background: 'var(--navy)', border: '1px solid #2a3550', borderRadius: 6, padding: '5px 4px', textAlign: 'center' }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: '#F0F4F8' }}>{s.v}</div>
                <div style={{ fontFamily: 'var(--fm)', fontSize: 6.5, color: '#8BAEC4' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </BrowserFrame>
        <BrowserFrame d=".26s" url="hive-landing.app/architecture" minHeight={230}>
          <div style={{ fontFamily: 'var(--fm)', fontSize: 9, letterSpacing: '.14em', color: 'var(--cyan)', marginBottom: 10 }}>LIVE NETWORK TOPOLOGY</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            {[{ c: 'var(--red)', t: 'Kali Linux', s: 'Attacker Node' }, { c: 'var(--cyan)', t: 'Raspbian + Cowrie', s: 'Honeypot' }, { c: 'var(--green)', t: 'SIEM Dashboard', s: 'Monitor' }].map((n) => (
              <div key={n.t} style={{ background: 'var(--navy)', border: '1px solid #2a3550', borderLeft: `3px solid ${n.c}`, borderRadius: 6, padding: '8px 10px' }}>
                <div style={{ fontFamily: 'var(--fm)', fontSize: 7, letterSpacing: '.08em', textTransform: 'uppercase', color: n.c, marginBottom: 2 }}>{n.s}</div>
                <div style={{ fontSize: 11.5, fontWeight: 700, color: '#F0F4F8' }}>{n.t}</div>
              </div>
            ))}
          </div>
        </BrowserFrame>
      </div>
      <div className="r fade" style={{ '--d': '.34s', marginTop: 18, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <span className="pill">React 18</span>
        <span className="pill">Vite</span>
        <span className="pill">Tailwind CSS</span>
        <span className="pill">Framer Motion</span>
      </div>
    </Slide>
  );
}

/* ─────────────────── 22 · LANDING PAGE · SIEM DEMO + MISSION + CTA ─────────────────── */
export function Lp2() {
  return (
    <Slide id="lp2" className="wide">
      <div className="eyebrow r fade">Landing Page · 2 of 2</div>
      <h2 className="ttl r" style={{ '--d': '.07s', margin: '12px 0 18px' }}>
        Live SIEM demo, <span className="ac">mission</span> &amp; CTA.
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
        <BrowserFrame d=".16s" url="hive-landing.app/siem-demo" minHeight={230}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 6, marginBottom: 10 }}>
            <div style={{ background: 'var(--navy)', border: '1px solid #2a3550', borderRadius: 6, padding: '6px 8px' }}>
              <div style={{ fontFamily: 'var(--fm)', fontSize: 7, color: '#8BAEC4' }}>ATTACKS</div>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#F0F4F8' }}>253</div>
            </div>
            <div style={{ background: 'var(--navy)', border: '1px solid #2a3550', borderRadius: 6, padding: '6px 8px' }}>
              <div style={{ fontFamily: 'var(--fm)', fontSize: 7, color: '#8BAEC4' }}>CRITICAL</div>
              <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--red)' }}>14</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 34, marginBottom: 10 }}>
            {[55, 65, 45, 35, 60, 68, 20, 30, 78, 62, 70, 15].map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 11 ? 'var(--red)' : 'var(--cyan)', borderRadius: 2 }} />
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {['SMB exploit — EternalBlue', 'MySQL root bypass', 'MSSQL brute force'].map((t) => (
              <div key={t} style={{ fontSize: 7.5, color: '#8BAEC4', borderTop: '1px solid #1e2a3a', paddingTop: 4 }}>{t}</div>
            ))}
          </div>
        </BrowserFrame>
        <BrowserFrame d=".22s" url="hive-landing.app/mission" minHeight={230}>
          <div style={{ fontFamily: 'var(--fm)', fontSize: 8, letterSpacing: '.14em', color: 'var(--cyan)', marginBottom: 7 }}>OUR MISSION</div>
          <div style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: 13.5, color: '#F0F4F8', lineHeight: 1.25, marginBottom: 12 }}>Democratizing Cybersecurity Education.</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
            {[{ v: '~32K', l: 'EGP cost' }, { v: '13–16', l: 'Target age' }, { v: 'FREE', l: 'Open-source' }, { v: '100%', l: 'Self-contained' }].map((s) => (
              <div key={s.l} style={{ background: 'var(--navy)', border: '1px solid #2a3550', borderRadius: 6, padding: '6px 8px' }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--cyan)' }}>{s.v}</div>
                <div style={{ fontSize: 7.5, color: '#8BAEC4' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </BrowserFrame>
        <BrowserFrame d=".28s" url="hive-landing.app/" minHeight={230}>
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--fm)', fontSize: 7.5, letterSpacing: '.1em', color: 'var(--cyanD)', background: 'var(--navy)', border: '1px solid #2a3550', borderRadius: 999, padding: '3px 10px', marginBottom: 10 }}>● Open Source · Spring 2026</div>
            <div style={{ fontFamily: 'var(--fd)', fontWeight: 900, fontSize: 15, color: '#F0F4F8', lineHeight: 1.2 }}>Ready to Deploy<br />the <span style={{ color: 'var(--cyan)' }}>HIVE</span> Kit?</div>
            <div style={{ fontSize: 9, fontWeight: 700, color: '#05070d', background: 'var(--cyan)', borderRadius: 999, padding: '6px 14px', marginTop: 12 }}>Explore Products →</div>
            <div style={{ marginTop: 12, fontSize: 7.5, color: '#8BAEC4', lineHeight: 1.5 }}>Pheonix11@gmail.com<br />+20 100 615 2026</div>
          </div>
        </BrowserFrame>
      </div>
    </Slide>
  );
}

/* ─────────────────── 23 · EDUCATION PACKAGE · LAB BOOK OVERVIEW ─────────────────── */
export function Books2() {
  return (
    <Slide id="edu-labbook" className="wide" si={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(30px,5vw,64px)', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div className="eyebrow r fade">Education Package · Lab Book · 1 of 2</div>
        <h2 className="ttl r" style={{ '--d': '.08s' }}>
          The Hands-On <span className="ac">Cybersecurity</span> Lab Book.
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
          {LAB_INTRO.map((point, i) => (
            <div key={point} className="r left" style={{ '--d': `${0.22 + i * 0.08}s`, background: 'var(--bg2)', border: '1px solid var(--border)', borderLeft: '4px solid var(--cyan)', borderRadius: 12, padding: '14px 18px', fontSize: 16, lineHeight: 1.5, color: 'var(--ink2)' }}>
              {point}
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 14 }}>
        {LAB_PREVIEW.map((lab, i) => (
          <div
            key={lab.n}
            className="r right"
            style={{
              '--d': `${0.2 + i * 0.07}s`,
              background: lab.hot ? 'linear-gradient(135deg,rgba(0,200,255,.07),rgba(0,200,255,.02))' : 'var(--bg2)',
              border: lab.hot ? '1px solid rgba(0,200,255,.25)' : '1px solid var(--border)',
              borderRadius: 12,
              padding: '16px 18px',
            }}
          >
            <div style={{ fontFamily: 'var(--fm)', fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--cyanD)', marginBottom: 6 }}>{lab.n}</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)', lineHeight: 1.3 }}>{lab.title}</div>
          </div>
        ))}
      </div>
    </Slide>
  );
}

/* ─────────────────── 23b · EDUCATION PACKAGE · LAB MANUAL COVERAGE ─────────────────── */
export function Books3() {
  return (
    <Slide id="edu-labmanual" className="wide">
      <div className="eyebrow r fade">Education Package · Lab Book · 2 of 2</div>
      <h2 className="ttl r" style={{ '--d': '.07s', margin: '14px 0 8px' }}>
        What This <span className="ac">Lab Book</span> Covers.
      </h2>
      <p className="lead r" style={{ '--d': '.14s', marginBottom: 26 }}>6 hands-on labs — from first Wireshark capture to a full SSH attack analyzed in SIEM.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
        {LABS.map((lab, i) => (
          <div
            key={lab.n}
            className="r"
            style={{
              '--d': `${0.16 + i * 0.06}s`,
              background: lab.hot ? 'linear-gradient(135deg,rgba(0,200,255,.07),rgba(0,200,255,.02))' : 'var(--bg2)',
              border: lab.hot ? '1px solid rgba(0,200,255,.25)' : '1px solid var(--border)',
              borderRadius: 12,
              padding: '22px 22px',
            }}
          >
            <div style={{ fontFamily: 'var(--fm)', fontSize: 22, fontWeight: 700, color: 'var(--cyanD)', marginBottom: 10 }}>{lab.n}</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 7 }}>{lab.title}</div>
            <p style={{ fontSize: 15, lineHeight: 1.45, color: 'var(--ink2)' }}>{lab.body}</p>
          </div>
        ))}
      </div>
    </Slide>
  );
}

/* ─────────────────── 25 · TEAM ─────────────────── */
export function Team() {
  return (
    <Slide id="team" className="wide">
      <div className="eyebrow r fade">Team Phoenix · No. 11</div>
      <h2 className="ttl r" style={{ '--d': '.07s', margin: '14px 0 28px' }}>
        The people who <span className="ac">built it</span>.
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
        {TEAM.map((m) => (
          <div key={m.name} className="r" style={{ '--d': m.d, background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 16, padding: 22, textAlign: 'center' }}>
            <img src={`/assets/${m.img}`} alt={m.name} style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--cyan)', marginBottom: 12, display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
            <div style={{ fontWeight: 700, fontSize: 16, color: 'var(--ink)' }}>{m.name}</div>
            <div style={{ fontSize: 13, color: 'var(--ink2)' }}>Team Member</div>
          </div>
        ))}
      </div>
      <div className="r fade" style={{ '--d': '.78s', marginTop: 22, fontSize: 16, color: 'var(--ink2)', textAlign: 'center' }}>
        Supervised by <b style={{ color: 'var(--ink)' }}>Prof. Ossama Elnahas</b> &amp; <b style={{ color: 'var(--ink)' }}>Dr. Eman Shawky</b> 
      </div>
    </Slide>
  );
}

/* ─────────────────── 26 · THANKS ─────────────────── */
export function Thanks() {
  return (
    <Slide
      id="thanks"
      className="center"
      pre={<div className="cwash" />}
      si={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <img className="r zoom" src="/assets/hive-logo.png" alt="HIVE" style={{ height: 'clamp(100px,12vw,160px)', marginBottom: 22, animation: 'heroFloat 6s ease-in-out infinite', filter: 'drop-shadow(0 18px 36px rgba(0,132,184,.28))' }} />
      <h1 className="ttl r" style={{ '--d': '.12s' }}>Thank You.</h1>
      <p className="lead r" style={{ '--d': '.22s', fontSize: 'clamp(20px,2.2vw,30px)', fontWeight: 600, color: 'var(--ink)', marginTop: 14 }}>Questions?</p>
      <div className="r fade" style={{ '--d': '.34s', marginTop: 20, fontSize: 16, color: 'var(--ink2)' }}>Team Phoenix · No. 11 · Spring 2026</div>
      <div className="r" style={{ '--d': '.44s', marginTop: 24 }}>
        <a className="btn primary" href="#cover">Back to top ↑</a>
      </div>
    </Slide>
  );
}
