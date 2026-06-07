import { useEffect, useRef, useState } from 'react'

/* ── Scroll-reveal hook ──────────────────────────────────────────────────── */
function useReveal(threshold = 0.12) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold }
    )
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return { ref, visible }
}

/* ── Copper check icon ───────────────────────────────────────────────────── */
const CopperCheck = () => (
  <span
    className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
    style={{ background: 'rgba(199,123,48,0.12)', border: '1px solid rgba(199,123,48,0.25)' }}
  >
    <svg viewBox="0 0 10 10" fill="none" className="w-2.5 h-2.5">
      <path d="M2 5l2 2 4-4" stroke="#C77B30" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
)

/* ── Arrow icon ──────────────────────────────────────────────────────────── */
const ArrowRight = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/* ── Core pillars ────────────────────────────────────────────────────────── */
const pillars = [
  {
    title: 'Rapid Response',
    body: 'When disaster strikes, time is everything. We mobilize immediately — because the difference between manageable damage and total loss is often measured in hours.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="12" cy="12" r="9" stroke="#C77B30" strokeWidth="1.5" fill="rgba(199,123,48,0.1)" />
        <path d="M12 7v5l3 2" stroke="#C77B30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Certified Expertise',
    body: 'Our technicians carry IICRC certifications and follow Health Canada guidelines. Every job is handled by professionals who know the standards inside out.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6L12 2z"
          stroke="#C77B30" strokeWidth="1.5" fill="rgba(199,123,48,0.1)" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="#C77B30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Insurance Navigation',
    body: "We work directly with your insurer, document everything meticulously, and handle the process so you don't have to become an expert in claims overnight.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="#C77B30" strokeWidth="1.5" fill="rgba(199,123,48,0.1)" />
        <path d="M8 10h8M8 14h5" stroke="#C77B30" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 16l2 2 3-3" stroke="#C77B30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Complete Ownership',
    body: 'From first call to final walkthrough, one team handles everything. No subcontracting surprises, no handoffs, no gaps in communication or quality.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 2l2.9 6.26L22 9.27l-5.46 5.32 1.29 7.41L12 18.1l-5.83 3.9 1.29-7.41L2 9.27l7.1-1.01L12 2z"
          stroke="#C77B30" strokeWidth="1.5" fill="rgba(199,123,48,0.1)" strokeLinejoin="round" />
      </svg>
    ),
  },
]

/* ── Services handled ────────────────────────────────────────────────────── */
const capabilities = [
  'Water damage & structural drying',
  'Fire & smoke restoration',
  'Mould remediation & prevention',
  'Storm & sewage damage',
  'Full reconstruction & renovation',
  'Commercial & residential properties',
]

/* ── Process steps ───────────────────────────────────────────────────────── */
const process = [
  { step: '01', label: 'You call — we answer',     note: 'Day or night, any day of the year'     },
  { step: '02', label: 'On-site assessment',        note: 'Thorough, documented, at no cost'       },
  { step: '03', label: 'Plan & insurer alignment',  note: 'We handle the paperwork'               },
  { step: '04', label: 'Restoration & rebuild',     note: 'Certified crews, quality materials'     },
  { step: '05', label: 'Final walkthrough',         note: 'Done right, or we come back'           },
]

