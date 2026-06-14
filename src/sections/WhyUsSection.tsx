import { useEffect, useRef, useState } from 'react'
import { SectionLabel } from '@/components/SectionLabel'
import { navigate } from '@/lib/utils'

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0">
    <circle cx="8" cy="8" r="7.5" fill="#b87333" fillOpacity="0.15" stroke="#b87333" strokeWidth="1" />
    <path d="M5 8l2 2 4-4" stroke="#b87333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const commitments = [
  'Certified in-house technicians on every project',
  'Direct insurance billing for a seamless claims process',
  '24/7 emergency response across the region',
  'Dedicated project management from start to finish',
]

export function WhyUsSection() {
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
    <section ref={ref} className="bg-navy-900 py-24 lg:py-32 px-3 md:px-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(28px)',
              transition: 'opacity 700ms ease, transform 700ms ease',
            }}
          >
            <SectionLabel text="Why Arctiv" light />
            <h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-6">
              Restoring properties to{' '}
              <span className="text-copper-400">better than before.</span>
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-8">
              At Arctiv, we believe restoration should do more than repair damage. Our goal
              is to leave your property better than before, backed by certified expertise and
              quality workmanship. From emergency response to complete restorations, we provide
              clear communication, skilled workmanship, and lasting results. We handle the
              complexity so you can focus on moving forward.
            </p>

            {/* Commitments */}
            <ul className="space-y-3 mb-8">
              {commitments.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-3"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateX(0)' : 'translateX(-12px)',
                    transition: `opacity 600ms ease ${300 + i * 100}ms, transform 600ms ease ${300 + i * 100}ms`,
                  }}
                >
                  <span className="mt-0.5"><CheckIcon /></span>
                  <span className="text-slate-300 text-sm">{item}</span>
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
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault()
                  navigate('/contact')
                  window.scrollTo(0, 0)
                }}
                className="bg-copper-500 hover:bg-copper-400 text-white px-7 py-3 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                Get a Free Quote
              </a>
              <a
                href="/about"
                onClick={(e) => {
                  e.preventDefault()
                  navigate('/about')
                  window.scrollTo(0, 0)
                }}
                className="hidden text-copper-400 hover:text-copper-300 text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all duration-200"
              >
                Our Services
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div
            className="relative"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(32px)',
              transition: 'opacity 800ms ease 200ms, transform 800ms ease 200ms',
            }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80"
                alt="Certified restoration technician using moisture detection equipment"
                className="w-full h-[480px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}