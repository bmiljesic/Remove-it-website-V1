import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Building, 
  HardHat, 
  Store, 
  Warehouse, 
  Home,
  Factory,
  Briefcase,
  Building2,
  UtensilsCrossed,
  ArrowRight,
  CheckCircle,
  Phone
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/animations";

const industries = [
  {
    icon: UtensilsCrossed,
    title: "Restaurants & Food Service",
    description: "Specialized cleaning services for restaurant chains and food service facilities. Kitchen floors, common areas, and touchless restroom disinfecting.",
    services: [
      "Kitchen floor deep cleaning",
      "Common area floor maintenance",
      "Touchless restroom disinfecting",
      "Multi-location restaurant chain support",
    ],
  },
  {
    icon: Building2,
    title: "Corporate Offices",
    description: "Professional cleaning services for offices of all sizes. Daily maintenance, deep cleaning, and flexible scheduling to minimize disruption.",
    services: [
      "Daily and weekly office cleaning",
      "Floor care and vacuuming",
      "Restroom and break room maintenance",
      "After-hours service available",
    ],
  },
  {
    icon: HardHat,
    title: "General Contractors",
    description: "Keep your job sites clean and compliant with our construction debris removal services. We work on your timeline.",
    services: [
      "Construction debris removal",
      "Demolition waste hauling",
      "Renovation cleanouts",
      "Scheduled pickup services",
    ],
  },
  {
    icon: Store,
    title: "Retail & Franchise",
    description: "Professional cleaning services for retail chains and franchise operations. Floor maintenance, restroom sanitation, and storefront cleaning.",
    services: [
      "Storefront cleaning",
      "Floor maintenance and care",
      "Restroom sanitation",
      "Multi-location services",
    ],
  },
  {
    icon: Warehouse,
    title: "Warehouses & Distribution",
    description: "Comprehensive cleaning services for warehouses, distribution centers, and industrial storage facilities.",
    services: [
      "Industrial floor cleaning",
      "Dust control and management",
      "Loading dock maintenance",
      "Regular scheduled service",
    ],
  },
  {
    icon: Home,
    title: "Property Management",
    description: "Reliable partner for property managers handling tenant turnovers, common area maintenance, and ongoing cleaning services.",
    services: [
      "Tenant turnover cleaning",
      "Common area maintenance",
      "Restroom and lobby cleaning",
      "Ongoing service contracts",
    ],
  },
  {
    icon: Factory,
    title: "Industrial & Manufacturing",
    description: "Heavy-duty cleaning services for manufacturing facilities, including floor care, dust control, and facility maintenance.",
    services: [
      "Industrial floor cleaning",
      "Dust control and management",
      "Production area cleaning",
      "Facility maintenance programs",
    ],
  },
  {
    icon: Briefcase,
    title: "Real Estate Developers",
    description: "Support for real estate development projects from site preparation to post-construction cleanup.",
    services: [
      "Pre-construction clearing",
      "Post-construction cleanup",
      "Model unit preparation",
      "Site maintenance",
    ],
  },
  {
    icon: Building,
    title: "Facility Management",
    description: "Comprehensive cleaning services for facility managers maintaining commercial properties.",
    services: [
      "Regular scheduled cleaning",
      "Emergency cleaning service",
      "Common area maintenance",
      "Seasonal deep cleaning programs",
    ],
  },
];

export default function Industries() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `url('/logo.png')`,
              backgroundRepeat: 'repeat',
              backgroundSize: '300px 300px',
              backgroundPosition: 'center',
            }}
          />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <ScrollReveal>
              <div className="max-w-3xl">
                <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                  Industries We Serve
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Commercial Cleaning Experts
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  We understand the unique cleaning needs of different industries. Our specialized 
                  services are designed to meet your specific operational requirements.
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

        {/* Industries Grid */}
        <section className="py-16 bg-background relative">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: `url('/logo.png')`,
              backgroundRepeat: 'repeat',
              backgroundSize: '400px 400px',
              backgroundPosition: 'center',
            }}
          />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <StaggerContainer 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              staggerDelay={0.1}
            >
              {industries.map((industry) => (
                <StaggerItem key={industry.title}>
                  <div className="h-full p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                      <industry.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-3">
                      {industry.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {industry.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      {industry.services.map((service) => (
                        <div key={service} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-sm text-foreground">{service}</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/contact">
                        Get Quote
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Your Industry Not Listed?
              </h2>
              <p className="text-lg text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
                We work with businesses across all sectors. Contact us to discuss your 
                specific commercial cleaning needs.
              </p>
              <Button variant="cta" size="xl" asChild>
                <Link to="/contact">
                  Contact Us
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
