import { useState, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

/* ── Icons ─────────────────────────────────────────────────────────────────── */
const PhoneIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
    <path d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-7.18 0-13-5.82-13-13V3.5z" fill="#C77B30" />
  </svg>
)
const MailIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" fill="#C77B30" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" fill="#C77B30" />
  </svg>
)
const LocationIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" fill="#C77B30" />
  </svg>
)
const ClockIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" fill="#C77B30" />
  </svg>
)

/* ── FadeIn ─────────────────────────────────────────────────────────────────── */
function useFadeIn() {
  const [v, setV] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return { ref, visible: v }
}

/* ── Service options ─────────────────────────────────────────────────────── */
const serviceOptions = [
  'Water Damage', 'Fire & Smoke Damage', 'Mould Remediation',
  'Structural Drying', 'Storm Damage', 'Sewage Cleanup',
  'Reconstruction', 'General Contracting', 'Not sure — need assessment',
]

const serviceAreas = [
  'Toronto', 'Mississauga', 'Brampton', 'Vaughan', 'Markham',
  'Richmond Hill', 'Oakville', 'Burlington', 'Etobicoke', 'Scarborough',
  'North York', 'Ajax', 'Pickering', 'Whitby', 'Oshawa',
]

/* ── Input / Textarea / Select components ────────────────────────────────── */
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-[0.12em] mb-2">{label}</label>
      {children}
    </div>
  )
}

