import { Hero } from '../components/sections/Hero';
import { Features } from '../components/sections/Features';
import { SkillLevels } from '../components/sections/SkillLevels';
import { Comparison } from '../components/sections/Comparison';
import { CreatorStory } from '../components/sections/CreatorStory';
import { CTA } from '../components/sections/CTA';

export function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <SkillLevels />
      <Comparison />
      <CreatorStory />
      <CTA />
    </>
  );
}
