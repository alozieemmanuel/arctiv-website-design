import { motion } from 'framer-motion'
import { ChevronDown} from 'lucide-react'
import { navigate } from '@/lib/utils'

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4'

export function HeroSection() {
  return (
    <section className="relative w-full md:min-h-[100dvh] min-h-[90dvh] flex items-end overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(to bottom, rgba(11,31,58,0.3) 0%, rgba(11,31,58,0.7) 60%, rgba(11,31,58,0.85) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full container-custom pb-16 pt-32 pl-7 md:pl-20">
        {/* Trust Badges */}
        <motion.div
          className="flex flex-wrap gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >

        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-3xl md:text-3xl lg:text-4xl font-bold text-white leading-[1.1] tracking-tight mb-6 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Restoring Properties.
          <br />
          <span className="text-copper-400">Building Trust.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-xs lg:text-base text-slate-300 max-w-xl mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Canada's trusted partner for emergency restoration and full-scale
          renovation. When disaster strikes, Arctiv responds by restoring
          your property to its former best, with care and precision.
        </motion.p>

        {/* CTA Group */}
        <motion.div
          className="flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault()
              navigate('/contact')
              window.scrollTo(0, 0)
            }}
            className="bg-copper-500 hover:bg-copper-400 text-white px-8 py-3.5 rounded-lg text-xs mb-5 font-semibold transition-all duration-200 shadow-md hover:shadow-lg tracking-wide"
          >
            Request an Assessment
          </a>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="hidden lg:inline-flex mb-5 px-8 py-3.5 rounded-lg text-xs font-semibold text-white border border-white/30 hover:bg-white/10 transition-all duration-200"
          >
            Our Services
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <ChevronDown className="w-6 h-6 text-white/50 animate-bounce-subtle" />
      </motion.div>
    </section>
  )
}
