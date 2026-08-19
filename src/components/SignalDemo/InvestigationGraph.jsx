import React from 'react'
import { motion } from 'framer-motion'
import {
  AlertCircle,
  GitCommit,
  Smartphone,
  CreditCard,
  Database,
  Cpu,
  Activity,
  ShieldAlert,
  KeyRound,
  LifeBuoy,
  ServerCrash,
  Globe,
  ChevronRight,
  FilterX,
} from 'lucide-react'
import Badge from '../Badge'

const ICON_MAP = {
  GitCommit,
  Smartphone,
  CreditCard,
  Database,
  Cpu,
  Activity,
  ShieldAlert,
  KeyRound,
  LifeBuoy,
  ServerCrash,
  Globe,
}

/**
 * Data-Driven Relationship Graph for Signal investigation.
 * Renders nodes, branch connectors, dismissed noise filters, and root cause synthesis.
 */
export default function InvestigationGraph({ incident, state, onEvidenceClick }) {
  if (!incident) return null

  const isConnectingOrRevealed = state === 'connecting' || state === 'revealed'
  const isRevealed = state === 'revealed'
  const isIdle = state === 'idle'

  return (
    <div className="space-y-4">
      {/* Root Node: The Primary Signal */}
      <div
        className={`p-4 rounded-lg bg-[var(--bg-surface)] border transition-all ${
          isIdle
            ? 'border-[var(--accent-signal-border)]/60 shadow-xs'
            : 'border-[var(--border-subtle)] shadow-xs'
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="relative p-2 rounded-md bg-[var(--accent-signal-subtle)] text-[var(--accent-signal)] border border-[var(--accent-signal-border)]">
              <AlertCircle className="w-4 h-4" />
              {isIdle && (
                <span className="absolute -top-1 -right-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-signal)] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-signal)]" />
                </span>
              )}
            </div>
            <div>
              <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wide flex items-center gap-1.5">
                <span>Primary Anomaly</span>
                {isIdle && (
                  <span className="text-[10px] text-[var(--accent-signal)] font-semibold">· Ready to trace</span>
                )}
              </div>
              <div className="text-base font-bold text-[var(--text-primary)] tracking-tight">
                {incident.title}
              </div>
            </div>
          </div>
          <div className="text-right">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-semibold bg-[var(--accent-signal-subtle)] text-[var(--accent-signal)] border border-[var(--accent-signal-border)]">
              {incident.change}
            </span>
            <div className="text-[11px] text-[var(--text-muted)] font-mono mt-0.5">
              {incident.nodes.filter(n => !n.isDismissed).length} correlated nodes
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

          {incident.nodes.map((item) => {
            const Icon = ICON_MAP[item.iconName] || Activity
            const isDismissed = item.isDismissed

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
                <div
                  className={`absolute left-[-10px] sm:left-[-14px] top-4 w-3.5 sm:w-4 h-px ${
                    isDismissed ? 'bg-[var(--border-subtle)] border-dashed' : 'bg-[var(--border-strong)]'
                  }`}
                />

                {/* Event Node Card */}
                <div
                  className={`p-3 sm:p-3.5 rounded-lg border transition-all ${
                    isDismissed
                      ? 'bg-[var(--bg-subtle)]/40 border-[var(--border-subtle)] opacity-70'
                      : item.highlight && isRevealed
                      ? 'bg-[var(--accent-signal-subtle)]/40 border-[var(--accent-signal-border)] shadow-xs'
                      : 'bg-[var(--bg-surface)] border-[var(--border-subtle)]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <div
                        className={`p-1.5 rounded shrink-0 ${
                          isDismissed
                            ? 'bg-[var(--bg-subtle)] text-[var(--text-muted)]'
                            : item.highlight && isRevealed
                            ? 'bg-[var(--accent-signal-subtle)] text-[var(--accent-signal)]'
                            : 'bg-[var(--bg-subtle)] text-[var(--text-secondary)]'
                        }`}
                      >
                        {isDismissed ? <FilterX className="w-3.5 h-3.5" /> : <Icon className="w-3.5 h-3.5" />}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs sm:text-sm font-semibold truncate ${
                              isDismissed ? 'text-[var(--text-secondary)] line-through decoration-[var(--border-strong)]' : 'text-[var(--text-primary)]'
                            }`}
                          >
                            {item.title}
                          </span>
                          <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase hidden xs:inline shrink-0">
                            [{item.type}]
                          </span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-[var(--text-secondary)] leading-snug mt-0.5 truncate">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 pl-1">
                      {isDismissed ? (
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-medium text-[var(--text-muted)] bg-[var(--bg-subtle)] border border-[var(--border-subtle)]">
                          Noise dismissed
                        </span>
                      ) : (
                        <Badge
                          variant={item.tagVariant}
                          dot={item.highlight && isRevealed}
                          className="text-[10px] py-0 px-1.5"
                        >
                          {item.tag}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      )}

      {/* State 4 Synthesis: Distinct Root Cause Conclusion */}
      {isRevealed && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="p-4 sm:p-5 rounded-lg bg-[var(--text-primary)] text-white space-y-3.5 shadow-md"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--accent-signal)] animate-pulse" />
              <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[var(--accent-signal)]">
                Root Trigger Identified
              </span>
            </div>
            <span className="text-[11px] font-mono text-zinc-400">
              Confidence: {incident.confidence}
            </span>
          </div>

          {/* Causal Synthesis Statement */}
          <p className="text-sm sm:text-base font-medium leading-snug text-zinc-100 text-balance-editorial">
            {incident.rootSummary}
          </p>

          {/* Summary Metric Strip */}
          <div className="px-3 py-2 rounded bg-zinc-900/90 border border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <span>{incident.summaryStats}</span>
            <span className="text-[var(--accent-signal)] font-semibold">1 Actionable Thread</span>
          </div>

          <div className="pt-2 border-t border-zinc-800 flex items-center justify-between">
            <button
              type="button"
              onClick={onEvidenceClick}
              className="inline-flex items-center gap-1 text-xs font-mono text-zinc-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>View telemetry evidence</span>
              <ChevronRight className="w-3.5 h-3.5 text-[var(--accent-signal)]" />
            </button>
            <span className="text-[10px] font-mono text-zinc-400">
              Demo synthesis · 420ms
            </span>
          </div>
        </motion.div>
      )}
    </div>
  )
}
