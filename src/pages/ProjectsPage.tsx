import { useState, useEffect, useRef } from 'react'
import { Phone } from 'lucide-react'
import { ScrollReveal } from '@/components/ScrollReveal'
import { SectionLabel } from '@/components/SectionLabel'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { EmergencyFloat } from '@/components/EmergencyFloat'
import { navigate } from '@/lib/utils'

type Category = 'All' | 'Water Damage' | 'Fire & Smoke' | 'Mould' | 'Reconstruction' | 'General Contracting'

interface Project {
  id: string
  title: string
  category: Category
  location: string
  scope: string
  duration: string
  description: string
  tags: string[]
  image: string
}

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
    image: '/project-1.jpg',
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
    image: '/project-6.jpg',
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
    image: '/project-4.jpg',
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
    image: '/about-team.png',
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
    image: '/project-5.jpg',
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
    image: '/project-2.jpg',
  },
  {
    id: 'p7',
    title: 'Sewage Backup — Main Floor Restoration',
    category: 'Water Damage',
    location: 'Scarborough, ON',
    scope: '1,200 sq ft',
    duration: '12 days',
    description: 'A municipal sewer surcharge caused a category 3 sewage backup affecting the entire main floor. Arctiv completed biohazard extraction, full sanitization, removal of all affected porous materials, and rebuilt drywall, flooring, and cabinetry.',
    tags: ['Biohazard', 'Sewage Cleanup', 'Full Rebuild'],
    image: '/project-1.jpg',
  },
  {
    id: 'p8',
    title: 'Commercial Kitchen Build-Out',
    category: 'General Contracting',
    location: 'Markham, ON',
    scope: 'Commercial kitchen',
    duration: '6 weeks',
    description: 'Arctiv managed a full commercial kitchen build-out for a food service tenant, coordinating mechanical, electrical, plumbing rough-in, tile, stainless millwork, and hood installation to meet health department standards.',
    tags: ['Commercial', 'Multi-Trade', 'Kitchen'],
    image: '/project-6.jpg',
  },
  {
    id: 'p9',
    title: 'Post-Fire Structural Rebuild',
    category: 'Fire & Smoke',
    location: 'Richmond Hill, ON',
    scope: 'Upper floor',
    duration: '6 weeks',
    description: 'A bedroom fire caused structural damage to joists and roof sheathing on the upper floor. Arctiv handled emergency board-up, contents pack-out, full structural repairs, and complete interior rebuild from framing to finishes.',
    tags: ['Structural Repair', 'Contents Pack-Out', 'Full Rebuild'],
    image: '/project-2.jpg',
  },
]

const CATEGORIES: Category[] = ['All', 'Water Damage', 'Fire & Smoke', 'Mould', 'Reconstruction', 'General Contracting']

const catColors: Record<string, { dot: string; text: string; badge: string }> = {
  'Water Damage':        { dot: '#3b82f6', text: '#3b82f6', badge: 'bg-blue-50 text-blue-700' },
  'Fire & Smoke':        { dot: '#f97316', text: '#f97316', badge: 'bg-orange-50 text-orange-700' },
  'Mould':               { dot: '#22c55e', text: '#22c55e', badge: 'bg-green-50 text-green-700' },
  'Reconstruction':      { dot: '#b87333', text: '#b87333', badge: 'bg-copper-200 text-copper-600' },
  'General Contracting': { dot: '#a855f7', text: '#a855f7', badge: 'bg-purple-50 text-purple-700' },
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const colors = catColors[project.category] ?? catColors['Reconstruction']

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 550ms ease ${index * 80}ms, transform 550ms ease ${index * 80}ms`,
      }}
    >
      <div
        className="group relative rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300 h-full flex flex-col"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image */}
        <div className="relative overflow-hidden" style={{ height: '200px' }}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            style={{
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 600ms cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(11,31,58,0.75) 0%, rgba(11,31,58,0.15) 50%, transparent 100%)',
            }}
          />
          {/* Category badge */}
          <span className={`absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full text-xs font-medium ${colors.badge}`}>
            {project.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1 bg-white">
          <h3 className="text-sm font-semibold text-navy-900 mb-1.5 group-hover:text-copper-500 transition-colors" style={{ letterSpacing: '-0.01em' }}>
            {project.title}
          </h3>

          {/* Meta row */}
          <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mb-3">
            <span>{project.location}</span>
            <span>·</span>
            <span>{project.scope}</span>
            <span>·</span>
            <span>{project.duration}</span>
          </div>

          <p className="text-slate-500 text-xs leading-relaxed mb-3 flex-1">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2 py-0.5 rounded-md bg-slate-50 border border-slate-100 text-slate-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProjectsPage() {
  const [active, setActive] = useState<Category>('All')
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

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />

      {/* Hero */}
      <section
        className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-24 px-3 md:px-10"
        style={{ background: 'linear-gradient(160deg, #0B1F3A 0%, #1a3a5c 60%, #0B1F3A 100%)' }}
      >
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <SectionLabel text="Our Work" light />
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white tracking-tight mb-4">
              Recent projects
              <br />
              <span className="text-slate-400">across the GTA.</span>
            </h1>
            <p className="text-slate-300 text-xs lg:text-base max-w-lg leading-relaxed">
              Each project represents a family or business that needed fast, professional help.
              Here's a selection of recent work across our service areas.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="bg-white py-16 lg:py-20 px-3 md:px-10">
        <div className="container-custom ">

          {/* Filter pills */}
          <div
            ref={headerRef}
            className="flex flex-wrap gap-2 mb-8"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 600ms ease, transform 600ms ease',
            }}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="text-xs font-medium px-4 py-2 rounded-lg transition-all duration-200"
                style={
                  active === cat
                    ? { background: 'rgba(11,31,58,0.9)', color: 'white', border: '1px solid transparent' }
                    : { background: 'rgba(11,31,58,0.04)', color: 'rgba(11,31,58,0.5)', border: '1px solid rgba(11,31,58,0.1)' }
                }
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-400 text-sm">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative overflow-hidden py-20 lg:py-24"
        style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #1a3a5c 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(199,123,48,0.07) 0%, transparent 65%)',
        }} />
        <div className="container-custom px-10 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight mb-3">
              Have a project in mind?
            </h2>
            <p className="text-slate-400 text-sm mb-7 max-w-lg mx-auto leading-relaxed">
              Whether it's emergency restoration or a planned renovation, get in touch and we'll respond the same day.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:+14374762407"
                className="hidden inline-flex items-center gap-2 bg-copper-500 hover:bg-copper-400 text-white px-7 py-3 rounded-lg text-xs font-semibold transition-all duration-200"
              >
                <Phone className="w-3.5 h-3.5" />
                Call +1 (437) 476 2407
              </a>
              <a
                href="/contact"
                onClick={(e) => { e.preventDefault(); navigate('/contact'); window.scrollTo(0, 0) }}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-xs font-semibold text-white border border-white/30 hover:bg-white/10 transition-all duration-200"
              >
                Request a Free Quote
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <EmergencyFloat />
    </div>
  )
}