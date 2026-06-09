import { useState, useRef } from 'react'
import { navigate } from '../App'

const serviceLinks: { label: string; path: string }[] = [
  { label: 'Water Damage Restoration', path: '/services/water-damage' },
  { label: 'Fire Damage Restoration', path: '/services/fire-damage' },
  { label: 'Sewage Cleanup', path: '/services/sewage-cleanup' },
  { label: 'Reconstruction', path: '/services/reconstruction' },
  { label: 'General Contracting', path: '/services/general-contracting' },
  { label: 'Mould Remediation', path: '/services/mould-remediation' },
  { label: 'Storm Damage Repair', path: '/services/storm-damage' },
  { label: 'Structural Drying', path: '/services/structural-drying' },
]

const navLinks: { label: string; path: string }[] = [
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('/') && !path.startsWith('/#')) {
      e.preventDefault()
      navigate(path)
      setServicesOpen(false)
      setMenuOpen(false)
    }
  }

  // Small delay on mouse leave prevents the dropdown from
  // vanishing the instant the cursor moves from button to list
  const handleMouseEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    setServicesOpen(true)
  }

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setServicesOpen(false), 120)
  }

  return (
    <nav className="relative z-10 px-6 md:px-12 lg:px-16 py-6">

      <div className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); navigate('/') }}
          className="flex items-center gap-3"
        >
          <img
            src="/artiv-logo.png"
            alt="Artiv"
            className="h-8 w-8 object-contain"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
          />
        </a>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, path }) => {
            if (label === 'Services') {
              return (
                // This wrapper is position:relative so the dropdown
                // can anchor to it, but the dropdown itself uses
                // absolute positioning and does NOT affect this
                // element's height or the navbar's height
                <div
                  key="services"
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 text-sm text-white hover:text-gray-300 transition-colors duration-200">
                    Services
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* pt-3 creates a invisible hover bridge between
                      the button and the dropdown so the cursor
                      moving downward doesn't trigger onMouseLeave */}
                  {servicesOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                      <div className="liquid-glass rounded-xl overflow-hidden shadow-xl w-56">
                        {serviceLinks.map(({ label, path }) => (
                          <a
                            key={path}
                            href={path}
                            onClick={(e) => handleNav(e, path)}
                            className="block px-5 py-2.5 text-sm text-white hover:bg-white/10 transition-colors duration-150"
                          >
                            {label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            }

            return (
              <a
                key={label}
                href={path}
                onClick={(e) => handleNav(e, path)}
                className="text-sm text-white hover:text-gray-300 transition-colors duration-200"
              >
                {label}
              </a>
            )
          })}
        </div>

        {/* CTA */}
        <button className="hidden md:block bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-200">
          Get a Free Quote
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-9 h-9 rounded-lg"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 liquid-glass rounded-xl px-4 py-4 flex flex-col gap-1">
          {navLinks.map(({ label, path }) => {
            if (label === 'Services') {
              return (
                <div key="services-mobile">
                  <button
                    onClick={() => setMobileServicesOpen(prev => !prev)}
                    className="w-full flex items-center justify-between py-2 text-sm text-white hover:text-gray-300 transition-colors duration-200"
                  >
                    Services
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {mobileServicesOpen && (
                    <div className="pl-3 flex flex-col gap-1 border-l border-white/20 ml-1 mb-1">
                      {serviceLinks.map(({ label, path }) => (
                        <a
                          key={path}
                          href={path}
                          onClick={(e) => { handleNav(e, path); setMenuOpen(false) }}
                          className="py-2 text-sm text-white/80 hover:text-white transition-colors duration-150"
                        >
                          {label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )
            }

            return (
              <a
                key={label}
                href={path}
                onClick={(e) => { handleNav(e, path); setMenuOpen(false) }}
                className="py-2 text-sm text-white hover:text-gray-300 transition-colors duration-200"
              >
                {label}
              </a>
            )
          })}

          <div className="border-t border-white/10 pt-3 mt-2">
            <button className="w-full bg-white text-black px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-200">
              Get a Free Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}