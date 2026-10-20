/* Soma Smart — Cloudflare Pages Worker (advanced mode) backed by D1.
 *
 * Bindings required (Pages > Settings):
 *   D1 database binding: DB        (database: soma-smart, schema in worker/schema.sql)
 *   Env var:             ADMIN_KEY (a long random secret for /api/admin/* and /api/insights)
 *
 * Auth model: self-service usernames + passwords. Passwords stored as salted sha256 (never plaintext).
 * A stateless session token = base64(userId + "." + sha256(userId + pass_hash + ADMIN_KEY)). No email.
 * Optional recovery code set at signup lets a user reset their password without email.
 *
 * Endpoints (all JSON):
 *   GET  /api/health                                                      -> {ok:true, d1:bool, now:number}
 *   POST /api/signup   {username, display, password, recovery?, ageBand?}  -> {token, user}
 *   POST /api/login    {username, password}                               -> {token, user}
 *   POST /api/reset    {username, recovery, newPassword}                  -> {token, user}
 *   GET  /api/progress            (Authorization: Bearer <token>)         -> {mods:{...}}
 *   PUT  /api/progress  {mods}    (Authorization: Bearer <token>)         -> {ok:true}
 *   POST /api/event    {track, module, correct}                          -> {ok:true}  (anonymous)
 *   GET  /api/admin/users?key=ADMIN_KEY                                   -> {users:[...]}
 *   GET  /api/admin/progress?key=ADMIN_KEY&userId=<id>                    -> {mods:{...}}
 *   POST /api/admin/reset {key, username, newPassword}                    -> {ok:true}
 *   GET  /api/insights?key=ADMIN_KEY                                      -> {topModules, hardest, daily}
 * Everything else -> static assets.
 */
const H = {
  "Content-Type": "application/json",
  "Cache-Control": "no-store",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Methods": "GET, POST, PUT, OPTIONS"
};
const json = (o, s = 200) => new Response(JSON.stringify(o), { status: s, headers: H });
const now = () => Date.now();

async function sha256(str) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
}
function randHex(n = 16) {
  const a = new Uint8Array(n); crypto.getRandomValues(a);
  return [...a].map(b => b.toString(16).padStart(2, "0")).join("");
}
const normUser = u => String(u || "").trim().toLowerCase();

