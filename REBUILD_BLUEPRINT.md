Critical red-team facts now verified against ground truth:

- **The scanner DB actually contains 16 named fault lines** (15 in base64 + `ai_handoff` pushed at runtime) + 1 default fallback — **NOT 13**. Claiming "13 fault lines" sitewide is an *under*claim, not an overclaim — the instrument is more complete than the copy says. The number to standardize on is **16**.
- The DB still emits retired diagnostic names (`Signal Scan`, `Margin Diagnostic`) inside `recommendedDiagnostic` — these surface in the scanner output and must be rewritten to "Findings Call."
- CTA target confirmed: `assessment.html#exposure-review`, button "Book a 15-Minute Findings Call," posts to `formsubmit.co/ajax/support@marginsignalos.com`.

I have everything. Assembling the final blueprint.

---

# MarginSignal OS — FINAL EXECUTABLE REBUILD BLUEPRINT
**Branch:** `redesign-ai-positioning` · **Stack:** Tailwind CDN, Inter + Fira Code, brand-navy `#0F172A` / brand-orange `#F97316` / brand-muted `#64748B` / brand-border `#E2E8F0` / brand-dark `#020617` / brand-bg `#F8FAFC` · GA4 `G-Q93WQ98N9L`

**Hand this to the engineer as-is.** Every red-team fix is folded in and flagged `[RT]`. Three non-negotiable global rules sit above everything:

> **RT-FIX-1 — The design partner gets its OWN page and OWN intake.** It is NOT a renamed buyer button into `/exposure-review`. New page `/design-partner` + a distinct authority/scope intake + a sendable one-page brief.
> **RT-FIX-2 — Honesty lives in the GRAMMAR, not in a pill.** Every illustrative verdict is written in *conditional* voice ("here is the shape of a verdict… a contact that *would* read as resolved"), never declarative past tense. The estimator coefficient is exposed and user-editable, never a hardcoded "defensible" claim.
> **RT-FIX-3 — The number is 16, not 13.** The scanner DB contains 16 named fault lines. Standardize on **16** sitewide. Do not round your own instrument down.

Plus the standing constraints: never the word "CLARITY" in visible copy; patent-pending is a footnote only; no fabricated clients/results; capability-level only; named-competitor conflict language lives ONLY on `/for-investors`; AI is the lead, CPR is the instrument.

---

## (A) SITE MAP + HOMEPAGE SECTION ORDER

### A.1 Page list (decisions)

| Page | Decision | Job |
|---|---|---|
| `/` (index.html) | **REBUILD** | Buyer funnel. Feel gap → see verdict → believe moat → one CTA. |
| `/exposure-review` (rename `assessment.html`) | **KEEP + PROMOTE** | THE buyer conversion engine. Own-number diagnostic → 15-min Findings Call. |
| `/design-partner` (**NEW**) `[RT-FIX-1]` | **ADD — flagship** | The actual #1-unlock conversion. Concrete terms, own intake, sendable brief. Commercial + federal lanes. |
| `/verify` (**NEW**, absorbs `sample.html` + scanner) | **ADD** | Single proof surface. Sample verdict (conditional voice) + one scanner + own-number estimator. |
| `/independence` (independence.html) | **REBUILD → MOAT page** | Durable axis. Absorbs `how-we-differ`. **Moat argued with teeth here (the ONE place).** |
| `/how-we-differ` | **CUT → 301 → /independence** | Wedge folds into independence §2. |
| `/methodology` | **KEEP, demote in nav** | Falsifiable instrument. 16 fault lines, fault attribution. Diligence floor. |
| `/sample` | **CUT → 301 → /verify** | Becomes verify §Rung-1. |
| `/demo-access` | **CUT → 301 → /exposure-review** | Kills the CTA-splitting "Book a Live Demo." |
| `/insurance-claims`, `/healthcare-rcm`, `/bpo-msp` | **REBUILD from template** | Commercial entry doors, one vertical's language, same single CTA. |
| `/for-federal` (**NEW**) | **ADD** | Federal twin. M-25-21 mandate-as-proof. Routes to `/design-partner` federal lane. |
| `/for-investors` (**NEW**, = "Partners & funders") | **ADD — footer-quiet** | Durability/moat page. Reached from footer + one quiet home line. Never a nav button, never a raise banner. |
| `/blog/` | **KEEP** | SEO/AEO, owns "CPR." |

### A.2 Navigation (enforces single-CTA discipline)

Replace the 12-item "Resources" dropdown sitewide. Desktop nav, left→right:
`MarginSignal` + orange `OS™` (logo→`/`) · **The Problem** (`/#problem`) · **Verify** (`/verify`) · **Independence** (`/independence`) · **Industries ▾** (Insurance Claims · Healthcare & RCM · BPO/MSP · **Federal**) · **Methodology** (`/methodology`) · **Blog** (`/blog/`) · **`[Book a Findings Call]`** (solid orange, the ONLY button, → `/exposure-review`).

Footer (4 columns — where secondary/tertiary paths live):
- **Verify the AI:** Verify · Sample Verdict · Methodology
- **Why Independent:** Independence & Art. 31 · The Problem · Founder
- **Industries:** Insurance · Healthcare/RCM · BPO/MSP · Federal
- **Company:** Blog · **Become a Design Partner** (`/design-partner`) · **Partners & funders** (`/for-investors`) · Contact · *footnote: "Core methods patent-pending."*

### A.3 Homepage section order (each with its single job)

