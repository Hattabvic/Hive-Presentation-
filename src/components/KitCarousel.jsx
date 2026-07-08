import { useEffect, useState } from 'react';
import { KIT_IMAGES } from '../data/content.js';

/** Auto-rotating kit image carousel (the `.carousel2` from site.js).
 *  Advances every 2.8s and supports clicking the dots. */
export default function KitCarousel() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % KIT_IMAGES.length), 2800);
    return () => clearInterval(t);
  }, []);
  return (
    <div
      className="r left"
      style={{ '--d': '.14s', position: 'relative', borderRadius: 16, overflow: 'hidden', border: '1px solid var(--border)', boxShadow: '0 22px 56px rgba(0,200,255,.12)', background: '#060a12' }}
    >
      <div className="carousel2" style={{ position: 'relative', aspectRatio: '3/2' }}>
        {KIT_IMAGES.map((src, k) => (
          <div key={src} className={k === idx ? 'cs2 on' : 'cs2'} style={{ display: k === idx ? 'block' : 'none' }}>
            <img src={`/assets/${src}`} alt="Kit" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        ))}
      </div>
      <div className="cdots2" style={{ position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 7, zIndex: 2 }}>
        {KIT_IMAGES.map((src, k) => (
          <i key={src} className={k === idx ? 'cd2 on' : 'cd2'} onClick={() => setIdx(k)} />
        ))}
      </div>
    </div>
  );
}
