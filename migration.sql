-- ================================================================
-- DEFINITION CONTEST — Supabase Migration
-- Run this in your Supabase project: SQL Editor → New Query → Run
-- ================================================================

-- 1. Create the questions table
CREATE TABLE IF NOT EXISTS questions (
  id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  subject_key TEXT        NOT NULL,
  type        TEXT        NOT NULL CHECK (type IN ('blank', 'mcq')),
  q_num       INTEGER,
  stem        TEXT        NOT NULL,
  answer      TEXT        NOT NULL,
  option_a    TEXT,
  option_b    TEXT,
  option_c    TEXT,
  option_d    TEXT,
  image_key   TEXT,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Indexes for fast lookups
CREATE INDEX IF NOT EXISTS idx_q_subject ON questions(subject_key);
CREATE INDEX IF NOT EXISTS idx_q_type    ON questions(type);

-- 3. Auto-update updated_at on row changes
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_questions_updated_at ON questions;
CREATE TRIGGER trg_questions_updated_at
  BEFORE UPDATE ON questions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- 4. Row Level Security
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read
CREATE POLICY "public_read"
  ON questions FOR SELECT
  USING (true);

-- Allow anyone to insert/update/delete
-- (For a production app, replace with proper auth checks)
CREATE POLICY "public_insert"
  ON questions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "public_update"
  ON questions FOR UPDATE
  USING (true);

CREATE POLICY "public_delete"
  ON questions FOR DELETE
  USING (true);
