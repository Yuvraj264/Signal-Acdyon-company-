import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Container from '../../components/Container'
import SectionHeading from '../../components/SectionHeading'
import Badge from '../../components/Badge'
import { AlertCircle, ArrowUpRight, GitCommit, Layers, Sparkles, Check, ChevronRight } from 'lucide-react'

/**
 * ProductPreview: Illustrates the broader SIGNAL workspace interface with an interactive example signals feed.
 */
export default function ProductPreview() {
  const exampleSignals = [
    {
      id: 'sig-1',
      title: 'Checkout failures',
      change: '↑ 18.2%',
      severity: 'Critical',
      time: '4m ago',
      sourceCount: 3,
      rootSummary: 'Release 2.4.1 form validation regex exception on mobile Safari clients.',
      connected: [
        { label: 'Release 2.4.1', type: 'Deploy', status: 'Trigger' },
        { label: 'Payment form', type: 'Component', status: 'Failing' },
        { label: 'Mobile traffic', type: 'Telemetry', status: 'Surge' },
      ],
    },
    {
      id: 'sig-2',
      title: 'API latency surge',
      change: '↑ 340ms',
      severity: 'Warning',
      time: '18m ago',
      sourceCount: 2,
      rootSummary: 'Database connection pool saturation following bulk enterprise report export job.',
      connected: [
        { label: 'Async Worker #4', type: 'Job', status: 'Active' },
        { label: 'Read Replica DB', type: 'Infra', status: 'Saturated' },
      ],
    },
    {
      id: 'sig-3',
      title: 'Support ticket volume',
      change: '↑ 7.8%',
      severity: 'Notice',
      time: '1h ago',
      sourceCount: 2,
      rootSummary: 'SaaS authentication token refresh expiration following OAuth provider policy update.',
      connected: [
        { label: 'Auth Provider', type: 'Vendor API', status: 'Updated' },
        { label: 'Login Screen', type: 'Client', status: 'Affected' },
      ],
    },
  ]

  const [selectedId, setSelectedId] = useState('sig-1')
  const selectedSignal = exampleSignals.find((s) => s.id === selectedId) || exampleSignals[0]

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
            <Badge variant="neutral" isMono={true}>
              EXAMPLE WORKSPACE · DEMO DATA
            </Badge>
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
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--border-strong)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--border-strong)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--border-strong)]" />
              </div>
              <span className="font-mono font-medium text-[var(--text-secondary)] pl-2">
                workspace.signal.internal / prioritized-threads
              </span>
            </div>
            <span className="font-mono text-[11px] text-[var(--text-muted)] hidden sm:inline">
              Filter: Active Anomalies (3)
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

              <div className="space-y-2">
                {exampleSignals.map((signal) => {
                  const isSelected = signal.id === selectedId
                  return (
                    <button
                      key={signal.id}
                      type="button"
                      onClick={() => setSelectedId(signal.id)}
                      className={`w-full p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[var(--bg-surface)] border-[var(--accent-signal)] shadow-xs'
                          : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span
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
                        <span>{signal.connected.length} linked nodes</span>
                        <span>{signal.time}</span>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Right Column: Selected Signal Causal Inspection */}
            <div className="md:col-span-7 p-5 sm:p-7 space-y-6 bg-[var(--bg-surface)]">
              {/* Selected Signal Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[var(--border-subtle)]">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                    Selected Signal Inspection
                  </span>
                  <h4 className="text-lg font-bold text-[var(--text-primary)] mt-0.5">
                    {selectedSignal.title}
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={selectedSignal.severity === 'Critical' ? 'signal' : 'neutral'}>
                    {selectedSignal.severity}
                  </Badge>
                  <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-[var(--bg-subtle)] border border-[var(--border-subtle)] text-[var(--text-primary)]">
                    {selectedSignal.change}
                  </span>
                </div>
              </div>

              {/* Synthesized Root Cause Box */}
              <div className="p-4 rounded-lg bg-[var(--bg-subtle)] border border-[var(--border-subtle)] space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[var(--accent-signal)] uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Synthesized Causal Thread</span>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
                  {selectedSignal.rootSummary}
                </p>
              </div>

              {/* Linked Causal Nodes */}
              <div className="space-y-2.5">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                  Correlated Event Nodes ({selectedSignal.connected.length})
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedSignal.connected.map((node, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-base)] flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-2 truncate">
                        <GitCommit className="w-3.5 h-3.5 text-[var(--text-secondary)] shrink-0" />
                        <span className="font-medium text-[var(--text-primary)] truncate">
                          {node.label}
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
