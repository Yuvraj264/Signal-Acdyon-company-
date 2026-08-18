import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Container from './components/Container'
import Button from './components/Button'
import Badge from './components/Badge'
import Card from './components/Card'
import SectionHeading from './components/SectionHeading'
import Footer from './components/Footer'
import { ArrowRight, Check, AlertTriangle, ShieldCheck, Sparkles, Sliders } from 'lucide-react'

export default function App() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1440)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-base)] text-[var(--text-primary)]">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Area: Design System Foundation Verification */}
      <main className="flex-1 py-12 sm:py-16 space-y-16 sm:space-y-24">
        {/* Phase Status Banner */}
        <Container size="wide">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-lg bg-[var(--bg-subtle)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)]">
            <div className="flex items-center gap-2">
              <Badge variant="signal">Phase 1: Design Foundation</Badge>
              <span className="hidden sm:inline text-[var(--text-muted)]">|</span>
              <span className="text-[var(--text-primary)] font-medium">Design Tokens & Component Primitives</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--text-muted)]">Viewport:</span>
              <span className="px-2 py-0.5 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)] font-semibold text-[var(--text-primary)]">
                {windowWidth}px ({windowWidth <= 420 ? 'Mobile 390px target' : windowWidth >= 1280 ? 'Desktop 1440px target' : 'Tablet'})
              </span>
            </div>
          </div>
        </Container>

        {/* Section 1: Typography System */}
        <section>
          <Container size="wide" className="space-y-8">
            <SectionHeading
              eyebrow="01 — Typography Hierarchy"
              title="Editorial Sans-Serif + Technical Monospace"
              description="Strong contrast, optical kerning, balanced line-wrapping, and calibrated vertical rhythm for high-density business intelligence."
            />

            <div className="space-y-6 p-6 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)]">
              <div className="pb-6 border-b border-[var(--border-subtle)] space-y-2">
                <span className="text-xs font-mono text-[var(--text-muted)] uppercase">Display Scale (Hero Target)</span>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.05]">
                  SEE WHAT CHANGED.<br />
                  <span className="text-[var(--text-secondary)]">KNOW WHAT MATTERS.</span>
                </h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <span className="text-xs font-mono text-[var(--text-muted)] uppercase">Section Heading (H2)</span>
                  <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
                    Signal finds the thread.
                  </h2>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    Turns scattered business activity into the few changes worth your attention.
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono text-[var(--text-muted)] uppercase">Technical & Telemetry (Mono)</span>
                  <div className="p-3 rounded bg-[var(--bg-subtle)] border border-[var(--border-subtle)] font-mono text-xs text-[var(--text-secondary)] space-y-1">
                    <div className="text-[var(--accent-signal)] font-medium">SIG_DETECTED: checkout_failure_rate</div>
                    <div>delta: +18.2% | confidence: 0.984 | correl_nodes: 3</div>
                    <div className="text-[var(--text-muted)]">root_ref: git:release/v2.4.1 @ 14:02:18 UTC</div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 2: Color System Tokens */}
        <section>
          <Container size="wide" className="space-y-8">
            <SectionHeading
              eyebrow="02 — Color System"
              title="Light-First Warm Palette + Electric Signal Accent"
              description="A calibrated warm off-white background with near-black high-contrast text and a single purposeful electric signal color."
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="p-4 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-base)] space-y-2">
                <div className="h-10 rounded border border-[var(--border-subtle)] bg-[#FAFAF8]" />
                <div className="text-xs font-medium text-[var(--text-primary)]">Base Background</div>
                <div className="text-[11px] font-mono text-[var(--text-muted)]">#FAFAF8</div>
              </div>

              <div className="p-4 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] space-y-2">
                <div className="h-10 rounded border border-[var(--border-subtle)] bg-[#F4F4EE]" />
                <div className="text-xs font-medium text-[var(--text-primary)]">Subtle Surface</div>
                <div className="text-[11px] font-mono text-[var(--text-muted)]">#F4F4EE</div>
              </div>

              <div className="p-4 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] space-y-2">
                <div className="h-10 rounded border border-[var(--border-subtle)] bg-[#FFFFFF]" />
                <div className="text-xs font-medium text-[var(--text-primary)]">Card Surface</div>
                <div className="text-[11px] font-mono text-[var(--text-muted)]">#FFFFFF</div>
              </div>

              <div className="p-4 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] space-y-2">
                <div className="h-10 rounded bg-[#121211]" />
                <div className="text-xs font-medium text-[var(--text-primary)]">Primary Text</div>
                <div className="text-[11px] font-mono text-[var(--text-muted)]">#121211</div>
              </div>

              <div className="p-4 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] space-y-2">
                <div className="h-10 rounded bg-[#5C5C56]" />
                <div className="text-xs font-medium text-[var(--text-primary)]">Secondary Text</div>
                <div className="text-[11px] font-mono text-[var(--text-muted)]">#5C5C56</div>
              </div>

              <div className="p-4 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] space-y-2">
                <div className="h-10 rounded bg-[#FF4D00]" />
                <div className="text-xs font-medium text-[var(--text-primary)]">Signal Accent</div>
                <div className="text-[11px] font-mono text-[var(--text-muted)]">#FF4D00</div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 3: Interactive Component Primitives */}
        <section>
          <Container size="wide" className="space-y-8">
            <SectionHeading
              eyebrow="03 — Component Primitives"
              title="Buttons, Badges & Restrained Card Language"
              description="Constructed for tactile clarity, accessible focus rings, and intentional micro-interactions without visual noise."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Buttons Showcase */}
              <Card className="space-y-4">
                <div className="text-xs font-mono text-[var(--text-muted)] uppercase">Button System</div>
                <div className="flex flex-col gap-2.5">
                  <Button variant="primary" iconRight={ArrowRight}>
                    Primary Action
                  </Button>
                  <Button variant="accent" iconRight={ArrowRight}>
                    Electric Signal Action
                  </Button>
                  <Button variant="secondary">
                    Secondary Action
                  </Button>
                  <Button variant="ghost">
                    Ghost / Text Action
                  </Button>
                </div>
              </Card>

              {/* Badges & Statuses */}
              <Card className="space-y-4">
                <div className="text-xs font-mono text-[var(--text-muted)] uppercase">Badges & Statuses</div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="signal">Interactive demo</Badge>
                  <Badge variant="neutral">Example workspace</Badge>
                  <Badge variant="success">All sources healthy</Badge>
                  <Badge variant="warning">Anomaly detected</Badge>
                  <Badge variant="outline" dot={false}>v0.1.0-alpha</Badge>
                </div>
                <div className="pt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                  Pulsing signal dot guides user attention strictly to active state shifts.
                </div>
              </Card>

              {/* Card Container Sample */}
              <Card interactive className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[var(--text-muted)] uppercase">Interactive Card</span>
                  <Badge variant="signal" isMono={false}>Active</Badge>
                </div>
                <h4 className="text-base font-semibold text-[var(--text-primary)]">
                  Subtle Elevation & Precision Border
                </h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Hover state gently deepens border tone without jarring scale shifts.
                </p>
              </Card>
            </div>
          </Container>
        </section>

        {/* Section 4: Responsive Verification & Next Phase Gateway */}
        <section>
          <Container size="wide">
            <div className="p-6 sm:p-8 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[var(--accent-signal)] uppercase font-semibold">Phase 1 Complete</span>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">
                    Design Foundation Verified
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-mono">
                    <Check className="w-3.5 h-3.5" />
                    Responsive @ 390px & 1440px
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="p-3 rounded bg-[var(--bg-subtle)] border border-[var(--border-subtle)] space-y-1">
                  <div className="font-semibold text-[var(--text-primary)]">✓ Typography</div>
                  <div className="text-[var(--text-secondary)]">Inter & JetBrains Mono loaded</div>
                </div>
                <div className="p-3 rounded bg-[var(--bg-subtle)] border border-[var(--border-subtle)] space-y-1">
                  <div className="font-semibold text-[var(--text-primary)]">✓ Color Tokens</div>
                  <div className="text-[var(--text-secondary)]">Warm light-first system configured</div>
                </div>
                <div className="p-3 rounded bg-[var(--bg-subtle)] border border-[var(--border-subtle)] space-y-1">
                  <div className="font-semibold text-[var(--text-primary)]">✓ Component Primitives</div>
                  <div className="text-[var(--text-secondary)]">Buttons, Badges, Cards, Headings</div>
                </div>
                <div className="p-3 rounded bg-[var(--bg-subtle)] border border-[var(--border-subtle)] space-y-1">
                  <div className="font-semibold text-[var(--text-primary)]">✓ Ready for Phase 2</div>
                  <div className="text-[var(--text-secondary)]">Hero & Interactive Signal Demo</div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
