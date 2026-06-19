export interface ServicePageData {
  slug: string
  badge: string
  headline: string
  subline: string
  heroDesc: string
  whatItIs: string
  signs: { label: string; desc: string }[]
  process: { title: string; desc: string }[]
  benefits: { title: string; desc: string }[]
  faqs: { q: string; a: string }[]
  relatedServices: { label: string; path: string }[]
}

export const waterDamageData: ServicePageData = {
  slug: 'water-damage',
  badge: 'Water Damage',
  headline: 'Fast Water Extraction.',
  subline: 'Full structural recovery.',
  heroDesc: 'Burst pipes, flooding, appliance leaks, or sewer backups, water damage spreads fast. Arctiv arrives within an hour, extracts water, and dries your property to IICRC standards to prevent mould and structural deterioration.',
  whatItIs: 'Water damage is any moisture intrusion that threatens the integrity of your building materials, contents, or air quality. Even small leaks left untreated can soak into drywall and subfloor, creating ideal conditions for mould within 24–48 hours. Class 1 to Class 4 water damage all require different drying strategies, Arctiv uses psychrometric assessments and industrial equipment to handle all categories.',
  signs: [
    { label: 'Visible Standing Water', desc: 'Pooling on floors, in basements or crawlspaces' },
    { label: 'Staining or Discolouration', desc: 'Yellow or brown marks on ceilings and walls' },
    { label: 'Warped or Buckled Flooring', desc: 'Wood, laminate or tile lifting from subfloor' },
    { label: 'Musty Odour', desc: 'Early sign of mould developing behind surfaces' },
  ],
  process: [
    { title: 'Emergency Assessment', desc: 'We arrive, document the scope, classify the water damage, and brief you on the plan before touching anything.' },
    { title: 'Water Extraction', desc: 'Industrial truck-mounts and portable extractors remove all standing and embedded water from surfaces and cavities.' },
    { title: 'Structural Drying', desc: 'We deploy dehumidifiers, air movers and drying mats. Develop moisture logs, create moisture maps and track progress to IICRC S500 drying goals.' },
    { title: 'Restoration & Repair', desc: 'Once dry, our crews replace damaged drywall, flooring, insulation, and finishes to return your property to pre-loss condition.' },
  ],
  benefits: [
    { title: 'Arrives Within the Hour', desc: 'Our on-call crews are dispatched immediately so extraction starts before secondary damage sets in.' },
    { title: 'Insurance Billing Support', desc: 'We document every step with photos, moisture logs, and reports your insurance adjuster can use directly.' },
    { title: 'IICRC-Certified Technicians', desc: 'All drying work follows IICRC S500 standards — the industry benchmark for water damage remediation.' },
    { title: 'One Team, Start to Finish', desc: 'No hand-offs between contractors. Arctiv handles extraction, drying, and repairs under one roof.' },
    { title: 'Mould Secondary Damage Prevention', desc: 'Our drying protocols are designed to eliminate moisture below mould-growth thresholds before remediation is ever needed.' },
    { title: 'Advanced Moisture Mapping', desc: 'Thermal imaging and moisture meters locate water hidden inside walls and floors before it causes hidden damage.' },
  ],
  faqs: [
    { q: 'How quickly do you respond to water damage emergencies?', a: 'We aim to arrive within a hour for the Greater Toronto Area. Call our emergency line any time, we are staffed 24/7/365.' },
    { q: 'Will my insurance cover water damage restoration?', a: 'Most standard homeowner and commercial property policies cover sudden and accidental water damage. We work directly with all major insurers and provide full documentation to support your claim.' },
    { q: 'How long does the drying process take?', a: 'Drying time depends on the class, category, and severity of the loss. Most residential jobs achieve drying goals in 3–5 days with industrial equipment. We monitor the process and never close a job until readings confirm it is dry.' },
    { q: 'What if mould is already present?', a: 'If mould is discovered during the drying process, we pivot to a full mould remediation scope. Both can often be addressed concurrently, saving you time.' },
  ],
  relatedServices: [
    { label: 'Structural Drying', path: '/services/structural-drying' },
    { label: 'Mould Remediation', path: '/services/mould-remediation' },
    { label: 'Sewage Cleanup', path: '/services/sewage-cleanup' },
    { label: 'Reconstruction', path: '/services/repairs-renovation' },
  ],
}