const inputCls = "w-full bg-transparent text-white text-sm placeholder-gray-600 px-4 py-3 rounded-xl outline-none transition-all duration-200"
const inputStyle = { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function ContactPage() {
  const hero = useFadeIn()
  const form = useFadeIn()
  const info = useFadeIn()
  const areas = useFadeIn()

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', urgency: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(p => ({ ...p, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setSubmitted(true)
  }

  const focusStyle = {
    onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      e.currentTarget.style.borderColor = 'rgba(199,123,48,0.5)'
      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(199,123,48,0.08)'
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
      e.currentTarget.style.boxShadow = 'none'
    },
  }

  return (
    <main style={{ background: '#060d1a', minHeight: '100vh' }}>
      {/* Navbar */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 z-10"><Navbar /></div>
        <div className="h-24" style={{ background: '#060d1a' }} />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-6 md:px-12 lg:px-16" style={{ background: 'linear-gradient(135deg, #060d1a 0%, #0B1F3A 60%, #060d1a 100%)' }}>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div
          ref={hero.ref}
          className="max-w-7xl mx-auto"
          style={{ opacity: hero.visible ? 1 : 0, transform: hero.visible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 700ms ease, transform 700ms ease' }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: '#C77B30' }}>Get In Touch</p>
          <h1 className="text-white text-4xl md:text-5xl font-semibold mb-5" style={{ letterSpacing: '-0.03em' }}>
            Let's talk about
            <br />
            <span className="text-gray-500">your property.</span>
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
            Whether you have an active emergency, need a free quote, or just want to understand your options — reach out and we'll respond the same day.
          </p>

          {/* Quick contact strip */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="tel:4168888888" className="flex items-center gap-3 px-5 py-3 rounded-xl text-sm font-bold text-white transition-all duration-200"
              style={{ background: '#C77B30' }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = '#d4914d')}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = '#C77B30')}
            >
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                <path d="M1.5 2.5A1.5 1.5 0 013 1h1a1.5 1.5 0 011.5 1.2l.5 2.5a1.5 1.5 0 01-1 1.7l-.7.2a9 9 0 004.8 4.8l.2-.7a1.5 1.5 0 011.7-1l2.5.5A1.5 1.5 0 0115 12v1a1.5 1.5 0 01-1.5 1.5H12C5.6 14.5 1.5 9.4 1.5 4V2.5z" fill="white" />
              </svg>
              Emergency: (416) 888-8888
            </a>
            <a href="mailto:info@arctiv.ca" className="flex items-center gap-3 px-5 py-3 rounded-xl text-sm text-gray-300 transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'white')}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = '')}
            >
              info@arctiv.ca
            </a>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 px-6 md:px-12 lg:px-16" style={{ background: '#0B1F3A' }}>
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-5 lg:gap-16">

          {/* Form — 3 cols */}
          <div
            ref={form.ref}
            className="lg:col-span-3 mb-12 lg:mb-0"
            style={{ opacity: form.visible ? 1 : 0, transform: form.visible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 700ms ease, transform 700ms ease' }}
          >
            <h2 className="text-white text-2xl font-semibold mb-2" style={{ letterSpacing: '-0.02em' }}>Send us a message</h2>
            <p className="text-gray-500 text-sm mb-8">We respond to all inquiries within an hour during business hours, and immediately to emergencies.</p>

            {submitted ? (
              <div className="rounded-2xl p-10 text-center" style={{ background: 'rgba(199,123,48,0.06)', border: '1px solid rgba(199,123,48,0.2)' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: 'rgba(199,123,48,0.15)' }}>
                  <svg viewBox="0 0 20 20" fill="none" className="w-7 h-7">
                    <path d="M4 10l4 4 8-8" stroke="#C77B30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Message received</h3>
                <p className="text-gray-400 text-sm">Thanks, {formData.name.split(' ')[0]}. We'll be in touch shortly. If this is an emergency, please call (416) 888-8888 right now.</p>
                <button onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', service: '', urgency: '', message: '' }) }}
                  className="mt-6 text-sm text-gray-500 hover:text-gray-300 transition-colors underline underline-offset-2">
                  Send another message
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Full Name *">
                    <input name="name" value={formData.name} onChange={handleChange} placeholder="Jane Smith"
                      className={inputCls} style={inputStyle} {...focusStyle} />
                  </Field>
                  <Field label="Email Address *">
                    <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="jane@email.com"
                      className={inputCls} style={inputStyle} {...focusStyle} />
                  </Field>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Phone Number">
                    <input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="(416) 000-0000"
                      className={inputCls} style={inputStyle} {...focusStyle} />
                  </Field>
                  <Field label="Service Needed">
                    <select name="service" value={formData.service} onChange={handleChange}
                      className={inputCls} style={{ ...inputStyle, cursor: 'pointer' }} {...focusStyle}>
                      <option value="" disabled>Select a service…</option>
                      {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </Field>
                </div>

                <Field label="Urgency">
                  <div className="grid grid-cols-3 gap-2">
                    {(['Emergency — now', 'Urgent — today', 'Non-urgent quote'] as const).map(u => (
                      <button
                        key={u}
                        onClick={() => setFormData(p => ({ ...p, urgency: u }))}
                        className="text-xs py-3 px-2 rounded-xl transition-all duration-200 text-center"
                        style={formData.urgency === u
                          ? { background: 'rgba(199,123,48,0.2)', border: '1px solid rgba(199,123,48,0.5)', color: '#d4914d' }
                          : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#6b7280' }
                        }
                      >
                        {u}
                      </button>
                    ))}
                  </div>
                </Field>

                <Field label="Message *">
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={5}
                    placeholder="Tell us about your situation — what happened, when, and the property address if you have one."
                    className={inputCls + ' resize-none'} style={inputStyle} {...focusStyle} />
                </Field>

                <button
                  onClick={handleSubmit}
                  disabled={!formData.name || !formData.email || !formData.message}
                  className="w-full text-white font-bold py-4 rounded-xl text-sm transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{ background: '#C77B30' }}
                  onMouseEnter={e => { if (formData.name && formData.email && formData.message) (e.currentTarget as HTMLButtonElement).style.background = '#d4914d' }}
                  onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = '#C77B30')}
                >
                  Send Message
                </button>
                <p className="text-gray-600 text-xs text-center">For emergencies, always call (416) 888-8888 directly.</p>
              </div>
            )}
          </div>

          {/* Info — 2 cols */}
          <div
            ref={info.ref}
            className="lg:col-span-2"
            style={{ opacity: info.visible ? 1 : 0, transform: info.visible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 700ms ease 200ms, transform 700ms ease 200ms' }}
          >
            <h2 className="text-white text-2xl font-semibold mb-8" style={{ letterSpacing: '-0.02em' }}>Contact info</h2>

            <div className="space-y-5 mb-10">
              {[
                { icon: <PhoneIcon />, label: 'Phone', value: '(416) 888-8888', sub: '24/7 Emergency Line', href: 'tel:4168888888' },
                { icon: <MailIcon />, label: 'Email', value: 'info@arctiv.ca', sub: 'Replies within 4 hours', href: 'mailto:info@arctiv.ca' },
                { icon: <LocationIcon />, label: 'Service Area', value: 'Greater Toronto Area', sub: 'Ontario, Canada', href: undefined },
                { icon: <ClockIcon />, label: 'Hours', value: '24/7 Emergency', sub: 'Mon–Fri 8am–6pm for quotes', href: undefined },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(199,123,48,0.1)' }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-500 text-[10px] font-semibold uppercase tracking-[0.15em] mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white text-sm font-medium hover:text-copper-light transition-colors" style={{ color: 'white' }}
                        onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#C77B30')}
                        onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'white')}>
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white text-sm font-medium">{item.value}</p>
                    )}
                    <p className="text-gray-500 text-xs mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency card */}
            <div className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, rgba(234,88,12,0.1) 0%, rgba(199,123,48,0.06) 100%)', border: '1px solid rgba(234,88,12,0.2)' }}>
              <div className="flex items-center gap-2 mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                </span>
                <p className="text-orange-400 text-xs font-semibold uppercase tracking-[0.2em]">Active Emergency?</p>
              </div>
              <p className="text-white font-semibold text-lg mb-1" style={{ letterSpacing: '-0.02em' }}>Don't fill out a form.</p>
              <p className="text-gray-400 text-xs leading-relaxed mb-4">Call us immediately. Every minute matters when water, fire, or sewage is active in your property.</p>
              <a href="tel:4168888888" className="block w-full text-center text-white font-bold py-3.5 rounded-xl text-sm transition-all duration-200"
                style={{ background: '#C77B30' }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = '#d4914d')}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = '#C77B30')}
              >
                Call (416) 888-8888
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-6 md:px-12 lg:px-16" style={{ background: '#060d1a' }}>
        <div
          ref={areas.ref}
          className="max-w-7xl mx-auto"
          style={{ opacity: areas.visible ? 1 : 0, transform: areas.visible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 700ms ease, transform 700ms ease' }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3 text-gray-500">Where We Work</p>
          <h2 className="text-white text-2xl font-semibold mb-8" style={{ letterSpacing: '-0.03em' }}>
            Service Areas <span className="text-gray-500">— Greater Toronto Area</span>
          </h2>
          <div className="flex flex-wrap gap-2">
            {serviceAreas.map(a => (
              <span key={a} className="text-sm px-4 py-2 rounded-full text-gray-400"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                {a}
              </span>
            ))}
            <span className="text-sm px-4 py-2 rounded-full text-gray-500 italic"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
              + surrounding areas
            </span>
          </div>
          <p className="text-gray-600 text-xs mt-4">Not sure if we cover your area? Call us — if we can't help, we'll point you in the right direction.</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}