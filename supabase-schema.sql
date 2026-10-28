-- ==============================================================================
-- INDIA CAMPUS MAP — SUPABASE POSTGRESQL SCHEMA & SEED SCRIPT
-- Run this in the Supabase Dashboard -> SQL Editor
-- ==============================================================================

-- 1. Create enum types
CREATE TYPE institution_type_enum AS ENUM (
  'Institute of National Importance',
  'Central University',
  'State University',
  'Deemed University',
  'Private University',
  'Engineering College',
  'Medical College',
  'Management Institute',
  'Law Institute',
  'Arts & Science College'
);

CREATE TYPE ownership_enum AS ENUM (
  'Public / Government',
  'Private',
  'Public-Private Partnership'
);

CREATE TYPE verification_enum AS ENUM (
  'Verified Official',
  'Verified Directory',
  'Under Review'
);

-- 2. Create the 'campuses' table
CREATE TABLE IF NOT EXISTS campuses (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  campus_name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  institution_type TEXT NOT NULL,
  ownership TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  district TEXT NOT NULL,
  state TEXT NOT NULL,
  postal_code TEXT NOT NULL,
  latitude DOUBLE PRECISION NOT NULL,
  longitude DOUBLE PRECISION NOT NULL,
  courses TEXT[] DEFAULT '{}',
  facilities TEXT[] DEFAULT '{}',
  hostel_available BOOLEAN DEFAULT false,
  website TEXT NOT NULL,
  admission_url TEXT NOT NULL,
  contact_email TEXT,
  contact_phone TEXT,
  image_url TEXT,
  source_urls TEXT[] DEFAULT '{}',
  last_verified DATE DEFAULT CURRENT_DATE,
  verification_status TEXT DEFAULT 'Verified Official',
  established_year INTEGER,
  campus_area_acres INTEGER,
  short_description TEXT,
  popular_disciplines TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE campuses ENABLE ROW LEVEL SECURITY;

-- 4. Create Policies: Public Read Access
CREATE POLICY "Allow public read access on campuses"
  ON campuses FOR SELECT
  USING (true);

-- 5. Create Policies: Allow authenticated and anon inserts for new submissions
CREATE POLICY "Allow anyone to insert new campus suggestions"
  ON campuses FOR INSERT
  WITH CHECK (true);

-- 6. Spatial indexing on coordinates for fast geospatial queries
CREATE INDEX IF NOT EXISTS idx_campuses_coords ON campuses (latitude, longitude);
CREATE INDEX IF NOT EXISTS idx_campuses_state_city ON campuses (state, city);
CREATE INDEX IF NOT EXISTS idx_campuses_type ON campuses (institution_type);
