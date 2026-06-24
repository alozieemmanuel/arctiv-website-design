import { useEffect, useRef, useState } from 'react'
import { SectionLabel } from '@/components/SectionLabel'
import { navigate } from '@/lib/utils'

type Category = 'All' | 'Water Damage' | 'Fire & Smoke' | 'Mould' | 'Renovation'

interface Project {
  id: string
  title: string
  location: string
  category: Category
  type: 'Residential' | 'Commercial'
  image: string
}

const projects: Project[] = [
  {
    id: 'p1',
    title: 'Flooded Basement Recovery',
    location: 'Mississauga, ON',
    category: 'Water Damage',
    type: 'Residential',
    image: '/project-1.jpg',
  },
  {
    id: 'p2',
    title: 'Post-Fire Suite Restoration',
    location: 'Toronto, ON',
    category: 'Fire & Smoke',
    type: 'Residential',
    image: '/project-2.jpg',
  },
  {
    id: 'p3',
    title: 'Commercial Lobby Rebuild',
    location: 'Brampton, ON',
    category: 'Renovation',
    type: 'Commercial',
    image: '/project-3.jpg',
  },
  {
    id: 'p4',
    title: 'Mould Remediation — Crawl Space',
    location: 'Hamilton, ON',
    category: 'Mould',
    type: 'Residential',
    image: '/project-4.jpg',
  },
  {
    id: 'p5',
    title: 'High-Rise Water Intrusion',
    location: 'Etobicoke, ON',
    category: 'Water Damage',
    type: 'Commercial',
    image: '/project-5.jpg',
  },
  {
    id: 'p6',
    title: 'Kitchen Fire — Full Rebuild',
    location: 'Oakville, ON',
    category: 'Fire & Smoke',
    type: 'Residential',
    image: '/project-6.jpg',
  },
]

const categories: Category[] = ['All', 'Water Damage', 'Fire & Smoke', 'Mould', 'Renovation']

const categoryColors: Record<string, { dot: string; text: string }> = {
  'Water Damage': { dot: '#60a5fa', text: '#3b82f6' },
  'Fire & Smoke': { dot: '#f97316', text: '#f97316' },
  'Mould':        { dot: '#4ade80', text: '#22c55e' },
  'Renovation':   { dot: '#b87333', text: '#b87333' },
}

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
    <path d="M3 13L13 3M6 3h7v7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

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

  const colors = categoryColors[project.category] ?? { dot: '#b87333', text: '#b87333' }

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 550ms ease ${index * 90}ms, transform 550ms ease ${index * 90}ms`,
      }}
    >
      <div
        className="group relative rounded-2xl overflow-hidden cursor-pointer border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image */}
        <div className="relative overflow-hidden" style={{ height: '240px' }}>
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
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(11,31,58,0.85) 0%, rgba(11,31,58,0.2) 50%, transparent 100%)',
            }}
          />

          {/* Type badge — top right */}
          <div className="absolute top-3 right-3">
            <span
              className="text-xs font-medium px-2.5 py-1 rounded-md"
              style={{
                background: 'rgba(255,255,255,0.85)',
                backdropFilter: 'blur(8px)',
                color: 'rgba(11,31,58,0.8)',
              }}
            >
              {project.type}
            </span>
          </div>

          {/* Arrow icon — top left, appears on hover */}
          <div
            className="absolute top-3 left-3"
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered ? 'scale(1)' : 'scale(0.8)',
              transition: 'opacity 200ms ease, transform 200ms ease',
            }}
          >
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(184,115,51,0.9)', backdropFilter: 'blur(4px)' }}
            >
              <ArrowIcon />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 bg-white">
          {/* Category dot + label */}
          <div className="flex items-center gap-2 mb-2">
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: colors.dot }}
            />
            <span className="text-xs font-medium" style={{ color: colors.text }}>
              {project.category}
            </span>
          </div>

          <h3 className="text-navy-900 font-semibold text-sm mb-1" style={{ letterSpacing: '-0.01em' }}>
            {project.title}
          </h3>
          <p className="text-slate-400 text-xs">{project.location}</p>
        </div>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
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

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="bg-white py-24 lg:py-32 px-3 md:px-10">
      <div className="container-custom">

        {/* Header row */}
        <div
          ref={headerRef}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 700ms ease, transform 700ms ease',
          }}
        >
          <div>
            <SectionLabel text="Our Work" />
            <h2 className="text-3xl lg:text-4xl font-semibold text-navy-900 tracking-tight">
              Recent projects across the GTA.
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="hidden flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="text-xs font-medium px-4 py-2 rounded-lg transition-all duration-200"
                style={
                  activeCategory === cat
                    ? {
                        background: 'rgba(11,31,58,0.9)',
                        color: 'white',
                        border: '1px solid transparent',
                      }
                    : {
                        background: 'rgba(11,31,58,0.04)',
                        color: 'rgba(11,31,58,0.5)',
                        border: '1px solid rgba(11,31,58,0.1)',
                      }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-5 rounded-2xl px-7 py-7 border border-slate-200"
          style={{
            opacity: headerVisible ? 1 : 0,
            transition: 'opacity 700ms ease 500ms',
          }}
        >
          <div>
            <p className="text-navy-900 font-semibold text-base mb-1" style={{ letterSpacing: '-0.02em' }}>
              Have a project in mind?
            </p>
            <p className="text-slate-500 text-sm">
              We work with homeowners, property managers, and insurers across Canada.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault()
                navigate('/contact')
                window.scrollTo(0, 0)
              }}
              className="bg-copper-500 hover:bg-copper-400 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Request an Assessment
            </a>
            <a
              href="/projects"
              onClick={(e) => {
                e.preventDefault()
                navigate('/projects')
                window.scrollTo(0, 0)
              }}
              className="hidden lg:inline-flex text-sm font-medium px-6 py-2.5 rounded-lg transition-all duration-200"
              style={{
                background: 'rgba(11,31,58,0.04)',
                color: 'rgba(11,31,58,0.6)',
                border: '1px solid rgba(11,31,58,0.1)',
              }}
            >
              View All Projects
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}