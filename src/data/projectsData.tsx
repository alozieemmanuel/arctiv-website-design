export type ProjectCategory =
  | 'Water Damage'
  | 'Fire & Smoke'
  | 'Mould'
  | 'Reconstruction'
  | 'General Contracting'

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
  detail: string // longer paragraph for the detail page
  challenge: string
  outcome: string
  tags: string[]
  coverImage: string
  gallery: string[] // array of image paths
}

export const projects: ProjectData[] = [
  {
    id: 'p1',
    slug: 'flooded-basement-recovery',
    title: 'Flooded Basement Recovery',
    category: 'Water Damage',
    location: 'Mississauga, ON',
    scope: 'Full basement — 1,100 sq ft',
    duration: '8 days',
    type: 'Residential',
    description:
      'A burst supply line flooded a finished basement with 4 inches of standing water. Arctiv extracted over 3,000 litres, removed affected drywall and flooring, and dried the space to IICRC S500 standards before rebuilding all finishes.',
    detail:
      'The homeowner discovered the flood on a Sunday morning. By the time Arctiv arrived, standing water had reached the base of the electrical panel. Our team isolated power, deployed truck-mounted extraction units, and had the space clear within six hours. Structural drying ran for five days with continuous moisture mapping to confirm wall cavities and subfloor were within acceptable limits before any rebuilding began.',
    challenge:
      'Water had migrated under a floating laminate floor into the subfloor OSB, creating a hidden reservoir that standard surface extraction would have missed. Thermal imaging identified the extent before any drywall was cut.',
    outcome:
      'Full rebuild completed on day 8 — drywall, insulation, luxury vinyl plank, and painted finishes. Moisture readings signed off by a certified IICRC technician. Insurance claim handled end-to-end.',
    tags: ['Water Extraction', 'Structural Drying', 'Rebuild', 'Insurance'],
    coverImage: '/project-5.jpg',
    gallery: ['/project-1.jpg', '/project-5.jpg', '/project-3.jpg', '/project-4.jpg'],
  },
  {
    id: 'p2',
    slug: 'post-fire-suite-restoration',
    title: 'Post-Fire Suite Restoration',
    category: 'Fire & Smoke',
    location: 'Toronto, ON',
    scope: 'Kitchen + adjacent rooms',
    duration: '3 weeks',
    type: 'Residential',
    description:
      'A grease fire caused significant smoke and soot damage throughout the main floor. Arctiv secured the property, completed full smoke cleaning and odour remediation, and rebuilt the kitchen with new cabinetry, countertops, and flooring.',
    detail:
      'The fire originated at the range hood and spread soot through the HVAC system, coating every surface in the open-plan main floor. Arctiv secured the property with board-up overnight, then began a systematic cleaning sequence: HEPA vacuuming of all surfaces, dry-chemical sponging of walls and ceilings, duct cleaning, and ozone treatment for odour. The kitchen rebuild was scoped jointly with the insurer\'s adjuster to restore like-for-like finishes.',
    challenge:
      'Smoke had penetrated the HVAC returns and distributed fine particulate to the second floor. The scope expanded mid-project to include upstairs bedroom cleaning — all absorbed within the original timeline.',
    outcome:
      'Full occupancy restored in 21 days. Air quality testing confirmed particulate levels within Health Canada guidelines. The family relocated to a hotel for only 12 of those days.',
    tags: ['Smoke Cleaning', 'Odour Removal', 'Kitchen Rebuild', 'HVAC'],
    coverImage: '/project-2.jpg',
    gallery: ['/project-2.jpg', '/project-6.jpg', '/project-1.jpg', '/project-3.jpg'],
  },
  {
    id: 'p3',
    slug: 'commercial-lobby-rebuild',
    title: 'Commercial Lobby Rebuild',
    category: 'Reconstruction',
    location: 'Brampton, ON',
    scope: 'Commercial lobby — 2,200 sq ft',
    duration: '4 weeks',
    type: 'Commercial',
    description:
      'Storm damage compromised the curtain wall of a commercial building, allowing water infiltration that destroyed flooring, millwork, and the reception area. Arctiv coordinated emergency waterproofing, drying, and a full lobby rebuild while the building stayed partially operational.',
    detail:
      'A severe ice storm cracked a section of the curtain wall, and meltwater infiltrated over several days before the building manager noticed. By then, the polished concrete subfloor had heaved, the reception millwork was saturated, and suspended ceiling tiles across 2,200 sq ft had collapsed. Arctiv phased the work so tenants on upper floors retained access throughout.',
    challenge:
      'The curtain wall repair required a glazing subcontractor with lift access during business hours. Arctiv coordinated three trades simultaneously — glazing, drywall, and flooring — on a compressed schedule to avoid a second business quarter of disruption.',
    outcome:
      'Lobby reopened ahead of schedule. New polished concrete pour, custom millwork, updated lighting, and a refreshed reception ceiling delivered to the property manager\'s spec.',
    tags: ['Commercial', 'Storm Damage', 'Multi-Trade', 'Lobby Rebuild'],
    coverImage: '/project-3.jpg',
    gallery: ['/project-3.jpg', '/project-5.jpg', '/project-2.jpg', '/project-6.jpg'],
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
    slug: 'high-rise-water-intrusion',
    title: 'High-Rise Water Intrusion',
    category: 'Water Damage',
    location: 'Etobicoke, ON',
    scope: '2,800 sq ft office',
    duration: '10 days',
    type: 'Commercial',
    description:
      'A sprinkler malfunction flooded a commercial office suite over a long weekend. Arctiv responded after-hours, extracted water, dried the space around tenant operations where possible, and restored flooring, ceilings, and partitions.',
    detail:
      'The call came in at 11 PM on a Friday. A faulty sprinkler head had discharged for approximately four hours before the building\'s monitoring system flagged it. Arctiv mobilized within 90 minutes, worked through the night to extract standing water and protect server room equipment, and had drying equipment staged before the Monday morning staff arrived.',
    challenge:
      'The tenant refused to vacate entirely. Arctiv built temporary poly barriers to isolate wet zones, running drying equipment on a rolling schedule that preserved two-thirds of the office floor for active use throughout the 10-day restoration.',
    outcome:
      'No data loss, no missed business days for the tenant. Full flooring, ceiling, and partition restoration completed within the insurance policy\'s scope.',
    tags: ['Commercial', 'After-Hours Response', 'Office Restoration', 'Insurance'],
    coverImage: '/project-5.jpg',
    gallery: ['/project-5.jpg', '/project-3.jpg', '/project-1.jpg', '/project-2.jpg'],
  },
  {
    id: 'p6',
    slug: 'kitchen-fire-full-rebuild',
    title: 'Kitchen Fire — Full Rebuild',
    category: 'Fire & Smoke',
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
    gallery: ['/project-6.jpg', '/project-2.jpg', '/project-4.jpg', '/project-5.jpg'],
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