export const fireDamageData: ServicePageData = {
  slug: 'fire-damage',
  badge: 'Fire & Smoke Damage',
  headline: 'From board-up',
  subline: 'to full rebuild.',
  heroDesc: 'Fire leaves behind soot, smoke residue, and structural damage that compounds with every passing hour. Arctiv secures your property immediately, cleans every affected surface, neutralizes odour, and manages your full structural restoration.',
  whatItIs: 'Fire damage is rarely limited to what the flames touch. Smoke and soot travel throughout a structure through the HVAC system, settling on every surface — including areas that appear untouched. Protein residues from kitchen fires are nearly invisible but produce powerful odours. Acidic soot continues corroding metal, glass, and painted surfaces for days. Immediate response limits this ongoing damage and reduces total restoration costs significantly.',
  signs: [
    { label: 'Soot on Walls & Ceilings', desc: 'Black or grey deposits, especially near vents and corners' },
    { label: 'Persistent Smoke Odour', desc: 'Lingering smell even days after the fire is extinguished' },
    { label: 'Discoloured or Charred Materials', desc: 'Visible burn damage to framing, flooring, or finishes' },
    { label: 'Yellowed or Stained Surfaces', desc: 'Nicotine-like staining from smoke residue on painted walls' },
  ],
  process: [
    { title: 'Site Handover & Initial Assessment', desc: 'Once the property is deemed safe by the fire department, we assess fire, smoke, soot, and water damage to determine restoration requirements.' },
    { title: 'Forensic Investigation & Engineering Review', desc: 'Qualified investigators determine the fire origin while engineers assess structural conditions and repair needs.' },
    { title: 'Documentation & Insurance Coordination', desc: 'We prepare damage reports, photographs, and restoration scopes to support insurance review and approvals.' },
    { title: 'Remediation & Reconstruction', desc: 'Damaged materials are removed, affected areas cleaned, and repairs completed to restore the property.' }
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
    { q: 'How is fire restoration handled with insurance?', a: "We work directly with your insurance company throughout the process. We document the scope, provide itemized estimates, and communicate with adjusters so you don't have to manage the paperwork while dealing with the loss." },
    { q: 'What happens to my contents?', a: 'Salvageable contents are inventoried, packed out, cleaned at our facility, and stored until the property is ready. Unsalvageable items are documented for your insurance claim.' },
    { q: 'How long does fire damage restoration take?', a: 'Cleaning and deodorization typically takes 4-14 days. If structural repairs are needed, total timelines vary by scope but your project manager will provide a detailed schedule at the outset.' },
  ],
  relatedServices: [
    { label: 'Water Damage', path: '/services/water-damage' },
    { label: 'Mould Remediation', path: '/services/mould-remediation' },
    { label: 'Reconstruction', path: '/services/repairs-renovation' },
    { label: 'General Contracting', path: '/services/general-contracting' },
  ],
}

