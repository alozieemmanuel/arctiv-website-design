import { useState } from 'react'

const navLinks = ['About', 'Services', 'Projects', 'Contact']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className="relative z-10 px-6 md:px-12 lg:px-16 pt-6">

      <div className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
        {/* Logo — PNG extracted from brand image */}
        <div className="flex items-center gap-2">
          <img src="artiv-logo.png" alt="Artiv logo" className="h-8 w-8 object-contain" />
        </div>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-white hover:text-gray-300 transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <button className="hidden md:block bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-200">
          Get a Free Quote
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-9 h-9 rounded-lg"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 liquid-glass rounded-xl px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-white hover:text-gray-300 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <div className="border-t border-white/10 pt-3">
            <button className="w-full bg-white text-black px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-200">
              Get a Free Quote
            </button>
          </div>
        </div>
      )}
    </nav >
  )
}
