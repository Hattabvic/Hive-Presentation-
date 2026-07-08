import { useEffect, useRef, useState } from 'react';

/**
 * Scroll-driven presentation engine — the React port of site.js's `refresh()`.
 *
 * It mirrors the original behaviour exactly:
 *  - sets the `--vh` custom property for mobile 100vh stability
 *  - drives the top progress bar
 *  - fades the scroll hint after the first scroll
 *  - toggles the `.in` reveal class on each `.s` section by visibility
 *  - tracks the active section (the one crossing the viewport midpoint)
 *  - supports keyboard section navigation (↑/↓/PageUp/PageDown)
 *
 * Returns view-state for the chrome plus a `goTo(index)` scroller.
 */
export function usePresentation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showHint, setShowHint] = useState(true);
  const sectionsRef = useRef([]);
  const activeIndexRef = useRef(0);

  // Cache the section nodes once mounted.
  useEffect(() => {
    sectionsRef.current = Array.from(document.querySelectorAll('.s'));
  }, []);

  useEffect(() => {
    const setVh = () => {
      const h = window.innerHeight;
      if (h > 10) document.documentElement.style.setProperty('--vh', h + 'px');
    };

    const refresh = () => {
      const screens = sectionsRef.current;
      if (!screens.length) screens.push(...document.querySelectorAll('.s'));
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      setShowHint(window.scrollY <= 80);

      const vh = window.innerHeight;
      const sy = window.scrollY;
      const mid = sy + vh / 2;
      for (let i = 0; i < screens.length; i++) {
        const s = screens[i];
        const top = s.offsetTop;
        const bot = top + s.offsetHeight;
        const vis = Math.min(bot, sy + vh) - Math.max(top, sy);
        if (vis > vh * 0.32) s.classList.add('in');
        else if (vis <= 0) s.classList.remove('in');
        if (mid >= top && mid < bot && activeIndexRef.current !== i) {
          activeIndexRef.current = i;
          setActiveIndex(i);
        }
      }
    };

    setVh();
    refresh();
    const timers = [120, 400, 900].map((t) => setTimeout(refresh, t));

    const onResize = () => {
      setVh();
      refresh();
    };
    window.addEventListener('scroll', refresh, { passive: true });
    window.addEventListener('resize', onResize);

    const onKey = (e) => {
      if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp'].indexOf(e.key) < 0) return;
      if (e.target && /INPUT|TEXTAREA/.test(e.target.tagName)) return;
      const idx = activeIndexRef.current;
      const dir = e.key === 'ArrowDown' || e.key === 'PageDown' ? 1 : -1;
      const next = sectionsRef.current[idx + dir];
      if (next) {
        e.preventDefault();
        window.scrollTo({ top: next.offsetTop, behavior: 'smooth' });
      }
    };
    window.addEventListener('keydown', onKey);

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener('scroll', refresh);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  const goTo = (index) => {
    const s = sectionsRef.current[index] || document.querySelectorAll('.s')[index];
    if (s) window.scrollTo({ top: s.offsetTop, behavior: 'smooth' });
  };

  return { activeIndex, progress, showHint, goTo };
}
