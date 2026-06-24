import { motion } from 'framer-motion'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ScrollReveal'
import { SectionLabel } from '@/components/SectionLabel'
import { navigate } from '@/lib/utils'

interface Service {
  id: string
  slug: string
  icon: React.ReactNode
  title: string
  tagline: string
  description: string
  details: string[]
}

const LinkArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
    <path d="M3 13 L13 3 M6 3 L13 3 L13 10" stroke="#b87333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const WaterIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <path
      d="M20 6 C20 6 8 18 8 26 C8 32.627 13.373 38 20 38 C26.627 38 32 32.627 32 26 C32 18 20 6 20 6Z"
      stroke="#b87333" strokeWidth="2" fill="rgba(184,115,51,0.12)"
    />
    <path d="M14 28 C14 28 16 24 20 24 C24 24 26 28 26 28" stroke="#b87333" strokeWidth="1.5" strokeLinecap="round" fill="none" />
  </svg>
)

const FireIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <path
      d="M20 36 C13 36 8 31 8 25 C8 19 12 16 14 12 C14 12 14 17 17 18 C17 18 15 14 20 10 C20 10 19 16 23 18 C25 15 24 12 24 12 C27 16 32 19 32 25 C32 31 27 36 20 36Z"
      stroke="#b87333" strokeWidth="2" fill="rgba(184,115,51,0.12)"
    />
    <path d="M20 30 C17 30 15 28 15 26 C15 23 17 22 18 20 C18 20 18 23 20 24 C22 23 22 20 22 20 C24 22 25 23 25 26 C25 28 23 30 20 30Z" stroke="#b87333" strokeWidth="1.5" fill="rgba(184,115,51,0.12)" />
  </svg>
)

const MouldIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <circle cx="20" cy="20" r="3" stroke="#b87333" strokeWidth="1.5" fill="rgba(184,115,51,0.15)" />
    <circle cx="12" cy="14" r="2.5" stroke="#b87333" strokeWidth="1.5" fill="rgba(184,115,51,0.12)" />
    <circle cx="28" cy="14" r="2.5" stroke="#b87333" strokeWidth="1.5" fill="rgba(184,115,51,0.12)" />
    <circle cx="12" cy="26" r="2.5" stroke="#b87333" strokeWidth="1.5" fill="rgba(184,115,51,0.12)" />
    <circle cx="28" cy="26" r="2.5" stroke="#b87333" strokeWidth="1.5" fill="rgba(184,115,51,0.12)" />
    <circle cx="20" cy="10" r="2" stroke="#b87333" strokeWidth="1.5" fill="rgba(184,115,51,0.08)" />
    <circle cx="20" cy="30" r="2" stroke="#b87333" strokeWidth="1.5" fill="rgba(184,115,51,0.08)" />
  </svg>
)

const DryingIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <path d="M6 20 Q10 15 14 20 Q18 25 22 20 Q26 15 30 20 Q34 25 38 20" stroke="#b87333" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M6 26 Q10 21 14 26 Q18 31 22 26 Q26 21 30 26 Q34 31 38 26" stroke="#b87333" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
    <path d="M20 8 L20 14 M16 10 L20 8 L24 10" stroke="#b87333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
)

const RepairsIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <path d="M8 32 L20 12 L32 32 Z" stroke="#b87333" strokeWidth="2" fill="rgba(184,115,51,0.12)" strokeLinejoin="round" />
    <path d="M13 32 L27 32" stroke="#b87333" strokeWidth="2" strokeLinecap="round" />
    <path d="M16 26 L24 26" stroke="#b87333" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    <path d="M22 18 L22 26 M25 18 L25 26" stroke="#b87333" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const ContractingIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <path d="M6 34 L6 22 L14 14 L26 14 L34 22 L34 34 Z" stroke="#b87333" strokeWidth="2" fill="rgba(184,115,51,0.08)" strokeLinejoin="round" />
    <path d="M14 34 L14 26 L26 26 L26 34" stroke="#b87333" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(184,115,51,0.08)" />
    <path d="M4 34 L36 34" stroke="#b87333" strokeWidth="2" strokeLinecap="round" />
    <circle cx="20" cy="9" r="4" stroke="#b87333" strokeWidth="1.5" fill="rgba(184,115,51,0.12)" />
    <path d="M17 9 L23 9 M20 6 L20 12" stroke="#b87333" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const services: Service[] = [
  {
    id: 'water',
    slug: '/services/water-damage',
    icon: <WaterIcon />,
    title: 'Water Damage',
    tagline: 'Fast response. Full recovery.',
    description: 'Burst pipes, flooding, appliance leaks. We extract water and dry your property fast to stop further damage.',
    details: [
      'Emergency water extraction',
      'Structural drying with dehumidifier systems',
      'Moisture mapping & monitoring',
      'Sewage backup cleanup & sanitization',
    ],
  },
  {
    id: 'fire',
    slug: '/services/fire-damage',
    icon: <FireIcon />,
    title: 'Fire & Smoke Damage',
    tagline: 'From board-up to rebuild.',
    description: 'We secure the site, clean soot and smoke from all surfaces, eliminate odour, and restore the property.',
    details: [
      'Emergency board-up & site securing',
      'Soot and smoke residue removal',
      'Odour neutralization & air filtration systems',
      'Full structural and cosmetic restoration',
    ],
  },
  {
    id: 'mould',
    slug: '/services/mould-remediation',
    icon: <MouldIcon />,
    title: 'Mould Remediation',
    tagline: 'Safe, certified, thorough.',
    description: 'Mould spreads fast and hides behind walls. We contain, remove, and test to Health Canada standards.',
    details: [
      'Certified mould inspection & testing',
      'Containment zones & negative air pressure',
      'HEPA air filtration & surface treatment',
      'Clearance testing & documentation',
    ],
  },
  {
    id: 'drying',
    slug: '/services/structural-drying',
    icon: <DryingIcon />,
    title: 'Structural Drying',
    tagline: 'Precision drying. Zero compromise.',
    description: 'We dry walls, floors, and cavities to proper moisture levels using industrial equipment and daily monitoring.',
    details: [
      'Psychrometric & moisture assessments',
      'High-capacity industrial dehumidification systems',
      'Daily monitoring & drying logs',
      'IICRC S500 standard compliance',
    ],
  },
  {
    id: 'repairs',
    slug: '/services/repairs-renovation',
    icon: <RepairsIcon />,
    title: 'Repairs & Renovation',
    tagline: 'Restore. Rebuild. Reimagine.',
    description: 'We repair what was damaged and renovate what you want improved. From drywall to full kitchen rebuilds.',
    details: [
      'Post-loss structural repairs',
      'Drywall, flooring & millwork replacement',
      'Full kitchen & bathroom renovations',
      'Design-build & project management',
    ],
  },
  {
    id: 'contracting',
    slug: '/services/general-contracting',
    icon: <ContractingIcon />,
    title: 'General Contracting',
    tagline: 'One team. Every trade.',
    description: 'We coordinate every trade on your project, from demolition to finishing, for both residential and commercial work.',
    details: [
      'Multi-trade project coordination',
      'New construction & additions',
      'Commercial tenant improvements',
      'Insurance & third-party reporting',
    ],
  },
]

function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <a
        href={service.slug}
        onClick={(e) => {
          e.preventDefault()
          navigate(service.slug)
          window.scrollTo(0, 0)
        }}
        className="group block h-full"
      >
        <div className="relative rounded-xl border border-slate-200 p-6 h-full hover:border-copper-300 hover:shadow-md transition-all duration-300 overflow-hidden">

          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-copper-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

          {/* Icon row + arrow */}
          <div className="flex items-start justify-between mb-5">
            <div>{service.icon}</div>
            <div className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-copper-300 group-hover:bg-copper-50 transition-all duration-200">
              <LinkArrowIcon />
            </div>
          </div>

          {/* Title & Tagline */}
          <h3 className="text-base font-semibold text-navy-900 mb-1 tracking-tight">{service.title}</h3>
          <p className="text-copper-500 text-xs font-medium mb-3 tracking-wide">{service.tagline}</p>

          {/* Description */}
          <p className="text-slate-500 text-xs leading-relaxed mb-4">{service.description}</p>

          {/* Details */}
          {/* <div className="border-t border-slate-100 pt-4">
            <ul className="space-y-1.5">
              {service.details.map((detail, i) => (
                <li key={i} className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="text-copper-500 flex-shrink-0">›</span>
                  {detail}
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </a>
    </motion.div>
  )
}

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-24 lg:py-32 px-3 md:px-10">
      <div className="container-custom">
        {/* Header */}
        <ScrollReveal className="mb-14">
          <SectionLabel text="What We Do" />
          <h2 className="text-3xl lg:text-4xl font-semibold text-navy-900 tracking-tight mb-4 max-w-2xl">
            Comprehensive restoration,
            <br /> 
            from emergency to rebuild.
          </h2>
          <p className="text-slate-500 text-sm max-w-xl">
            Arctiv covers the full range of property restoration and renovation across Canada.
            Our teams are on call 24/7.
          </p>
        </ScrollReveal>

        {/* Service Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}