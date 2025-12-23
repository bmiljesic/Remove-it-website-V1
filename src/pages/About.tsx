import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Shield, Users, Award, ArrowRight, Phone, CheckCircle } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, AnimatedCounter } from "@/components/ui/animations";

const values = [
  {
    icon: Target,
    title: "Reliability",
    description: "We show up on time, every time. Your business can count on us to deliver consistent, dependable service.",
  },
  {
    icon: Shield,
    title: "Professionalism",
    description: "Our uniformed crews represent your business well. We maintain the highest standards of conduct and care.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your needs come first. We tailor our services to meet your specific requirements and schedule.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We don't just meet expectations – we exceed them. Quality is built into everything we do.",
  },
];

const stats = [
  { value: 15, suffix: "+", label: "Years in Business" },
  { value: 5000, suffix: "+", label: "Projects Completed" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 50, suffix: "+", label: "Cities Served" },
];

const credentials = [
  "Fully licensed and insured",
  "Comprehensive liability coverage",
  "Background-checked employees",
  "Eco-friendly disposal practices",
  "OSHA safety compliant",
  "BBB accredited business",
];

export default function About() {
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div>
                  <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                    About Us
                  </span>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                    Your Commercial Cleaning Partner
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    For over 15 years, Remove It Services has been the trusted choice for 
                    commercial cleaning across the state. We understand business, and 
                    we deliver spotless results.
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

              <ScrollReveal direction="right">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div
                      key={stat.label}
                      className={`p-6 rounded-2xl ${
                        index === 0 || index === 3 ? "bg-primary text-primary-foreground" : "bg-card border border-border"
                      }`}
                    >
                      <div className={`text-3xl font-bold mb-1 ${
                        index === 0 || index === 3 ? "" : "text-foreground"
                      }`}>
                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className={`text-sm ${
                        index === 0 || index === 3 ? "text-primary-foreground/70" : "text-muted-foreground"
                      }`}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Mission Section */}
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
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal direction="left">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                    Our Mission
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    To provide commercial clients with fast, reliable, and professional cleaning 
                    services that minimize business disruption and maximize cleanliness standards.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    We believe every business deserves a clean, professional environment. That's why 
                    we've built our company around flexibility, professionalism, and results that 
                    speak for themselves.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    From restaurant kitchens to office buildings, we approach 
                    every job with the same commitment to excellence and spotless results.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="p-8 rounded-2xl bg-muted/50 border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-6">
                    Credentials & Compliance
                  </h3>
                  <div className="space-y-3">
                    {credentials.map((credential) => (
                      <div key={credential} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground">{credential}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/50 relative">
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
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Our Core Values
                </h2>
                <p className="text-lg text-muted-foreground">
                  These principles guide everything we do and define who we are as a company.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              staggerDelay={0.1}
            >
              {values.map((value) => (
                <StaggerItem key={value.title}>
                  <div className="text-center p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
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
                Ready to Work With Us?
              </h2>
              <p className="text-lg text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
                Experience the Remove It Services difference. Get a free quote today 
                and see why businesses across the state trust us with their cleaning needs.
              </p>
              <Button variant="cta" size="xl" asChild>
                <Link to="/contact">
                  Get Free Quote
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
