/**
 * A deck section. Renders `<section class="s …"><div class="si">…</div></section>`
 * exactly like the original markup. `pre` lets a slide inject siblings (washes,
 * gradients) before the inner `.si` container.
 */
export default function Slide({ id, className = '', si, siClassName = '', pre, children }) {
  return (
    <section className={`s ${className}`.trim()} id={id}>
      {pre}
      <div className={`si ${siClassName}`.trim()} style={si}>
        {children}
      </div>
    </section>
  );
}
