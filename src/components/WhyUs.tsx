import { useEffect, useRef, useState } from 'react'

const CheckIcon = () => (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0">
        <circle cx="8" cy="8" r="7.5" fill="#1d4ed8" fillOpacity="0.1" stroke="#1d4ed8" strokeWidth="1" />
        <path d="M5 8l2 2 4-4" stroke="#1d4ed8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const commitments = [
    'Certified in-house technicians on every project',
    'Direct insurance billing for a seamless claims process',
    '24/7 emergency response across the region',
    'Dedicated project management from start to finish',
  ]

export default function WhyUs() {
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
        <section
            ref={ref}
            id="about"
            className="relative overflow-hidden py-24 px-6 md:px-12 lg:px-16"
            style={{ background: 'linear-gradient(135deg, #eef4ff 0%, #f0f6ff 50%, #e8f0fe 100%)' }}
        >
            {/* Subtle dot grid */}
            <div
                className="absolute inset-0 opacity-[0.35] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, #93b4f0 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                }}
            />

            {/* Top-right accent blob */}
            <div
                className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)' }}
            />

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-24 items-center">

                    {/* ── Left: Text ─────────────────────────────────────── */}
                    <div
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateY(0)' : 'translateY(28px)',
                            transition: 'opacity 700ms ease, transform 700ms ease',
                        }}
                    >
                        <p className="text-blue-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                            Who We Are
                        </p>

                        <h2
                            className="text-gray-900 text-3xl md:text-4xl font-semibold mb-6 leading-tight"
                            style={{ letterSpacing: '-0.03em' }}
                        >
                            Restoring properties to better than{' '}
                            <span className="text-blue-600">they were before.</span>
                        </h2>

                        <p className="text-gray-500 text-sm leading-relaxed mb-5">
                            At Arctiv, we believe restoration should do more than repair damage. Our goal
                            is to leave your property better than before, backed by certified expertise and
                            quality workmanship. From emergency response to complete restorations, we provide clear communication,
                            skilled workmanship, and lasting results. We handle the complexity so you can
                            focus on moving forward.
                        </p>

                        {/* Commitments */}
                        <ul className="space-y-3 mb-7">
                            {commitments.map((item, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-3"
                                    style={{
                                        opacity: visible ? 1 : 0,
                                        transform: visible ? 'translateX(0)' : 'translateX(-12px)',
                                        transition: `opacity 600ms ease ${300 + i * 100}ms, transform 600ms ease ${300 + i * 100}ms`,
                                    }}
                                >
                                    <span className="mt-0.5"><CheckIcon /></span>
                                    <span className="text-gray-600 text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTAs */}
                        <div
                            className="flex flex-wrap gap-4"
                            style={{
                                opacity: visible ? 1 : 0,
                                transition: 'opacity 600ms ease 800ms',
                            }}
                        >
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-lg text-sm font-medium transition-colors duration-200">
                                Get a Free Quote
                            </button>
                            <button
                                className="text-blue-600 text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all duration-200"
                            >
                                Our Services
                                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* ── Right: Image ───────────────────────────────────── */}
                    <div
                        className="mt-14 lg:mt-0"
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateX(0)' : 'translateX(32px)',
                            transition: 'opacity 800ms ease 200ms, transform 800ms ease 200ms',
                        }}
                    >
                        <div className="relative">

                            {/* Main image */}
                            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10">
                                <img
                                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80"
                                    alt="Arctiv restoration team at work"
                                    className="w-full h-[480px] object-cover"
                                />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}