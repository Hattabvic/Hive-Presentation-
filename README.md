# H.I.V.E. KIT — Graduation Pitch (React)

The HIVE KIT pitch deck, rebuilt from the original single-file HTML/CSS/JS into a
**Vite + React 18 + Tailwind CSS** project. Same 26-slide scroll-snap presentation,
same animations, mascot guide, and live SIEM simulation — now component-based and
easy to customise.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Project structure

```
public/assets/            images, logo, mascot poses (copied from the original kit)
src/
  main.jsx                app entry
  App.jsx                 renders the chrome + 26 slides in order
  styles/
    index.css             Tailwind directives
    base.css              the deck's design system (CSS variables, components, keyframes)
  data/
    slides.js             ordered slide metadata (dot-nav labels, section names)
    guide.js              Hexa mascot copy + pose per slide
    content.js            data-driven slide content (products, team, labs, etc.)
  hooks/
    usePresentation.js    scroll-spy: progress, reveal, active slide, keyboard nav
  components/
    Chrome.jsx            progress bar, header, dot-nav, footer, page number, scroll hint
    Guide.jsx             the floating Hexa mascot
    CountUp.jsx           animated stat counters
    KitCarousel.jsx       auto-rotating kit image carousel
    SiemDashboard.jsx     the live SIEM simulation (feed / bars / donut / top-IPs)
    Slide.jsx             section wrapper
  slides/
    SlidesA.jsx           01–11 · business overview
    SlidesB.jsx           12–16 · technical overview
    SiemSlides.jsx        17–20 · SIEM backend + frontend
    SlidesC.jsx           21–26 · landing page, books, team, thanks
```

## Customising

- **Copy / content** lives in `src/data/` — edit the arrays there.
- **Colours / type / spacing** are CSS variables at the top of `src/styles/base.css`,
  and are also exposed as Tailwind utilities (`bg-navy`, `text-cyanD`, `font-display`…)
  via `tailwind.config.js`, so new components can use either approach.
- **Slide order / labels** are in `src/data/slides.js` (keep it in sync with the
  render order in `App.jsx`).

## Controls

- Scroll, or use **↑ / ↓ / PageUp / PageDown** to move between slides.
- Click the **dot-nav** on the right, or the **index** links on slide 2, to jump.
- On the live dashboard slide, use **Slow / Normal / Fast** to change the event rate.
