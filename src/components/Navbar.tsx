import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone, Droplets, Flame, Wind, CloudLightning, Wrench, HardHat, AlertTriangle, Layers } from 'lucide-react'
import { Logo } from './Logo'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { navigate } from '@/lib/utils'

const serviceLinks = [
  {
    label: 'Water Damage Restoration',
    path: '/services/water-damage',
    icon: Droplets,
    desc: 'Extraction, drying & dehumidification',
  },
  {
    label: 'Fire & Smoke Restoration',
    path: '/services/fire-damage',
    icon: Flame,
    desc: 'Soot removal, odour neutralisation',
  },
  {
    label: 'Mould Remediation',
    path: '/services/mould-remediation',
    icon: AlertTriangle,
    desc: 'Safe containment & clearance testing',
  },
  {
    label: 'Structural Drying',
    path: '/services/structural-drying',
    icon: Wind,
    desc: 'Industrial desiccant systems',
  },
  {
    label: 'Storm Damage Repair',
    path: '/services/storm-damage',
    icon: CloudLightning,
    desc: 'Emergency board-up & tarping',
  },
  {
    label: 'Sewage Cleanup',
    path: '/services/sewage-cleanup',
    icon: Layers,
    desc: 'Category 3 water biohazard removal',
  },
  {
    label: 'Repairs & Renovation',
    path: '/services/repairs-renovation',
    icon: Wrench,
    desc: 'Full build-back to pre-loss condition',
  },
  {
    label: 'General Contracting',
    path: '/services/general-contracting',
    icon: HardHat,
    desc: 'Managed restoration projects',
  },
]

const navLinks = [
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services', hasDropdown: true },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
]

export function Navbar() {
  const { isScrolled } = useScrollPosition()
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault()
    navigate(path)
    setServicesOpen(false)
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }

  const handleMouseEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    setServicesOpen(true)
  }

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setServicesOpen(false), 180)
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/97 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <nav className="max-w-[1280px] mx-auto px-6 md:px-20">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Logo light={!isScrolled} />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map(({ label, path, hasDropdown }) => (
                <div
                  key={label}
                  className="relative"
                  onMouseEnter={hasDropdown ? handleMouseEnter : undefined}
                  onMouseLeave={hasDropdown ? handleMouseLeave : undefined}
                >
                  <a
                    href={path}
                    onClick={(e) => {
                      e.preventDefault()
                      if (hasDropdown) {
                        setServicesOpen((prev) => !prev)
                      } else {
                        handleNav(e, path)
                      }
                    }}
                    className={`flex items-center gap-1 text-[13px] tracking-wide font-medium transition-colors duration-200 ${
                      isScrolled
                        ? 'text-slate-600 hover:text-slate-900'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {label}
                    {hasDropdown && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          servicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </a>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {hasDropdown && servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                        style={{ width: '520px' }}
                      >
                        {/* Invisible bridge */}
                        <div className="absolute -top-4 left-0 right-0 h-4" />

                        <div className="rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.13)] border border-slate-200/60 bg-white p-3">
                          <div className="grid grid-cols-2 gap-0.5">
                            {serviceLinks.map(({ label, path, icon: Icon, desc }, i) => (
                              <motion.a
                                key={path}
                                href={path}
                                onClick={(e) => handleNav(e, path)}
                                initial={{ opacity: 0, y: 4 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.03, duration: 0.16 }}
                                className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-slate-50 transition-colors duration-150 group"
                              >
                                <span className="mt-0.5 w-8 h-8 rounded-lg bg-copper-50 flex items-center justify-center flex-shrink-0 group-hover:bg-copper-100 transition-colors">
                                  <Icon className="w-4 h-4 text-copper-600" />
                                </span>
                                <span>
                                  <span className="block text-[13px] font-medium text-slate-800 leading-snug">
                                    {label}
                                  </span>
                                  <span className="block text-[11px] text-slate-400 mt-0.5 leading-snug">
                                    {desc}
                                  </span>
                                </span>
                              </motion.a>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href="tel:+14374762407"
                className={`flex items-center gap-2 text-[13px] font-medium transition-colors duration-200 ${
                  isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white/80 hover:text-white'
                }`}
              >
                <Phone className="w-3.5 h-3.5" />
                +1 (437) 476 2407
              </a>
              <a
                href="/contact"
                onClick={(e) => handleNav(e, '/contact')}
                className="bg-copper-500 hover:bg-copper-400 text-white px-5 py-2.5 rounded-lg text-[13px] font-semibold transition-all duration-200 shadow-sm hover:shadow-[0_0_0_3px_rgba(180,100,30,0.18)]"
              >
                Request an Assessment
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 -mr-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className={`w-5 h-5 ${isScrolled ? 'text-slate-800' : 'text-white'}`} />
              ) : (
                <Menu className={`w-5 h-5 ${isScrolled ? 'text-slate-800' : 'text-white'}`} />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 bg-white lg:hidden overflow-y-auto"
          >
            <div className="max-w-[1280px] mx-auto px-6 pt-24 pb-10">
              <div className="flex flex-col">
                {navLinks.map(({ label, path, hasDropdown }) => (
                  <div key={label} className="border-b border-slate-100">
                    {hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="flex items-center justify-between w-full py-4 text-[15px] font-medium text-slate-800"
                        >
                          {label}
                          <ChevronDown
                            className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                              mobileServicesOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.22 }}
                              className="overflow-hidden"
                            >
                              <div className="pb-4 space-y-1">
                                {serviceLinks.map(({ label, path, icon: Icon }) => (
                                  <a
                                    key={path}
                                    href={path}
                                    onClick={(e) => handleNav(e, path)}
                                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                                  >
                                    <span className="w-7 h-7 rounded-lg bg-copper-50 flex items-center justify-center flex-shrink-0">
                                      <Icon className="w-3.5 h-3.5 text-copper-600" />
                                    </span>
                                    <span className="text-[14px] text-slate-700">{label}</span>
                                  </a>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <a
                        href={path}
                        onClick={(e) => handleNav(e, path)}
                        className="block py-4 text-[15px] font-medium text-slate-800"
                      >
                        {label}
                      </a>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-3">
                <a
                  href="tel:+14374762407"
                  className="flex items-center justify-center gap-2.5 py-3 px-6 rounded-xl border border-slate-200 text-slate-800 text-[14px] font-medium"
                >
                  <Phone className="w-4 h-4 text-copper-500" />
                  +1 (437) 476 2407
                </a>
                <a
                  href="/contact"
                  onClick={(e) => handleNav(e, '/contact')}
                  className="flex items-center justify-center w-full bg-copper-500 hover:bg-copper-400 text-white py-3.5 px-6 rounded-xl text-[14px] font-semibold transition-colors duration-200"
                >
                  Request an Assessment
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}