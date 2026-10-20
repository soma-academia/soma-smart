-- Soma Smart — D1 schema. Accounts + per-user progress + anonymous aggregate analytics.
-- Run once:  wrangler d1 execute soma-smart --file=worker/schema.sql

-- Learner accounts. Passwords are stored ONLY as salted hashes (never plaintext).
CREATE TABLE IF NOT EXISTS users (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  username      TEXT NOT NULL UNIQUE,         -- lowercased handle
  display_name  TEXT NOT NULL,                -- as typed
  pass_salt     TEXT NOT NULL,
  pass_hash     TEXT NOT NULL,                -- sha256(salt + password)
  recovery_hash TEXT,                         -- optional self-set recovery code (sha256)
  age_band      TEXT,                         -- 'p' (Grade 4-6) or 'j' (Grade 7-9), optional
  created_at    INTEGER NOT NULL,
  updated_at    INTEGER NOT NULL
);

-- Per-user, per-module progress. One row per (user, module).
CREATE TABLE IF NOT EXISTS progress (
  user_id    INTEGER NOT NULL,
  module_id  TEXT NOT NULL,
  reached    INTEGER NOT NULL DEFAULT 0,      -- furthest step index reached (0..5)
  best_score INTEGER NOT NULL DEFAULT 0,      -- best quiz score
  attempts   INTEGER NOT NULL DEFAULT 0,
  mastery    TEXT NOT NULL DEFAULT 'locked',  -- locked | learning | practised | mastered
  done       INTEGER NOT NULL DEFAULT 0,      -- 0/1
  updated_at INTEGER NOT NULL,
  PRIMARY KEY (user_id, module_id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Anonymous, aggregate-only analytics (no user link). For "what to focus on".
CREATE TABLE IF NOT EXISTS events (
  day        TEXT NOT NULL,
  track      TEXT,
  module_id  TEXT NOT NULL,
  attempts   INTEGER NOT NULL DEFAULT 0,
  correct    INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (day, module_id)
);

-- Simple IP rate limiting to mitigate automated abuse.
CREATE TABLE IF NOT EXISTS rate_limits (
  key       TEXT PRIMARY KEY,
  count     INTEGER NOT NULL DEFAULT 1,
  reset_at  INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_progress_user ON progress(user_id);
