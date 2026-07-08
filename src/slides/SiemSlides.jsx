import Slide from '../components/Slide.jsx';
import SiemDashboard from '../components/SiemDashboard.jsx';
import { PIPELINE, VIZ_WHY } from '../data/content.js';

const tint = (c, pct = 20) => `color-mix(in srgb, ${c} ${pct}%, #0a1420)`;

/* ─────────────────── 17 · SIEM BACKEND 1 — PROBLEM + HEART ─────────────────── */
function ProblemRow({ accent, title, body }) {
  return (
    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
      <div style={{ width: 38, height: 38, borderRadius: 10, background: tint(accent), display: 'grid', placeItems: 'center', flexShrink: 0 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2"><path d="M3 3v18h18" /><path d="m7 14 3-4 3 3 4-6" /></svg>
      </div>
      <div>
        <div style={{ fontWeight: 700, fontSize: 17, color: '#F0F4F8', marginBottom: 4 }}>{title}</div>
        <div style={{ fontSize: 15, color: '#8BAEC4', lineHeight: 1.5 }}>{body}</div>
      </div>
    </div>
  );
}
export function SiemB1() {
  return (
    <Slide id="siem-b1" className="wide">
      <div className="eyebrow r fade">SIEM Solution · Backend · 1 of 2</div>
      <h2 className="ttl r" style={{ '--d': '.07s', margin: '14px 0 8px' }}>
        From <span className="ac">Raw Chaos</span> to Intelligence.
      </h2>
      <p className="lead r fade" style={{ '--d': '.14s', marginBottom: 28 }}>Every attack leaves a trail. The problem: nobody could read it.</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 28 }}>
        {/* PROBLEM */}
        <div className="r" style={{ '--d': '.18s', background: 'var(--navy)', border: '1px solid #2a3550', borderTop: '4px solid #E5484D', borderRadius: 16, padding: '28px 26px' }}>
          <div style={{ fontFamily: 'var(--fm)', fontSize: 12, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: '#E5484D', marginBottom: 18 }}>The Problem</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <ProblemRow accent="#E5484D" title="Raw Logs Flood" body="Every packet logged — massive, unstructured, chaotic data. Impossible to analyze manually." />
            <ProblemRow accent="#E5484D" title="The Black Box Problem" body="Admin stares at meaningless data. No visibility, no context, no priority. Real threats buried in noise." />
          </div>
        </div>
        {/* SOLUTION */}
        <div className="r" style={{ '--d': '.26s', background: 'var(--navy)', border: '1px solid #2a3550', borderTop: '4px solid var(--cyan)', borderRadius: 16, padding: '28px 26px' }}>
          <div style={{ fontFamily: 'var(--fm)', fontSize: 12, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: 18 }}>The SIEM Heart</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: tint('var(--cyan)'), display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 17, color: '#F0F4F8', marginBottom: 4 }}>Attacker Fingerprint</div>
                <div style={{ fontSize: 15, color: '#8BAEC4', lineHeight: 1.5 }}>A unique digital fingerprint extracted for each attacker — dissecting behavior to understand how they think.</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: tint('var(--cyan)'), display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2"><path d="M12 2 4 6v6c0 5 3.4 8.4 8 10 4.6-1.6 8-5 8-10V6l-8-4Z" /><path d="m9 12 2 2 4-4" /></svg>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 17, color: '#F0F4F8', marginBottom: 4 }}>Data Life Cycle</div>
                <div style={{ fontSize: 15, color: '#8BAEC4', lineHeight: 1.5 }}>From the moment of breach to an interactive story on the dashboard — precise analysis of events for every port.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="r" style={{ '--d': '.36s', background: 'var(--navy)', border: '1px solid #2a3550', borderRadius: 14, padding: '22px 28px', display: 'flex', alignItems: 'center', gap: 24 }}>
        <div style={{ width: 52, height: 52, borderRadius: 14, background: tint('var(--cyan)'), display: 'grid', placeItems: 'center', flexShrink: 0 }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.8"><path d="m4 17 6-6-6-6M12 19h8" /></svg>
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 18, color: '#F0F4F8', marginBottom: 4 }}>The Strategy: Deliberately Misconfigured Server</div>
          <div style={{ fontSize: 16, color: '#8BAEC4', lineHeight: 1.5 }}>Acting as a professional honeytrap (Cowrie + Dionaea) — anticipating attackers, guarding sensitive ports. Not just data collection — <b style={{ color: 'var(--cyan)' }}>precise analysis of events for every port.</b></div>
        </div>
      </div>
    </Slide>
  );
}

