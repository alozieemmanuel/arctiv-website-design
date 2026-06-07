import Navbar from '../components/Navbar'
import AboutHero from '../components/AboutHero'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <main className="bg-[#060d1a] min-h-screen">
      {/* Navbar sits at top of page — no video on inner pages */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 z-10">
          <Navbar />
        </div>
        {/* Dark header band behind the navbar */}
        <div className="h-24 bg-[#060d1a]" />
      </div>

      {/* Main about content */}
      <AboutHero />

      {/* Footer */}
      <Footer />
    </main>
  )
}