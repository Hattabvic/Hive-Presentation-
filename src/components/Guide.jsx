import { useEffect, useRef, useState } from 'react';
import { GUIDE } from '../data/guide.js';

/**
 * Hexa — the floating mascot guide. The React port of setGuide()/activate().
 * On every active-slide change it swaps the speech bubble + pose with a short
 * fade, and re-triggers the `pop` entrance animation.
 */
export default function Guide({ activeId }) {
  const g = GUIDE[activeId] || GUIDE.cover;
  const [shown, setShown] = useState({ pose: g.pose, text: g.text });
  const [swap, setSwap] = useState(false);
  const [pop, setPop] = useState(false);
  const [visible, setVisible] = useState(false);
  const firstRef = useRef(true);

  // Reveal the guide shortly after mount (matches the original 700ms delay).
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 700);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (firstRef.current) {
      firstRef.current = false;
      setShown({ pose: g.pose, text: g.text });
      return;
    }
    // fade out → swap content → fade in
    setSwap(true);
    const t = setTimeout(() => {
      setShown({ pose: g.pose, text: g.text });
      setSwap(false);
    }, 230);
    // re-trigger pop
    setPop(false);
    const p = requestAnimationFrame(() => setPop(true));
    return () => {
      clearTimeout(t);
      cancelAnimationFrame(p);
    };
  }, [activeId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div id="guide" className={`${visible ? 'show' : ''} ${pop ? 'pop' : ''}`.trim()}>
      <div
        id="gbub"
        className={swap ? 'swap' : ''}
        dangerouslySetInnerHTML={{ __html: shown.text }}
      />
      <div id="gbot">
        <img
          className={swap ? 'swap' : ''}
          src={`/assets/mascot-${shown.pose}.png`}
          alt="Hexa"
        />
      </div>
    </div>
  );
}
