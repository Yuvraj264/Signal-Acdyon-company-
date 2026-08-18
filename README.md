# SIGNAL

### See what changed. Know what matters.

A premium product homepage and interactive prototype for **SIGNAL** — an AI-powered business intelligence product designed to correlate operational telemetry across fragmented services into prioritized, high-conviction causal threads.

---

## Overview

Modern teams are inundated with thousands of raw metrics across disparate monitoring dashboards, error loggers, deployments, and communication channels. **SIGNAL** connects these fragmented signals into unified root-cause graphs so human operators can make decisive interventions without manually parsing alerts.

---

## Assignment Context

This project was built as a hiring evaluation assignment to demonstrate:
- **Senior Product Taste:** Restrained, editorial aesthetic combining technical rigor with aesthetic calm.
- **Immediate Product Interaction:** The centerpiece hero directly runs the automated root-cause investigation simulation within 3 seconds of arrival.
- **Responsive & Accessible Craft:** Built with intrinsic zero-overflow responsiveness across 390px mobile to 1440px desktop, full keyboard navigation, ARIA live status regions, and reduced-motion compliance.
- **Engineering Integrity:** Documented architectural decisions, failure mode handling, and zero fake marketing claims.

---

## Core Experience: The Signal Investigation Engine

The interactive hero features a 4-state local state machine simulating automated root-cause synthesis:
1. **Idle:** Displays an active anomaly stream (`Checkout failures ↑ 18.2%`).
2. **Investigating:** Normalizes event streams across deployments, client traffic, and exception logs.
3. **Connecting:** Traces causal dependency branches across the infrastructure graph.
4. **Revealed:** Synthesizes the verified root cause (`Release 2.4.1 form validation regex exception`) with an interactive **Telemetry Trace Log** drawer.

---

## Tech Stack

- **Framework:** React 19 + Vite 6
- **Styling:** Tailwind CSS v4 + Semantic Design Tokens (`@theme`)
- **Motion:** Framer Motion (restrained cubic-out easing `[0.16, 1, 0.3, 1]`)
- **Icons:** Lucide React
- **Hosting / Deployment:** Vercel

---

## Features

- **Interactive Investigation State Machine:** Multi-step causal trace with replay capability and rapid-click state guards.
- **Intrinsic Zero-Overflow Responsiveness:** Tailored mobile composition at 390px and asymmetric grid balance at 1440px without artificial `overflow-x: hidden` hacks.
- **Accessible & Screen-Reader Hardened:** Semantic landmarks, skip-to-content navigation, `aria-live="polite"` status announcements, and keyboard `Escape` modal closing.
- **Operator Workspace Preview:** Interactive multi-signal feed preview with honest `EXAMPLE WORKSPACE · DEMO DATA` attribution.
- **Operational Noise Convergence:** Visual representation of alert fatigue reduction into prioritized actionable threads.
- **Product Philosophy:** Thoughtful editorial statement on human attention vs. metric overload.

---

## Design Philosophy

- **"Don't monitor everything. Notice what matters."**
- **Editorial + Technical + Calm:** Warm off-white canvas (`#FAFAF8`), crisp high-contrast typography, hairline borders (`#E8E8E0`), and Electric Orange (`#FF4D00`) used strictly as a high-signal accent.
- **Honesty & Transparency:** Zero fake customer logos, zero fake metrics, zero fabricated testimonials, and explicit labeling on all simulated data views.

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build production bundle
npm run build

# 4. Preview production build locally
npm run preview
```

---

## Production Build & Deployment

- **Build Command:** `npm run build`
- **Output Directory:** `dist/`
- **Deployment Platform:** Vercel (Auto-detected Vite framework)

---

## Architectural Decision Log

For complete system architecture, multi-stage data models, phase-by-phase design decisions, and AI usage disclosures, see [DECISIONS.md](./DECISIONS.md).
