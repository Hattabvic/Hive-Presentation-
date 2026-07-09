import Slide from "../components/Slide.jsx";
import CountUp from "../components/CountUp.jsx";
import {
  INDEX_LEFT,
  INDEX_RIGHT,
  PRODUCTS,
  ROADMAP,
  CALLOUTS,
} from "../data/content.js";

/* ─────────────────────────── 01 · COVER ─────────────────────────── */
export function Cover() {
  return (
    <Slide id="cover" className="ctr">
      <img
        className="r zoom"
        src="/assets/hive-logo.png"
        alt="HIVE logo"
        style={{
          height: "clamp(110px,14vw,190px)",
          marginBottom: 20,
          filter: "drop-shadow(0 16px 32px rgba(0,200,255,.28))",
          animation: "heroFloat 5s ease-in-out infinite",
        }}
      />
      <h1
        className="ttl r"
        style={{
          "--d": ".12s",
          fontSize: "clamp(44px,7vw,108px)",
          letterSpacing: "-.02em",
          lineHeight: 1.02,
        }}
      >
        H.I.V.E. <span className="ac">KIT</span>
      </h1>
      <div
        className="r fade"
        style={{
          "--d": ".22s",
          fontSize: "clamp(17px,1.6vw,26px)",
          color: "var(--ink2)",
          maxWidth: 800,
          lineHeight: 1.5,
          margin: "16px auto 28px",
        }}
      >
        Cybersecurity Educational Emulation Module
      </div>
      <div
        className="r"
        style={{
          "--d": ".32s",
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: 28,
        }}
      >
        <span className="pill">Real attack traffic</span>
        <span className="pill">Fully isolated</span>
        <span className="pill">Zero setup</span>
      </div>
      <div
        className="r fade"
        style={{
          "--d": ".42s",
          fontSize: "clamp(15px,1.2vw,19px)",
          color: "var(--ink3)",
          lineHeight: 1.7,
        }}
      >
        <b style={{ color: "var(--ink2)" }}>Team Phoenix — Team No. 11</b>
        <br />
        Supervised by Prof. Ossama Elnahas &amp; Dr. Eman Shawky
        <br />
      </div>
    </Slide>
  );
}

/* ─────────────────────────── 02 · INDEX ─────────────────────────── */
function IndexItem({ item, goToId }) {
  return (
    <div className="idx-item" onClick={() => goToId(item.goto)}>
      <span
        style={{
          fontFamily: "var(--fm)",
          color: "var(--cyanD)",
          fontWeight: 600,
          minWidth: 28,
          fontSize: 15,
        }}
      >
        {item.n}
      </span>
      <span style={{ fontSize: "clamp(17px,1.5vw,22px)", fontWeight: 600 }}>
        {item.label}
      </span>
    </div>
  );
}
export function Index({ goToId }) {
  const colHead = {
    fontFamily: "var(--fm)",
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: ".14em",
    textTransform: "uppercase",
    color: "var(--cyanD)",
    marginBottom: 16,
    paddingBottom: 12,
    borderBottom: "1px solid var(--border)",
  };
  return (
    <Slide id="index" className="ctr">
      <div className="eyebrow r fade">Index</div>
      <h2 className="ttl r" style={{ "--d": ".06s", margin: "14px 0 28px" }}>
        What we'll cover.
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(24px,4vw,70px)",
          textAlign: "left",
          width: "100%",
        }}
      >
        <div className="r left" style={{ "--d": ".14s" }}>
          <div style={colHead}>Business Overview</div>
          {INDEX_LEFT.map((it) => (
            <IndexItem key={it.n} item={it} goToId={goToId} />
          ))}
        </div>
        <div className="r right" style={{ "--d": ".22s" }}>
          <div style={colHead}>Technical Overview</div>
          {INDEX_RIGHT.map((it) => (
            <IndexItem key={it.n} item={it} goToId={goToId} />
          ))}
        </div>
      </div>
    </Slide>
  );
}

