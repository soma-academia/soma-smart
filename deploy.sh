#!/usr/bin/env bash
# Publish Tech Tayari: push main to GitHub, then deploy the committed code to Cloudflare Pages
# (project "tech-tayari") with your own Wrangler login. Run from anywhere:  ./deploy.sh
# Needs: git, python3, and Wrangler logged in (brew install cloudflare-wrangler && wrangler login).
set -euo pipefail
cd "$(dirname "$0")"

say() { printf '\n\033[1m%s\033[0m\n' "$*"; }
fail() { printf '\n\033[31m✘ %s\033[0m\n' "$*"; exit 1; }

[ "$(git branch --show-current)" = "main" ] || fail "Switch to the main branch first (git checkout main)."
git diff --quiet && git diff --cached --quiet || fail "You have uncommitted changes. Commit them first, so the live site matches GitHub."
wrangler whoami >/dev/null 2>&1 || fail "Wrangler isn't logged in. Run: wrangler login"

say "1/4 Checking lessons are built…"
python3 _build.py >/dev/null
git diff --quiet -- content.js || fail "content.js was out of date, so I rebuilt it. Commit it (git commit -am 'Rebuild content'), then run ./deploy.sh again."

say "2/4 Pushing to GitHub…"
git push origin main

say "3/4 Deploying to Cloudflare Pages…"
sha="$(git rev-parse HEAD)"; msg="$(git log -1 --format=%s)"
site="$(mktemp -d)"; trap 'rm -rf "$site"' EXIT
git archive HEAD | tar -x -C "$site"          # only committed files, never local ones like .dev.vars
(cd "$site" && wrangler pages deploy . --project-name tech-tayari --branch main --commit-hash "$sha" --commit-message "$msg")

say "4/4 Checking the live site…"
sleep 8
health="$(curl -fsS https://tech-tayari.pages.dev/api/health)" || fail "Couldn't reach https://tech-tayari.pages.dev/api/health"
echo "$health"
echo "$health" | grep -q '"tokenSecretConfigured":true' || fail "Site is up, but its secrets aren't configured."
say "✅ Live at https://tech-tayari.pages.dev"
