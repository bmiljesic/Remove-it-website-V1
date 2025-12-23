import { Link } from "react-router-dom";
import { 
  Building, 
  HardHat, 
  Store, 
  Warehouse, 
  Home,
  Factory,
  UtensilsCrossed
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/animations";

const industries = [
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    description: "Kitchen floors, common areas, and touchless restroom cleaning for restaurant chains.",
  },
  {
    icon: Building,
    title: "Corporate Offices",
    description: "Daily cleaning, floor care, and sanitization for professional workspaces.",
  },
  {
    icon: HardHat,
    title: "General Contractors",
    description: "Post-construction cleanup and ongoing job site maintenance services.",
  },
  {
    icon: Store,
    title: "Retail & Franchise",
    description: "Storefront cleaning, floor maintenance, and restroom sanitation.",
  },
  {
    icon: Warehouse,
    title: "Warehouses",
    description: "Industrial floor cleaning, dust control, and facility maintenance.",
  },
  {
    icon: Home,
    title: "Property Managers",
    description: "Tenant turnover cleaning, common area maintenance, and move-out services.",
  },
  {
    icon: Factory,
    title: "Industrial Facilities",
    description: "Heavy-duty cleaning for manufacturing plants and production areas.",
  },
];

export function Industries() {
  return (
    <section className="py-24 relative">
      {/* Subtle section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <ScrollReveal direction="left">
            <div>
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Industries We Serve
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Built for Business
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We understand the unique cleaning needs of commercial clients. Our services are designed 
                to minimize disruption, meet tight schedules, and maintain the professional 
                standards your business demands.
              </p>
              <Link
                to="/industries"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
              >
                View All Industries
                <span>→</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Grid */}
          <StaggerContainer 
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            staggerDelay={0.08}
          >
            {industries.map((industry) => (
              <StaggerItem key={industry.title}>
                <div className="group p-6 rounded-xl bg-card border border-border hover:border-accent/50 hover:shadow-card transition-all duration-300 text-center">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <industry.icon className="w-6 h-6 text-accent group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-bold text-foreground text-sm mb-1">
                    {industry.title}
                  </h3>
                  <p className="text-xs text-muted-foreground hidden sm:block">
                    {industry.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
