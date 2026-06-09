import ServicePageLayout, { ServicePageData } from '../components/ServicePageLayout'

const AlertIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
    <path d="M8 2L14 13H2L8 2Z" stroke="#C77B30" strokeWidth="1.4" strokeLinejoin="round" fill="rgba(199,123,48,0.1)" />
    <path d="M8 7v3M8 11.5v.5" stroke="#C77B30" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

const data: ServicePageData = {
  slug: '/services/sewage-cleanup',
  badge: 'Sewage Cleanup',
  headline: 'Safe remediation.',
  subline: 'Full sanitation.',
  heroDesc: 'Sewage backups contain category 3 blackwater — a serious biohazard that requires certified cleanup, proper containment, and thorough sanitation. Arctiv responds fast with full PPE, removes contaminated materials, and restores the property to safe, habitable condition.',
  heroIcon: (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <circle cx="20" cy="20" r="12" stroke="#C77B30" strokeWidth="2" fill="rgba(199,123,48,0.06)" />
      <path d="M15 20 Q17 16 20 20 Q23 24 25 20" stroke="#d4914d" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M14 25 H26" stroke="#C77B30" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M17 10 L17 14 M23 10 L23 14" stroke="#C77B30" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  whatItIs: 'Sewage backups introduce category 3 contaminated water (blackwater) into a property — water that contains human waste, bacteria, viruses, and pathogens. This is not the same as a clean water pipe leak. All surfaces and materials in contact with blackwater must be treated as contaminated, and many porous materials must be removed entirely. Improper sewage cleanup is a serious health risk. Arctiv follows strict biohazard protocols, uses proper PPE, and disposes of waste in accordance with Ontario regulations.',
  signs: [
    { icon: <AlertIcon />, label: 'Drain Backflow or Overflow', desc: 'Sewage or dark water coming up through floor drains or toilets' },
    { icon: <AlertIcon />, label: 'Foul Odour in Basement or Lower Floors', desc: 'Sewage or rotten egg smell without visible water' },
    { icon: <AlertIcon />, label: 'Multiple Drains Backing Up', desc: 'Simultaneous backups across fixtures indicate a main line issue' },
    { icon: <AlertIcon />, label: 'Gurgling Sounds in Drains', desc: 'Sign of a blockage or pressure issue in the sewer system' },
  ],
  process: [
    { step: '01', title: 'Safe Entry & Assessment', desc: 'Crew arrives in full PPE, assesses the extent of contamination, and establishes a safety perimeter before any work begins.' },
    { step: '02', title: 'Extraction & Removal', desc: 'All sewage and contaminated water is extracted. Porous materials (drywall, flooring, insulation) in the affected zone are removed and disposed of as biohazardous waste.' },
    { step: '03', title: 'Sanitization & Disinfection', desc: 'All structural surfaces are cleaned, disinfected with hospital-grade antimicrobials, and treated to eliminate pathogens per category 3 protocols.' },
    { step: '04', title: 'Drying & Restoration', desc: 'Structural drying begins on confirmed-clean surfaces. Rebuilt materials are installed once drying is verified — restoring the space to pre-loss condition.' },
  ],
  benefits: [
    { title: 'Full Biohazard Protocol', desc: 'Category 3 contamination is treated with full PPE, proper containment, and regulated waste disposal — no shortcuts.' },
    { title: 'Immediate Response', desc: 'Sewage events are time-critical. The longer blackwater sits, the deeper it penetrates into materials and structures.' },
    { title: 'All Porous Materials Addressed', desc: 'We remove and replace drywall, flooring, and insulation in contact zones — materials that cannot be safely cleaned in-place.' },
    { title: 'Hospital-Grade Disinfection', desc: 'We use EPA-registered, hospital-grade antimicrobial agents proven effective against the pathogens found in blackwater.' },
    { title: 'Odour Elimination', desc: 'Beyond cleaning, we address residual odour using hydroxyl generators and encapsulants so the space is truly habitable again.' },
    { title: 'Insurance Documentation', desc: 'Full photo documentation and a written scope of work provided to support your property insurance claim.' },
  ],
  faqs: [
    { q: 'Is sewage backup covered by insurance?', a: 'Sewer backup coverage is often an optional add-on to homeowner and tenant policies. If you have it, sewage cleanup and restoration is typically covered. We document everything your adjuster needs.' },
    { q: 'Can I clean up sewage backup myself?', a: 'We strongly advise against it. Blackwater contains dangerous pathogens including E. coli, hepatitis, and other bacteria. Improper cleanup puts your health at risk and may leave contamination behind.' },
    { q: 'What gets thrown away versus cleaned?', a: 'Hard, non-porous surfaces (concrete, tile) can be cleaned and disinfected. Porous materials (drywall, carpet, wood flooring, insulation) that were in contact with blackwater are removed and replaced.' },
    { q: 'How long does sewage cleanup take?', a: 'The initial cleanup and sanitation typically takes 1–2 days. Structural drying adds another 3–5 days. Restoration of replaced materials is scheduled after the structure is verified dry.' },
  ],
  relatedServices: [
    { label: 'Water Damage', path: '/services/water-damage' },
    { label: 'Structural Drying', path: '/services/structural-drying' },
    { label: 'Mould Remediation', path: '/services/mould-remediation' },
    { label: 'Reconstruction', path: '/services/reconstruction' },
  ],
}

export default function SewageCleanupPage() {
  return <ServicePageLayout data={data} />
}