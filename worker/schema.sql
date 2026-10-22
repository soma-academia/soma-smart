-- Tech Tayari — D1 schema. Accounts + per-user progress + anonymous aggregate analytics.
-- Run once: paste into the D1 database's Console tab in the Cloudflare dashboard (see DEPLOY.md).

-- Learner accounts. Passwords are stored ONLY as salted hashes (never plaintext).
CREATE TABLE IF NOT EXISTS users (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  username      TEXT NOT NULL UNIQUE,         -- lowercased handle
  display_name  TEXT NOT NULL,                -- as typed
  pass_salt     TEXT NOT NULL,                -- legacy column; salt now lives inside pass_hash
  pass_hash     TEXT NOT NULL,                -- "pbkdf2$<iterations>$<salt>$<hash>" (PBKDF2-SHA256)
  recovery_hash TEXT,                         -- optional self-set recovery code, same PBKDF2 format
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
  mastery    TEXT NOT NULL DEFAULT 'new',     -- new | learning | practised | mastered
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

-- Anonymous learning funnel: per day and module, how many devices reached each step (no user link).
-- step: start | read | mission | quiz | pass | pass1 (passed on the first try)
CREATE TABLE IF NOT EXISTS funnel (
  day        TEXT NOT NULL,
  track      TEXT,
  module_id  TEXT NOT NULL,
  step       TEXT NOT NULL,
  count      INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (day, module_id, step)
);

-- Anonymous visits: per day, how many devices opened the app for the first time ("new") or came back ("return").
-- Each device reports at most once a day and keeps only the date; no IDs, no IP.
CREATE TABLE IF NOT EXISTS visits (
  day    TEXT NOT NULL,
  kind   TEXT NOT NULL,
  count  INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (day, kind)
);

-- Content review votes from teachers/reviewers (adults, via /review pages). One row per reviewer device per item.
-- item: <module_id>:card<n> | <module_id>:task<n> | <module_id>:q<n>; vote: 1 = keep, -1 = remove.
CREATE TABLE IF NOT EXISTS review (
  reviewer_key TEXT NOT NULL,                 -- random code made on the reviewer's device (not personal data)
  item         TEXT NOT NULL,
  vote         INTEGER NOT NULL,
  note         TEXT,
  name         TEXT,                          -- optional, as typed by the reviewer
  updated_at   INTEGER NOT NULL,
  PRIMARY KEY (reviewer_key, item)
);

-- Simple IP rate limiting to mitigate automated abuse.
CREATE TABLE IF NOT EXISTS rate_limits (
  key       TEXT PRIMARY KEY,                 -- salted hash of action + IP, never the raw IP
  count     INTEGER NOT NULL DEFAULT 1,
  reset_at  INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_progress_user ON progress(user_id);
