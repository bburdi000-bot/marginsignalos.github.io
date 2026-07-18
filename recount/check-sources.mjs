#!/usr/bin/env node
/**
 * The Recount — freshness / link-rot checker.
 * Verifies that every cited primary source (and each published artifact) still resolves.
 * A verification brand cannot afford dead citations. Run locally with `npm run check:recount`,
 * or on a schedule via .github/workflows/recount-freshness.yml.
 * Exits non-zero if any target fails, so CI surfaces it.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(readFileSync(join(root, "recount/manifest.json"), "utf8"));
const BASE = "https://www.marginsignalos.com";

const targets = [];
for (const s of manifest.studies) {
  for (const u of s.sources || []) targets.push({ study: s.id, url: u, kind: "primary source" });
  if (s.pdf) targets.push({ study: s.id, url: BASE + s.pdf, kind: "artifact" });
  if (s.source) targets.push({ study: s.id, url: BASE + s.source, kind: "artifact" });
}
for (const c of manifest.caseFiles) targets.push({ study: c.id, url: BASE + c.url, kind: "case file" });

async function check(t) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 15000);
  try {
    let res = await fetch(t.url, { redirect: "follow", signal: ctrl.signal, headers: { "User-Agent": "RecountFreshnessBot/1.0" } });
    // Some hosts reject HEAD; fetch defaults to GET so we're fine. Retry once on 405.
    if (res.status === 405) res = await fetch(t.url, { method: "GET", redirect: "follow", signal: ctrl.signal });
    return { ...t, status: res.status, ok: res.status >= 200 && res.status < 400 };
  } catch (e) {
    return { ...t, status: "ERR", ok: false, error: String(e.name || e) };
  } finally {
    clearTimeout(timer);
  }
}

const results = await Promise.all(targets.map(check));
let failed = 0;
for (const r of results) {
  const mark = r.ok ? "✓" : "✗";
  if (!r.ok) failed++;
  console.log(`${mark} [${r.status}] ${r.study} · ${r.kind} · ${r.url}${r.error ? " (" + r.error + ")" : ""}`);
}
console.log(`\n${results.length - failed}/${results.length} OK.`);
if (failed) {
  console.error(`\n⚠ ${failed} source(s) failed. A published Recount citation may be stale or rotted — review and add a dated "revisited" annotation (never a silent edit).`);
  process.exit(1);
}