export const mouldRemediationData: ServicePageData = {
  slug: 'mould-remediation',
  badge: 'Mould Remediation',
  headline: 'Safe, thorough',
  subline: 'mould removal.',
  heroDesc: 'Mould spreads fast and hides behind walls. Arctiv contains, removes, and tests to Health Canada standards — ensuring your property is safe and properly documented for insurance.',
  whatItIs: 'Mould is a fungal growth that develops on wet materials. It can cause structural damage to buildings and health problems for occupants. Mould remediation is the process of removing, cleaning, and treating mould-contaminated areas to restore a safe indoor environment. Proper containment and negative air pressure are critical to prevent cross-contamination during removal.',
  signs: [
    { label: 'Visible Mould Growth', desc: 'Black, green, or white patches on walls, ceilings, or floors' },
    { label: 'Musty Odours', desc: 'Persistent earthy or musty smells, especially in basements or bathrooms' },
    { label: 'Water Damage History', desc: 'Previous leaks, flooding, or condensation issues' },
    { label: 'Discoloured Walls & Surfaces', desc: 'Yellow, brown, or dark stains on walls, ceilings, or floors caused by hidden moisture issues.' },
  ],
  process: [
    { title: 'Inspection & Testing', desc: 'Certified technicians assess the extent of mould growth, identify moisture sources, and collect samples for laboratory analysis.' },
    { title: 'Containment Setup', desc: 'Physical barriers and negative air pressure systems isolate the affected area to prevent spore dispersal during removal.' },
    { title: 'Removal & Treatment', desc: 'HEPA vacuuming, antimicrobial application, and physical removal of contaminated materials following Health Canada protocols.' },
    { title: 'Clearance Testing', desc: 'Post-remediation air and surface sampling confirms mould levels have returned to normal, with full documentation provided.' },
  ],
  benefits: [
    { title: 'Health Canada & IICRC Compliant', desc: 'Our remediation process follows Health Canada and IICRC standards to ensure safe mould removal and improved indoor air quality.' },
    { title: 'Containment Expertise', desc: 'Engineered containment with HEPA filtration prevents cross-contamination to unaffected areas.' },
    { title: 'Rapid Response Service', desc: 'Fast assessment and remediation help limit contamination, reduce downtime, and minimize property disruption.' },
    { title: 'Insurance Documentation', desc: 'Complete photo documentation, lab reports, and clearance certificates support your insurance claim.' },
    { title: 'Certified Technicians', desc: 'Our mould remediation specialists hold IICRC certifications for safe, effective removal.' },
    { title: 'Air Quality Testing', desc: 'Pre- and post-remediation air quality testing provides objective proof of a safe environment.' },
  ],
  faqs: [
    { q: 'How do I know if I have a mould problem?', a: 'Visible mould growth, musty odours, or persistent moisture issues are common indicators. We offer professional mould inspections with air and surface sampling for definitive answers.' },
    { q: 'What happens during the mould remediation process?', a: 'The process typically includes containment of the affected area, removal of contaminated materials, detailed cleaning, moisture control measures, and final verification to ensure the area is ready for restoration.' },
    { q: 'How long does mould remediation take?', a: 'Most residential mould remediation projects are completed within 3 days. Larger commercial projects or extensive colonization may take longer. Your project manager will provide a specific timeline after assessment.' },
    { q: 'Will mould come back after remediation?', a: 'If the underlying moisture issue is resolved and proper remediation is performed, mould should not return.' },
  ],
  relatedServices: [
    { label: 'Water Damage', path: '/services/water-damage' },
    { label: 'Structural Drying', path: '/services/structural-drying' },
    { label: 'Sewage Cleanup', path: '/services/sewage-cleanup' },
    { label: 'Reconstruction', path: '/services/repairs-renovation' },
  ],
}

