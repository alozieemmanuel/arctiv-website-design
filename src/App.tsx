import HeroSection from './components/HeroSection'
import WhatWeDo from './components/WhatWeDo'
import WhyUs from './components/WhyUs'
import HowItWorks from './components/HowItWorks'
import ProjectsSection from './components/ProjectsSection'
import ServiceAreas from './components/ServiceAreas'
import Footer from './components/Footer'
import EmergencyCTA from './components/EmergencyCTA'

export default function App() {
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