import React, { useState, useRef, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero/Hero'
import Problem from './sections/Problem/Problem'
import ProductWorkflow from './sections/ProductWorkflow/ProductWorkflow'
import ProductPreview from './sections/ProductPreview/ProductPreview'
import Philosophy from './sections/Philosophy/Philosophy'
import FinalCTA from './sections/FinalCTA/FinalCTA'
import Footer from './components/Footer'
import { INCIDENT_SCENARIOS } from './data/incidents'

export default function App() {
  // Deterministic index-based scenario rotation
  const [incidentIndex, setIncidentIndex] = useState(0)
  const [investigationState, setInvestigationState] = useState('idle')
  const [hasInvestigated, setHasInvestigated] = useState(false)
  const timersRef = useRef([])

  const activeIncident = INCIDENT_SCENARIOS[incidentIndex] || INCIDENT_SCENARIOS[0]

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      timersRef.current.forEach(clearTimeout)
    }
  }, [])

  const startInvestigation = () => {
    if (investigationState !== 'idle') return

    timersRef.current.forEach(clearTimeout)
    timersRef.current = []

    setInvestigationState('investigating')
    setHasInvestigated(true)

    const t1 = setTimeout(() => {
      setInvestigationState('connecting')
    }, 800)

    const t2 = setTimeout(() => {
      setInvestigationState('revealed')
    }, 1700)

    timersRef.current.push(t1, t2)
  }

  const resetAndNextInvestigation = () => {
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []

    // 1. Deterministically rotate to next incident: A -> B -> C -> D -> A
    setIncidentIndex((prev) => (prev + 1) % INCIDENT_SCENARIOS.length)
    setHasInvestigated(true)

    // 2. Immediately start investigating the next scenario
    setInvestigationState('investigating')

    const t1 = setTimeout(() => {
      setInvestigationState('connecting')
    }, 800)

    const t2 = setTimeout(() => {
      setInvestigationState('revealed')
    }, 1700)

    timersRef.current.push(t1, t2)
  }

  const selectIncident = (incident) => {
    const idx = INCIDENT_SCENARIOS.findIndex((i) => i.id === incident.id)
    if (idx !== -1) {
      timersRef.current.forEach(clearTimeout)
      timersRef.current = []
      setInvestigationState('idle')
      setIncidentIndex(idx)
      setHasInvestigated(true)
    }
  }

  const triggerInvestigation = () => {
    if (investigationState === 'idle') {
      startInvestigation()
    }
    const demoElement = document.getElementById('hero-signal-demo')
    if (demoElement) {
      demoElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-base)] text-[var(--text-primary)]">
      {/* Accessible Skip-to-Content Navigation Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--text-primary)] focus:text-white focus:rounded-md focus:shadow-md focus:outline-2 focus:outline-[var(--accent-signal)] font-medium text-xs tracking-tight"
      >
        Skip to main content
      </a>

      {/* 1. Navigation */}
      <Navbar onCtaClick={triggerInvestigation} />

      {/* Main Content Landmark */}
      <main id="main-content" className="flex-1">
        {/* 2. Hero + Dynamic Interactive Signal Investigation */}
        <Hero
          incident={activeIncident}
          state={investigationState}
          onStartInvestigation={startInvestigation}
          onResetInvestigation={resetAndNextInvestigation}
        />

        {/* 3. Problem Section: Your Business is Loud */}
        <Problem />

        {/* 4. Product Workflow: Collect -> Connect -> Act */}
        <ProductWorkflow
          activeIncident={activeIncident}
          hasInvestigated={hasInvestigated}
        />

        {/* 5. Product Preview: Operator Workspace (Synchronized with active incident) */}
        <ProductPreview
          activeIncident={activeIncident}
          investigationState={investigationState}
          hasInvestigated={hasInvestigated}
          onSelectIncident={selectIncident}
          incidents={INCIDENT_SCENARIOS}
        />

        {/* 6. Philosophy: The Goal Isn't More Information */}
        <Philosophy />

        {/* 7. Final CTA: Notice What Matters */}
        <FinalCTA onExploreClick={triggerInvestigation} />
      </main>

      {/* 8. Structural Footer */}
      <Footer />
    </div>
  )
}
