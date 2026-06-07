import { useEffect, useRef, useState } from 'react'

// Stat counter that animates up to its target value when scrolled into view
function StatCounter({
  value,
  suffix,
  label,
  delay = 0,
}: {
  value: number
  suffix: string
  label: string
  delay?: number
}) {
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    const timeout = setTimeout(() => {
      const duration = 1200
      const steps = 40
      const increment = value / steps
      let current = 0
      const interval = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(interval)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(timeout)
  }, [visible, value, delay])

  return (
    <div ref={ref} className="text-center md:text-left">
      <p className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
        {count}{suffix}
      </p>
      <p className="text-gray-500 text-xs mt-1 uppercase tracking-widest">{label}</p>
    </div>
  )
}

export default function AboutHero() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative bg-[#060d1a] overflow-hidden">

      {/* Top border accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-600/40 to-transparent" />

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Blue glow — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom left, rgba(37,99,235,0.12) 0%, transparent 65%)' }}
      />

      <div
        ref={ref}
        className="relative z-10 px-6 md:px-12 lg:px-16 pt-24 pb-20"
      >
        {/* Eyebrow */}
        <p
          className="text-blue-500 text-xs font-semibold uppercase tracking-[0.2em] mb-5"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 600ms ease, transform 600ms ease',
          }}
        >
          About Artiv
        </p>

        {/* Main headline + body — 2 col on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">

          {/* Left — headline */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 700ms ease 100ms, transform 700ms ease 100ms',
            }}
          >
            <h1
              className="text-white text-3xl md:text-4xl lg:text-5xl font-normal leading-tight"
              style={{ letterSpacing: '-0.03em' }}
            >
              Built for the moments
              <br />
              <span className="text-gray-500">when it matters most.</span>
            </h1>
          </div>

          {/* Right — body copy */}
          <div
            className="space-y-4"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 700ms ease 200ms, transform 700ms ease 200ms',
            }}
          >
            <p className="text-gray-300 text-sm leading-relaxed">
              Artiv was founded in Canada with one purpose: to be the team
              property owners can count on when disaster strikes. Whether it's
              a flooded basement at 2am or a fire that shuts down a business,
              we show up fast, work with care, and see every job through to
              completion.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              We handle water damage, fire and smoke, mould, structural drying,
              repairs, and full renovations — all under one roof. Our certified
              crews work with insurers and property owners alike, making a
              stressful process as straightforward as possible.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Every project is managed from first call to final walkthrough.
              No handoffs. No surprises.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px bg-white/5 mb-16"
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 800ms ease 300ms' }}
        />

        {/* Stats row */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 700ms ease 350ms, transform 700ms ease 350ms',
          }}
        >
          <StatCounter value={24} suffix="/7" label="Emergency response" delay={400} />
          <StatCounter value={500} suffix="+" label="Projects completed" delay={500} />
          <StatCounter value={15} suffix="+" label="Years in the industry" delay={600} />
          <StatCounter value={100} suffix="%" label="Insurance approved" delay={700} />
        </div>

        {/* Divider */}
        <div
          className="h-px bg-white/5 mt-16 mb-16"
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 800ms ease 400ms' }}
        />

        {/* Values row */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 700ms ease 500ms, transform 700ms ease 500ms',
          }}
        >
          {[
            {
              title: 'Speed without shortcuts',
              body: 'We respond fast because every hour counts in restoration. Speed never means cutting corners on quality or safety.',
            },
            {
              title: 'Certified people',
              body: 'Our technicians hold IICRC certifications and follow Health Canada and industry standards on every job.',
            },
            {
              title: 'Clear communication',
              body: 'We work directly with your insurer, document everything, and keep you updated from start to finish.',
            },
          ].map((v, i) => (
            <div
              key={i}
              className="liquid-glass rounded-xl border border-white/10 p-6"
              style={{ transitionDelay: `${600 + i * 80}ms` }}
            >
              <div className="w-6 h-px bg-blue-500 mb-4" />
              <h3 className="text-white text-sm font-semibold mb-2">{v.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom border accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  )
}
