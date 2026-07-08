import { useEffect, useRef, useState } from 'react';

function format(v, dec, sep) {
  let s = v.toFixed(dec);
  if (sep) {
    const p = s.split('.');
    p[0] = p[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    s = p.join('.');
  }
  return s;
}

/**
 * Animated count-up — the React port of site.js's runCounters().
 * Animates from 0 → `target` (cubic ease-out, 1.4s) the first time `active`
 * becomes true. Renders an inline <span> so it can sit inside headings.
 */
export default function CountUp({ target, dec = 0, sep = false, pre = '', suf = '', active }) {
  const [text, setText] = useState(() => pre + format(0, dec, sep) + suf);
  const doneRef = useRef(false);

  useEffect(() => {
    if (!active || doneRef.current) return;
    doneRef.current = true;
    const dur = 1400;
    const t0 = performance.now();
    let raf;
    const tick = (now) => {
      const k = Math.min((now - t0) / dur, 1);
      const e = 1 - Math.pow(1 - k, 3);
      setText(pre + format(e * target, dec, sep) + suf);
      if (k < 1) raf = requestAnimationFrame(tick);
      else setText(pre + format(target, dec, sep) + suf);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, dec, sep, pre, suf]);

  return <span>{text}</span>;
}
