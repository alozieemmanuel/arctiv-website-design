import { Star, Quote} from 'lucide-react'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ScrollReveal'
import { SectionLabel } from '@/components/SectionLabel'

interface Testimonial {
  name: string
  role: string
  location: string
  quote: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah M.',
    role: 'Homeowner',
    location: 'Toronto',
    quote: "Arctiv responded within 45 minutes when our basement flooded. Their team was professional, thorough, and kept us informed every step of the way. Our basement looks better than it did before the flood.",
    rating: 5,
  },
  {
    name: 'David L.',
    role: 'Property Manager',
    location: 'Mississauga',
    quote: "We manage 12 commercial properties and Arctiv is our go-to for any restoration work. Their 24/7 response time and direct insurance billing makes our jobs so much easier. Highly recommend.",
    rating: 5,
  },
  {
    name: 'Jennifer K.',
    role: 'Homeowner',
    location: 'Oakville',
    quote: "After a kitchen fire, we were devastated. Arctiv not only restored our kitchen but helped us redesign it into something even better. They handled everything with our insurance company too.",
    rating: 5,
  },
]

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 relative">
      {/* Quote icon */}
      <Quote className="w-8 h-8 text-copper-500 mb-4" />

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-copper-500 fill-copper-500" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-slate-600 text-sm leading-relaxed mb-6">
        "{testimonial.quote}"
      </p>

      {/* Author */}
      <div className="border-t border-slate-100 pt-4">
        <p className="text-navy-900 font-semibold text-sm">{testimonial.name}</p>
        <p className="text-slate-500 text-xs">
          {testimonial.role}, {testimonial.location}
        </p>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="bg-slate-100 py-24 lg:py-32">
      <div className="container-custom">
        {/* Header */}
        <ScrollReveal className="text-center mb-14">
          <SectionLabel text="Client Testimonials" centered />
          <h2 className="text-3xl lg:text-4xl font-semibold text-navy-900 tracking-tight">
            What our clients say about us.
          </h2>
        </ScrollReveal>

        {/* Testimonial Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <TestimonialCard testimonial={t} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
