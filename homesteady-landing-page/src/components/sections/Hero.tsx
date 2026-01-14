import { WifiOff, Sparkles, Bird, Flower2, CheckCircle, Shield } from 'lucide-react';
import { EmailSignupForm } from '../ui/EmailSignupForm';

export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-cream-50 to-cream-100 pt-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-forest-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-coral-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-mint-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-coral-100 px-4 py-2 rounded-full text-sm font-medium text-coral-700 mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Coming Soon — Join the Beta</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Helping You and Your Homestead,{' '}
              <span className="text-forest-500">Grow Together</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Stop juggling spreadsheets, apps, and sticky notes. One app to track
              everything — animals, plants, tasks, and more. Works offline,
              right where you need it.
            </p>

            <div className="max-w-md mx-auto lg:mx-0 mb-6">
              <EmailSignupForm
                signupType="updates"
                buttonText="Get Launch Updates"
                placeholder="Enter your email"
              />
            </div>

            <p className="text-sm text-gray-500 mb-8 max-w-md mx-auto lg:mx-0">
              Be the first to know when we launch. No spam, just updates.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <WifiOff className="w-4 h-4 text-forest-500" />
                <span>Works Offline</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-forest-500" />
                <span>Privacy First</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-forest-500" />
                <span>No Ads Ever</span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 sm:w-72 h-[500px] sm:h-[560px] bg-gray-900 rounded-[3rem] shadow-2xl p-3 animate-float">
                <div className="w-full h-full bg-gradient-to-b from-forest-50 to-cream-100 rounded-[2.5rem] overflow-hidden relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-2xl" />

                  <div className="pt-10 px-4">
                    <div className="text-center mb-4">
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Today's Tasks</p>
                      <p className="text-2xl font-serif font-bold text-gray-900">6 Items</p>
                    </div>

                    <div className="space-y-3">
                      <div className="bg-white rounded-xl p-3 shadow-sm border border-forest-100">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-forest-100 rounded-lg flex items-center justify-center">
                            <Bird className="w-5 h-5 text-forest-600" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-900 text-sm">Collect Eggs</p>
                            <p className="text-xs text-gray-500">Coop A - 12 hens</p>
                          </div>
                          <div className="w-5 h-5 rounded-full border-2 border-forest-300" />
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-3 shadow-sm border border-forest-100">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-coral-100 rounded-lg flex items-center justify-center">
                            <Flower2 className="w-5 h-5 text-coral-600" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-900 text-sm">Water Tomatoes</p>
                            <p className="text-xs text-gray-500">Bed 3 - 24 plants</p>
                          </div>
                          <div className="w-5 h-5 rounded-full bg-forest-500 flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-3 shadow-sm border border-forest-100">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-mint-100 rounded-lg flex items-center justify-center">
                            <span className="text-lg">🐐</span>
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-900 text-sm">Evening Feeding</p>
                            <p className="text-xs text-gray-500">Goat barn - 3 does</p>
                          </div>
                          <div className="w-5 h-5 rounded-full border-2 border-forest-300" />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 bg-gradient-to-r from-forest-500 to-forest-600 rounded-xl p-3 text-white">
                      <p className="text-xs opacity-80">Weekly Overview</p>
                      <p className="font-semibold">42 tasks completed</p>
                      <div className="mt-2 h-2 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-white rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -left-8 bg-white rounded-2xl shadow-xl p-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Synced</p>
                    <p className="text-xs text-gray-500">All data backed up</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-8 bg-white rounded-2xl shadow-xl p-4 animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-coral-100 rounded-full flex items-center justify-center">
                    <WifiOff className="w-5 h-5 text-coral-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Offline Ready</p>
                    <p className="text-xs text-gray-500">No signal needed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 flex flex-wrap justify-center gap-8 md:gap-16 pb-12 md:pb-20">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-serif font-bold text-forest-600">100%</p>
            <p className="text-sm text-gray-500 mt-1">Offline Capable</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-serif font-bold text-forest-600">30+</p>
            <p className="text-sm text-gray-500 mt-1">Years Of Combined Tech Experience</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-serif font-bold text-forest-600">0</p>
            <p className="text-sm text-gray-500 mt-1">Data Sold</p>
          </div>
        </div>
      </div>
    </section>
  );
}
