import Navbar from '../components/Navbar'
import AboutHero from '../components/AboutHero'

// Future About sections slot in here:
// import AboutTeam from '../components/AboutTeam'
// import AboutProcess from '../components/AboutProcess'
// import AboutCertifications from '../components/AboutCertifications'

export default function AboutPage() {
  return (
    <main className="bg-[#060d1a] min-h-screen">
      <div className="relative">
        {/* Reuse the same navbar — no video behind it on inner pages */}
        <div className="absolute top-0 left-0 right-0 z-10">
          <Navbar />
        </div>
        {/* Dark header band to sit behind the navbar */}
        <div className="h-24 bg-[#060d1a]" />
      </div>

      <AboutHero />

      {/* <AboutTeam /> */}
      {/* <AboutProcess /> */}
      {/* <AboutCertifications /> */}
    </main>
  )
}
