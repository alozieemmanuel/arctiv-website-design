import { useEffect, useRef, useState } from 'react'

interface Service {
  id: string
  slug: string
  icon: React.ReactNode
  title: string
  tagline: string
  description: string
  details: string[]
}

// ── Service icons — copper palette ────────────────────────────────────────────
const WaterIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <path d="M20 6 C20 6 8 18 8 26 C8 32.627 13.373 38 20 38 C26.627 38 32 32.627 32 26 C32 18 20 6 20 6Z"
      stroke="#C77B30" strokeWidth="2" fill="rgba(199,123,48,0.12)" />
    <path d="M14 28 C14 28 16 24 20 24 C24 24 26 28 26 28" stroke="#d4914d" strokeWidth="1.5" strokeLinecap="round" fill="none" />
  </svg>
)

const FireIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <path d="M20 36 C13 36 8 31 8 25 C8 19 12 16 14 12 C14 12 14 17 17 18 C17 18 15 14 20 10 C20 10 19 16 23 18 C25 15 24 12 24 12 C27 16 32 19 32 25 C32 31 27 36 20 36Z"
      stroke="#C77B30" strokeWidth="2" fill="rgba(199,123,48,0.12)" />
    <path d="M20 30 C17 30 15 28 15 26 C15 23 17 22 18 20 C18 20 18 23 20 24 C22 23 22 20 22 20 C24 22 25 23 25 26 C25 28 23 30 20 30Z"
      stroke="#d4914d" strokeWidth="1.5" fill="rgba(199,123,48,0.1)" />
  </svg>
)

const MouldIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <circle cx="20" cy="20" r="3" stroke="#C77B30" strokeWidth="1.5" fill="rgba(199,123,48,0.18)" />
    <circle cx="12" cy="14" r="2.5" stroke="#d4914d" strokeWidth="1.5" fill="rgba(199,123,48,0.1)" />
    <circle cx="28" cy="14" r="2.5" stroke="#d4914d" strokeWidth="1.5" fill="rgba(199,123,48,0.1)" />
    <circle cx="12" cy="26" r="2.5" stroke="#d4914d" strokeWidth="1.5" fill="rgba(199,123,48,0.1)" />
    <circle cx="28" cy="26" r="2.5" stroke="#d4914d" strokeWidth="1.5" fill="rgba(199,123,48,0.1)" />
    <circle cx="20" cy="10" r="2" stroke="#C77B30" strokeWidth="1.5" fill="rgba(199,123,48,0.08)" />
    <circle cx="20" cy="30" r="2" stroke="#C77B30" strokeWidth="1.5" fill="rgba(199,123,48,0.08)" />
  </svg>
)

const DryingIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <path d="M6 20 Q10 15 14 20 Q18 25 22 20 Q26 15 30 20 Q34 25 38 20" stroke="#C77B30" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M6 26 Q10 21 14 26 Q18 31 22 26 Q26 21 30 26 Q34 31 38 26" stroke="#d4914d" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
    <path d="M20 8 L20 14 M16 10 L20 8 L24 10" stroke="#C77B30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
)

const RepairsIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <path d="M8 32 L20 12 L32 32 Z" stroke="#C77B30" strokeWidth="2" fill="rgba(199,123,48,0.08)" strokeLinejoin="round" />
    <path d="M13 32 L27 32" stroke="#C77B30" strokeWidth="2" strokeLinecap="round" />
    <path d="M16 26 L24 26" stroke="rgba(199,123,48,0.5)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M22 18 L22 26 M25 18 L25 26" stroke="#d4914d" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const ContractingIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <path d="M6 34 L6 22 L14 14 L26 14 L34 22 L34 34 Z" stroke="#C77B30" strokeWidth="2" fill="rgba(199,123,48,0.06)" strokeLinejoin="round" />
    <path d="M14 34 L14 26 L26 26 L26 34" stroke="#d4914d" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(199,123,48,0.06)" />
    <path d="M4 34 L36 34" stroke="#C77B30" strokeWidth="2" strokeLinecap="round" />
    <circle cx="20" cy="9" r="4" stroke="#C77B30" strokeWidth="1.5" fill="rgba(199,123,48,0.15)" />
    <path d="M17 9 L23 9 M20 6 L20 12" stroke="#C77B30" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const LinkArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
    <path d="M3 13 L13 3 M6 3 L13 3 L13 10" stroke="#C77B30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const services: Service[] = [
  {
    id: 'water',
    slug: '/services/water-damage',
    icon: <WaterIcon />,
    title: 'Water Damage',
    tagline: 'Fast response. Full recovery.',
    description: 'Burst pipes, flooding, appliance leaks. We extract water and dry your property fast to stop further damage.',
    details: [
      'Emergency water extraction',
      'Structural drying with dehumidifiers systems',
      'Moisture mapping & monitoring',
      'Sewage backup cleanup & sanitization',
    ],
  },
  {
    id: 'fire',
    slug: '/services/fire-smoke-damage',
    icon: <FireIcon />,
    title: 'Fire & Smoke Damage',
    tagline: 'From board-up to rebuild.',
    description: 'We secure the site, clean soot and smoke from all surfaces, eliminate odour, and restore the property.',
    details: [
      'Emergency board-up & site securing',
      'Soot and smoke residue removal',
      'Odour neutralization & air filteration system',
      'Full structural and cosmetic restoration',
    ],
  },
  {
    id: 'mould',
    slug: '/services/mould-remediation',
    icon: <MouldIcon />,
    title: 'Mould Remediation',
    tagline: 'Safe, certified, thorough.',
    description: 'Mould spreads fast and hides behind walls. We contain, remove, and test to Health Canada standards.',
    details: [
      'Certified mould inspection & testing',
      'Containment zones & negative air pressure',
      'HEPA air filtration & surface treatment',
      'Clearance testing & documentation',
    ],
  },
  {
    id: 'drying',
    slug: '/services/structural-drying',
    icon: <DryingIcon />,
    title: 'Structural Drying',
    tagline: 'Precision drying. Zero compromise.',
    description: 'We dry walls, floors, and cavities to proper moisture levels using industrial equipment and daily monitoring.',
    details: [
      'Psychrometric & moisture assessments',
      'High-capacity industrial dehumidification',
      'Daily monitoring & drying logs',
      'IICRC S500 standard compliance',
    ],
  },
  {
    id: 'repairs',
    slug: '/services/repairs-renovation',
    icon: <RepairsIcon />,
    title: 'Repairs & Renovation',
    tagline: 'Restore. Rebuild. Reimagine.',
    description: 'We repair what was damaged and renovate what you want improved. From drywall to full kitchen rebuilds.',
    details: [
      'Post-loss structural repairs',
      'Drywall, flooring & millwork replacement',
      'Full kitchen & bathroom renovations',
      'Design-build & project management',
    ],
  },
  {
    id: 'contracting',
    slug: '/services/general-contracting',
    icon: <ContractingIcon />,
    title: 'General Contracting',
    tagline: 'One team. Every trade.',
    description: 'We coordinate every trade on your project, from demolition to finishing, for both residential and commercial work.',
    details: [
      'Multi-trade project coordination',
      'New construction & additions',
      'Commercial tenant improvements',
      'Insurance & third-party reporting',
    ],
  },
]

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.12 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 550ms ease ${index * 80}ms, transform 550ms ease ${index * 80}ms`,
      }}
    >
      <a href={service.slug} className="group block h-full">
        <div
          className="liquid-glass rounded-xl p-5 h-full transition-all duration-300"
          style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLDivElement
            el.style.borderColor = 'rgba(199,123,48,0.4)'
            el.style.background = 'rgba(199,123,48,0.04)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLDivElement
            el.style.borderColor = 'rgba(255,255,255,0.08)'
            el.style.background = ''
          }}
        >
          {/* Icon + link arrow */}
          <div className="flex items-start justify-between mb-4">
            <div>{service.icon}</div>
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200"
              style={{ border: '1px solid rgba(199,123,48,0.3)' }}
            >
              <LinkArrowIcon />
            </div>
          </div>

          <h3
            className="text-white font-bold text-base mb-1"
            style={{letterSpacing: '-0.02em' }}
          >
            {service.title}
          </h3>
          <p className="text-xs font-semibold mb-2.5 tracking-wide" style={{ color: '#C77B30'}}>
            {service.tagline}
          </p>
          <p className="text-gray-400 text-xs leading-relaxed mb-4">{service.description}</p>

          <div className="border-t border-white/[0.08] pt-4">
            <ul className="space-y-1.5">
              {service.details.map((d, i) => (
                <li key={i} className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="flex-shrink-0" style={{ color: '#C77B30' }}>›</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </a>
    </div>
  )
}

export default function WhatWeDo() {
  const [headerVisible, setHeaderVisible] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true) },
      { threshold: 0.2 }
    )
    if (headerRef.current) observer.observe(headerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="relative py-24 px-6 md:px-12 lg:px-16 overflow-hidden" style={{ background: '#0B1F3A' }}>
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Copper glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-[0.07] pointer-events-none" style={{
        background: 'radial-gradient(ellipse, #C77B30 0%, transparent 70%)',
      }} />

      {/* Section header */}
      <div
        ref={headerRef}
        className="max-w-2xl mb-12"
        style={{ opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 700ms ease, transform 700ms ease' }}
      >
        <p className="text-blue-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
          What We Do
        </p>
        <h2
          className="text-white text-3xl md:text-4xl font-normal mb-6 max-w-xs md:max-w-none"
          style={{ letterSpacing: '-0.03em' }}
        >
          Comprehensive restoration,
          <br />
          <span className="text-gray-500">from emergency to rebuild.</span>
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
          Arctiv covers the full range of property restoration and renovation across Canada.
          Our teams are on call 24/7. Click any service to learn more.
        </p>
      </div>

      {/* Service cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
        {services.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </div>
    </section>
  )
}