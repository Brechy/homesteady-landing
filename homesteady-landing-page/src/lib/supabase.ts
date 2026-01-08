import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type SignupType = 'updates' | 'beta';

export async function submitEmailSignup(email: string, signupType: SignupType) {
  const { error } = await supabase
    .from('email_signups')
    .insert({ email, signup_type: signupType });

  if (error) {
    if (error.code === '23505') {
      throw new Error('This email is already signed up!');
    }
    throw new Error('Something went wrong. Please try again.');
  }

  return { success: true };
}
