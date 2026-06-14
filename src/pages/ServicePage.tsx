import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, ChevronRight, Plus, Minus } from 'lucide-react'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ScrollReveal'
import { SectionLabel } from '@/components/SectionLabel'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { EmergencyFloat } from '@/components/EmergencyFloat'
import { navigate } from '@/lib/utils'
import { serviceDataMap } from '@/data/serviceData'

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-slate-200">
      <button
        className="w-full flex items-center justify-between py-4 text-left gap-4"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm font-medium text-navy-900">{q}</span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
          open ? 'bg-copper-500 text-white' : 'bg-slate-100 text-slate-500'
        }`}>
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="text-slate-500 text-sm leading-relaxed pb-4 px-10">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function ServicePage({ slug }: { slug: string }) {
  const data = serviceDataMap[slug]

  if (!data) {
    return (
      <div className="min-h-screen bg-navy-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-bold text-white mb-4">Service not found</h1>
          <button
            onClick={() => { navigate('/'); window.scrollTo(0, 0) }}
            className="text-copper-400 hover:text-copper-300 text-sm"
          >
            Return to home
          </button>
        </div>
      </div>
    )
  }

  const copper = '#C77B30'

  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />

      {/* Hero */}
      <section
        className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-24 px-3 md:px-10"
        style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #1a3a5c 60%, #0B1F3A 100%)' }}
      >
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none" style={{
          background: 'radial-gradient(ellipse, rgba(199,123,48,0.06) 0%, transparent 70%)',
        }} />

        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: copper }}>
                {data.badge}
              </p>
              <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white tracking-tight leading-[1.1] mb-4">
                {data.headline}
                <br />
                <span className="text-slate-400">{data.subline}</span>
              </h1>
              <p className="text-slate-300 text-xs lg:text-base max-w-lg leading-relaxed mb-7">
                {data.heroDesc}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:4168888888"
                  className="hidden inline-flex items-center gap-2 bg-copper-500 hover:bg-copper-400 text-white px-6 py-3 rounded-lg text-xs font-semibold transition-all duration-200"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call (416) 888-8888
                </a>
                <a
                  href="/contact"
                  onClick={(e) => { e.preventDefault(); navigate('/contact'); window.scrollTo(0, 0) }}
                  className="inline-flex items-center gap-2 text-white text-xs font-medium px-6 py-3 rounded-lg border border-white/20 hover:bg-white/10 transition-all duration-200"
                >
                  Get a Free Quote
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What It Is */}
      <section className="bg-white py-20 lg:py-24 px-3 md:px-10">
        <div className="container-custom">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <SectionLabel text="What This Means For You" />
                <h2 className="text-2xl lg:text-3xl font-semibold text-navy-900 tracking-tight mb-5">
                  Understanding <span className="text-copper-500">{data.badge}</span>
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-7">
                  {data.whatItIs}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-4 text-slate-400">
                  Warning Signs to Watch For
                </p>
                <div className="space-y-2.5">
                  {data.signs.map((s, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-copper-500/10 flex items-center justify-center">
                        <ChevronRight className="w-3.5 h-3.5 text-copper-500" />
                      </div>
                      <div>
                        <p className="text-navy-900 text-sm font-medium">{s.label}</p>
                        <p className="text-slate-500 text-xs mt-0.5">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-100 py-20 lg:py-24 px-3 md:px-10">
        <div className="container-custom">
          <ScrollReveal className="mb-10">
            <SectionLabel text="How We Work" />
            <h2 className="text-2xl lg:text-3xl font-semibold text-navy-900 tracking-tight">
              Our Restoration <span className="text-slate-400">Process</span>
            </h2>
          </ScrollReveal>

          <StaggerContainer className="relative">
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-px border-t-2 border-dashed border-slate-300" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {data.process.map((p, i) => (
                <StaggerItem key={i}>
                  <div className="relative p-5 rounded-xl bg-white border border-slate-200">
                    <div className="w-9 h-9 rounded-full bg-copper-500 flex items-center justify-center text-white text-xs font-bold mb-4">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <p className="text-navy-900 font-semibold text-sm mb-1.5">{p.title}</p>
                    <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20 lg:py-24 px-3 md:px-10">
        <div className="container-custom">
          <ScrollReveal className="mb-10">
            <SectionLabel text="Why Choose Arctiv" />
            <h2 className="text-2xl lg:text-3xl font-semibold text-navy-900 tracking-tight">
              What Sets Us <span className="text-slate-400">Apart</span>
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.benefits.map((b, i) => (
              <StaggerItem key={i}>
                <div className="p-5 rounded-xl border border-slate-200 hover:border-copper-300 hover:shadow-sm transition-all duration-300 h-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-copper-500 mb-3" />
                  <p className="text-navy-900 font-semibold text-sm mb-1.5">{b.title}</p>
                  <p className="text-slate-500 text-xs leading-relaxed">{b.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-20 lg:py-24 px-3">
        <div className="container-custom">
          <ScrollReveal className="max-w-3xl mx-auto">
            <SectionLabel text="FAQ" />
            <h2 className="text-2xl lg:text-3xl font-semibold text-navy-900 tracking-tight mb-8">
              Common <span className="text-slate-400">Questions</span>
            </h2>
            <div>
              {data.faqs.map((f, i) => (
                <FAQItem key={i} q={f.q} a={f.a} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-white py-14 md:px-10 px-3">
        <div className="container-custom">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-5 text-slate-400">
              Related Services
            </p>
            <div className="flex flex-wrap gap-2.5">
              {data.relatedServices.map((s) => (
                <button
                  key={s.label}
                  onClick={() => { navigate(s.path); window.scrollTo(0, 0) }}
                  className="text-xs px-4 py-2 rounded-lg text-slate-600 bg-slate-50 border border-slate-200 hover:border-copper-500 hover:text-copper-600 transition-all duration-200"
                >
                  {s.label}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative overflow-hidden py-20 lg:py-24"
        style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #1a3a5c 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(199,123,48,0.07) 0%, transparent 65%)',
        }} />
        <div className="container-custom px-10 relative z-10 text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
              </span>
              <p className="text-orange-400 text-xs font-semibold uppercase tracking-[0.15em]">
                24/7 Emergency Response
              </p>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight mb-3">
              Dealing with {data.badge}?
            </h2>
            <p className="text-slate-400 text-sm mb-7 max-w-lg mx-auto leading-relaxed">
              Don't wait — the longer you leave it, the worse it gets. Call Arctiv now or request a free quote and we'll respond fast.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="tel:4168888888"
                className="inline-flex items-center gap-2 bg-copper-500 hover:bg-copper-400 text-white font-semibold px-7 py-3 rounded-lg text-xs transition-all duration-200"
              >
                Call (416) 888-8888
              </a>
              <a
                href="/contact"
                onClick={(e) => { e.preventDefault(); navigate('/contact'); window.scrollTo(0, 0) }}
                className="hidden inline-flex items-center gap-2 text-white font-medium px-7 py-3 rounded-lg border border-white/20 hover:bg-white/10 text-xs transition-all duration-200"
              >
                Request a Free Quote
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