// Repeated, data-driven content for the deck. Editing these arrays updates the
// corresponding slides — the idiomatic place to customise copy.

export const ASSET = (name) => `/assets/${name}`;

// 02 · Index — two columns of jump links
export const INDEX_LEFT = [
  { n: '01', label: 'The Problem', goto: 'problem' },
  { n: '02', label: 'The Solution', goto: 'solution' },
  { n: '03', label: 'The Product', goto: 'product' },
  { n: '04', label: 'Market Opportunity', goto: 'market' },
  { n: '05', label: 'Viability & Roadmap', goto: 'viability' },
  { n: '06', label: 'Education Package', goto: 'edu-chapters' },
];
export const INDEX_RIGHT = [
  { n: '07', label: 'Kit Design', goto: 'kit' },
  { n: '08', label: 'System Architecture', goto: 'arch' },
  { n: '09', label: 'SIEM Solution', goto: 'siem-b1' },
  { n: '10', label: 'Landing Page', goto: 'lp2' },
];

// 06 · The Product — four products
export const PRODUCTS = [
  { n: '01', title: 'Hardware Kit', desc: 'Acrylic lab — 2× RPi 4, switch, touchscreen.', icon: 'monitor' },
  { n: '02', title: 'Vulnerable Service', desc: 'Fake protocols — SSH, Telnet, HTTP, SMB, FTP, MySQL.', icon: 'terminal' },
  { n: '03', title: 'SIEM Dashboard', desc: 'Real-time attack visualization for beginners.', icon: 'chart' },
  { n: '04', title: 'Education Package', desc: '200-page book + 8-lab practical manual.', icon: 'book' },
];

// 11 · Roadmap
export const ROADMAP = [
  { phase: 'Now', title: 'Working kit', desc: 'Full curriculum + complete working hardware kit.', lit: true },
  { phase: 'Next', title: 'RPi 5 + protocols', desc: 'Upgrade to RPi 5; add RDP, VNC and MySQL traps.', lit: false },
  { phase: 'Then', title: 'Batch production', desc: 'Manufacture at scale and run school pilots.', lit: false, half: true },
];

// 10 · Why HIVE Wins — comparison rows. cloud / vm / hive cells: '✓' (yes) or '✗' (no)
export const COMPARISON = [
  { crit: 'Real attack data', cloud: false, vm: false },
  { crit: 'Affordable', cloud: false, vm: true },
  { crit: 'Age-appropriate (13–16)', cloud: false, vm: false },
  { crit: 'Works offline', cloud: false, vm: true },
  { crit: 'Zero setup', cloud: false, vm: false },
  { crit: 'Includes curriculum', cloud: false, vm: false },
];

// 16 · Dionaea protocol nodes (absolute positions around the hub)
export const DIONAEA_PORTS = [
  { label: 'HTTP', left: '50%', top: '14%' },
  { label: 'SMB', left: '84%', top: '39%' },
  { label: 'FTP', left: '71%', top: '79%' },
  { label: 'MySQL', left: '29%', top: '79%' },
  { label: 'MSSQL', left: '16%', top: '39%' },
];

// 19 · SIEM data life cycle pipeline
export const PIPELINE = [
  { tag: 'SOURCE', color: 'var(--red)', title: 'Honeypots', sub: 'Cowrie / Dionaea' },
  { tag: 'PROCESS', color: 'var(--amber)', title: 'Server', sub: 'Processing · Formatting<br>Type validation · Cleaning<br>→ JSON' },
  { tag: 'TRANSPORT', color: 'var(--cyan)', title: 'WebSocket', sub: 'Port 8080<br>Permanent connection<br>No refresh · No delay' },
  { tag: 'OUTPUT', color: '#00ff9f', title: 'Dashboard', sub: 'Real-time UI<br>Live events' },
];

// 21 · Visualization rationale cards
export const VIZ_WHY = [
  { c: 'var(--cyan)', name: 'KPI Cards', tag: 'Stat', body: 'Four headline numbers — the situation at a glance.' },
  { c: 'var(--amber)', name: 'Bar Chart — Timeline', tag: 'Trend', body: 'Attack volume over time — spikes jump out instantly.' },
  { c: 'var(--red)', name: 'Donut Chart — Severity', tag: 'Composition', body: 'HIGH / MED / LOW mix in one ring, total in the centre.' },
  { c: 'var(--purple)', name: 'Protocol Bars', tag: 'Breakdown', body: 'Traffic share per protocol — scannable top to bottom.' },
  { c: 'var(--green)', name: 'Live Event Log', tag: 'Feed', body: 'Every attack as it happens, row by row.' },
  { c: '#7FE4FF', name: 'JSON Inspector', tag: 'Deep-dive', body: 'Click a row — read the full payload like a real analyst.' },
];

