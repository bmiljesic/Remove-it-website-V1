import { Clock, DollarSign, Shield, Truck, Users, Recycle } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, AnimatedCounter } from "@/components/ui/animations";

const features = [
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Day, evening, or weekend cleaning available. We work around your schedule to minimize business disruption.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Upfront quotes with no hidden fees. Custom packages based on your facility size and cleaning frequency.",
  },
  {
    icon: Shield,
    title: "Fully Licensed & Insured",
    description: "Complete peace of mind with comprehensive liability coverage and professional certifications.",
  },
  {
    icon: Truck,
    title: "Professional Equipment",
    description: "Commercial-grade cleaning equipment and eco-friendly products for superior results.",
  },
  {
    icon: Users,
    title: "Trained Crews",
    description: "Background-checked, uniformed professionals who respect your property and business operations.",
  },
  {
    icon: Recycle,
    title: "Eco-Friendly Products",
    description: "Green cleaning solutions that are safe for your employees and the environment.",
  },
];

const stats = [
  { value: 5000, suffix: "+", label: "Jobs Completed" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "hr", label: "Average Response" },
  { value: 15, suffix: "+", label: "Years Experience" },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 relative">
      {/* Subtle section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              The Commercial Cleaning Experts
            </h2>
            <p className="text-lg text-muted-foreground">
              When your business needs reliable cleaning services, you need a partner who understands 
              commercial operations and delivers spotless results every time.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats Bar */}
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-primary text-primary-foreground text-center"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-primary-foreground/70 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Features Grid */}
        <StaggerContainer 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.1}
        >
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="group flex gap-5">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-accent group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
