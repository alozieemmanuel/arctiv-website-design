import { Phone } from 'lucide-react'

export function EmergencyFloat() {
  return (
    <a
      href="tel:4168888888"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-copper-500 hover:bg-copper-400 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Emergency phone"
    >
      <span className="absolute inset-0 rounded-full bg-copper-500 animate-pulse-ring" />
      <Phone className="w-5 h-5 relative z-10" />
    </a>
  )
}
