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
  Square
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
    id: "restaurant-kitchen",
    icon: Square,
    title: "Kitchen Floor Cleaning",
    description: "Complete deep cleaning and maintenance of commercial kitchen floors. We handle grease, grime, and food residue with commercial-grade equipment and food-safe cleaning solutions.",
    benefits: [
      "Grease and grime removal",
      "Food-safe cleaning products",
      "Commercial-grade equipment",
      "Regular maintenance schedules",
      "After-hours service available",
      "Health code compliance",
    ],
    idealFor: ["Commercial kitchens", "Restaurant chains", "Food prep areas", "Kitchen facilities"],
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop",
    imageAlt: "Clean commercial kitchen floor",
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
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
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
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop",
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
      "Carpet and upholstery deep cleaning",
      "Hard-to-reach area cleaning",
      "Window and fixture detailing",
      "Baseboard and corner cleaning",
      "Restoration to like-new condition",
      "Scheduled or one-time service",
    ],
    idealFor: ["Office spaces", "Facilities needing refresh", "Pre-lease cleaning", "Seasonal deep cleans"],
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
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
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    imageAlt: "Clean warehouse facility",
  },
  {
    id: "post-construction",
    icon: Sofa,
    title: "Post-Construction Cleaning",
    description: "Complete cleanup after construction or renovation projects. We handle dust, debris, and final detailing to prepare your space for occupancy.",
    benefits: [
      "Construction dust removal",
      "Debris cleanup",
      "Final detailing and polishing",
      "Window and fixture cleaning",
      "Floor finishing and care",
      "Move-in ready results",
    ],
    idealFor: ["New construction", "Renovation projects", "Office buildouts", "Facility upgrades"],
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop",
    imageAlt: "Post-construction cleaning",
  },
  {
    id: "janitorial",
    icon: CalendarCheck,
    title: "Scheduled Janitorial",
    description: "Reliable janitorial services with flexible scheduling. Restrooms, break rooms, and common areas covered with consistent, professional service.",
    benefits: [
      "Daily, weekly, or custom schedules",
      "Restroom cleaning and sanitization",
      "Break room maintenance",
      "Common area cleaning",
      "Trash and recycling service",
      "Dedicated account management",
    ],
    idealFor: ["Ongoing maintenance", "Regular cleaning needs", "Multi-location businesses", "Long-term contracts"],
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&h=600&fit=crop",
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
  const patternOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 0.25, 0.15]);

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
            "linear-gradient(135deg, hsl(187 96% 42% / 0.1) 0%, transparent 60%)",
            "linear-gradient(225deg, hsl(192 91% 36% / 0.15) 0%, transparent 60%)",
            "linear-gradient(135deg, hsl(187 96% 42% / 0.1) 0%, transparent 60%)",
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

function ServicesBackground() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const patternY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.08, 0.15, 0.08]);

  return (
    <>
      {/* Animated Gradient Overlay */}
      <motion.div
        ref={sectionRef as any}
        style={{ opacity: gradientOpacity }}
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "linear-gradient(135deg, hsl(187 96% 42% / 0.1) 0%, hsl(222 47% 11% / 0.05) 100%)",
            "linear-gradient(225deg, hsl(192 91% 36% / 0.12) 0%, hsl(187 96% 42% / 0.08) 100%)",
            "linear-gradient(135deg, hsl(187 96% 42% / 0.1) 0%, hsl(222 47% 11% / 0.05) 100%)",
          ],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Pattern Overlay with Logo and Geometric Patterns */}
      <motion.div
        style={{ y: patternY }}
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              url('/logo.png'),
              linear-gradient(30deg, hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(-30deg, hsl(var(--foreground)) 1px, transparent 1px),
              radial-gradient(ellipse at 20% 40%, hsl(var(--accent)) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 60%, hsl(var(--primary)) 0%, transparent 50%)
            `,
            backgroundRepeat: 'repeat, repeat, repeat, no-repeat, no-repeat',
            backgroundSize: '400px 400px, 50px 50px, 50px 50px, 600px 400px, 500px 300px',
            backgroundPosition: 'center, 0 0, 0 0, 10% 20%, 90% 80%',
            mixBlendMode: 'multiply',
          }}
        />
      </motion.div>
    </>
  );
}

export default function Services() {
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
        <section className="py-16 bg-background relative overflow-hidden">
          <ServicesBackground />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
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
      </main>
      <Footer />
    </>
  );
}