/* ─────────────────────────── 03 · HOOK · LEARNING RETENTION ─────────────────────────── */
const RETENTION = [
  { d: ".15s", pct: 5, label: "Lecture", sub: "Passive Learning", hero: false },
  {
    d: ".25s",
    pct: 10,
    label: "Reading",
    sub: "Passive Learning",
    hero: false,
  },
  {
    d: ".35s",
    pct: 75,
    label: "Practical Emulation",
    sub: "Active Hands-on Learning",
    hero: true,
  },
];
export function RetentionHook({ active }) {
  return (
    <Slide id="hook-retention" className="wide ctr">
      <div className="eyebrow r fade">The Hook · Learning Retention</div>
      <h2 className="ttl r" style={{ "--d": ".07s", margin: "14px 0 30px" }}>
        Students remember what they <span className="ac">do</span>.
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
          alignItems: "stretch",
        }}
      >
        {RETENTION.map((m) => (
          <div
            key={m.label}
            className="r"
            style={{
              "--d": m.d,
              background: "var(--bg2)",
              borderLeft: "1px solid var(--border)",
              borderRight: "1px solid var(--border)",
              borderBottom: "1px solid var(--border)",
              borderTop: m.hero
                ? "4px solid var(--cyan)"
                : "4px solid var(--red)",
              borderRadius: 18,
              padding: "38px 24px 30px",
              boxShadow: m.hero ? "0 0 25px var(--cyanglow)" : "none",
              opacity: m.hero ? 1 : 0.72,
            }}
          >
            <div
              style={{
                fontFamily: "var(--fm)",
                fontWeight: 900,
                fontSize: "clamp(68px,10vw,140px)",
                lineHeight: 1,
                letterSpacing: "-.03em",
                color: m.hero ? "var(--cyanD)" : "var(--red)",
              }}
            >
              <CountUp target={m.pct} suf="%" active={active} />
            </div>
            <div
              style={{
                fontFamily: "var(--fd)",
                fontWeight: 800,
                fontSize: "clamp(18px,1.6vw,26px)",
                color: "var(--ink)",
                marginTop: 18,
              }}
            >
              {m.label}
            </div>
            <div
              style={{
                fontFamily: "var(--fm)",
                fontSize: 13,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: m.hero ? "var(--cyanD)" : "var(--ink3)",
                marginTop: 8,
              }}
            >
              {m.sub}
            </div>
          </div>
        ))}
      </div>
      <div
        className="r fade"
        style={{
          "--d": ".5s",
          fontFamily: "var(--fm)",
          fontSize: 12.5,
          color: "var(--ink3)",
          marginTop: 28,
        }}
      >
        Source: NTL Institute for Applied Behavioral Science · Learning
        Retention Pyramid
      </div>
    </Slide>
  );
}

/* ─────────────────────────── 04 · PROBLEM ─────────────────────────── */
const PROBLEM_CARDS = [
  {
    d: ".16s",
    accent: "var(--red)",
    bg: "rgba(214,40,40,.12)",
    tag: "Too Expensive",
    big: "$10,000+/year",
    body: "Cloud cyber ranges cost ten thousand dollars a year, per school far beyond a classroom budget.",
    icon: (
      <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    ),
  },
  {
    d: ".26s",
    accent: "var(--amber)",
    bg: "rgba(255,183,3,.12)",
    tag: "Too Fake",
    big: "Scripted attacks",
    body: "VM labs run predictable, canned attacks  students see right through them and learn nothing real.",
    icon: (
      <>
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
        <path d="m4 4 16 16" />
      </>
    ),
  },
  {
    d: ".36s",
    accent: "var(--cyan)",
    bg: "rgba(0,200,255,.12)",
    tag: "Too Complex",
    big: "Experts only",
    body: "Real honeypots demand seasoned Linux admins  not curious teenagers in a classroom.",
    icon: <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />,
  },
];
export function Problem() {
  return (
    <Slide id="problem" className="wide">
      <div className="eyebrow r fade">The Problem</div>
      <h2 className="ttl r" style={{ "--d": ".07s", margin: "16px 0 10px" }}>
        Schools can't teach <span className="ac">real</span> cyber defense.
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 22,
          marginTop: 18,
        }}
      >
        {PROBLEM_CARDS.map((c) => (
          <div
            key={c.tag}
            className="r flip"
            style={{
              "--d": c.d,
              background: "var(--bg2)",
              border: "1px solid var(--border)",
              borderTop: `4px solid ${c.accent}`,
              borderRadius: 16,
              padding: "28px 24px",
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 13,
                background: c.bg,
                display: "grid",
                placeItems: "center",
                marginBottom: 16,
              }}
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke={c.accent === "var(--cyan)" ? "var(--cyanD)" : c.accent}
                strokeWidth="1.8"
              >
                {c.icon}
              </svg>
            </div>
            <div
              style={{
                fontFamily: "var(--fm)",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                color: c.accent,
                marginBottom: 10,
              }}
            >
              {c.tag}
            </div>
            <div
              style={{
                fontFamily: "var(--fd)",
                fontSize: "clamp(20px,1.8vw,26px)",
                fontWeight: 700,
                marginBottom: 10,
              }}
            >
              {c.big}
            </div>
            <p style={{ fontSize: 17, lineHeight: 1.55, color: "var(--ink2)" }}>
              {c.body}
            </p>
          </div>
        ))}
      </div>
      <div
        className="r fade"
        style={{
          "--d": ".48s",
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          marginTop: 22,
          background: "rgba(214,40,40,.07)",
          border: "1px solid rgba(214,40,40,.25)",
          borderRadius: 12,
          padding: "13px 22px",
          fontSize: 17,
          fontWeight: 600,
          color: "var(--ink)",
        }}
      >
        Result: students graduate having{" "}
        <b style={{ color: "var(--red)" }}>&nbsp;never seen a real attack.</b>
      </div>
    </Slide>
  );
}

