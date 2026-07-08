import { useEffect, useRef, useState } from 'react';

/* React port of the `Siem` live-simulation module from site.js. */

const PROTO = [
  { k: 'SSH', c: '#00C8FF' },
  { k: 'HTTP', c: '#7FE4FF' },
  { k: 'SMB', c: '#FFCE6A' },
  { k: 'FTP', c: '#9B8CFF' },
  { k: 'Telnet', c: '#FF7B81' },
  { k: 'MySQL', c: '#5BA8FF' },
];
const PORT = { SSH: 2222, HTTP: 80, SMB: 445, FTP: 21, Telnet: 2223, MySQL: 3306 };
const SEED_BARS = [2, 5, 3, 7, 4, 8, 6, 9, 5, 7, 4, 6];
const SPEEDS = { slow: 2200, normal: 1300, fast: 600 };

const pad = (n) => ('0' + n).slice(-2);
const rint = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
const randIp = () => `${rint(1, 223)}.${rint(0, 255)}.${rint(0, 255)}.${rint(1, 254)}`;

function makeEvent() {
  const p = PROTO[Math.floor(Math.random() * (Math.random() < 0.4 ? 3 : PROTO.length))];
  const sev = Math.random() < 0.25 ? 'hi' : Math.random() < 0.5 ? 'md' : 'lo';
  const now = new Date();
  const ts = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  return { id: Math.random().toString(36).slice(2), proto: p.k, ip: randIp(), sev, ts };
}

const C = 2 * Math.PI * 50; // donut circumference (r = 50)

