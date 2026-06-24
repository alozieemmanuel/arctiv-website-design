import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react'
import { ScrollReveal } from '@/components/ScrollReveal'
import { SectionLabel } from '@/components/SectionLabel'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { EmergencyFloat } from '@/components/EmergencyFloat'

const serviceOptions = [
  'Water Damage',
  'Fire & Smoke Damage',
  'Mould Remediation',
  'Structural Drying',
  'Storm Damage',
  'Sewage Cleanup',
  'Reconstruction',
  'General Contracting',
  'Not sure — need assessment',
]

const urgencyOptions = [
  'Emergency',
  'Urgent',
  'Quote',
]

const serviceAreas = [
  'Toronto', 'Mississauga', 'Brampton', 'Vaughan', 'Markham',
  'Richmond Hill', 'Oakville', 'Burlington', 'Etobicoke', 'Scarborough',
  'North York', 'Ajax', 'Pickering', 'Whitby', 'Oshawa',
]

// ── Replace this with your deployed Apps Script URL ──────────────────────────
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby2_BL2jovHArAR77WrHErdVs0EQGU_2rFiM6uAjcBnY3gXWTYmMCyZq5ppOD3qDsWN/exec'

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', urgency: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setLoading(true)
    setError('')
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, submittedAt: new Date().toISOString() }),
      })
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please call us directly at +1 (437) 476 2407.')
    } finally {
      setLoading(false)
    }
  }

  const labelCls = 'block text-[10px] font-semibold text-slate-400 uppercase tracking-[0.12em] mb-1.5'
  const inputCls = 'w-full bg-white text-navy-900 text-sm placeholder:text-slate-300 px-4 py-3 rounded-lg outline-none transition-all duration-200 border border-slate-200 focus:border-copper-500 focus:ring-2 focus:ring-copper-500/10'
  const selectCls = inputCls + ' cursor-pointer appearance-none'

  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />

      {/* Hero */}
      <section
        className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20 px-3 md:px-10"
        style={{ background: 'linear-gradient(160deg, #0B1F3A 0%, #1a3a5c 60%, #0B1F3A 100%)' }}
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
            <SectionLabel text="Get In Touch" light />
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white tracking-tight mb-4">
              Let's talk about
              <br />
              <span className="text-slate-400">your property.</span>
            </h1>
            <p className="text-slate-300 text-xs lg:text-base max-w-lg leading-relaxed mb-6">
              Whether you have an active emergency, need an assessment, or just want to understand
              your options, reach out and we'll respond the same day.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:4168888888"
                className="inline-flex items-center gap-2 bg-copper-500 hover:bg-copper-400 text-white px-5 py-2.5 rounded-lg text-xs font-semibold transition-all duration-200"
              >
                <Phone className="w-3.5 h-3.5" />
                Call: +1 (437) 476 2407
              </a>
              <a
                href="mailto:contact@arctiv.ca"
                className="hidden inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs text-slate-300 border border-white/20 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                <Mail className="w-3.5 h-3.5" />
                contact@arctiv.ca
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-slate-50 py-10 md:py-16 lg:py-20 px-2 md:px-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">

            {/* ── Form ─────────────────────────────────────────────────── */}
            <ScrollReveal className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

                {/* Form header */}
                <div className="px-6 md:px-8 py-6 border-b border-slate-100">
                  <h2 className="text-base font-semibold text-navy-900 tracking-tight">Send us a message</h2>
                  <p className="text-slate-400 text-xs mt-1">
                    We respond within an hour during business hours, and immediately to emergencies.
                  </p>
                </div>

                <div className="md:px-8 px-6 py-7">
                  {submitted ? (
                    <div className="py-10 text-center">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-copper-500/10">
                        <CheckCircle2 className="w-6 h-6 text-copper-500" />
                      </div>
                      <h3 className="text-navy-900 font-semibold text-base mb-2">Message received</h3>
                      <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
                        Thanks, {formData.name.split(' ')[0]}. We'll be in touch shortly. For emergencies, call{' '}
                        <a href="tel:+14374762407" className="text-copper-500 font-medium">+1 (437) 476 2407</a> now.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false)
                          setFormData({ name: '', email: '', phone: '', service: '', urgency: '', message: '' })
                        }}
                        className="mt-5 text-xs text-slate-400 hover:text-navy-900 underline underline-offset-2 transition-colors"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">

                      {/* Row 1 */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className={labelCls}>Full Name <span className="text-copper-500">*</span></label>
                          <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Jane Smith"
                            className={inputCls}
                            required
                          />
                        </div>
                        <div>
                          <label className={labelCls}>Email Address <span className="text-copper-500">*</span></label>
                          <input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="jane@email.com"
                            className={inputCls}
                            required
                          />
                        </div>
                      </div>

                      {/* Row 2 */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className={labelCls}>Phone Number</label>
                          <input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(416) 000-0000"
                            className={inputCls}
                          />
                        </div>
                        <div className="relative">
                          <label className={labelCls}>Service Needed</label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className={selectCls}
                          >
                            <option value="" disabled>Select a service...</option>
                            {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                          </select>
                          {/* Custom chevron */}
                          <svg
                            className="absolute right-3 top-[2.35rem] w-4 h-4 text-slate-400 pointer-events-none"
                            viewBox="0 0 16 16" fill="none"
                          >
                            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>

                      {/* Urgency */}
                      <div className='hidden'>
                        <label className={labelCls}>Urgency Level</label>
                        <div className="grid grid-cols-3 gap-2">
                          {([
                            { label: 'Emergency', sub: 'Need help now', color: 'text-red-600', activeBg: 'bg-red-500/8 border-red-400' },
                            { label: 'Urgent', sub: 'Within today', color: 'text-orange-600', activeBg: 'bg-orange-500/8 border-orange-400' },
                            { label: 'Quote', sub: 'No rush', color: 'text-slate-600', activeBg: 'bg-copper-500/8 border-copper-400' },
                          ] as const).map((u) => (
                            <button
                              key={u.label}
                              type="button"
                              onClick={() => setFormData((p) => ({ ...p, urgency: u.label }))}
                              className={`py-3 px-2 rounded-lg transition-all duration-200 text-center border ${
                                formData.urgency === u.label
                                  ? `${u.activeBg} border-2`
                                  : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              <p className={`text-xs font-semibold ${formData.urgency === u.label ? u.color : 'text-slate-600'}`}>
                                {u.label}
                              </p>
                              <p className="text-[10px] text-slate-400 mt-0.5">{u.sub}</p>
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="relative md:hidden">
                          <label className={labelCls}>Urgency Level</label>
                          <select
                            name="urgency"
                            value={formData.urgency}
                            onChange={handleChange}
                            className={selectCls}
                          >
                            <option value="" disabled>Select urgency level...</option>
                            {urgencyOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                          </select>
                          {/* Custom chevron */}
                          <svg
                            className="absolute right-3 top-[2.35rem] w-4 h-4 text-slate-400 pointer-events-none"
                            viewBox="0 0 16 16" fill="none"
                          >
                            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>

                      {/* Message */}
                      <div>
                        <label className={labelCls}>Your Message <span className="text-copper-500">*</span></label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Tell us about your situation — what happened, when, and the property address if you have one."
                          className={inputCls + ' resize-none'}
                          required
                        />
                      </div>

                      {error && (
                        <p className="text-red-500 text-xs text-center">{error}</p>
                      )}

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-copper-500 hover:bg-copper-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-lg text-sm transition-all duration-200 flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          <>
                            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                            </svg>
                            Sending...
                          </>
                        ) : 'Send Message'}
                      </button>

                      <p className="text-slate-400 text-[10px] text-center">
                        For emergencies, always call{' '}
                        <a href="tel:+14374762407" className="text-copper-500 font-medium">+1 (437) 476 2407</a> directly.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </ScrollReveal>

            {/* ── Info sidebar ─────────────────────────────────────────── */}
            <ScrollReveal delay={0.2} className="lg:col-span-2 space-y-4">

              <div>
                <h2 className="text-base font-semibold text-navy-900 mb-4 tracking-tight">Contact info</h2>
                <div className="space-y-2.5">
                  {[
                    { icon: Phone, label: 'Phone', value: '+1 (437) 476 2407', sub: '24/7 Emergency Line', href: 'tel:+14374762407' },
                    { icon: Mail, label: 'Email', value: 'contact@arctiv.ca', sub: 'Replies within 4 hours', href: 'mailto:contact@arctiv.ca' },
                    { icon: MapPin, label: 'Office Address', value: '50 Steeles Avenue East, Milton, ON L9T 4W9, Canada.', href: undefined },
                    { icon: Clock, label: 'Hours', value: '24/7 Emergency', sub: 'Mon–Fri 8am–6pm for quotes', href: undefined },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200">
                      <div className="w-8 h-8 rounded-lg bg-copper-500/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-copper-500" />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.12em] mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-navy-900 text-sm font-medium hover:text-copper-500 transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-navy-900 text-sm font-medium">{item.value}</p>
                        )}
                        <p className="text-slate-400 text-xs mt-0.5">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency card */}
              <div className="rounded-xl p-5 border border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50">
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                  </span>
                  <p className="text-orange-600 text-[10px] font-semibold uppercase tracking-[0.15em]">Active Emergency?</p>
                </div>
                <p className="text-navy-900 font-semibold text-sm mb-1">Don't fill out a form.</p>
                <p className="text-slate-500 text-xs leading-relaxed mb-4">
                  Call us immediately. Every minute matters when water, fire, or sewage is active in your property.
                </p>
                <a
                  href="tel:+14374762407"
                  className="block w-full text-center bg-copper-500 hover:bg-copper-400 text-white font-semibold py-3 rounded-lg text-sm transition-all duration-200"
                >
                  Call +1 (437) 476 2407
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-white py-14 px-3 md:px-10">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-base font-semibold text-navy-900 mb-1 tracking-tight">
              Service Areas <span className="text-slate-400 font-normal">— Greater Toronto Area</span>
            </h2>
            <p className="text-slate-400 text-xs mb-5">
              Not sure if we cover your area? Call us — if we can't help, we'll point you in the right direction.
            </p>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((a) => (
                <span key={a} className="text-xs px-3 py-1.5 rounded-lg bg-slate-50 text-slate-600 border border-slate-200">
                  {a}
                </span>
              ))}
              <span className="text-xs px-3 py-1.5 rounded-lg bg-slate-50 text-slate-400 italic border border-slate-100">
                + surrounding areas
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <EmergencyFloat />
    </div>
  )
}