/* ─────────────────────────── 05 · SOLUTION ─────────────────────────── */
export function Solution() {
  return (
    <Slide
      id="solution"
      className="wide"
      si={{
        display: "grid",
        gridTemplateColumns: "1fr 1.05fr",
        gap: "clamp(30px,5vw,72px)",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <div className="eyebrow r fade">The Solution</div>
        <h2 className="ttl r" style={{ "--d": ".08s" }}>
          A flight simulator for <span className="ac">cybersecurity</span>.
        </h2>
        <p className="lead r" style={{ "--d": ".18s" }}>
          A portable, plug-and-play lab where students watch{" "}
          <b>real attacks happen</b> safely, in a sealed environment.
        </p>
        <div
          className="r"
          style={{ "--d": ".28s", display: "flex", gap: 10, flexWrap: "wrap" }}
        >
          <span className="pill">Real attack traffic</span>
          <span className="pill">Fully isolated</span>
          <span className="pill">Zero setup</span>
        </div>
      </div>
      <figure
        className="r right"
        style={{
          "--d": ".16s",
          margin: 0,
          borderRadius: 16,
          overflow: "hidden",
          border: "1px solid var(--border)",
          boxShadow: "0 22px 56px rgba(0,200,255,.12)",
          background: "#060a12",
        }}
      >
        <img
          src="/assets/kit-blue.png"
          alt="The HIVE kit"
          style={{
            display: "block",
            width: "100%",
            aspectRatio: "3/2",
            objectFit: "cover",
          }}
        />
        <figcaption
          style={{
            padding: "12px 18px",
            background: "var(--bg2)",
            fontSize: 15,
            color: "var(--ink2)",
          }}
        >
          The H.I.V.E. kit — a self-contained acrylic cyber-lab.
        </figcaption>
      </figure>
    </Slide>
  );
}

/* ─────────────────────────── 06 · PRODUCT ─────────────────────────── */
const PRODUCT_ICONS = {
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M8 22h8M12 18v4" />
    </>
  ),
  terminal: <path d="m4 17 6-6-6-6M12 19h8" />,
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="m7 14 3-4 3 3 4-6" />
    </>
  ),
  book: (
    <>
      <path d="M4 5a2 2 0 0 1 2-2h7v18H6a2 2 0 0 1-2-2Z" />
      <path d="M13 3h5a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5" />
    </>
  ),
};
export function Product() {
  return (
    <Slide id="product" className="wide ctr">
      <div className="eyebrow r fade">The Product</div>
      <h2 className="ttl r" style={{ "--d": ".07s", margin: "14px 0 24px" }}>
        One kit. <span className="ac">Four</span> products.
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 16,
          width: "100%",
        }}
      >
        {PRODUCTS.map((p, i) => (
          <div
            key={p.n}
            className="pcard r"
            style={{ "--d": `${0.14 + i * 0.08}s` }}
          >
            <div className="pico">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--cyanD)"
                strokeWidth="1.8"
              >
                {PRODUCT_ICONS[p.icon]}
              </svg>
            </div>
            <div className="pn">{p.n}</div>
            <h4>{p.title}</h4>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </Slide>
  );
}

