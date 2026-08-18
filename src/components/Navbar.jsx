import React, { useState } from 'react'
import Container from './Container'
import Button from './Button'
import { ArrowRight, Menu, X } from 'lucide-react'

/**
 * Responsive Navigation Bar for SIGNAL.
 * Minimalist editorial design, clean desktop & mobile hierarchy, zero overflow.
 */
export default function Navbar({ onCtaClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavCta = () => {
    setMobileMenuOpen(false)
    if (onCtaClick) onCtaClick()
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border-subtle)] bg-[var(--bg-base)]/90 backdrop-blur-md transition-all">
      <Container size="wide">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Brand Wordmark */}
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-lg font-bold tracking-tight text-[var(--text-primary)] focus-visible:rounded-md"
            aria-label="SIGNAL Homepage"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-[var(--accent-signal)] group-hover:scale-110 transition-transform" />
            <span>SIGNAL</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[var(--text-secondary)]">
            <a 
              href="#problem" 
              className="hover:text-[var(--text-primary)] transition-colors focus-visible:rounded-sm"
            >
              Problem
            </a>
            <a 
              href="#how-it-works" 
              className="hover:text-[var(--text-primary)] transition-colors focus-visible:rounded-sm"
            >
              How it works
            </a>
            <a 
              href="#workspace" 
              className="hover:text-[var(--text-primary)] transition-colors focus-visible:rounded-sm"
            >
              Workspace
            </a>
            <a 
              href="#philosophy" 
              className="hover:text-[var(--text-primary)] transition-colors focus-visible:rounded-sm"
            >
              Philosophy
            </a>
          </nav>

          {/* Desktop Primary CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              iconRight={ArrowRight}
              onClick={handleNavCta}
              className="cursor-pointer"
            >
              Investigate a signal
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] focus-visible:ring-2 focus-visible:ring-[var(--accent-signal)] cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-[var(--border-subtle)] py-4 space-y-3">
            <nav className="flex flex-col space-y-2 text-sm font-medium text-[var(--text-secondary)]">
              <a
                href="#problem"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-1.5 rounded-md hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]"
              >
                Problem
              </a>
              <a
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-1.5 rounded-md hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]"
              >
                How it works
              </a>
              <a
                href="#workspace"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-1.5 rounded-md hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]"
              >
                Workspace
              </a>
              <a
                href="#philosophy"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-1.5 rounded-md hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]"
              >
                Philosophy
              </a>
            </nav>
            <div className="pt-2 border-t border-[var(--border-subtle)]">
              <Button
                variant="primary"
                size="md"
                className="w-full cursor-pointer"
                iconRight={ArrowRight}
                onClick={handleNavCta}
              >
                Investigate a signal
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}
