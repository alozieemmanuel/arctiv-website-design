import { useEffect, useRef, useState } from 'react'

type Category = 'All' | 'Water Damage' | 'Fire & Smoke' | 'Mould' | 'Renovation'

interface Project {
  id: string
  title: string
  location: string
  category: Omit<Category, 'All'>
  type: 'Residential' | 'Commercial'
  image: string
  tag: string
}

const projects: Project[] = [
  {
    id: 'p1',
    title: 'Flooded Basement Recovery',
    location: 'Mississauga, ON',
    category: 'Water Damage',
    type: 'Residential',
    image: '/flood restoration.png',
    tag: 'Water Damage',
  },
  {
    id: 'p2',
    title: 'Post-Fire Suite Restoration',
    location: 'Toronto, ON',
    category: 'Fire & Smoke',
    type: 'Residential',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=75',
    tag: 'Fire & Smoke',
  },
  {
    id: 'p3',
    title: 'Commercial Lobby Rebuild',
    location: 'Brampton, ON',
    category: 'Renovation',
    type: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=75',
    tag: 'Renovation',
  },
  {
    id: 'p4',
    title: 'Mould Remediation — Crawl Space',
    location: 'Hamilton, ON',
    category: 'Mould',
    type: 'Residential',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=75',
    tag: 'Mould',
  },
  {
    id: 'p5',
    title: 'High-Rise Water Intrusion',
    location: 'Etobicoke, ON',
    category: 'Water Damage',
    type: 'Commercial',
    image: '/Water damage.png',
    tag: 'Water Damage',
  },
  {
    id: 'p6',
    title: 'Kitchen Fire — Full Rebuild',
    location: 'Oakville, ON',
    category: 'Fire & Smoke',
    type: 'Residential',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=75',
    tag: 'Fire & Smoke',
  },
]

const categoryColors: Record<string, { dot: string; text: string }> = {
  'Water Damage': { dot: '#60a5fa', text: '#93c5fd' },
  'Fire & Smoke': { dot: '#f97316', text: '#fdba74' },
  'Mould': { dot: '#4ade80', text: '#86efac' },
  'Renovation': { dot: '#fbbf24', text: '#fcd34d' },
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

  const colors = categoryColors[project.category as string] ?? { dot: '#60a5fa', text: '#93c5fd' }

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
        className="group relative rounded-2xl overflow-hidden cursor-pointer"
        style={{ border: '1px solid rgba(255,255,255,0.08)' }}
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
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(10,22,32,0.92) 0%, rgba(10,22,32,0.3) 50%, transparent 100%)',
            }}
          />

          {/* Type badge — top right */}
          <div className="absolute top-3 right-3">
            <span
              className="text-xs font-medium px-2.5 py-1 rounded-md"
              style={{
                background: 'rgba(10,22,32,0.7)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'rgba(255,255,255,0.7)',
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
              style={{ background: 'rgba(37,99,235,0.8)', backdropFilter: 'blur(4px)' }}
            >
              <ArrowIcon />
            </div>
          </div>
        </div>

        {/* Content */}
        <div
          className="p-4"
          style={{ background: 'rgba(255,255,255,0.03)' }}
        >
          {/* Category dot + label */}
          <div className="flex items-center gap-2 mb-2">
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: colors.dot }}
            />
            <span className="text-xs font-medium" style={{ color: colors.text }}>
              {project.category as string}
            </span>
          </div>

          <h3
            className="text-white font-semibold text-sm mb-1"
            style={{ letterSpacing: '-0.01em' }}
          >
            {project.title}
          </h3>

          <p className="text-gray-500 text-xs">{project.location}</p>
        </div>
      </div>
    </div>
  )
}

const categories: Category[] = ['All', 'Water Damage', 'Fire & Smoke', 'Mould', 'Renovation']

export default function ProjectsSection() {
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

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section
      id="projects"
      className="relative py-24 px-6 md:px-12 lg:px-16 overflow-hidden"
      style={{ background: '#060d14' }}
    >
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px',
        }}
      />

      {/* Top left glow */}
      <div
        className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header row */}
        <div
          ref={headerRef}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 700ms ease, transform 700ms ease',
          }}
        >
          <div>
            <p className="text-blue-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Our Work
            </p>
            <h2
              className="text-white text-3xl md:text-4xl font-normal"
              style={{ letterSpacing: '-0.03em' }}
            >
              Projects that speak
              <br />
              <span className="text-gray-500">for themselves.</span>
            </h2>
          </div>

          {/* Filter tabs */}
          <div
            className="flex flex-wrap gap-2"
            style={{
              opacity: headerVisible ? 1 : 0,
              transition: 'opacity 700ms ease 200ms',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="text-xs font-medium px-4 py-2 rounded-lg transition-all duration-200"
                style={
                  active === cat
                    ? {
                        background: 'rgba(37,99,235,0.2)',
                        color: '#93c5fd',
                        border: '1px solid rgba(37,99,235,0.4)',
                      }
                    : {
                        background: 'rgba(255,255,255,0.04)',
                        color: 'rgba(255,255,255,0.45)',
                        border: '1px solid rgba(255,255,255,0.08)',
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
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-5 rounded-2xl px-7 py-7"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
            opacity: headerVisible ? 1 : 0,
            transition: 'opacity 700ms ease 500ms',
          }}
        >
          <div>
            <p className="text-white font-semibold text-base mb-1" style={{ letterSpacing: '-0.02em' }}>
              Have a project in mind?
            </p>
            <p className="text-gray-500 text-sm">
              We work with homeowners, property managers, and insurers across Canada.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200">
              Get a Free Quote
            </button>
            <button
              className="hidden text-sm font-medium px-6 py-2.5 rounded-lg transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.05)',
                color: 'rgba(255,255,255,0.6)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              View All Projects
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}