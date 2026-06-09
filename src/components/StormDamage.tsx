import ServicePageLayout, { ServicePageData } from '../components/ServicePageLayout'

const AlertIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
    <path d="M8 2L14 13H2L8 2Z" stroke="#C77B30" strokeWidth="1.4" strokeLinejoin="round" fill="rgba(199,123,48,0.1)" />
    <path d="M8 7v3M8 11.5v.5" stroke="#C77B30" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

const data: ServicePageData = {
  slug: '/services/storm-damage',
  badge: 'Storm Damage',
  headline: 'Secure. Dry.',
  subline: 'Restore.',
  heroDesc: 'Severe storms in the GTA can cause roof damage, flooding, fallen trees, and structural compromise within minutes. Arctiv responds fast to secure your property, mitigate water intrusion, and begin the full restoration process.',
  heroIcon: (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <path d="M8 16C8 16 10 8 20 8C30 8 32 16 32 16" stroke="#C77B30" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M4 20 Q8 16 12 20 Q16 24 20 20 Q24 16 28 20 Q32 24 36 20" stroke="#d4914d" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M12 28L16 22M20 30L24 24M8 32L12 28" stroke="#C77B30" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  whatItIs: 'Storm damage encompasses a wide range of property losses caused by high winds, hail, heavy rain, ice, or fallen trees. In Ontario, severe storms can compromise roofing and building envelopes, cause basement and main-floor flooding, and leave properties exposed to further weather damage. Prompt emergency securing is critical — an unsecured opening during a storm can turn a manageable repair into a catastrophic loss.',
  signs: [
    { icon: <AlertIcon />, label: 'Roof Damage or Missing Shingles', desc: 'Exposed decking or gaps in roofing allowing water ingress' },
    { icon: <AlertIcon />, label: 'Broken Windows or Doors', desc: 'Compromised openings allowing rain or wind into the structure' },
    { icon: <AlertIcon />, label: 'Interior Water Intrusion', desc: 'Ceiling stains, pooling water, or wet insulation after a storm' },
    { icon: <AlertIcon />, label: 'Structural Shift or Damage', desc: 'Fallen trees, collapsed sections, or displaced wall framing' },
  ],
  process: [
    { step: '01', title: 'Emergency Response & Securing', desc: 'Tarping damaged roofs, boarding broken windows, and securing compromised entry points to stop further water intrusion.' },
    { step: '02', title: 'Damage Assessment', desc: 'Full interior and exterior documentation, including drone inspection of roof damage where required, for insurance and scope planning.' },
    { step: '03', title: 'Water Extraction & Drying', desc: 'Any water that entered the structure is extracted and structural drying begins immediately to prevent secondary damage.' },
    { step: '04', title: 'Structural Repairs & Restoration', desc: 'Roofing, cladding, windows, framing, and interior finishes are repaired or replaced to return the property to pre-storm condition.' },
  ],
  benefits: [
    { title: '24/7 Emergency Deployment', desc: 'We mobilize during and after severe weather events — not just during business hours.' },
    { title: 'Roof Tarping & Board-Up', desc: 'Immediate weatherproofing to stop the bleeding before permanent repairs can be completed.' },
    { title: 'Full Restoration In-House', desc: 'Arctiv handles everything from tarping to roofing to interior finishes — no subcontractor handoffs.' },
    { title: 'Insurance Documentation', desc: 'Detailed scope reports and photo documentation to support your property insurance claim.' },
    { title: 'Fallen Tree & Debris Removal', desc: 'We clear debris from the property and assess any structural impact from fallen trees before restoration begins.' },
    { title: 'Secondary Damage Prevention', desc: 'Fast response prevents a storm event from becoming a mould remediation and full interior restoration project.' },
  ],
  faqs: [
    { q: 'Can you respond during an active storm?', a: 'We can deploy to secure properties as safely as conditions allow, and will be on site immediately after it is safe to work. Our emergency line is staffed around the clock.' },
    { q: 'Does home insurance cover storm damage?', a: 'Most standard homeowner policies cover sudden storm damage to the structure. Wind, hail, and water intrusion from storm events are typically covered. Overland flooding coverage varies by policy. We help you document everything your adjuster needs.' },
    { q: 'How do you handle large-scale storm events?', a: 'In the event of a major storm affecting multiple properties, we prioritize by severity and maintain an emergency response roster. We are upfront about timelines when demand is high.' },
    { q: 'What if a tree has fallen through my roof?', a: 'Call us immediately. We remove the tree, tarp the opening, assess structural integrity, and begin the repair scope. Do not enter the structure until we have confirmed it is safe.' },
  ],
  relatedServices: [
    { label: 'Water Damage', path: '/services/water-damage' },
    { label: 'Structural Drying', path: '/services/structural-drying' },
    { label: 'Reconstruction', path: '/services/reconstruction' },
    { label: 'General Contracting', path: '/services/general-contracting' },
  ],
}

export default function StormDamagePage() {
  return <ServicePageLayout data={data} />
}