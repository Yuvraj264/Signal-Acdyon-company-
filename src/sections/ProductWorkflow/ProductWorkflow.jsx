import React from 'react'
import { motion } from 'framer-motion'
import Container from '../../components/Container'
import SectionHeading from '../../components/SectionHeading'
import Card from '../../components/Card'
import { Database, GitFork, CheckCircle2, ArrowRight } from 'lucide-react'

/**
 * ProductWorkflow: Explains the conceptual 3-stage intelligence engine.
 * 01 COLLECT -> 02 CONNECT -> 03 ACT
 */
export default function ProductWorkflow() {
  const steps = [
    {
      num: '01',
      title: 'COLLECT',
      tagline: 'Bring business signals together.',
      desc: 'Conceptually normalizes disparate event streams (deployments, billing metrics, error logs, traffic surges) into a unified time-series event schema.',
      icon: Database,
      highlight: '14+ Streams Normalized',
    },
    {
      num: '02',
      title: 'CONNECT',
      tagline: 'Find relationships between changes.',
      desc: 'Traces causal topology across infrastructure and business layers. Identifies when an alert in one service is merely a downstream symptom of another.',
      icon: GitFork,
      highlight: 'Graph Correlation',
    },
    {
      num: '03',
      title: 'ACT',
      tagline: 'Focus attention where it matters.',
      desc: 'Replaces pages of noisy dashboards with synthesized, high-confidence root cause threads so human operators can make decisive interventions.',
      icon: CheckCircle2,
      highlight: 'Prioritized Synthesis',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 sm:py-28 border-t border-[var(--border-subtle)] bg-[var(--bg-base)]">
      <Container size="wide" className="space-y-16">
        {/* Section Header */}
        <SectionHeading
          eyebrow="HOW SIGNAL WORKS"
          title="From scattered telemetry to human clarity."
          description="A three-stage conceptual workflow designed to separate high-conviction signals from background noise."
          align="left"
        />

        {/* 3-Stage Progression Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <Card className="h-full flex flex-col justify-between p-6 sm:p-7 space-y-6 hover:border-[var(--border-strong)] transition-all">
                  <div className="space-y-4">
                    {/* Top Row: Step Number & Icon */}
                    <div className="flex items-center justify-between">
                      <span className="text-2xl sm:text-3xl font-mono font-bold text-[var(--accent-signal)]">
                        {step.num}
                      </span>
                      <div className="p-2.5 rounded-lg bg-[var(--bg-subtle)] text-[var(--text-primary)] border border-[var(--border-subtle)]">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Step Title & Tagline */}
                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-[var(--text-primary)]">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-[var(--text-secondary)] mt-0.5">
                        {step.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Bottom Highlight Tag */}
                  <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[var(--text-muted)]">
                      Stage output
                    </span>
                    <span className="text-[11px] font-mono font-semibold text-[var(--text-primary)] px-2 py-0.5 rounded bg-[var(--bg-subtle)] border border-[var(--border-subtle)]">
                      {step.highlight}
                    </span>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
