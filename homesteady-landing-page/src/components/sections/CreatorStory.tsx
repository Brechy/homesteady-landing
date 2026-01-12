import { Code2, Award, Shield } from 'lucide-react';
import { CREATOR_CREDENTIALS } from '../../lib/constants';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const iconMap = {
  Code2,
  Award,
  Shield,
};

export function CreatorStory() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="creator" className="py-20 md:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <p className="text-terracotta-500 font-medium mb-4 uppercase tracking-wide text-sm">Our Story</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Built by Homesteaders, For Homesteaders
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We're Corina and James — a husband-and-wife team who traded years of renting for a 3-acre property with an 1880s farmhouse in Vermont. It's our first piece of land to truly call our own, and we're building it into the small family farm we've always dreamed of.
                <p>
                Like many of you, we started small. A few backyard chickens. Two Nigerian Dwarf goats. A lot of plans and even more questions. This spring we're expanding — more chickens, ducks, and geese are already on order from the hatchery. By year's end, we hope to welcome Valais Blacknose sheep. From there: a small orchard, kitchen gardens, and eventually a market garden growing the Asian vegetables we can never find in our small Vermont town.
                </p>
              <p>
                We believe in self-reliance, sustainability, and building a life connected to the land. We're drawn to regenerative permaculture — working with nature rather than against it, and creating systems that give back more than they take. These aren't just ideas to us. They're guiding how we design our homestead from the ground up.
              </p>
              <p>
                But as our plans grew, so did the complexity. We needed a way to keep track of animals, gardens, tasks, and timelines — not scattered across five different apps, but in one place. Something that could grow with us. Something built for the realities of homestead life.
              </p>
              <p className="text-lg font-medium text-gray-800">
                We looked. Nothing fit.
              </p>
                <p className="text-lg font-medium text-gray-800">
                  So we built it ourselves.
                </p>
                <p>
                  Between us, we bring decades of experience in software engineering and technical project management; building real solutions for small business and major corporations. Now, we develop tools under our own business Brechy.com, and everything we create starts the same way: with a real problem we needed to solve.
              </p>
                <p>
                  Homesteady exists because we needed it. We're using it on our own property every day to help build our dreams.
              </p>
                <p>
                  Whether you're just starting out with a few chickens in the backyard, expanding into goats or sheep, or building toward a fully operational homestead that supports your family and your livelihood — we built this for you. <strong>Because we are you.</strong>
              </p>
                <p className="text-lg font-medium text-gray-800">
                  We are here to help you and your homestead grow together.
                </p>
            </div>
          </div>

          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '200ms' }}>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-sage-100 to-cream-200 rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5506229/pexels-photo-5506229.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Historic Vermont farmhouse"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/30 to-transparent" />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 max-w-xs">
                <p className="text-sm text-gray-600 italic">
                  "We're building this for ourselves and for you. If it doesn't work on our farm or yours, it doesn't ship."
                </p>
                <p className="text-xs text-sage-600 font-medium mt-2">— James & Corina</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-20 grid md:grid-cols-3 gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
          {CREATOR_CREDENTIALS.map((credential) => {
            const IconComponent = iconMap[credential.icon as keyof typeof iconMap];
            return (
              <div
                key={credential.title}
                className="bg-white rounded-2xl p-6 border border-cream-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center text-sage-600 mb-4">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">{credential.title}</h3>
                <p className="text-gray-600">{credential.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
