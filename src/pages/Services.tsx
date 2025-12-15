import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Trash2, 
  Building2, 
  HardHat, 
  Warehouse, 
  Home, 
  Truck,
  Clock,
  Package,
  ArrowRight,
  CheckCircle,
  Phone
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/animations";

const services = [
  {
    id: "commercial",
    icon: Trash2,
    title: "Commercial Junk Removal",
    description: "Complete junk removal solutions for businesses of all sizes. From office furniture to industrial equipment, we handle it all with professionalism and efficiency.",
    benefits: [
      "All-inclusive service – we do the heavy lifting",
      "Flexible scheduling around your operations",
      "Volume-based pricing for cost efficiency",
      "Responsible disposal and recycling",
    ],
    idealFor: ["Offices upgrading furniture", "Businesses relocating", "End-of-lease cleanouts", "General decluttering"],
  },
  {
    id: "office",
    icon: Building2,
    title: "Office Cleanouts",
    description: "Streamlined office cleanout services designed for minimal disruption to your business. We work fast, clean, and professionally.",
    benefits: [
      "After-hours and weekend availability",
      "Cubicle, furniture, and electronics removal",
      "Secure disposal of sensitive materials",
      "Fast turnaround for tight deadlines",
    ],
    idealFor: ["Corporate relocations", "Office renovations", "Downsizing operations", "Tenant turnovers"],
  },
  {
    id: "construction",
    icon: HardHat,
    title: "Construction Debris Removal",
    description: "Safe and efficient removal of construction waste, demolition debris, and renovation materials. Keep your job site clean and compliant.",
    benefits: [
      "Same-day pickup available",
      "All debris types accepted",
      "Compliance with disposal regulations",
      "Regular scheduled pickups available",
    ],
    idealFor: ["General contractors", "Renovation projects", "Demolition sites", "New construction"],
  },
  {
    id: "warehouse",
    icon: Warehouse,
    title: "Warehouse Cleanouts",
    description: "Large-scale warehouse clearing services with the equipment and manpower to handle bulk removal efficiently.",
    benefits: [
      "Industrial-grade equipment",
      "Experienced crews for heavy items",
      "Pallet and rack removal",
      "Complete facility cleanouts",
    ],
    idealFor: ["Warehouse closures", "Inventory liquidation", "Facility transitions", "Storage cleanouts"],
  },
  {
    id: "property",
    icon: Home,
    title: "Property Management Cleanouts",
    description: "Tailored services for property managers. Fast tenant turnover cleanouts and flexible ongoing contracts.",
    benefits: [
      "Priority scheduling for turnovers",
      "Consistent pricing for budgeting",
      "Multi-property discounts",
      "Ongoing service contracts",
    ],
    idealFor: ["Tenant turnovers", "Estate clearing", "Eviction cleanouts", "Rental property maintenance"],
  },
  {
    id: "equipment",
    icon: Truck,
    title: "Equipment & Furniture Removal",
    description: "Specialized removal of heavy equipment, machinery, office furniture, and industrial assets. Safe handling guaranteed.",
    benefits: [
      "Heavy lifting expertise",
      "Equipment protection",
      "Careful disassembly when needed",
      "Donation coordination available",
    ],
    idealFor: ["Office furniture upgrades", "Manufacturing transitions", "Restaurant equipment", "Retail fixtures"],
  },
  {
    id: "scheduled",
    icon: Clock,
    title: "Scheduled & Ongoing Services",
    description: "Regular junk removal services tailored to your ongoing needs. Maintain a clean, efficient workspace with predictable costs.",
    benefits: [
      "Weekly, bi-weekly, or monthly pickups",
      "Dedicated account manager",
      "Priority response times",
      "Volume discounts",
    ],
    idealFor: ["Retail chains", "Manufacturing facilities", "Property management companies", "Corporate campuses"],
  },
  {
    id: "sameday",
    icon: Package,
    title: "Same-Day Removal",
    description: "Urgent removal needs? Our same-day service ensures your space is cleared fast when time is critical.",
    benefits: [
      "Rapid response teams",
      "Available 7 days a week",
      "Emergency cleanout capability",
      "No compromise on quality",
    ],
    idealFor: ["Last-minute moves", "Urgent cleanouts", "Time-sensitive projects", "Emergency situations"],
  },
];

export default function Services() {
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
                  Our Services
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Commercial Junk Removal Services
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Professional removal solutions for every commercial need. Fast, reliable, and 
                  hassle-free service that keeps your business running smoothly.
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

        {/* Services Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <StaggerContainer className="space-y-16" staggerDelay={0.1}>
              {services.map((service, index) => (
                <StaggerItem key={service.id}>
                  <div 
                    id={service.id}
                    className={`grid lg:grid-cols-2 gap-12 items-center ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                        <service.icon className="w-8 h-8 text-accent" />
                      </div>
                      <h2 className="text-3xl font-bold text-foreground mb-4">
                        {service.title}
                      </h2>
                      <p className="text-lg text-muted-foreground mb-6">
                        {service.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        {service.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      <Button variant="default" asChild>
                        <Link to="/contact">
                          Request Quote
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>

                    <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                      <div className="p-8 rounded-2xl bg-muted/50 border border-border">
                        <h3 className="font-bold text-foreground mb-4">Ideal For:</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {service.idealFor.map((item) => (
                            <div 
                              key={item}
                              className="px-4 py-3 rounded-lg bg-card border border-border text-sm font-medium text-foreground"
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {index < services.length - 1 && (
                    <div className="border-b border-border mt-16" />
                  )}
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
                Don't See What You Need?
              </h2>
              <p className="text-lg text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
                We handle all types of commercial removal projects. Contact us to discuss 
                your specific needs and get a custom solution.
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
