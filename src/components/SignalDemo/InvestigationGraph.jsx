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
  Zap,
  CheckCircle2,
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

const TOPOLOGY_LABELS = {
  'forked-branch': 'Forked Dependency Graph',
  'linear-chain': 'Linear Pipeline Chain',
  'loop-retry': 'Circular Auth Loop',
  'regional-hub': 'Regional CDN Edge Cluster',
}

/**
 * Data-Driven Live Signal Map for Signal Investigation.
 * Renders dynamic node topologies, SVG causal connector paths, signal vs. noise filtering,
 * micro-interactions, and root cause synthesis.
 */
export default function InvestigationGraph({
  incident,
  state,
  onEvidenceClick,
  activeNodeId,
  onNodeHover,
  onNodeSelect,
}) {
  if (!incident) return null

  const isIdle = state === 'idle'
  const isInvestigating = state === 'investigating'
  const isConnecting = state === 'connecting'
  const isRevealed = state === 'revealed'
  const isProcessing = isInvestigating || isConnecting || isRevealed

  const causalNodes = incident.nodes.filter((n) => !n.isDismissed)
  const dismissedNodes = incident.nodes.filter((n) => n.isDismissed)
  const topologyLabel = TOPOLOGY_LABELS[incident.topology] || 'Causal Graph'

  return (
    <div className="space-y-4">
      {/* Topology Badge & Primary Anomaly Header */}
      <div
        className={`p-4 rounded-lg bg-[var(--bg-surface)] border transition-all duration-300 ${
          isIdle
            ? 'border-[var(--accent-signal-border)] shadow-xs'
            : isRevealed
            ? 'border-[var(--accent-signal-border)] bg-[var(--accent-signal-subtle)]/20 shadow-xs'
            : 'border-[var(--border-subtle)] shadow-xs'
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="relative p-2 rounded-md bg-[var(--accent-signal-subtle)] text-[var(--accent-signal)] border border-[var(--accent-signal-border)] shrink-0">
              <AlertCircle className="w-4 h-4" />
              {isIdle && (
                <span className="absolute -top-1 -right-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-signal)] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-signal)]" />
                </span>
              )}
            </div>
            <div>
              <div className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wide flex items-center gap-1.5">
                <span>Primary Anomaly</span>
                {isIdle && (
                  <span className="text-[10px] text-[var(--accent-signal)] font-semibold">
                    · Ready to trace
                  </span>
                )}
                {isRevealed && (
                  <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 inline" /> Correlated
                  </span>
                )}
              </div>
              <div className="text-base sm:text-lg font-bold text-[var(--text-primary)] tracking-tight">
                {incident.title}
              </div>
            </div>
          </div>

          <div className="text-right shrink-0">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-semibold bg-[var(--accent-signal-subtle)] text-[var(--accent-signal)] border border-[var(--accent-signal-border)]">
              {incident.change}
            </span>
            <div className="text-[10px] text-[var(--text-muted)] font-mono mt-1 hidden xs:block">
              Topology: {topologyLabel}
            </div>
          </div>
        </div>
      </div>

      {/* Idle State Restrained Composition */}
      {isIdle && (
        <div className="p-4 rounded-lg bg-[var(--bg-subtle)]/60 border border-dashed border-[var(--border-strong)] text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-[var(--text-secondary)]">
            <Zap className="w-3.5 h-3.5 text-[var(--accent-signal)] animate-pulse" />
            <span>Interactive telemetry graph ready ({causalNodes.length} candidate signals)</span>
          </div>
          <p className="text-xs text-[var(--text-muted)] max-w-md mx-auto">
            Click <strong className="text-[var(--text-primary)] font-semibold">Investigate a signal →</strong> to execute cross-source anomaly correlation and filter noise.
          </p>
        </div>
      )}

      {/* Connected Live Signal Map Tree (Active during Investigation Sequence) */}
      {isProcessing && (
        <div className="relative pl-4 sm:pl-6 space-y-3">
          {/* Vertical Main Stem Connector */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute left-1.5 sm:left-2.5 top-0 bottom-3 w-0.5 origin-top transition-colors duration-300 ${
              isRevealed ? 'bg-[var(--accent-signal)]' : 'bg-[var(--border-strong)]'
            }`}
          />

          {/* Incident Signal Nodes */}
          {incident.nodes.map((item, idx) => {
            const Icon = ICON_MAP[item.iconName] || Activity
            const isDismissed = item.isDismissed
            const isCausalPath = item.highlight && isRevealed
            const isSelected = activeNodeId === item.id

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{
                  opacity: isDismissed && (isConnecting || isRevealed) ? 0.55 : 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.35,
                  delay: item.delay,
                  ease: [0.16, 1, 0.3, 1],
                }}
                tabIndex={0}
                role="button"
                aria-label={`Graph Node: ${item.title}`}
                onMouseEnter={() => onNodeHover?.(item.id)}
                onMouseLeave={() => onNodeHover?.(null)}
                onFocus={() => onNodeHover?.(item.id)}
                onBlur={() => onNodeHover?.(null)}
                onClick={() => onNodeSelect?.(item.id)}
                className="relative pl-4 sm:pl-5 group cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent-signal)] rounded-lg"
              >
                {/* Horizontal Connector Arm */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: item.delay + 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`absolute left-[-10px] sm:left-[-14px] top-4.5 w-3.5 sm:w-4 h-0.5 origin-left transition-colors ${
                    isSelected || isCausalPath
                      ? 'bg-[var(--accent-signal)]'
                      : isDismissed
                      ? 'bg-[var(--border-subtle)] border-t border-dashed border-[var(--border-medium)]'
                      : 'bg-[var(--border-strong)]'
                  }`}
                />

                {/* Node Card */}
                <div
                  className={`p-3 sm:p-3.5 rounded-lg border transition-all duration-200 ${
                    isSelected
                      ? 'bg-[var(--accent-signal-subtle)] border-[var(--accent-signal)] shadow-sm ring-2 ring-[var(--accent-signal)]'
                      : isDismissed
                      ? 'bg-[var(--bg-subtle)]/40 border-[var(--border-subtle)]'
                      : isCausalPath
                      ? 'bg-[var(--accent-signal-subtle)]/50 border-[var(--accent-signal-border)] shadow-xs ring-1 ring-[var(--accent-signal-border)]'
                      : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] shadow-2xs group-hover:border-[var(--border-strong)]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`p-1.5 rounded shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-[var(--accent-signal)] text-white'
                            : isDismissed
                            ? 'bg-[var(--bg-subtle)] text-[var(--text-muted)]'
                            : isCausalPath
                            ? 'bg-[var(--accent-signal)] text-white'
                            : 'bg-[var(--bg-subtle)] text-[var(--text-secondary)]'
                        }`}
                      >
                        {isDismissed ? (
                          <FilterX className="w-3.5 h-3.5" />
                        ) : (
                          <Icon className="w-3.5 h-3.5" />
                        )}
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs sm:text-sm font-semibold truncate ${
                              isDismissed
                                ? 'text-[var(--text-secondary)] line-through decoration-[var(--border-strong)]'
                                : 'text-[var(--text-primary)]'
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
                          dot={isCausalPath || isSelected}
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

      {/* STATE 5 ROOT CAUSE SYNTHESIS CARD */}
      {isRevealed && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="p-4 sm:p-5 rounded-lg bg-[var(--text-primary)] text-white space-y-3.5 shadow-md border border-zinc-800"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--accent-signal)] animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-[var(--accent-signal)]">
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
              className="inline-flex items-center gap-1 text-xs font-mono text-zinc-300 hover:text-white transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent-signal)] rounded"
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

