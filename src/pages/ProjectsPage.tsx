import { useState, useEffect, useRef } from 'react'
import { Phone } from 'lucide-react'
import { ScrollReveal } from '@/components/ScrollReveal'
import { SectionLabel } from '@/components/SectionLabel'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { EmergencyFloat } from '@/components/EmergencyFloat'
import { navigate } from '@/lib/utils'
import { projects, catColors, type ProjectData, type ProjectCategory } from '@/data/projectsData'

type Category = 'All' | ProjectCategory

const CATEGORIES: Category[] = ['All', 'Water Damage', 'Fire & Smoke', 'Mould', 'Reconstruction', 'General Contracting']

function ProjectCard({ project, index }: { project: ProjectData; index: number }) {
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

  function handleClick() {
    navigate(`/projects/${project.slug}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
        className="group relative rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300 h-full flex flex-col cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleClick() }}
        aria-label={`View project: ${project.title}`}
      >
        {/* Image */}
        <div className="relative overflow-hidden" style={{ height: '200px' }}>
          <img
            src={project.coverImage}
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
          <span
            className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full text-xs font-medium"
            style={{
              background: colors.light,
              color: colors.text,
              border: `1px solid ${colors.dot}33`,
            }}
          >
            {project.category}
          </span>

          {/* View arrow — appears on hover */}
          <span
            className="absolute bottom-3 right-3 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              background: hovered ? 'rgba(199,123,48,0.9)' : 'rgba(255,255,255,0.15)',
              opacity: hovered ? 1 : 0,
              transform: hovered ? 'scale(1) translateX(0)' : 'scale(0.8) translateX(4px)',
            }}
          >
            <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1 bg-white">
          <h3
            className="text-sm font-semibold text-navy-900 mb-1.5 group-hover:text-copper-500 transition-colors"
            style={{ letterSpacing: '-0.01em' }}
          >
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
        <div className="container-custom">

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
                Request an Assessment
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