// 22 · Theory book chapters — each is its own cover slide (kicker = ToC topic, title = creative name)
export const CHAPTERS = [
  {
    n: '01',
    accent: 'var(--green)',
    kicker: 'Operating Systems & Linux',
    title: 'The Ghost in the Machine',
    body: 'Before you can defend a system, you have to understand what runs it. This chapter opens the hood on the OS itself — the kernel, the shell, and the rules that decide who can touch what.',
    bullets: ['The Kernel', 'CLI vs GUI', 'Linux File System', 'Permissions'],
  },
  {
    n: '02',
    accent: 'var(--cyan)',
    kicker: 'Networks Fundamentals',
    title: 'The Heartbeat',
    body: 'Every attack travels over a network first. This chapter follows a packet from one machine to another — the devices, addresses, and models that make communication possible.',
    bullets: ['Network Types', 'Network Devices', 'IP & MAC Addresses', 'OSI & TCP/IP Models', 'Protocols & Ports', 'HIVE Kit Network'],
  },
  {
    n: '03',
    accent: 'var(--red)',
    kicker: 'The CIA Triad',
    title: 'Access Denied',
    body: 'Security has a shape: confidentiality, integrity, availability. This chapter names the three pillars every attack tries to break — and trains readers to spot exactly which one just failed.',
    bullets: ['Confidentiality', 'Integrity', 'Availability', 'Real Examples', 'Identify Violations'],
  },
];

// 22b · Lab book callout system — the four recurring boxes used throughout both books
export const CALLOUTS = [
  { tag: 'Agent Task', color: 'var(--green)', bg: 'rgba(0,255,159,.08)', body: "A hands-on mission with exact steps and a result you can check for yourself — this is where reading turns into doing." },
  { tag: 'Agent Tip', color: 'var(--amber)', bg: 'rgba(255,183,3,.08)', body: 'A shortcut, a common mistake to avoid, or a faster way to reach the same result.' },
  { tag: 'Alert', color: 'var(--red)', bg: 'rgba(214,40,40,.08)', body: 'A safety or scope warning — stop and read before you run the command.' },
  { tag: 'Agent Note', color: 'var(--cyanD)', bg: 'rgba(0,200,255,.08)', body: "Extra context that deepens understanding but isn't required to finish the mission." },
];

// 23a · Lab book intro — philosophy bullets
export const LAB_INTRO = [
  'Built around the HIVE kit to provide interactive and experimental learning.',
  'Designed for beginners who want to build cybersecurity knowledge from the ground up.',
  'Hands-on cybersecurity training designed to teach beginners through practical labs instead of theory alone.',
  'Uses practical missions and guided exercises to simulate real security tasks.',
];

// 23b · Lab manual — six labs (last two highlighted)
export const LABS = [
  { n: 'Lab 1', title: 'Wireshark Fundamentals', body: 'Capture & analyze live network traffic. Understand packet structure, protocols, and filtering.', hot: false },
  { n: 'Lab 2', title: 'Network Traffic Analysis', body: 'Deep dive into TCP three-way handshake, UDP, DNS queries, and HTTP communication flows.', hot: false },
  { n: 'Lab 3', title: 'Network Scanning', body: 'Use Nmap to discover live hosts, open ports, running services, and save scan results.', hot: false },
  { n: 'Lab 4', title: 'Password Attacks', body: 'Practice dictionary attacks and password spraying using Hydra against SSH services.', hot: false },
  { n: 'Lab 5', title: 'SSH Attack & Log Analysis', body: 'Full attack scenario — scan, crack, login via SSH, run commands, and trace in SIEM.', hot: true },
  { n: 'Lab 6', title: 'FTP Attack & Log Analysis', body: 'Exploit anonymous FTP access, upload/download files, and monitor activity in SIEM.', hot: true },
];

// 23c · Lab preview grid — paired 1&4, 2&5, 3&6 (matches lab book cover layout)
export const LAB_PREVIEW = [LABS[0], LABS[3], LABS[1], LABS[4], LABS[2], LABS[5]];

// 24 · Team Phoenix
export const TEAM = [
  { name: 'Abdalla hattb', img: 'team-abdalla.jpg', d: '.12s' },
  { name: 'Abdelrahman Ibrahim', img: 'team-3obd.jpg', d: '.72s' },
  { name: 'Mohamed shabaan', img: 'team-shabaan.jpg', d: '.66s' },
  { name: 'Belal Morsi', img: 'team-belal.jpeg', d: '.24s' },
  { name: 'Amr osama', img: 'team-amr.jpeg', d: '.18s' },
  { name: 'Mostafa Ibrahim', img: 'team-mostafa.jpeg', d: '.42s' },
  { name: 'Abdelrahman Roqa', img: 'team-roqa.jpeg', d: '.60s' },
  { name: 'Abdelrahman Fawzy', img: 'team-fawzy.jpeg', d: '.30s' },
  { name: 'Abdelrahman Hossam', img: 'team-harpi.jpeg', d: '.36s' },
  { name: 'Norhan osama', img: 'team-norhan.jpeg', d: '.48s' },
  { name: 'Mohamed Othman', img: 'team-othman.jpeg', d: '.54s' },
];

// Kit carousel images (slide 13)
export const KIT_IMAGES = ['kit-blue.png', 'kit-green.png', 'kit-purple.png', 'kit-red.png'];
