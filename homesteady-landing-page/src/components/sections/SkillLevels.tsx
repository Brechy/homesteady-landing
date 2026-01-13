import { Egg, Fence, Warehouse, ArrowRight } from 'lucide-react';
import { SKILL_LEVELS } from '../../lib/constants';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const iconMap = {
  Egg,
  Fence,
  Warehouse,
};

const colorVariants = [
  { bg: 'bg-sage-50', border: 'border-sage-200', icon: 'bg-sage-100 text-sage-600', badge: 'bg-sage-500' },
  { bg: 'bg-terracotta-50', border: 'border-terracotta-200', icon: 'bg-terracotta-100 text-terracotta-600', badge: 'bg-terracotta-500' },
  { bg: 'bg-gold-50', border: 'border-gold-200', icon: 'bg-gold-100 text-gold-600', badge: 'bg-gold-500' },
];

export function SkillLevels() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skill-levels" className="py-20 md:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-terracotta-500 font-medium mb-4 uppercase tracking-wide text-sm">For Every Stage</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Grows With You — From First Chicken to Full-Scale Farm
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you're just starting with a backyard coop or managing a full-scale operation, Homesteady meets you where you are.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {SKILL_LEVELS.map((level, index) => {
            const IconComponent = iconMap[level.icon as keyof typeof iconMap];
            const colors = colorVariants[index];

            return (
              <div
                key={level.level}
                className={`group relative ${colors.bg} rounded-2xl p-8 border ${colors.border} hover:shadow-xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${colors.icon} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-7 h-7" />
                </div>

                <span className={`inline-block ${colors.badge} text-white text-xs font-semibold px-3 py-1 rounded-full mb-4`}>
                  {level.level}
                </span>

                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">{level.title}</h3>
                <p className="text-gray-600 mb-6">{level.description}</p>

                <ul className="space-y-2">
                  {level.examples.map((example) => (
                    <li key={example} className="flex items-center gap-2 text-sm text-gray-500">
                      <ArrowRight className="w-4 h-4 text-sage-400" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
