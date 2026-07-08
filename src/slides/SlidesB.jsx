import Slide from '../components/Slide.jsx';
import KitCarousel from '../components/KitCarousel.jsx';
import { DIONAEA_PORTS } from '../data/content.js';

const tint = (c, pct = 20) => `color-mix(in srgb, ${c} ${pct}%, #0a1420)`;

/* ─────────────────────────── 12 · SECTION BREAK ─────────────────────────── */
export function Break() {
  return (
    <Slide
      id="brk"
      className="ctr"
      pre={<div className="cover-wash" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 56% 52% at 50% 40%,rgba(0,200,255,.12),transparent 70%)' }} />}
    >
      <div className="r fade" style={{ fontFamily: 'var(--fm)', fontWeight: 700, fontSize: 'clamp(88px,16vw,260px)', lineHeight: 1, color: 'var(--cyanD)' }}>02</div>
      <div className="eyebrow r" style={{ '--d': '.1s', justifyContent: 'center' }}>Part Two</div>
      <h1 className="ttl r" style={{ '--d': '.18s', marginTop: 10 }}>Technical Overview.</h1>
      <p className="lead r" style={{ '--d': '.28s', marginTop: 16 }}>How we built it — product by product.</p>
    </Slide>
  );
}

/* ─────────────────────────── 13 · KIT DESIGN ─────────────────────────── */
export function Kit() {
  return (
    <Slide id="kit" className="wide" si={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(28px,4vw,64px)', alignItems: 'center' }}>
      <KitCarousel />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div className="eyebrow r fade">Product 01</div>
        <h2 className="ttl r" style={{ '--d': '.08s' }}>The Physical Kit.</h2>
        <p className="lead r" style={{ '--d': '.16s' }}>Laser-cut clear acrylic · sloped touchscreen · sliding service door.</p>
        <div className="r" style={{ '--d': '.24s', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span className="pill" style={{ justifyContent: 'flex-start' }}>2× Raspberry Pi 4 Model B</span>
          <span className="pill" style={{ justifyContent: 'flex-start' }}>TP-Link SG2210P PoE switch</span>
          <span className="pill" style={{ justifyContent: 'flex-start' }}>12″ touchscreen</span>
          <span className="pill" style={{ justifyContent: 'flex-start' }}>Custom acrylic enclosure</span>
        </div>
     
      </div>
    </Slide>
  );
}

/* ─────────────────────────── 14 · SYSTEM ARCHITECTURE ─────────────────────────── */
function ArchNode({ d, accent, tag, name, desc, icon }) {
  return (
    <div className="r" style={{ '--d': d, background: 'var(--navy)', border: '1px solid #2a3550', borderTop: `3px solid ${accent}`, borderRadius: 16, padding: '24px 20px', textAlign: 'left' }}>
      <div style={{ width: 46, height: 46, borderRadius: 12, background: tint(accent), display: 'grid', placeItems: 'center', marginBottom: 12 }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.8">{icon}</svg>
      </div>
      <div style={{ fontFamily: 'var(--fm)', fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: accent, marginBottom: 8 }}>{tag}</div>
      <div style={{ fontFamily: 'var(--fm)', fontSize: 'clamp(14px,1.2vw,17px)', fontWeight: 700, color: '#F0F4F8', marginBottom: 6 }}>{name}</div>
      <div style={{ fontSize: 14, lineHeight: 1.4, color: '#8BAEC4' }}>{desc}</div>
    </div>
  );
}
function Connector({ delay }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100%', height: 3, background: 'repeating-linear-gradient(90deg,rgba(0,200,255,.5) 0 6px,transparent 6px 12px)', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '50%', left: 0, width: 10, height: 10, borderRadius: '50%', background: 'var(--cyan)', boxShadow: '0 0 10px var(--cyan)', transform: 'translateY(-50%)', animation: `pktFlow 2s linear ${delay} infinite` }} />
      </div>
    </div>
  );
}
export function Arch() {
  return (
    <Slide id="arch" className="wide ctr">
      <div className="eyebrow r fade" style={{ justifyContent: 'center' }}>System Architecture</div>
      <h2 className="ttl r" style={{ '--d': '.07s', margin: '14px 0 24px' }}>
        Three nodes. One live <span className="ac">attack chain</span>.
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 48px 1fr 48px 1fr', alignItems: 'stretch', gap: 0, marginBottom: 20 }}>
        <ArchNode d=".14s" accent="var(--red)" tag="Attacker Node" name="Kali Linux · RPi 4" desc="Launches real exploit tooling at the trap." icon={<><path d="M12 2 4 6v6c0 5 3.4 8.4 8 10 4.6-1.6 8-5 8-10V6l-8-4Z" /><path d="m15 9-6 6M9 9l6 6" /></>} />
        <Connector delay="0s" />
        <ArchNode d=".22s" accent="var(--cyan)" tag="Managed Switch" name="TP-Link SG2210P" desc="PoE routes all traffic." icon={<><rect x="3" y="4" width="18" height="7" rx="1" /><rect x="3" y="13" width="18" height="7" rx="1" /><path d="M7 7.5h.01M7 16.5h.01" /></>} />
        <Connector delay=".7s" />
        <ArchNode d=".3s" accent="var(--green)" tag="Honeypot Node" name="Raspbian · Cowrie/Dionaea" desc="Logs everything an attacker does." icon={<><path d="m12 2 7 4v6c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-4Z" /><path d="m9 12 2 2 4-4" /></>} />
      </div>
      <div className="r fade" style={{ '--d': '.42s', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 3, height: 30, background: 'repeating-linear-gradient(180deg,rgba(0,200,255,.5) 0 6px,transparent 6px 12px)', position: 'relative' }}>
          <div style={{ position: 'absolute', left: '50%', top: 0, width: 10, height: 10, borderRadius: '50%', background: 'var(--cyan)', boxShadow: '0 0 10px var(--cyan)', transform: 'translateX(-50%)', animation: 'pktDown 2.4s linear .6s infinite' }} />
        </div>
        <div style={{ background: 'var(--navy)', border: '1px solid #2a3550', borderRadius: 14, padding: '16px 28px', fontFamily: 'var(--fm)', fontSize: 15, fontWeight: 700, color: 'var(--cyan)' }}>SIEM Dashboard · Real-time</div>
      </div>
      <div className="r fade" style={{ '--d': '.52s', display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 16, fontSize: 16, fontWeight: 600, color: 'var(--cyan)', background: 'var(--navy)', border: '1px solid rgba(0,200,255,.3)', borderRadius: 12, padding: '11px 20px' }}>
        ⬡ Fully isolated  zero risk to real networks.
      </div>
    </Slide>
  );
}

/* ─────────────────────────── 16 · DIONAEA ─────────────────────────── */
export function Dionaea() {
  return (
    <Slide id="dionaea" className="wide" si={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(28px,4vw,64px)', alignItems: 'center' }}>
      <div className="r left" style={{ '--d': '.16s', position: 'relative', width: '100%', maxWidth: 440, aspectRatio: 1, margin: '0 auto' }}>
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: 110, height: 110, borderRadius: '50%', background: 'var(--navy)', color: '#F0F4F8', display: 'grid', placeItems: 'center', textAlign: 'center', fontFamily: 'var(--fd)', fontWeight: 700, fontSize: 16, boxShadow: '0 0 0 8px rgba(0,200,255,.15)', zIndex: 2 }}>DIONAEA</div>
        {DIONAEA_PORTS.map((p) => (
          <div key={p.label} style={{ position: 'absolute', left: p.left, top: p.top, transform: 'translate(-50%,-50%)', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 8, padding: '5px 12px', fontFamily: 'var(--fm)', fontSize: 13, fontWeight: 700, color: 'var(--ink)' }}>{p.label}</div>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div className="eyebrow r fade">Product 03 · Honeypot</div>
        <h2 className="ttl r" style={{ '--d': '.08s' }}>
          Dionaea the <span className="ac">multi-protocol</span> trap.
        </h2>
        <p className="lead r" style={{ '--d': '.16s' }}>Captures malware payloads, ransomware-style SMB exploits, and SQL-injection attempts.</p>
        <div className="r" style={{ '--d': '.26s', background: 'var(--bg2)', border: '1px solid var(--border)', borderLeft: '4px solid var(--cyan)', borderRadius: 12, padding: '18px 22px' }}>
          <div style={{ fontFamily: 'var(--fm)', fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--cyanD)', marginBottom: 8 }}>Challenge solved</div>
          <p style={{ fontSize: 17, color: 'var(--ink2)', lineHeight: 1.5 }}>x86 malware on ARM? Solved with a <b style={{ color: 'var(--ink)' }}>Libemu</b> emulation layer, compiled from source.</p>
        </div>
        
      </div>
    </Slide>
  );
}

/* ─────────────────────────── 17 · CONFIGURATION & ZERO-TOUCH PROVISIONING ─────────────────────────── */
const PROV_STEPS = [
  { n: '01', accent: '#94A3B8', name: 'My Role', desc: 'Configuration Engineer in H.I.V.E.', icon: <><circle cx="12" cy="8" r="4" /><path d="M4 21v-1c0-3.3 3.6-6 8-6s8 2.7 8 6v1" /><path d="m17.8 14.6.6 1.3 1.4.2-1 1 .2 1.4-1.2-.7-1.2.7.2-1.4-1-1 1.4-.2Z" /></> },
  { n: '02', accent: 'var(--cyan)', name: 'Build', desc: 'Build a Plug-and-Play system.', icon: <><circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" /></> },
  { n: '03', accent: 'var(--green)', name: 'Auto-Start', desc: 'Auto-start Cowrie and Dionaea Honeypots on boot.', icon: <><rect x="3" y="4" width="18" height="6" rx="1" /><rect x="3" y="14" width="18" height="6" rx="1" /><path d="M7 7h.01M7 17h.01" /></> },
  { n: '04', accent: 'var(--amber)', name: 'Monitor', desc: 'Use Cron Job to monitor system resources continuously.', icon: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></> },
  { n: '05', accent: 'var(--purple)', name: 'Ready to Use', desc: 'Plug in power and the lab is ready.', icon: <><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></> },
];
const PROV_VALUE = [
  { label: 'Zero setup time', icon: <><circle cx="12" cy="13" r="8" /><path d="M12 9v4l2.5 1.5M9 3h6M12 3v2" /></> },
  { label: 'Start the lab immediately', icon: <><path d="M5 19c3-1 5-3 6-6 3-1 6-4 7-8-4 1-7 4-8 7-3 1-5 3-6 6Z" /><circle cx="15" cy="9" r="1.4" /></> },
  { label: 'Simple & stable experience', icon: <><path d="M12 2 4 6v6c0 5 3.5 8.4 8 10 4.5-1.6 8-5 8-10V6l-8-4Z" /><path d="m9 12 2 2 4-4" /></> },
];
export function Provisioning() {
  return (
    <Slide id="provisioning" className="wide ctr">
      <div className="eyebrow r fade" style={{ justifyContent: 'center' }}>Automation · Zero-Touch</div>
      <h2 className="ttl r" style={{ '--d': '.07s', margin: '14px 0 26px' }}>
        Configuration &amp; <span className="ac">Zero-Touch</span> Provisioning.
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 36px 1fr 36px 1fr 36px 1fr 36px 1fr', alignItems: 'stretch', gap: 0, marginBottom: 26 }}>
        {PROV_STEPS.map((s, i) => (
          <div key={s.n} style={{ display: 'contents' }}>
            <ArchNode d={`${0.14 + i * 0.08}s`} accent={s.accent} tag={`Step ${s.n}`} name={s.name} desc={s.desc} icon={s.icon} />
            {i < PROV_STEPS.length - 1 && <Connector delay={`${i * 0.5}s`} />}
          </div>
        ))}
      </div>
      <div className="r fade" style={{ '--d': '.62s', background: 'var(--navy)', border: '1px solid #2a3550', borderRadius: 16, padding: '18px 28px', display: 'flex', alignItems: 'center', gap: 'clamp(18px,3vw,36px)', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: tint('var(--cyan)'), display: 'grid', placeItems: 'center', flexShrink: 0 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.8"><path d="M12 2 4 6v6c0 5 3.5 8.4 8 10 4.5-1.6 8-5 8-10V6l-8-4Z" /></svg>
          </div>
          <div style={{ fontFamily: 'var(--fm)', fontSize: 13, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--cyan)' }}>Business Value</div>
        </div>
        {PROV_VALUE.map((v) => (
          <div key={v.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8BAEC4" strokeWidth="1.8">{v.icon}</svg>
            <span style={{ fontSize: 15, fontWeight: 600, color: '#F0F4F8' }}>{v.label}</span>
          </div>
        ))}
      </div>
    </Slide>
  );
}

/* ─────────────────── 17b · HARDWARE PROTECTION & ENTERPRISE ACCESSIBILITY ─────────────────── */
const HW_STEPS = [
  { name: 'Safe Shutdown', accent: '#94A3B8', desc: 'Developed hive-off.sh for automatic safe shutdown.', icon: <><path d="M12 2v8" /><path d="M18.4 6.6a9 9 0 1 1-12.8 0" /></> },
  { name: 'SSH Key Authentication', accent: 'var(--cyan)', desc: 'Used SSH Keys to execute shutdown securely.', icon: <><circle cx="7" cy="14" r="3" /><path d="m9.5 11.5 9-9M16 5l3 3" /></> },
  { name: 'Protect SD Card', accent: 'var(--green)', desc: 'Protects Raspberry Pi SD Cards. Reduces maintenance cost.', icon: <><path d="M12 2 4 6v6c0 5 3.5 8.4 8 10 4.5-1.6 8-5 8-10V6l-8-4Z" /><path d="m9 12 2 2 4-4" /></> },
];
const ENT_STEPS = [
  { name: 'Public Domain & DNS Setup', accent: 'var(--purple)', desc: 'Configured a Public Domain and DNS Resolution.', icon: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.5-4-9s1.5-6.5 4-9Z" /></> },
  { name: 'Access via Domain', accent: 'var(--cyanD)', desc: 'Users access the SIEM dashboard using a domain instead of an IP address.', icon: <><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M8 22h8M12 18v4" /></> },
  { name: 'Enterprise Experience', accent: 'var(--cyan)', desc: 'Easier access — a professional, enterprise-like user experience.', icon: <><circle cx="9" cy="8" r="3" /><path d="M2 20c0-3.3 3-6 7-6s7 2.7 7 6" /><circle cx="18" cy="9" r="2.2" /><path d="M16.5 13.2c2.4.3 4.5 1.8 4.5 4.3" /></> },
];
function MiniNode({ d, accent, name, desc, icon }) {
  return (
    <div className="r" style={{ '--d': d, background: 'var(--navy)', border: '1px solid #2a3550', borderTop: `3px solid ${accent}`, borderRadius: 14, padding: '16px 14px', textAlign: 'left' }}>
      <div style={{ width: 36, height: 36, borderRadius: 10, background: tint(accent), display: 'grid', placeItems: 'center', marginBottom: 10 }}>
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.8">{icon}</svg>
      </div>
      <div style={{ fontFamily: 'var(--fm)', fontSize: 12.5, fontWeight: 700, color: '#F0F4F8', marginBottom: 5, lineHeight: 1.25 }}>{name}</div>
      <div style={{ fontSize: 12, lineHeight: 1.4, color: '#8BAEC4' }}>{desc}</div>
    </div>
  );
}
function MiniConnector() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2.4"><path d="M4 12h14M13 6l6 6-6 6" /></svg>
    </div>
  );
}
function ValueCard({ d, accent, points }) {
  return (
    <div className="r" style={{ '--d': d, background: 'var(--navy)', border: '1px solid #2a3550', borderLeft: `4px solid ${accent}`, borderRadius: 14, padding: '14px 18px', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
      <div style={{ width: 32, height: 32, borderRadius: '50%', background: tint(accent), border: `2px solid ${accent}`, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2"><path d="M12 2 4 6v6c0 5 3.5 8.4 8 10 4.5-1.6 8-5 8-10V6l-8-4Z" /></svg>
      </div>
      <div>
        <div style={{ fontFamily: 'var(--fm)', fontSize: 11.5, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: accent, marginBottom: 6 }}>Business Value</div>
        <ul style={{ margin: 0, paddingLeft: 16, fontSize: 13.5, lineHeight: 1.5, color: '#8BAEC4' }}>
          {points.map((p) => <li key={p}>{p}</li>)}
        </ul>
      </div>
    </div>
  );
}
export function HwEnterprise() {
  return (
    <Slide id="hw-access" className="wide">
      <div className="eyebrow r fade">Hardware &amp; Access</div>
      <h2 className="ttl r" style={{ '--d': '.07s', margin: '14px 0 24px' }}>
        Hardware Protection &amp; <span className="ac">Enterprise Accessibility</span>.
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(24px,3.5vw,48px)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <span className="pill r fade" style={{ '--d': '.12s', alignSelf: 'flex-start' }}>Hardware Protection</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 22px 1fr 22px 1fr', gap: 0 }}>
            {HW_STEPS.map((s, i) => (
              <div key={s.name} style={{ display: 'contents' }}>
                <MiniNode d={`${0.18 + i * 0.08}s`} accent={s.accent} name={s.name} desc={s.desc} icon={s.icon} />
                {i < HW_STEPS.length - 1 && <MiniConnector />}
              </div>
            ))}
          </div>
          <ValueCard d=".46s" accent="var(--green)" points={['Protects Raspberry Pi SD Cards', 'Reduces maintenance cost', 'Provides One-Click Shutdown']} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <span className="pill r fade" style={{ '--d': '.16s', alignSelf: 'flex-start' }}>Enterprise Accessibility</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 22px 1fr 22px 1fr', gap: 0 }}>
            {ENT_STEPS.map((s, i) => (
              <div key={s.name} style={{ display: 'contents' }}>
                <MiniNode d={`${0.24 + i * 0.08}s`} accent={s.accent} name={s.name} desc={s.desc} icon={s.icon} />
                {i < ENT_STEPS.length - 1 && <MiniConnector />}
              </div>
            ))}
          </div>
          <ValueCard d=".5s" accent="var(--purple)" points={['Easier access', 'Professional, enterprise-like user experience']} />
        </div>
      </div>
    </Slide>
  );
}
