/*
  # Create Email Signups Table

  1. New Tables
    - `email_signups`
      - `id` (uuid, primary key) - Unique identifier for each signup
      - `email` (text, unique, not null) - User's email address
      - `signup_type` (text, not null) - Type of signup: 'updates' or 'beta'
      - `created_at` (timestamptz) - When the signup occurred

  2. Security
    - Enable RLS on `email_signups` table
    - Add policy for anonymous users to insert their email
    - No read access for users (admin only via Supabase dashboard)

  3. Notes
    - Emails can be exported to Google Sheets from Supabase dashboard
    - signup_type allows filtering between general updates and beta testers
*/

CREATE TABLE IF NOT EXISTS email_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  signup_type text NOT NULL CHECK (signup_type IN ('updates', 'beta')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE email_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can sign up with their email"
  ON email_signups
  FOR INSERT
  TO anon
  WITH CHECK (
    email IS NOT NULL 
    AND email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  );
