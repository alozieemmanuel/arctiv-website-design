import { useEffect, useRef, useState } from 'react'
import { SectionLabel } from '@/components/SectionLabel'

interface Step {
  number: string
  title: string
  description: string
  icon: React.ReactNode
}

const AssessIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
    <rect x="8" y="6" width="24" height="28" rx="3" stroke="#b87333" strokeWidth="1.8" fill="rgba(184,115,51,0.1)" />
    <path d="M13 14h14M13 19h14M13 24h8" stroke="#b87333" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="28" cy="28" r="6" fill="white" stroke="#b87333" strokeWidth="1.5" />
    <path d="M25.5 28l1.5 1.5 3-3" stroke="#b87333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const PlanIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
    <circle cx="20" cy="20" r="13" stroke="#b87333" strokeWidth="1.8" fill="rgba(184,115,51,0.1)" />
    <path d="M20 11v9l6 3" stroke="#b87333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ExecuteIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
    <path d="M10 30L20 10l10 20" stroke="#b87333" strokeWidth="1.8" strokeLinejoin="round" fill="rgba(184,115,51,0.1)" />
    <path d="M13.5 24h13" stroke="#b87333" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="20" cy="34" r="2.5" fill="rgba(184,115,51,0.2)" stroke="#b87333" strokeWidth="1.2" />
  </svg>
)

const ClearIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
    <path d="M10 20 C10 14 14 8 20 8 C26 8 30 14 30 20" stroke="#b87333" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <path d="M8 22 C8 28 13 34 20 34 C27 34 32 28 32 22" stroke="#b87333" strokeWidth="1.5" strokeLinecap="round" fill="rgba(184,115,51,0.08)" />
    <path d="M15 20l3 3 7-7" stroke="#b87333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const steps: Step[] = [
  {
    number: '01',
    title: 'Assessment',
    description: 'We respond within an hour for an emergency service call, access and document the damage thoroughly, and provide a clear scope of work.',
    icon: <AssessIcon />,
  },
  {
    number: '02',
    title: 'Planning',
    description: 'Our team builds a restoration plan, coordinates with you and your insurer, and establishes a realistic timeline.',
    icon: <PlanIcon />,
  },
  {
    number: '03',
    title: 'Execution',
    description: 'Certified technicians execute the work with precision. You receive progress updates from a dedicated project manager.',
    icon: <ExecuteIcon />,
  },
  {
    number: '04',
    title: 'Clearance',
    description: 'We conduct final inspections, obtain clearance testing where required, and hand back your property fully restored.',
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
      {/* Watermark number */}
      <div
        className="absolute -top-4 -left-1 text-7xl font-bold select-none pointer-events-none"
        style={{
          color: 'rgba(11,31,58,0.04)',
          letterSpacing: '-0.04em',
          lineHeight: 1,
        }}
      >
        {step.number}
      </div>

      {/* Card */}
      <div className="rounded-2xl border border-slate-200 p-6 h-full flex flex-col gap-4 hover:border-copper-300 hover:shadow-sm transition-all duration-300">
        {/* Icon row */}
        <div className="flex items-center justify-between">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center"
            style={{ background: 'rgba(184,115,51,0.06)', border: '1px solid rgba(184,115,51,0.15)' }}
          >
            {step.icon}
          </div>
          <span
            className="text-xs font-mono font-semibold tabular-nums"
            style={{ color: 'rgba(11,31,58,0.2)', letterSpacing: '0.08em' }}
          >
            {step.number}
          </span>
        </div>

        <div>
          <h3 className="text-navy-900 font-semibold text-base mb-2" style={{ letterSpacing: '-0.02em' }}>
            {step.title}
          </h3>
          <p className="text-slate-500 text-xs leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export function ProcessSection() {
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
    <section className="bg-slate-50 py-24 lg:py-32 overflow-hidden px-3 md:px-10">
      <div className="container-custom">

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
            <SectionLabel text="How It Works" />
            <h2 className="text-3xl lg:text-4xl font-semibold text-navy-900 tracking-tight">
              A clear process,
              <br />
              <span className="text-slate-400">every step of the way.</span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed max-w-sm lg:text-right">
            Restoration can feel overwhelming. Our structured four-step process keeps you
            informed and in control from the first call to final handover.
          </p>
        </div>

        {/* Connector line (desktop only) */}
        <div className="hidden lg:block relative mb-[-1px]">
          <div className="absolute top-0 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-px overflow-hidden">
            <div
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(184,115,51,0.4) 20%, rgba(184,115,51,0.6) 50%, rgba(184,115,51,0.4) 80%, transparent)',
                width: lineVisible ? '100%' : '0%',
                transition: 'width 1200ms cubic-bezier(0.4, 0, 0.2, 1) 300ms',
              }}
            />
          </div>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-6 mb-16">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}