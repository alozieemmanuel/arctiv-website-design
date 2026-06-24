import { useRoute } from '@/hooks/useRoute'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { EmergencyFloat } from '@/components/EmergencyFloat'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { ProjectsPage } from '@/pages/ProjectsPage'
import { ProjectDetailPage } from '@/pages/ProjectDetailPage'
import { ContactPage } from '@/pages/ContactPage'
import { ServicePage } from '@/pages/ServicePage'

export default function App() {
  const path = useRoute()

  // Scroll to top on route change
  const isServicePage = path.startsWith('/services/')
  const isProjectDetail = path.startsWith('/projects/') && path.length > '/projects/'.length

  if (path === '/about') return <AboutPage />
  if (path === '/projects') return <ProjectsPage />
  if (path === '/contact') return <ContactPage />
  if (isProjectDetail) {
    const slug = path.replace('/projects/', '')
    return <ProjectDetailPage slug={slug} />
  }
  if (isServicePage) {
    const slug = path.replace('/services/', '')
    return <ServicePage slug={slug} />
  }

  // Home page
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
      <EmergencyFloat />
    </>
  )
}