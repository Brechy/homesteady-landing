import { Bird, Sprout, ShieldCheck, Calendar, BookOpen, WifiOff } from 'lucide-react';
import { FeatureCard } from '../ui/FeatureCard';
import { FEATURES } from '../../lib/constants';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const iconMap = {
  Bird,
  Sprout,
  ShieldCheck,
  Calendar,
  BookOpen,
  WifiOff,
};

export function Features() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-terracotta-500 font-medium mb-4 uppercase tracking-wide text-sm">Features</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need, Nothing You Don't
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Built for real homesteaders with real problems. Every feature exists because we needed it ourselves.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div
                key={feature.id}
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <FeatureCard
                  icon={<IconComponent className="w-7 h-7" />}
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
