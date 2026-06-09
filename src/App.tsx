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
import ProjectPage from './pages/ProjectPage'
import ContactPage from './pages/ContactPage'
import WaterDamagePage from './components/waterdamage'
import FireDamagePage from './components/FireDamage'
import SewageCleanupPage from './components/SewageCleanup'
import ReconstructionPage from './components/Reconstruction'
import GeneralContractingPage from './components/GeneralConsulting'
import MouldRemediationPage from './components/MouldRemediation'
import StormDamagePage from './components/StormDamage'
import StructuralDryingPage from './components/StructuralDryness'


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
  if (path.startsWith('/projects')) return <ProjectPage />
  if (path === '/contact') return <ContactPage />
  if (path === '/services/water-damage') return <WaterDamagePage />
  if (path === '/services/fire-damage') return <FireDamagePage />
  if (path === '/services/sewage-cleanup') return <SewageCleanupPage />
  if (path === '/services/repairs-renovation') return <ReconstructionPage />
  if (path === '/services/general-contracting') return <GeneralContractingPage />
  if (path === '/services/mould-remediation') return <MouldRemediationPage />
  if (path === '/services/storm-damage') return <StormDamagePage />
  if (path === '/services/structural-drying') return <StructuralDryingPage />

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