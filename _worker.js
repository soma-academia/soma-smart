/* Soma Smart — Cloudflare Pages Worker (canonical root).
 * Backed by Cloudflare D1. Self-service accounts, offline-first guest mode,
 * anonymous aggregate analytics. NO support desk or admin password resets.
 *
 * Required Cloudflare Pages Bindings:
 *   D1 database binding: DB        (database: soma-smart, schema in worker/schema.sql)
 *   Environment variable: ADMIN_KEY (required long secret for /api/insights; fails closed if unset)
 *
 * Endpoints:
 *   GET  /api/health                                                      -> {ok:true, d1:bool, now:number}
 *   POST /api/signup   {username, display, password, recovery?, ageBand?}  -> {token, user}
 *   POST /api/login    {username, password}                               -> {token, user}
 *   POST /api/reset    {username, recovery, newPassword}                  -> {token, user} (self-service only)
 *   GET  /api/progress            (Authorization: Bearer <token>)         -> {mods:{...}}
 *   PUT  /api/progress  {mods}    (Authorization: Bearer <token>)         -> {ok:true}
 *   POST /api/event    {track, module, correct}                          -> {ok:true}  (anonymous)
 *   GET  /api/insights?key=ADMIN_KEY                                      -> {overview, topModules, hardest, daily}
 * Everything else -> static assets.
 */

const now = () => Date.now();

function getCorsHeaders(request) {
  const origin = request.headers.get("Origin");
  const url = new URL(request.url);
  const isAllowed = origin && (
    origin === url.origin ||
    origin.endsWith(".pages.dev") ||
    origin.includes("somasmart") ||
    origin.startsWith("http://localhost:") ||
    origin.startsWith("http://127.0.0.1:")
  );
  const h = {
    "Content-Type": "application/json",
    "Cache-Control": "no-store"
  };
  if (isAllowed) {
    h["Access-Control-Allow-Origin"] = origin;
    h["Access-Control-Allow-Headers"] = "Content-Type, Authorization";
    h["Access-Control-Allow-Methods"] = "GET, POST, PUT, OPTIONS";
    h["Vary"] = "Origin";
  }
  return h;
}

const json = (o, s = 200, request = null) => {
  const headers = request ? getCorsHeaders(request) : { "Content-Type": "application/json", "Cache-Control": "no-store" };
  return new Response(JSON.stringify(o), { status: s, headers });
};

async function sha256(str) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
}

function randHex(n = 16) {
  const a = new Uint8Array(n); crypto.getRandomValues(a);
  return [...a].map(b => b.toString(16).padStart(2, "0")).join("");
}

const normUser = u => String(u || "").trim().toLowerCase();

const BLOCKED_USERNAMES = new Set([
  "admin", "administrator", "root", "system", "support", "help", "helpdesk",
  "somasmart", "soma_smart", "moderator", "mod", "official", "mwalimu", "teacher",
  "staff", "security", "null", "undefined", "anonymous", "guest", "test"
]);

// Fail-closed token signing: relies strictly on env.ADMIN_KEY
async function makeToken(env, user) {
  if (!env.ADMIN_KEY) throw new Error("ADMIN_KEY_MISSING");
  const t = now();
  const sig = await sha256(user.id + "." + t + "." + user.pass_hash + "." + env.ADMIN_KEY);
  return btoa(user.id + "." + t + "." + sig);
}

// Validates token signature and 30-day expiration window
async function userFromToken(env, token) {
  if (!env.ADMIN_KEY) return null;
  try {
    const raw = atob(token);
    const parts = raw.split(".");
    if (parts.length !== 3) return null;
    const [id, t, sig] = parts;
    // Expire after 30 days
    if (now() - (+t) > 30 * 86400 * 1000) return null;
    const u = await env.DB.prepare("SELECT * FROM users WHERE id=?1").bind(+id).first();
    if (!u) return null;
    const expect = await sha256(u.id + "." + t + "." + u.pass_hash + "." + env.ADMIN_KEY);
    return expect === sig ? u : null;
  } catch {
    return null;
  }
}

function publicUser(u) {
  return { id: u.id, username: u.username, display: u.display_name, ageBand: u.age_band || null };
}

async function readProgress(env, userId) {
  const rows = await env.DB.prepare("SELECT * FROM progress WHERE user_id=?1").bind(userId).all();
  const mods = {};
  for (const r of (rows.results || [])) {
    mods[r.module_id] = { reached: r.reached, best: r.best_score, attempts: r.attempts, mastery: r.mastery, done: !!r.done };
  }
  return mods;
}

