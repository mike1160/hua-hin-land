-- Run this in the Supabase SQL Editor

CREATE TABLE IF NOT EXISTS listings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  status TEXT DEFAULT 'pending', -- 'pending' | 'approved' | 'rejected'

  -- Contact
  name TEXT,
  email TEXT,
  phone TEXT,
  preferred_language TEXT,

  -- Property
  property_type TEXT,
  transaction_type TEXT,
  location TEXT,
  size TEXT,
  price TEXT,
  title_deed TEXT,
  description TEXT,

  -- Meta
  approved_at TIMESTAMPTZ,
  rejected_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS listings_status_approved_at_idx
  ON listings (status, approved_at DESC);

-- Row Level Security
ALTER TABLE listings ENABLE ROW LEVEL SECURITY;

-- Public can read approved listings only
CREATE POLICY "Public read approved listings"
  ON listings
  FOR SELECT
  TO anon, authenticated
  USING (status = 'approved');

-- Allow anon INSERT (form can also go via service-role API)
CREATE POLICY "Anon insert listings"
  ON listings
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- No UPDATE / DELETE for anon (default deny when no policy)
-- Service role bypasses RLS for admin approve/reject