/* ─────────────────────────── 07 · AUDIENCE ─────────────────────────── */
const AUDIENCE = [
  {
    d: ".2s",
    delay: "0s",
    tag: "Tile 01",
    title: "Students · 13–16",
    body: "The first-ever security platform built for their age group.",
    icon: (
      <>
        <path d="M22 10 12 5 2 10l10 5 10-5Z" />
        <path d="M6 12v5c0 1 2.5 3 6 3s6-2 6-3v-5" />
      </>
    ),
  },
  {
    d: ".3s",
    delay: ".6s",
    tag: "Tile 02",
    title: "Schools & STEM",
    body: "An affordable lab station — no IT department required.",
    icon: <path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h2M9 13h2M13 9h2M13 13h2" />,
  },
  {
    d: ".4s",
    delay: "1.2s",
    tag: "Tile 03",
    title: "Instructors",
    body: "A plug-and-play demo tool for live classroom sessions.",
    icon: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6M9 13l2 2 4-4" />
      </>
    ),
  },
];
export function Audience() {
  return (
    <Slide id="audience" className="wide ctr">
      <div className="eyebrow r fade">Target Audience</div>
      <h2 className="ttl r" style={{ "--d": ".07s", margin: "14px 0 8px" }}>
        Built for the generation <span className="ac">everyone forgot</span>.
      </h2>
      <p className="lead r fade" style={{ "--d": ".15s", marginBottom: 22 }}>
        Ages 13–16 are almost entirely excluded from real security tools today.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 22,
          width: "100%",
        }}
      >
        {AUDIENCE.map((a) => (
          <div
            key={a.tag}
            className="r"
            style={{
              "--d": a.d,
              background: "var(--bg2)",
              border: "1px solid var(--border)",
              borderRadius: 16,
              padding: "30px 26px",
              textAlign: "left",
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                background: "rgba(0,200,255,.1)",
                display: "grid",
                placeItems: "center",
                marginBottom: 14,
                animation: `floaty 4.5s ease-in-out ${a.delay} infinite`,
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--cyanD)"
                strokeWidth="1.7"
              >
                {a.icon}
              </svg>
            </div>
            <div
              style={{
                fontFamily: "var(--fm)",
                fontSize: 12,
                color: "var(--cyanD)",
                fontWeight: 700,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              {a.tag}
            </div>
            <div
              style={{
                fontFamily: "var(--fd)",
                fontSize: 22,
                fontWeight: 700,
                marginBottom: 10,
              }}
            >
              {a.title}
            </div>
            <p style={{ fontSize: 17, lineHeight: 1.5, color: "var(--ink2)" }}>
              {a.body}
            </p>
          </div>
        ))}
      </div>
    </Slide>
  );
}



/* ─────────────────────────── 08 · MARKET ─────────────────────────── */
const FUNNEL = [
  {
    d: ".16s",
    tag: "TAM",
    width: "100%",
    inset: "8%",
    bg: "rgba(0,200,255,.08)",
    line: "All pre-university & STEM institutions in Egypt.",
  },
  {
    d: ".26s",
    tag: "SAM",
    width: "84%",
    inset: "9.5%",
    bg: "rgba(0,200,255,.16)",
    line: "Institutions already investing in STEM equipment & tech training.",
  },
  {
    d: ".36s",
    tag: "SOM",
    width: "68%",
    inset: "11.5%",
    bg: "rgba(0,200,255,.28)",
    line: "Year-1 pilot cohort in Alexandria & Cairo tech hubs.",
  },
];
const BUYERS = [
  {
    label: "Schools",
    icon: <path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h2M9 13h2M13 9h2M13 13h2" />,
  },
  {
    label: "STEM Centers",
    icon: (
      <>
        <path d="M10 2v6L4 19a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3L14 8V2" />
        <path d="M8.5 2h7" />
      </>
    ),
  },
  {
    label: "Universities",
    icon: (
      <>
        <path d="M22 10 12 5 2 10l10 5 10-5Z" />
        <path d="M6 12v5c0 1 2.5 3 6 3s6-2 6-3v-5" />
      </>
    ),
  },
  {
    label: "Tech Clubs",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
      </>
    ),
  },
];
export function Market() {
  return (
    <Slide id="market" className="wide ctr">
      <div className="eyebrow r fade">Market Opportunity</div>
      <h2 className="ttl r" style={{ "--d": ".07s", margin: "14px 0 26px" }}>
        Cybersecurity education has no <span className="ac">hands-on tool</span>{" "}
        in Egypt.
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          width: "100%",
          maxWidth: 940,
          margin: "0 auto",
        }}
      >
        {FUNNEL.map((f) => (
          <div
            key={f.tag}
            className="r"
            style={{
              "--d": f.d,
              width: f.width,
              background: f.bg,
              clipPath: `polygon(0 0, 100% 0, calc(100% - ${f.inset}) 100%, ${f.inset} 100%)`,
              padding: "15px 13%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
            }}
          >
            <span
              style={{
                fontFamily: "var(--fm)",
                fontWeight: 800,
                fontSize: "clamp(20px,1.9vw,27px)",
                letterSpacing: ".06em",
                color: "var(--cyanD)",
                flexShrink: 0,
              }}
            >
              {f.tag}
            </span>
            <span
              style={{
                fontSize: "clamp(16px,1.6vw,22px)",
                fontWeight: 600,
                color: "var(--ink)",
                lineHeight: 1.3,
              }}
            >
              {f.line}
            </span>
          </div>
        ))}
      </div>
      <div
        className="r"
        style={{
          "--d": ".46s",
          display: "flex",
          justifyContent: "center",
          gap: "clamp(20px,3.5vw,54px)",
          marginTop: 26,
        }}
      >
        {BUYERS.map((b) => (
          <div
            key={b.label}
            style={{ display: "flex", alignItems: "center", gap: 10 }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 11,
                background: "rgba(0,200,255,.1)",
                display: "grid",
                placeItems: "center",
              }}
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--cyanD)"
                strokeWidth="1.8"
              >
                {b.icon}
              </svg>
            </div>
            <span
              style={{
                fontFamily: "var(--fm)",
                fontSize: 13.5,
                fontWeight: 600,
                color: "var(--ink2)",
              }}
            >
              {b.label}
            </span>
          </div>
        ))}
      </div>
      <div
        className="r fade"
        style={{
          "--d": ".58s",
          fontFamily: "var(--fd)",
          fontSize: "clamp(17px,1.6vw,23px)",
          fontWeight: 700,
          marginTop: 26,
        }}
      >
        Cybersecurity is taught in theory —{" "}
        <span style={{ color: "var(--cyanD)" }}>HIVE makes it hands-on.</span>
      </div>
    </Slide>
  );
}