| # | Section | Single job | RT note |
|---|---|---|---|
| 0 | Nav | One orange button only | — |
| 1 | **Hero — "Did your AI actually work?"** | Land the question, disarm data objection, fire the ONE primary CTA | Hero has 1 button + 1 text link; kill the 3 co-equal CTAs |
| 2 | **The Gap (their number)** | Make them feel the money second | Inline link → `/exposure-review` |
| 3 | **The Sample Verdict** | Credibility artifact; fault-as-leverage reframe | `[RT-FIX-2]` conditional voice |
| 4 | **The Moat band** | Why believe ANY of this (referenced, not re-argued) | `[RT-FIX]` chips REFERENCE the moat; full argument lives on `/independence` |
| 5 | **Monitoring vs. Verdict (wedge)** | Defuse "I have Arize/Credo"; position as layer on top | — |
| 6 | **Become a Design Partner** | Name the #1 conversion; route to its OWN page | `[RT-FIX-1]` → `/design-partner`, NOT `/exposure-review` |
| 7 | **Run the Scanner (no-data)** | Zero-friction top-of-funnel, explicitly secondary | `[RT-FIX]` ONE scanner surface sitewide lives here |
| 8 | **Industries + Federal** | Route each buyer to their language | — |
| 9 | **Founder (restraint)** | Solo = asset, no operator to protect | — |
| 10 | **Closing CTA + quiet funder line** | End on the hook; funder path as byproduct | quiet `/for-investors` link |
| 11 | FAQ (collapsed) | Absorb residual objections below the CTA | — |

**Cut from current homepage:** the `#offer-ladder` Engagement Options pricing tiers (competes with single CTA, implies many customers); all 11 `demo-access` / "Book a Live Demo" links; the standalone "live-calc terminal matrix" feature-theater `[RT]` (demote — it flirts with exposing the mechanism and pulls attention to *how* over *why*). Methodology depth moves to `/methodology`.

---

## (B) PER-PAGE SHIP-READY SPECS

### B.1 — HOMEPAGE (`index.html`)

**§1 Hero**
- Eyebrow: `INDEPENDENT AI VERIFICATION · OUTCOME, NOT ACTIVITY`
- H1 (`text-5xl md:text-7xl font-extrabold` navy): **Did your AI actually work?**
- Subhead:
  > Monitoring proves your AI ran. It can't prove it worked.
  > We can — independently. We measure whether your AI actually lowered the cost of reaching the right answer, and when it didn't, we name whose fault it was: data, model, operator, or agent.
  > Evidence that holds up, because it doesn't come from the people being graded.
- Disarm line (navy/5 pill, shield icon): *Runs on the volume and resolution rate you already know. No PHI, no PII, no integration to get a first number. Governed by written agreement; illustrative until validated against your data.*
- CTAs: PRIMARY orange **Book a Findings Call** → `/exposure-review` (GA `hero_primary_cta_click`); SECONDARY text link **See a sample verdict →** → `#sample-verdict`.
- Built-for row: Insurance Claims Ops · Healthcare & RCM · BPO/MSP · **Federal** (→`/for-federal`).

**§2 The Gap**
- Eyebrow: `THE GAP NOBODY PRICES`
- H2: **Your dashboard says $7 a contact. The resolution cost $42.**
- Body:
  > The number you report is the first contact. The number that hits your margin is the whole journey — the callback, the transfer chain, the escalation, the AI handoff that closed the ticket without solving the problem.
  > A 3% repeat rate isn't 3% waste. It compounds across every resolution, every day, in every queue you run. Automation doesn't fix that leak. It runs it faster.
  > The gap between the two has a dollar figure. Most operators have never seen theirs.
- Inline CTA (text link): **See your number →** → `/exposure-review`
- Visual: reuse the existing "Signal Gap" contrast card (dashboard-green vs. floor-reality).

**§3 The Sample Verdict** (`id="sample-verdict"`) `[RT-FIX-2 — CONDITIONAL VOICE]`
- Eyebrow: `INDEPENDENT AI VERIFICATION · SAMPLE READOUT`
- H2: **What an independent verdict looks like**
- Subhead (REWRITTEN to conditional — the honesty is in the grammar):
  > Here is the *shape* of a verdict on one AI-handled resolution, graded from outside the operator. Picture a contact the dashboard would log green — then the customer reopens it nine days later. The reported cost would read $38. The true cost to resolve would land near $214. And the fault wouldn't be yours.
- Reuse the AI Verification Readout card (navy header / fault grid Data ✓ Model ✗ Operator ✓ Agent-handoff ✗), but change the card's verdict strings to conditional/illustrative framing and keep the `[ ILLUSTRATIVE ]` orange pill top-right AND the footer line: *"Independently reproducible — verifiable by a party that does not trust the operator. Illustrative sample, not a client result."*
- Fault-as-leverage line under card:
  > When the verdict names the model-vendor, the failure stops being *your* budget problem and becomes *your* renegotiation leverage. That's the difference between a dashboard that blames you and a verdict that arms you.
- CTA (text link): **See the full verdict and run it yourself →** → `/verify`

**§4 The Moat band** `[RT — reference, don't re-argue]`
- Dark `bg-brand-navy` band. Eyebrow (orange): `WHY THE EVIDENCE HOLDS UP`
- H2 (white): **The company that builds the AI can't be the company that certifies it worked.**
- Body:
  > That isn't our opinion. It's the structure of an audit — and, under EU AI Act Article 31, increasingly the law. Our defensibility isn't a brand or a patent. It's *how* the evidence is produced: independent, externally anchored, and reproducible by someone who has no reason to trust the operator.
