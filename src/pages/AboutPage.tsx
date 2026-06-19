import { CheckCircle2, Clock, Shield, FileCheck, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ScrollReveal'
import { SectionLabel } from '@/components/SectionLabel'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { EmergencyFloat } from '@/components/EmergencyFloat'
import { navigate } from '@/lib/utils'

const pillars = [
  {
    title: 'Rapid Response',
    body: 'When disaster strikes, time is everything. We mobilize immediately because the difference between manageable damage and total loss is often measured in hours.',
    icon: Clock,
  },
  {
    title: 'Certified Expertise',
    body: 'Our technicians carry IICRC certifications and follow Health Canada guidelines. Every job is handled by professionals who know the standards inside out.',
    icon: Shield,
  },
  {
    title: 'Insurance Navigation',
    body: "We work directly with your insurer, document everything meticulously, and handle the process so you don't have to become an expert in claims overnight.",
    icon: FileCheck,
  },
  {
    title: 'Complete Ownership',
    body: 'From first call to final walkthrough, one team handles everything. No surprises, no handoffs, no gaps in communication or quality.',
    icon: Star,
  },
]

const capabilities = [
  'Water damage & structural drying',
  'Fire & smoke restoration',
  'Mould & Asbestos remediation',
  'Storm & sewage damage',
  'Full reconstruction & renovation',
  'Commercial & residential properties',
]

export function AboutPage() {
  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />

      {/* Hero */}
      <section
        className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-24 lg:px-10 px-3"
        style={{ background: 'linear-gradient(160deg, #0B1F3A 0%, #1a3a5c 60%, #0B1F3A 100%)' }}
      >
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] pointer-events-none" style={{
          background: 'radial-gradient(ellipse, rgba(199,123,48,0.06) 0%, transparent 65%)',
        }} />

        <div className="container-custom relative z-10">
          <ScrollReveal>
            <SectionLabel text="About Arctiv" light />
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white tracking-tight leading-[1.1] mb-5 max-w-2xl">
              Built for the moments
              <br />
              <span className="text-slate-400">when it matters most.</span>
            </h1>
            <p className="text-slate-300 text-xs lg:text-base max-w-lg mb-7 leading-relaxed">
              Arctiv was founded in Canada with one purpose: to be the team property owners can depend on
              when things go wrong. Whether it's a flooded basement at 2 AM or a fire that shuts down
              a business, we respond fast, work with precision, and stay until the job is done properly.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/contact"
                onClick={(e) => { e.preventDefault(); navigate('/contact'); window.scrollTo(0, 0) }}
                className="bg-copper-500 hover:bg-copper-400 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200"
              >
                Get a Free Assessment
              </a>
              <a
                href="/services/water-damage"
                onClick={(e) => { e.preventDefault(); navigate('/services/water-damage'); window.scrollTo(0, 0) }}
                className="hidden px-6 py-3 rounded-lg text-sm font-semibold text-white border border-white/30 hover:bg-white/10 transition-all duration-200"
              >
                Our Services
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-24 md:px-10 px-3 lg:py-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div>
                <SectionLabel text="Our Story" />
                <h2 className="text-2xl lg:text-3xl font-semibold text-navy-900 tracking-tight mb-5">
                  One team. Every type of property damage.
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Arctiv was built on a simple belief: when disaster strikes your property, you deserve
                  a team that responds with speed, expertise, and genuine care. We are that team.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  From our earliest days responding to water damage calls across the GTA, we've grown
                  into a full-service restoration company handling everything from emergency board-ups
                  to complete rebuilds. But our core mission hasn't changed — restore properties,
                  rebuild trust, and be there when it matters most.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We bring every restoration discipline in-house. That means consistent quality,
                  single-point accountability, and no delays waiting for a third party to show up.
                  When your property is at risk, fragmented service is not an option.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="/about-team.png"
                    alt="Arctiv restoration team at work"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-slate-100 py-24 px-3 md:px-10 lg:py-28">
        <div className="container-custom ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div className="relative order-2 md:order-1">
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="/project-6.jpg"
                    alt="Completed restoration project"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="order-1 md:order-2">
                <SectionLabel text="What We Handle" />
                <h2 className="text-2xl lg:text-3xl font-semibold text-navy-900 tracking-tight mb-4">
                  Full-spectrum restoration services.
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-7">
                Whether you're dealing with water damage, fire loss, mould remediation, or a full property rebuild, our team has the expertise and resources to manage the entire process. We deliver reliable restoration and renovation solutions that protect your property, minimize disruption, and restore peace of mind.

                </p>
                <ul className="space-y-2.5 mb-7">
                  {capabilities.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <span className="w-5 h-5 rounded-full bg-copper-500/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-copper-500" />
                      </span>
                      <span className="text-slate-700 text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  onClick={(e) => { e.preventDefault(); navigate('/contact'); window.scrollTo(0, 0) }}
                  className="inline-flex items-center gap-2 bg-copper-500 hover:bg-copper-400 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200"
                >
                  Explore Our Services
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="bg-white py-24 px-3 md:px-10 lg:py-28">
        <div className="container-custom ">
          <ScrollReveal className="mb-12">
            <SectionLabel text="What Drives Us" />
            <h2 className="text-2xl lg:text-3xl font-semibold text-navy-900 tracking-tight">
              Our commitments to every client.
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ borderColor: 'rgba(199,123,48,0.3)', backgroundColor: 'rgba(199,123,48,0.02)' }}
                  className="rounded-xl p-6 border border-slate-200 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-copper-500/10 border border-copper-500/20 flex items-center justify-center mb-4">
                    <p.icon className="w-4 h-4 text-copper-500" />
                  </div>
                  <h3 className="text-sm font-semibold text-navy-900 mb-2">{p.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{p.body}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Band */}
      <section
        className="relative overflow-hidden py-20 lg:py-24"
        style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #1a3a5c 100%)' }}
      >
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 50% 110%, rgba(199,123,48,0.1) 0%, transparent 60%)',
        }} />
        <div className="container-custom px-10 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-5">
              No damage is too complex.
            </h2>
            <p className="text-slate-400 text-xs lg:text-base mb-7 max-w-lg mx-auto leading-relaxed">
              Whether you're dealing with an emergency right now or planning a renovation,
              Arctiv is the team you want on your side. The first assessment is always on us.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="/contact"
                onClick={(e) => { e.preventDefault(); navigate('/contact'); window.scrollTo(0, 0) }}
                className="bg-copper-500 hover:bg-copper-400 text-white px-7 py-3 rounded-lg text-sm font-semibold transition-all duration-200"
              >
                Get a Free Quote
              </a>
              <a
                href="tel:4168888888"
                className="hidden px-7 py-3 rounded-lg text-sm font-semibold text-white border border-white/30 hover:bg-white/10 transition-all duration-200"
              >
                Call +1 (437) 476 2407
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