export const structuralDryingData: ServicePageData = {
  slug: 'structural-drying',
  badge: 'Structural Drying',
  headline: 'Precision drying.',
  subline: 'Zero compromise.',
  heroDesc: 'We dry walls, floors, and cavities to proper moisture levels using industrial equipment and daily monitoring. Our IICRC-certified drying protocols ensure your structure is truly dry, not just surface-dry.',
  whatItIs: 'Structural drying is the systematic removal of moisture from building materials and cavities using specialized equipment. Unlike simple air drying, professional structural drying involves psychrometric calculations, controlled air movement, and dehumidification to achieve specific moisture content goals. Proper structural drying prevents mould growth, wood rot, and long-term structural damage.',
  signs: [
    { label: 'Elevated Moisture Readings', desc: 'Moisture meters show elevated levels in walls, floors, or ceilings' },
    { label: 'Damp or Swollen Materials', desc: 'Drywall, wood framing, or subfloor that feels damp or has visibly swelled' },
    { label: 'Condensation Issues', desc: 'Persistent condensation on windows, pipes, or cool surfaces' },
    { label: 'Slow Drying After Water Damage', desc: 'Materials that remain damp days after initial water extraction' },
  ],
  process: [
    { title: 'Moisture Assessment', desc: 'Comprehensive moisture mapping using thermal imaging cameras, moisture meters, and psychrometric readings to establish baseline conditions.' },
    { title: 'Equipment Deployment', desc: 'Strategic placement of industrial dehumidifiers, air movers, and drying mats based on the drying plan and room geometry.' },
    { title: 'Daily Monitoring', desc: 'Technicians visit daily to record moisture readings, adjust equipment, and track progress against IICRC S500 drying goals.' },
    { title: 'Verification & Documentation', desc: 'Final moisture readings confirm materials are dry to acceptable levels, with full documentation for insurance and records.' },
  ],
  benefits: [
    { title: 'IICRC S500 Compliant', desc: 'All drying work follows the IICRC S500 Standard for Professional Water Damage Restoration.' },
    { title: 'Industrial Equipment', desc: 'Low-grain refrigerant and desiccant dehumidifiers capable of achieving target equilibrium moisture content.' },
    { title: 'Daily Documentation', desc: 'Daily moisture logs, photos, and progress reports keep you and your insurer informed throughout the process.' },
    { title: 'Mould Prevention', desc: 'Proper drying below 16% wood moisture content eliminates conditions that support mould growth.' },
    { title: 'Insurance Coordination', desc: 'We communicate directly with adjusters and provide the documentation needed to support your claim.' },
    { title: 'Guaranteed Results', desc: 'We ensure the moisture readings are within acceptable limits before demobilizing equipment.' },
  ],
  faqs: [
    { q: 'How long does structural drying take?', a: 'Most residential structural drying projects take 3–5 days. The exact timeline depends on the extent of water damage, the types of materials affected, and environmental conditions. We monitor daily and adjust our approach as needed.' },
    { q: 'What equipment do you use for structural drying?', a: 'We use a combination of industrial-grade low-grain refrigerant dehumidifiers, desiccant dehumidifiers, high-velocity air movers, and specialized drying systems for hardwood floors and wall cavities.' },
    { q: 'How do you know when something is truly dry?', a: 'We use moisture meters, thermal imaging, and psychrometric calculations to determine when materials have reached their equilibrium moisture content — the point at which they are as dry as the surrounding air.' },
    { q: 'Can I stay in my home during structural drying?', a: 'In most cases, yes. Our equipment is designed to operate safely in occupied spaces. We will advise you if specific areas need to be temporarily vacated due to the extent of damage or equipment placement.' },
  ],
  relatedServices: [
    { label: 'Water Damage', path: '/services/water-damage' },
    { label: 'Mould Remediation', path: '/services/mould-remediation' },
    { label: 'Reconstruction', path: '/services/repairs-renovation' },
    { label: 'General Contracting', path: '/services/general-contracting' },
  ],
}

export const stormDamageData: ServicePageData = {
  slug: 'storm-damage',
  badge: 'Storm Damage Repair',
  headline: 'Weather the storm,',
  subline: 'then rebuild stronger.',
  heroDesc: 'Severe weather can cause sudden, extensive damage to your property. Arctiv provides emergency response for storm damage — from temporary repairs and water extraction to full structural restoration and rebuild.',
  whatItIs: 'Storm damage restoration addresses the effects of severe weather events including wind damage, hail damage, fallen trees, roof damage, and flooding. Storm damage often involves multiple types of damage simultaneously — water intrusion, structural impact, and exterior envelope compromise. Coordinated emergency response followed by comprehensive restoration is essential to prevent secondary damage and restore the property to pre-storm condition.',
  signs: [
    { label: 'Roof Damage', desc: 'Missing shingles, damaged flashing, or visible holes in the roof' },
    { label: 'Water Intrusion', desc: 'Leaks, water stains, or flooding following a storm event' },
    { label: 'Structural Impact', desc: 'Fallen trees, damaged walls, or compromised structural elements' },
    { label: 'Exterior Envelope Damage', desc: 'Broken windows, damaged siding, or compromised doors' },
  ],
  process: [
    { title: 'Emergency Response', desc: 'Immediate dispatch to secure the property, emergency tarping, board-ups, and temporary weatherproofing to prevent further damage.' },
    { title: 'Damage Assessment', desc: 'Thorough documentation of all storm-related damage for insurance claims, including structural, water, and content damage.' },
    { title: 'Restoration & Repairs', desc: 'Coordinated repair of all damaged systems from roofing, exterior envelope, structural elements, to interior finishes.' },
    { title: 'Final Inspection', desc: 'Complete quality inspection to ensure all work meets building codes and your satisfaction before final sign-off.' },
  ],
  benefits: [
    { title: '24/7 Emergency Response', desc: 'Storms do not wait for business hours. Our emergency crews are available around the clock for immediate response.' },
    { title: 'Full-Service Restoration', desc: 'From emergency tarping to complete rebuilds, one team handles every aspect of storm damage recovery.' },
    { title: 'Insurance Expertise', desc: 'We have extensive experience with storm damage claims and provide the documentation insurers require.' },
    { title: 'Structural Assessment', desc: 'Our team coordinates with insurance assigned structural engineer to address compromised structural elements.' },
    { title: 'Weatherproofing Priority', desc: 'Immediate temporary repairs prevent secondary water damage while permanent repairs are planned and executed.' },
    { title: 'Code-Compliant Rebuilds', desc: 'All reconstruction meets or exceeds current Ontario Building Code requirements.' },
  ],
  faqs: [
    { q: 'How quickly can you respond to storm damage?', a: 'We provide 24/7 emergency response for storm damage. Our goal is to have crews on-site within the hour for the Greater Toronto Area to perform emergency temporary repairs and prevent further damage.' },
    { q: 'Will my insurance cover storm damage?', a: 'Most standard property insurance policies cover storm damage. We work directly with your insurance company, provide comprehensive documentation, and help navigate the claims process from start to finish.' },
    { q: 'What temporary repairs do you provide?', a: 'Emergency services include roof tarping, window board-ups, structural shoring, water extraction, and temporary weatherproofing to protect your property until permanent repairs can be completed.' },
    { q: 'How long does storm damage restoration take?', a: 'The timeline varies significantly based on the extent of damage. Minor repairs may take a few days, while major reconstruction projects can take several weeks. We provide a detailed timeline after our initial assessment.' },
  ],
  relatedServices: [
    { label: 'Water Damage', path: '/services/water-damage' },
    { label: 'Structural Drying', path: '/services/structural-drying' },
    { label: 'Repairs & Renovation', path: '/services/repairs-renovation' },
    { label: 'General Contracting', path: '/services/general-contracting' },
  ],
}

