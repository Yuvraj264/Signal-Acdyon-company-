# SIGNAL — Project Context & Architectural Authority

This file contains the complete system context, design decisions, component inventory, and constraints for the **SIGNAL** project. Any future developer or AI agent should read this file to understand the project state without relying on prior session history.

---

## 1. Project Overview

- **Name:** SIGNAL
- **Tagline:** *See what changed. Know what matters.*
- **Core Concept:** An AI-powered business intelligence product that detects anomalies across fragmented business telemetry (deployments, traffic surges, error logs, billing metrics), correlates cross-functional causal dependencies, and synthesizes actionable root-cause threads for human operators.
- **Repository:** `https://github.com/Yuvraj264/Signal-Acdyon-company-.git` on branch `main`.

---

## 2. Technical Architecture

- **Framework:** React 19 + Vite 6
- **Styling Architecture:** Tailwind CSS v4 using `@theme` definitions in `src/index.css`.
- **Motion Engine:** Framer Motion with custom cubic-out easing curve `[0.16, 1, 0.3, 1]`.
- **Icons:** Lucide React
- **Hosting / Deployment:** Vercel static edge hosting (`vercel.json`).

### File Tree
```
├── src/
│   ├── data/
│   │   └── incidents.js              # Deterministic incident data model (4 realistic scenarios)
│   │
│   ├── components/
│   │   ├── Badge.jsx                 # Status badges & demo labels
│   │   ├── Button.jsx                # High-contrast accessible button with arrow nudging
│   │   ├── Card.jsx                  # Base container with hairline borders
│   │   ├── Container.jsx             # Fluid layout wrappers (max-w-4xl / 5xl / 6xl)
│   │   ├── Footer.jsx                # Minimalist footer with conceptual disclosures
│   │   ├── Navbar.jsx                # Sticky header with mobile navigation drawer
│   │   ├── SectionHeading.jsx        # Standardized editorial section headings
│   │   └── SignalDemo/
│   │       ├── SignalDemo.jsx        # Data-driven investigation demo & evidence drawer
│   │       └── InvestigationGraph.jsx# Data-driven SVG dependency branches & nodes
│   │
│   ├── sections/
│   │   ├── Hero/Hero.jsx             # Asymmetrical value proposition + SignalDemo
│   │   ├── Problem/Problem.jsx       # Operational noise convergence diagram
│   │   ├── ProductWorkflow/ProductWorkflow.jsx # 3-stage intelligence engine
│   │   ├── ProductPreview/ProductPreview.jsx   # Multi-signal workspace feed (synchronized)
│   │   ├── Philosophy/Philosophy.jsx # Editorial manifesto statement
│   │   └── FinalCTA/FinalCTA.jsx     # Re-engagement CTA scrolling to demo
│   │
│   ├── utils/
│   │   └── motion.js                 # Shared animation presets and easings
│   │
│   ├── App.jsx                       # Shared state orchestrator, scenario rotation & landmarks
│   ├── index.css                     # Design tokens, radial grid, reduced-motion rules
│   └── main.jsx                      # React 19 DOM entry point
│
├── DECISIONS.md                      # Comprehensive Architectural Decision Record (ADR)
├── flow.md                           # Active phase tracker & verification logs
├── context.md                        # Permanent project context & technical authority
├── README.md                         # Public repository documentation
├── package.json                      # Dependency manifest
├── vercel.json                       # Vercel deployment configuration
└── vite.config.js                    # Vite bundler configuration
```

---

## 3. Dynamic Investigation Engine & State Model

### Incident Data Model (`src/data/incidents.js`)
The incident data is strictly separated from presentation logic across 4 realistic demonstration scenarios:
1. **`checkout-regression`:** Checkout failures ↑ 18.2% (Payments) → Release 2.4.1 form validation regex exception on WebKit.
2. **`api-latency`:** API latency surge ↑ 340ms (Infrastructure) → Read replica DB connection pool saturation via bulk report job.
3. **`support-surge`:** Support ticket volume ↑ 31.0% (Authentication) → OAuth identity provider token refresh policy change.
4. **`deployment-regression`:** Edge error rate spike ↑ 27.4% (Edge Routing) → Edge middleware header-forwarding regression.

### Shared State & Cross-Section Continuity (`src/App.jsx`)
- State is lifted to `App.jsx` (`incidentIndex`, `investigationState`, `activeIncident`).
- **Deterministic Scenario Rotation:** Investigating in the hero progresses index-based rotation (`0 → 1 → 2 → 3 → 0`), allowing visitors to repeatedly explore different incident types without relying on `Math.random()`.
- **Cross-Section Continuity:** Triggering an investigation in the Hero automatically updates the selected incident in the `ProductPreview` Operator Workspace below. Selecting an incident in the workspace also synchronizes the Hero, creating a unified product narrative.

---

## 4. Core Design Decisions & Non-Negotiable Rules

1. **Light-First Editorial Aesthetic:**
   - Base canvas is warm off-white (`#FAFAF8`), text is near-black (`#121211`), borders are hairline (`#E8E8E0`).
   - Electric Orange (`#FF4D00`) is used strictly as a high-signal accent for active anomaly pulses, connector lines, and primary conversion triggers.
   - Do NOT introduce generic purple/blue AI gradient glows or dark-mode toggles.

2. **100% Honesty Rule:**
   - No fake customer logos, fake user counts, or fabricated testimonials.
   - All simulated data views are explicitly tagged with `INTERACTIVE DEMO · EXAMPLE WORKSPACE` and `EXAMPLE WORKSPACE · DEMO DATA`.

3. **Intrinsic Zero-Overflow Responsiveness:**
   - Primary acceptance widths: **390px mobile** and **1440px desktop**.
   - No artificial `overflow-x: hidden` body hacks; zero horizontal overflow achieved through responsive CSS box constraints.

4. **Accessibility (a11y):**
   - Accessible skip-to-content link as the first tabbable item.
   - `aria-live="polite"` status announcements during investigation progression.
   - High-contrast `:focus-visible` rings (`outline: 2px solid #FF4D00; outline-offset: 2px`).
   - Global `prefers-reduced-motion` compliance.

5. **Client-Side Simulation vs. Production Architecture:**
   - The frontend prototype uses a deterministic 4-state local state machine (`idle` → `investigating` [800ms] → `connecting` [900ms] → `revealed`) for instant 0ms latency.
   - The proposed production architecture (Kafka message queues, source-specific isolated adapters, circuit breakers, and graph databases) is documented in `DECISIONS.md`.

---

## 5. Current Phase & Next Actions

- **Current Status:** Dynamic Investigation Engine & Cross-Section Continuity — **COMPLETED & VERIFIED**.
- **Next Action:** Push final commits and deploy to Vercel.
