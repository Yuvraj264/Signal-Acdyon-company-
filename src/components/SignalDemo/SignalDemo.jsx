import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../Button'
import InvestigationGraph from './InvestigationGraph'
import { ArrowRight, RotateCcw, Loader2, Terminal, Activity, X, CheckCircle2 } from 'lucide-react'

/**
 * SignalDemo: The interactive core showcase component.
 * Driven by the active incident data model with deterministic scenario rotation,
 * accessible live regions, keyboard escape handling, and synchronized telemetry drawer.
 */
export default function SignalDemo({
  incident,
  state = 'idle',
  onStartInvestigation,
  onResetInvestigation,
  id = 'hero-signal-demo',
}) {
  const [showEvidence, setShowEvidence] = useState(false)

  // Close evidence panel on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && showEvidence) {
        setShowEvidence(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [showEvidence])

  // Reset evidence drawer if incident changes
  useEffect(() => {
    setShowEvidence(false)
  }, [incident?.id])

  const isBusy = state === 'investigating' || state === 'connecting'

  if (!incident) return null

  return (
    <section 
      id={id} 
      aria-label="Interactive Signal Demo Workspace"
      className="relative w-full max-w-xl mx-auto rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-sm overflow-hidden"
    >
      {/* Top Header: Demo Disclaimer & Live Status */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border-subtle)] bg-[var(--bg-subtle)]/70 text-xs">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-[var(--accent-signal)] animate-pulse" aria-hidden="true" />
          <span className="font-mono font-medium text-[var(--text-secondary)]">
            INTERACTIVE DEMO · EXAMPLE WORKSPACE
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 font-mono text-[11px] text-[var(--text-muted)]">
          <Activity className="w-3 h-3 text-[var(--accent-signal)]" aria-hidden="true" />
          <span>STREAM ID: {incident.streamId}</span>
        </div>
      </div>

      {/* Main Signal Workspace Body */}
      <div className="p-4 sm:p-6 space-y-6">
        {/* Status Indicator Bar with Accessible Live Announcement */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[var(--border-subtle)]">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
              Investigation Status
            </div>
            <div 
              className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2 mt-0.5"
              aria-live="polite"
              role="status"
            >
              {state === 'idle' && (
                <>
                  <span className="w-2 h-2 rounded-full bg-[var(--accent-signal)]" aria-hidden="true" />
                  <span>Awaiting Operator Review</span>
                </>
              )}
              {state === 'investigating' && (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-[var(--accent-signal)]" aria-hidden="true" />
                  <span className="text-[var(--accent-signal)] font-mono">1/3: Scanning signals & discovering nodes...</span>
                </>
              )}
              {state === 'connecting' && (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-[var(--accent-signal)]" aria-hidden="true" />
                  <span className="text-[var(--accent-signal)] font-mono">2/3: Correlating causal dependency graph...</span>
                </>
              )}
              {state === 'revealed' && (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                  <span className="text-emerald-700 font-mono">3/3: Noise filtered · Root cause identified</span>
                </>
              )}
            </div>
          </div>

          {/* Action Trigger Button */}
          <div>
            {state === 'revealed' ? (
              <Button
                variant="secondary"
                size="sm"
                iconLeft={RotateCcw}
                onClick={onResetInvestigation}
                className="w-full sm:w-auto text-xs font-medium cursor-pointer"
                aria-label="Investigate next operational signal scenario"
              >
                Investigate next signal →
              </Button>
            ) : (
              <Button
                variant={state === 'idle' ? 'accent' : 'secondary'}
                size="sm"
                iconRight={state === 'idle' ? ArrowRight : undefined}
                onClick={onStartInvestigation}
                disabled={isBusy}
                className="w-full sm:w-auto font-medium cursor-pointer"
                aria-label={isBusy ? 'Investigation currently processing' : 'Start interactive signal root cause investigation'}
              >
                {isBusy ? 'Analyzing...' : 'Investigate a signal →'}
              </Button>
            )}
          </div>
        </div>

        {/* Compact Signal Count Story */}
        <div 
          className="flex items-center justify-between px-3 py-2 rounded-lg bg-[var(--bg-subtle)]/80 border border-[var(--border-subtle)] font-mono text-[11px] text-[var(--text-secondary)] whitespace-nowrap overflow-x-auto gap-1"
          aria-label="Signal Analysis Funnel"
        >
          <span className="text-[var(--text-primary)] font-medium">
            {incident.countStory?.detected || 14} signals detected
          </span>
          <span className="text-[var(--text-muted)] text-[10px]">↓</span>
          <span>
            {incident.countStory?.relevant || 4} relevant
          </span>
          <span className="text-[var(--text-muted)] text-[10px]">↓</span>
          <span>
            {incident.countStory?.correlated || 3} correlated
          </span>
          <span className="text-[var(--text-muted)] text-[10px]">↓</span>
          <span className="text-[var(--accent-signal)] font-semibold">
            {incident.countStory?.actionable || 1} actionable thread
          </span>
        </div>

        {/* Dynamic Investigation Graph */}
        <InvestigationGraph
          incident={incident}
          state={state}
          onEvidenceClick={() => setShowEvidence(true)}
        />
      </div>

      {/* Slide-in Evidence Modal / Drawer matching the active incident */}
      <AnimatePresence>
        {showEvidence && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label={`Telemetry Trace Evidence Log for ${incident.title}`}
            className="absolute inset-0 z-20 bg-[var(--bg-surface)] p-5 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[var(--accent-signal)]" aria-hidden="true" />
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
                    Telemetry Trace Log · {incident.streamId}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setShowEvidence(false)}
                  className="p-1.5 rounded-md text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent-signal)]"
                  aria-label="Close evidence panel (Press Escape)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-2 font-mono text-xs text-[var(--text-secondary)]">
                {incident.evidence.map((ev, idx) => (
                  <div key={idx} className="p-2.5 rounded bg-[var(--bg-subtle)] border border-[var(--border-subtle)] space-y-0.5">
                    <div className="text-[10px] text-[var(--text-muted)]">{ev.time} · {ev.source}</div>
                    <div className={`font-semibold ${ev.isAlert ? 'text-[var(--accent-signal)]' : 'text-[var(--text-primary)]'}`}>
                      {ev.headline}
                    </div>
                    <div className="text-[11px] text-[var(--text-muted)]">{ev.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
              <span className="text-[11px] font-mono text-[var(--text-muted)]">
                Simulated verified event logs ({incident.category})
              </span>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setShowEvidence(false)}
                aria-label="Return back to causal investigation graph"
              >
                Back to graph
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
