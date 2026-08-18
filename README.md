# SIGNAL — See what changed. Know what matters.

A product homepage and interactive prototype for **SIGNAL**, an AI-powered business intelligence product that turns scattered business activity into the few changes worth your attention.

## Design Philosophy

- **Editorial + Technical + Premium:** Restrained warm off-white background, crisp near-black typography, hairline borders, and a single electric accent color.
- **Immediate Product Immersion:** The hero directly surfaces the interactive signal investigation experience without burying the product beneath generic marketing fluff.
- **No Deceptive Marketing:** Zero fake customer logos, zero fake user counts, zero stock photos, and zero fabricated testimonials.

## Tech Stack

- **Framework:** React 19 + Vite 6
- **Styling:** Tailwind CSS v4 + Custom Design Tokens
- **Motion:** Framer Motion
- **Icons:** Lucide React

## Project Structure

```
src/
├── components/
│   ├── Navbar/
│   ├── SignalDemo/
│   ├── SignalCard/
│   ├── InvestigationFlow/
│   └── Footer/
│
├── sections/
│   ├── Hero/
│   ├── Problem/
│   ├── ProductWorkflow/
│   ├── Philosophy/
│   └── FinalCTA/
│
├── App.jsx
├── index.css
└── main.jsx
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Architectural Decision Log

See [DECISIONS.md](./DECISIONS.md) for full architectural documentation, ingestion resilience models, phase-by-phase decision records, and AI usage disclosures.
