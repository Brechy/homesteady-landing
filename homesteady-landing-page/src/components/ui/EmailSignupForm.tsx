import { useState } from 'react';
import { Mail, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { submitEmailSignup, type SignupType } from '../../lib/supabase';

interface EmailSignupFormProps {
  signupType: SignupType;
  buttonText?: string;
  placeholder?: string;
  variant?: 'light' | 'dark';
  className?: string;
}

export function EmailSignupForm({
  signupType,
  buttonText = 'Sign Up',
  placeholder = 'Enter your email',
  variant = 'light',
  className = '',
}: EmailSignupFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setStatus('loading');
    setMessage('');

    try {
      await submitEmailSignup(email, signupType);
      setStatus('success');
      setMessage(signupType === 'beta'
        ? "You're on the beta list! We'll be in touch soon."
        : "Thanks! We'll keep you posted on launch updates."
      );
      setEmail('');
    } catch (err) {
      setStatus('error');
      setMessage(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  const isDark = variant === 'dark';

  if (status === 'success') {
    return (
      <div className={`flex items-center gap-3 p-4 rounded-xl ${isDark ? 'bg-white/10' : 'bg-green-50'} ${className}`}>
        <CheckCircle className={`w-5 h-5 flex-shrink-0 ${isDark ? 'text-green-300' : 'text-green-600'}`} />
        <p className={isDark ? 'text-white' : 'text-green-800'}>{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${isDark ? 'text-white/50' : 'text-gray-400'}`} />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            required
            className={`w-full pl-12 pr-4 py-3 rounded-xl border transition-colors ${
              isDark
                ? 'bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:bg-white/15'
                : 'bg-white border-cream-200 text-gray-900 placeholder:text-gray-400 focus:border-forest-300 focus:ring-2 focus:ring-forest-100'
            } outline-none`}
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none ${
            isDark
              ? 'bg-white text-forest-600 hover:bg-cream-50'
              : 'bg-coral-500 text-white hover:bg-coral-600 shadow-lg hover:shadow-xl'
          }`}
        >
          {status === 'loading' ? (
            <Loader2 className="w-5 h-5 animate-spin mx-auto" />
          ) : (
            buttonText
          )}
        </button>
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 mt-3 text-sm">
          <AlertCircle className={`w-4 h-4 ${isDark ? 'text-red-300' : 'text-red-500'}`} />
          <p className={isDark ? 'text-red-300' : 'text-red-600'}>{message}</p>
        </div>
      )}
    </form>
  );
}
