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
                We bought a 3-acre property with an 1880s farmhouse in Vermont — and a vision for transforming it into a thriving small family farm. Goats, sheep, chickens, ducks, geese, a small orchard, kitchen gardens, and market gardens. The whole dream.
              </p>
              <p className="text-lg font-medium text-gray-800">
                We quickly realized: there was no good app for managing all of this.
              </p>
              <p>
                Everything we found was either web-only (useless when you're out in the field), overly complicated, or just didn't understand how a real homestead works. So we built what we needed.
              </p>
              <p>
                With 15+ years of tech experience between us — including enterprise software development and technical project management — we knew we could build something better. Something that works offline, scales as your operation grows, and actually helps instead of getting in the way.
              </p>
              <p>
                Right now we have our chickens and goats, and Homesteady is helping us track everything as we build toward our full vision. We're building this app for ourselves first — which means it has to actually work.
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
                  "We're building this for ourselves first. If it doesn't work on our farm, it doesn't ship."
                </p>
                <p className="text-xs text-sage-600 font-medium mt-2">— The Founders</p>
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
