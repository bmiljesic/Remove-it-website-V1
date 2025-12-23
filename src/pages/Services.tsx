import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  UtensilsCrossed,
  Building2, 
  Sparkles,
  Warehouse, 
  Sofa,
  CalendarCheck,
  ArrowRight,
  CheckCircle,
  Phone,
  Droplets,
  Square,
  Factory
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/animations";

const services = [
  {
    id: "restaurant",
    icon: UtensilsCrossed,
    title: "Restaurant Cleaning Services",
    description: "Specialized cleaning solutions for restaurant chains and food service facilities. From kitchen floors to touchless restroom disinfecting, we keep your restaurant spotless and compliant.",
    benefits: [
      "Kitchen floor deep cleaning and maintenance",
      "Common area floor care for dining spaces",
      "Touchless restroom disinfecting technology",
      "Food-safe cleaning products and protocols",
      "Flexible scheduling around service hours",
      "Multi-location restaurant chain support",
    ],
    idealFor: ["Restaurant chains", "Fast food franchises", "Fine dining establishments", "Cafes and bakeries", "Food service facilities"],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
    imageAlt: "Professional restaurant kitchen cleaning",
  },
  {
    id: "floor-cleaning",
    icon: Square,
    title: "Floor Cleaning",
    description: "Professional floor cleaning for restaurant and kitchen floors. Complete deep cleaning and maintenance of commercial floors with commercial-grade equipment and food-safe cleaning solutions.",
    benefits: [
      "Restaurant floor deep cleaning",
      "Kitchen floor maintenance",
      "Grease and grime removal",
      "Food-safe cleaning products",
      "Commercial-grade equipment",
      "Regular maintenance schedules",
      "After-hours service available",
      "Health code compliance",
    ],
    idealFor: ["Restaurant floors", "Commercial kitchens", "Food prep areas", "Dining areas"],
    image: "/rawImage.jpg",
    imageAlt: "Clean commercial restaurant and kitchen floors",
  },
  {
    id: "restaurant-floors",
    icon: Square,
    title: "Common Area Floor Care",
    description: "Professional floor cleaning for restaurant dining areas, lobbies, and high-traffic zones. Regular maintenance and deep cleaning to maintain a spotless, welcoming environment.",
    benefits: [
      "Dining area floor maintenance",
      "High-traffic zone cleaning",
      "Lobby and entrance care",
      "Regular scheduled service",
      "Spot cleaning between services",
      "Professional appearance guaranteed",
    ],
    idealFor: ["Dining rooms", "Restaurant lobbies", "High-traffic areas", "Customer-facing spaces"],
    image: "/dining-area.jpg",
    imageAlt: "Clean restaurant dining area",
  },
  {
    id: "restaurant-restrooms",
    icon: Droplets,
    title: "Touchless Restroom Disinfecting",
    description: "Advanced touchless disinfecting technology for restaurant restrooms. Ensures complete sanitization and eliminates bacteria and viruses while maintaining a fresh, clean appearance.",
    benefits: [
      "Touchless disinfecting technology",
      "Complete bacteria and virus elimination",
      "Odor control and freshness",
      "Health and safety compliance",
      "Regular scheduled service",
      "Spotless appearance guaranteed",
    ],
    idealFor: ["Restaurant restrooms", "Customer restrooms", "Employee facilities", "Public restroom areas"],
    image: "/commercial-bathroom-remodeling-clean.jpeg",
    imageAlt: "Clean modern restroom",
  },
  {
    id: "office",
    icon: Building2,
    title: "Office Cleaning",
    description: "Daily, weekly, or custom cleaning schedules for offices of all sizes. Keep your workspace spotless and professional with minimal business disruption.",
    benefits: [
      "Flexible scheduling (day, evening, weekend)",
      "Cubicle and workspace cleaning",
      "Restroom and break room maintenance",
      "Floor care and vacuuming",
      "Trash removal and recycling",
      "Custom cleaning plans",
    ],
    idealFor: ["Corporate offices", "Small businesses", "Co-working spaces", "Professional offices"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    imageAlt: "Clean modern office space",
  },
  {
    id: "deep-cleaning",
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Thorough deep cleaning services for carpets, upholstery, and hard-to-reach areas. Restore your facility to like-new condition with comprehensive cleaning.",
    benefits: [
      "Hard-to-reach area cleaning",
      "Window and fixture detailing",
      "Floor scrubbing",
      "Interior window cleaning",
      "Floor cleaning of hard and soft services",
      "Carpet cleaning",
      "Stripping and waxing",
      "Scheduled or one-time service",
    ],
    idealFor: ["Office spaces", "Facilities needing refresh", "Pre-lease cleaning", "Seasonal deep cleans"],
    image: "/blog_1719835208.webp",
    imageAlt: "Professional deep cleaning service",
  },
  {
    id: "facility",
    icon: Warehouse,
    title: "Facility Maintenance",
    description: "Comprehensive maintenance cleaning for warehouses, industrial spaces, and commercial facilities. Keep your facility clean, safe, and operational.",
    benefits: [
      "Industrial floor cleaning",
      "Dust control and management",
      "Equipment area cleaning",
      "Loading dock maintenance",
      "Regular scheduled service",
      "Custom maintenance plans",
    ],
    idealFor: ["Warehouses", "Distribution centers", "Manufacturing facilities", "Industrial spaces"],
    image: "/building-maintenance-all-clean-london-janitorial-equipment-to-clean-halls.webp",
    imageAlt: "Clean warehouse facility",
  },
  {
    id: "final-cleaning",
    icon: Sofa,
    title: "Final Cleaning",
    description: "Complete final cleaning services to prepare commercial properties for occupancy. We handle thorough detailing, polishing, and finishing touches to ensure your space is move-in ready.",
    benefits: [
      "Complete final detailing",
      "Thorough dust and debris removal",
      "Final polishing and finishing",
      "Window and fixture cleaning",
      "Floor finishing and care",
      "Move-in ready results",
    ],
    idealFor: ["New properties", "Pre-occupancy cleaning", "Property turnovers", "Facility preparation"],
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
    imageAlt: "Clean commercial property ready for occupancy",
  },
  {
    id: "warehouses",
    icon: Warehouse,
    title: "Warehouse Cleaning",
    description: "Specialized cleaning services for warehouse facilities. Interior floor cleaning, dust control, and maintenance for large storage and distribution spaces.",
    benefits: [
      "Interior warehouse floor cleaning",
      "Dust control and management",
      "Loading dock maintenance",
      "High-ceiling area cleaning",
      "Equipment area cleaning",
      "Regular scheduled service",
    ],
    idealFor: ["Warehouses", "Distribution centers", "Storage facilities", "Large industrial spaces"],
    image: "/How-to-Start-a-Warehousing-Business-in-India.jpg",
    imageAlt: "Interior warehouse facility",
  },
  {
    id: "industrial-plant",
    icon: Factory,
    title: "Industrial Plant Cleaning",
    description: "Professional cleaning services for industrial plants and manufacturing facilities. Exterior maintenance and specialized industrial cleaning solutions.",
    benefits: [
      "Exterior building cleaning",
      "Industrial facility maintenance",
      "Production area cleaning",
      "Equipment area maintenance",
      "Dust and debris removal",
      "Scheduled maintenance programs",
    ],
    idealFor: ["Industrial plants", "Manufacturing facilities", "Production facilities", "Industrial complexes"],
    image: "/Viro-totaaloplossingen-header-Factory-en-Plant-design.jpg",
    imageAlt: "Industrial plant exterior",
  },
  {
    id: "multi-tenant",
    icon: Building2,
    title: "Multi-Tenant Building Cleaning",
    description: "Comprehensive cleaning services for multi-tenant commercial buildings. Common areas, lobbies, and shared spaces maintained to the highest standards.",
    benefits: [
      "Lobby and common area cleaning",
      "Shared restroom maintenance",
      "Elevator and hallway cleaning",
      "Exterior building maintenance",
      "Trash and recycling service",
      "Regular scheduled service",
    ],
    idealFor: ["Multi-tenant buildings", "Office complexes", "Commercial buildings", "Shared facilities"],
    image: "/multi-tenant-commercial-intercom-for-building.jpg",
    imageAlt: "Multi-tenant commercial building exterior",
  },
  {
    id: "janitorial",
    icon: CalendarCheck,
    title: "Scheduled Janitorial",
    description: "Reliable janitorial services with flexible scheduling. Daily and deep cleaning services for restrooms, break rooms, and common areas with consistent, professional service.",
    benefits: [
      "Daily, weekly, or custom schedules",
      "Restroom cleaning and sanitization",
      "Break room maintenance",
      "Common area cleaning",
      "Trash and recycling service",
      "Dedicated account management",
    ],
    idealFor: ["Ongoing maintenance", "Regular cleaning needs", "Multi-location businesses", "Long-term contracts"],
    image: "/Daily-and-Deep-Cleaning-with-Dura-Shine-Clean.jpg",
    imageAlt: "Professional janitorial service",
  },
];

function ServiceImageWithPattern({ image, alt }: { image: string; alt: string }) {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const patternOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.25, 0.4, 0.25]);

  return (
    <motion.div
      ref={imageRef}
      className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]"
      style={{ y: imageY }}
    >
      <img 
        src={image} 
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      {/* Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(135deg, hsl(187 96% 42% / 0.25) 0%, transparent 60%)",
            "linear-gradient(225deg, hsl(192 91% 36% / 0.3) 0%, transparent 60%)",
            "linear-gradient(135deg, hsl(187 96% 42% / 0.25) 0%, transparent 60%)",
          ],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Pattern Overlay on Image */}
      <motion.div
        style={{ opacity: patternOpacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              url('/logo.png'),
              linear-gradient(45deg, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundRepeat: 'no-repeat, repeat, repeat',
            backgroundSize: '200px 200px, 30px 30px, 30px 30px',
            backgroundPosition: 'center, 0 0, 0 0',
            mixBlendMode: 'overlay',
          }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
    </motion.div>
  );
}


export default function Services() {
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
                  Our Services
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Commercial Cleaning Services
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Professional cleaning solutions for restaurants, offices, and commercial facilities. 
                  Touchless disinfecting, spotless restrooms, and comprehensive floor care.
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
            <section className="py-16 relative overflow-hidden">
              {/* Subtle section divider */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />
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
                      <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                        <img 
                          src={service.image || "/placeholder.svg"} 
                          alt={service.imageAlt || service.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
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
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
