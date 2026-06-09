import ServicePageLayout, { ServicePageData } from '../components/ServicePageLayout'

const AlertIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
    <path d="M8 2L14 13H2L8 2Z" stroke="#C77B30" strokeWidth="1.4" strokeLinejoin="round" fill="rgba(199,123,48,0.1)" />
    <path d="M8 7v3M8 11.5v.5" stroke="#C77B30" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

const data: ServicePageData = {
  slug: '/services/mould-remediation',
  badge: 'Mould Remediation',
  headline: 'Safe removal.',
  subline: 'Certified clearance.',
  heroDesc: 'Mould spreads inside walls, beneath flooring, and in HVAC ducts — often invisible until the damage is significant. Arctiv follows Health Canada and IICRC S520 protocols to safely contain, remove, and verify complete remediation.',
  heroIcon: (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <circle cx="20" cy="20" r="3" stroke="#C77B30" strokeWidth="1.5" fill="rgba(199,123,48,0.18)" />
      <circle cx="12" cy="14" r="2.5" stroke="#d4914d" strokeWidth="1.5" fill="rgba(199,123,48,0.1)" />
      <circle cx="28" cy="14" r="2.5" stroke="#d4914d" strokeWidth="1.5" fill="rgba(199,123,48,0.1)" />
      <circle cx="12" cy="26" r="2.5" stroke="#d4914d" strokeWidth="1.5" fill="rgba(199,123,48,0.1)" />
      <circle cx="28" cy="26" r="2.5" stroke="#d4914d" strokeWidth="1.5" fill="rgba(199,123,48,0.1)" />
      <circle cx="20" cy="10" r="2" stroke="#C77B30" strokeWidth="1.5" fill="rgba(199,123,48,0.08)" />
      <circle cx="20" cy="30" r="2" stroke="#C77B30" strokeWidth="1.5" fill="rgba(199,123,48,0.08)" />
    </svg>
  ),
  whatItIs: 'Mould is a fungus that thrives in damp, poorly ventilated spaces. It produces spores that circulate through the air and colonize new surfaces. Health Canada advises that any visible mould in a home or commercial property should be addressed promptly — exposure can cause respiratory irritation, allergic reactions, and in sensitive individuals, more serious health effects. Mould remediation is not just cleaning — it requires containment, removal, air filtration, and certified clearance testing to confirm the job is done.',
  signs: [
    { icon: <AlertIcon />, label: 'Visible Black, Green, or White Growth', desc: 'Especially in bathrooms, basements, and around windows' },
    { icon: <AlertIcon />, label: 'Musty or Earthy Odour', desc: 'Persistent smell without visible source often means hidden mould' },
    { icon: <AlertIcon />, label: 'Allergic Symptoms Indoors', desc: 'Sneezing, coughing, or congestion that clears when you leave' },
    { icon: <AlertIcon />, label: 'Recent or Unresolved Water Damage', desc: 'Any undried moisture event within the past 48 hours is a mould risk' },
  ],
  process: [
    { step: '01', title: 'Inspection & Air Testing', desc: 'We inspect visible growth areas and take air samples to identify mould species and spore counts, establishing a baseline.' },
    { step: '02', title: 'Containment', desc: 'Affected areas are sealed with polyethylene barriers and placed under negative air pressure to prevent cross-contamination during removal.' },
    { step: '03', title: 'Removal & Treatment', desc: 'Mould-colonized materials are removed and disposed of. Remaining surfaces are HEPA-vacuumed and treated with approved antimicrobial agents.' },
    { step: '04', title: 'Clearance Testing', desc: 'A third-party certified industrial hygienist conducts post-remediation air and surface testing to confirm the space meets acceptable standards before we close the containment.' },
  ],
  benefits: [
    { title: 'Health Canada Compliant', desc: 'All remediation work follows Health Canada guidelines and IICRC S520 standard for professional mould remediation.' },
    { title: 'Third-Party Clearance Testing', desc: 'We use independent industrial hygienists for post-remediation testing — not our own staff — so results are unbiased.' },
    { title: 'Source Moisture Addressed', desc: 'We identify and recommend repair of the moisture source so mould does not recur after remediation.' },
    { title: 'Full Documentation', desc: 'Pre- and post-remediation reports, air quality results, and photo documentation provided for insurance and future disclosure.' },
    { title: 'HEPA Air Filtration Throughout', desc: 'Industrial air scrubbers with HEPA filtration run continuously during the project to capture airborne spores.' },
    { title: 'Residential & Commercial', desc: 'From single-family homes to large commercial facilities, our remediation protocols scale to the scope of the project.' },
  ],
  faqs: [
    { q: 'Is all mould dangerous?', a: 'All mould growth in a building should be addressed, regardless of species. While some strains are more toxic than others, any mould colony indicates a moisture problem and can worsen over time. Health Canada recommends remediation for any visible mould.' },
    { q: 'Do I need to leave my home during mould remediation?', a: 'For small, localized areas, occupancy may be possible. For larger infestations or if containment is in a heavily used area, temporary relocation is often recommended. We will advise you based on the specific scope.' },
    { q: 'Will the mould come back after remediation?', a: 'Mould will not return if the moisture source is eliminated. Our scope always includes identifying and recommending repair of the moisture source. If that source is not repaired, there is a risk of recurrence.' },
    { q: 'Does insurance cover mould remediation?', a: 'Coverage depends on the cause. If mould resulted from a sudden, covered water loss, remediation is often covered. Mould from gradual leaks or lack of maintenance is typically excluded. We can help you understand your policy.' },
  ],
  relatedServices: [
    { label: 'Water Damage', path: '/services/water-damage' },
    { label: 'Structural Drying', path: '/services/structural-drying' },
    { label: 'Reconstruction', path: '/services/reconstruction' },
    { label: 'General Contracting', path: '/services/general-contracting' },
  ],
}

export default function MouldRemediationPage() {
  return <ServicePageLayout data={data} />
}