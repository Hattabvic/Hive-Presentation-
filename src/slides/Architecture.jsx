import Slide from '../components/Slide.jsx';

/* ════════════════════════════════════════════════════════════════
   Architecture deep-dive slides — dark themed, CSS grid/flexbox +
   stylized blocks, thin-stroke icons (no emojis). Tokens: --cyan/
   --green/--amber/--red, dark cards, .r reveal + --d delays.
   ════════════════════════════════════════════════════════════════ */

const DARK = '#111827';
const CARD_BORDER = '#334155';
const tint = (c, pct = 16) => `color-mix(in srgb, ${c} ${pct}%, #0a1420)`;

/* ── thin-stroke icon set (24×24) ── */
const ICONS = {
  crosshair: <><circle cx="12" cy="12" r="8" /><path d="M12 2v4M12 18v4M2 12h4M18 12h4" /><circle cx="12" cy="12" r="2" /></>,
  key: <><circle cx="7.5" cy="15.5" r="4.5" /><path d="M10.6 12.4 20 3M16.5 6.5l2.5 2.5M14 9l2.2 2.2" /></>,
  zap: <path d="M13 2 4 13h6l-1 9 9-11h-6l1-9Z" />,
  monitor: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></>,
  server: <><rect x="3" y="4" width="18" height="7" rx="1.5" /><rect x="3" y="13" width="18" height="7" rx="1.5" /><path d="M7 7.5h.01M7 16.5h.01" /></>,
  lock: <><rect x="4" y="10.5" width="16" height="10.5" rx="2" /><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" /></>,
  lockOpen: <><rect x="4" y="10.5" width="16" height="10.5" rx="2" /><path d="M8 10.5V7a4 4 0 0 1 7.7-1.4" /></>,
  terminal: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="m7 9 3 3-3 3M13 15h4" /></>,
  warning: <><path d="M10.3 3.9 2 18a2 2 0 0 0 1.7 3h16.6A2 2 0 0 0 22 18L13.7 3.9a2 2 0 0 0-3.4 0Z" /><path d="M12 9v4M12 17h.01" /></>,
  hexagon: <><path d="M12 2.5 20 7v10l-8 4.5L4 17V7l8-4.5Z" /><circle cx="12" cy="12" r="2.5" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4.5 20.5a7.5 7.5 0 0 1 15 0" /></>,
};

function Icon({ name, size = 22, color = 'currentColor', stroke = 1.7 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      {ICONS[name]}
    </svg>
  );
}

function Tag({ color, children, size = 12 }) {
  return (
    <div style={{ fontFamily: 'var(--fm)', fontSize: size, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color, display: 'flex', alignItems: 'center', gap: 8 }}>
      {children}
    </div>
  );
}

/* dark block node with icon badge + left accent */
function Node({ accent = 'var(--cyan)', iconName, iconColor, title, sub, glow = false, d, grow = false, dashed = false, style }) {
  const ic = iconColor || accent;
  return (
    <div
      className={`r${glow ? ' glow' : ''}`}
      style={{
        '--d': d,
        flex: grow ? '1 1 0' : '1 1 150px',
        minWidth: 0,
        background: DARK,
        border: dashed ? `2px dashed ${accent}` : `1px solid ${CARD_BORDER}`,
        borderLeft: dashed ? `2px dashed ${accent}` : `4px solid ${accent}`,
        borderRadius: 12,
        padding: '16px 18px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 7,
        ...style,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ width: 40, height: 40, borderRadius: 11, background: tint(ic, 18), display: 'grid', placeItems: 'center', flexShrink: 0 }}>
          <Icon name={iconName} color={ic} size={21} />
        </span>
        <span style={{ fontFamily: 'var(--fd)', fontSize: 18, fontWeight: 700, color: '#F0F4F8', lineHeight: 1.15 }}>{title}</span>
      </div>
      {sub && <span style={{ fontSize: 14, color: '#8BAEC4', lineHeight: 1.4 }}>{sub}</span>}
    </div>
  );
}

