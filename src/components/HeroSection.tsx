import Navbar from './Navbar'
import AnimatedHeading from './AnimatedHeading'
import FadeIn from './FadeIn'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4'

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] md:min-h-screen flex flex-col overflow-hidden">
      {/* ── Video background ──────────────────────────── */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* ── Navbar ────────────────────────────────────── */}
      <Navbar />

      {/* ── Hero content (bottom) ─────────────────────── */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-12 lg:pb-16">
        <div className="lg:grid lg:grid-cols-2 lg:items-end gap-8">

          {/* Left column */}
          <div>
            <AnimatedHeading
              text={"Restoring Properties.\nBuilding Trust."}
              className="text-3xl md:text-3xl lg:text-4xl font-bold mb-4 text-white"
              style={{ letterSpacing: '-0.03em' }}
              initialDelay={200}
              charDelay={30}
            />

            <FadeIn delay={800} duration={1000}>
              <p className="text-sm md:text-base text-gray-300 mb-5">
                Canada's trusted partner for emergency restoration and full-scale
                renovation. When disaster strikes, Arctiv responds by restoring
                your property to its former best, with care and precision.
              </p>
            </FadeIn>

            <FadeIn delay={1200} duration={1000}>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-black px-8 py-3 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-200">
                  Get a Free Quote
                </button>
                {/* Our Services — hide on mobile */}
                <button className="hidden sm:block liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-white hover:text-black transition-colors duration-200">
                  Our Services
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Right column — tag — hide on mobile */}
          <div className="hidden lg:flex items-end justify-start lg:justify-end mt-8 lg:mt-0">
            <FadeIn delay={1400} duration={1000}>
              <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
                <p className="text-sm font-medium text-white tracking-wide">
                  24/7 Emergency Response — <a href="tel:18005551234" className="text-blue-400 hover:underline">1-800-555-1234</a>
                </p>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}
