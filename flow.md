# SIGNAL — Project Execution Flow & Phase Tracker

This document tracks the active development phases, implementation milestones, verification results, and next steps for the **SIGNAL** product homepage project.

---

## Current Status: Human Product Polish & Anti-Generic Pass

- **Status:** **COMPLETED & VERIFIED**
- **Objective:** Infuse human product personality, noise-filtering distinction, dismissed evidence nodes, grounded operator copy, and controlled structural graph diversity.
- **Target Repository:** `Yuvraj264/Signal-Acdyon-company-` (`main` branch).

---

## Completed Phases (Phases 0 – 10 + Final Human Polish)

### Phase 0: Project Initialization & Foundation
- **Goal:** Set up clean, fast development environment.
- **Implemented:** React 19 + Vite 6 + Tailwind CSS v4 + Framer Motion + Lucide React.

### Phase 1: Design Foundation & Primitives
- **Goal:** Establish light-first editorial design system.
- **Implemented:** Custom design tokens (`--bg-base: #FAFAF8`, `--text-primary: #121211`, `--accent-signal: #FF4D00`), typography hierarchy (`Inter` + `JetBrains Mono`), component primitives (`Container`, `Button`, `Badge`, `Card`, `SectionHeading`, `Navbar`, `Footer`).

### Phase 2: Hero + Interactive Signal Investigation
- **Goal:** Showcase the product in the first 3 seconds without generic marketing fluff.
- **Implemented:** 4-state local state machine (`idle` → `investigating` → `connecting` → `revealed`) with animated SVG connector branches, root cause synthesis card, and expandable Telemetry Evidence Drawer.

### Phase 3: Complete Homepage Story
- **Goal:** Build the complete end-to-end product narrative around the centerpiece hero.
- **Implemented:** `Problem.jsx`, `ProductWorkflow.jsx`, `ProductPreview.jsx`, `Philosophy.jsx`, `FinalCTA.jsx`, `Navbar.jsx` & `Footer.jsx`.

### Phase 4: Motion + Premium Polish
- **Goal:** Refine motion hierarchy and micro-interactions.
- **Implemented:** Restrained cubic-out easing curve (`[0.16, 1, 0.3, 1]`), button hover arrow nudging, tactile active compression, initial hero entrance choreography, and subtle radial grid background texture.

### Phase 5: Responsive + Mobile Excellence
- **Goal:** Design intentional compositions across 390px mobile and 1440px desktop.
- **Implemented:** Single-column mobile narrative, vertical investigation tree restructuring, mobile vertical workflow connectors (`ArrowDown`), 44px minimum touch targets, and zero horizontal overflow without `overflow-x: hidden` hacks.

### Phase 6: Accessibility + UX Hardening
- **Goal:** Make the product robust, accessible, and screen-reader compliant.
- **Implemented:** Skip-to-content link (`#main-content`), heading hierarchy normalization (H1/H2), high-contrast focus rings (`outline: 2px solid #FF4D00`), `aria-live="polite"` status announcements, and keyboard `Escape` modal dismissal.

### Phase 7: Hostile QA + Bug Hunting
- **Goal:** Stress-test edge cases, state transitions, and unmount lifecycles.
- **Implemented:** Fixed button `type="button"` attributes, added tablist ARIA semantics in `ProductPreview.jsx`, removed unused icon imports, and verified unmount timer cleanup.

### Phase 8: Final Visual QA + Product Hunt Polish
- **Goal:** De-clutter visual noise and eliminate generic AI design cliches.
- **Implemented:** Verified 3-second value proposition, eliminated neon glows/glassmorphic blobs, calibrated display line heights, and audited whitespace.

### Phase 9: Deployment + Production Verification
- **Goal:** Prepare production build and hosting configuration.
- **Implemented:** Configured `vercel.json` for Vite SPA edge hosting; verified production build.

### Phase 10: Final Documentation & Defense Readiness
- **Goal:** Complete architectural decision record, ADR defense answers, and permanent project authority files.
- **Implemented:** Updated `DECISIONS.md` with complete ADR, 7 Mermaid architectural diagrams, assignment requirement mapping, and answers to all 3 core assignment questions. Created `flow.md` and `context.md`.

---

## Final Enhancement — Human Product Polish & Anti-Generic Pass

- **Signal vs. Noise Distinction:**
  - Implemented explicit **Dismissed Noise** nodes (`isDismissed: true`) in the graph (e.g. general billing support tickets or promotional marketing email blast), demonstrating that Signal's primary value is noise filtering rather than blind aggregation.
  - Added summary metric badges to root cause conclusions: `14 signals analyzed · 3 correlated · 1 dismissed noise → 1 Actionable Thread`.
- **Controlled Structural Asymmetry:**
  - Designed unique graph topology structures across all 4 scenarios in `src/data/incidents.js` (Linear code regression, database connection pool saturation, OAuth vendor token loop, and regional CDN edge regression).
- **Grounded Anti-Generic Copywriting:**
  - Audited and replaced vague SaaS tropes with operator-centric language across `Hero.jsx`, `Problem.jsx`, `ProductWorkflow.jsx`, and `FinalCTA.jsx`.
- **Revealed Conclusion Hierarchy:**
  - Standardized root cause conclusion: `ROOT TRIGGER IDENTIFIED` → Causal explanation → `Noise filtered metric strip` → `VIEW TELEMETRY EVIDENCE →`.
- **Production Build:**
  - Verified `npm run build` compiling cleanly in `22.44s` with `0 errors` and `0 warnings`.

---

## Phase 11 — Live Signal Map (Signature Interaction)

- **Status:** **COMPLETED & VERIFIED**
- **Objective:** Transform the Hero investigation visualization into a data-driven **Live Signal Map** as SIGNAL's signature interaction.