/* connector line + arrowhead */
function Arrow({ color = 'var(--cyanD)', vertical = false }) {
  if (vertical) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color, alignSelf: 'center' }}>
        <div style={{ width: 2, height: 18, background: 'currentColor', opacity: 0.55 }} />
        <span style={{ fontSize: 13, lineHeight: 0.5, marginTop: -2 }}>▼</span>
      </div>
    );
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', color, alignSelf: 'center', flex: '0 0 auto' }}>
      <div style={{ width: 26, height: 2, background: 'currentColor', opacity: 0.55 }} />
      <span style={{ fontSize: 15, lineHeight: 1, marginLeft: -2 }}>▶</span>
    </div>
  );
}

/* ─────────────── OS ECOSYSTEM & SECURE PORT MAPPING ─────────────── */
export function OsEcosystem() {
  return (
    <Slide id="os-ecosystem" className="wide">
      <div className="eyebrow r fade">System · OS &amp; Port Mapping</div>
      <h2 className="ttl r" style={{ '--d': '.06s', margin: '12px 0 6px' }}>
        The H.I.V.E. OS <span className="ac">Ecosystem</span>.
      </h2>
      <p className="lead r fade" style={{ '--d': '.12s', marginBottom: 24 }}>
        One offensive engine, one hardened target — and a hidden management port the attacker never sees.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 22, minHeight: '52vh', alignItems: 'stretch' }}>
        {/* LEFT · OFFENSIVE ENGINE */}
        <div className="r left" style={{ '--d': '.16s', minWidth: 0, background: 'var(--navy)', border: '1px solid #2a3550', borderTop: '4px solid var(--red)', borderRadius: 18, padding: '26px 24px', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div>
            <Tag color="var(--red)">Offensive Engine</Tag>
            <div style={{ fontFamily: 'var(--fd)', fontSize: 'clamp(22px,2vw,30px)', fontWeight: 800, color: '#F0F4F8', marginTop: 6 }}>
              Kali Linux <span style={{ color: 'var(--red)' }}>2024.x</span>
            </div>
            <div style={{ fontSize: 15, color: '#8BAEC4', marginTop: 5 }}>Pre-loaded offensive toolkit</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
            <Node grow d=".22s" accent="var(--red)" iconName="crosshair" title="Nmap" sub="Recon · port & service discovery" />
            <Node grow d=".30s" accent="var(--red)" iconName="key" title="Hydra" sub="Credential brute-force" />
            <Node grow d=".38s" accent="var(--red)" iconName="zap" title="Metasploit" sub="Exploit framework & payloads" />
          </div>
        </div>

        {/* RIGHT · DEFENSIVE TARGET (secure access only) */}
        <div className="r right" style={{ '--d': '.24s', minWidth: 0, background: 'var(--navy)', border: '1px solid #2a3550', borderTop: '4px solid var(--cyan)', borderRadius: 18, padding: '26px 24px', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div>
            <Tag color="var(--cyan)">Defensive Target</Tag>
            <div style={{ fontFamily: 'var(--fd)', fontSize: 'clamp(22px,2vw,30px)', fontWeight: 800, color: '#F0F4F8', marginTop: 6 }}>
              Raspbian OS <span style={{ color: 'var(--cyan)' }}>· ARM-optimized</span>
            </div>
            <div style={{ fontSize: 15, color: '#8BAEC4', marginTop: 5 }}>The real host is reachable through one hidden, key-only door.</div>
          </div>

          {/* SECURE MANAGEMENT ACCESS */}
          <div style={{ flex: 1, border: '1px solid rgba(0,255,159,.28)', background: 'rgba(0,255,159,.05)', borderRadius: 14, padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: 16, justifyContent: 'center' }}>
            <Tag color="var(--green)" size={13}><Icon name="lock" size={17} color="var(--green)" /> Secure Management Access</Tag>
            <div style={{ display: 'flex', alignItems: 'stretch', gap: 12, flexWrap: 'wrap' }}>
              <Node grow d=".34s" accent="var(--green)" iconName="server" title="Actual Server" sub="Real Raspbian host" />
              <Arrow color="var(--green)" />
              <Node grow glow d=".42s" accent="var(--green)" iconName="lock" title="Port 222" sub="Hidden SSH · key-only" />
              <Arrow color="var(--green)" />
              <Node grow d=".50s" accent="var(--green)" iconName="terminal" title="Mgmt Terminal" sub="Admin · full control" />
            </div>
            <div style={{ fontFamily: 'var(--fm)', fontSize: 13, color: '#7f93a8', letterSpacing: '.02em' }}>
              Key-based auth · non-standard port · never advertised.
            </div>
          </div>
        </div>
      </div>

      <div className="r fade" style={{ '--d': '.6s', marginTop: 20, display: 'inline-flex', alignItems: 'center', gap: 10, background: '#111827', border: '1px solid #334155', borderRadius: 12, padding: '12px 20px', fontSize: 16, color: '#cdd6e6' }}>
        <b style={{ color: 'var(--cyan)' }}>Secure by design:</b>&nbsp;the real host answers only on the hidden, key-only Port 222.
      </div>
    </Slide>
  );
}

/* ─────────────── DECEPTIVE LAYER ARCHITECTURE (COWRIE) ─────────────── */
const chip = (d, text) => (
  <span key={text} className="r" style={{ '--d': d, flex: '1 1 90px', textAlign: 'center', fontFamily: 'var(--fm)', fontSize: 12.5, color: '#cdd6e6', background: '#0a0f1c', border: '1px solid #1e2a3a', borderRadius: 9, padding: '10px 10px' }}>
    {text}
  </span>
);

export function CowrieMaze() {
  return (
    <Slide id="cowrie-maze" className="wide">
      <div className="eyebrow r fade">Deceptive Layer · Defense in Depth</div>
      <h2 className="ttl r" style={{ '--d': '.06s', margin: '12px 0 6px' }}>
        Inside the <span className="ac">Cowrie Maze</span>.
      </h2>
      <p className="lead r fade" style={{ '--d': '.12s', marginBottom: 24 }}>
        Every attacker path leads deeper into the trap — never into the real system.
      </p>

      <div style={{ display: 'flex', gap: 'clamp(16px,2vw,28px)', alignItems: 'stretch', flexWrap: 'wrap', minHeight: '54vh' }}>
        {/* ATTACKER INPUT */}
        <div className="r left" style={{ '--d': '.16s', flex: '0 0 210px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: DARK, border: '1px solid #334155', borderLeft: '4px solid var(--red)', borderRadius: 16, padding: '26px 22px', textAlign: 'center' }}>
          <span style={{ width: 60, height: 60, borderRadius: 15, background: tint('var(--red)'), display: 'grid', placeItems: 'center', margin: '0 auto 16px' }}>
            <Icon name="user" color="var(--red)" size={30} />
          </span>
          <div style={{ fontFamily: 'var(--fd)', fontSize: 21, fontWeight: 800, color: '#F0F4F8' }}>Attacker Input</div>
          <div style={{ fontSize: 14, color: '#8BAEC4', marginTop: 6 }}>SSH · Telnet probes</div>
        </div>

        <Arrow color="var(--red)" />

        {/* CORE · NESTED DECEPTIVE LAYERS */}
        <div className="r" style={{ '--d': '.24s', flex: '1 1 340px', minWidth: 0, border: '2px dashed var(--cyan)', background: 'var(--navy)', borderRadius: 18, padding: 20, display: 'flex', flexDirection: 'column' }}>
          <Tag color="var(--cyan)" size={13}>Deceptive Layer</Tag>
          <div style={{ flex: 1, border: '2px dashed var(--amber)', background: '#0a1420', borderRadius: 14, padding: 18, marginTop: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 16 }}>
            <Tag color="var(--amber)" size={13}>Least-Privilege Zone</Tag>
            <div className="r glow" style={{ '--d': '.34s', background: 'var(--navy)', border: '1px solid var(--cyan)', borderRadius: 14, padding: '24px 22px', textAlign: 'center' }}>
              <span style={{ width: 58, height: 58, borderRadius: 15, background: tint('var(--cyan)', 18), display: 'grid', placeItems: 'center', margin: '0 auto 14px' }}>
                <Icon name="hexagon" color="var(--cyan)" size={30} />
              </span>
              <div style={{ fontFamily: 'var(--fd)', fontSize: 'clamp(21px,2vw,28px)', fontWeight: 800, letterSpacing: '.04em', color: '#F0F4F8' }}>COWRIE HONEYPOT</div>
              <div style={{ fontSize: 15, color: 'var(--cyanl)', marginTop: 8, fontFamily: 'var(--fm)' }}>Fake shell · fake filesystem · full session capture</div>
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {chip('.42s', 'Emulated /bin')}
              {chip('.48s', 'Sandboxed FS')}
              {chip('.54s', 'No real exec')}
            </div>
          </div>
        </div>

        <Arrow color="var(--amber)" />

        {/* COWRIE USER · the attacker's vertical path into the trap */}
        <div className="r right" style={{ '--d': '.4s', flex: '1 1 300px', minWidth: 0, border: '1px solid #2a3550', background: 'var(--navy)', borderTop: '4px solid var(--amber)', borderRadius: 18, padding: '22px 22px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 13, marginBottom: 2 }}>
            <span style={{ width: 48, height: 48, borderRadius: 13, background: tint('var(--amber)'), display: 'grid', placeItems: 'center', flexShrink: 0 }}>
              <Icon name="user" color="var(--amber)" size={25} />
            </span>
            <div>
              <div style={{ fontFamily: 'var(--fd)', fontSize: 22, fontWeight: 800, letterSpacing: '.02em', color: '#F0F4F8' }}>COWRIE USER</div>
              <div style={{ fontSize: 13.5, color: '#8BAEC4', marginTop: 2 }}>How an attacker is lured in</div>
            </div>
          </div>
          <Node grow d=".46s" accent="var(--amber)" iconName="lockOpen" title="Port 22 (Public)" sub="Standard SSH · exposed" />
          <Arrow vertical color="var(--amber)" />
          <Node grow d=".54s" accent="var(--red)" iconName="warning" title="Attacker Exposure" sub="Unlocked · fully watched" />
          <Arrow vertical color="var(--red)" />
          <Node grow d=".62s" accent="var(--red)" iconName="hexagon" title="Cowrie Honeypot" sub="Isolated deceptive layer" dashed style={{ background: 'rgba(255,0,60,.07)', boxShadow: '0 0 18px rgba(255,0,60,.22)' }} />
        </div>
      </div>

      {/* SECURE MGMT · full-width, air-gapped from the attacker flow */}
      <div className="r fade" style={{ '--d': '.66s', marginTop: 18, border: '1px solid rgba(0,255,159,.4)', background: '#111827', borderRadius: 14, padding: '16px 22px', display: 'flex', alignItems: 'center', gap: 18 }}>
        <span style={{ width: 46, height: 46, borderRadius: 13, background: 'rgba(0,255,159,.14)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
          <Icon name="lock" color="var(--green)" size={23} stroke={1.9} />
        </span>
        <div>
          <div style={{ fontFamily: 'var(--fm)', fontSize: 13, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: 4 }}>
            Secure MGMT · Air-gapped · Port 222 Mapping
          </div>
          <div style={{ fontSize: 17, color: '#cdd6e6', lineHeight: 1.45 }}>
            The real management channel is <b style={{ color: '#F0F4F8' }}>completely separated</b> from the attacker flow — no bridge, ever.
          </div>
        </div>
      </div>
    </Slide>
  );
}
