import { Phone, ClipboardCheck, Truck } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/animations";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Request a Quote",
    description: "Tell us about your cleaning needs. We'll provide a free, no-obligation estimate within hours.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Schedule Service",
    description: "Choose a cleaning schedule that works for your business. Daily, weekly, or custom options.",
  },
  {
    number: "03",
    icon: Truck,
    title: "We Handle Everything",
    description: "Our trained crew arrives on schedule and delivers spotless results. Every time.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Simple. Fast. Hassle-Free.
            </h2>
            <p className="text-lg text-primary-foreground/70">
              Professional commercial cleaning shouldn't be complicated. 
              Our streamlined process delivers consistent results with minimal disruption to your operations.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative"
          staggerDelay={0.15}
        >
          {/* Connection Line */}
          <div className="hidden md:block absolute top-20 left-1/6 right-1/6 h-0.5 bg-primary-foreground/10" />
          
          {steps.map((step, index) => (
            <StaggerItem key={step.title}>
              <div className="relative text-center">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent text-primary font-bold text-2xl mb-6 relative z-10">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-10 h-10 text-accent" />
                </div>

                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-primary-foreground/70 leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
