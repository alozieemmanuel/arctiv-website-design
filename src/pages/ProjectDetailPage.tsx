import { useState, useEffect, useRef } from 'react'
import { Phone, ArrowLeft, MapPin, Clock, Layers, ChevronLeft, ChevronRight } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { EmergencyFloat } from '@/components/EmergencyFloat'
import { ScrollReveal } from '@/components/ScrollReveal'
import { SectionLabel } from '@/components/SectionLabel'
import { navigate } from '@/lib/utils'
import { projects, catColors } from '@/data/projectsData'

// ─── Lightbox ────────────────────────────────────────────────────────────────
function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: string[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onPrev, onNext])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(11,31,58,0.95)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <button
        className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors"
        onClick={onClose}
        aria-label="Close"
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        aria-label="Previous"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div
        className="relative max-w-5xl w-full mx-16"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[index]}
          alt={`Gallery image ${index + 1}`}
          className="w-full max-h-[80vh] object-contain rounded-xl"
        />
        <p className="text-center text-white/40 text-xs mt-3">
          {index + 1} / {images.length}
        </p>
      </div>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Next"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  )
}

// ─── Mobile slider ────────────────────────────────────────────────────────────
function MobileSlider({
  images,
  onOpen,
}: {
  images: string[]
  onOpen: (i: number) => void
}) {
  const [current, setCurrent] = useState(0)
  const startXRef = useRef<number | null>(null)

  const go = (i: number) => setCurrent(Math.max(0, Math.min(i, images.length - 1)))

  const onTouchStart = (e: React.TouchEvent) => { startXRef.current = e.touches[0].clientX }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startXRef.current === null) return
    const dx = e.changedTouches[0].clientX - startXRef.current
    if (Math.abs(dx) > 40) go(current + (dx < 0 ? 1 : -1))
    startXRef.current = null
  }

  return (
    <div className="relative overflow-hidden rounded-2xl mb-6" style={{ height: '280px' }}>
      {/* Track */}
      <div
        className="flex h-full"
        style={{
          transform: `translateX(-${current * (100 / images.length)}%)`,
          transition: 'transform 380ms cubic-bezier(0.4, 0, 0.2, 1)',
          width: `${images.length * 100}%`,
        }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 cursor-zoom-in"
            style={{ width: `${100 / images.length}%`, height: '100%' }}
            onClick={() => onOpen(i)}
          >
            <img src={img} alt={`Project image ${i + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Prev arrow */}
      {current > 0 && (
        <button
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(11,31,58,0.6)', backdropFilter: 'blur(6px)' }}
          onClick={() => go(current - 1)}
          aria-label="Previous"
        >
          <ChevronLeft className="w-4 h-4 text-white" />
        </button>
      )}

      {/* Next arrow */}
      {current < images.length - 1 && (
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(11,31,58,0.6)', backdropFilter: 'blur(6px)' }}
          onClick={() => go(current + 1)}
          aria-label="Next"
        >
          <ChevronRight className="w-4 h-4 text-white" />
        </button>
      )}

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Go to image ${i + 1}`}
            style={{
              width: i === current ? '18px' : '6px',
              height: '6px',
              borderRadius: '999px',
              background: i === current ? '#C77B30' : 'rgba(255,255,255,0.5)',
              transition: 'width 250ms ease, background 250ms ease',
              padding: 0,
              border: 'none',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>

      {/* Counter pill */}
      <div
        className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-medium text-white"
        style={{ background: 'rgba(11,31,58,0.6)', backdropFilter: 'blur(6px)' }}
      >
        {current + 1} / {images.length}
      </div>
    </div>
  )
}

// ─── Gallery grid ─────────────────────────────────────────────────────────────
function GalleryGrid({ images }: { images: string[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const open = (i: number) => setLightboxIndex(i)
  const close = () => setLightboxIndex(null)
  const prev = () => setLightboxIndex((i) => (i === null ? 0 : (i - 1 + images.length) % images.length))
  const next = () => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % images.length))

  const [main, ...rest] = images

  return (
    <>
      {/* Mobile: swipe slider */}
      {isMobile ? (
        <MobileSlider images={images} onOpen={open} />
      ) : (
        /* Desktop: main + 2×2 grid */
        <div className="grid grid-cols-2 gap-3 mb-3">
          {/* Main image */}
          <div
            className="relative overflow-hidden rounded-2xl cursor-zoom-in group"
            style={{ height: '400px' }}
            onClick={() => open(0)}
          >
            <img
              src={main}
              alt="Project main"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              style={{ background: 'rgba(11,31,58,0.35)' }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(199,123,48,0.9)' }}
              >
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                  <path d="M8 1v14M1 8h14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* Secondary images — 2×2 */}
          <div className="grid grid-cols-2 gap-3">
            {rest.slice(0, 4).map((img, i) => {
              const isLast = i === 3 && images.length > 4
              return (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-xl cursor-zoom-in group"
                  style={{ height: '193px' }}
                  onClick={() => open(i + 1)}
                >
                  <img
                    src={img}
                    alt={`Project image ${i + 2}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {isLast ? (
                    <div
                      className="absolute inset-0 flex items-center justify-center rounded-xl"
                      style={{ background: 'rgba(11,31,58,0.6)' }}
                    >
                      <span className="text-white font-semibold text-sm">+{images.length - 4} more</span>
                    </div>
                  ) : (
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: 'rgba(11,31,58,0.3)' }}
                    />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  )
}

// ─── Stat pill ────────────────────────────────────────────────────────────────
function StatPill({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div
      className="flex items-center gap-4 px-5 py-5 rounded-xl border border-slate-200"
      style={{ background: 'rgba(11,31,58,0.02)' }}
    >
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: 'rgba(11,31,58,0.06)' }}
      >
        <span className="text-slate-500">{icon}</span>
      </div>
      <div>
        <p className="text-[11px] text-slate-400 uppercase tracking-wider leading-none mb-1">{label}</p>
        <p className="text-sm font-semibold text-navy-900 leading-snug" style={{ letterSpacing: '-0.01em' }}>{value}</p>
      </div>
    </div>
  )
}

// ─── Related card ─────────────────────────────────────────────────────────────
function RelatedCard({ project }: { project: (typeof projects)[0] }) {
  const [hovered, setHovered] = useState(false)
  const colors = catColors[project.category] ?? catColors['Reconstruction']

  return (
    <div
      className="group rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => {
        navigate(`/projects/${project.slug}`)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}
    >
      <div className="relative overflow-hidden" style={{ height: '180px' }}>
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover"
          style={{
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 600ms cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.75) 0%, transparent 60%)' }}
        />
        <span
          className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full text-xs font-medium"
          style={{ background: colors.light, color: colors.text, border: `1px solid ${colors.dot}22` }}
        >
          {project.category}
        </span>
      </div>
      <div className="p-4 bg-white">
        <h4
          className="text-sm font-semibold text-navy-900 mb-1 group-hover:text-copper-500 transition-colors"
          style={{ letterSpacing: '-0.01em' }}
        >
          {project.title}
        </h4>
        <p className="text-slate-400 text-xs">{project.location}</p>
      </div>
    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────
export function ProjectDetailPage({ slug }: { slug: string }) {
  const project = projects.find((p) => p.slug === slug)
  const headerRef = useRef<HTMLDivElement>(null)
  const [headerVisible, setHeaderVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true) },
      { threshold: 0.1 }
    )
    if (headerRef.current) observer.observe(headerRef.current)
    return () => observer.disconnect()
  }, [])

  if (!project) {
    return (
      <div className="min-h-screen bg-navy-900 flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-white/60 text-sm mb-4">Project not found.</p>
            <button
              onClick={() => { navigate('/projects'); window.scrollTo(0, 0) }}
              className="text-copper-500 text-sm hover:underline"
            >
              Back to all projects
            </button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const colors = catColors[project.category] ?? catColors['Reconstruction']
  const related = projects.filter((p) => p.id !== project.id && p.category === project.category).slice(0, 3)
  const fallbackRelated = projects.filter((p) => p.id !== project.id).slice(0, 3)
  const relatedProjects = related.length >= 2 ? related : fallbackRelated

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero banner ── */}
      <section
        className="relative overflow-hidden pl-4 lg:pl-8"
        style={{
          background: 'linear-gradient(160deg, #0B1F3A 0%, #1a3a5c 60%, #0B1F3A 100%)',
          paddingTop: '7rem',
          paddingBottom: '3.5rem',
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="container-custom px-4 md:px-10 relative z-10">
          <button
            onClick={() => { navigate('/projects'); window.scrollTo(0, 0) }}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-xs font-medium mb-8 transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            All Projects
          </button>

          <div
            ref={headerRef}
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 700ms ease, transform 700ms ease',
            }}
          >
            <span
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full mb-4"
              style={{
                background: colors.light,
                color: colors.text,
                border: `1px solid ${colors.dot}33`,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: colors.dot }} />
              {project.category}
            </span>

            <h1
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-3"
              style={{ letterSpacing: '-0.025em' }}
            >
              {project.title}
            </h1>

            <p className="text-slate-400 text-sm max-w-xl leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="bg-white py-10 lg:py-20 px-4 md:px-10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">

            {/* Left — gallery + narrative */}
            <div>
              {/* Gallery */}
              <GalleryGrid images={project.gallery} />

              {/* Stat pills — stacked on mobile, 3-col on md+ */}
              <div className="flex flex-col sm:grid sm:grid-cols-3 gap-3 mt-2 mb-10">
                <StatPill
                  icon={<MapPin className="w-4 h-4" />}
                  label="Location"
                  value={project.location}
                />
                <StatPill
                  icon={<Layers className="w-4 h-4" />}
                  label="Scope"
                  value={project.scope}
                />
                <StatPill
                  icon={<Clock className="w-4 h-4" />}
                  label="Duration"
                  value={project.duration}
                />
              </div>

              {/* Narrative */}
              <ScrollReveal>
                <h2
                  className="text-lg font-semibold text-navy-900 mb-3 pl-2"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  What happened
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 pl-2">
                  {project.detail}
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <div className="grid md:grid-cols-2 gap-5">
                  {/* Challenge */}
                  <div
                    className="rounded-xl p-5 border border-slate-100"
                    style={{ background: 'rgba(11,31,58,0.02)' }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(199,123,48,0.12)' }}
                      >
                        <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                          <path d="M6 1v5M6 9.5v1" stroke="#C77B30" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </div>
                      <span className="text-xs font-semibold text-navy-900 uppercase tracking-wider">
                        The Challenge
                      </span>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed">{project.challenge}</p>
                  </div>

                  {/* Outcome */}
                  <div
                    className="rounded-xl p-5 border border-slate-100"
                    style={{ background: 'rgba(11,31,58,0.02)' }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(34,197,94,0.12)' }}
                      >
                        <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                          <path d="M2 6l3 3 5-5" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-xs font-semibold text-navy-900 uppercase tracking-wider">
                        The Outcome
                      </span>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed">{project.outcome}</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right — sticky sidebar */}
            <div className="lg:sticky lg:top-28">
              <ScrollReveal>
                {/* Tags */}
                <div
                  className="rounded-2xl border border-slate-200 p-6 mb-5"
                  style={{ background: 'rgba(11,31,58,0.02)' }}
                >
                  <p className="text-xs font-semibold text-navy-900 uppercase tracking-wider mb-4">
                    Services Involved
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600"
                        style={{ background: 'white' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA card */}
                <div
                  className="rounded-2xl p-6 text-center"
                  style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #1a3a5c 100%)' }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: 'rgba(199,123,48,0.2)' }}
                  >
                    <Phone className="w-4 h-4 text-copper-300" />
                  </div>
                  <h3
                    className="text-white font-semibold text-base mb-2"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    Dealing with something similar?
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-5">
                    We respond within the hour for emergencies, same day for assessments.
                  </p>
                  <a
                    href="/contact"
                    onClick={(e) => {
                      e.preventDefault()
                      navigate('/contact')
                      window.scrollTo(0, 0)
                    }}
                    className="block w-full py-2.5 rounded-lg text-sm font-semibold text-white transition-colors duration-200 mb-2"
                    style={{ background: '#C77B30' }}
                    onMouseOver={(e) => (e.currentTarget.style.background = '#d4914d')}
                    onMouseOut={(e) => (e.currentTarget.style.background = '#C77B30')}
                  >
                    Request an Assessment
                  </a>
                  <a
                    href="tel:+14374762407"
                    className="block w-full py-2.5 rounded-lg text-xs font-medium transition-colors duration-200"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      color: 'rgba(255,255,255,0.7)',
                      border: '1px solid rgba(255,255,255,0.12)',
                    }}
                  >
                    +1 (437) 476 2407
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related projects ── */}
      {relatedProjects.length > 0 && (
        <section className="bg-slate-50 py-14 lg:py-20 px-4 md:px-10 border-t border-slate-100">
          <div className="container-custom">
            <ScrollReveal>
              <div className="flex items-end justify-between mb-8">
                <div>
                  <SectionLabel text="More Work" />
                  <h2
                    className="text-xl lg:text-2xl font-semibold text-navy-900 tracking-tight"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    Related projects
                  </h2>
                </div>
                <button
                  onClick={() => { navigate('/projects'); window.scrollTo(0, 0) }}
                  className="hidden md:inline-flex text-xs font-medium text-slate-500 hover:text-navy-900 transition-colors items-center gap-1.5 group"
                >
                  View all
                  <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3 group-hover:translate-x-0.5 transition-transform">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedProjects.map((p) => (
                <RelatedCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Emergency CTA ── */}
      <section
        className="relative overflow-hidden py-16 lg:py-20 px-4 md:px-10"
        style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #1a3a5c 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(199,123,48,0.07) 0%, transparent 65%)' }}
        />
        <div className="container-custom px-10 relative z-10 text-center">
          <ScrollReveal>
            <h2
              className="text-2xl lg:text-3xl font-bold text-white tracking-tight mb-3"
              style={{ letterSpacing: '-0.025em' }}
            >
              Have a project in mind?
            </h2>
            <p className="text-slate-400 text-sm mb-7 max-w-lg mx-auto leading-relaxed">
              Whether it's emergency restoration or a planned renovation, get in touch and we'll respond the same day.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault()
                  navigate('/contact')
                  window.scrollTo(0, 0)
                }}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-xs font-semibold text-white transition-all duration-200 border border-white/30 hover:bg-white/10"
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