- 4 chips (this is the ONE homepage instance; do not repeat the grid elsewhere on this page): **Externally anchored · Independently reproducible · Cross-party attribution · Structurally neutral (Art. 31)**
- Footnote (slate, small): *Core methods patent-pending.*
- CTA (text link): **How independence is enforced — and why incumbents can't copy it →** → `/independence`

**§5 Monitoring vs. Verdict (wedge)**
- Eyebrow: `WHERE WE FIT`
- H2: **Your tools prove the AI ran. None of them can grade the operator.**
- Contrast rows (one idea per line):
  > **Observability (OpenTelemetry, OpenInference, LangSmith) proves it ran.** It shows you the trace, not the truth of the outcome.
  > **Your governance vendor is operator-paid.** It can't grade the operator that signs its invoice. Structurally, it never could.
  > **We ingest that same telemetry — and add the one thing neither can.** An outcome verdict from a party with no stake in the answer.
- Closing line (semibold navy): **We're the layer on top of your stack. Not a rival to it.**
- No CTA. Optional text link **Read the methodology →** → `/methodology`.

**§6 Become a Design Partner** `[RT-FIX-1 — NEW, routes to its own page]`
- `bg-white border-y`, centered max-w-3xl, subtle orange-tinted card.
- Eyebrow (orange): `DESIGN PARTNER PROGRAM`
- H2: **Be the first verdict we publish — on defined terms.**
- Body:
  > We're selecting a small number of design partners — one commercial operation, one federal use case — to produce the first reproducible CPR verdicts in the open.
  > No client logos to show you yet. That's the point: no other operator we have to protect, no result we've ever had a reason to soften. You get an independent number your board, your underwriter, or your auditor will accept — and a defined first-mover arrangement for going first.
- 3 honest chips: **Data-minimal** (starts on volume + resolution rate; de-identified first) · **Reproducible** (re-run the verdict yourself; that's the deliverable) · **One use case** (30–60 days, before-and-after, scoped up front)
- CTA (orange button): **See the design-partner terms →** → `/design-partner` (GA `design_partner_cta_click`). *Note: distinct destination and intake from the buyer Findings Call.*

**§7 Run the Scanner** (`id="ai-demo"`) `[RT — the ONLY scanner surface sitewide]`
- Eyebrow pill: `PRELIMINARY SCANNER · NO DATA REQUIRED`
- H2: **Not ready to share a number? Start here.**
- Subhead:
  > Describe a friction pattern in plain language. The Scanner maps it to one of **16** structural fault lines and surfaces a preliminary exposure range — using no sensitive data at all. It's a hypothesis, not a verdict. The verdict comes when we run it on yours.
- Reuse scanner widget verbatim (keep DOM IDs). **`[RT-FIX-3]` Scanner DB cleanup:** in the base64 `_p` DB, replace every `recommendedDiagnostic` value (`"Signal Scan"`, `"Margin Diagnostic"`) with `"Findings Call"`; keep all 16 fault lines. Keep the PHI/PII guard line.
- Subordinate link below output: **Want this on your actual number? Book a Findings Call →** → `/exposure-review` (GA `scanner_to_findings_click`).

**§8 Industries + Federal**
- Eyebrow: `BUILT FOR YOUR OPERATION` · H2: **Same question, your language.**
- 4 cards (muted text links, no buttons):
  1. **Insurance Claims Ops** → `/insurance-claims` — *Did the claims AI actually close the file — or just defer the reopen and the leakage?*
  2. **Healthcare & RCM** → `/healthcare-rcm` — *Did the RCM bot resolve the denial, or move it downstream into costlier rework?*
  3. **BPO / MSP** → `/bpo-msp` — *Can you prove to your client the AI cut cost per resolution — with evidence they didn't have to take on faith?*
  4. **Federal** (navy card, orange left-border) → `/for-federal` — *An independent Impact read on a deployed AI use case — de-identified, weeks not quarters. Built for M-25-21, not margin.*

**§9 Founder**
- Eyebrow: `THE PERSON BEHIND THE VERDICT` · H2: **You'll talk to the person who built the engine.**
- Body:
  > MarginSignal OS is built by Brandon Burdin — years inside the operational economics of large service organizations, now spent on one question: did the AI actually work, and whose fault is it when it didn't.
  > Solo is a feature here. There's no account manager between you and the methodology, and no other operator whose result we have to protect. The work has drawn an accepted op-ed in *Federal News Network* (publishing mid-2026) and a working dialogue with federal AI leadership — not revenue, but evidence the category is real and pulling.
- `[RT]` Frame op-ed/VA as dated demand-signal, not standing traction. No Verizon-specific authority. Muted LinkedIn link only.

**§10 Closing CTA + quiet funder line**
- Dark `bg-brand-dark`. H2 (white): **Your dashboard says green. Your margin says otherwise.**
- Sub: *Fifteen minutes. Your number, read by someone who has no stake in the answer.*
- CTA (orange, large): **Book a Findings Call** → `/exposure-review` (GA `closing_cta_click`)
- Quiet funder line (`text-xs text-slate-500`): *The plan is dated: ship the first reproducible verdict, then weaponize independence. Partners and funders — [talk to the founder →](/for-investors).*

**§11 FAQ** (collapsed `<details>`, below CTA; keep FAQ JSON-LD in `<head>` in sync)
1. **You've never rated anyone publicly — why trust this?** → *Correct, and we won't pretend otherwise. Zero published verdicts means zero conflicts and zero results we've had reason to soften. Every sample is labeled illustrative. The offer is to be the first reproducible verdict, on defined terms.*
2. **I won't hand a solo founder our PHI/claims data.** → *You don't have to — not to get a number. The Scanner needs no data. The Exposure Review runs on volume and resolution rate you already know. The Findings Call is scoping, not a data dump. Anything beyond is governed by written agreement, de-identified first.*
3. **We already run Arize/Credo/a governance vendor.** → *Keep them. Observability proves the AI ran; an operator-paid governance vendor can't grade the operator. We ingest that telemetry and add an outcome verdict from a party with no stake — the layer on top, not a replacement.*
4. **Is this just a CPR calculator?** → *No. CPR is the instrument. The output is a CFO-grade annualized dollar and a fault attribution — did the AI make the right answer cheaper, and if not, whose fault.*
5. **What is Cost Per Resolution?** *(keep existing — feeds AEO/schema)*

---

### B.2 — `/independence.html` (MOAT page — absorbs how-we-differ) `[RT: moat argued with teeth HERE, leads for funder/federal readers]`

Section order: **1 Hero → 2 The Wedge (monitoring vs verdict, from how-we-differ) → 3 The Standard (Art.31/PCAOB/2008) → 4 The Conflict Map (structural, capability-level) → 5 The Rule (5 binding points) → 6 Reproducibility + 4 chips → 7 Scope & Governance + quiet funder line → 8 Closing CTA.**

**§1 Hero** — Eyebrow `THE MOAT · STRUCTURAL NEUTRALITY`. H1: **The company that builds the AI can't be the company that certifies it worked.** Sub: *That isn't our slogan. It's the rule the whole category is being rebuilt around. Every other AI-assurance vendor is run by — or paid by — the operator they grade. We're not. And we made that a structure you can hold us to, not a sentence you have to believe.* CTAs: PRIMARY **Book a Findings Call** → `/exposure-review`; SECONDARY **See what a verdict looks like** → `/verify`.

**§2 The Wedge** (absorbs how-we-differ) — H2: **Monitoring proves your AI ran. It can't prove it worked.** Three-layer stack widget: Observability (OTel/OpenInference/LangSmith, "Did it run?", operator-paid) → AI governance (Credo/Fiddler/Arize/ValidMind, "Is the model well-behaved?", operator-paid) → **Independent verdict (MarginSignal OS, navy highlighted, "Did it work — and whose fault if it didn't?", buyer-paid, "the layer on top — not a rival")**. Closing: *We don't replace your monitoring. We turn its output into evidence someone outside your building will accept.*

**§3 The Standard** (reuse existing 3-card grid) — H2: **Independence isn't our idea. It's becoming the rule everywhere it matters.** Cards: **EU AI Act Art. 31** (body assessing high-risk AI must be independent of any operator with economic interest) · **SEC/PCAOB auditors** (no financial interest in the entity audited) · **The 2008 ratings lesson** (issuer-pays destroys the rating). Closing line: *We don't cite these because we have to. We cite them because we already built to them.*

**§4 The Conflict Map** `[RT — structural only, "structured around" not "can't shed", no named-company roster on this public page]` — H2: **Why the funded incumbents structurally can't do this.** Two-column contrast: LEFT "The structure most assurance vendors are **structured around**" (operator-run or operator-funded · sells advisory to the parties it assesses · issuer-pays warranty/rating — *each a sound business, none structurally independent*); RIGHT "The structure we chose" (buyer-pays · no equity/board/advisory from any party we measure · independence covenant in governing docs — *copyable only by unwinding their own model — that's the moat*). **No named companies on this page** — the roster lives only on `/for-investors`.