/* ─────────────────────────── 09 · VIABILITY ─────────────────────────── */
const VIABILITY = [
  {
    d: ".16s",
    delay: "0s",
    tag: "Technical",
    line: "Working prototype — RPi 4 kiosk, dual honeypots, live SIEM dashboard. A built system, not a concept.",
    icon: (
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z" />
    ),
  },
  {
    d: ".28s",
    delay: ".6s",
    tag: "Business Model",
    line: "One-time kit sale to institutions + optional curriculum & training licensing.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M14.5 8.5c-.5-1-1.5-1.5-2.5-1.5-1.5 0-2.5 1-2.5 2.25S10.5 11.5 12 12s2.5 1 2.5 2.25S13.5 16.5 12 16.5c-1 0-2-.5-2.5-1.5M12 5.5V7M12 17v1.5" />
      </>
    ),
  },
  {
    d: ".4s",
    delay: "1.2s",
    tag: "Cost vs. Market",
    line: "Commodity hardware keeps costs low vs. imported training kits — priced within institutional budgets.",
    icon: (
      <>
        <path d="M12 3v18M7 21h10" />
        <path d="M7 7 3 13a4 4 0 0 0 8 0L7 7ZM17 7l-4 6a4 4 0 0 0 8 0l-4-6Z" />
        <path d="M7 7h10" />
      </>
    ),
  },
];
export function Viability() {
  return (
    <Slide id="viability" className="wide ctr">
      <div className="eyebrow r fade">Market Viability</div>
      <h2 className="ttl r" style={{ "--d": ".07s", margin: "14px 0 30px" }}>
        Built. Tested. <span className="ac">Ready to scale.</span>
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 22,
          width: "100%",
        }}
      >
        {VIABILITY.map((v) => (
          <div
            key={v.tag}
            className="r"
            style={{
              "--d": v.d,
              background: "var(--bg2)",
              border: "1px solid var(--border)",
              borderRadius: 16,
              padding: "30px 26px",
              textAlign: "left",
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                background: "rgba(0,200,255,.1)",
                display: "grid",
                placeItems: "center",
                marginBottom: 14,
                animation: `floaty 4.5s ease-in-out ${v.delay} infinite`,
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--cyanD)"
                strokeWidth="1.7"
              >
                {v.icon}
              </svg>
            </div>
            <div
              style={{
                fontFamily: "var(--fd)",
                fontSize: 22,
                fontWeight: 700,
                marginBottom: 10,
              }}
            >
              {v.tag}
            </div>
            <p
              style={{ fontSize: 16.5, lineHeight: 1.5, color: "var(--ink2)" }}
            >
              {v.line}
            </p>
          </div>
        ))}
      </div>
    </Slide>
  );
}

