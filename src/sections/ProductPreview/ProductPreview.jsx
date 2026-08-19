import React from 'react'
import { motion } from 'framer-motion'
import Container from '../../components/Container'
import SectionHeading from '../../components/SectionHeading'
import Badge from '../../components/Badge'
import { GitCommit, Sparkles } from 'lucide-react'
import { INCIDENT_SCENARIOS } from '../../data/incidents'

/**
 * ProductPreview: Illustrates the broader SIGNAL workspace interface.
 * Synchronized with the active investigated incident for seamless cross-section continuity.
 */
export default function ProductPreview({
  activeIncident,
  investigationState,
  hasInvestigated,
  onSelectIncident,
  incidents = INCIDENT_SCENARIOS,
}) {
  const selectedIncident = activeIncident || incidents[0]

  return (
    <section id="workspace" className="py-20 sm:py-28 border-t border-[var(--border-subtle)] bg-[var(--bg-subtle)]/30">
      <Container size="wide" className="space-y-12">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <SectionHeading
            eyebrow="PRODUCT PREVIEW"
            title="The Operator Workspace"
            description="A focused view of prioritized signals, causal graphs, and root-cause summaries."
            align="left"
          />
          <div className="shrink-0">
            {hasInvestigated ? (
              <Badge variant="signal" isMono={true}>
                ACTIVE INVESTIGATION · {selectedIncident.title.toUpperCase()}
              </Badge>
            ) : (
              <Badge variant="neutral" isMono={true}>
                EXAMPLE WORKSPACE · DEMO DATA
              </Badge>
            )}
          </div>
        </div>

        {/* Workspace Mockup Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-sm overflow-hidden"
        >
          {/* Workspace Window Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border-subtle)] bg-[var(--bg-subtle)]/60 text-xs">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--border-strong)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--border-strong)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--border-strong)]" />
              </div>
              <span className="font-mono font-medium text-[var(--text-secondary)] pl-2">
                workspace.signal.internal / prioritized-threads
              </span>
            </div>
            <span className="font-mono text-[11px] text-[var(--text-muted)] hidden sm:inline">
              Filter: Active Anomalies ({incidents.length})
            </span>
          </div>

          {/* Workspace Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-[var(--border-subtle)]">
            {/* Left Column: Signals Feed */}
            <div className="md:col-span-5 p-4 sm:p-5 space-y-3 bg-[var(--bg-base)]/50">
              <div className="flex items-center justify-between pb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                  Active Signals Feed
                </span>
                <span className="text-[11px] font-mono text-[var(--text-secondary)]">
                  Select to trace
                </span>
              </div>

              <div className="space-y-2" role="tablist" aria-label="Example Signals List">
                {incidents.map((signal) => {
                  const isSelected = signal.id === selectedIncident.id
                  return (
                    <button
                      key={signal.id}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      aria-controls={`signal-panel-${signal.id}`}
                      onClick={() => onSelectIncident && onSelectIncident(signal)}
                      className={`w-full p-3.5 rounded-lg border text-left transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent-signal)] ${
                        isSelected
                          ? 'bg-[var(--bg-surface)] border-[var(--accent-signal)] shadow-xs'
                          : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span
                            aria-hidden="true"
                            className={`h-2 w-2 rounded-full ${
                              isSelected ? 'bg-[var(--accent-signal)] animate-pulse' : 'bg-[var(--text-muted)]'
                            }`}
                          />
                          <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)]">
                            {signal.title}
                          </span>
                        </div>
                        <span className="font-mono text-xs font-semibold text-[var(--accent-signal)]">
                          {signal.change}
                        </span>
                      </div>

                      <div className="mt-2 flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
                        <span>{signal.nodes.length} linked nodes</span>
                        <span>{signal.time}</span>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Right Column: Selected Signal Causal Inspection */}
            <div 
              id={`signal-panel-${selectedIncident.id}`}
              role="tabpanel"
              aria-label={`Inspection for ${selectedIncident.title}`}
              className="md:col-span-7 p-5 sm:p-7 space-y-5 bg-[var(--bg-surface)]"
            >
              {/* Active Context Banner */}
              {hasInvestigated && (
                <div className="px-3 py-2 rounded bg-[var(--accent-signal-subtle)] border border-[var(--accent-signal-border)] text-xs font-mono text-[var(--accent-signal)] flex items-center justify-between">
                  <div className="flex items-center gap-2 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent-signal)] animate-pulse" />
                    <span>ACTIVE CONTEXT: {selectedIncident.title} ({selectedIncident.change})</span>
                  </div>
                  <span className="text-[10px] text-[var(--text-secondary)] hidden xs:inline">
                    {selectedIncident.summaryStats}
                  </span>
                </div>
              )}

              {/* Selected Signal Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[var(--border-subtle)]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                      Selected Signal Inspection
                    </span>
                    <span className="text-[10px] font-mono text-[var(--text-muted)]">
                      · {selectedIncident.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mt-0.5">
                    {selectedIncident.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={selectedIncident.severity === 'Critical' ? 'signal' : 'neutral'}>
                    {selectedIncident.severity}
                  </Badge>
                  <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-[var(--bg-subtle)] border border-[var(--border-subtle)] text-[var(--text-primary)]">
                    {selectedIncident.change}
                  </span>
                </div>
              </div>

              {/* Synthesized Root Cause Box */}
              <div className="p-4 rounded-lg bg-[var(--bg-subtle)] border border-[var(--border-subtle)] space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[var(--accent-signal)] uppercase">
                  <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Synthesized Causal Thread</span>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
                  {selectedIncident.rootSummary}
                </p>
              </div>

              {/* Linked Causal Nodes */}
              <div className="space-y-2.5">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                  Correlated Event Nodes ({selectedIncident.nodes.length})
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedIncident.nodes.map((node) => (
                    <div
                      key={node.id}
                      className={`p-2.5 rounded-md border flex items-center justify-between text-xs transition-colors ${
                        node.isDismissed
                          ? 'bg-[var(--bg-subtle)]/40 border-[var(--border-subtle)] text-[var(--text-muted)]'
                          : node.highlight
                          ? 'bg-[var(--accent-signal-subtle)]/40 border-[var(--accent-signal-border)] text-[var(--text-primary)] font-semibold'
                          : 'bg-[var(--bg-base)] border-[var(--border-subtle)] text-[var(--text-primary)]'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <GitCommit className={`w-3.5 h-3.5 shrink-0 ${node.highlight ? 'text-[var(--accent-signal)]' : 'text-[var(--text-secondary)]'}`} aria-hidden="true" />
                        <span className={`truncate ${node.isDismissed ? 'line-through decoration-[var(--border-strong)]' : ''}`}>
                          {node.title}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-[var(--text-muted)] shrink-0">
                        {node.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