/* ─────────────────────────────────────────────────────────────────────────── */
export default function AboutHero() {
  const intro       = useReveal()
  const pillarsReveal = useReveal()
  const capReveal   = useReveal()
  const processReveal = useReveal()
  const ctaReveal   = useReveal()

  const COPPER = '#C77B30'
  const NAVY   = '#0B1F3A'
  const BG     = '#060d1a'

  return (
    <article>

      {/* ══════════════════════════════════════════════════════════════════
          01  HERO INTRO
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: `linear-gradient(160deg, ${BG} 0%, ${NAVY} 60%, ${BG} 100%)` }}>
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        {/* Copper glow — top right */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] pointer-events-none" style={{
          background: 'radial-gradient(ellipse, rgba(199,123,48,0.06) 0%, transparent 65%)',
        }} />

        <div ref={intro.ref} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-28 pb-24">

          {/* Copper eyebrow */}
          <div
            className="copper-badge mb-7"
            style={{ opacity: intro.visible ? 1 : 0, transform: intro.visible ? 'translateY(0)' : 'translateY(16px)', transition: 'opacity 600ms ease, transform 600ms ease' }}
          >
            <span className="w-6 h-px inline-block" style={{ background: COPPER }} />
            About Arctiv
          </div>

          {/* Split headline + body */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            <div style={{
              opacity: intro.visible ? 1 : 0,
              transform: intro.visible ? 'translateY(0)' : 'translateY(28px)',
              transition: 'opacity 700ms ease 100ms, transform 700ms ease 100ms',
            }}>
              <h1
                className="text-white font-bold leading-[1.05]"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.035em' }}
              >
                Built for the moments
                <br />
                <span style={{ color: 'rgba(255,255,255,0.3)' }}>when it matters most.</span>
              </h1>
          </div>

            <div
              className="space-y-5"
              style={{
                opacity: intro.visible ? 1 : 0,
                transform: intro.visible ? 'translateY(0)' : 'translateY(28px)',
                transition: 'opacity 700ms ease 220ms, transform 700ms ease 220ms',
              }}
            >
              <p className="text-base leading-relaxed" style={{ color: '#b0bdcc' }}>
                Arctiv was founded in Canada with one purpose: to be the team property owners can depend on
                when things go wrong. Whether it's a flooded basement at 2 a.m. or a fire that shuts down
                a business, we respond fast, work with precision, and stay until the job is done properly.
              </p>
              <p className="text-sm leading-relaxed text-gray-500">
                We offer emergency restoration, structural drying, mould remediation, fire and smoke
                recovery, storm damage repair, and full-scale reconstruction — all managed under one roof,
                from your first call to your final walkthrough.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  className="px-7 py-3 rounded-xl text-sm font-bold text-white transition-all duration-200 tracking-wide"
                  style={{ background: COPPER, boxShadow: '0 0 28px rgba(199,123,48,0.35)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#d4914d' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = COPPER }}
                >
                  Get a Free Assessment
                </button>
                <button
                  className="text-sm font-semibold flex items-center gap-2 transition-all duration-200 hover:gap-3"
                  style={{ color: COPPER }}
                >
                  Our Services <ArrowRight />
                </button>
              </div>
            </div>
          </div>

          {/* Copper gradient rule */}
          <div className="mt-20 h-px" style={{
            background: 'linear-gradient(90deg, transparent, rgba(199,123,48,0.4), transparent)',
            opacity: intro.visible ? 1 : 0,
            transition: 'opacity 1s ease 600ms',
          }} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          02  CORE PILLARS — 4 cards
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 lg:px-16" style={{ background: BG }}>
        <div ref={pillarsReveal.ref} className="max-w-7xl mx-auto">

          <div
            className="mb-14"
            style={{ opacity: pillarsReveal.visible ? 1 : 0, transform: pillarsReveal.visible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 600ms ease, transform 600ms ease' }}
          >
            <div className="copper-badge mb-4">
              <span className="w-5 h-px inline-block" style={{ background: COPPER }} />
              What Drives Us
            </div>
            <h2
              className="text-white font-bold"
              style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', letterSpacing: '-0.03em' }}
            >
              Our commitments to every client.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="rounded-2xl p-7 transition-all duration-300 cursor-default group"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  opacity: pillarsReveal.visible ? 1 : 0,
                  transform: pillarsReveal.visible ? 'translateY(0)' : 'translateY(28px)',
                  transition: `opacity 600ms ease ${i * 100}ms, transform 600ms ease ${i * 100}ms, background 300ms, border-color 300ms`,
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.background = 'rgba(199,123,48,0.05)'
                  el.style.borderColor = 'rgba(199,123,48,0.2)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.background = 'rgba(255,255,255,0.02)'
                  el.style.borderColor = 'rgba(255,255,255,0.05)'
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(199,123,48,0.1)', border: '1px solid rgba(199,123,48,0.18)' }}
                >
                  {p.icon}
                </div>
                <h3
                  className="text-white text-base font-bold mb-2"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {p.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          03  WHAT WE HANDLE — image + capability list
      ══════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 px-6 md:px-12 lg:px-16 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #f0f4f8 0%, #e8eef6 50%, #edf2f8 100%)' }}
      >
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.3] pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle, #c4b89a 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }} />
        {/* Copper tint blob */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none" style={{
          background: 'radial-gradient(ellipse at top right, rgba(199,123,48,0.06) 0%, transparent 65%)',
        }} />

        <div ref={capReveal.ref} className="relative max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">

            {/* Left: image */}
            <div
              className="mb-12 lg:mb-0"
              style={{
                opacity: capReveal.visible ? 1 : 0,
                transform: capReveal.visible ? 'translateX(0)' : 'translateX(-32px)',
                transition: 'opacity 800ms ease 100ms, transform 800ms ease 100ms',
              }}
            >
              <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: '0 32px 80px rgba(11,31,58,0.18)' }}>
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80"
                  alt="Arctiv restoration team at work"
                  className="w-full h-[500px] object-cover"
                />
                {/* Badge overlay */}
                <div
                  className="absolute bottom-6 left-6 right-6 rounded-xl px-5 py-4"
                  style={{ background: 'rgba(6,13,26,0.9)', backdropFilter: 'blur(16px)', border: '1px solid rgba(199,123,48,0.2)' }}
                >
                  <p className="text-white text-sm font-bold">
                    Ontario's Property Restoration Specialists
                  </p>
                  <p className="text-gray-400 text-xs mt-1">Greater Toronto Area · IICRC Certified · 24/7 Response</p>
                </div>
              </div>
            </div>

            {/* Right: capabilities */}
            <div style={{
              opacity: capReveal.visible ? 1 : 0,
              transform: capReveal.visible ? 'translateX(0)' : 'translateX(32px)',
              transition: 'opacity 800ms ease 200ms, transform 800ms ease 200ms',
            }}>
              <div className="copper-badge mb-4" style={{ color: COPPER }}>
                <span className="w-5 h-px inline-block" style={{ background: COPPER }} />
                What We Handle
              </div>
              <h2
                className="font-bold mb-5 leading-tight"
                style={{ color: NAVY, fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', letterSpacing: '-0.03em' }}
              >
                One team. Every type of property damage.
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Arctiv brings every restoration discipline in-house. That means consistent quality,
                single-point accountability, and no delays waiting for a third party to show up.
                When your property is at risk, fragmented service is not an option.
              </p>

              <ul className="space-y-3 mb-10">
                {capabilities.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3"
                    style={{
                      opacity: capReveal.visible ? 1 : 0,
                      transform: capReveal.visible ? 'translateX(0)' : 'translateX(-12px)',
                      transition: `opacity 500ms ease ${300 + i * 70}ms, transform 500ms ease ${300 + i * 70}ms`,
                    }}
                  >
                    <CopperCheck />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <button
                className="px-7 py-3 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-200 hover:gap-3"
                style={{ background: COPPER, boxShadow: '0 0 24px rgba(199,123,48,0.3)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#d4914d' }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = COPPER }}
              >
                Explore Our Services <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          04  HOW WE WORK — process timeline
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 lg:px-16" style={{ background: NAVY }}>
        <div ref={processReveal.ref} className="max-w-7xl mx-auto">

          <div
            className="mb-14"
            style={{ opacity: processReveal.visible ? 1 : 0, transform: processReveal.visible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 600ms ease, transform 600ms ease' }}
          >
            <div className="copper-badge mb-4">
              <span className="w-5 h-px inline-block" style={{ background: COPPER }} />
              How We Work
            </div>
            <h2
              className="text-white font-bold"
              style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', letterSpacing: '-0.03em' }}
            >
              Simple process. Reliable results.
            </h2>
          </div>

          {/* Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0 relative">
            {/* Connector — desktop only */}
            <div
              className="hidden md:block absolute top-[2.25rem] left-[10%] right-[10%] h-px pointer-events-none"
              style={{
                background: `linear-gradient(90deg, transparent, rgba(199,123,48,0.4), rgba(199,123,48,0.6), rgba(199,123,48,0.4), transparent)`,
                opacity: processReveal.visible ? 1 : 0,
                transition: 'opacity 900ms ease 400ms',
              }}
            />

            {process.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center px-3 pb-10 md:pb-0"
                style={{
                  opacity: processReveal.visible ? 1 : 0,
                  transform: processReveal.visible ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 600ms ease ${200 + i * 100}ms, transform 600ms ease ${200 + i * 100}ms`,
                }}
              >
                <div
                  className="w-[4.5rem] h-[4.5rem] rounded-full flex items-center justify-center mb-5 flex-shrink-0 relative z-10"
                  style={{ background: 'rgba(199,123,48,0.1)', border: '1.5px solid rgba(199,123,48,0.3)', boxShadow: '0 0 18px rgba(199,123,48,0.08)' }}
                >
                  <span className="font-bold text-sm" style={{ color: COPPER}}>
                    {item.step}
                  </span>
                </div>
                <p className="text-white text-sm font-bold mb-1.5" style={{letterSpacing: '-0.01em' }}>
                  {item.label}
                </p>
                <p className="text-gray-500 text-xs leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          05  CTA BAND
      ══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden py-20 px-6 md:px-12 lg:px-16"
        style={{ background: `linear-gradient(135deg, ${BG} 0%, ${NAVY} 50%, ${BG} 100%)` }}
      >
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        {/* Copper glow bottom */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 50% 110%, rgba(199,123,48,0.1) 0%, transparent 60%)',
        }} />

        <div ref={ctaReveal.ref} className="relative z-10 max-w-3xl mx-auto text-center">
          <div style={{
            opacity: ctaReveal.visible ? 1 : 0,
            transform: ctaReveal.visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 700ms ease, transform 700ms ease',
          }}>
            <div className="copper-badge justify-center mb-5">
              <span className="w-5 h-px inline-block" style={{ background: COPPER }} />
              Ready to Get Started?
              <span className="w-5 h-px inline-block" style={{ background: COPPER }} />
            </div>
            <h2
              className="text-white font-bold mb-5"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)', letterSpacing: '-0.03em' }}
            >
              No damage is too complex.
              <br />
              <span style={{ color: 'rgba(255,255,255,0.35)' }}>Let's talk about your property.</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
              Whether you're dealing with an emergency right now or planning a renovation,
              Arctiv is the team you want on your side. The first assessment is always on us.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button
                className="px-8 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-200"
                style={{ background: COPPER, boxShadow: '0 0 36px rgba(199,123,48,0.4)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#d4914d' }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = COPPER }}
              >
                Get a Free Quote
              </button>
              <a
                href="tel:4161234567"
                className="px-8 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.1)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.06)' }}
              >
                📞 416.123.4567
              </a>
            </div>
          </div>
        </div>
      </section>

    </article>
  )
}