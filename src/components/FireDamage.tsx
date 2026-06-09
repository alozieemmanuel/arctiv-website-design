import ServicePageLayout, { ServicePageData } from '../components/ServicePageLayout'

const AlertIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
    <path d="M8 2L14 13H2L8 2Z" stroke="#C77B30" strokeWidth="1.4" strokeLinejoin="round" fill="rgba(199,123,48,0.1)" />
    <path d="M8 7v3M8 11.5v.5" stroke="#C77B30" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

const data: ServicePageData = {
  slug: '/services/fire-damage',
  badge: 'Fire & Smoke Damage',
  headline: 'From board-up',
  subline: 'to full rebuild.',
  heroDesc: 'Fire leaves behind soot, smoke residue, and structural damage that compounds with every passing hour. Arctiv secures your property immediately, cleans every affected surface, neutralizes odour, and manages your full structural restoration.',
  heroIcon: (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <path d="M20 36C13 36 8 31 8 25C8 19 12 16 14 12C14 12 14 17 17 18C17 18 15 14 20 10C20 10 19 16 23 18C25 15 24 12 24 12C27 16 32 19 32 25C32 31 27 36 20 36Z" stroke="#C77B30" strokeWidth="2" fill="rgba(199,123,48,0.12)" />
      <path d="M20 30C17 30 15 28 15 26C15 23 17 22 18 20C18 20 18 23 20 24C22 23 22 20 22 20C24 22 25 23 25 26C25 28 23 30 20 30Z" stroke="#d4914d" strokeWidth="1.5" fill="rgba(199,123,48,0.1)" />
    </svg>
  ),
  whatItIs: 'Fire damage is rarely limited to what the flames touch. Smoke and soot travel throughout a structure through the HVAC system, settling on every surface — including areas that appear untouched. Protein residues from kitchen fires are nearly invisible but produce powerful odours. Acidic soot continues corroding metal, glass, and painted surfaces for days. Immediate response limits this ongoing damage and reduces total restoration costs significantly.',
  signs: [
    { icon: <AlertIcon />, label: 'Soot on Walls & Ceilings', desc: 'Black or grey deposits, especially near vents and corners' },
    { icon: <AlertIcon />, label: 'Persistent Smoke Odour', desc: 'Lingering smell even days after the fire is extinguished' },
    { icon: <AlertIcon />, label: 'Discoloured or Charred Materials', desc: 'Visible burn damage to framing, flooring, or finishes' },
    { icon: <AlertIcon />, label: 'Yellowed or Stained Surfaces', desc: 'Nicotine-like staining from smoke residue on painted walls' },
  ],
  process: [
    { step: '01', title: 'Emergency Board-Up & Securing', desc: 'We protect the structure immediately — boarding windows, tarping the roof, and restricting access to prevent further loss.' },
    { step: '02', title: 'Scope & Documentation', desc: 'Full photo documentation, contents inventory, and a detailed scope of work to support your insurance claim from day one.' },
    { step: '03', title: 'Cleaning & Deodorization', desc: 'Soot removal from all surfaces using dry cleaning sponges, chemical sponges, and HEPA vacuuming, followed by thermal fogging and ozone treatment.' },
    { step: '04', title: 'Structural Restoration', desc: 'Damaged framing, drywall, insulation, flooring, and finishes are replaced by our in-house reconstruction crews.' },
  ],
  benefits: [
    { title: 'Immediate Site Securing', desc: 'We board up and tarp on the same call, protecting the structure and your contents from further exposure.' },
    { title: 'Insurance Claim Support', desc: "We produce a complete contents and structural inventory that makes the adjuster's job easier and protects your claim." },
    { title: 'Odour Elimination, Not Masking', desc: 'We use thermal fogging, hydroxyl generators, and ozone — not air fresheners — to permanently neutralize smoke odour.' },
    { title: 'Certified Restoration Technicians', desc: 'All fire and smoke work is performed by IICRC-certified technicians trained in FST (Fire and Smoke Restoration).' },
    { title: 'Contents Cleaning & Pack-Out', desc: 'We assess, inventory, and clean salvageable contents off-site, returning them once the property is restored.' },
    { title: 'Single Point of Contact', desc: 'One Arctiv project manager handles everything from emergency response to your final walkthrough.' },
  ],
  faqs: [
    { q: 'Can I stay in my home after a fire?', a: 'This depends on the extent of the fire and whether utilities have been made safe. Arctiv will advise you on this immediately after assessment. Smoke and soot in the air can be a health hazard — our crew uses PPE for a reason.' },
    { q: "How is fire restoration handled with insurance?", a: "We work directly with your insurance company throughout the process. We document the scope, provide itemized estimates, and communicate with adjusters so you don't have to manage the paperwork while dealing with the loss." },
    { q: 'What happens to my contents?', a: 'Salvageable contents are inventoried, packed out, cleaned at our facility, and stored until the property is ready. Unsalvageable items are documented for your insurance claim.' },
    { q: 'How long does fire damage restoration take?', a: 'Cleaning and deodorization typically takes 3–7 days. If structural repairs are needed, total timelines vary by scope — your project manager will provide a detailed schedule at the outset.' },
  ],
  relatedServices: [
    { label: 'Water Damage', path: '/services/water-damage' },
    { label: 'Mould Remediation', path: '/services/mould-remediation' },
    { label: 'Reconstruction', path: '/services/reconstruction' },
    { label: 'General Contracting', path: '/services/general-contracting' },
  ],
}

export default function FireDamagePage() {
  return <ServicePageLayout data={data} />
}