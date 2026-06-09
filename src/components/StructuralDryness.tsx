import ServicePageLayout, { ServicePageData } from './ServicePageLayout'

const AlertIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
    <path d="M8 2L14 13H2L8 2Z" stroke="#C77B30" strokeWidth="1.4" strokeLinejoin="round" fill="rgba(199,123,48,0.1)" />
    <path d="M8 7v3M8 11.5v.5" stroke="#C77B30" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

const data: ServicePageData = {
  slug: '/services/structural-drying',
  badge: 'Structural Drying',
  headline: 'Precision drying.',
  subline: 'Zero compromise.',
  heroDesc: 'Drying a structure is not about running fans until it feels dry. Arctiv uses psychrometric science, industrial-grade dehumidification, and daily moisture monitoring to dry walls, floors, and cavities to documented, verifiable moisture levels.',
  heroIcon: (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <path d="M6 20Q10 15 14 20Q18 25 22 20Q26 15 30 20Q34 25 38 20" stroke="#C77B30" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M6 26Q10 21 14 26Q18 31 22 26Q26 21 30 26Q34 31 38 26" stroke="#d4914d" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M20 8L20 14M16 10L20 8L24 10" stroke="#C77B30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  ),
  whatItIs: 'Structural drying is a science-based process that removes moisture from building assemblies — walls, subfloors, ceiling systems, and cavities — using psychrometric principles. The goal is not just surface dryness but verified moisture equilibrium within building materials, measured against manufacturer specifications and IICRC S500 standards. Improper or incomplete drying is one of the leading causes of mould growth following a water loss event.',
  signs: [
    { icon: <AlertIcon />, label: 'Recent Flooding or Water Intrusion', desc: 'Any water event that soaked into building materials' },
    { icon: <AlertIcon />, label: 'Elevated Moisture Meter Readings', desc: 'Readings above material EMC indicate trapped moisture' },
    { icon: <AlertIcon />, label: 'Condensation on Windows or Walls', desc: 'Sign of elevated relative humidity inside the structure' },
    { icon: <AlertIcon />, label: 'Bubbling Paint or Lifting Flooring', desc: 'Moisture migrating through materials under surface finishes' },
  ],
  process: [
    { step: '01', title: 'Psychrometric Assessment', desc: 'We measure temperature, relative humidity, dew point, and moisture content across all affected materials to establish a drying plan.' },
    { step: '02', title: 'Equipment Placement', desc: 'Commercial dehumidifiers, high-velocity air movers, and drying mats are positioned according to the drying plan for maximum efficiency.' },
    { step: '03', title: 'Daily Monitoring', desc: 'Technicians visit daily to record moisture readings, adjust equipment placement, and update the drying log — all timestamped for documentation.' },
    { step: '04', title: 'Verification & Sign-Off', desc: 'Drying is not declared complete until all materials reach target moisture content. Final readings are documented in a report for insurance and records.' },
  ],
  benefits: [
    { title: 'IICRC S500 Compliance', desc: 'Our drying protocols follow the IICRC Standard for Professional Water Damage Restoration — the industry gold standard.' },
    { title: 'Daily Documented Moisture Logs', desc: 'Every visit is logged with date, equipment readings, and moisture measurements. You receive a full drying log at project close.' },
    { title: 'Industrial Equipment Only', desc: 'We use commercial-grade LGR dehumidifiers and centrifugal air movers — not the consumer units that take three times as long.' },
    { title: 'Wall and Cavity Drying', desc: 'We use injectidry systems and drying mats to dry inside wall cavities without unnecessary demolition where possible.' },
    { title: 'Prevents Mould Before It Starts', desc: 'Reaching drying goals within the critical window is the most effective mould prevention strategy available.' },
    { title: 'Supports Insurance Documentation', desc: 'Our drying logs and final moisture reports meet insurer requirements for proof of proper drying.' },
  ],
  faqs: [
    { q: 'What is the difference between structural drying and just running fans?', a: 'Consumer fans push surface air around but do little to dry moisture embedded in building materials. Structural drying uses dehumidifiers to lower the atmospheric moisture gradient, drawing moisture out of materials and into the air where it can be collected and removed.' },
    { q: 'How long does structural drying take?', a: 'Most Class 2 and Class 3 water losses achieve drying goals within 3–5 days using industrial equipment. Heavily saturated assemblies or Class 4 losses may take longer. We monitor daily and keep you informed.' },
    { q: 'Do I need to remove flooring and drywall for drying?', a: 'Not always. We use non-invasive drying systems that can dry inside wall cavities and beneath flooring. When materials are too saturated to save, selective demolition may be necessary and actually speeds up the process.' },
    { q: 'Can I be in my home during structural drying?', a: 'Yes, in most cases. The equipment runs continuously and is not dangerous. It does create some noise and airflow. We seal off affected areas to contain the drying zone.' },
  ],
  relatedServices: [
    { label: 'Water Damage', path: '/services/water-damage' },
    { label: 'Mould Remediation', path: '/services/mould-remediation' },
    { label: 'Sewage Cleanup', path: '/services/sewage-cleanup' },
    { label: 'Reconstruction', path: '/services/reconstruction' },
  ],
}

export default function StructuralDryingPage() {
  return <ServicePageLayout data={data} />
}