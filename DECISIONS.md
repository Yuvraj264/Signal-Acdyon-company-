# SIGNAL — Project Decision Log

This document serves as the permanent source of truth and architectural decision record (ADR) for the **SIGNAL** product homepage project. It is updated across each phase to record design rationales, technical decisions, trade-offs, and verification steps.

---

## 1. Product Concept

**SIGNAL** is an AI-powered business intelligence product designed to eliminate dashboard fatigue and cognitive overload for modern operational and leadership teams.

### The Problem
Modern businesses produce overwhelming amounts of operational noise across fragmented tools (Stripe, Datadog, GitHub, Mixpanel, Salesforce, Zendesk, internal databases, spreadsheets). When metrics shift (e.g., checkout conversions drop), teams are forced to manually correlate alerts, dashboards, and release notes to diagnose the root cause.

### The Solution
SIGNAL continuously ingests business events, normalizes unstructured and structured signals, detects anomalies, correlates related cross-functional events, prioritizes critical shifts, and synthesizes root causes into actionable threads for human decision-making.

---

## 2. Product Philosophy

> **"The goal isn't more information. It's better attention."**
> **"Don't monitor everything. Notice what matters."**

SIGNAL rejects the traditional dashboard paradigm of showing hundreds of dials and charts. Instead, it prioritizes high-conviction signals and their causality graphs, empowering operators to act rapidly on what genuinely changed.

---

## 3. Design Direction

- **Aesthetic:** Editorial + Technical + Premium (restrained, intentional, high-contrast clarity).
- **Inspiration:** Minimalist editorial design, precision technical tooling (e.g., Linear, Stripe, Arc), and clean Swiss typography without mimicking specific vendor UI.
- **Palette:**
  - **Base Background:** Warm off-white / very light neutral (`#FAFAF8`, `#F4F4EE`).
  - **Text Primary:** Near-black (`#121211`) for deep contrast and legibility.
  - **Text Secondary & Muted:** Slate neutrals (`#5C5C56`, `#8A8A80`).
  - **Accent:** Single electric signal orange (`#FF4D00`) used strictly for high-value interactive focal points and signal statuses.
  - **Borders & Dividers:** Crisp hairline dividers (`#E8E8E0`, `#D8D8CF`).
- **Typography:** Inter (for clean, legible UI hierarchies) paired with JetBrains Mono (for telemetry, versioning, metrics, and causality traces).
- **Motion Philosophy:** Meaningful, physics-grounded, micro-interactions only. Zero decorative floating blobs, generic gradients, or gratuitous parallax.

---

## 4. Technical Architecture

The conceptual product architecture covers data ingestion through to human decision synthesis:

```mermaid
flowchart TD
    A[Business Activity & Telemetry] --> B[Ingestion Adapters]
    B --> C[Normalization Engine]
    C --> D[Signal Anomaly Detection]
    D --> E[Relationship & Graph Correlation]
    E --> F[Prioritization & Synthesis]
    F --> G[Human Decision / Action]
```

### Frontend Prototype Stack
- **Framework:** React 19 + Vite 6
- **Styling:** Tailwind CSS v4 + Custom Design Tokens
- **Animation:** Framer Motion (restrained micro-interactions & layout transitions)
- **Icons:** Lucide React
- **Hosting Target:** Vercel (clean, zero-configuration static deployment)

---

## 5. Homepage Flow

The visitor journey is structured to communicate the core value proposition in the first three seconds, immediately providing an interactive demonstration of the investigation flow:

```mermaid
flowchart TD
    A[Landing / Hero Value Proposition] --> B[Immediate Product Visualization]
    B --> C[Interactive Signal Demo]
    C --> D[Investigate Root Cause Flow]
    D --> E[See Connected Dependency Events]
    E --> F[The Problem: Business is Loud]
    F --> G[Three-Stage Workflow: Collect, Connect, Act]
    G --> H[Product Philosophy Statement]
    H --> I[Final Direct CTA]
```

---

## 6. Interactive Demo Flow

The core product demonstration in the Hero/Demo section guides the user through the automated root-cause discovery sequence:

