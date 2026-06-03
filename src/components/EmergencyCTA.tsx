import { useEffect, useRef, useState } from 'react'

export default function EmergencyCTA() {
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
        <section
            ref={ref}
            className="relative overflow-hidden py-24 px-6 md:px-12 lg:px-16"
            style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0f1f3d 50%, #0a1628 100%)' }}
        >
            {/* Grid texture */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at 50% 50%, rgba(234,88,12,0.08) 0%, transparent 65%)',
                }}
            />

            <div className="relative z-10 max-w-5xl mx-auto">
                <div className="lg:flex lg:items-center lg:justify-between gap-12">

                    {/* Left */}
                    <div
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateY(0)' : 'translateY(24px)',
                            transition: 'opacity 700ms ease, transform 700ms ease',
                        }}
                        className="mb-10 lg:mb-0"
                    >
                        {/* Pulse indicator */}
                        <div className="flex items-center gap-2 mb-5">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" />
                            </span>
                            <p className="text-orange-400 text-xs font-semibold uppercase tracking-[0.2em]">
                                24/7 Emergency Response
                            </p>
                        </div>

                        <h2
                            className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 leading-tight"
                            style={{ letterSpacing: '-0.03em' }}
                        >
                            Property damage
                            <br />
                            <span className="text-gray-400">doesn't wait.</span>
                        </h2>

                        <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                            Floods, fires, mould can escalate quickly. Every hour without a response compounds the damage and the cost.. Arctiv crews are on standby around the clock. One call is all it takes to get the process started.
                        </p>
                    </div>

                    {/* Right — card */}
                    <div
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateY(0)' : 'translateY(24px)',
                            transition: 'opacity 700ms ease 200ms, transform 700ms ease 200ms',
                            flexShrink: 0,
                            minWidth: '300px',
                        }}
                    >
                        <div
                            className="rounded-2xl p-8"
                            style={{
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                backdropFilter: 'blur(12px)',
                            }}
                        >
                            <p className="text-gray-400 text-xs uppercase tracking-widest mb-6">
                                Get immediate help
                            </p>

                            {/* Phone */}
                            <a
                                href="tel:4168888888"
                                className="flex items-center gap-4 mb-4 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-400 transition-colors duration-200">
                                    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
                                        <path d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-7.18 0-13-5.82-13-13V3.5z"
                                            fill="white" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-white text-xl font-bold tracking-tight group-hover:text-orange-300 transition-colors duration-200">
                                        (416) 888-8888
                                    </p>
                                    <p className="text-gray-500 text-xs">Available 24 hours, 7 days a week</p>
                                </div>
                            </a>

                            <div className="border-t border-white/8 my-5" />

                            {/* Email */}
                            <a
                                href="mailto:info@arctiv.ca"
                                className="flex items-center gap-4 mb-6 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/12 transition-colors duration-200">
                                    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" fill="#94a3b8" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" fill="#94a3b8" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-white text-sm font-medium group-hover:text-blue-300 transition-colors duration-200">
                                        info@arctiv.ca
                                    </p>
                                    <p className="text-gray-500 text-xs">For non-urgent inquiries</p>
                                </div>
                            </a>

                            <button className="w-full bg-orange-500 hover:bg-orange-400 text-white font-semibold py-4 rounded-xl text-sm transition-colors duration-200">
                                Request Emergency Response
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}