// Basic abuse prevention: rate limit by IP / key
async function checkRateLimit(env, key, maxAttempts, windowSec) {
  const t = now();
  try {
    const row = await env.DB.prepare("SELECT count, reset_at FROM rate_limits WHERE key=?1").bind(key).first();
    if (!row || t > row.reset_at) {
      await env.DB.prepare(
        "INSERT INTO rate_limits (key, count, reset_at) VALUES (?1, 1, ?2) ON CONFLICT(key) DO UPDATE SET count=1, reset_at=?2"
      ).bind(key, t + windowSec * 1000).run();
      return true;
    }
    if (row.count >= maxAttempts) return false;
    await env.DB.prepare("UPDATE rate_limits SET count=count+1 WHERE key=?1").bind(key).run();
    return true;
  } catch {
    return true; // Graceful degrade if rate_limits table not yet executed
  }
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: getCorsHeaders(request) });
    }

    const url = new URL(request.url);
    const p = url.pathname;
    if (!p.startsWith("/api/")) {
      return env.ASSETS ? env.ASSETS.fetch(request) : new Response("Not found", { status: 404 });
    }

    // Health check endpoint
    if (p === "/api/health") {
      return json({
        ok: true,
        service: "soma-smart",
        d1: !!env.DB,
        adminKeyConfigured: !!env.ADMIN_KEY,
        now: now()
      }, 200, request);
    }

    // D1 binding is strictly required for API
    if (!env.DB) {
      return json({ error: "D1 database binding 'DB' is missing in Cloudflare settings" }, 501, request);
    }

    // Fail closed: ADMIN_KEY must be configured
    if (!env.ADMIN_KEY) {
      return json({ error: "Server configuration error: ADMIN_KEY environment variable is missing" }, 500, request);
    }

    const clientIP = request.headers.get("CF-Connecting-IP") || "ip_anon";

    try {
      // ---------- signup ----------
      if (p === "/api/signup" && request.method === "POST") {
        const allowed = await checkRateLimit(env, "signup:" + clientIP, 8, 3600); // 8 signups/hr per IP
        if (!allowed) {
          return json({ error: "Majaribio mengi mno ya kujisajili. Tafadhali subiri saa moja. (Too many signup attempts. Please wait an hour.)" }, 429, request);
        }

        const b = await request.json();
        const username = normUser(b.username);
        const display = String(b.display || b.username || "").trim().slice(0, 30);

        if (username.length < 3 || !/^[a-z0-9_]+$/.test(username)) {
          return json({ error: "Username: 3+ letters/numbers/underscore." }, 400, request);
        }
        if (BLOCKED_USERNAMES.has(username)) {
          return json({ error: "Jina hilo haliruhusiwi. Chagua username nyingine. (That username is reserved.)" }, 400, request);
        }
        if (String(b.password || "").length < 4) {
          return json({ error: "Password needs at least 4 characters." }, 400, request);
        }

        const exists = await env.DB.prepare("SELECT id FROM users WHERE username=?1").bind(username).first();
        if (exists) {
          return json({ error: "That username is taken. Try another." }, 409, request);
        }

        const salt = randHex(8);
        const pass_hash = await sha256(salt + b.password);
        const recovery_hash = b.recovery ? await sha256("rec:" + b.recovery) : null;
        const t = now();

        const res = await env.DB.prepare(
          "INSERT INTO users (username, display_name, pass_salt, pass_hash, recovery_hash, age_band, created_at, updated_at) VALUES (?1,?2,?3,?4,?5,?6,?7,?7)"
        ).bind(username, display, salt, pass_hash, recovery_hash, b.ageBand || null, t).run();

        const u = await env.DB.prepare("SELECT * FROM users WHERE id=?1").bind(res.meta.last_row_id).first();
        return json({ token: await makeToken(env, u), user: publicUser(u) }, 200, request);
      }

      // ---------- login ----------
      if (p === "/api/login" && request.method === "POST") {
        const allowed = await checkRateLimit(env, "login:" + clientIP, 15, 900); // 15 attempts / 15 min
        if (!allowed) {
          return json({ error: "Majaribio mengi yasiyo sahihi. Subiri dakika 15. (Too many login attempts. Please wait 15 minutes.)" }, 429, request);
        }

        const b = await request.json();
        const u = await env.DB.prepare("SELECT * FROM users WHERE username=?1").bind(normUser(b.username)).first();
        if (!u) {
          return json({ error: "No such username. Check spelling or create a new account." }, 404, request);
        }

        const hash = await sha256(u.pass_salt + String(b.password || ""));
        if (hash !== u.pass_hash) {
          return json({ error: "Wrong password." }, 401, request);
        }

        return json({ token: await makeToken(env, u), user: publicUser(u) }, 200, request);
      }

      // ---------- self-service reset via recovery code ----------
      if (p === "/api/reset" && request.method === "POST") {
        const allowed = await checkRateLimit(env, "reset:" + clientIP, 10, 1800);
        if (!allowed) {
          return json({ error: "Majaribio mengi mno. Tafadhali subiri kidogo. (Too many attempts. Please wait.)" }, 429, request);
        }

        const b = await request.json();
        const u = await env.DB.prepare("SELECT * FROM users WHERE username=?1").bind(normUser(b.username)).first();
        if (!u) return json({ error: "No such username." }, 404, request);
        if (!u.recovery_hash) {
          return json({ error: "Hakuna recovery code iliyowekwa kwa akaunti hii. Hakuna msaada wa kurejesha akaunti — tafadhali fungua akaunti mpya." }, 400, request);
        }

        const enteredRecHash = await sha256("rec:" + String(b.recovery || ""));
        if (enteredRecHash !== u.recovery_hash) {
          return json({ error: "Recovery code is wrong." }, 401, request);
        }

        if (String(b.newPassword || "").length < 4) {
          return json({ error: "New password needs at least 4 characters." }, 400, request);
        }

        const salt = randHex(8), pass_hash = await sha256(salt + b.newPassword);
        await env.DB.prepare("UPDATE users SET pass_salt=?1, pass_hash=?2, updated_at=?3 WHERE id=?4").bind(salt, pass_hash, now(), u.id).run();
        const u2 = await env.DB.prepare("SELECT * FROM users WHERE id=?1").bind(u.id).first();
        return json({ token: await makeToken(env, u2), user: publicUser(u2) }, 200, request);
      }

      // ---------- progress (authenticated) ----------
      if (p === "/api/progress") {
        const token = (request.headers.get("Authorization") || "").replace(/^Bearer\s+/, "");
        const u = await userFromToken(env, token);
        if (!u) return json({ error: "Not signed in or session expired." }, 401, request);

        if (request.method === "GET") {
          return json({ mods: await readProgress(env, u.id) }, 200, request);
        }

        if (request.method === "PUT") {
          const b = await request.json();
          const mods = b.mods || {};
          const t = now();
          const stmts = [];

          for (const [mid, m] of Object.entries(mods)) {
            stmts.push(env.DB.prepare(
              `INSERT INTO progress (user_id, module_id, reached, best_score, attempts, mastery, done, updated_at)
               VALUES (?1,?2,?3,?4,?5,?6,?7,?8)
               ON CONFLICT(user_id, module_id) DO UPDATE SET
                 reached=max(reached,?3), best_score=max(best_score,?4), attempts=?5, mastery=?6, done=?7, updated_at=?8`
            ).bind(u.id, mid, m.reached | 0, m.best | 0, m.attempts | 0, m.mastery || "learning", m.done ? 1 : 0, t));
          }

          if (stmts.length) await env.DB.batch(stmts);
          await env.DB.prepare("UPDATE users SET updated_at=?1 WHERE id=?2").bind(t, u.id).run();
          return json({ ok: true }, 200, request);
        }

        return json({ error: "method not allowed" }, 405, request);
      }

      // ---------- anonymous aggregated analytics ----------
      if (p === "/api/event" && request.method === "POST") {
        const b = await request.json();
        if (!b.module) return json({ ok: true }, 200, request);
        const day = new Date().toISOString().slice(0, 10);
        await env.DB.prepare(
          `INSERT INTO events (day, track, module_id, attempts, correct) VALUES (?1,?2,?3,1,?4)
           ON CONFLICT(day, module_id) DO UPDATE SET attempts=attempts+1, correct=correct+?4`
        ).bind(day, b.track || "", String(b.module), b.correct ? 1 : 0).run();
        return json({ ok: true }, 200, request);
      }

      // ---------- anonymous curriculum insights (NO PII, NO password reset) ----------
      if (p === "/api/insights" && request.method === "GET") {
        const key = url.searchParams.get("key");
        if (!key || key !== env.ADMIN_KEY) {
          return json({ error: "unauthorized" }, 401, request);
        }

        const top = await env.DB.prepare(
          `SELECT module_id, SUM(attempts) a, SUM(correct) c FROM events GROUP BY module_id ORDER BY a DESC LIMIT 30`
        ).all();

        const hard = await env.DB.prepare(
          `SELECT module_id, SUM(attempts) a, SUM(correct) c FROM events GROUP BY module_id HAVING a>=3 ORDER BY (1.0*SUM(correct)/SUM(attempts)) ASC LIMIT 20`
        ).all();

        const daily = await env.DB.prepare(
          `SELECT day, SUM(attempts) a FROM events GROUP BY day ORDER BY day DESC LIMIT 30`
        ).all();

        const totals = await env.DB.prepare(
          `SELECT
             COUNT(DISTINCT id) as total_users,
             SUM(CASE WHEN age_band='p' THEN 1 ELSE 0 END) as primary_users,
             SUM(CASE WHEN age_band='j' THEN 1 ELSE 0 END) as junior_users
           FROM users`
        ).first();

        const progStats = await env.DB.prepare(
          `SELECT
             COUNT(*) as total_completions,
             SUM(CASE WHEN mastery='mastered' THEN 1 ELSE 0 END) as total_masteries
           FROM progress WHERE done=1`
        ).first();

        return json({
          overview: {
            totalUsers: totals ? totals.total_users : 0,
            primaryUsers: totals ? totals.primary_users : 0,
            juniorUsers: totals ? totals.junior_users : 0,
            totalCompletions: progStats ? progStats.total_completions : 0,
            totalMasteries: progStats ? progStats.total_masteries : 0
          },
          topModules: top.results || [],
          hardest: hard.results || [],
          daily: daily.results || []
        }, 200, request);
      }

      return json({ error: "not found" }, 404, request);
    } catch (e) {
      return json({ error: "server error", detail: String(e) }, 500, request);
    }
  }
};
