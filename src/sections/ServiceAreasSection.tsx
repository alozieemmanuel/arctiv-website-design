import { useEffect, useRef, useState } from 'react'
import { ScrollReveal } from '@/components/ScrollReveal'
import { SectionLabel } from '@/components/SectionLabel'

const cities = [
  { name: 'Toronto', lat: 43.6532, lng: -79.3832, primary: true },
  { name: 'Mississauga', lat: 43.5890, lng: -79.6441, primary: true },
  { name: 'Brampton', lat: 43.7315, lng: -79.7624, primary: true },
  { name: 'Vaughan', lat: 43.8361, lng: -79.4980, primary: true },
  { name: 'Richmond Hill', lat: 43.8828, lng: -79.4403, primary: true },
  { name: 'Markham', lat: 43.8561, lng: -79.3370, primary: true },
  { name: 'Etobicoke', lat: 43.6205, lng: -79.5132, primary: true },
  { name: 'North York', lat: 43.7615, lng: -79.4111, primary: true },
  { name: 'Scarborough', lat: 43.7764, lng: -79.2318, primary: true },
  { name: 'Oakville', lat: 43.4675, lng: -79.6877, primary: true },
  { name: 'Burlington', lat: 43.3255, lng: -79.7990, primary: true },
  { name: 'Pickering', lat: 43.8384, lng: -79.0868, primary: true },
  { name: 'Ajax', lat: 43.8509, lng: -79.0204, primary: true },
  { name: 'Whitby', lat: 43.8975, lng: -78.9429, primary: true },
  { name: 'Newmarket', lat: 44.0592, lng: -79.4613, primary: true },
  { name: 'Aurora', lat: 43.9984, lng: -79.4669, primary: true },
  { name: 'Milton', lat: 43.5183, lng: -79.8774, primary: true },
  { name: 'Caledon', lat: 43.8668, lng: -79.8687, primary: true },
  { name: 'King City', lat: 43.9290, lng: -79.5350, primary: false },
]

export function ServiceAreasSection() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<unknown>(null)
  const markersRef = useRef<Record<string, unknown>>({})
  const [active, setActive] = useState<string | null>(null)

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
    const initMap = () => {
      if (!mapRef.current || mapInstanceRef.current) return
      const L = (window as unknown as { L: typeof import('leaflet') }).L
      if (!L) return

      const map = L.map(mapRef.current, {
        center: [43.78, -79.42],
        zoom: 10,
        zoomControl: true,
        scrollWheelZoom: false,
      })

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 18,
      }).addTo(map)

      mapInstanceRef.current = map

      cities.forEach((city) => {
        const icon = L.divIcon({
          className: '',
          html: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="${city.primary ? 20 : 16}" height="${city.primary ? 32 : 26}">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 9 12 24 12 24S24 21 24 12C24 5.37 18.63 0 12 0z"
                fill="${city.primary ? '#C77B30' : '#2d5a87'}"
                stroke="white" stroke-width="1.5"/>
              <circle cx="12" cy="12" r="4.5" fill="white" opacity="0.9"/>
            </svg>
          `,
          iconSize: [city.primary ? 20 : 16, city.primary ? 32 : 26],
          iconAnchor: [city.primary ? 10 : 8, city.primary ? 32 : 26],
          popupAnchor: [0, city.primary ? -36 : -30],
        })

        const marker = L.marker([city.lat, city.lng], { icon })
          .addTo(map)
          .bindPopup(
            `<div style="font-family: Inter, sans-serif; font-size: 13px; font-weight: 600; color: #1a2b3c; text-align: center; padding: 2px 4px;">${city.name}</div>`,
            { closeButton: false }
          )

        marker.on('click', () => setActive(city.name))
        markersRef.current[city.name] = marker
      })
    }

    if ((window as unknown as { L?: unknown }).L) {
      initMap()
    } else {
      const script = document.createElement('script')
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
      script.onload = initMap
      document.head.appendChild(script)
    }

    return () => {
      if (mapInstanceRef.current) {
        (mapInstanceRef.current as { remove: () => void }).remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  const handleChipClick = (city: typeof cities[0]) => {
    setActive((prev) => (prev === city.name ? null : city.name))
    const map = mapInstanceRef.current as { flyTo: (center: [number, number], zoom: number, options: object) => void; closePopup: () => void } | null
    const marker = markersRef.current[city.name] as { openPopup: () => void } | undefined
    if (map && marker) {
      map.flyTo([city.lat, city.lng], 13, { animate: true, duration: 0.8 })
      setTimeout(() => marker.openPopup(), 850)
    }
  }

  return (
    <section id="service-areas" className="bg-slate-100 py-24 lg:py-32">
      <div className="container-custom">
        {/* Header */}
        <ScrollReveal className="text-center mb-10 px-3">
          <SectionLabel text="Service Areas" centered />
          <h2 className="text-3xl lg:text-4xl font-semibold text-navy-900 tracking-tight mb-4">
            Serving the Greater Toronto Area
          </h2>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto">
            Arctiv is based in the GTA and currently serves the following communities.
            We're expanding — if your city isn't listed, reach out and we'll let you know.
          </p>
        </ScrollReveal>

        {/* Map */}
        <ScrollReveal className="mb-8 px-0 md:px-20">
          <div className="w-full rounded-xl overflow-hidden border border-slate-200 shadow-md" style={{ height: '480px' }}>
            <div ref={mapRef} className="w-full h-full" />
          </div>
        </ScrollReveal>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-copper-500 border-2 border-white shadow-sm" />
            <span className="text-slate-500 text-xs">Primary area</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-navy-700 border-2 border-white shadow-sm" />
            <span className="text-slate-500 text-xs">Also serving</span>
          </div>
        </div>

        {/* City chips */}
        <div className="flex flex-wrap gap-2 justify-center px-2 max-w-4xl mx-auto">
          {cities.map((city) => {
            const isActive = active === city.name
            return (
              <button
                key={city.name}
                onClick={() => handleChipClick(city)}
                className={`
                  px-4 py-2 rounded-full text-xs font-medium border transition-all duration-200
                  ${isActive
                    ? 'bg-copper-500 text-white border-copper-500 shadow-sm'
                    : city.primary
                      ? 'bg-copper-500/10 text-copper-600 border-copper-200 hover:bg-copper-500/20'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-copper-300'
                  }
                `}
              >
                {city.name}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
