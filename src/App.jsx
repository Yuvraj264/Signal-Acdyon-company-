import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wide uppercase bg-[var(--accent-signal-subtle)] text-[var(--accent-signal)] border border-[var(--accent-signal-border)] mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-signal)] animate-pulse" />
        Phase 0 Initialized
      </div>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-3">
        SIGNAL
      </h1>
      <p className="text-lg text-[var(--text-secondary)] max-w-md mb-8 text-balance-editorial">
        See what changed. Know what matters.
      </p>
      <div className="p-4 border border-[var(--border-subtle)] rounded-lg bg-[var(--bg-surface)] text-left text-xs font-mono text-[var(--text-secondary)] space-y-1 w-full max-w-md shadow-xs">
        <div className="text-[var(--text-primary)] font-medium mb-1">Architecture Base Ready:</div>
        <div>• React 19 + Vite 6 + Tailwind CSS v4</div>
        <div>• Framer Motion + Lucide React</div>
        <div>• Editorial light color system loaded</div>
        <div>• Ready for Phase 1: Design Foundation & Base Layout</div>
      </div>
    </div>
  )
}
