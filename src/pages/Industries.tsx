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
  {
    icon: Warehouse,
    title: "Warehouses",
    description: "Specialized cleaning services for warehouse facilities. Interior floor cleaning, dust control, and maintenance for large storage and distribution spaces.",
    services: [
      "Interior warehouse floor cleaning",
      "Dust control and management",
      "Loading dock maintenance",
      "High-ceiling area cleaning",
      "Regular scheduled service",
    ],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    imageAlt: "Interior warehouse facility",
  },
  {
    icon: Factory,
    title: "Industrial Plant",
    description: "Professional cleaning services for industrial plants and manufacturing facilities. Exterior maintenance and specialized industrial cleaning solutions.",
    services: [
      "Exterior building cleaning",
      "Industrial facility maintenance",
      "Production area cleaning",
      "Equipment area maintenance",
      "Scheduled maintenance programs",
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    imageAlt: "Industrial plant exterior",
  },
  {
    icon: Building2,
    title: "Multi-Tenant Building",
    description: "Comprehensive cleaning services for multi-tenant commercial buildings. Common areas, lobbies, and shared spaces maintained to the highest standards.",
    services: [
      "Lobby and common area cleaning",
      "Shared restroom maintenance",
      "Elevator and hallway cleaning",
      "Exterior building maintenance",
      "Regular scheduled service",
    ],
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop",
    imageAlt: "Multi-tenant commercial building exterior",
  },
];

export default function Industries() {
  return (
    <>
      <Header />
      <main>
        {/* Continuous Background Wrapper */}
        <div className="relative bg-background pt-24 pb-24">
          {/* Single continuous background pattern */}
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage: `
                url('/logo.png'),
                linear-gradient(45deg, hsl(var(--foreground)) 1px, transparent 1px),
                linear-gradient(-45deg, hsl(var(--foreground)) 1px, transparent 1px)
              `,
              backgroundRepeat: 'repeat, repeat, repeat',
              backgroundSize: '350px 350px, 40px 40px, 40px 40px',
              backgroundPosition: 'center, 0 0, 0 0',
              mixBlendMode: 'multiply',
            }}
          />
          
          {/* All sections with transparent backgrounds */}
          <div className="relative z-10">
            {/* Hero Section */}
            <section className="py-16 relative">
              <div className="container mx-auto px-4 lg:px-8">
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
            <section className="py-16 relative">
              {/* Subtle section divider */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />
              <div className="container mx-auto px-4 lg:px-8">
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
          </div>
        </div>

        {/* CTA Section - separate dark section */}
        <section className="py-16 bg-primary text-primary-foreground relative">
          {/* Dark overlay on continuous pattern */}
          <div className="absolute inset-0 bg-primary pointer-events-none z-20" />
          <div className="container mx-auto px-4 lg:px-8 text-center relative z-30">
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
