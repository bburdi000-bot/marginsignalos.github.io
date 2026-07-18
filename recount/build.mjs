#!/usr/bin/env node
/**
 * The Recount — page generator.
 * Single source of truth: recount/manifest.json.
 * Regenerates the STUDIES and CASEFILES blocks inside recount.html (between the
 * RECOUNT:*:START / :END markers) and updates the /recount <lastmod> in sitemap.xml.
 * Run: `npm run build:recount`. Never hand-edit the generated blocks.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(readFileSync(join(root, "recount/manifest.json"), "utf8"));

const doiLink = (doi, label) =>
  `<a href="https://doi.org/${doi}" class="text-brand-orange hover:text-orange-600" rel="noopener" target="_blank">${label}</a>`;

function renderStudy(s) {
  const published = `Published ${s.published}` + (s.doi ? ` &middot; ${doiLink(s.doi, "DOI")}` : "");
  const points = s.points.map((p) => `                    <li>${p}</li>`).join("\n");
  const cite = [];
  if (s.doi) cite.push(`Cite: <a href="https://doi.org/${s.doi}" class="text-brand-orange underline hover:text-orange-600" rel="noopener" target="_blank">doi.org/${s.doi}</a>`);
  const dl = [];
  if (s.pdf) dl.push(`<a href="${s.pdf}" class="text-brand-orange underline hover:text-orange-600">PDF</a>`);
  if (s.source) dl.push(`<a href="${s.source}" class="text-brand-orange underline hover:text-orange-600">source</a>`);
  if (dl.length) cite.push(`Download: ${dl.join(" &middot; ")}`);
  const citeLine = cite.length
    ? `\n                <p class="text-sm text-slate-500 mb-3">${cite.join(" &middot; ")}</p>`
    : "";
  return `            <div class="border border-brand-border rounded-xl p-8 bg-white">
                <div class="flex items-center justify-between mb-4 flex-wrap gap-2">
                    <span class="text-xs font-mono font-bold text-brand-orange uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-lg">${s.kicker}</span>
                    <span class="text-xs font-mono text-slate-400">${published}</span>
                </div>
                <h2 class="text-2xl font-bold text-brand-navy mb-4">${s.headline}</h2>
                <p class="text-brand-muted font-light leading-relaxed mb-4">${s.lede}</p>
                <ul class="space-y-3 mb-4 text-brand-muted font-light leading-relaxed list-disc pl-5">
${points}
                </ul>
                <p class="text-brand-navy font-semibold mb-2">${s.implicationLabel}</p>
                <p class="text-brand-muted font-light leading-relaxed mb-4">${s.implication}</p>${citeLine}
                <p class="text-[11px] text-slate-400 font-light">${s.footnote}</p>
            </div>`;
}

function renderCaseFile(c) {
  return `                <a href="${c.url}" class="border border-brand-border rounded-xl p-6 bg-white hover:border-brand-orange transition-all block">
                    <div class="text-brand-orange font-mono font-bold text-sm mb-2">${c.id}</div>
                    <p class="text-brand-navy font-semibold">${c.title}</p>
                    <p class="text-slate-500 text-sm mt-1">${c.blurb}</p>
                </a>`;
}

function replaceBlock(html, name, inner) {
  const re = new RegExp(`(<!-- RECOUNT:${name}:START -->)[\\s\\S]*?(<!-- RECOUNT:${name}:END -->)`);
  if (!re.test(html)) throw new Error(`Marker RECOUNT:${name} not found in recount.html`);
  return html.replace(re, `$1\n${inner}\n            $2`);
}

// --- recount.html ---
let html = readFileSync(join(root, "recount.html"), "utf8");
html = replaceBlock(html, "STUDIES", manifest.studies.map(renderStudy).join("\n"));
html = replaceBlock(html, "CASEFILES", manifest.caseFiles.map(renderCaseFile).join("\n"));
writeFileSync(join(root, "recount.html"), html);

// --- sitemap lastmod = latest study date ---
const latest = manifest.studies.map((s) => s.published).sort().at(-1);
if (latest) {
  const smPath = join(root, "sitemap.xml");
  const sm = readFileSync(smPath, "utf8").replace(
    /(<loc>https:\/\/www\.marginsignalos\.com\/recount<\/loc>\s*<lastmod>)[^<]*(<\/lastmod>)/,
    `$1${latest}$2`
  );
  writeFileSync(smPath, sm);
}

console.log(`✓ Recount built: ${manifest.studies.length} study(ies), ${manifest.caseFiles.length} case file(s). lastmod=${latest}`);
