import ServicePageLayout, { ServicePageData } from '../components/ServicePageLayout'

const AlertIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
    <path d="M8 2L14 13H2L8 2Z" stroke="#C77B30" strokeWidth="1.4" strokeLinejoin="round" fill="rgba(199,123,48,0.1)" />
    <path d="M8 7v3M8 11.5v.5" stroke="#C77B30" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

const data: ServicePageData = {
  slug: '/services/reconstruction',
  badge: 'Reconstruction',
  headline: 'Restore. Rebuild.',
  subline: 'Better than before.',
  heroDesc: 'After a loss event, property owners deserve more than a patch job. Arctiv\'s reconstruction team rebuilds with quality materials and skilled trades — from drywall and flooring to full structural repairs — giving you a property that looks and performs its best.',
  heroIcon: (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <path d="M8 32L20 12L32 32Z" stroke="#C77B30" strokeWidth="2" fill="rgba(199,123,48,0.08)" strokeLinejoin="round" />
      <path d="M13 32L27 32" stroke="#C77B30" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 26L24 26" stroke="rgba(199,123,48,0.5)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M22 18L22 26M25 18L25 26" stroke="#d4914d" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  whatItIs: 'Reconstruction is the rebuilding phase that follows emergency restoration and drying. Once your property is stable and dry, Arctiv\'s in-house construction crews take over — repairing structural framing, replacing drywall, installing new flooring, finishing trim and millwork, and painting. Because we handle both the restoration and reconstruction phases, there are no gaps in communication, no duplication of site visits, and a single accountable team from start to finish.',
  signs: [
    { icon: <AlertIcon />, label: 'Drywall Removed During Drying', desc: 'Walls opened for moisture remediation need to be rebuilt' },
    { icon: <AlertIcon />, label: 'Flooring Removed or Damaged', desc: 'Water, fire, or mould-affected flooring requires replacement' },
    { icon: <AlertIcon />, label: 'Structural Framing Compromised', desc: 'Joists, studs, or sheathing damaged by fire, water, or impact' },
    { icon: <AlertIcon />, label: 'Finishes Damaged by Smoke or Soot', desc: 'Paint, trim, cabinets, and fixtures needing replacement' },
  ],
  process: [
    { step: '01', title: 'Scope & Estimate', desc: 'We prepare a detailed written scope of work and estimate based on the damage assessment — line by line, material by material.' },
    { step: '02', title: 'Structural Repairs', desc: 'Any compromised framing, sheathing, or structural components are repaired or replaced to code before finishing work begins.' },
    { step: '03', title: 'Finishes & Systems', desc: 'Drywall, insulation, flooring, trim, cabinetry, tile, and paint are installed by trade-specific crews under one project manager.' },
    { step: '04', title: 'Final Walkthrough', desc: 'We walk through the completed work with you, address any deficiencies, and do not close the file until you are satisfied.' },
  ],
  benefits: [
    { title: 'Seamless Transition from Restoration', desc: 'Because Arctiv handles both mitigation and reconstruction, there are no handoffs, gaps, or finger-pointing between contractors.' },
    { title: 'Qualified In-House Trades', desc: 'Carpentry, drywall, flooring, painting, and tile work are all performed by Arctiv crews, not transient subcontractors.' },
    { title: 'Insurance Scope Expertise', desc: 'We write scopes in the format insurers understand, reducing back-and-forth and getting approvals faster.' },
    { title: 'Code-Compliant Rebuilds', desc: 'All structural repairs meet Ontario Building Code requirements. We pull permits where required and work with your municipality.' },
    { title: 'Material Selection Support', desc: 'If you want to upgrade finishes during reconstruction, our project manager can walk you through selections that fit your budget and timeline.' },
    { title: 'Clean Site Practices', desc: 'We protect areas of your home not affected by reconstruction and leave the completed space clean at every stage.' },
  ],
  faqs: [
    { q: 'Do I need separate contractors for mitigation and reconstruction?', a: 'Not with Arctiv. We handle the full scope from emergency response through finished reconstruction. Using one company reduces timeline, cost, and the friction of managing multiple contractors.' },
    { q: 'Can I make upgrades during reconstruction?', a: 'Yes. Many clients choose to upgrade finishes — flooring, tile, cabinets — when rebuilding. Your project manager will separate the insurance scope from any betterments so billing stays clean.' },
    { q: 'How long does reconstruction take?', a: 'This depends entirely on the scope. A single room with drywall and flooring may take a week. A kitchen or multi-room rebuild can take several weeks. Your project manager provides a detailed schedule before work begins.' },
    { q: 'Do you pull building permits?', a: 'Yes, where required by the Ontario Building Code. We manage the permit process and inspections as part of the project.' },
  ],
  relatedServices: [
    { label: 'Water Damage', path: '/services/water-damage' },
    { label: 'Fire & Smoke Damage', path: '/services/fire-damage' },
    { label: 'Storm Damage', path: '/services/storm-damage' },
    { label: 'General Contracting', path: '/services/general-contracting' },
  ],
}

export default function ReconstructionPage() {
  return <ServicePageLayout data={data} />
}