export const sewageCleanupData: ServicePageData = {
  slug: 'sewage-cleanup',
  badge: 'Sewage Cleanup',
  headline: 'Safe sewage cleanup,',
  subline: 'from start to finish.',
  heroDesc: 'Sewage backups are serious biohazard events that require immediate professional response. Arctiv provides safe, thorough sewage cleanup and restoration — protecting your health and your property.',
  whatItIs: 'Sewage cleanup, also known as Category 3 water damage restoration, involves the safe removal and remediation of water contaminated with pathogens, bacteria, and other hazardous materials. Sewage backups can occur due to municipal sewer line issues, septic system failures, or clogged drains. Proper cleanup requires specialized training, PPE, and disposal procedures to ensure the property is safely restored to habitable conditions.',
  signs: [
    { label: 'Sewage Backup', desc: 'Wastewater entering the property through drains, toilets, or floor drains' },
    { label: 'Foul Odours', desc: 'Strong, persistent sewage smell inside the property' },
    { label: 'Slow Drains', desc: 'Multiple drains backing up or draining slowly simultaneously' },
    { label: 'Gurgling Sounds', desc: 'Unusual noises from plumbing fixtures indicating blockage' },
  ],
  process: [
    { title: 'Emergency Containment', desc: 'Immediate isolation of affected areas, stopping the source if possible, and establishing safety protocols for occupants.' },
    { title: 'Extraction & Removal', desc: 'Safe removal of sewage water and contaminated materials using specialized equipment and proper disposal methods.' },
    { title: 'Sanitization & Deodorization', desc: 'Thorough cleaning, antimicrobial treatment, and odour neutralization of all affected surfaces and materials.' },
    { title: 'Restoration & Rebuild', desc: 'Replacement of removed materials and full restoration to return the property to safe, habitable conditions.' },
  ],
  benefits: [
    { title: 'Specialized Sewage Cleanup', desc: 'Our team follows industry-standard procedures for the safe cleanup and restoration of sewage-affected properties.' },
    { title: 'Health Protection', desc: 'Proper containment, PPE, and sanitization protocols protect occupants and workers from exposure to harmful pathogens.' },
    { title: 'Complete Documentation', desc: 'Full photo and written documentation supports insurance claims and confirms restoration to safe standards.' },
    { title: 'Proper Disposal', desc: 'All contaminated materials are disposed of following Ontario regulations for biohazard waste.' },
    { title: 'Odour Elimination', desc: 'Advanced deodorization techniques eliminate sewage odours at the source, not just masking them.' },
    { title: 'Insurance Coordination', desc: 'We work directly with insurers to ensure proper coverage and documentation for sewage damage claims.' },
  ],
  faqs: [
    { q: 'Is sewage cleanup covered by insurance?', a: 'Sewage cleanup coverage varies by policy. Some policies cover sewer backup with specific endorsements. We work with your insurance company to determine coverage and provide the documentation needed for your claim.' },
    { q: 'How dangerous is sewage backup?', a: 'Sewage contains bacteria, viruses, parasites, and other pathogens that can cause serious illness. It is considered a biohazard and should only be handled by trained professionals with proper protective equipment.' },
    { q: 'How long does sewage cleanup take?', a: 'Most residential sewage cleanup projects take 3–7 days, depending on the extent of contamination and the amount of material that needs to be removed and replaced.' },
    { q: 'Can I clean up sewage myself?', a: 'We strongly recommend against attempting sewage cleanup yourself. Professional equipment, training, and proper disposal are essential for safe and effective remediation. Exposure to sewage may cause serious health problems.' },
  ],
  relatedServices: [
    { label: 'Water Damage', path: '/services/water-damage' },
    { label: 'Mould Remediation', path: '/services/mould-remediation' },
    { label: 'Structural Drying', path: '/services/structural-drying' },
    { label: 'Repairs & Renovation', path: '/services/repairs-renovation' },
  ],
}

