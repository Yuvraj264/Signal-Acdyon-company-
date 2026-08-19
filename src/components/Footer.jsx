import React from 'react'
import Container from './Container'

/**
 * Minimal structural Footer for SIGNAL.
 * Responsive centered alignment on mobile viewports, space-between on desktop.
 * Clean, honest attribution, no bloated links.
 */
export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-base)] py-12">
      <Container size="wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          {/* Logo & Description */}
          <div className="space-y-2 max-w-sm flex flex-col items-center md:items-start">
            <div className="flex items-center justify-center md:justify-start gap-2 text-base font-bold tracking-tight text-[var(--text-primary)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent-signal)]" />
              <span>SIGNAL</span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              An exploration of how business intelligence could feel. Simulated telemetry environment for hiring evaluation.
            </p>
          </div>

          {/* Quick Nav Anchors */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-5 sm:gap-6 text-xs font-medium text-[var(--text-secondary)]">
            <a href="#" className="hover:text-[var(--text-primary)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent-signal)]">
              Top
            </a>
            <a href="#problem" className="hover:text-[var(--text-primary)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent-signal)]">
              Problem
            </a>
            <a href="#how-it-works" className="hover:text-[var(--text-primary)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent-signal)]">
              How it works
            </a>
            <a href="#workspace" className="hover:text-[var(--text-primary)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent-signal)]">
              Workspace
            </a>
            <a href="#philosophy" className="hover:text-[var(--text-primary)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent-signal)]">
              Philosophy
            </a>
          </div>
        </div>

        {/* Bottom Metadata Strip */}
        <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-[var(--text-muted)] text-center sm:text-left">
          <div>
            SIGNAL Prototype · Conceptual Business Intelligence
          </div>
          <div>
            Built with React, Vite & Tailwind CSS
          </div>
        </div>
      </Container>
    </footer>
  )
}
