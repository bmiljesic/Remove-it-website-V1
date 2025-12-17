import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/animations";

const regions = [
  {
    state: "Pennsylvania",
    name: "Delaware County",
    cities: ["Media", "Chester", "Upper Darby", "Radnor", "Springfield"],
  },
  {
    state: "Delaware",
    name: "The State",
    cities: ["Wilmington", "Newark", "Dover", "Middletown", "Smyrna"],
  },
  {
    state: "Maryland",
    name: "Cecil County",
    cities: ["Elkton", "North East", "Perryville", "Chesapeake City", "Rising Sun"],
  },
  {
    state: "Maryland",
    name: "Harford County",
    cities: ["Bel Air", "Aberdeen", "Havre de Grace", "Edgewood", "Fallston"],
  },
];

export function ServiceAreasPreview() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Content */}
          <div className="text-center">
            <ScrollReveal>
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Service Areas
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Serving Businesses Across the Region
              </h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
                We provide reliable junk removal services across Delaware County Pennsylvania, 
                Delaware (the state), Cecil County Maryland, and Harford County Maryland.
              </p>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-10" staggerDelay={0.1}>
              {regions.map((region, index) => (
                <StaggerItem key={`${region.state}-${region.name}-${index}`}>
                  <div className="text-center md:text-left">
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-1 flex items-center justify-center md:justify-start gap-2">
                      <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                      {region.name}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground mb-2.5">{region.state}</p>
                    <ul className="space-y-1">
                      {region.cities.slice(0, 3).map((city) => (
                        <li key={city} className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {city}
                        </li>
                      ))}
                      <li className="text-sm md:text-base text-accent font-medium mt-1">
                        +{region.cities.length - 3} more
                      </li>
                    </ul>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <ScrollReveal delay={0.3}>
              <Link
                to="/service-areas"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
              >
                View All Service Areas
                <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
