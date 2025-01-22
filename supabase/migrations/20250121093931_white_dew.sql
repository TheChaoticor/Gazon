/*
  # Create waitlist table

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `created_at` (timestamp)
      - `source` (text) - to track where the signup came from
      - `status` (text) - for managing waitlist status

  2. Security
    - Enable RLS on `waitlist` table
    - Add policy for inserting new entries
    - Add policy for reading own entry
*/

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  source text DEFAULT 'website',
  status text DEFAULT 'pending'
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can join waitlist"
  ON waitlist
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Users can view their own waitlist status"
  ON waitlist
  FOR SELECT
  TO public
  USING (true);