async function makeToken(env, user) {
  const sig = await sha256(user.id + "." + user.pass_hash + "." + (env.ADMIN_KEY || "soma_secret_fallback"));
  return btoa(user.id + "." + sig);
}
async function userFromToken(env, token) {
  try {
    const raw = atob(token);
    const [id, sig] = raw.split(".");
    const u = await env.DB.prepare("SELECT * FROM users WHERE id=?1").bind(+id).first();
    if (!u) return null;
    const expect = await sha256(u.id + "." + u.pass_hash + "." + (env.ADMIN_KEY || "soma_secret_fallback"));
    return expect === sig ? u : null;
  } catch { return null; }
}
function publicUser(u) {
  return { id: u.id, username: u.username, display: u.display_name, ageBand: u.age_band || null };
}
async function readProgress(env, userId) {
  const rows = await env.DB.prepare("SELECT * FROM progress WHERE user_id=?1").bind(userId).all();
  const mods = {};
  for (const r of (rows.results || [])) mods[r.module_id] = { reached: r.reached, best: r.best_score, attempts: r.attempts, mastery: r.mastery, done: !!r.done };
  return mods;
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: H });
    }

    const url = new URL(request.url);
    const p = url.pathname;
    if (!p.startsWith("/api/")) {
      return env.ASSETS ? env.ASSETS.fetch(request) : new Response("Not found", { status: 404 });
    }

    // Health check
    if (p === "/api/health") {
      return json({ ok: true, service: "soma-smart", d1: !!env.DB, now: now() });
    }

    if (!env.DB) return json({ error: "D1 database binding 'DB' is missing in Cloudflare settings" }, 501);

    try {
      // ---------- signup ----------
      if (p === "/api/signup" && request.method === "POST") {
        const b = await request.json();
        const username = normUser(b.username);
        const display = String(b.display || b.username || "").trim().slice(0, 30);
        if (username.length < 3 || !/^[a-z0-9_]+$/.test(username)) return json({ error: "Username: 3+ letters/numbers/underscore." }, 400);
        if (String(b.password || "").length < 4) return json({ error: "Password needs at least 4 characters." }, 400);
        const exists = await env.DB.prepare("SELECT id FROM users WHERE username=?1").bind(username).first();
        if (exists) return json({ error: "That username is taken. Try another." }, 409);
        const salt = randHex(8);
        const pass_hash = await sha256(salt + b.password);
        const recovery_hash = b.recovery ? await sha256("rec:" + b.recovery) : null;
        const t = now();
        const res = await env.DB.prepare(
          "INSERT INTO users (username, display_name, pass_salt, pass_hash, recovery_hash, age_band, created_at, updated_at) VALUES (?1,?2,?3,?4,?5,?6,?7,?7)"
        ).bind(username, display, salt, pass_hash, recovery_hash, b.ageBand || null, t).run();
        const u = await env.DB.prepare("SELECT * FROM users WHERE id=?1").bind(res.meta.last_row_id).first();
        return json({ token: await makeToken(env, u), user: publicUser(u) });
      }

      // ---------- login ----------
      if (p === "/api/login" && request.method === "POST") {
        const b = await request.json();
        const u = await env.DB.prepare("SELECT * FROM users WHERE username=?1").bind(normUser(b.username)).first();
        if (!u) return json({ error: "No such username. Check spelling or create a new account." }, 404);
        const hash = await sha256(u.pass_salt + String(b.password || ""));
        if (hash !== u.pass_hash) return json({ error: "Wrong password." }, 401);
        return json({ token: await makeToken(env, u), user: publicUser(u) });
      }

      // ---------- reset via recovery code ----------
      if (p === "/api/reset" && request.method === "POST") {
        const b = await request.json();
        const u = await env.DB.prepare("SELECT * FROM users WHERE username=?1").bind(normUser(b.username)).first();
        if (!u) return json({ error: "No such username." }, 404);
        if (!u.recovery_hash) return json({ error: "No recovery code was set for this account." }, 400);
        if ((await sha256("rec:" + String(b.recovery || ""))) !== u.recovery_hash) return json({ error: "Recovery code is wrong." }, 401);
        if (String(b.newPassword || "").length < 4) return json({ error: "New password needs at least 4 characters." }, 400);
        const salt = randHex(8), pass_hash = await sha256(salt + b.newPassword);
        await env.DB.prepare("UPDATE users SET pass_salt=?1, pass_hash=?2, updated_at=?3 WHERE id=?4").bind(salt, pass_hash, now(), u.id).run();
        const u2 = await env.DB.prepare("SELECT * FROM users WHERE id=?1").bind(u.id).first();
        return json({ token: await makeToken(env, u2), user: publicUser(u2) });
      }

      // ---------- progress (auth) ----------
      if (p === "/api/progress") {
        const token = (request.headers.get("Authorization") || "").replace(/^Bearer\s+/, "");
        const u = await userFromToken(env, token);
        if (!u) return json({ error: "Not signed in." }, 401);
        if (request.method === "GET") return json({ mods: await readProgress(env, u.id) });
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
          return json({ ok: true });
        }
        return json({ error: "method not allowed" }, 405);
      }

      // ---------- anonymous analytics ----------
      if (p === "/api/event" && request.method === "POST") {
        const b = await request.json();
        if (!b.module) return json({ ok: true });
        const day = new Date().toISOString().slice(0, 10);
        await env.DB.prepare(
          `INSERT INTO events (day, track, module_id, attempts, correct) VALUES (?1,?2,?3,1,?4)
           ON CONFLICT(day, module_id) DO UPDATE SET attempts=attempts+1, correct=correct+?4`
        ).bind(day, b.track || "", String(b.module), b.correct ? 1 : 0).run();
        return json({ ok: true });
      }

      // ---------- admin ----------
      const adminKey = env.ADMIN_KEY || "";
      const isAuthorizedAdmin = (providedKey) => {
        if (!adminKey || !providedKey) return false;
        return providedKey === adminKey;
      };

      if (p === "/api/admin/users" && request.method === "GET") {
        if (!isAuthorizedAdmin(url.searchParams.get("key"))) return json({ error: "unauthorized" }, 401);
        const r = await env.DB.prepare(
          `SELECT u.id, u.username, u.display_name, u.age_band, u.created_at, u.updated_at,
                  (SELECT COUNT(*) FROM progress p WHERE p.user_id=u.id AND p.done=1) AS done,
                  (SELECT COUNT(*) FROM progress p WHERE p.user_id=u.id AND p.mastery='mastered') AS mastered
           FROM users u ORDER BY u.updated_at DESC LIMIT 500`).all();
        return json({ users: r.results || [] });
      }

      if (p === "/api/admin/progress" && request.method === "GET") {
        if (!isAuthorizedAdmin(url.searchParams.get("key"))) return json({ error: "unauthorized" }, 401);
        const uid = +(url.searchParams.get("userId") || 0);
        if (!uid) return json({ error: "missing userId" }, 400);
        return json({ mods: await readProgress(env, uid) });
      }

      if (p === "/api/admin/reset" && request.method === "POST") {
        const b = await request.json();
        if (!isAuthorizedAdmin(b.key)) return json({ error: "unauthorized" }, 401);
        const u = await env.DB.prepare("SELECT * FROM users WHERE username=?1").bind(normUser(b.username)).first();
        if (!u) return json({ error: "no such user" }, 404);
        const salt = randHex(8), pass_hash = await sha256(salt + String(b.newPassword || "changeme"));
        await env.DB.prepare("UPDATE users SET pass_salt=?1, pass_hash=?2, updated_at=?3 WHERE id=?4").bind(salt, pass_hash, now(), u.id).run();
        return json({ ok: true });
      }

      if (p === "/api/insights" && request.method === "GET") {
        if (!isAuthorizedAdmin(url.searchParams.get("key"))) return json({ error: "unauthorized" }, 401);
        const top = await env.DB.prepare(`SELECT module_id, SUM(attempts) a, SUM(correct) c FROM events GROUP BY module_id ORDER BY a DESC LIMIT 30`).all();
        const hard = await env.DB.prepare(`SELECT module_id, SUM(attempts) a, SUM(correct) c FROM events GROUP BY module_id HAVING a>=3 ORDER BY (1.0*SUM(correct)/SUM(attempts)) ASC LIMIT 20`).all();
        const daily = await env.DB.prepare(`SELECT day, SUM(attempts) a FROM events GROUP BY day ORDER BY day DESC LIMIT 30`).all();
        const totals = await env.DB.prepare(`SELECT COUNT(DISTINCT id) as total_users FROM users`).first();
        return json({ topModules: top.results || [], hardest: hard.results || [], daily: daily.results || [], totalUsers: totals ? totals.total_users : 0 });
      }

      return json({ error: "not found" }, 404);
    } catch (e) {
      return json({ error: "server error", detail: String(e) }, 500);
    }
  }
};
