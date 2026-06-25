export type ProjectCategory =
  | 'Water Damage'
  | 'Fire & Smoke'
  | 'Mould'
  | 'Reconstruction'
  | 'General Contracting'
  | 'Repair & Renovation'
  | 'Sewage Cleanup'

export interface ProjectData {
  id: string
  slug: string
  title: string
  category: ProjectCategory
  location: string
  scope: string
  duration: string
  type: 'Residential' | 'Commercial'
  description: string
  detail: string 
  challenge: string
  outcome: string
  tags: string[]
  coverImage: string
  gallery: string[] 
}

export const projects: ProjectData[] = [
  {
    id: 'p1',
    slug: 'flooded-garage-recovery',
    title: 'Flooded Parking Garage Recovery',
    category: 'Water Damage',
    location: 'Mississauga, ON',
    scope: 'Full basement — 1,100 sq ft',
    duration: '8 days',
    type: 'Commercial',
    description:
      'A burst supply line flooded a finished basement with 4 inches of standing water. Arctiv extracted over 3,000 litres, removed affected drywall and flooring, and dried the space to IICRC S500 standards before rebuilding all finishes.',
    detail:
      'A parking garage was flooded after heavy rainfall overwhelmed the drainage system. Arctiv responded immediately, removed standing water with industrial extraction equipment, and began structural drying to protect the concrete, electrical systems, and surrounding areas.',
    challenge:
      'Floodwater collected in low points and around support columns, creating hidden moisture that could damage concrete coatings and electrical components if left untreated.',
    outcome:
      'The garage was fully dried, moisture levels verified, and the space safely reopened with minimal disruption. Complete documentation was provided to support the insurance process.',
    tags: ['Water Extraction', 'Structural Drying', 'Commercial', 'Insurance'],
    coverImage: '/wd-project-6.jpeg',
    gallery: ['/wd-project-6.jpeg', '/wd-project-12.jpeg', '/wd-project-8.jpeg', '/wd-project-11.jpeg', '/wd-project-1.jpeg'],
  },
  {
    id: 'p2',
    slug: 'bathroom-full-restoration',
    title: 'Bathroom Full Restoration',
    category: 'Repair & Renovation',
    location: 'Toronto, ON',
    scope: 'Full Bathroom Renovation',
    duration: '3 weeks',
    type: 'Residential',
    description:
      'An outdated bathroom was transformed into a modern, functional space with new fixtures, custom tiling, waterproofing, and premium finishes. Arctiv managed the project from demolition to final installation, delivering a bathroom built for comfort and lasting performance.',
    detail:
      'The existing bathroom had aging fixtures, worn finishes, and water-damaged materials that required a complete renovation. Our team handled demolition, waterproofing, plumbing updates, new tile installation, and fixture replacement to create a clean, modern bathroom with quality craftsmanship throughout.',
    challenge:
      'The renovation uncovered hidden moisture damage behind the shower walls, requiring repairs before new waterproofing and finishes could be installed.',
    outcome:
      'The bathroom was fully restored with updated plumbing, modern fixtures, premium tile finishes, and a waterproof system designed for long-term durability and everyday comfort.',
    tags: ['Renovation', 'Bathroom Rebuild', 'Waterproofing', 'Residential'],
    coverImage: '/rr-project-2.jpeg',
    gallery: ['/rr-project-2.jpeg', '/rr-project-1.jpeg', '/rr-project-3.jpeg', '/rr-project-4.jpeg', '/rr-project-5.jpeg'],
  },
  {
    id: 'p3',
    slug: 'post-fire-residential-restoration',
    title: 'Post-Fire Residential Restoration',
    category: 'Fire & Smoke',
    location: 'Brampton, ON',
    scope: '2-Storey Residential Home',
    duration: '2 weeks',
    type: 'Residential',
    description:
      'A residential fire left extensive smoke, soot, and heat damage throughout the home\'s upper level. Our team completed emergency mitigation, smoke remediation, structural repairs, and a full interior restoration, returning the property to a clean, safe, and move-in ready condition.',
    detail:
      'A residential fire caused heavy smoke and soot damage throughout the second floor, affecting walls, ceilings, bathrooms, bedrooms, and common areas. Following emergency mitigation, our team removed damaged materials, completed deep smoke cleaning, rebuilt affected spaces, and restored the home with new finishes and fixtures.',
    challenge:
      'Smoke and soot had spread well beyond the fire source, requiring careful cleaning, deodorization, and selective reconstruction while preserving unaffected structural elements.',
    outcome:
      'The home was fully restored with new drywall, flooring, trim, paint, doors, and a renovated bathroom. After final cleaning and inspection, the property was returned to the homeowners in safe, move-in ready condition.',
    tags: ['Residential', 'Fire & Soot Damage', 'Multi-Trade', 'Lobby Rebuild'],
    coverImage: '/fr-project-3.png',
    gallery: ['/fr-project-3.png', '/fr-project-2.png', '/fr-project-5.png', '/fr-project-4.png', '/fr-project-6.png', '/fr-project-7.png', '/fr-project-8.png'],
  },
  {
    id: 'p4',
    slug: 'mould-remediation-crawl-space',
    title: 'Mould Remediation — Crawl Space',
    category: 'Mould',
    location: 'Hamilton, ON',
    scope: 'Attic — 1,400 sq ft',
    duration: '5 days',
    type: 'Residential',
    description:
      'Inadequate attic ventilation led to extensive mould colonization across the sheathing. Arctiv established containment, performed full HEPA removal, applied antimicrobial treatment, and provided clearance testing documentation.',
    detail:
      'The homeowners noticed a musty smell but assumed it was age. A home inspection for an upcoming sale revealed Class 3 mould across roughly 60% of the attic sheathing — a common outcome when soffit vents are blocked by insulation and ridge ventilation is undersized. Arctiv established negative-pressure containment before any disturbance, used HEPA-equipped tools throughout, and bagged all waste in double-sealed poly.',
    challenge:
      'The sale closing date was 18 days away. Arctiv completed remediation, allowed the mandatory 48-hour settling period, and coordinated a third-party air quality test that returned clear results in time for the buyers\' home inspector to verify.',
    outcome:
      'Clearance testing passed on first attempt. Attic ventilation was upgraded as part of scope. House sold on schedule.',
    tags: ['Containment', 'HEPA Removal', 'Clearance Testing', 'Ventilation'],
    coverImage: '/project-4.jpg',
    gallery: ['/project-4.jpg', '/project-1.jpg', '/project-5.jpg', '/project-3.jpg'],
  },
  {
    id: 'p5',
    slug: 'sewage-backup-restoration',
    title: 'Sewage Backup Restortation',
    category: 'Sewage Cleanup',
    location: 'Etobicoke, ON',
    scope: 'Single-Family Home',
    duration: '10 days',
    type: 'Commercial',
    description:
      'A sewage backup flooded the lower level of a residential property, leaving contaminated water across multiple rooms. Arctiv responded quickly to extract the water, sanitize the affected areas, and begin the restoration process to return the home to a safe condition.',
    detail:
      'A sewer backup released contaminated water into the basement and hallway, affecting tiled floors and nearby finishes. Our team contained the affected areas, extracted the wastewater, completed sanitization, and began structural drying to prevent further damage.',
    challenge:
      'Contaminated water had spread through connected rooms, requiring careful containment and thorough disinfection to prevent cross-contamination.',
    outcome:
      'The affected areas were fully cleaned, sanitized, and dried to acceptable moisture levels. The home was safely prepared for repairs, and complete documentation was provided for the insurance claim.',
    tags: ['Commercial', 'After-Hours Response', 'Office Restoration', 'Insurance'],
    coverImage: '/sw-project-11.jpeg',
    gallery: ['/sw-project-11.jpeg', '/sw-project-5.jpeg', '/sw-project-2.jpeg', '/sw-project-9.jpeg', '/sw-project-7.jpeg'],
  },
  {
    id: 'p6',
    slug: 'kitchen-fire-full-rebuild',
    title: 'Kitchen Fire — Full Rebuild',
    category: 'Reconstruction',
    location: 'Oakville, ON',
    scope: 'Kitchen + dining area',
    duration: '3 weeks',
    type: 'Residential',
    description:
      'A grease fire destroyed the kitchen and spread soot to the dining area. Arctiv handled the full scope from emergency board-up through demolition, smoke remediation, and a complete kitchen rebuild with new cabinetry, countertops, appliances, and flooring.',
    detail:
      'The fire reached the ceiling before suppression, charring three upper cabinets and melting range-adjacent appliances. Smoke spread through the open archway to the dining room. Arctiv\'s first priority was securing the exterior opening from the firefighters\' ventilation cut, then scoping the clean versus affected boundary before any demolition began.',
    challenge:
      'The homeowners had a strong preference for a specific cabinet line with a 6-week lead time. Arctiv coordinated the demolition and smoke cleaning schedule so that all prep work — framing, electrical rough-in, plumbing — was staged and ready the day the cabinets arrived, compressing the visible build phase to 5 days.',
    outcome:
      'Kitchen delivered with upgraded countertop and backsplash within the original insurance allowance. The family described it as the kitchen they always wanted.',
    tags: ['Fire Damage', 'Smoke Cleaning', 'Kitchen Rebuild', 'Cabinetry'],
    coverImage: '/project-6.jpg',
    gallery: ['/project-6.jpg', '/kt-project-1.jpeg', '/kt-project-2.jpeg', ],
  },
  {
    id: 'p7',
    slug: 'gcustom-residential-home-construction',
    title: 'Custom Residential Home Construction',
    category: 'Reconstruction',
    location: 'Oakville, ON',
    scope: 'Residential Home',
    duration: '2 months',
    type: 'Residential',
    description:
      'From planning to framing, Arctiv coordinated the construction of a custom residential home, managing trade schedules, structural framing, and quality inspections to keep the project on track for the next phase of construction.',
    detail:
      'Construction began with site preparation, structural framing, and coordinated trade scheduling. Our team managed the project through the framing stage, ensuring the structure was built to plan, inspected, and ready for roofing, mechanical, electrical, and interior work.',
    challenge:
      'Keeping multiple trades on schedule while maintaining construction quality and meeting inspection requirements at every stage.',
    outcome:
      'The framing phase was completed on schedule, passed structural inspections, and was ready for the next stage of construction without delays.',
    tags: ['Fire Damage', 'Smoke Cleaning', 'Kitchen Rebuild', 'Cabinetry'],
    coverImage: '/gc-project-2.jpeg',
    gallery: ['/gc-project-2.jpeg', '/gc-project-3.jpeg', '/gc-project-5.jpeg', '/gc-project-6.jpeg', '/gc-project-4.jpeg', '/gc-project-1.jpeg'],
  },
  {
    id: 'p8',
    slug: 'condo-lobby-unit-restoration',
    title: 'Condo Lobby & Unit Restoration',
    category: 'Reconstruction',
    location: 'Oakville, ON',
    scope: 'Residential Home',
    duration: '2 months',
    type: 'Residential',
    description:
      'From planning to framing, Arctiv coordinated the construction of a custom residential home, managing trade schedules, structural framing, and quality inspections to keep the project on track for the next phase of construction.',
    detail:
      'Construction began with site preparation, structural framing, and coordinated trade scheduling. Our team managed the project through the framing stage, ensuring the structure was built to plan, inspected, and ready for roofing, mechanical, electrical, and interior work.',
    challenge:
      'Keeping multiple trades on schedule while maintaining construction quality and meeting inspection requirements at every stage.',
    outcome:
      'The framing phase was completed on schedule, passed structural inspections, and was ready for the next stage of construction without delays.',
    tags: ['Fire Damage', 'Smoke Cleaning', 'Kitchen Rebuild', 'Cabinetry'],
    coverImage: '/gc-project-2.jpeg',
    gallery: ['/gc-project-2.jpeg', '/gc-project-3.jpeg', '/gc-project-5.jpeg', '/gc-project-6.jpeg', '/gc-project-4.jpeg', '/gc-project-1.jpeg'],
  },
]

export const catColors: Record<
  string,
  { dot: string; text: string; badge: string; light: string }
> = {
  'Water Damage':        { dot: '#3b82f6', text: '#3b82f6', badge: 'bg-blue-50 text-blue-700',     light: 'rgba(59,130,246,0.08)' },
  'Fire & Smoke':        { dot: '#f97316', text: '#f97316', badge: 'bg-orange-50 text-orange-700', light: 'rgba(249,115,22,0.08)' },
  'Mould':               { dot: '#22c55e', text: '#22c55e', badge: 'bg-green-50 text-green-700',   light: 'rgba(34,197,94,0.08)'  },
  'Reconstruction':      { dot: '#b87333', text: '#b87333', badge: 'bg-amber-50 text-amber-700',   light: 'rgba(184,115,51,0.08)' },
  'General Contracting': { dot: '#a855f7', text: '#a855f7', badge: 'bg-purple-50 text-purple-700', light: 'rgba(168,85,247,0.08)' },
}