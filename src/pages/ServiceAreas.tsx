import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight, Phone, CheckCircle } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/animations";

const regions = [
  {
    state: "Pennsylvania",
    name: "Delaware County",
    cities: [
      "Media",
      "Chester",
      "Upper Darby",
      "Radnor",
      "Marple",
      "Springfield",
      "Haverford",
      "Ridley",
    ],
  },
  {
    state: "Delaware",
    name: "The State",
    cities: [
      "Wilmington",
      "Newark",
      "Dover",
      "Middletown",
      "Smyrna",
      "Milford",
      "Seaford",
      "Georgetown",
    ],
  },
  {
    state: "Maryland",
    name: "Cecil County",
    cities: [
      "Elkton",
      "North East",
      "Perryville",
      "Chesapeake City",
      "Rising Sun",
      "Port Deposit",
      "Conowingo",
      "Cecilton",
    ],
  },
  {
    state: "Maryland",
    name: "Harford County",
    cities: [
      "Bel Air",
      "Aberdeen",
      "Havre de Grace",
      "Edgewood",
      "Joppatowne",
      "Fallston",
      "Jarrettsville",
      "Darlington",
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
                  Commercial Junk Removal Services
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Serving Delaware County Pennsylvania, Delaware (the state), Cecil County Maryland, 
                  and Harford County Maryland with reliable junk removal services for your business.
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
                  <div className="text-4xl font-bold mb-2">4</div>
                  <div className="text-primary-foreground/70">Service Areas</div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div>
                  <div className="text-4xl font-bold mb-2">30+</div>
                  <div className="text-primary-foreground/70">Cities & Towns</div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div>
                  <div className="text-4xl font-bold mb-2">2</div>
                  <div className="text-primary-foreground/70">States Covered</div>
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
                  We provide fast, reliable service across Delaware County Pennsylvania, 
                  Delaware (the state), Cecil County Maryland, and Harford County Maryland. Find your area below.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              staggerDelay={0.1}
            >
              {regions.map((region, index) => (
                <StaggerItem key={`${region.state}-${region.name}-${index}`}>
                  <div className="p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{region.name}</h3>
                        <p className="text-sm text-muted-foreground">{region.state}</p>
                      </div>
                    </div>
                    <ul className="space-y-2 mt-4">
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
