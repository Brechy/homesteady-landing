import { Shield, Sparkles, TestTube, Bell } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { EmailSignupForm } from '../ui/EmailSignupForm';

export function CTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="signup" className="py-20 md:py-32 bg-gradient-to-br from-forest-600 via-forest-500 to-forest-600 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-forest-400/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-coral-400/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white/90 mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Coming Soon to iOS & Android</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Be Part of the Journey
            </h2>

            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
              Homesteady is currently in beta testing. Join the waitlist to get notified when we launch, or sign up to help us test and shape the app.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-forest-500 flex items-center justify-center">
                  <Bell className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-forest-800">Get Launch Updates</h3>
              </div>
              <p className="text-forest-700 mb-6">
                Be the first to know when Homesteady launches. We'll send you updates on our progress and let you know the moment the app is available.
              </p>
              <EmailSignupForm
                signupType="updates"
                buttonText="Notify Me"
                placeholder="Your email"
                variant="light"
              />
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-coral-500 flex items-center justify-center">
                  <TestTube className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-forest-800">Join the Beta</h3>
              </div>
              <p className="text-forest-700 mb-6">
                Be <strong>one</strong> of only 150 beta testers to help shape Homesteady by testing early versions of the app. We'll reach out when beta testing beginswith instructions to get started.
              </p>
              <EmailSignupForm
                signupType="beta"
                buttonText="Join Beta"
                placeholder="Your email"
                variant="light"
              />
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>We sell software, not your data</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>No spam, ever</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
