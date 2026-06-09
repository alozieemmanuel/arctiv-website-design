import { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { navigate } from '../App'

/* ── Reusable fade-in hook ─────────────────────────────────────────────────── */
function useFadeIn(threshold = 0.15) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return { ref, visible }
}

/* ── Types ──────────────────────────────────────────────────────────────────── */
export interface ServicePageData {
  slug: string
  badge: string
  headline: string
  subline: string
  heroDesc: string
  heroIcon: React.ReactNode
  accentColor?: string
  whatItIs: string
  signs: { icon: React.ReactNode; label: string; desc: string }[]
  process: { step: string; title: string; desc: string }[]
  benefits: { title: string; desc: string }[]
  faqs: { q: string; a: string }[]
  relatedServices: { label: string; path: string }[]
}

/* ── FAQ accordion item ────────────────────────────────────────────────────── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="border-b"
      style={{ borderColor: 'rgba(255,255,255,0.07)' }}
    >
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        onClick={() => setOpen(p => !p)}
      >
        <span className="text-sm font-medium text-white/90">{q}</span>
        <span
          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200"
          style={{
            background: open ? '#C77B30' : 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
            <path d="M6 2v8M2 6h8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      {open && (
        <p className="text-gray-400 text-sm leading-relaxed pb-5 pr-10">{a}</p>
      )}
    </div>
  )
}

/* ── Main layout ────────────────────────────────────────────────────────────── */
export default function ServicePageLayout({ data }: { data: ServicePageData }) {
  const hero = useFadeIn(0.1)
  const what = useFadeIn(0.1)
  // const signs = useFadeIn(0.1)
  const process = useFadeIn(0.1)
  const benefits = useFadeIn(0.1)
  const faq = useFadeIn(0.1)

  const copper = '#C77B30'

  return (
    <main style={{ background: '#060d1a', minHeight: '100vh' }}>
      {/* Navbar */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 z-10">
          <Navbar />
        </div>
        <div className="h-24" style={{ background: '#060d1a' }} />
      </div>

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-20 md:py-28 px-6 md:px-12 lg:px-16"
        style={{ background: 'linear-gradient(135deg, #060d1a 0%, #0B1F3A 60%, #060d1a 100%)' }}
      >
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.06] pointer-events-none" style={{
          background: 'radial-gradient(ellipse, #C77B30 0%, transparent 70%)',
        }} />

        <div
          ref={hero.ref}
          className="max-w-7xl mx-auto"
          style={{
            opacity: hero.visible ? 1 : 0,
            transform: hero.visible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 700ms ease, transform 700ms ease',
          }}
        >

          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: copper }}>
                {data.badge}
              </p>
              <h1
                className="text-white text-4xl md:text-5xl font-semibold mb-5 leading-[1.1]"
                style={{ letterSpacing: '-0.03em' }}
              >
                {data.headline}
                <br />
                <span className="text-gray-500">{data.subline}</span>
              </h1>
              <p className="text-gray-400 text-sm leading-relaxed max-w-lg mb-8">{data.heroDesc}</p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:4168888888"
                  className="inline-flex items-center gap-2 text-white text-sm font-bold px-6 py-3 rounded-xl transition-all duration-200"
                  style={{ background: '#C77B30' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = '#d4914d')}
                  onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = '#C77B30')}
                >
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                    <path d="M1.5 2.5A1.5 1.5 0 013 1h1a1.5 1.5 0 011.5 1.2l.5 2.5a1.5 1.5 0 01-1 1.7l-.7.2a9 9 0 004.8 4.8l.2-.7a1.5 1.5 0 011.7-1l2.5.5A1.5 1.5 0 0115 12v1a1.5 1.5 0 01-1.5 1.5H12C5.6 14.5 1.5 9.4 1.5 4V2.5z" fill="white" />
                  </svg>
                  Call (416) 888-8888
                </a>
                <button
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center gap-2 text-white text-sm font-medium px-6 py-3 rounded-xl transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.1)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.06)')}
                >
                  Get a Free Quote
                </button>
              </div>
            </div>

            {/* Hero icon panel */}
            <div className="hidden lg:flex items-center justify-center">
              <div
                className="rounded-3xl p-16"
                style={{
                  background: 'rgba(199,123,48,0.04)',
                  border: '1px solid rgba(199,123,48,0.15)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div style={{ transform: 'scale(3.5)', transformOrigin: 'center' }}>
                  {data.heroIcon}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What It Is ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 lg:px-16" style={{ background: '#0B1F3A' }}>
        <div ref={what.ref} className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center"
          style={{ opacity: what.visible ? 1 : 0, transform: what.visible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 700ms ease, transform 700ms ease' }}>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-4 text-blue-400">What This Means For You</p>
            <h2 className="text-white text-3xl md:text-4xl font-semibold mb-6" style={{ letterSpacing: '-0.03em' }}>
              Understanding <span style={{ color: copper }}>{data.badge}</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">{data.whatItIs}</p>

            {/* Stats strip */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { num: '24/7', label: 'Emergency Response' },
                { num: 'IICRC', label: 'Certified Technicians' },
                { num: '100%', label: 'Insured & Licensed' },
              ].map(s => (
                <div key={s.label} className="text-center p-3 rounded-xl" style={{ background: 'rgba(199,123,48,0.06)', border: '1px solid rgba(199,123,48,0.12)' }}>
                  <p className="text-white font-bold text-lg" style={{ letterSpacing: '-0.02em' }}>{s.num}</p>
                  <p className="text-gray-500 text-[10px] leading-tight mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Signs list */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-5 text-gray-500">Warning Signs to Watch For</p>
            <div className="space-y-3">
              {data.signs.map((s, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(199,123,48,0.1)' }}>
                    {s.icon}
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{s.label}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Process ─────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 lg:px-16" style={{ background: '#060d1a' }}>
        <div ref={process.ref} className="max-w-7xl mx-auto"
          style={{ opacity: process.visible ? 1 : 0, transform: process.visible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 700ms ease, transform 700ms ease' }}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: copper }}>How We Work</p>
          <h2 className="text-white text-3xl md:text-4xl font-semibold mb-12" style={{ letterSpacing: '-0.03em' }}>
            Our Restoration <span className="text-gray-500">Process</span>
          </h2>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(199,123,48,0.3), transparent)' }} />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.process.map((p, i) => (
                <div
                  key={i}
                  className="relative p-6 rounded-2xl"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    opacity: process.visible ? 1 : 0,
                    transform: process.visible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `opacity 600ms ease ${i * 100}ms, transform 600ms ease ${i * 100}ms`,
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-4"
                    style={{ background: 'rgba(199,123,48,0.15)', color: copper, border: '1px solid rgba(199,123,48,0.3)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p className="text-white font-semibold text-sm mb-2">{p.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 lg:px-16" style={{ background: '#0B1F3A' }}>
        <div ref={benefits.ref} className="max-w-7xl mx-auto"
          style={{ opacity: benefits.visible ? 1 : 0, transform: benefits.visible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 700ms ease, transform 700ms ease' }}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3 text-blue-400">Why Choose Arctiv</p>
          <h2 className="text-white text-3xl md:text-4xl font-semibold mb-12" style={{ letterSpacing: '-0.03em' }}>
            What Sets Us <span className="text-gray-500">Apart</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.benefits.map((b, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl group"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  opacity: benefits.visible ? 1 : 0,
                  transform: benefits.visible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 600ms ease ${i * 80}ms, transform 600ms ease ${i * 80}ms`,
                }}
              >
                <div className="w-2 h-2 rounded-full mb-4" style={{ background: copper }} />
                <p className="text-white font-semibold text-sm mb-2">{b.title}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 lg:px-16" style={{ background: '#060d1a' }}>
        <div ref={faq.ref} className="max-w-3xl mx-auto"
          style={{ opacity: faq.visible ? 1 : 0, transform: faq.visible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 700ms ease, transform 700ms ease' }}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: copper }}>FAQ</p>
          <h2 className="text-white text-3xl md:text-4xl font-semibold mb-12" style={{ letterSpacing: '-0.03em' }}>
            Common <span className="text-gray-500">Questions</span>
          </h2>
          <div>
            {data.faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* ── Related Services ────────────────────────────────────────────────── */}
      <section className="py-16 px-6 md:px-12 lg:px-16" style={{ background: '#0B1F3A' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-6 text-gray-500">Related Services</p>
          <div className="flex flex-wrap gap-3">
            {data.relatedServices.map(s => (
              <button
                key={s.label}
                onClick={() => navigate(s.path)}
                className="text-sm px-5 py-2.5 rounded-xl text-gray-300 hover:text-white transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(199,123,48,0.4)')}
                onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.08)')}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ──────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-20 px-6 md:px-12 lg:px-16"
        style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0f1f3d 50%, #0a1628 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(234,88,12,0.07) 0%, transparent 65%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" />
            </span>
            <p className="text-orange-400 text-xs font-semibold uppercase tracking-[0.2em]">24/7 Emergency Response</p>
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-semibold mb-4" style={{ letterSpacing: '-0.03em' }}>
            Dealing with {data.badge}?
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-lg mx-auto">
            Don't wait — the longer you leave it, the worse it gets. Call Arctiv now or request a free quote and we'll respond fast.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="tel:4168888888"
              className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all duration-200"
              style={{ background: '#C77B30' }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = '#d4914d')}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = '#C77B30')}
            >
              Call (416) 888-8888
            </a>
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-2 text-white font-medium px-8 py-4 rounded-xl text-sm transition-all duration-200"
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