/* ─────────────────── 18 · SIEM BACKEND 2 — DATA LIFE CYCLE ─────────────────── */
const PIPE_ICONS = {
  SOURCE: <><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5" /><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3" /></>,
  PROCESS: <><circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" /></>,
  TRANSPORT: <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />,
  OUTPUT: <><path d="M3 3v18h18" /><path d="M8 17v-6M13 17V8M18 17v-3" /></>,
};
function PipeArrow({ delay }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
      <div style={{ width: '100%', height: 3, background: 'repeating-linear-gradient(90deg,rgba(0,200,255,.5) 0 6px,transparent 6px 12px)', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '50%', width: 10, height: 10, borderRadius: '50%', background: 'var(--cyan)', boxShadow: '0 0 10px var(--cyan)', transform: 'translateY(-50%)', animation: `pktFlow 2s linear ${delay} infinite` }} />
      </div>
    </div>
  );
}
export function SiemB2() {
  const delays = ['0s', '.7s', '1.4s'];
  return (
    <Slide id="siem-b2" className="wide">
      <div className="eyebrow r fade">SIEM Solution · Backend · 2 of 2</div>
      <h2 className="ttl r" style={{ '--d': '.07s', margin: '14px 0 32px' }}>
        The <span className="ac">Data Life Cycle</span>.
      </h2>
      <div className="r" style={{ '--d': '.14s', display: 'grid', gridTemplateColumns: '1fr 48px 1fr 48px 1fr 48px 1fr', alignItems: 'center', gap: 0, marginBottom: 32 }}>
        {PIPELINE.map((node, i) => (
          <div key={node.tag} style={{ display: 'contents' }}>
            <div style={{ background: '#0D1B2A', border: '1px solid rgba(0,200,255,.3)', borderTop: `3px solid ${node.color}`, borderRadius: 14, padding: '24px 20px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--fm)', fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: node.color, marginBottom: 10 }}>{node.tag}</div>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: tint(node.color), display: 'grid', placeItems: 'center', margin: '0 auto 10px' }}>
                <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke={node.color} strokeWidth="1.8">{PIPE_ICONS[node.tag]}</svg>
              </div>
              <div style={{ fontFamily: 'var(--fm)', fontSize: 15, fontWeight: 700, color: '#F0F4F8' }}>{node.title}</div>
              <div style={{ fontSize: 13, color: '#8BAEC4', marginTop: 6 }} dangerouslySetInnerHTML={{ __html: node.sub }} />
            </div>
            {i < PIPELINE.length - 1 && <PipeArrow delay={delays[i]} />}
          </div>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
        {[
          { n: '01', d: '.28s', title: 'No Refresh · No Delay', body: 'Data appears on screen the instant an attack happens — zero polling interval.' },
          { n: '02', d: '.38s', title: 'Permanent Connection', body: 'WebSocket opens a direct, persistent tunnel between server and dashboard — no repeated HTTP handshakes.' },
          { n: '03', d: '.48s', title: 'Real-Time Transfer', body: 'The moment an attack happens, data transfers — from honeypot log to interactive dashboard event in milliseconds.' },
        ].map((c) => (
          <div key={c.n} className="r" style={{ '--d': c.d, background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 14, padding: '22px 24px' }}>
            <div style={{ fontFamily: 'var(--fm)', fontSize: 32, fontWeight: 700, color: 'var(--cyanD)', marginBottom: 10 }}>{c.n}</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>{c.title}</div>
            <p style={{ fontSize: 16, lineHeight: 1.5, color: 'var(--ink2)' }}>{c.body}</p>
          </div>
        ))}
      </div>
    </Slide>
  );
}

/* ─────────────────── 19 · SIEM FRONTEND 1 — LIVE DASHBOARD ─────────────────── */
export function SiemF1({ active }) {
  return (
    <Slide id="siem-f1" className="wide">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', marginBottom: 16 }}>
        <div>
          <div className="eyebrow r fade">SIEM Solution · Frontend · Slide 1 of 2</div>
          <h2 className="ttl r" style={{ '--d': '.07s', fontSize: 'clamp(28px,3.2vw,48px)', marginTop: 10 }}>
            The Live <span className="ac">Dashboard</span>.
          </h2>
        </div>
        <div className="r fade" style={{ '--d': '.15s', fontFamily: 'var(--fm)', fontSize: 13, color: 'var(--ink3)' }}>
          {active ? '▶ Streaming live' : '⏸ Paused'}
        </div>
      </div>
      <SiemDashboard active={active} />
      <div className="tchip r fade" style={{ '--d': '.4s', borderColor: 'var(--cyan)', background: 'var(--tint)', color: 'var(--ink2)' }}>
        <b style={{ color: 'var(--cyanD)' }}>Built by:</b> Abdelrahman Ahmed · Abdelrahman Hossam · Norhan Ossama
      </div>
    </Slide>
  );
}

/* ─────────────────── 20 · SIEM FRONTEND 2 — VIZ CHOICES ─────────────────── */
const VIZ_MINIS = {
  'Stat': (
    <>
      <rect x="2" y="12" width="55" height="40" rx="6" fill="rgba(0,200,255,.08)" stroke="rgba(0,200,255,.45)" />
      <text x="29.5" y="34" fill="#7FE4FF" fontSize="14" fontWeight="700" textAnchor="middle" fontFamily="monospace">1.2K</text>
      <text x="29.5" y="46" fill="#8BAEC4" fontSize="6.5" letterSpacing=".08em" textAnchor="middle">ATTACKS</text>
      <rect x="63" y="12" width="55" height="40" rx="6" fill="rgba(255,0,60,.08)" stroke="rgba(255,0,60,.45)" />
      <text x="90.5" y="34" fill="#ff5c7c" fontSize="14" fontWeight="700" textAnchor="middle" fontFamily="monospace">37</text>
      <text x="90.5" y="46" fill="#8BAEC4" fontSize="6.5" letterSpacing=".08em" textAnchor="middle">CRITICAL</text>
    </>
  ),
  'Trend': (
    <>
      {[{ x: 6, h: 14 }, { x: 22, h: 24 }, { x: 38, h: 18 }, { x: 54, h: 30 }, { x: 70, h: 24 }, { x: 86, h: 38 }].map((b) => (
        <rect key={b.x} x={b.x} y={54 - b.h} width="12" height={b.h} rx="2" fill="rgba(255,183,3,.65)" />
      ))}
      <rect x="102" y="6" width="12" height="48" rx="2" fill="#ff003c" />
      <line x1="2" y1="55" x2="118" y2="55" stroke="#334155" strokeWidth="1.5" />
    </>
  ),
  'Composition': (
    <>
      <circle cx="42" cy="32" r="19" fill="none" stroke="#ff003c" strokeWidth="9" strokeDasharray="47.8 119.4" transform="rotate(-90 42 32)" />
      <circle cx="42" cy="32" r="19" fill="none" stroke="#FFB703" strokeWidth="9" strokeDasharray="35.8 119.4" strokeDashoffset="-47.8" transform="rotate(-90 42 32)" />
      <circle cx="42" cy="32" r="19" fill="none" stroke="#00C8FF" strokeWidth="9" strokeDasharray="35.8 119.4" strokeDashoffset="-83.6" transform="rotate(-90 42 32)" />
      <text x="42" y="36" fill="#F0F4F8" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="monospace">82</text>
      <text x="76" y="22" fill="#ff5c7c" fontSize="7" fontFamily="monospace">■ HIGH</text>
      <text x="76" y="34" fill="#FFB703" fontSize="7" fontFamily="monospace">■ MED</text>
      <text x="76" y="46" fill="#7FE4FF" fontSize="7" fontFamily="monospace">■ LOW</text>
    </>
  ),
  'Breakdown': (
    <>
      {[{ y: 6, w: 84, c: '#00C8FF', l: 'SSH' }, { y: 20, w: 58, c: '#ff003c', l: 'SMB' }, { y: 34, w: 40, c: '#FFB703', l: 'HTTP' }, { y: 48, w: 24, c: '#8b5cf6', l: 'FTP' }].map((b) => (
        <g key={b.l}>
          <text x="2" y={b.y + 8} fill="#8BAEC4" fontSize="7" fontFamily="monospace">{b.l}</text>
          <rect x="28" y={b.y} width={b.w} height="10" rx="3" fill={b.c} opacity=".75" />
        </g>
      ))}
    </>
  ),
  'Feed': (
    <>
      {[{ y: 6, c: '#00ff9f' }, { y: 22, c: '#ff003c' }, { y: 38, c: '#00ff9f' }].map((r) => (
        <g key={r.y}>
          <rect x="2" y={r.y} width="116" height="13" rx="4" fill="rgba(255,255,255,.05)" stroke="#334155" strokeWidth=".8" />
          <circle cx="11" cy={r.y + 6.5} r="2.8" fill={r.c} />
          <rect x="20" y={r.y + 4} width="34" height="5" rx="2.5" fill="#8BAEC4" opacity=".55" />
          <rect x="60" y={r.y + 4} width="22" height="5" rx="2.5" fill="#8BAEC4" opacity=".35" />
          <rect x="88" y={r.y + 4} width="24" height="5" rx="2.5" fill={r.c} opacity=".5" />
        </g>
      ))}
    </>
  ),
  'Deep-dive': (
    <>
      <rect x="2" y="4" width="116" height="56" rx="6" fill="rgba(255,255,255,.04)" stroke="#334155" strokeWidth=".8" />
      <text x="10" y="19" fill="#7FE4FF" fontSize="9" fontFamily="monospace">{'{'}</text>
      <text x="20" y="31" fill="#FFB703" fontSize="8" fontFamily="monospace">"src_ip": "10.0.0.7",</text>
      <text x="20" y="43" fill="#FFB703" fontSize="8" fontFamily="monospace">"proto": "ssh"</text>
      <text x="10" y="55" fill="#7FE4FF" fontSize="9" fontFamily="monospace">{'}'}</text>
    </>
  ),
};
export function SiemF2() {
  return (
    <Slide id="siem-f2" className="wide">
      <div className="eyebrow r fade">SIEM Solution · Frontend · Slide 2 of 2</div>
      <h2 className="ttl r" style={{ '--d': '.07s', margin: '12px 0 8px' }}>
        Why each <span className="ac">visualization</span>?
      </h2>
      <p className="lead r fade" style={{ '--d': '.15s', marginBottom: 14 }}>Every UI choice has a reason — matched to how beginners interpret threat data.</p>
      <div className="vzwhy">
        {VIZ_WHY.map((v, i) => (
          <div key={v.name} className="vzw r" style={{ '--c': v.c, '--d': `${0.2 + i * 0.08}s`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
            <div style={{ minWidth: 0 }}>
              <div className="vzn">{v.name} <span>{v.tag}</span></div>
              <p>{v.body}</p>
            </div>
            <svg width="120" height="64" viewBox="0 0 120 64" style={{ flexShrink: 0 }}>{VIZ_MINIS[v.tag]}</svg>
          </div>
        ))}
      </div>
    </Slide>
  );
}