/* ─────────────────────────── 10 · WHY ─────────────────────────── */
const WHY_ROWS = [
  {
    challenge: "Complex setup",
    solution: "Plug & Play Deployment",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </>
    ),
  },
  {
    challenge: "High deployment cost",
    solution: "Affordable Hardware Kit",
    icon: (
      <>
        <path d="M8 7h8a3 3 0 0 1 0 6h-8a3 3 0 0 1 0-6z" />
        <path d="M12 10v4" />
        <path d="M10 12h4" />
      </>
    ),
  },
  {
    challenge: "Theory-focused learning",
    solution: "Hands-on Cyber Labs",
    icon: (
      <>
        <path d="M5 6h14v12H5z" />
        <path d="M9 6v12M5 10h14" />
      </>
    ),
  },
  {
    challenge: "Internet dependency",
    solution: "Fully Offline Operation",
    icon: (
      <>
        <path d="M7 15a5 5 0 0 1 10 0h1a4 4 0 0 0-8 0H7Z" />
        <path d="M3 3l18 18" />
      </>
    ),
  },
  {
    challenge: "Limited attack visibility",
    solution: "Live Attack Traffic & SIEM",
    icon: (
      <>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
  {
    challenge: "Multiple disconnected tools",
    solution: "Integrated All-in-One Kit",
    icon: (
      <>
        <path d="M5 7h4v4H5zM15 7h4v4h-4zM5 13h4v4H5zM15 13h4v4h-4z" />
      </>
    ),
  },
];

export function Why() {
  return (
    <Slide id="why" className="wide">
      <div className="eyebrow r fade">Why HIVE Stands Out</div>
      <h2 className="ttl r" style={{ "--d": ".07s", margin: "16px 0 18px" }}>
        Everything Students Need. <span className="ac">In One Kit.</span>
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1px 1fr",
          gap: 20,
          width: "100%",
          alignItems: "stretch",
        }}
      >
        {/* LEFT COLUMN: CHALLENGE */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            background: "var(--bg2)",
            border: "1px solid var(--border)",
            borderRadius: 18,
            overflow: "hidden",
            boxShadow: "0 2px 16px rgba(0,0,0,.05)",
          }}
        >
          <div
            style={{
              padding: "18px 22px",
              background: "rgba(0,200,255,.06)",
              fontFamily: "var(--fm)",
              fontSize: 15,
              fontWeight: 800,
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "var(--cyanD)",
            }}
          >
            Challenge
          </div>
          <div style={{ display: "grid", gap: 12, padding: "18px", flex: 1 }}>
            {WHY_ROWS.map((row, index) => (
              <div
                key={row.challenge}
                style={{
                  display: "grid",
                  gridTemplateColumns: "44px 1fr",
                  gap: 14,
                  alignItems: "center", // Changed to center
                  minHeight: 76, // Added consistent min-height
                  padding: "14px 12px",
                  background: "rgba(255,255,255,.05)",
                  borderRadius: 14,
                  border: "1px solid rgba(0,200,255,.08)",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 14,
                    background: "rgba(0,200,255,.12)",
                    display: "flex", // Changed to flex for perfect centering
                    justifyContent: "center",
                    alignItems: "center",
                    fontFamily: "var(--fd)",
                    fontWeight: 800,
                    fontSize: 20, // Increased size
                    lineHeight: 1, // Ensures perfect vertical alignment
                    color: "var(--cyanD)",
                  }}
                >
                  {index + 1}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--fd)",
                      fontSize: 18,
                      fontWeight: 700,
                      lineHeight: 1.4,
                      color: "var(--ink)",
                    }}
                  >
                    {row.challenge}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div
          style={{ width: 1, background: "var(--border)", borderRadius: 999 }}
        />

        {/* RIGHT COLUMN: SOLUTION */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            background: "var(--bg2)",
            border: "1px solid var(--border)",
            borderRadius: 18,
            overflow: "hidden",
            boxShadow: "0 2px 16px rgba(0,0,0,.05)",
          }}
        >
          <div
            style={{
              padding: "18px 22px",
              background: "rgba(0,200,255,.06)",
              fontFamily: "var(--fm)",
              fontSize: 15,
              fontWeight: 800,
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "var(--cyanD)",
            }}
          >
            How HIVE Solves It
          </div>
          <div style={{ display: "grid", gap: 12, padding: "18px" }}>
            {WHY_ROWS.map((row) => (
              <div
                key={row.challenge}
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "center", // Changed to center
                  minHeight: 76, // Added consistent min-height to match left column
                  padding: "14px 12px",
                  background: "rgba(255,255,255,.05)",
                  borderRadius: 14,
                  border: "1px solid rgba(0,200,255,.08)",
                }}
              >
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 10,
                    background: "var(--cyan)",
                    display: "flex", // Changed to flex for perfect centering
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    fontSize: 18,
                    fontWeight: 700,
                    lineHeight: 1, // Ensures perfect vertical alignment
                  }}
                >
                  ✓
                </div>
                <div
                  style={{
                    fontFamily: "var(--fd)",
                    fontSize: 16,
                    fontWeight: 700,
                    color: "var(--ink)",
                  }}
                >
                  {row.solution}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}