export default function SiemDashboard({ active }) {
  const initCounts = () => PROTO.reduce((a, p) => ((a[p.k] = 0), a), {});
  const [feed, setFeed] = useState([]);
  const [bars, setBars] = useState(SEED_BARS);
  const [counts, setCounts] = useState(initCounts);
  const [tally, setTally] = useState({});
  const [total, setTotal] = useState(0);
  const [running, setRunning] = useState(false);
  const [speed, setSpeed] = useState('normal');
  const seededRef = useRef(false);

  // Apply a single simulated event to all derived state.
  const step = () => {
    const ev = makeEvent();
    setFeed((f) => [ev, ...f].slice(0, 7));
    setBars((b) => {
      const nb = b.slice();
      nb[nb.length - 1] += 1;
      if (Math.random() < 0.3) {
        nb.shift();
        nb.push(0);
      }
      return nb;
    });
    setCounts((c) => ({ ...c, [ev.proto]: (c[ev.proto] || 0) + 1 }));
    setTally((t) => {
      const nt = { ...t, [ev.ip]: (t[ev.ip] || 0) + 1 };
      const ks = Object.keys(nt);
      if (ks.length > 40) delete nt[ks[0]];
      return nt;
    });
    setTotal((n) => n + 1);
  };

  // Start when the slide is active (seeding a few rows the first time); pause otherwise.
  useEffect(() => {
    if (active) {
      if (!seededRef.current) {
        seededRef.current = true;
        for (let i = 0; i < 4; i++) step();
      }
      setRunning(true);
    } else {
      setRunning(false);
    }
  }, [active]); // eslint-disable-line react-hooks/exhaustive-deps

  // Drive the interval while running.
  useEffect(() => {
    if (!running) return;
    const t = setInterval(step, SPEEDS[speed]);
    return () => clearInterval(t);
  }, [running, speed]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── derived render data ──
  const maxBar = Math.max(...bars) || 1;
  const usedProtos = PROTO.filter((p) => counts[p.k] > 0);
  const sum = usedProtos.reduce((a, p) => a + counts[p.k], 0) || 1;
  let off = 0;
  const donutSegs = usedProtos.map((p) => {
    const len = (counts[p.k] / sum) * C;
    const seg = { c: p.c, dash: `${len} ${C - len}`, offset: -off };
    off += len;
    return seg;
  });
  const top = Object.keys(tally)
    .map((ip) => ({ ip, n: tally[ip] }))
    .sort((a, b) => b.n - a.n)
    .slice(0, 5);
  const topMax = top.length ? top[0].n : 1;

  const kpi = (val, color, label, key) => (
    <div key={key} style={{ background: '#111827', border: '1px solid #334155', borderRadius: 8, padding: 10, textAlign: 'center' }}>
      <div style={{ fontFamily: 'var(--fm)', fontSize: 20, fontWeight: 700, color }}>{val}</div>
      <div style={{ fontSize: 10, color: '#8BAEC4', marginTop: 3 }}>{label}</div>
    </div>
  );

  return (
    <div className="siem r" style={{ '--d': '.2s' }}>
      <div className="siem-top">
        <div className="siem-brand"><span className="hx">⬡</span> H.I.V.E. SIEM Solution</div>
        <div className="slive"><span className="lv" />LIVE · {total.toLocaleString()} events</div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
          <button className="sbtn" onClick={() => setSpeed('slow')} style={speed === 'slow' ? { background: '#2c3454', color: '#fff' } : undefined}>Slow</button>
          <button className="sbtn" onClick={() => setSpeed('normal')} style={speed === 'normal' ? { background: '#2c3454', color: '#fff' } : undefined}>Normal</button>
          <button className="sbtn" onClick={() => setSpeed('fast')} style={speed === 'fast' ? { background: '#2c3454', color: '#fff' } : undefined}>Fast</button>
        </div>
      </div>
      <div className="siem-body">
        <div className="siem-col">
          <div className="spanel" style={{ paddingBottom: 8 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8, marginBottom: 10 }}>
              {kpi('247', '#F0F4F8', 'Total', 'k1')}
              {kpi('12', 'var(--red)', 'Critical', 'k2')}
              {kpi('6', 'var(--cyan)', 'Attackers', 'k3')}
              {kpi('4', 'var(--amber)', 'Protocols', 'k4')}
            </div>
          </div>
          <div className="spanel">
            <div className="sh">
              <svg viewBox="0 0 24 24"><path d="M4 17v4M4 17a8 8 0 0 1 16 0M9 9h.01M15 9h.01" /></svg>Live Attack Feed
            </div>
            <div className="sfeed">
              {feed.map((ev) => (
                <div className="sfrow" key={ev.id}>
                  <span className="ft">{ev.ts}</span>
                  <span className="fip">{ev.ip}</span>
                  <span className="fpr">{ev.proto}:{PORT[ev.proto]}</span>
                  <span className={`ssev ${ev.sev}`}>{ev.sev === 'hi' ? 'CRIT' : ev.sev === 'md' ? 'WARN' : 'INFO'}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="spanel">
            <div className="sh">
              <svg viewBox="0 0 24 24"><path d="M3 3v18h18" /><path d="m7 14 3-4 3 3 4-6" /></svg>Attack Timeline
            </div>
            <div className="sbars">
              {bars.map((b, i) => (
                <div key={i} className="b" style={{ height: Math.max(4, (b / maxBar) * 100) + '%' }} />
              ))}
            </div>
          </div>
        </div>
        <div className="siem-col">
          <div className="spanel">
            <div className="sh">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 3a9 9 0 0 1 9 9h-9Z" /></svg>Protocol Distribution
            </div>
            <div className="sdonut-wrap">
              <svg className="sdonut" viewBox="0 0 116 116">
                <circle cx="58" cy="58" r="50" stroke="#232a44" style={{ strokeDasharray: `${C} ${C}` }} />
                {donutSegs.map((s, i) => (
                  <circle key={i} cx="58" cy="58" r="50" stroke={s.c} style={{ strokeDasharray: s.dash, strokeDashoffset: s.offset }} />
                ))}
              </svg>
              <div className="slegend">
                {PROTO.map((p) => (
                  <div key={p.k}><span className="sw" style={{ background: p.c }} />{p.k}<b>{counts[p.k]}</b></div>
                ))}
              </div>
            </div>
          </div>
          <div className="spanel">
            <div className="sh">
              <svg viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h12" /></svg>Top Attacker IPs
            </div>
            <div className="stoplist">
              {top.map((r, i) => (
                <div className="tr" key={r.ip}>
                  <span className="rk">#{i + 1}</span>
                  <span className="ip">{r.ip}</span>
                  <span className="ct">{r.n}</span>
                  <span className="bg2"><i style={{ width: (r.n / topMax) * 100 + '%' }} /></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