export const repairsRenovationData: ServicePageData = {
  slug: 'repairs-renovation',
  badge: 'Repairs & Renovation',
  headline: 'Restore. Rebuild.',
  subline: 'Reimagine.',
  heroDesc: 'We repair what was damaged and renovate what you want improved. From drywall to full kitchen rebuilds, Arctiv handles every aspect of post-loss reconstruction with quality craftsmanship.',
  whatItIs: 'Post-loss reconstruction and renovation involves restoring a property to its pre-damage condition or better. This can range from replacing damaged drywall and flooring to complete kitchen and bathroom renovations. Our reconstruction services are integrated with our restoration services, ensuring a seamless transition from damage remediation to final finishes, all managed under one contract with a single point of contact.',
  signs: [
    { label: 'Post-Damage Repairs Needed', desc: 'Restoration work has left areas needing reconstruction and finishing' },
    { label: 'Opportunity for Improvement', desc: 'Consider upgrades or layout changes while repairs are underway' },
    { label: 'Insurance-Covered Rebuild', desc: 'Your policy covers replacement with like-kind quality materials' },
    { label: 'Outdated Finishes', desc: 'Damage has exposed outdated systems or finishes that need updating' },
  ],
  process: [
    { title: 'Assessment & Scope', desc: 'Detailed assessment of all repair and renovation needs, with a comprehensive scope of work and timeline.' },
    { title: 'Design & Selection', desc: 'Material selection, colour choices, and design decisions with guidance from our renovation specialists.' },
    { title: 'Construction', desc: 'Coordinated construction by our in-house trades fron framing, drywall, electrical, plumbing, flooring, to finishing.' },
    { title: 'Final Walkthrough', desc: 'Complete quality inspection and walkthrough to ensure every detail meets our standards and your expectations.' },
  ],
  benefits: [
    { title: 'Seamless Transition', desc: 'No gap between restoration and reconstruction — one team manages the entire process from damage to done.' },
    { title: 'Quality Craftsmanship', desc: 'Our in-house tradespeople are experienced professionals who take pride in their work.' },
    { title: 'Design Guidance', desc: 'Our renovation specialists help you make informed choices about materials, layouts, and finishes.' },
    { title: 'Insurance Coordination', desc: 'We communicate directly with your insurer to ensure covered repairs are properly documented and approved.' },
    { title: 'Project Management', desc: 'A dedicated project manager coordinates all trades, timelines, and quality control throughout the project.' },
    { title: 'Warranty Protection', desc: 'All reconstruction work is backed by our workmanship warranty for your peace of mind.' },
  ],
  faqs: [
    { q: 'Can I upgrade materials during reconstruction?', a: 'Yes, reconstruction is an excellent opportunity to upgrade finishes and materials. We will help you understand what your insurance covers and the cost difference for upgrades you choose.' },
    { q: 'How long does post-loss reconstruction take?', a: 'The timeline depends on the scope of work. Minor repairs may take a few days, while full kitchen or bathroom renovations can take 4–8 weeks. We provide a detailed schedule before starting work.' },
    { q: 'Do I need separate contractors for different trades?', a: 'No. Arctiv coordinates all trades in-house. You have a single point of contact and one contract covering all aspects of the reconstruction.' },
    { q: 'Will reconstruction match my existing finishes?', a: 'We match existing finishes as closely as possible for insurance-covered repairs. For renovation work, you choose the materials and finishes you want.' },
  ],
  relatedServices: [
    { label: 'Water Damage', path: '/services/water-damage' },
    { label: 'Fire Damage', path: '/services/fire-damage' },
    { label: 'General Contracting', path: '/services/general-contracting' },
    { label: 'Mould Remediation', path: '/services/mould-remediation' },
  ],
}

