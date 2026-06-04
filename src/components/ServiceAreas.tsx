import { useEffect, useRef, useState } from 'react'

const cities = [
  { name: 'Toronto',       lat: 43.6532, lng: -79.3832, primary: true  },
  { name: 'Mississauga',   lat: 43.5890, lng: -79.6441, primary: true  },
  { name: 'Brampton',      lat: 43.7315, lng: -79.7624, primary: true  },
  { name: 'Vaughan',       lat: 43.8361, lng: -79.4980, primary: true  },
  { name: 'Richmond Hill', lat: 43.8828, lng: -79.4403, primary: true  },
  { name: 'Markham',       lat: 43.8561, lng: -79.3370, primary: true  },
  { name: 'Etobicoke',     lat: 43.6205, lng: -79.5132, primary: false },
  { name: 'North York',    lat: 43.7615, lng: -79.4111, primary: false },
  { name: 'Scarborough',   lat: 43.7764, lng: -79.2318, primary: false },
  { name: 'East York',     lat: 43.6918, lng: -79.3322, primary: false },
  { name: 'Oakville',      lat: 43.4675, lng: -79.6877, primary: false },
  { name: 'Burlington',    lat: 43.3255, lng: -79.7990, primary: false },
  { name: 'Pickering',     lat: 43.8384, lng: -79.0868, primary: false },
  { name: 'Ajax',          lat: 43.8509, lng: -79.0204, primary: false },
  { name: 'Whitby',        lat: 43.8975, lng: -78.9429, primary: false },
  { name: 'Newmarket',     lat: 44.0592, lng: -79.4613, primary: false },
  { name: 'Aurora',        lat: 43.9984, lng: -79.4669, primary: false },
  { name: 'King City',     lat: 43.9290, lng: -79.5350, primary: false },
  { name: 'Caledon',       lat: 43.8668, lng: -79.8687, primary: false },
  { name: 'Milton',        lat: 43.5183, lng: -79.8774, primary: false },
]

const ExpandIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0">
    <circle cx="8" cy="8" r="6.5" stroke="#9ca3af" strokeWidth="1.2" />
    <path d="M5 10l3-4 3 4" stroke="#9ca3af" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

declare global {
  interface Window { L: typeof import('leaflet') }
}

export default function ServiceAreas() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<import('leaflet').Map | null>(null)
  const markersRef = useRef<Record<string, import('leaflet').Marker>>({})
  const [active, setActive] = useState<string | null>(null)
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Load Leaflet and init map
  useEffect(() => {
    // Inject Leaflet CSS
    if (!document.getElementById('leaflet-css')) {
      const link = document.createElement('link')
      link.id = 'leaflet-css'
      link.rel = 'stylesheet'
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
      document.head.appendChild(link)
    }

    // Inject Leaflet JS
    if (window.L) { initMap(); return }

    const script = document.createElement('script')
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
    script.onload = initMap
    document.head.appendChild(script)
  }, [])

  function initMap() {
    if (!mapRef.current || mapInstanceRef.current) return
    const L = window.L

    const map = L.map(mapRef.current, {
      center: [43.78, -79.42],
      zoom: 10,
      zoomControl: true,
      scrollWheelZoom: false,
    })

    // Stadia Alidade Smooth — clean light grey tiles, completely free
    L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }
    ).addTo(map)

    mapInstanceRef.current = map

    cities.forEach(city => {
      const size = city.primary ? 14 : 10
    
    const icon = L.divIcon({
        className: '',
        html: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="${city.primary ? 20 : 16}" height="${city.primary ? 32 : 23}">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 9 12 24 12 24S24 21 24 12C24 5.37 18.63 0 12 0z"
              fill="${city.primary ? '#1d4ed8' : '#60a5fa'}"
              stroke="white" stroke-width="1.5"/>
            <circle cx="12" cy="12" r="4.5" fill="white" opacity="0.9"/>
          </svg>
        `,
        iconSize: [city.primary ? 20 : 16, city.primary ? 32 : 23],
        iconAnchor: [city.primary ? 10 : 7, city.primary ? 32 : 23],
        popupAnchor: [0, city.primary ? -44 : -35],
      })

      const marker = L.marker([city.lat, city.lng], { icon })
        .addTo(map)
        .bindPopup(`
          <div style="
            font-family: Inter, sans-serif;
            font-size: 13px;
            font-weight: 600;
            color: #1e3a5f;
            text-align: center;
            padding: 2px 4px;
          ">
            ${city.name}
            ${city.primary
              ? '<div style="font-size:10px;color:#2563eb;font-weight:500;margin-top:2px">Primary Area</div>'
              : ''
            }
          </div>
        `, {
          closeButton: false,
          offset: [0, -(size / 2 + 4)],
        })

      marker.on('click', () => setActive(city.name))
      markersRef.current[city.name] = marker
    })
  }

  function handleChipClick(city: typeof cities[0]) {
    setActive(prev => prev === city.name ? null : city.name)
    const map = mapInstanceRef.current
    const marker = markersRef.current[city.name]
    if (map && marker) {
      map.flyTo([city.lat, city.lng], 13, { animate: true, duration: 0.8 })
      setTimeout(() => marker.openPopup(), 850)
    }
  }

  return (
    <section
      ref={sectionRef}
      id="service-areas"
      className="relative py-24 px-6 md:px-12 lg:px-16 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #f8faff 0%, #eef4ff 100%)' }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #93b4f0 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header */}
        <div
          className="mb-10 text-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 700ms ease, transform 700ms ease',
          }}
        >
          <p className="text-blue-600 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            Service Areas
          </p>
          <h2
            className="text-gray-900 text-3xl md:text-4xl font-semibold mb-4"
            style={{ letterSpacing: '-0.03em' }}
          >
            Serving the Greater Toronto Area
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl mx-auto">
            Arctiv is based in the GTA and currently serves the following communities.
            We're expanding — if your city isn't listed, reach out and we'll let you know.
          </p>
        </div>

        {/* Map */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 800ms ease 200ms',
          }}
        >
          <div
            className="w-full rounded-2xl overflow-hidden border border-blue-100 shadow-xl shadow-blue-900/5 mb-10"
            style={{ height: '440px' }}
          >
            <div ref={mapRef} className="w-full h-full" />
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-6 mb-8 -mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-blue-700 border-2 border-white shadow-sm" />
              <span className="text-gray-500 text-xs">Primary area</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-300 border-2 border-white shadow-sm" />
              <span className="text-gray-500 text-xs">Also serving</span>
            </div>
          </div>

          {/* City chips */}
          <div className="flex flex-wrap gap-2 justify-center max-w-3xl mx-auto">
            {cities.map((city, i) => {
              const isActive = active === city.name
              return (
                <button
                  key={city.name}
                  onClick={() => handleChipClick(city)}
                  style={{
                    opacity: visible ? 1 : 0,
                    transition: `opacity 500ms ease ${i * 40}ms`,
                  }}
                  className={`
                    px-4 py-2 rounded-full text-xs font-medium border transition-all duration-200
                    ${isActive
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-200'
                      : city.primary
                        ? 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600'
                    }
                  `}
                >
                  {city.name}
                </button>
              )
            })}
          </div>

          {/* Expanding notice */}
          <div
            className="flex items-center justify-center gap-2 mt-6"
            style={{
              opacity: visible ? 1 : 0,
              transition: 'opacity 600ms ease 900ms',
            }}
          >
            <ExpandIcon />
            <p className="text-gray-400 text-xs">
              Expanding soon — more cities coming in 2025.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}