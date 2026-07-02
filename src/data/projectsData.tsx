export type ProjectCategory =
  | 'Water Damage'
  | 'Fire & Smoke'
  | 'Mould'
  | 'Reconstruction'
  | 'General Contracting'
  | 'Sewage Cleanup'
  | 'Flooding'

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
    category: 'Flooding',
    location: 'Scarborough, ON',
    scope: 'Over 10,000 sq ft',
    duration: '10 days',
    type: 'Commercial',
    description:
      'A burst supply line flooded a parking garage with over 2 feet of standing water. Arctiv extracted over 50,000 gallons of water, safely disposed the contaminated water, cleaned, and dried the space to IICRC S500 standards.',
    detail:
      'A parking garage was flooded after city main pipe burst overwhelming the drainage system. Arctiv responded immediately, removed standing water with industrial extraction equipment, and began structural drying to protect the concrete, electrical systems, and surrounding areas.',
    challenge:
      'Floodwater collected in low points and around support columns, creating hidden moisture that could damage concrete coatings and electrical components if left untreated.',
    outcome:
      'The garage was fully dried, moisture levels verified, and the space safely reopened with minimal disruption. Complete documentation was provided to support the insurance process.',
    tags: ['Water Extraction', 'Structural Drying', 'Commercial', 'Insurance', 'Hydro-Vac System'],
    coverImage: '/wd-project-6.jpeg',
    gallery: ['/wd-project-6.jpeg', '/wd-project-12.jpeg', '/wd-project-8.jpeg', '/wd-project-11.jpeg', '/wd-project-1.jpeg'],
  },
  {
    id: 'p2',
    slug: 'bathroom-restoration',
    title: 'Bathroom Restoration',
    category: 'Water Damage',
    location: 'Toronto, ON',
    scope: 'Bathroom Renovation',
    duration: '2 weeks',
    type: 'Residential',
    description:
      'Water infiltration from leaking windows and a rooftop deck caused damage to the interior finishes of the bathroom. Arctiv identified the source, repaired the affected areas, and completed the restoration, returning the bathroom to a safe, dry, and well-finished condition.',
    detail:
      'Water infiltration from leaking windows and the rooftop deck caused moisture damage to the bathroom, affecting walls, ceilings, and interior finishes. Our team identified the source of the leak, completed the necessary building envelope repairs, and restored the bathroom with new finishes and improved waterproofing.',
    challenge:
      'Water infiltration had spread behind walls and finishes, requiring repairs to the building envelope and thorough moisture remediation before restoration could begin.',
    outcome:
      'The bathroom was fully restored to its full functionality. The building envelope\'s waterproofing and moisture protection system were improved to provide long-term durability.',

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
    duration: '6 months',
    type: 'Residential',
    description:
      'A residential fire left extensive smoke, soot, and heat damage throughout the home. Our team completed emergency mitigation, demolition, structural repairs, and a full interior restoration, according to engineer recommendation, returning the property to a clean, safe, and move-in ready condition.',
    detail:
      'A residential home caught fire affecting all the building finishes throughout the home. Following emergency mitigation, our team removed damaged materials, completed deep smoke cleaning, rebuilt affected spaces, and restored the home with new finishes and fixtures.',
    challenge:
      'Smoke and soot had spread well beyond the fire source, requiring careful cleaning, deodorization, and selective structural reconstruction while preserving unaffected structural elements.',
    outcome:
      'The home was fully restored with new drywall, flooring, trim, paint, doors, and a renovated bathroom. After final cleaning and inspection, the property was returned to the homeowners in safe, move-in ready condition.',
    tags: ['Residential', 'Fire & Soot Damage', 'Multi-Trade', 'Full Rebuild'],
    coverImage: '/fr-project-3.png',
    gallery: ['/fr-project-3.png', '/fr-project-2.png', '/fr-project-5.png', '/fr-project-9.png', '/fr-project-4.png', '/fr-project-6.png', '/fr-project-7.png', '/fr-project-8.png'],
  },
  {
    id: 'p4',
    slug: 'mould-remediation-crawl-space',
    title: 'Asbestos and Mould Remediation',
    category: 'Mould',
    location: 'Hamilton, ON',
    scope: 'Townhouse - 1,400 Sq Ft',
    duration: '4 weeks',
    type: 'Residential',
    description:
      'An older residential home sustained extensive water damage, requiring demolition work to be carried out under asbestos abatement protocols. The home also had pre-existing mould growth in areas where there are no asbestos. Arctiv completed material sampling, setup required containment chambers, safely remove and dispose affected materials, cleaned and decontaminated all areas, and conducted final clearance testing before reconstruction.',
    detail:
      'A faulty plumbing system caused extensive water damage throughout this older residential home. During the assessment, asbestos-containing materials were identified, requiring all demolition to be completed under asbestos abatement protocols. The homeowner also reported a persistent musty odour from one of the bedrooms, where further inspection revealed extensive mould growth caused by prolonged moisture exposure. Arctiv completed material sampling, containment, safe removal of affected materials, decontamination, and final clearance testing before reconstruction.',
    challenge:
      'The project required managing three hazards simultaneously: extensive water damage, asbestos-containing materials, and widespread mould growth. Strict containment, material sampling, asbestos abatement, mould remediation, and moisture control were carefully coordinated to ensure the property could be safely restored without cross-contamination.',
    outcome:
      'All asbestos-containing and mould-affected materials were safely removed, the property passed final clearance testing, and the home was certified ready for reconstruction with a clean and safe environment for the homeowners.',
    tags: ['Sampling/Testing', 'Containment', 'HEPA Filtration', 'Decontamination', 'Clearance Testing', 'Removal & Disposal'],
    coverImage: '/project-4.jpg',
    gallery: ['/project-4.jpg', '/ab-project-1.jpeg', '/ab-project-2.jpeg', '/ab-project-3.jpeg', '/ab-project-4.jpeg'],
  },
  {
    id: 'p5',
    slug: 'sewage-backup-restoration',
    title: 'Sewage Backup Restortation',
    category: 'Sewage Cleanup',
    location: 'Etobicoke, ON',
    scope: 'Single-Family Home',
    duration: '10 days',
    type: 'Residential',
    description:
      'A sewage backup flooded the lower level of a residential property, leaving contaminated water across multiple rooms. Arctiv responded quickly to extract the water, sanitize the affected areas, and begin the restoration process to return the home to a safe condition.',
    detail:
      'A sewer backup released contaminated water into the basement and hallway, affecting tiled floors and nearby finishes. Our team contained the affected areas, extracted the wastewater, removed affected builidng materials, completed sanitization, and began structural drying to prevent further damage.',
    challenge:
      'Contaminated water had spread through connected rooms, requiring careful containment, tear-outs, and thorough disinfection to prevent cross-contamination.',
    outcome:
      'The affected areas were fully cleaned, sanitized, and dried to acceptable moisture levels. The home was safely prepared for repairs, and complete documentation was provided for the insurance claim.',
    tags: ['Residential', 'After-Hours Response', 'Insurance'],
    coverImage: '/sw-project-11.jpeg',
    gallery: ['/sw-project-11.jpeg', '/sw-project-5.jpeg', '/sw-project-2.jpeg', '/sw-project-9.jpeg'],
  },
  {
    id: 'p6',
    slug: 'kitchen-renovation',
    title: 'Kitchen Renovation',
    category: 'Reconstruction',
    location: 'Oakville, ON',
    scope: 'Kitchen + dining area',
    duration: '10 weeks',
    type: 'Residential',
    description:
      'The homeowners wanted a modern, functional kitchen that better suited their lifestyle. Arctiv managed the project from design through construction, delivering a custom kitchen and breakfast area renovation with thoughtful layout improvements and premium finishes.',
    detail:
      'The homeowners wanted to modernize their kitchen and breakfast area with improved functionality, updated finishes, and a more open layout. Arctiv handled the complete design and build process, including minor layout modifications, custom cabinetry, new countertops, flooring, lighting, and finishing details.',
    challenge:
      'The renovation required careful coordination of structural adjustments, cabinetry, electrical, plumbing, and finish trades to deliver a seamless transformation within the planned schedule.',
    outcome:
      'The project was completed within six weeks, delivering a fully customized kitchen and breakfast area with improved flow, modern finishes, and craftsmanship tailored to the homeowners\' vision.',
    tags: ['Kitchen Rebuild', 'Project Management', 'Kitchen Rebuild', 'Cabinetry'],
    coverImage: '/project-6.jpg',
    gallery: ['/project-6.jpg', '/kt-project-1.jpeg', '/kt-project-2.jpeg', ],
  },
  {
    id: 'p7',
    slug: 'residential-home-construction',
    title: 'Residential Home Construction',
    category: 'General Contracting',
    location: 'Markham, ON',
    scope: 'Residential Home',
    duration: '10 months',
    type: 'Residential',
    description:
      'From design planning and permit approvals to foundation work, framing, and final finishes, Arctiv coordinated every stage of this residential construction project, managing trades, inspections, and timelines through to completion.',
    detail:
      'Construction began with site preparation, structural framing, and coordinated trade scheduling. Our team managed the project through the framing stage, ensuring the structure was built to plan, inspected, and ready for roofing, mechanical, electrical, and interior work.',
    challenge:
      'Keeping multiple trades on schedule while maintaining construction quality and meeting inspection requirements at every stage.',
    outcome:
      'The home was completed on schedule, passed all required municipal inspections, and was delivered ready for occupancy with quality workmanship throughout.',
    tags: ['Reconstruction', 'Residential', 'General Contracting', 'Framing'],
    coverImage: '/gc-project-2.jpeg',
    gallery: ['/gc-project-2.jpeg', '/gc-project-3.jpeg', '/gc-project-5.jpeg', '/gc-project-6.jpeg', '/gc-project-4.jpeg', '/gc-project-1.jpeg'],
  },
  {
    id: 'p8',
    slug: 'condo-lobby-unit-restoration',
    title: 'Condo Lobby & Unit Restoration',
    category: 'Reconstruction',
    location: 'Toronto, ON',
    scope: 'Condo Lobby + Multiple Units',
    duration: '3 months',
    type: 'Residential',
    description:
      'Following water damage, Arctiv restored the condominium lobby and multiple residential units, delivering new finishes, refreshed common areas, and fully repaired interiors. Every space was completed to a clean, modern standard while coordinating closely with building management and residents.',
    detail:
      'Water damage affected several residential units and portions of the building\'s common areas. Arctiv managed the restoration from demolition through reconstruction, returning every space to its original condition.',
    challenge:
      'Working throughout an occupied condominium required careful scheduling, controlled access to common areas, and phased construction so residents could continue using the building safely while restoration progressed.',
    outcome:
      'The lobby and affected units were fully restored with new finishes, flooring, and repairs, delivering a clean, modern result completed on schedule.',
    tags: ['Water Damage Restoration', 'Renovation', 'Lobby Rebuild', 'Interior Painting'],
    coverImage: '/cd-project-4.jpeg',
    gallery: ['/cd-project-4.jpeg', '/cd-project-3.jpeg', '/cd-project-5.jpeg', '/cd-project-6.jpeg', '/cd-project-7.jpeg', '/cd-project-1.jpeg'],
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