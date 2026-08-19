import React from 'react'
import { motion } from 'framer-motion'
import Container from '../../components/Container'
import Badge from '../../components/Badge'
import { Bell, FileSpreadsheet, LayoutDashboard, MessageSquare, ArrowRight, Zap } from 'lucide-react'

/**
 * Problem Section for SIGNAL.
 * Visualizes the modern operational dilemma: information overload vs. high-conviction signal.
 */
export default function Problem() {
  const noiseItems = [
    { label: '48 Active Dashboards', sub: 'Datadog & Grafana alerts', icon: LayoutDashboard },
    { label: '1,240 Unread Alerts', sub: 'PagerDuty & Slack channels', icon: Bell },
    { label: 'Weekly Revenue Spreadsheets', sub: 'Manual CSV exports', icon: FileSpreadsheet },
    { label: '18 Internal Slack Threads', sub: 'Customer escalations', icon: MessageSquare },
  ]

  return (
    <section id="problem" className="py-20 sm:py-28 border-t border-[var(--border-subtle)] bg-[var(--bg-subtle)]/40">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Statement */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <div>
              <Badge variant="neutral" isMono={true}>
                THE OPERATIONAL NOISE PROBLEM
              </Badge>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.08] text-balance-editorial">
              YOUR BUSINESS IS LOUD.
            </h2>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed text-balance-editorial">
              Dashboards show what is happening everywhere. They do not tell you why it happened here.
            </p>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed text-balance-editorial">
              Your business generates hundreds of noisy events every hour. Most don't matter. A few break revenue. Signal discards the noise and isolates the causal thread.
            </p>

            <div className="pt-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--accent-signal)]" />
              <span className="text-sm font-semibold tracking-tight text-[var(--text-primary)]">
                Find the change that caused the storm.
              </span>
            </div>
          </motion.div>

          {/* Right Column: Noise to Signal Convergence Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-3"
          >
            <div className="p-5 sm:p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                  Fragmented Operational Noise
                </span>
                <span className="text-[11px] font-mono text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Uncorrelated
                </span>
              </div>

              {/* Noise Cards Stack */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {noiseItems.map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)]/60 flex items-start gap-2.5"
                    >
                      <div className="p-1.5 rounded bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-medium text-[var(--text-primary)] truncate">
                          {item.label}
                        </div>
                        <div className="text-[11px] text-[var(--text-muted)] truncate">
                          {item.sub}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Convergence Arrow */}
              <div className="flex items-center justify-center py-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-[var(--text-muted)] bg-[var(--bg-subtle)] border border-[var(--border-subtle)]">
                  <span>Filtered & correlated across causal layers</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[var(--accent-signal)]" />
                </div>
              </div>

              {/* Filtered Output: The Clean Signal */}
              <div className="p-4 rounded-lg bg-[var(--text-primary)] text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-[var(--accent-signal)] text-white shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--accent-signal)]">
                      Prioritized Signal
                    </div>
                    <div className="text-sm font-semibold text-white">
                      1 Actionable Root Cause Thread
                    </div>
                  </div>
                </div>
                <Badge variant="signal" className="hidden sm:inline-flex bg-zinc-800 text-orange-400 border-zinc-700">
                  Ready to act
                </Badge>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
