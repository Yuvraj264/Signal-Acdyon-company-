import React from 'react'
import { motion } from 'framer-motion'
import { Clock, Check, FilterX, ArrowRight } from 'lucide-react'

/**
 * InvestigationTimeline: Synchronized chronological event stream component.
 * Maps timeline events to graph nodes, highlights causal threads in Electric Orange (#FF4D00),
 * recedes noise signals, and supports two-way graph ↔ timeline interactions.
 */
export default function InvestigationTimeline({
  incident,
  state = 'idle',
  activeNodeId,
  onNodeHover,
  onNodeSelect,
}) {
  if (!incident || !incident.timeline) return null

  const isIdle = state === 'idle'
  const isInvestigating = state === 'investigating'
  const isConnecting = state === 'connecting'
  const isRevealed = state === 'revealed'
  const isProcessing = isInvestigating || isConnecting || isRevealed

  return (
    <div className="space-y-3">
      {/* Timeline Section Sub-Header */}
      <div className="flex items-center justify-between px-1 pb-1 border-b border-[var(--border-subtle)] text-xs font-mono">
        <div className="flex items-center gap-1.5 text-[var(--text-secondary)] font-semibold uppercase tracking-wider">
          <Clock className="w-3.5 h-3.5 text-[var(--accent-signal)]" aria-hidden="true" />
          <span>Investigation Timeline</span>
        </div>
        <span className="text-[10px] text-[var(--text-muted)] bg-[var(--bg-subtle)] px-2 py-0.5 rounded">
          {incident.timeline.length} events logged
        </span>
      </div>

      {/* Idle State Overview */}
      {isIdle && (
        <div className="p-3.5 rounded-lg bg-[var(--bg-subtle)]/50 border border-dashed border-[var(--border-subtle)] text-xs text-[var(--text-muted)] space-y-2">
          <div className="font-mono text-[11px] text-[var(--text-secondary)] font-medium flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-signal)]" />
            <span>Chronological Trace Log Standby</span>
          </div>
          <p className="text-[11px] leading-relaxed">
            Click <strong className="text-[var(--text-primary)] font-semibold">Investigate a signal</strong> to stream real-time events and map causal relationships.
          </p>
        </div>
      )}

      {/* Active Synchronized Timeline Event Stream */}
      {isProcessing && (
        <div className="relative pl-3.5 space-y-3" role="feed" aria-label="Investigation timeline trace events">
          {/* Vertical Timeline Track Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute left-1.5 top-1 bottom-3 w-0.5 origin-top transition-colors duration-300 ${
              isRevealed ? 'bg-[var(--accent-signal)]' : 'bg-[var(--border-strong)]'
            }`}
          />

          {incident.timeline.map((item, idx) => {
            const isDismissed = item.isDismissed
            const isSelected = activeNodeId === item.nodeId
            const isCausalThread = item.isCausal && isRevealed

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 8 }}
                animate={{
                  opacity: isDismissed && (isConnecting || isRevealed) ? 0.55 : 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.35,
                  delay: idx * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                tabIndex={0}
                role="article"
                aria-label={`${item.type} event at ${item.time}: ${item.title}`}
                onMouseEnter={() => onNodeHover?.(item.nodeId)}
                onMouseLeave={() => onNodeHover?.(null)}
                onFocus={() => onNodeHover?.(item.nodeId)}
                onBlur={() => onNodeHover?.(null)}
                onClick={() => onNodeSelect?.(item.nodeId)}
                className={`relative pl-4 group cursor-pointer transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[var(--accent-signal)] rounded-lg`}
              >
                {/* Event Connector Dot */}
                <div
                  className={`absolute left-[-10px] top-3.5 w-2.5 h-2.5 rounded-full border transition-all duration-200 ${
                    isSelected
                      ? 'bg-[var(--accent-signal)] border-[var(--accent-signal)] ring-2 ring-[var(--accent-signal-border)] scale-110'
                      : isCausalThread
                      ? 'bg-[var(--accent-signal)] border-[var(--accent-signal)]'
                      : isDismissed
                      ? 'bg-[var(--bg-subtle)] border-[var(--border-medium)]'
                      : 'bg-[var(--bg-surface)] border-[var(--border-strong)]'
                  }`}
                />

                {/* Event Card */}
                <div
                  className={`p-3 rounded-lg border transition-all duration-200 ${
                    isSelected
                      ? 'bg-[var(--accent-signal-subtle)] border-[var(--accent-signal-border)] shadow-xs ring-1 ring-[var(--accent-signal-border)]'
                      : isCausalThread
                      ? 'bg-[var(--accent-signal-subtle)]/40 border-[var(--accent-signal-border)]'
                      : isDismissed
                      ? 'bg-[var(--bg-subtle)]/50 border-[var(--border-subtle)]'
                      : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold tracking-wide text-[var(--text-muted)] uppercase">
                          {item.time}
                        </span>
                        <span
                          className={`text-[9px] font-mono px-1.5 py-0.2 rounded uppercase font-semibold ${
                            isDismissed
                              ? 'bg-[var(--bg-subtle)] text-[var(--text-muted)]'
                              : isCausalThread
                              ? 'bg-[var(--accent-signal)] text-white'
                              : 'bg-[var(--bg-subtle)] text-[var(--text-secondary)]'
                          }`}
                        >
                          {item.type}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <h4
                          className={`text-xs font-semibold truncate ${
                            isDismissed
                              ? 'text-[var(--text-secondary)] line-through decoration-[var(--border-strong)]'
                              : 'text-[var(--text-primary)]'
                          }`}
                        >
                          {item.title}
                        </h4>
                      </div>

                      <p className="text-[11px] text-[var(--text-secondary)] leading-snug truncate">
                        {item.description}
                      </p>
                    </div>

                    <div className="shrink-0 pl-1 pt-0.5">
                      {isDismissed ? (
                        <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[9px] font-mono text-[var(--text-muted)] bg-[var(--bg-subtle)] border border-[var(--border-subtle)]">
                          <FilterX className="w-2.5 h-2.5" />
                          <span>Noise</span>
                        </span>
                      ) : isCausalThread ? (
                        <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[9px] font-mono font-semibold text-[var(--accent-signal)] bg-[var(--accent-signal-subtle)] border border-[var(--accent-signal-border)]">
                          <Check className="w-2.5 h-2.5" />
                          <span>Causal</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center text-[10px] text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Inline Rejection Reason for Discarded Timeline Event */}
                  {isDismissed && item.filterReason && (
                    <div className="mt-1.5 pt-1 border-t border-[var(--border-subtle)] text-[10px] font-mono text-[var(--text-muted)] flex items-center gap-1.5">
                      <span className="font-semibold text-[var(--text-secondary)] uppercase shrink-0">FILTERED:</span>
                      <span className="truncate text-[var(--text-muted)]">{item.filterReason}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      )}
    </div>
  )
}
