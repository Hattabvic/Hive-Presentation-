import { usePresentation } from './hooks/usePresentation.js';
import { SLIDES } from './data/slides.js';
import Chrome from './components/Chrome.jsx';
import Guide from './components/Guide.jsx';

import {
  Cover, Index, RetentionHook, Problem, Solution, Product,
  Audience, Cost, Market, Viability, Why, Roadmap,
  EduChapters, EduCallouts,
} from './slides/SlidesA.jsx';
import { Break, Kit, Arch, Dionaea, Provisioning, HwEnterprise } from './slides/SlidesB.jsx';
import { OsEcosystem, CowrieMaze } from './slides/Architecture.jsx';
import { SiemB1, SiemB2, SiemF1, SiemF2 } from './slides/SiemSlides.jsx';
import { Designs, Lp1, Lp2, Books2, Books3, Team, Thanks } from './slides/SlidesC.jsx';

export default function App() {
  const { activeIndex, progress, showHint, goTo } = usePresentation();
  const activeId = SLIDES[activeIndex]?.id;
  const goToId = (id) => {
    const i = SLIDES.findIndex((s) => s.id === id);
    if (i >= 0) goTo(i);
  };
  const is = (id) => activeId === id;

  return (
    <>
      <Chrome activeIndex={activeIndex} progress={progress} showHint={showHint} goTo={goTo} />

      <main>
        <Cover />
        <Index goToId={goToId} />
        <RetentionHook active={is('hook-retention')} />
        <Problem />
        <Solution />
        <Product />
        <Audience />
        <Cost active={is('cost')} />
        <Market />
        <Viability />
        <Why />
        <Roadmap />
        <EduChapters />
        <EduCallouts />
        <Books2 />
        <Books3 />
        <Break />
        <Kit />
        <Arch />
        <OsEcosystem />
        <CowrieMaze />
        <Dionaea />
        <Provisioning />
        <HwEnterprise />
        <SiemB1 />
        <SiemB2 />
        <SiemF1 active={is('siem-f1')} />
        <SiemF2 />
        <Designs />
        <Lp1 />
        <Lp2 />
        <Team />
        <Thanks />
      </main>

      <Guide activeId={activeId} />
    </>
  );
}
