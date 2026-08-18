import React from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, GitCommit, Smartphone, CreditCard, CheckCircle2, ChevronRight } from 'lucide-react'
import Badge from '../Badge'

/**
 * Responsive relationship graph for Signal investigation.
 * Adapts between structured desktop branching and a clean mobile tree hierarchy.
 */
export default function InvestigationGraph({ state, onEvidenceClick }) {
  const isConnectingOrRevealed = state === 'connecting' || state === 'revealed'
  const isRevealed = state === 'revealed'

  const events = [
    {
      id: 'release',
      title: 'Release 2.4.1',
      type: 'Deployment',
      desc: 'Merged by @core-team at 14:02 UTC',
      icon: GitCommit,
      tag: 'Root trigger',
      tagVariant: 'signal',
      highlight: true,
      delay: 0.1,
    },
    {
      id: 'payment',
      title: 'Payment form',
      type: 'Component',
      desc: 'Form validation runtime exception on iOS Safari',
      icon: CreditCard,
      tag: 'Failing module',
      tagVariant: 'warning',
      highlight: false,
      delay: 0.25,
    },
    {
      id: 'traffic',
      title: 'Mobile traffic',
      type: 'Telemetry',
      desc: 'Spike in mobile checkout attempts (+42%)',
      icon: Smartphone,
      tag: 'Amplifier',
      tagVariant: 'neutral',
      highlight: false,
      delay: 0.4,
    },
  ]

  return (
    <div className="space-y-4">
      {/* Root Node: The Primary Signal */}
      <div className="p-4 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-xs">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-md bg-[var(--accent-signal-subtle)] text-[var(--accent-signal)] border border-[var(--accent-signal-border)]">
              <AlertCircle className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wide">
                Primary Signal
              </div>
              <div className="text-base font-bold text-[var(--text-primary)] tracking-tight">
                Checkout failures
              </div>
            </div>
          </div>
          <div className="text-right">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-semibold bg-[var(--accent-signal-subtle)] text-[var(--accent-signal)] border border-[var(--accent-signal-border)]">
              ↑ 18.2%
            </span>
            <div className="text-[11px] text-[var(--text-muted)] font-mono mt-0.5">
              3 linked events
            </div>
          </div>
        </div>
      </div>

      {/* Connected Events Tree */}
      {isConnectingOrRevealed && (
        <div className="relative pl-4 sm:pl-6 space-y-3">
          {/* Vertical Trace Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1.5 sm:left-2.5 top-0 bottom-3 w-px bg-[var(--border-strong)] origin-top"
          />

          {events.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.35,
                  delay: item.delay,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative pl-4 sm:pl-5"
              >
                {/* Horizontal Branch Connector Line */}
                <div className="absolute left-[-10px] sm:left-[-14px] top-4 w-3.5 sm:w-4 h-px bg-[var(--border-strong)]" />

                {/* Event Node Card */}
                <div
                  className={`p-3 sm:p-3.5 rounded-lg border transition-all ${
                    item.highlight && isRevealed
                      ? 'bg-[var(--accent-signal-subtle)]/40 border-[var(--accent-signal-border)] shadow-xs'
                      : 'bg-[var(--bg-surface)] border-[var(--border-subtle)]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className={`p-1.5 rounded ${
                        item.highlight && isRevealed
                          ? 'bg-[var(--accent-signal-subtle)] text-[var(--accent-signal)]'
                          : 'bg-[var(--bg-subtle)] text-[var(--text-secondary)]'
                      }`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)]">
                            {item.title}
                          </span>
                          <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase hidden xs:inline">
                            [{item.type}]
                          </span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-[var(--text-secondary)] leading-snug mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <Badge
                      variant={item.tagVariant}
                      dot={item.highlight && isRevealed}
                      className="shrink-0 text-[10px] py-0 px-1.5"
                    >
                      {item.tag}
                    </Badge>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      )}

      {/* State 4 Synthesis: Likely Cause Card */}
      {isRevealed && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="p-4 rounded-lg bg-[var(--text-primary)] text-white space-y-3 shadow-md"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--accent-signal)] animate-pulse" />
              <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[var(--accent-signal)]">
                Likely Cause Identified
              </span>
            </div>
            <span className="text-[11px] font-mono text-zinc-400">
              Confidence: 96.4%
            </span>
          </div>

          <p className="text-sm sm:text-base font-medium leading-snug text-zinc-100 text-balance-editorial">
            Checkout errors surged following <strong className="text-white font-semibold">Release 2.4.1</strong> due to an unhandled form exception triggered on mobile traffic.
          </p>

          <div className="pt-2 border-t border-zinc-800 flex items-center justify-between">
            <button
              type="button"
              onClick={onEvidenceClick}
              className="inline-flex items-center gap-1 text-xs font-mono text-zinc-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>View telemetry evidence</span>
              <ChevronRight className="w-3.5 h-3.5 text-[var(--accent-signal)]" />
            </button>
            <span className="text-[10px] font-mono text-zinc-500">
              Synthesized in 420ms
            </span>
          </div>
        </motion.div>
      )}
    </div>
  )
}
