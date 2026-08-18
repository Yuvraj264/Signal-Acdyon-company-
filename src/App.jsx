import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero/Hero'
import Problem from './sections/Problem/Problem'
import ProductWorkflow from './sections/ProductWorkflow/ProductWorkflow'
import ProductPreview from './sections/ProductPreview/ProductPreview'
import Philosophy from './sections/Philosophy/Philosophy'
import FinalCTA from './sections/FinalCTA/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  const triggerInvestigation = () => {
    const demoElement = document.getElementById('hero-signal-demo')
    if (demoElement) {
      demoElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
      const button = demoElement.querySelector('button')
      if (button) {
        button.click()
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-base)] text-[var(--text-primary)]">
      {/* 1. Navigation */}
      <Navbar onCtaClick={triggerInvestigation} />

      {/* Main Homepage Flow */}
      <main className="flex-1">
        {/* 2. Hero + Interactive Signal Investigation */}
        <Hero onInvestigateClick={triggerInvestigation} />

        {/* 3. Problem Section: Your Business is Loud */}
        <Problem />

        {/* 4. Product Workflow: Collect -> Connect -> Act */}
        <ProductWorkflow />

        {/* 5. Product Preview: Operator Workspace & Live Feed */}
        <ProductPreview />

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
