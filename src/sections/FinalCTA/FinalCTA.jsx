import React from 'react'
import { motion } from 'framer-motion'
import Container from '../../components/Container'
import Button from '../../components/Button'
import Badge from '../../components/Badge'
import { ArrowRight, Sparkles } from 'lucide-react'

/**
 * FinalCTA Section for SIGNAL.
 * Honest, confident closing conversion statement.
 */
export default function FinalCTA({ onExploreClick }) {
  const handleScrollToHero = () => {
    if (onExploreClick) {
      onExploreClick()
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-24 sm:py-32 border-t border-[var(--border-subtle)] bg-[var(--bg-subtle)]/60 text-center relative overflow-hidden">
      <Container size="default">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 sm:p-14 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-xs space-y-8"
        >
          {/* Eyebrow */}
          <div>
            <Badge variant="signal" isMono={true}>
              INTELLIGENT BUSINESS VISIBILITY
            </Badge>
          </div>

          {/* Core Final Headline */}
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.08] text-balance-editorial">
              DON'T MONITOR EVERYTHING.<br />
              <span className="text-[var(--text-secondary)] font-medium">
                NOTICE WHAT MATTERS.
              </span>
            </h2>
          </div>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed text-balance-editorial">
            Experience the difference between dashboard overload and automated causal clarity.
          </p>

          {/* Primary CTA Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              iconRight={ArrowRight}
              onClick={handleScrollToHero}
              className="w-full sm:w-auto shadow-sm cursor-pointer"
            >
              Explore Signal
            </Button>
          </div>

          {/* Honest Demo Disclaimer */}
          <div className="pt-4 text-xs font-mono text-[var(--text-muted)]">
            Interactive demo · Example workspace · No registration required
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
