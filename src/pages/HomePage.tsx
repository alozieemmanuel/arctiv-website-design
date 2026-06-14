import { HeroSection } from '@/sections/HeroSection'
import { ServicesSection } from '@/sections/ServicesSection'
import { ProcessSection } from '@/sections/ProcessSection'
import { ProjectsSection } from '@/sections/ProjectsSection'
import { WhyUsSection } from '@/sections/WhyUsSection'
import { EmergencyCTASection } from '@/sections/EmergencyCTASection'
import { ServiceAreasSection } from '@/sections/ServiceAreasSection'

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <ProcessSection />
      <ProjectsSection />
      <ServiceAreasSection />
      <EmergencyCTASection />
    </main>
  )
}
