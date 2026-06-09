import { useState, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { navigate } from '../App'

/* ── Types ──────────────────────────────────────────────────────────────────── */
type Category = 'All' | 'Water Damage' | 'Fire & Smoke' | 'Mould' | 'Reconstruction' | 'General Contracting'

interface Project {
  id: string
  title: string
  category: Exclude<Category, 'All'>
  location: string
  scope: string
  duration: string
  description: string
  tags: string[]
  icon: React.ReactNode
}

/* ── Project Icons ─────────────────────────────────────────────────────────── */
const WaterProjectIcon = () => (
  <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
    <rect width="60" height="60" rx="0" fill="#0B1F3A" />
    <path d="M30 10C30 10 16 24 16 34C16 41.732 22.268 48 30 48C37.732 48 44 41.732 44 34C44 24 30 10 30 10Z" stroke="#C77B30" strokeWidth="2" fill="rgba(199,123,48,0.1)" />
    <path d="M22 37C22 37 25 33 30 33C35 33 38 37 38 37" stroke="#d4914d" strokeWidth="1.8" strokeLinecap="round" fill="none" />
  </svg>
)
const FireProjectIcon = () => (
  <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
    <rect width="60" height="60" rx="0" fill="#0B1F3A" />
    <path d="M30 48C21 48 14 42 14 34C14 26 19 23 21 18C21 18 21 24 25 26C25 26 22 21 30 16C30 16 28 23 33 26C36 22 35 18 35 18C39 23 46 27 46 34C46 42 39 48 30 48Z" stroke="#C77B30" strokeWidth="2" fill="rgba(199,123,48,0.1)" />
  </svg>
)
const MouldProjectIcon = () => (
  <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
    <rect width="60" height="60" rx="0" fill="#0B1F3A" />
    <circle cx="30" cy="30" r="5" stroke="#C77B30" strokeWidth="1.8" fill="rgba(199,123,48,0.15)" />
    <circle cx="18" cy="22" r="4" stroke="#d4914d" strokeWidth="1.5" fill="rgba(199,123,48,0.08)" />
    <circle cx="42" cy="22" r="4" stroke="#d4914d" strokeWidth="1.5" fill="rgba(199,123,48,0.08)" />
    <circle cx="18" cy="38" r="4" stroke="#d4914d" strokeWidth="1.5" fill="rgba(199,123,48,0.08)" />
    <circle cx="42" cy="38" r="4" stroke="#d4914d" strokeWidth="1.5" fill="rgba(199,123,48,0.08)" />
  </svg>
)
const ReconProjectIcon = () => (
  <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
    <rect width="60" height="60" rx="0" fill="#0B1F3A" />
    <path d="M10 48L30 18L50 48Z" stroke="#C77B30" strokeWidth="2" fill="rgba(199,123,48,0.08)" strokeLinejoin="round" />
    <path d="M18 48L42 48" stroke="#C77B30" strokeWidth="2" strokeLinecap="round" />
    <path d="M34 28L34 38M38 28L38 38" stroke="#d4914d" strokeWidth="2" strokeLinecap="round" />
  </svg>
)
const ContractProjectIcon = () => (
  <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
    <rect width="60" height="60" rx="0" fill="#0B1F3A" />
    <path d="M8 50L8 30L18 18L42 18L52 30L52 50Z" stroke="#C77B30" strokeWidth="2" fill="rgba(199,123,48,0.06)" strokeLinejoin="round" />
    <path d="M22 50L22 38L38 38L38 50" stroke="#d4914d" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(199,123,48,0.06)" />
    <path d="M6 50L54 50" stroke="#C77B30" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

/* ── Projects data ─────────────────────────────────────────────────────────── */
const projects: Project[] = [
  {
    id: 'p1',
    title: 'Basement Flood Restoration',
    category: 'Water Damage',
    location: 'Mississauga, ON',
    scope: 'Full basement',
    duration: '8 days',
    description: 'A burst supply line flooded a finished basement with 4 inches of standing water. Arctiv extracted over 3,000 litres, removed affected drywall and flooring, and dried the space to IICRC S500 standards before rebuilding all finishes.',
    tags: ['Water Extraction', 'Structural Drying', 'Rebuild'],
    icon: <WaterProjectIcon />,
  },
  {
    id: 'p2',
    title: 'Kitchen Fire Restoration',
    category: 'Fire & Smoke',
    location: 'Toronto, ON',
    scope: 'Kitchen + adjacent rooms',
    duration: '3 weeks',
    description: 'A grease fire caused significant smoke and soot damage throughout the main floor. Arctiv secured the property, completed full smoke cleaning and odour remediation, and rebuilt the kitchen with new cabinetry, countertops, and flooring.',
    tags: ['Smoke Cleaning', 'Odour Removal', 'Kitchen Rebuild'],
    icon: <FireProjectIcon />,
  },
  {
    id: 'p3',
    title: 'Attic Mould Remediation',
    category: 'Mould',
    location: 'Brampton, ON',
    scope: 'Attic — 1,400 sq ft',
    duration: '5 days',
    description: 'Inadequate attic ventilation led to extensive mould colonization across the sheathing. Arctiv established containment, performed full HEPA removal, applied antimicrobial treatment, and provided clearance testing documentation.',
    tags: ['Containment', 'HEPA Removal', 'Clearance Testing'],
    icon: <MouldProjectIcon />,
  },
  {
    id: 'p4',
    title: 'Storm Damage Roof Restoration',
    category: 'Reconstruction',
    location: 'Vaughan, ON',
    scope: 'Roof + two interior rooms',
    duration: '2 weeks',
    description: 'A severe windstorm removed a section of roofing, allowing rain to penetrate and damage two second-floor bedrooms. Arctiv tarped immediately, extracted water, dried the structure, and replaced roofing, drywall, insulation, and flooring.',
    tags: ['Emergency Tarping', 'Water Damage', 'Roof Repair'],
    icon: <ReconProjectIcon />,
  },
  {
    id: 'p5',
    title: 'Commercial Water Damage — Office Suite',
    category: 'Water Damage',
    location: 'Etobicoke, ON',
    scope: '2,800 sq ft office',
    duration: '10 days',
    description: 'A sprinkler malfunction flooded a commercial office suite over a long weekend. Arctiv responded after-hours, extracted water, dried the space around tenant operations where possible, and restored flooring, ceilings, and partitions.',
    tags: ['Commercial', 'After-Hours Response', 'Office Restoration'],
    icon: <WaterProjectIcon />,
  },
  {
    id: 'p6',
    title: 'Full Basement Suite Renovation',
    category: 'General Contracting',
    location: 'North York, ON',
    scope: 'Full basement',
    duration: '5 weeks',
    description: 'A homeowner engaged Arctiv to convert an unfinished basement into a legal secondary suite. Scope included framing, insulation, drywall, egress windows, a new bathroom, kitchen rough-in, flooring, and all finishes.',
    tags: ['Renovation', 'Secondary Suite', 'Full Scope'],
    icon: <ContractProjectIcon />,
  },
  {
    id: 'p7',
    title: 'Sewage Backup — Main Floor Restoration',
    category: 'Water Damage',
    location: 'Scarborough, ON',
    scope: 'Main floor — 1,200 sq ft',
    duration: '12 days',
    description: 'A municipal sewer surcharge caused a category 3 sewage backup affecting the entire main floor. Arctiv completed biohazard extraction, full sanitization, removal of all affected porous materials, and rebuilt drywall, flooring, and cabinetry.',
    tags: ['Biohazard', 'Sewage Cleanup', 'Full Rebuild'],
    icon: <WaterProjectIcon />,
  },
  {
    id: 'p8',
    title: 'Commercial Kitchen Build-Out',
    category: 'General Contracting',
    location: 'Markham, ON',
    scope: 'Commercial kitchen — 800 sq ft',
    duration: '6 weeks',
    description: 'Arctiv managed a full commercial kitchen build-out for a food service tenant, coordinating mechanical, electrical, plumbing rough-in, tile, stainless millwork, and hood installation to meet health department standards.',
    tags: ['Commercial', 'Multi-Trade', 'Kitchen'],
    icon: <ContractProjectIcon />,
  },
  {
    id: 'p9',
    title: 'Post-Fire Structural Rebuild',
    category: 'Fire & Smoke',
    location: 'Richmond Hill, ON',
    scope: 'Upper floor — full rebuild',
    duration: '6 weeks',
    description: 'A bedroom fire caused structural damage to joists and roof sheathing on the upper floor. Arctiv handled emergency board-up, contents pack-out, full structural repairs, and complete interior rebuild from framing to finishes.',
    tags: ['Structural Repair', 'Contents Pack-Out', 'Full Rebuild'],
    icon: <FireProjectIcon />,
  },
]

/* ── Category badge colour ────────────────────────────────────────────────── */
const catColor: Record<Exclude<Category, 'All'>, string> = {
  'Water Damage':       'rgba(59,130,246,0.15)',
  'Fire & Smoke':       'rgba(249,115,22,0.15)',
  'Mould':              'rgba(34,197,94,0.12)',
  'Reconstruction':     'rgba(199,123,48,0.15)',
  'General Contracting':'rgba(168,85,247,0.15)',
}
const catText: Record<Exclude<Category, 'All'>, string> = {
  'Water Damage':       '#60a5fa',
  'Fire & Smoke':       '#fb923c',
  'Mould':              '#4ade80',
  'Reconstruction':     '#C77B30',
  'General Contracting':'#c084fc',
}

/* ── FadeIn ─────────────────────────────────────────────────────────────────── */
function FadeCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [v, setV] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} style={{ opacity: v ? 1 : 0, transform: v ? 'translateY(0)' : 'translateY(24px)', transition: `opacity 550ms ease ${delay}ms, transform 550ms ease ${delay}ms` }}>
      {children}
    </div>
  )
}