export const generalContractingData: ServicePageData = {
  slug: 'general-contracting',
  badge: 'General Contracting',
  headline: 'One team.',
  subline: 'Every trade.',
  heroDesc: 'We coordinate every trade on your project, from demolition to finishing, for both residential and commercial work. Arctiv manages the complexity so you do not have to.',
  whatItIs: 'General contracting involves the complete coordination and management of a construction or renovation project. As your general contractor, Arctiv handles all aspects of the project — hiring and scheduling subcontractors, obtaining permits, ordering materials, managing timelines and budgets, and ensuring quality control throughout. Whether it is a new addition, a commercial tenant improvement, or a large-scale renovation, we bring the expertise and organization needed to deliver on time and on budget.',
  signs: [
    { label: 'Complex Project', desc: 'Multiple trades and phases requiring professional coordination' },
    { label: 'Permit Requirements', desc: 'Your project requires building permits and inspections' },
    { label: 'Budget Management', desc: 'You need professional oversight to manage costs and avoid overruns' },
    { label: 'Timeline Pressure', desc: 'Your project has a fixed deadline that requires careful scheduling' },
  ],
  process: [
    { title: 'Planning & Permits', desc: 'Detailed project planning, permit applications, and material procurement before any work begins.' },
    { title: 'Trade Coordination', desc: 'Scheduling and management of all subcontractors in the proper sequence for maximum efficiency.' },
    { title: 'Quality Control', desc: 'Regular inspections at each phase ensure work meets our standards and building code requirements.' },
    { title: 'Project Completion', desc: 'Final inspections, deficiency resolution, and thorough cleanup before handover.' },
  ],
  benefits: [
    { title: 'Single Point of Contact', desc: 'One project manager handles everything, no need to coordinate multiple contractors yourself.' },
    { title: 'Licensed & Insured', desc: 'Full liability insurance and WSIB coverage protect you throughout the project.' },
    { title: 'Permit Management', desc: 'We handle all permit applications, inspections, and compliance requirements.' },
    { title: 'Budget Control', desc: 'Detailed estimates and ongoing cost management keep your project on budget.' },
    { title: 'Timeline Management', desc: 'Professional scheduling ensures trades are coordinated efficiently to meet deadlines.' },
    { title: 'Quality Assurance', desc: 'Our quality control process includes inspections at every phase of construction.' },
  ],
  faqs: [
    { q: 'What types of projects do you handle as a general contractor?', a: 'We handle residential renovations, additions, new construction, commercial tenant improvements, and multi-unit projects across the Greater Toronto Area.' },
    { q: 'How do you charge for general contracting?', a: 'We offer both fixed-price contracts and cost-plus arrangements depending on the project scope and your preference. We provide detailed estimates upfront.' },
    { q: 'Do you handle permits and inspections?', a: 'Yes, permit acquisition and coordination of all required inspections are included in our general contracting services.' },
    { q: 'How do you ensure quality control?', a: 'Our project managers conduct inspections at each phase of construction, and we only work with licensed, insured subcontractors who meet our quality standards.' },
  ],
  relatedServices: [
    { label: 'Repairs & Renovation', path: '/services/repairs-renovation' },
    { label: 'Water Damage', path: '/services/water-damage' },
    { label: 'Fire Damage', path: '/services/fire-damage' },
    { label: 'Storm Damage', path: '/services/storm-damage' },
  ],
}

export const serviceDataMap: Record<string, ServicePageData> = {
  'water-damage': waterDamageData,
  'fire-damage': fireDamageData,
  'mould-remediation': mouldRemediationData,
  'structural-drying': structuralDryingData,
  'storm-damage': stormDamageData,
  'sewage-cleanup': sewageCleanupData,
  'repairs-renovation': repairsRenovationData,
  'general-contracting': generalContractingData,
}