/* ─────────────────────────── 07b · COST STRUCTURE ─────────────────────────── */
const COST_ROWS = [
  { d: ".18s", label: "Hardware", value: 31715 },
  { d: ".28s", label: "Software & Tools", value: 0 },
  { d: ".38s", label: "Operations", value: 2850 },
];
export function Cost({ active }) {
  return (
    <Slide id="cost" className="wide ctr">
      <div className="eyebrow r fade">Cost Structure</div>
      <h2 className="ttl r" style={{ "--d": ".07s", margin: "14px 0 30px" }}>
        Total <span className="ac">project cost</span>.
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          width: "100%",
          maxWidth: 880,
          margin: "0 auto",
        }}
      >
        {COST_ROWS.map((r) => (
          <div
            key={r.label}
            className="r"
            style={{
              "--d": r.d,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "var(--bg2)",
              border: "1px solid var(--border)",
              borderRadius: 14,
              padding: "20px 30px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--fd)",
                fontWeight: 700,
                fontSize: "clamp(20px,2vw,28px)",
                color: "var(--ink)",
              }}
            >
              {r.label}
            </span>
            <span
              style={{
                fontFamily: "var(--fm)",
                fontWeight: 700,
                fontSize: "clamp(28px,2.8vw,42px)",
                color: "var(--ink)",
                lineHeight: 1,
              }}
            >
              <CountUp target={r.value} sep active={active} />{" "}
              <span style={{ fontSize: ".5em", color: "var(--ink3)" }}>
                EGP
              </span>
            </span>
          </div>
        ))}
        <div
          className="r"
          style={{
            "--d": ".5s",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "var(--navy)",
            borderTop: "4px solid var(--cyan)",
            borderRadius: 14,
            padding: "24px 30px",
            boxShadow: "0 0 25px var(--cyanglow)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--fd)",
              fontWeight: 800,
              fontSize: "clamp(22px,2.2vw,32px)",
              color: "#F0F4F8",
            }}
          >
            Total per unit
          </span>
          <span
            style={{
              fontFamily: "var(--fm)",
              fontWeight: 800,
              fontSize: "clamp(34px,3.4vw,54px)",
              color: "var(--cyan)",
              lineHeight: 1,
            }}
          >
            <CountUp target={34565} sep active={active} />{" "}
            <span style={{ fontSize: ".5em", color: "#8BAEC4" }}>EGP</span>
          </span>
        </div>
      </div>
    </Slide>
  );
}

