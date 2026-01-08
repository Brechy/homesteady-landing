import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { SkillLevels } from './components/sections/SkillLevels';
import { Comparison } from './components/sections/Comparison';
import { CreatorStory } from './components/sections/CreatorStory';
import { CTA } from './components/sections/CTA';

function App() {
  return (
    <div className="min-h-screen bg-cream-50 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Features />
        <SkillLevels />
        <Comparison />
        <CreatorStory />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
