import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight, Phone, CheckCircle } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/animations";

const regions = [
  {
    name: "Metro Area",
    cities: [
      "Downtown Business District",
      "Midtown",
      "Uptown",
      "Eastside Industrial",
      "Westside Commerce",
      "North Point",
      "South Bay",
      "Central Plaza",
    ],
  },
  {
    name: "Northern Region",
    cities: [
      "Northville",
      "Lakeside",
      "Highland Park",
      "Forest Hills",
      "Summit Point",
      "Mountain View",
      "Valley Heights",
      "Pine Ridge",
    ],
  },
  {
    name: "Southern Region",
    cities: [
      "Southgate",
      "Riverside",
      "Bayview",
      "Harbor City",
      "Coastal Heights",
      "Ocean Park",
      "Palm Springs",
      "Sunset Valley",
    ],
  },
  {
    name: "Eastern Region",
    cities: [
      "Eastpoint",
      "Valley View",
      "Greenfield",
      "Oakwood",
      "Hillside",
      "Meadowbrook",
      "Springfield",
      "Clearwater",
    ],
  },
  {
    name: "Western Region",
    cities: [
      "Westpoint",
      "Desert Springs",
      "Mesa Heights",
      "Canyon View",
      "Red Rock",
      "Silver Lake",
      "Golden Valley",
      "Sunset Hills",
    ],
  },
  {
    name: "Central Region",
    cities: [
      "Central City",
      "Crossroads",
      "Union Square",
      "Heritage Park",
      "Commerce Center",
      "Gateway",
      "Parkview",
      "Fountain Hills",
    ],
  },
];

export default function ServiceAreas() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <div className="max-w-3xl">
                <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                  Service Areas
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Statewide Commercial Junk Removal
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  From major metropolitan areas to regional business centers, we provide 
                  reliable junk removal services wherever your business operates.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="cta" size="lg" asChild>
                    <Link to="/contact">Get Free Quote</Link>
                  </Button>
                  <Button variant="heroOutline" size="lg" asChild>
                    <a href="tel:+1234567890">
                      <Phone className="w-5 h-5" />
                      (123) 456-7890
                    </a>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Coverage Info */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <ScrollReveal delay={0}>
                <div>
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-primary-foreground/70">Cities Served</div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div>
                  <div className="text-4xl font-bold mb-2">6</div>
                  <div className="text-primary-foreground/70">Regional Hubs</div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div>
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-primary-foreground/70">Statewide Coverage</div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Regions Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Our Coverage Areas
                </h2>
                <p className="text-lg text-muted-foreground">
                  We've strategically positioned our teams to provide fast, reliable service 
                  across the entire state. Find your area below.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              staggerDelay={0.1}
            >
              {regions.map((region) => (
                <StaggerItem key={region.name}>
                  <div className="p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{region.name}</h3>
                    </div>
                    <ul className="space-y-2">
                      {region.cities.map((city) => (
                        <li key={city} className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                          {city}
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Don't See Your Area?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're constantly expanding our coverage. Contact us to check availability 
                in your location – we may still be able to serve you.
              </p>
              <Button variant="cta" size="xl" asChild>
                <Link to="/contact">
                  Check Availability
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
