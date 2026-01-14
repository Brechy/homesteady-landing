import { Check, X, Leaf } from 'lucide-react';
import { COMPARISON_FEATURES } from '../../lib/constants';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function Comparison() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="comparison" className="py-20 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-coral-500 font-medium mb-4 uppercase tracking-wide text-sm">Why Homesteady?</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Only App That Does It All
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We built Homesteady to bring enterprise-level quality and reliability to real homesteaders — because you deserve tools that actually work.
          </p>
        </div>

        <div className={`overflow-hidden rounded-2xl border border-cream-200 shadow-lg transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-cream-50">
                  <th className="text-left py-5 px-6 font-medium text-gray-500 text-sm">Feature</th>
                  <th className="py-5 px-6 text-center">
                    <div className="inline-flex flex-col items-center">
                      <div className="w-10 h-10 bg-forest-500 rounded-xl flex items-center justify-center text-white mb-2">
                        <Leaf className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-forest-600">Homesteady</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-center">
                    <span className="text-gray-400 font-medium">Web-Only Tools</span>
                  </th>
                  <th className="py-5 px-6 text-center">
                    <span className="text-gray-400 font-medium">Other Apps</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_FEATURES.map((row, index) => (
                  <tr key={row.feature} className={index % 2 === 0 ? 'bg-white' : 'bg-cream-50/50'}>
                    <td className="py-4 px-6 text-gray-700 font-medium">{row.feature}</td>
                    <td className="py-4 px-6 text-center">
                      {row.homesteady ? (
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                          <Check className="w-5 h-5 text-green-600" />
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
                          <X className="w-5 h-5 text-gray-400" />
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {row.webTools ? (
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                          <Check className="w-5 h-5 text-green-600" />
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
                          <X className="w-5 h-5 text-gray-400" />
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {row.otherApps ? (
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                          <Check className="w-5 h-5 text-green-600" />
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
                          <X className="w-5 h-5 text-gray-400" />
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={`mt-8 bg-gradient-to-r from-forest-500 to-forest-600 rounded-2xl p-6 md:p-8 text-white text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
          <p className="text-lg md:text-xl font-medium">
            "Big Tech code quality meets real-world homesteading, so you can focus on what's important."
          </p>
        </div>
      </div>
    </section>
  );
}
