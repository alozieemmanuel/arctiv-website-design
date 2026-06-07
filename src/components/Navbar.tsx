import { useState, useRef, useEffect } from 'react'
import { navigate } from '../App'

/* ── Services dropdown data ────────────────────────────────────────────────── */
const serviceLinks = [
  { label: 'Water Damage',        path: '/services/water-damage' },
  { label: 'Fire & Smoke Damage', path: '/services/fire-damage' },
  { label: 'Mould Remediation',   path: '/services/mould-remediation' },
  { label: 'Structural Drying',   path: '/services/structural-drying' },
  { label: 'Storm Damage',        path: '/services/storm-damage' },
  { label: 'Sewage Cleanup',      path: '/services/sewage-cleanup' },
  { label: 'Reconstruction',      path: '/services/reconstruction' },
  { label: 'General Contracting', path: '/services/general-contracting' },
]

const ChevronDown = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    className="w-3 h-3 transition-transform duration-200"
    style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
  >
    <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Navbar() {
  const [menuOpen,          setMenuOpen]          = useState(false)
  const [servicesOpen,      setServicesOpen]      = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const closeTimer  = useRef<ReturnType<typeof setTimeout> | null>(null)

  /* Close on outside click */
  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
        setServicesOpen(false)
    }
    document.addEventListener('mousedown', h)
    return () => document.removeEventListener('mousedown', h)
  }, [])

  const go = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('/') && !path.startsWith('/#')) {
      e.preventDefault()
      navigate(path)
      setMenuOpen(false)
      setServicesOpen(false)
    }
  }

  const openDD  = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setServicesOpen(true)  }
  const closeDD = () => { closeTimer.current = setTimeout(() => setServicesOpen(false), 160) }

  /* shared link style */
  const linkCls = "text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/[0.05]"

  return (
    <nav
      className="relative z-10 px-6 md:px-12 lg:px-16 pt-6"
    >
      <div className="liquid-glass rounded-xl px-5 py-2.5 flex items-center justify-between">

        {/* ── Logo ─────────────────────────────────────────────── */}
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); navigate('/') }}
          className="flex items-center gap-2.5 flex-shrink-0"
        >
          <div className="md:pl-3">
            <img src="/artiv-logo.png" alt="Arctiv logo" className="w-8 h-8" />
          </div>
        </a>

        {/* ── Desktop nav ──────────────────────────────────────── */}
        <div className="hidden md:flex items-center gap-1">

          <a href="/about" onClick={(e) => go(e, '/about')} className={linkCls}>About</a>

          {/* Services dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={openDD}
            onMouseLeave={closeDD}
          >
            <button
              onClick={() => setServicesOpen(p => !p)}
              aria-expanded={servicesOpen}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/[0.05] flex items-center gap-1.5"
            >
              Services <ChevronDown open={servicesOpen} />
            </button>

            {servicesOpen && (
              <div
                className="absolute top-full left-1/2 mt-3 w-[340px] rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  transform: 'translateX(-50%)',
                  background: 'rgba(8, 18, 34, 0.97)',
                  backdropFilter: 'blur(24px)',
                  border: '1px solid rgba(199,123,48,0.15)',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.7), 0 0 0 1px rgba(199,123,48,0.08)',
                  animation: 'ddIn 180ms ease',
                }}
              >
                <style>{`
                  @keyframes ddIn {
                    from { opacity:0; transform: translateX(-50%) translateY(-8px); }
                    to   { opacity:1; transform: translateX(-50%) translateY(0);    }
                  }
                `}</style>

                <div className="p-2">
                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] px-3 py-2 mb-1" style={{ color: '#C77B30' }}>
                    Our Services
                  </p>
                  <div className="grid grid-cols-2 gap-0.5">
                    {serviceLinks.map(({ label, path }) => (
                      <a
                        key={label}
                        href={path}
                        onClick={(e) => go(e, path)}
                        className="flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl text-xs text-gray-400 hover:text-white transition-all duration-150 group"
                        onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(199,123,48,0.07)'}
                        onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'}
                      >
                        <span>{label}</span>
                        <svg viewBox="0 0 10 10" fill="none" className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                          <path d="M1 9L9 1M4 1h5v5" stroke="#C77B30" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Bottom strip */}
                <div
                  className="px-4 py-3 flex items-center justify-between"
                  style={{ borderTop: '1px solid rgba(199,123,48,0.12)', background: 'rgba(199,123,48,0.04)' }}
                >
                  <span className="text-gray-500 text-xs">Emergency? We're on call 24/7.</span>
                  <a href="tel:4161234567" className="text-xs font-bold" style={{ color: '#C77B30' }}>
                    416.123.4567
                  </a>
                </div>
              </div>
            )}
          </div>

          <a href="/projects" onClick={(e) => go(e, '/projects')} className={linkCls}>Projects</a>
          <a href="/contact"  onClick={(e) => go(e, '/contact')}  className={linkCls}>Contact</a>
        </div>

        {/* ── CTA button ───────────────────────────────────────── */}
        <button
          className="hidden md:flex items-center gap-2 text-white text-[13px] font-bold px-5 py-2.5 rounded-lg transition-all duration-200 tracking-wide"
          style={{ background: '#C77B30'}}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#d4914d' }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#C77B30' }}
        >
          Free Quote
        </button>

        {/* ── Mobile hamburger ──────────────────────────────────── */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-9 h-9"
          onClick={() => setMenuOpen(p => !p)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* ── Mobile dropdown ──────────────────────────────────────── */}
      {menuOpen && (
        <div
          className="md:hidden mt-2 liquid-glass rounded-xl px-4 py-4 flex flex-col gap-1"
        >
          <a href="/about" onClick={(e) => go(e, '/about')}
            className="text-sm text-white/80 hover:text-white px-3 py-2.5 rounded-lg hover:bg-white/[0.05] transition-colors">
            About
          </a>

          {/* Mobile services accordion */}
          <div>
            <button
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-white/80 hover:text-white hover:bg-white/[0.05] transition-colors"
              onClick={() => setMobileServicesOpen(p => !p)}
            >
              Services <ChevronDown open={mobileServicesOpen} />
            </button>
            {mobileServicesOpen && (
              <div className="mt-1 ml-3 pl-4 space-y-0.5" style={{ borderLeft: '2px solid rgba(199,123,48,0.3)' }}>
                {serviceLinks.map(({ label, path }) => (
                  <a key={label} href={path} onClick={(e) => go(e, path)}
                    className="block text-xs text-gray-400 hover:text-white transition-colors py-1.5 px-1">
                    {label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="/projects" onClick={(e) => go(e, '/projects')}
            className="text-sm text-white/80 hover:text-white px-3 py-2.5 rounded-lg hover:bg-white/[0.05] transition-colors">
            Projects
          </a>
          <a href="/contact" onClick={(e) => go(e, '/contact')}
            className="text-sm text-white/80 hover:text-white px-3 py-2.5 rounded-lg hover:bg-white/[0.05] transition-colors">
            Contact
          </a>

          <div className="border-t border-white/[0.08] pt-3 mt-2">
            <button
              className="w-full text-white font-bold px-6 py-3 rounded-lg text-sm transition-all"
              style={{ background: '#C77B30' }}
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}