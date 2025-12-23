import { Link } from "react-router-dom";
import { 
  Sparkles, 
  Building2, 
  Sofa, 
  Warehouse, 
  CalendarCheck,
  UtensilsCrossed,
  ArrowRight 
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: UtensilsCrossed,
    title: "Restaurant Cleaning",
    description: "Kitchen floors, common areas, and touchless restroom disinfecting for restaurant chains and food service facilities.",
    href: "/services#restaurant",
  },
  {
    icon: Building2,
    title: "Office Cleaning",
    description: "Daily, weekly, or custom cleaning schedules for offices of all sizes. Keep your workspace spotless and professional.",
    href: "/services#office",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Thorough deep cleaning services for carpets, upholstery, and hard-to-reach areas. Restore your facility to like-new condition.",
    href: "/services#deep-cleaning",
  },
  {
    icon: Warehouse,
    title: "Facility Maintenance",
    description: "Comprehensive maintenance cleaning for warehouses, industrial spaces, and commercial facilities.",
    href: "/services#facility",
  },
  {
    icon: Sofa,
    title: "Post-Construction Cleaning",
    description: "Complete cleanup after construction or renovation projects. We handle dust, debris, and final detailing.",
    href: "/services#post-construction",
  },
  {
    icon: CalendarCheck,
    title: "Scheduled Janitorial",
    description: "Reliable janitorial services with flexible scheduling. Restrooms, break rooms, and common areas covered.",
    href: "/services#janitorial",
  },
];

export function ServicesOverview() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const patternY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.2, 0.1]);

  return (
    <section ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      {/* Animated Gradient Overlay */}
      <motion.div
        style={{ opacity: gradientOpacity }}
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "linear-gradient(135deg, hsl(187 96% 42% / 0.08) 0%, transparent 50%)",
            "linear-gradient(135deg, hsl(192 91% 36% / 0.12) 0%, transparent 50%)",
            "linear-gradient(135deg, hsl(187 96% 42% / 0.08) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Pattern Overlay with Logo and Geometric Patterns */}
      <motion.div
        style={{ y: patternY }}
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              url('/logo.png'),
              linear-gradient(45deg, hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(-45deg, hsl(var(--foreground)) 1px, transparent 1px),
              radial-gradient(circle at 30% 50%, hsl(var(--accent)) 0%, transparent 40%)
            `,
            backgroundRepeat: 'repeat, repeat, repeat, no-repeat',
            backgroundSize: '350px 350px, 40px 40px, 40px 40px, 500px 500px',
            backgroundPosition: 'center, 0 0, 0 0, 70% 30%',
            mixBlendMode: 'multiply',
          }}
        />
      </motion.div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Commercial Cleaning Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              From daily office cleaning to deep facility maintenance, we deliver 
              professional cleaning services that keep your business looking its best.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          staggerDelay={0.1}
        >
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <Link
                to={service.href}
                className="group block h-full p-8 rounded-2xl bg-card border border-border hover:border-accent/50 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-accent group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-accent font-semibold group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