```mermaid
stateDiagram-v2
    [*] --> Idle: Example Signal Displayed
    Idle --> Investigating: User clicks "Investigate →"
    Investigating --> FindingConnections: Step 1: Telemetry Analysis
    FindingConnections --> TracingChange: Step 2: Correlating Deployments & Traffic
    TracingChange --> RevealingCause: Step 3: Graph Traversal
    RevealingCause --> Complete: Root Cause & Connected Events Revealed
    Complete --> Idle: Reset or Re-run Exploration
```

---

## 7. Ingestion Strategy

### Implemented in Prototype vs. Proposed Production Architecture
- **Implemented in Prototype:** Fully client-side, instant, deterministic simulation using realistic mock event traces (Checkout failures, Release 2.4.1, Payment API latency, Mobile traffic spikes). Clearly labeled as *"Interactive demo · Example workspace"*.
- **Proposed Production Architecture:** A resilient, decoupled event-driven ingestion pipeline designed to withstand API rate limits, provider outages, and blocking:

```mermaid
flowchart TD
    A[Data Source / Webhook / API] --> B[Ingestion Adapter]
    B --> C{Successful Response?}
    C -->|Yes| D[Normalize to Common Event Schema]
    D --> E[Publish to Stream / Queue]
    C -->|No / Rate Limited| F[Exponential Backoff + Jitter]
    F --> G{Retry Limit Reached?}
    G -->|No| B
    G -->|Yes| H[Mark Source as Degraded]
    H --> I[Fallback: Polling / Secondary Webhook / Cache]
    H --> J[Isolate Failure & Continue Ingesting Other Sources]
    E --> K[Signal Detection Engine]
```

#### Production Ingestion Resilience Pillars:
1. **Source Isolation:** Every integration runs in an isolated worker sandbox with independent circuit breakers. A failure in GitHub or Stripe never impairs Datadog or Salesforce ingestion.
2. **Exponential Backoff & Jitter:** Transient 429s and 5xx errors automatically retry with decorrelated jitter to prevent thundering herds.
3. **Graceful Degradation:** When an upstream integration is unavailable, the system flags the signal confidence interval rather than crashing the investigation engine.
4. **Alternative Ingestion Vectors:** Support dual ingestion routes (e.g., push webhooks with automated fallback to scheduled read-only polling).

---

## 8. Decisions Made Per Phase

### Phase 0 — Project Initialization and Foundation
- **Date:** 2026-08-18
- **Decision:** Initialized a minimalist React 19 + Vite 6 application with Tailwind CSS v4, Framer Motion, and Lucide React. Configured warm editorial design tokens and typography hierarchy.
- **Why:** Delivers an ultra-fast, zero-overhead development setup with high visual fidelity, complete type safety in styling, and performant motion primitives without heavy runtime dependencies.
- **Alternative Considered:** Next.js (App Router) or plain Vanilla JS.
- **Why Rejected:** Next.js introduces unnecessary server complexity, SSR configuration, and deployment overhead for what is strictly an interactive frontend showcase. Plain Vanilla JS lacks declarative state transitions needed for the step-by-step investigation animation.
- **Trade-off:** Client-side only rendering, perfectly matched to the static Vercel deployment requirement.
- **Verification:** Verified package.json dependencies, Vite configuration, index.html font loading, Tailwind CSS v4 styling rules, and clean startup.
- **Current Status:** Completed. Ready for Phase 1.

---

## 9. AI Usage

- **AI Generated:**
  - Initial scaffolding for `package.json`, `vite.config.js`, `index.html`, and `src/index.css`.
  - Comprehensive documentation structure in `DECISIONS.md` and `README.md`.
  - Initial `App.jsx` layout verification component.
- **Manually Reviewed & Tuned:**
  - Custom color token variables (`--bg-base`, `--accent-signal`, `--text-primary`) calibrated for warm editorial contrast.
  - Verification of Tailwind v4 Vite plugin integration.
  - Precision alignment of requirements (no fake testimonials, no generic AI gradients, clean mobile constraints).
- **Tested:**
  - Development build command, package installation integrity, and local server startup without console warnings.

---

## 10. Known Issues

*None currently.* Project is in initial foundation stage.

---

## 11. Future Improvements

- Sound design / haptic audio feedback on signal investigation resolution (optional subtle click).
- Keyboard navigation shortcuts (e.g., `Space` / `Enter` to step through investigation stages).
- Interactive timeline scrubber to inspect signals over arbitrary time windows.
