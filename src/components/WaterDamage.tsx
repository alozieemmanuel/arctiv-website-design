import ServicePageLayout, { ServicePageData } from '../components/ServicePageLayout'

const AlertIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
    <path d="M8 2L14 13H2L8 2Z" stroke="#C77B30" strokeWidth="1.4" strokeLinejoin="round" fill="rgba(199,123,48,0.1)" />
    <path d="M8 7v3M8 11.5v.5" stroke="#C77B30" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

const data: ServicePageData = {
  slug: '/services/water-damage',
  badge: 'Water Damage',
  headline: 'Fast Water Extraction.',
  subline: 'Full structural recovery.',
  heroDesc: 'Burst pipes, flooding, appliance leaks, or sewer backups — water damage spreads fast. Arctiv arrives within hours, extracts water, and dries your property to IICRC standards to prevent mould and structural deterioration.',
  heroIcon: (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <path d="M20 6C20 6 8 18 8 26C8 32.627 13.373 38 20 38C26.627 38 32 32.627 32 26C32 18 20 6 20 6Z" stroke="#C77B30" strokeWidth="2" fill="rgba(199,123,48,0.12)" />
      <path d="M14 28C14 28 16 24 20 24C24 24 26 28 26 28" stroke="#d4914d" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  ),
  whatItIs: 'Water damage is any moisture intrusion that threatens the integrity of your building materials, contents, or air quality. Even small leaks left untreated can soak into drywall and subfloor, creating ideal conditions for mould within 24–48 hours. Class 1 to Class 4 water damage all require different drying strategies — Arctiv uses psychrometric assessments and industrial equipment to handle all categories.',
  signs: [
    { icon: <AlertIcon />, label: 'Visible Standing Water', desc: 'Pooling on floors, in basements or crawlspaces' },
    { icon: <AlertIcon />, label: 'Staining or Discolouration', desc: 'Yellow or brown marks on ceilings and walls' },
    { icon: <AlertIcon />, label: 'Warped or Buckled Flooring', desc: 'Wood, laminate or tile lifting from subfloor' },
    { icon: <AlertIcon />, label: 'Musty Odour', desc: 'Early sign of mould developing behind surfaces' },
  ],
  process: [
    { step: '01', title: 'Emergency Assessment', desc: 'We arrive, document the scope, classify the water damage, and brief you on the plan before touching anything.' },
    { step: '02', title: 'Water Extraction', desc: 'Industrial truck-mounts and portable extractors remove all standing and embedded water from surfaces and cavities.' },
    { step: '03', title: 'Structural Drying', desc: 'We deploy dehumidifiers, air movers and drying mats. Daily moisture logs track progress to IICRC S500 drying goals.' },
    { step: '04', title: 'Restoration & Repair', desc: 'Once dry, our crews replace damaged drywall, flooring, insulation, and finishes to return your property to pre-loss condition.' },
  ],
  benefits: [
    { title: 'Arrives Within Hours', desc: 'Our on-call crews are dispatched immediately so extraction starts before secondary damage sets in.' },
    { title: 'Insurance Billing Support', desc: 'We document every step with photos, moisture logs, and reports your insurance adjuster can use directly.' },
    { title: 'IICRC-Certified Technicians', desc: 'All drying work follows IICRC S500 standards — the industry benchmark for water damage remediation.' },
    { title: 'One Team, Start to Finish', desc: 'No hand-offs between contractors. Arctiv handles extraction, drying, and repairs under one roof.' },
    { title: 'Mould Prevention Built In', desc: 'Our drying protocols are designed to eliminate moisture below mould-growth thresholds before remediation is ever needed.' },
    { title: 'Advanced Moisture Mapping', desc: 'Thermal imaging and moisture meters locate water hidden inside walls and floors before it causes hidden damage.' },
  ],
  faqs: [
    { q: 'How quickly do you respond to water damage emergencies?', a: 'We aim to arrive within 2–4 hours for the Greater Toronto Area. Call our emergency line any time — we are staffed 24/7/365.' },
    { q: 'Will my insurance cover water damage restoration?', a: 'Most standard homeowner and commercial property policies cover sudden and accidental water damage. We work directly with all major insurers and provide full documentation to support your claim.' },
    { q: 'How long does the drying process take?', a: 'Drying time depends on the class and category of the loss. Most residential jobs achieve drying goals in 3–5 days with industrial equipment. We monitor daily and never close a job until readings confirm it is dry.' },
    { q: 'What if mould is already present?', a: 'If mould is discovered during the drying process, we pivot to a full mould remediation scope. Both can often be addressed concurrently, saving you time.' },
  ],
  relatedServices: [
    { label: 'Structural Drying', path: '/services/structural-drying' },
    { label: 'Mould Remediation', path: '/services/mould-remediation' },
    { label: 'Sewage Cleanup', path: '/services/sewage-cleanup' },
    { label: 'Reconstruction', path: '/services/reconstruction' },
  ],
}

export default function WaterDamagePage() {
  return <ServicePageLayout data={data} />
}