/* ─────────────────────────── 11 · ROADMAP ─────────────────────────── */
export function Roadmap() {
  return (
    <Slide id="roadmap" className="wide">
      <div className="eyebrow r fade">Roadmap &amp; Vision</div>
      <h2 className="ttl r" style={{ "--d": ".07s", margin: "16px 0 30px" }}>
        From one kit to a <span className="ac">movement</span>.
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
        {ROADMAP.map((step, i) => {
          const c = step.lit ? "var(--cyan)" : "var(--bordeR)";
          return (
            <div
              key={step.phase}
              className="r"
              style={{
                "--d": `${0.16 + i * 0.1}s`,
                position: "relative",
                padding: "0 20px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  [step.half ? "width" : "right"]: step.half ? "50%" : 0,
                  top: 12,
                  height: 4,
                  background: c,
                }}
              />
              <div
                style={{
                  position: "relative",
                  width: 26,
                  height: 26,
                  borderRadius: "50%",
                  background: "#fff",
                  border: `3px solid ${c}`,
                  display: "grid",
                  placeItems: "center",
                  marginBottom: 20,
                  zIndex: 1,
                  boxShadow: step.lit
                    ? "0 0 0 6px rgba(0,200,255,.15)"
                    : "none",
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: c,
                  }}
                />
              </div>
              <div
                style={{
                  fontFamily: "var(--fm)",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  color: step.lit ? "var(--cyanD)" : "var(--ink2)",
                }}
              >
                {step.phase}
              </div>
              <div
                style={{
                  fontFamily: "var(--fd)",
                  fontSize: "clamp(18px,1.6vw,22px)",
                  fontWeight: 700,
                  margin: "8px 0",
                }}
              >
                {step.title}
              </div>
              <div
                style={{ fontSize: 15, lineHeight: 1.45, color: "var(--ink2)" }}
              >
                {step.desc}
              </div>
            </div>
          );
        })}
      </div>
    </Slide>
  );
}

/* ─────────────────────── 12 · EDUCATION PACKAGE · THEORY BOOK CHAPTERS ─────────────────────── */
export function EduChapters() {
  return (
    <Slide id="edu-chapters" className="wide">
      <div className="eyebrow r fade">Education Package · Theory Book</div>
      <h2 className="ttl r" style={{ "--d": ".07s", margin: "14px 0 22px" }}>
        Three chapters. <span className="ac">Zero to Secure.</span>
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 22,
        }}
      >
        {[
          {
            src: "/covers/ch1-os.png",
            accent: "var(--green)",
            alt: "Chapter 01 — Operating Systems & Linux",
          },
          {
            src: "/covers/ch2-networks.png",
            accent: "var(--cyan)",
            alt: "Chapter 02 — Networks Fundamentals",
          },
          {
            src: "/covers/ch3-cia.png",
            accent: "var(--red)",
            alt: "Chapter 03 — The CIA Triad",
          },
        ].map((c, i) => (
          <div key={c.src} className="r" style={{ "--d": `${0.2 + i * 0.1}s` }}>
            <img
              src={c.src}
              alt={c.alt}
              style={{
                width: "100%",
                maxHeight: "62vh",
                objectFit: "contain",
                display: "block",
                borderRadius: 16,
                borderLeft: "1px solid var(--border)",
                borderRight: "1px solid var(--border)",
                borderBottom: "1px solid var(--border)",
                borderTop: `4px solid ${c.accent}`,
                background: "#060b16",
              }}
            />
          </div>
        ))}
      </div>
    </Slide>
  );
}

/* ─────────────────────── 12b · EDUCATION PACKAGE · CALLOUT DESIGN SYSTEM ─────────────────────── */
export function EduCallouts() {
  return (
    <Slide id="edu-callouts" className="wide">
      <div className="eyebrow r fade">Education Package · Design System</div>
      <h2 className="ttl r" style={{ "--d": ".07s", margin: "14px 0 8px" }}>
        One page. Four <span className="ac">signals</span>.
      </h2>
      <p className="lead r" style={{ "--d": ".14s", marginBottom: 26 }}>
        Every lab in both books repeats the same four callout boxes so
        students always know what kind of information they&rsquo;re reading.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {CALLOUTS.map((cta, i) => (
          <div
            key={cta.tag}
            className="r left"
            style={{
              "--d": `${0.2 + i * 0.08}s`,
              background: "var(--navy)",
              borderTop: "1px solid #2a3550",
              borderRight: "1px solid #2a3550",
              borderBottom: "1px solid #2a3550",
              borderLeft: `4px solid ${cta.color}`,
              borderRadius: 12,
              padding: "16px 20px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--fm)",
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                color: cta.color,
                marginBottom: 8,
              }}
            >
              {cta.tag}
            </div>
            <div style={{ fontSize: 16, lineHeight: 1.5, color: "#F0F4F8" }}>
              {cta.body}
            </div>
          </div>
        ))}
      </div>
    </Slide>
  );
}
