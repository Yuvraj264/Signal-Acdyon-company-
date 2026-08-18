import React from 'react'
import Container from '../../components/Container'
import Button from '../../components/Button'
import Badge from '../../components/Badge'
import SignalDemo from '../../components/SignalDemo/SignalDemo'
import { ArrowRight, ArrowDown, Shield, Zap, Search } from 'lucide-react'

/**
 * Hero Section for SIGNAL.
 * Combines high-impact editorial typography with immediate interactive product demonstration.
 */
export default function Hero({ onInvestigateClick }) {
  const handleHeroCta = () => {
    const demoElement = document.getElementById('hero-signal-demo')
    if (demoElement) {
      demoElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
      // Find the investigate button inside the demo and click it
      const button = demoElement.querySelector('button')
      if (button) {
        button.click()
      }
    }
  }

  return (
    <section className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 overflow-hidden">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-6 space-y-8 text-left">
            {/* Eyebrow Tag */}
            <div>
              <Badge variant="signal" isMono={true}>
                BUSINESS INTELLIGENCE, WITHOUT THE NOISE.
              </Badge>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-[62px] font-bold tracking-tight text-[var(--text-primary)] leading-[1.04] text-balance-editorial">
                SEE WHAT CHANGED.<br />
                <span className="text-[var(--text-secondary)] font-medium">KNOW WHAT MATTERS.</span>
              </h1>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-xl leading-relaxed text-balance-editorial">
              Signal turns scattered business activity into the few changes worth your attention. We correlate anomalies, traces, and releases into clear, prioritized threads.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                iconRight={ArrowRight}
                onClick={handleHeroCta}
                className="w-full sm:w-auto shadow-sm cursor-pointer"
              >
                Investigate a signal
              </Button>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors focus-visible:rounded-md"
              >
                <span>How it works</span>
                <ArrowDown className="w-4 h-4 text-[var(--text-muted)]" />
              </a>
            </div>

            {/* Subtle Value Badges / Pillars */}
            <div className="pt-6 border-t border-[var(--border-subtle)] grid grid-cols-3 gap-4 text-xs font-mono text-[var(--text-secondary)]">
              <div>
                <div className="text-[var(--text-primary)] font-semibold">01 · Normalization</div>
                <div className="text-[var(--text-muted)] text-[11px]">Unifies 14+ event streams</div>
              </div>
              <div>
                <div className="text-[var(--text-primary)] font-semibold">02 · Correlation</div>
                <div className="text-[var(--text-muted)] text-[11px]">Causal graph tracing</div>
              </div>
              <div>
                <div className="text-[var(--text-primary)] font-semibold">03 · Synthesis</div>
                <div className="text-[var(--text-muted)] text-[11px]">Human-actionable root cause</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Product Demo Centerpiece */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <SignalDemo id="hero-signal-demo" />
          </div>
        </div>
      </Container>
    </section>
  )
}
