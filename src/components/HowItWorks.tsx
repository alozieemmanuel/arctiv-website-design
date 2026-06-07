import { useEffect, useRef, useState } from 'react'

interface Step {
  number: string
  title: string
  description: string
  icon: React.ReactNode
}

const AssessIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
    <rect x="8" y="6" width="24" height="28" rx="3" stroke="#60a5fa" strokeWidth="1.8" fill="rgba(37,99,235,0.08)" />
    <path d="M13 14h14M13 19h14M13 24h8" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="28" cy="28" r="6" fill="#0A1620" stroke="#60a5fa" strokeWidth="1.5" />
    <path d="M25.5 28l1.5 1.5 3-3" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const PlanIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
    <circle cx="20" cy="20" r="13" stroke="##60a5fa" strokeWidth="1.8" fill="rgba(37,99,235,0.08)" />
    <path d="M20 11v9l6 3" stroke="#93c5fd" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ExecuteIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
    <path d="M10 30L20 10l10 20" stroke="#60a5fa" strokeWidth="1.8" strokeLinejoin="round" fill="rgba(37,99,235,0.08)" />
    <path d="M13.5 24h13" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="20" cy="34" r="2.5" fill="#2563eb" fillOpacity="0.3" stroke="#93c5fd" strokeWidth="1.2" />
  </svg>
)

const ClearIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
    <path d="M10 20 C10 14 14 8 20 8 C26 8 30 14 30 20" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <path d="M8 22 C8 28 13 34 20 34 C27 34 32 28 32 22" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round" fill="rgba(37,99,235,0.06)" />
    <path d="M15 20l3 3 7-7" stroke="#93c5fd" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const steps: Step[] = [
  {
    number: '01',
    title: 'Assessment',
    description:
      'We respond within an hour for an emergency service call, document the damage thoroughly, and provide a clear scope of work.',
    icon: <AssessIcon />,
  },
  {
    number: '02',
    title: 'Planning',
    description:
      'Our team builds a restoration plan, coordinates with your insurer, and establishes a realistic timeline.',
    icon: <PlanIcon />,
  },
  {
    number: '03',
    title: 'Execution',
    description:
      'Certified technicians execute the work with precision. You receive progress updates from a dedicated project manager.',
    icon: <ExecuteIcon />,
  },
  {
    number: '04',
    title: 'Clearance',
    description:
      'We conduct final inspections, obtain clearance testing where required, and hand back your property — fully restored.',
    icon: <ClearIcon />,
  },
]

function StepCard({ step, index }: { step: Step; index: number }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="relative flex flex-col"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 600ms ease ${index * 120}ms, transform 600ms ease ${index * 120}ms`,
      }}
    >
      {/* Step number — large watermark */}
      <div
        className="absolute -top-4 -left-1 text-7xl font-bold select-none pointer-events-none"
        style={{
          color: 'rgba(255,255,255,0.03)',
          letterSpacing: '-0.04em',
          lineHeight: 1,
        }}
      >
        {step.number}
      </div>

      {/* Card */}
      <div className="liquid-glass rounded-2xl border border-white/10 p-6 h-full flex flex-col gap-4 hover:border-white/20 transition-colors duration-300">
        {/* Icon row */}
        <div className="flex items-center justify-between">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
            {step.icon}
          </div>
          <span
            className="text-xs font-mono font-semibold tabular-nums"
            style={{ color: 'rgba(255,255,255,0.15)', letterSpacing: '0.08em' }}
          >
            {step.number}
          </span>
        </div>

        <div>
          <h3
            className="text-white font-semibold text-base mb-2"
            style={{ letterSpacing: '-0.02em' }}
          >
            {step.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  const [headerVisible, setHeaderVisible] = useState(false)
  const [lineVisible, setLineVisible] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true)
          setTimeout(() => setLineVisible(true), 400)
        }
      },
      { threshold: 0.2 }
    )
    if (headerRef.current) observer.observe(headerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="process"
      className="relative bg-[#0A1620] py-24 px-6 md:px-12 lg:px-16 overflow-hidden"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Bottom-right glow */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at bottom right, rgba(139,92,246,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div
          ref={headerRef}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 700ms ease, transform 700ms ease',
          }}
        >
          <div className="max-w-xl">
            <p className="text-blue-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              How It Works
            </p>
            <h2
              className="text-white text-3xl md:text-4xl font-normal"
              style={{ letterSpacing: '-0.03em' }}
            >
              A clear process,
              <br />
              <span className="text-gray-500">every step of the way.</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm lg:text-right">
            Restoration can feel overwhelming. Our structured four-step process keeps you informed and in control from the first call to final handover.
          </p>
        </div>

        {/* Connector line (desktop only) */}
        <div className="hidden lg:block relative mb-[-1px]">
          <div className="absolute top-0 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-px overflow-hidden">
            <div
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(96,165,250,0.4) 20%, rgba(167,139,250,0.4) 50%, rgba(52,211,153,0.4) 80%, transparent)',
                width: lineVisible ? '100%' : '0%',
                transition: 'width 1200ms cubic-bezier(0.4, 0, 0.2, 1) 300ms',
              }}
            />
          </div>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-6">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>

        {/* Bottom strip */}
        <div
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t pt-10"
          style={{
            borderColor: 'rgba(255,255,255,0.07)',
            opacity: headerVisible ? 1 : 0,
            transition: 'opacity 700ms ease 600ms',
          }}
        >
          <div className="flex items-center gap-8">
            {[
              { value: '24/7', label: 'Emergency response' },
              { value: '48 hr', label: 'Average mobilization' },
              { value: '100%', label: 'Insurance coordination' },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="text-white text-xl font-semibold" style={{ letterSpacing: '-0.03em' }}>
                  {stat.value}
                </p>
                <p className="text-gray-500 text-xs mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-7 py-3 rounded-lg text-sm font-medium transition-colors duration-200 flex-shrink-0">
            Start Your Claim
          </button>
        </div>

      </div>
    </section>
  )
}