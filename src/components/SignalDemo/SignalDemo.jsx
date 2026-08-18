import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../Button'
import Badge from '../Badge'
import InvestigationGraph from './InvestigationGraph'
import { ArrowRight, RotateCcw, Loader2, Sparkles, Terminal, Activity, X, CheckCircle2 } from 'lucide-react'

/**
 * SignalDemo: The interactive core showcase component.
 * Demonstrates the automated root-cause investigation sequence with state-guarding,
 * accessible live regions, keyboard escape handling, and complete cleanup.
 */
export default function SignalDemo({ onTriggerInvestigation, id = 'demo-workspace' }) {
  // Local state machine: 'idle' | 'investigating' | 'connecting' | 'revealed'
  const [state, setState] = useState('idle')
  const [showEvidence, setShowEvidence] = useState(false)
  const timersRef = useRef([])

  // Clear all pending timeouts on unmount
  useEffect(() => {
    return () => {
      timersRef.current.forEach(clearTimeout)
    }
  }, [])

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

  const startInvestigation = () => {
    if (state !== 'idle') return // State guard against rapid/concurrent triggers

    // Clear any previous timers
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []

    // Step 1: Investigating state (Analyzing telemetry)
    setState('investigating')

    // Step 2: Connecting state (Tracing dependency graph)
    const t1 = setTimeout(() => {
      setState('connecting')
    }, 800)

    // Step 3: Revealed state (Root cause & connected nodes surfaced)
    const t2 = setTimeout(() => {
      setState('revealed')
    }, 1700)

    timersRef.current.push(t1, t2)
  }

  const resetInvestigation = () => {
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
    setState('idle')
    setShowEvidence(false)
  }

  const isBusy = state === 'investigating' || state === 'connecting'

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
          <span>STREAM ID: #SIG-8924</span>
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
                  <span className="text-[var(--accent-signal)] font-mono">1/2: Ingesting & normalizing telemetry...</span>
                </>
              )}
              {state === 'connecting' && (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-[var(--accent-signal)]" aria-hidden="true" />
                  <span className="text-[var(--accent-signal)] font-mono">2/2: Correlating cross-source graph...</span>
                </>
              )}
              {state === 'revealed' && (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                  <span className="text-emerald-700 font-mono">Synthesis Complete (0.42s)</span>
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
                onClick={resetInvestigation}
                className="w-full sm:w-auto text-xs"
                aria-label="Reset investigation and replay demonstration"
              >
                Investigate again
              </Button>
            ) : (
              <Button
                variant={state === 'idle' ? 'accent' : 'secondary'}
                size="sm"
                iconRight={state === 'idle' ? ArrowRight : undefined}
                onClick={startInvestigation}
                disabled={isBusy}
                className="w-full sm:w-auto font-medium"
                aria-label={isBusy ? 'Investigation currently processing' : 'Start interactive signal root cause investigation'}
              >
                {isBusy ? 'Analyzing...' : 'Investigate →'}
              </Button>
            )}
          </div>
        </div>

        {/* Dynamic Investigation Graph */}
        <InvestigationGraph
          state={state}
          onEvidenceClick={() => setShowEvidence(true)}
        />
      </div>

      {/* Slide-in Evidence Modal / Drawer */}
      <AnimatePresence>
        {showEvidence && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Telemetry Trace Evidence Log"
            className="absolute inset-0 z-20 bg-[var(--bg-surface)] p-5 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[var(--accent-signal)]" aria-hidden="true" />
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
                    Telemetry Trace Log (Verified)
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

              <div className="space-y-2.5 font-mono text-xs text-[var(--text-secondary)]">
                <div className="p-2.5 rounded bg-[var(--bg-subtle)] border border-[var(--border-subtle)] space-y-1">
                  <div className="text-[10px] text-[var(--text-muted)]">14:02:18 UTC · GITHUB_DEPLOY</div>
                  <div className="text-[var(--text-primary)] font-semibold">Release 2.4.1 (commit #8ef31a) merged to production</div>
                  <div className="text-[11px] text-[var(--text-muted)]">Diff: modified payment form payload validation regex.</div>
                </div>

                <div className="p-2.5 rounded bg-[var(--bg-subtle)] border border-[var(--border-subtle)] space-y-1">
                  <div className="text-[10px] text-[var(--text-muted)]">14:05:42 UTC · CLOUDFLARE_EDGE</div>
                  <div className="text-[var(--text-primary)] font-semibold">Spike in iOS Safari client traffic (+42%)</div>
                  <div className="text-[11px] text-[var(--text-muted)]">Geographic cluster: US-East / EU-West mobile checkout flow.</div>
                </div>

                <div className="p-2.5 rounded bg-[var(--bg-subtle)] border border-[var(--border-subtle)] space-y-1">
                  <div className="text-[10px] text-[var(--text-muted)]">14:06:15 UTC · SENTRY_EXCEPTION</div>
                  <div className="text-[var(--accent-signal)] font-semibold">TypeError: undefined is not an object (evaluating 'e.postalCode')</div>
                  <div className="text-[11px] text-[var(--text-muted)]">Origin: /checkout/PaymentForm.tsx:142 on WebKit 17.4+</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
              <span className="text-[11px] font-mono text-[var(--text-muted)]">
                Simulated verified event logs
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
