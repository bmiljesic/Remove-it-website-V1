import { Star, Quote } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/animations";

const testimonials = [
  {
    quote: "They cleared out our entire warehouse in one day. Professional team, fair pricing, and zero hassle. Highly recommend for any commercial project.",
    author: "Michael Chen",
    role: "Operations Director",
    company: "Pacific Logistics",
    rating: 5,
  },
  {
    quote: "As a property manager, I need reliable partners. Remove It Services handles all our tenant turnovers quickly and professionally. They've never let us down.",
    author: "Sarah Williams",
    role: "Property Manager",
    company: "Westside Properties",
    rating: 5,
  },
  {
    quote: "The construction debris removal was fast and efficient. They worked around our schedule and kept the job site clean. Great communication throughout.",
    author: "David Martinez",
    role: "Project Manager",
    company: "BuildRight Construction",
    rating: 5,
  },
];

export function TrustSignals() {
  return (
    <section className="py-24 relative">
      {/* Subtle section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Client Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Trusted by Leading Businesses
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it. Here's what our commercial clients have to say 
              about working with Remove It Services.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.1}
        >
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <div className="h-full p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <Quote className="w-10 h-10 text-accent/30 mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="pt-6 border-t border-border">
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
