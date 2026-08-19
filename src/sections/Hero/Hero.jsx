import React from 'react'
import { motion } from 'framer-motion'
import Container from '../../components/Container'
import Button from '../../components/Button'
import Badge from '../../components/Badge'
import SignalDemo from '../../components/SignalDemo/SignalDemo'
import { ArrowRight, ArrowDown } from 'lucide-react'

/**
 * Hero Section for SIGNAL.
 * Combines high-impact editorial typography with immediate interactive product demonstration.
 */
export default function Hero({
  incident,
  state,
  onStartInvestigation,
  onResetInvestigation,
}) {
  const handleHeroCta = () => {
    if (state === 'idle') {
      onStartInvestigation()
    }
    const demoElement = document.getElementById('hero-signal-demo')
    if (demoElement) {
      demoElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <section className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 overflow-hidden">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-6 space-y-8 text-left">
            {/* Eyebrow Tag */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <Badge variant="signal" isMono={true}>
                OPERATIONAL CLARITY · WITHOUT THE NOISE
              </Badge>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-[62px] font-bold tracking-tight text-[var(--text-primary)] leading-[1.04] text-balance-editorial">
                SEE WHAT CHANGED.<br />
                <span className="text-[var(--text-secondary)] font-medium">KNOW WHAT MATTERS.</span>
              </h1>
            </motion.div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-[var(--text-secondary)] max-w-xl leading-relaxed text-balance-editorial"
            >
              Three alerts fired at once. Find the single change that caused them. Signal correlates fragmented traces, deployments, and edge spikes into clear, decision-ready causal threads.
            </motion.p>

            {/* Hero CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Button
                variant="primary"
                size="lg"
                iconRight={ArrowRight}
                onClick={handleHeroCta}
                className="w-full sm:w-auto shadow-sm cursor-pointer"
              >
                {state === 'revealed' ? 'Investigate next signal' : 'Investigate a signal'}
              </Button>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors focus-visible:rounded-md"
              >
                <span>How it works</span>
                <ArrowDown className="w-4 h-4 text-[var(--text-muted)]" />
              </a>
            </motion.div>

            {/* Subtle Value Badges / Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="pt-6 border-t border-[var(--border-subtle)] grid grid-cols-3 gap-4 text-xs font-mono text-[var(--text-secondary)]"
            >
              <div>
                <div className="text-[var(--text-primary)] font-semibold">01 · Noise Filter</div>
                <div className="text-[var(--text-muted)] text-[11px]">Discards 90%+ alerts</div>
              </div>
              <div>
                <div className="text-[var(--text-primary)] font-semibold">02 · Correlation</div>
                <div className="text-[var(--text-muted)] text-[11px]">Causal dependency graph</div>
              </div>
              <div>
                <div className="text-[var(--text-primary)] font-semibold">03 · Root Trigger</div>
                <div className="text-[var(--text-muted)] text-[11px]">Actionable decision</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Product Demo Centerpiece */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex justify-center w-full"
          >
            <SignalDemo
              id="hero-signal-demo"
              incident={incident}
              state={state}
              onStartInvestigation={onStartInvestigation}
              onResetInvestigation={onResetInvestigation}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
