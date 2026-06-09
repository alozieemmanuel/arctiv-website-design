import ServicePageLayout, { ServicePageData } from '../components/ServicePageLayout'

const AlertIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
    <path d="M8 2L14 13H2L8 2Z" stroke="#C77B30" strokeWidth="1.4" strokeLinejoin="round" fill="rgba(199,123,48,0.1)" />
    <path d="M8 7v3M8 11.5v.5" stroke="#C77B30" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

const data: ServicePageData = {
  slug: '/services/general-contracting',
  badge: 'General Contracting',
  headline: 'One team.',
  subline: 'Every trade.',
  heroDesc: 'Whether you\'re planning a renovation, managing a multi-trade build, or need a commercial tenant improvement, Arctiv provides the project management, trade coordination, and quality oversight to deliver on time and on scope.',
  heroIcon: (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <path d="M6 34L6 22L14 14L26 14L34 22L34 34Z" stroke="#C77B30" strokeWidth="2" fill="rgba(199,123,48,0.06)" strokeLinejoin="round" />
      <path d="M14 34L14 26L26 26L26 34" stroke="#d4914d" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(199,123,48,0.06)" />
      <path d="M4 34L36 34" stroke="#C77B30" strokeWidth="2" strokeLinecap="round" />
      <circle cx="20" cy="9" r="4" stroke="#C77B30" strokeWidth="1.5" fill="rgba(199,123,48,0.15)" />
      <path d="M17 9L23 9M20 6L20 12" stroke="#C77B30" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  whatItIs: 'General contracting means taking on the full accountability for a construction project — from the first design conversation to the final walkthrough. Arctiv acts as the single point of responsibility, coordinating all trades (carpentry, drywall, electrical, plumbing rough-in, flooring, painting, tile), managing the schedule, and maintaining quality across every phase. This model is particularly valuable for insurance reconstruction, where clear accountability and detailed documentation are essential.',
  signs: [
    { icon: <AlertIcon />, label: 'Multi-Trade Scope', desc: 'Projects involving more than one trade typically benefit from a GC' },
    { icon: <AlertIcon />, label: 'Insurance Reconstruction', desc: 'Post-loss rebuilds require documented scope management and coordination' },
    { icon: <AlertIcon />, label: 'Commercial Tenant Improvements', desc: 'Occupied commercial spaces need a coordinated team, not individual trades' },
    { icon: <AlertIcon />, label: 'Renovation Without a Plan', desc: 'We can help scope, budget, and sequence your project before any work begins' },
  ],
  process: [
    { step: '01', title: 'Scope & Planning', desc: 'We meet to understand your project, prepare a detailed scope with material specifications, and provide a full estimate before committing.' },
    { step: '02', title: 'Trade Coordination', desc: 'All required trades are scheduled, supervised, and accountable to Arctiv — not to you independently. One number, one answer.' },
    { step: '03', title: 'Construction Management', desc: 'Your dedicated project manager is on site at key milestones, tracking schedule, quality, and budget on a daily basis.' },
    { step: '04', title: 'Completion & Deficiency', desc: 'A formal walkthrough identifies any items to address. The file is not closed until you have signed off on the completed work.' },
  ],
  benefits: [
    { title: 'Single Point of Accountability', desc: 'No blame-shifting between trades. Arctiv is responsible for the entire scope, period.' },
    { title: 'Dedicated Project Manager', desc: 'One Arctiv PM manages your project from start to finish — you always know who to call.' },
    { title: 'Transparent Budgeting', desc: 'Detailed line-item estimates before work begins, and clear change order processes if scope evolves.' },
    { title: 'Insurance & Permit Expertise', desc: 'We handle permit applications, inspections, and insurance claim coordination as part of the project scope.' },
    { title: 'Residential & Commercial', desc: 'From kitchen renovations to multi-unit commercial improvements, our teams are experienced across property types.' },
    { title: 'Clean Project Close', desc: 'Every project ends with a final walkthrough, deficiency list, and sign-off. We do not disappear at substantial completion.' },
  ],
  faqs: [
    { q: 'What is the difference between a general contractor and a subcontractor?', a: 'A general contractor takes overall responsibility for the project — hiring, scheduling, and supervising subcontractors (individual trades), managing permits, and being accountable to the client for the full scope. A subcontractor performs a specific trade under the GC\'s direction.' },
    { q: 'Do you do residential renovations, or only post-loss reconstruction?', a: 'Both. While our restoration background means we are expert in insurance reconstruction, we also take on planned renovations — kitchens, bathrooms, basement finishing, additions — for residential and commercial clients.' },
    { q: 'How do you price general contracting work?', a: 'We provide detailed written estimates with line-item costs before any work begins. For complex projects, we may charge a scoping fee that is credited against the project cost. We do not operate on time-and-material with no ceiling.' },
    { q: 'Can you help with insurance claim reconstruction?', a: 'Yes — this is a core part of what we do. We prepare scopes in the format insurance adjusters require, coordinate with your insurer, and document the project throughout.' },
  ],
  relatedServices: [
    { label: 'Reconstruction', path: '/services/reconstruction' },
    { label: 'Fire & Smoke Damage', path: '/services/fire-damage' },
    { label: 'Storm Damage', path: '/services/storm-damage' },
    { label: 'Water Damage', path: '/services/water-damage' },
  ],
}

export default function GeneralContractingPage() {
  return <ServicePageLayout data={data} />
}