**§5 The Rule** (reuse existing 5-point markup) — 1. No financial entanglement (navy card). 2. Buyer-pays, not issuer-pays. 3. We verify the system and the vendor — never your team *(doubles as the "if it failed that's my budget" disarm)*. 4. A structural firewall. 5. No fabricated results, no undisclosed conflicts, ever. Add sub-line: *We have zero outcomes rated publicly today — and we'd rather say that plainly than fake one. The first reproducible verdict is the catalyst. The honesty is the credential until then.*

**§6 Reproducibility** — H2: **Don't trust the verdict. Re-run it.** Body about externally-anchored, skeptic-recomputable. The 4 proof chips in one navy band (this is the ONE place the chip grid is rendered with full sub-lines on this page). CTAs: **See a verdict you can re-run** → `/verify`; **Read the methodology** → `/methodology`.

**§7 Scope & Governance** (reuse card) — binding scope, annual review, `Version 1.0 · 2026`. Quiet funder line: *Partners and funders evaluating this structure can [talk to the founder →](/for-investors).*

**§8 Closing CTA** — navy band. H2 (white): **Independence you can verify — not just trust.** Single orange button **Book a Findings Call** → `/exposure-review`.

301: `how-we-differ` → `independence` in `vercel.json`.

---

### B.3 — `/verify.html` (NEW proof surface — absorbs sample.html + scanner) `[RT-FIX-2, RT-FIX-3]`

Three rungs, ascending commitment. ONE loud CTA (Findings Call) repeated at Rung-3 and close.

**§1 Hero** — Eyebrow `PROOF, NOT CLAIMS`. H1: **Did your AI actually work? Here's how you'd know.** Sub: *Most vendors show you a dashboard. We show you a verdict — and then we let you re-run it.* 3-rung jump-strip: `1 · See a verdict` `2 · Run a scan` `3 · Your own number`.

**§2 Rung 1 — Sample Verdict** (`id="rung-1"`, reuse readout card) `[RT-FIX-2 conditional voice]`
- Eyebrow `RUNG 1 · SAMPLE VERDICT`. H2: **What an independent verdict looks like.**
- Sub: *Here's the shape of a verdict on one AI-handled resolution, graded from outside the operator. Picture a contact the dashboard would log green — then the customer reopens it nine days later. Reported cost would read $38. True cost to resolve would land near $214. The fault wouldn't be yours.*
- Card carries `[ ILLUSTRATIVE ]` pill + footer *"Illustrative sample, not a client result."* Below: the fault-as-leverage reframe (same as homepage §3).

