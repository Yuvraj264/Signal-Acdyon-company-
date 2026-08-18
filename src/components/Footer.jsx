import React from 'react'
import Container from './Container'

/**
 * Minimal structural Footer for SIGNAL.
 * Clean, honest attribution, no bloated links.
 */
export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-base)] py-10 mt-auto">
      <Container size="wide">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm font-bold tracking-tight text-[var(--text-primary)]">
              <span className="h-2 w-2 rounded-full bg-[var(--accent-signal)]" />
              <span>SIGNAL</span>
            </div>
            <p className="text-xs text-[var(--text-muted)]">
              See what changed. Know what matters.
            </p>
          </div>

          <div className="text-left sm:text-right space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono bg-[var(--bg-subtle)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
              Interactive demo · Example workspace
            </div>
            <p className="text-[11px] text-[var(--text-muted)]">
              Simulated telemetry environment for hiring evaluation.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
