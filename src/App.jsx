import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero/Hero'
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
      {/* Navigation Bar */}
      <Navbar onCtaClick={triggerInvestigation} />

      {/* Main Content: Hero Section with Interactive Signal Demonstration */}
      <main className="flex-1">
        <Hero onInvestigateClick={triggerInvestigation} />
      </main>

      {/* Structural Footer */}
      <Footer />
    </div>
  )
}
