import { useState, useEffect } from 'react'
import HeroSection from './components/HeroSection'
import WhatWeDo from './components/WhatWeDo'
import WhyUs from './components/WhyUs'
import HowItWorks from './components/HowItWorks'
import ProjectsSection from './components/ProjectsSection'
import ServiceAreas from './components/ServiceAreas'
import Footer from './components/Footer'
import EmergencyCTA from './components/EmergencyCTA'
import AboutPage from './pages/AboutPage'


// Lightweight hash-based router — no dependencies needed
function useRoute() {
  const [path, setPath] = useState(window.location.pathname)
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])
  return path
}

export function navigate(to: string) {
  window.history.pushState({}, '', to)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

export default function App() {
  const path = useRoute()

  if (path === '/about') return <AboutPage />

  return (
    <main>
      <HeroSection />
      <WhatWeDo />
      <WhyUs />
      <HowItWorks />
      <ProjectsSection />
      <ServiceAreas />
      <EmergencyCTA />
      <Footer />
    </main>
  )
}