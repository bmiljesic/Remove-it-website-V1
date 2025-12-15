import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/animations";

const regions = [
  {
    name: "Metro Area",
    cities: ["Downtown", "Midtown", "Uptown", "Eastside", "Westside"],
  },
  {
    name: "Northern Region",
    cities: ["Northville", "Lakeside", "Highland", "Forest Park", "Summit"],
  },
  {
    name: "Southern Region",
    cities: ["Southgate", "Riverside", "Bayview", "Harbor City", "Coastal"],
  },
  {
    name: "Eastern Region",
    cities: ["Eastpoint", "Valley View", "Greenfield", "Oakwood", "Hillside"],
  },
];

export function ServiceAreasPreview() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Map Visualization */}
          <ScrollReveal direction="left">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Stylized Map Background */}
              <div className="absolute inset-0 rounded-3xl bg-card border border-border shadow-card overflow-hidden">
                <div 
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--foreground)) 1px, transparent 0)`,
                    backgroundSize: "20px 20px",
                  }}
                />
                
                {/* Animated Dots representing coverage */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 rounded-full bg-accent animate-pulse"
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${20 + Math.random() * 60}%`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}
                
                {/* Central Hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center animate-pulse">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Statewide Badge */}
              <div className="absolute -bottom-4 -right-4 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold shadow-lg">
                Statewide Coverage
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <div>
            <ScrollReveal direction="right">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Service Areas
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Serving Businesses Across the State
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From metropolitan centers to regional commercial hubs, we provide reliable 
                junk removal services wherever your business operates.
              </p>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-2 gap-6 mb-8" staggerDelay={0.1}>
              {regions.map((region) => (
                <StaggerItem key={region.name}>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent" />
                      {region.name}
                    </h3>
                    <ul className="space-y-1">
                      {region.cities.slice(0, 3).map((city) => (
                        <li key={city} className="text-sm text-muted-foreground">
                          {city}
                        </li>
                      ))}
                      <li className="text-sm text-accent font-medium">
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