**§3 Moat strip** (`bg-brand-dark`) `[RT — reference the moat, link out]` — H3: **The company that builds the AI cannot be the company that certifies it worked.** One line + the 4 chips (compact, no full re-argument). Footnote: *Core methods patent-pending.* Link: **How the independence holds up →** → `/independence`.

**§4 Rung 2 — Scanner** (`id="rung-2"`, reuse widget + cleaned DB) `[RT — this is the page that owns the scanner; remove the home scanner if duplicating, OR keep home as the single instance and make this a link to it. Decision: home owns the live scanner; /verify embeds the SAME widget once. Do not stand up a third instance on verticals.]`
- Eyebrow `RUNG 2 · PRELIMINARY SCAN`. H2: **Run it on a pattern. No data, no email.**
- Sub: *…maps it to one of **16** structural fault lines… It's a hypothesis, not a verdict.*

**§5 Rung 3 — Estimate Your Own Number** (`id="rung-3"`) `[RT-FIX-2 — coefficient exposed + editable, output is a RANGE, no "defensible" claim]`
- Eyebrow `RUNG 3 · YOUR OWN NUMBER`. H2: **Now put your numbers in.**
- Inputs: Monthly contacts · FCR % · Reported cost/contact · **+ a visible, editable "rework multiple" field defaulting to a labeled assumption.**
- Output: a navy readout showing reported cost, estimated true CPR, and an **annualized gap RANGE**, each tagged *"your assumption, not our claim."*
- **Estimator JS (RT-corrected — assumption is the user's, shown and editable, output is a range):**
```js
function vrCalc(){
  var vol=parseFloat((document.getElementById('vrVolume').value||'').replace(/,/g,''))||0;
  var fcr=parseFloat(document.getElementById('vrFcr').value)||0;
  var cost=parseFloat(document.getElementById('vrCost').value)||0;
  // Rework multiple is the USER'S assumption, shown and editable. Default mid-point of a labeled range.
  var mult=parseFloat(document.getElementById('vrMult').value)||3.0; // labeled "your assumption (industry range 2–5x)"
  var failRate=Math.max(0,(100-fcr))/100;
  var lowMult=Math.max(1.5, mult-1), highMult=mult+1; // produce a RANGE, never a single asserted figure
  function trueCPR(m){return cost*(1+failRate*(m-1));}
  var annualLow=(trueCPR(lowMult)-cost)*vol*12, annualHigh=(trueCPR(highMult)-cost)*vol*12;
  var fmtM=function(n){return n>=1e6?('$'+(n/1e6).toFixed(1)+'M'):('$'+Math.round(n).toLocaleString());};
  document.getElementById('vrReported').textContent=cost?('$'+cost.toFixed(2)):'$—';
  document.getElementById('vrTrue').textContent=(cost&&fcr)?('$'+trueCPR(mult).toFixed(2)):'$—';
  document.getElementById('vrAnnual').textContent=(vol&&cost&&fcr)?(fmtM(annualLow)+'–'+fmtM(annualHigh)):'$—';
}
['vrVolume','vrFcr','vrCost','vrMult'].forEach(function(id){var el=document.getElementById(id);if(el)el.addEventListener('input',vrCalc);});
```
- Output footer: *Illustrative estimate from your inputs and your chosen rework multiple (industry observations commonly cite 2–5x). This is your assumption, not our claim. Validated against your data on the findings call.*
- CTA (PRIMARY orange): **Get the full read + book a 15-minute findings call →** → `/exposure-review`. Sub-line: *An independent read on your number — not a sales demo. You talk to the person who built the engine, and we have no other operator to protect.*

**§6 What the Full Verdict Delivers** — reuse the `sample.html` 6-card deliverable grid. **`[RT]` Drop the Typeform "Try Free CPR Calculator" button (splits intent).**

**§7 Reproducibility Promise** (`bg-brand-navy`) — H2: **Reproducible — re-run it yourself.** CTA: **Book a 15-Minute Findings Call** → `/exposure-review`; secondary **Read the methodology →** → `/methodology`.

301: `sample` → `verify`. Update `sitemap.xml` (+verify, −sample), nav/footer `/sample`→`/verify` sitewide.

---

### B.4 — VERTICAL TEMPLATE (`_vertical-template.html` → 3 clones) `[RT — no scanner here; conditional-voice verdict]`

Token table (fill once per clone):

| Token | insurance-claims | healthcare-rcm | bpo-msp |
|---|---|---|---|
| `{{VERTICAL_NAME}}` | Insurance Claims | Healthcare & RCM | BPO & MSP |
| `{{RESOLUTION_NOUN}}` | resolved claim | resolved account | resolved ticket |
| `{{INTERACTION_NOUN}}` | claims interactions | patient & payer interactions | client interactions |
| `{{VANITY_METRIC}}` | First Contact Resolution | clean-claim rate | SLA compliance |
| `{{DASHBOARD_LINE}}` | Your FCR looks stable. | Your clean-claim rate looks healthy. | Your SLA dashboard says green. |
| `{{SENSITIVE_DATA}}` | claims data | PHI | client data |

Section order: **1 Hero (uncomfortable question) → 2 The Gap (their money) → 3 Three Fault Lines → 4 Sample Verdict (conditional) → 5 Monitoring-vs-Verdict wedge → 6 What we need to start (data-minimal) → 7 Why neutral (moat chips, referenced) → 8 Closing CTA → 9 FAQ.** `[RT]` **No scanner section on verticals** (scanner lives on home + /verify only). The §7 chip grid is a compact REFERENCE with a link to `/independence`, not a re-argued moat.

- **§1 Hero H1:** *Your AI is now closing {{INTERACTION_NOUN}}. Did it actually lower the cost of a {{RESOLUTION_NOUN}} — or just close the file faster?* CTA PRIMARY **Book a 15-Minute Findings Call** → `/exposure-review`; SECONDARY text **See what a verdict looks like →** → `/verify`. Disarm microcopy: *Starts on volume and {{VANITY_METRIC}} you already know — no sensitive data to begin. Illustrative until validated against your data, under written agreement.*
- **§4 Sample Verdict** `[RT-FIX-2]` — code-style readout in **conditional voice**: *"VERDICT — {{VERTICAL_NAME}} · illustrative / picture a contact that would read as resolved, then reopens day 9 / reported $38 / true ~$214 / fault: model-vendor handoff, not your team / reproducible — re-run on your own export."* Label pill + caption mandatory.
- **§8 Closing CTA** — *{{DASHBOARD_LINE}} Your margin may say otherwise.* Body names the design-partner offer ONCE: *Be the first reproducible verdict in {{VERTICAL_NAME}} — [explore design-partner terms →](/design-partner).* `[RT-FIX-1]` (links to the real partner page, not buried in the buyer form). Primary button stays **Book a 15-Minute Findings Call** → `/exposure-review`.

QA: zero "Signal Scan / margin diagnostic / Book Diagnostic / forensic margin / CLARITY / Book a Live Demo"; every $ figure labeled illustrative; AI leads each H1/H2; "16" not "13"; no `{{...}}` left unfilled.

---

### B.5 — `/design-partner.html` (NEW — the real #1-unlock conversion) `[RT-FIX-1 — the single most important new page]`

**Page job:** convert a qualified operator (commercial OR federal) into a scoped, time-boxed, reproducible pilot. Concrete terms, asymmetric effort in the partner's favor, its own authority/scope intake, a sendable PDF brief. **Not** the buyer calculator.

**§1 Hero** — Eyebrow `DESIGN PARTNER PROGRAM`. H1: **Be the first reproducible AI verdict — on defined terms.** Sub: *We're selecting a small number of design partners to produce the first public, reproducible CPR verdicts. Going first should be easier than not. Here's exactly what it involves, what you get, and what we'd need.*

**§2 The deal, in a 3-column "you give / you get / the catch" grid** (the concreteness the red-team demanded):
- **What you commit:** one named use case · de-identified data only · 30–60 days · one executive owner who can approve a pilot.
- **What you get:** an independent, reproducible CPR verdict at no or reduced fee · direct input into the methodology · publish-optional (your logo only if you choose) · a number your board / underwriter / GAO will accept.
- **The catch (stated plainly):** the verdict is reproducible and may be referenced as a (logo-optional) proof point. We never fake a result, and we never publish your name without consent.

**§3 Pre-scoped pilot menu** (reduces partner effort — pick one):
- Commercial: *a claims-deflection flow* · *a denial-rework flow* · *a tier-1 deflection flow.*
- Federal: *one veteran-facing virtual-assistant use case* (de-identified Impact read).

**§4 Two lanes** — **Commercial** (ops leader at insurer/health system/BPO; 30–60 day before-and-after) and **Federal** (M-25-21 mandate; scoped Impact read on de-identified data; bought as a pilot slice under a prime, not a standalone procurement; links to `/for-federal`).

**§5 Design-partner intake** `[RT — distinct from buyer form; qualifies authority + scope, NOT volume/FCR]`. Fields: name · org · role · *which one use case you'd scope* (the pilot-menu options as a select) · *can you approve a pilot?* (yes/needs sponsor) · timeline · one-line context. Posts to `formsubmit.co/ajax/support@marginsignalos.com` with subject `Design Partner — [org]`. GA `design_partner_intake_submit`.

**§6 Sendable brief** — a **"Download the one-page Design Partner Brief (PDF)"** link so the founder can drive the 1:1 motion. Per memory, generate the PDF into `~/Downloads` via Chrome headless at build close.

**§7 Closing** — *No client logos to show you yet. That's the point — no other operator to protect, no result we've had reason to soften. Go first, on defined terms.* CTA: scroll to §5 intake.

Homepage §6 and all vertical §8 design-partner links point HERE, not to `/exposure-review`.

---

### B.6 — `/for-federal.html` (NEW federal twin)

**§1 Hero** — Eyebrow `FEDERAL · POST-DEPLOYMENT AI IMPACT`. H1: **Your veteran-facing AI is deployed. Can you prove — independently — that it works?** Sub frames the mandate as the buyer's requirement, not MSOS's opinion.

**§2 Mandate-as-proof band** — OMB **M-25-21** requires post-deployment monitoring + independent review including "evaluating the effectiveness of vendor offerings"; **GAO** flagged continuous monitoring as a gap; **VA ≈ 64%** of federal high-impact AI use cases. *This makes the need official, not our pitch.* No CMMC. FedRAMP/NIST 800-53/VA 6500-aware language for the data objection.

**§3 Illustrative Impact readout** `[RT-FIX-2 conditional]` — outcome rate, true cost-to-resolve before/after, AI-vs-human split, where cost leaks — on synthetic/de-identified data, labeled illustrative, conditional voice.

**§4 Structural neutrality** — Art. 31 anchor + "builder cannot certify"; buyer-pays. Booz Allen/Credo answered structurally (incumbents are operator-run/operator-paid) — **capability-level, no roster** on this public federal surface.

**§5 Founder credibility (restraint)** — caregiver-of-a-disabled-veteran *why* (substance-led), in dialogue with federal AI leadership. No sympathy-lead.

**§6 CTA** — federal-shaped, single: **Scope one use case: a 30–60 day independent Impact read on de-identified data** → request the one-pager / working session → routes to `/design-partner` **federal lane** (its intake). `[RT — federal design partner gets first-class surface, not thinner than a widget.]` Patent-pending footnote only.

---

### B.7 — `/for-investors.html` (NEW — durability/moat page; footer-quiet) `[RT — leads with the moat; named-competitor map lives ONLY here]`

No raise banner. Reached from footer "Partners & funders" + one quiet home line. `mailto:` CTAs only (no lead-gen form — reinforces "not a raise").

Section order: **1 Hero (moat-first) → 2 The category → 3 Why un-copyable (4 reasons) → 4 Competitive map (named, capability-level, "structured around") → 5 Falsifiable instrument → 6 Dated catalyst → 7 Two design-partner lanes → 8 Founder → 9 The next step (SAFE, once, low) → 10 Closing.**

- **§1 Hero** — Eyebrow `FOR PARTNERS & FUNDERS`. H1: **The moat isn't the model. It's who's allowed to grade it.** Sub: *Every funded incumbent in AI assurance is run by — or paid by — the operator it grades. We're the one that structurally can't be. That's a position they can't copy without unwinding their own business.* Dark moat band: 4 chips + *"The company that builds the AI cannot be the company that certifies it worked."* CTAs: **Talk to the founder** (`mailto:support@marginsignalos.com?subject=Partners%20%26%20funders%20%E2%80%94%20MarginSignal%20OS`); **Read the independence rule →** → `/independence`.
- **§3 Four reasons un-copyable:** structural neutrality (Art. 31) · buyer-pays not issuer-pays (2008 lesson) · reproducible (true today) · solo = clean independence story.
- **§4 Competitive map** `[RT — the ONE place named companies appear; "structured around," not "can't shed"]` — 2-col table: *Who's in the space* / *The structural conflict they're structured around*. Rows: operator-run governance/observability (Credo, Holistic, Fiddler, Arize, ValidMind) · operator-embedded security (Cisco AI Defense, Protect AI) · independent-leaning auditors (Eticas, Resaro — audit process/bias, not the economic outcome) · issuer-pays warranty (Armilla/Lloyd's-backed). Label: *Capability-level comparison. No disparagement intended.* **Open seat:** independent, buyer-pays, outcome-anchored, reproducible.
- **§5 Falsifiable instrument** — **16 fault lines** `[RT-FIX-3]`, cross-party attribution, ONE illustrative readout (conditional voice, labeled). Link `/methodology`.
- **§6 Dated catalyst** — 4-step path: *Now (non-dilutive in flight)* → **Unlock (first design partner, orange-accented)** → *Proof (one real verdict ships)* → *Re-rate*. Honest-stage line: *Pre-revenue. Zero outcomes rated publicly. One dated event away from changing both.*
- **§7 Two lanes** — commercial (Exposure Review live) + federal (M-25-21). Demand-signal line: accepted FNN op-ed (dated, publishing mid-2026), live VA AI dialogue, caregiver-veteran fit — *category pull, never revenue.*
- **§9 The next step** — restrained slate card, ONCE, low: *non-dilutive first, then a design partner, then a deep-tech pre-seed — on the order of a ~$750K SAFE around a ~$6M cap, priced off a shipped verdict and a named reference, not off this page. We're not asking today.*
- **§10 Closing** — H2: **The incumbents grade their own work. We don't have to.** Button: **Talk to the founder** (mailto). Micro-line: *No raise banner. No deck on the public web. Just the founder, the moat, and a dated catalyst.*

---

## (C) CONVERSION + FUNNEL MECHANICS

**The Verify wedge (3 rungs, ascending commitment):** Rung 0 Scanner (no data/email) → Rung 1 Exposure Review (their number, no PHI) → Rung 2 Findings Call (15-min, founder-led). Each rung is honest about being illustrative until it touches real data, and makes the next rung feel smaller.

**CTA hierarchy (the anti-competition rule):**
1. **Loudest, every page:** Book a Findings Call → `/exposure-review` (the only orange button in nav and the only repeated orange button).
2. **Door selectors (route without diluting):** Design Partner → `/design-partner`; Federal → `/for-federal` → `/design-partner` federal lane; Funder → footer-quiet `/for-investors`.
3. **Demoted to secondary (text/outline links):** Scanner, Sample/Verify.
4. **Never present:** "Book a Live Demo," a raise banner, any unlabeled illustrative output, any "trusted by" claim.

**Two distinct intakes** `[RT-FIX-1]`:
- **Buyer (Exposure Review):** two-step — Step 1 delivers value (volume/FCR/cost → their dollar), Step 2 asks name/role/company/email after the number is shown. Qualifies: real volume, FCR, vertical, AI-deployed yes/no.
- **Design partner (`/design-partner`):** qualifies authority + scope (which use case, can you approve a pilot, timeline) — NOT volume/FCR. Plus the sendable PDF brief.
- **Federal:** "request the one-pager / scope a working session" (name, agency, one-line use case). Consultative, no marketing fields.
- **Funder:** single `mailto:` "talk to the founder." No form.

**Trust signals (structural, not social):** 4 proof chips near CTAs (referenced, not re-argued every page) · the moat one-liner · reproducibility as falsifiable promise · honest-stage line as catalyst · founder substance (dated) · illustrative labeling everywhere **in conditional grammar** `[RT-FIX-2]`.

**Friction reducers:** data-minimal ladder (Scanner→ExposureReview→call) · fault-attribution-as-leverage reframe · "layer on top of Arize/Credo, not a rival" · CFO-grade dollar not a metric · federal "weeks not nine-month queue, no CMMC."

---

## (D) HOW IT ADVANCES THE PATH TO FUNDING

**The model:** the site has one funding job — **manufacture the first reproducible CPR verdict by landing a design partner.** Everything else is gated behind that event.

**#1 — Design partner (the unlock).** `[RT-FIX-1]` Now a real conversion path: `/design-partner` with concrete give/get/catch terms, a pre-scoped pilot menu (asymmetric effort in the partner's favor), its own authority/scope intake, and a sendable one-page brief that supports the founder's 1:1 motion. Two lanes (commercial fastest; federal VA Impact pilot first-class, not a thin widget). Homepage §6, every vertical §8, and `/for-federal` route here. This is the fix that turns the site from "generates findings calls" into "closes a partner."

**#2 — Investor-readiness (byproduct, post-partner).** `/for-investors` signals fundability without a raise banner: moat-first (leads with Art. 31/PCAOB/un-copyability for the check-writer), the dated catalyst path, platform trajectory (ingest OTel/OpenInference/LangSmith as the neutral auditor layer), real-but-dated demand signals. The ~$750K/~$6M SAFE appears once, low, framed as "after the partner." Investor-readiness is signaled by buyer-grade credibility + a dated catalyst, never by asking.

**#3 — Federal (parallel design-partner lane + posture constraint).** `/for-federal` rides the M-25-21 mandate-as-proof, routes to the federal design-partner lane, and preserves the neutral/credible posture (capability-level, no roster, patent footnote) that survives the Booz Allen/Credo VA incumbency and keeps SDVOSB-sub optionality alive.

**Non-dilutive (NVIDIA Inception/NSF SBIR/Lloyd's Lab):** advanced purely by the site being a buyer-grade diligence artifact — moat argued with teeth on `/independence`, falsifiable instrument on `/methodology` (16 fault lines), illustrative readout labeled. No "we're applying" banner.

---

## (E) BUILD ORDER

1. **Global plumbing first.** Rename `assessment.html` → `exposure-review.html` (preserve `id="exposure-review"`, "Book a 15-Minute Findings Call," formsubmit). Add 301s in `vercel.json`: `how-we-differ→independence`, `sample→verify`, `demo-access→exposure-review`, `assessment→exposure-review`. Update `sitemap.xml`. Build the shared nav (single orange button) + 4-column footer as copy-paste partials.
2. **`[RT-FIX-3]` Scanner DB cleanup.** In `index.html`, decode the `_p` base64, replace all `recommendedDiagnostic` values with `"Findings Call"`, re-encode. Standardize **"16 fault lines"** sitewide (currently says 13). Keep `ai_handoff` runtime push.
3. **`/design-partner.html` (NEW).** `[RT-FIX-1]` — highest priority new build; it's the #1 conversion the current site lacks entirely. Concrete terms + pilot menu + authority/scope intake + PDF brief.
4. **Homepage rebuild.** Re-sequence to the 11-section order; kill offer-ladder + all demo links + live-calc feature-theater; §3 sample verdict in conditional voice; §6 routes to `/design-partner`; §7 single scanner.
5. **`/independence.html` rebuild** (moat with teeth; absorb how-we-differ wedge as §2; "structured around," no roster).
6. **`/verify.html` (NEW).** Rungs 1–3; conditional-voice verdict; estimator with exposed/editable multiple + range output `[RT-FIX-2]`; absorb sample deliverable grid; drop Typeform button.
7. **`/for-federal.html` (NEW)** → routes to design-partner federal lane.
8. **Vertical template + 3 clones.** Conditional-voice verdict; no scanner; §8 design-partner link to `/design-partner`; retired-voice purge.
9. **`/for-investors.html` (NEW).** Moat-first; named map ONLY here; mailto CTAs.
10. **Global QA gate (grep before commit):** zero `Signal Scan|margin diagnostic|Book Diagnostic|forensic margin|Book a Live Demo|CLARITY`; zero `\b13\b.*fault`; every illustrative $ figure in conditional/labeled form; exactly one orange Findings-Call button per viewport region; `/design-partner` and `/for-investors` never appear as nav buttons; no named competitor on any page except `/for-investors`.

**Key files (absolute):** rebuild `/Users/bigdaddy/marginsignalos.github.io/index.html`, `…/independence.html`; rename `…/assessment.html`→`exposure-review.html`; new `…/design-partner.html`, `…/verify.html`, `…/for-federal.html`, `…/for-investors.html`; template `…/_vertical-template.html`→`insurance-claims.html`/`healthcare-rcm.html`/`bpo-msp.html`; keep `…/methodology.html`; 301/redirects `…/vercel.json`; `…/sitemap.xml`; voice gate `…/BRAND_VOICE.md`.

---

**Three load-bearing corrections this blueprint bakes in that the upstream specs got wrong:** (1) the scanner instrument has **16** fault lines, not 13 — the specs *under*claimed it; (2) the design partner is a **separate page with a separate intake**, not a renamed buyer button — the single biggest gap on the live site (0 mentions today); (3) every illustrative verdict is rewritten in **conditional grammar** and the estimator's rework multiple is **user-exposed and editable** outputting a range, so the "reproducible, externally-anchored" pitch isn't undercut by a hardcoded coefficient or a pill fighting past-tense client-narrative copy.