### Implemented:
- **Data-Driven Graph Topology:**
  - Augmented `src/data/incidents.js` with deterministic topology hints (`forked-branch`, `linear-chain`, `loop-retry`, `regional-hub`), directed causal edges, and explicit funnel count metrics (`countStory`).
- **5-Stage Investigation Progression:**
  - **STATE 1 — SCANNING:** Primary anomaly becomes active (`CHECKOUT FAILURES +18.2%`) with status `1/3: SCANNING SIGNALS & DISCOVERING NODES...`.
  - **STATE 2 — SIGNALS FOUND:** Candidate nodes enter progressively with staggered timing (`delay: item.delay`).
  - **STATE 3 — CORRELATING:** SVG connector arms animate smoothly across connected nodes (`2/3: CORRELATING CAUSAL DEPENDENCY GRAPH...`).
  - **STATE 4 — FILTERING:** Weak/irrelevant noise signals (`isDismissed: true`) recede gracefully (opacity 0.55, line-through title, dashed connector arm, `Noise dismissed` status tag).
  - **STATE 5 — ROOT CAUSE:** Causal path connector arms and receiving node cards highlight in Electric Orange (`#FF4D00`), culminating in the Root Trigger synthesis card (`3/3: NOISE FILTERED · ROOT CAUSE IDENTIFIED`).
- **Compact Signal Count Story Bar:**
  - Rendered compact status line: `14 signals detected → 4 relevant → 3 correlated → 1 actionable thread`.
- **Responsive & Accessibility Performance:**
  - Verified 390px vertical investigation tree with zero horizontal overflow, 1440px expressive dynamic graph, keyboard navigation, `aria-live="polite"` status announcements, and full `prefers-reduced-motion` compliance.

## Phase 12 — Investigation Timeline + Graph Synchronization

- **Status:** **COMPLETED & VERIFIED**
- **Objective:** Add a compact, interactive **Investigation Timeline** synchronized with the **Live Signal Map**.

### Implemented:
- **Data Model Timeline Mapping:**
  - Added explicit `timeline` arrays to each incident scenario in `src/data/incidents.js` establishing deterministic `TIMELINE EVENT → GRAPH NODE` mappings with timestamps (`14:02:11 UTC`), event types (`DEPLOYMENT`, `ERROR`, `TRAFFIC`, `CUSTOMER OPS`), titles, and descriptions.
- **Two-Way Synchronization:**
  - Created `InvestigationTimeline.jsx` component.
  - Hovering/focusing/selecting a timeline event highlights the matching graph node card and connector line in Electric Orange (`#FF4D00`).
  - Hovering/focusing/selecting a graph node highlights the matching timeline event.
- **Investigation Sequence Lockstep:**
  - **IDLE:** Quiet timeline state (`Chronological Trace Log Standby`).
  - **INVESTIGATING / CONNECTING:** Timeline events stream in lockstep with graph node discovery.
  - **REVEALED:** Causal thread events illuminate in `#FF4D00` with `✓ Causal` badges, while noise events recede into `Noise` filtered styling (opacity 0.55, line-through typography).
- **Flexible View Composition:**
  - Added tab switcher in `SignalDemo.jsx`: `Signal Map` (default centerpiece), `Timeline`, and `Map + Timeline` combined side-by-side split view.
- **Responsive & Accessibility QA:**
  - Verified single-column 390px mobile vertical flow with 0 horizontal overflow, keyboard focusability (`tabIndex={0}`), `aria-live="polite"` status announcements, and full `prefers-reduced-motion` compliance.

## Phase 13 — Noise Filtering + Explainable Root Cause

- **Status:** **COMPLETED & VERIFIED**
- **Objective:** Demonstrate **SIGNAL ≠ MORE INFORMATION → SIGNAL = BETTER ATTENTION** with explainable root cause selection and explicit noise filtering rationale.

### Implemented:
- **Explainable Data Model Extensions:**
  - Extended `src/data/incidents.js` with node relevance (`relevance: 'high'` / `'medium'` / `'low'`), decision status (`status: 'correlated'` / `'discarded'`), explicit rejection reasons (`filterReason`), and `causalRationale`.
- **Explicit Noise Rejection Rationale:**
  - Rendered inline filter reasons on discarded noise nodes in `InvestigationGraph.jsx` and timeline events in `InvestigationTimeline.jsx` (e.g. `FILTER REASON: Weak temporal correlation & unrelated billing queue`).
- **Explainable Root Cause Decision Log:**
  - Added an **Explainability Rationale Section** inside the revealed root-cause synthesis card detailing why the primary root trigger was selected over rejected candidates.
- **Funnel Metric Emphasis:**
  - Updated workspace funnel header to highlight noise reduction: `14 detected → noise discarded → 3 correlated → 1 Thread`.
- **Responsive & Production Build QA:**
  - Verified across 390px mobile and 1440px desktop.
  - Production build compiled cleanly in `1.09s` with 0 errors and 0 warnings.

---

## Verification & Build Summary

- **Production Build Command:** `npm run build`
- **Build Output:**
  - `dist/index.html`: `1.36 kB` (gzip: `0.76 kB`)
  - `dist/assets/index-CVTax5NK.css`: `42.71 kB` (gzip: `7.91 kB`)
  - `dist/assets/index-BHaqTXPZ.js`: `406.80 kB` (gzip: `122.44 kB`)
- **Errors & Warnings:** `0 errors`, `0 warnings`

---

## Next Steps
- **Final Deployment:** Connect GitHub repository `Yuvraj264/Signal-Acdyon-company-` to Vercel for live hosting.
- **Final Submission:** Submit repository and live URL for assessment evaluation.