/* ── Project Card ─────────────────────────────────────────────────────────── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <FadeCard delay={index * 60}>
      <div
        className="group rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300"
        style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}
        onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(199,123,48,0.3)')}
        onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)')}
      >
        {/* Graphic panel */}
        <div className="h-40 relative overflow-hidden">
          {project.icon}
          {/* Overlay */}
          <div className="absolute inset-0 flex items-end p-4" style={{ background: 'linear-gradient(to top, rgba(6,13,26,0.9) 0%, transparent 60%)' }}>
            <span
              className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
              style={{ background: catColor[project.category], color: catText[project.category] }}
            >
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-white font-semibold text-sm mb-1" style={{ letterSpacing: '-0.01em' }}>{project.title}</h3>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-gray-500 text-[11px]">{project.location}</span>
            <span className="text-gray-700 text-[11px]">·</span>
            <span className="text-gray-500 text-[11px]">{project.scope}</span>
            <span className="text-gray-700 text-[11px]">·</span>
            <span className="text-gray-500 text-[11px]">{project.duration}</span>
          </div>
          <p className="text-gray-400 text-xs leading-relaxed flex-grow mb-4">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map(t => (
              <span key={t} className="text-[10px] px-2 py-0.5 rounded-full text-gray-400" style={{ background: 'rgba(255,255,255,0.05)' }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </FadeCard>
  )
}

/* ── Page ─────────────────────────────────────────────────────────────────── */
const CATEGORIES: Category[] = ['All', 'Water Damage', 'Fire & Smoke', 'Mould', 'Reconstruction', 'General Contracting']

export default function ProjectsPage() {
  const [active, setActive] = useState<Category>('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <main style={{ background: '#060d1a', minHeight: '100vh' }}>
      {/* Navbar */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 z-10"><Navbar /></div>
        <div className="h-24" style={{ background: '#060d1a' }} />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-6 md:px-12 lg:px-16" style={{ background: 'linear-gradient(135deg, #060d1a 0%, #0B1F3A 60%, #060d1a 100%)' }}>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: '#C77B30' }}>Our Work</p>
          <h1 className="text-white text-4xl md:text-5xl font-semibold mb-5" style={{ letterSpacing: '-0.03em' }}>
            Recent Projects
            <br />
            <span className="text-gray-500">across the GTA.</span>
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
            Each project represents a family or business that needed fast, professional help. Here's a selection of recent work across our service areas.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 px-6 md:px-12 lg:px-16" style={{ background: '#0B1F3A' }}>
        <div className="max-w-7xl mx-auto">
          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="text-xs font-medium px-4 py-2 rounded-full transition-all duration-200"
                style={
                  active === cat
                    ? { background: '#C77B30', color: 'white' }
                    : { background: 'rgba(255,255,255,0.05)', color: '#9ca3af', border: '1px solid rgba(255,255,255,0.08)' }
                }
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-sm">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 px-6 md:px-12 lg:px-16" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0f1f3d 50%, #0a1628 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(234,88,12,0.07) 0%, transparent 65%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-white text-3xl md:text-4xl font-semibold mb-4" style={{ letterSpacing: '-0.03em' }}>
            Have a project in mind?
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-lg mx-auto">
            Whether it's emergency restoration or a planned renovation, get in touch and we'll respond the same day.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:4168888888" className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all duration-200" style={{ background: '#C77B30' }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = '#d4914d')}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = '#C77B30')}
            >
              Call (416) 888-8888
            </a>
            <button onClick={() => navigate('/contact')} className="text-white font-medium px-8 py-4 rounded-xl text-sm transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.1)')}
              onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.06)')}
            >
              Request a Free Quote
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}