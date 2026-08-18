import React from 'react'
import { motion } from 'framer-motion'
import Container from '../../components/Container'

/**
 * Philosophy: The editorial manifesto statement of SIGNAL.
 * "THE GOAL ISN'T MORE INFORMATION. IT'S BETTER ATTENTION."
 */
export default function Philosophy() {
  return (
    <section id="philosophy" className="py-28 sm:py-36 lg:py-44 border-t border-[var(--border-subtle)] bg-[var(--bg-base)] text-center relative overflow-hidden">
      <Container size="narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          {/* Subtle Monospace Eyebrow */}
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[var(--accent-signal)] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-signal)]" />
            <span>Product Philosophy</span>
          </div>

          {/* Large Editorial Manifesto Statement */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.08] text-balance-editorial">
            THE GOAL ISN'T<br />
            MORE INFORMATION.<br />
            <span className="text-[var(--accent-signal)]">
              IT'S BETTER ATTENTION.
            </span>
          </h2>

          {/* Minimal Supporting Reflection */}
          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed text-balance-editorial">
            Traditional BI tools drown operators in charts and alerts. SIGNAL focuses human cognition strictly on the causal anomalies that actually demand a decision.
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
