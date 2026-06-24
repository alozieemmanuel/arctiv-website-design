import { Phone } from 'lucide-react'
import { ScrollReveal } from '@/components/ScrollReveal'

export function EmergencyCTASection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 px-5"
      style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #1a3a5c 100%)' }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(199,123,48,0.1) 0%, transparent 60%)',
        }}
      />

      <div className="container-custom relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto">
          {/* Pulse indicator */}
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-copper-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-copper-500" />
            </span>
            <span className="text-copper-400 text-xs font-semibold uppercase tracking-[0.15em]">
              24/7 Emergency Response
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-5">
            Property damage doesn't wait.
          </h2>

          <p className="text-slate-300 text-xs lg:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Floods, fires, mould can escalate quickly. Every hour without a response compounds
            the damage and the cost. Arctiv crews are on standby around the clock.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="tel:+14374762407"
              className="inline-flex items-center gap-2 bg-copper-500 hover:bg-copper-400 text-white px-8 py-4 rounded-lg text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              Call +1 (437) 476 2407
            </a>
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault()
                window.history.pushState({}, '', '/contact')
                window.dispatchEvent(new PopStateEvent('popstate'))
                window.scrollTo(0, 0)
              }}
              className="hidden lg:inline-flex items-center gap-2 px-8 py-4 rounded-lg text-sm font-semibold text-white border border-white/30 hover:bg-white/10 transition-all duration-200"
            >
              Request Emergency Response
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
