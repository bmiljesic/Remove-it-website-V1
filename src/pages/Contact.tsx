import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import { useToast } from "@/hooks/use-toast";

const serviceOptions = [
  "Restaurant Cleaning",
  "Kitchen Floor Cleaning",
  "Touchless Restroom Disinfecting",
  "Office Cleaning",
  "Deep Cleaning",
  "Facility Maintenance",
  "Post-Construction Cleaning",
  "Scheduled Janitorial",
  "Other",
];

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "(123) 456-7890",
    href: "tel:+1234567890",
    description: "Mon-Fri 7am-7pm, Sat 8am-5pm",
  },
  {
    icon: Mail,
    title: "Email",
    value: "aweaver@removeitservices.com",
    href: "mailto:aweaver@removeitservices.com",
    description: "We respond within 2 hours",
  },
  {
    icon: MapPin,
    title: "Service Area",
    value: "4 Service Areas",
    href: "/service-areas",
    description: "PA, DE & MD",
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "Same Day Available",
    href: "#form",
    description: "Fast quotes, faster service",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Quote Request Received!",
      description: "We'll get back to you within 2 hours with a free estimate.",
    });

    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
                  Get a Free Quote
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Request Your Free Commercial Quote
                </h1>
                <p className="text-xl text-muted-foreground">
                  Fill out the form below and we'll get back to you within 2 hours with 
                  a no-obligation estimate for your cleaning project.
                </p>
              </div>
            </ScrollReveal>
              </div>
            </section>

            {/* Contact Info Bar - dark overlay */}
            <section className="py-8 text-primary-foreground relative">
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-primary pointer-events-none z-20" />
              <div className="container mx-auto px-4 lg:px-8 relative z-30">
            <StaggerContainer 
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              staggerDelay={0.1}
            >
              {contactInfo.map((info) => (
                <StaggerItem key={info.title}>
                  <a
                    href={info.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-primary transition-all">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold">{info.value}</p>
                      <p className="text-sm text-primary-foreground/70">{info.description}</p>
                    </div>
                  </a>
                </StaggerItem>
              ))}
            </StaggerContainer>
              </div>
            </section>

            {/* Form Section */}
            <section id="form" className="py-16 relative">
              {/* Subtle section divider */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />
              <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Form */}
              <ScrollReveal direction="left">
                <div className="p-8 rounded-2xl bg-card border border-border shadow-card">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Tell Us About Your Project
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                          placeholder="ABC Company"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                        Service Type *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Project Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                        placeholder="Tell us about your cleaning needs, timeline, and any special requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="cta"
                      size="xl"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Get Free Quote
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      We respect your privacy. Your information will never be shared.
                    </p>
                  </form>
                </div>
              </ScrollReveal>

              {/* Why Choose Us */}
              <ScrollReveal direction="right">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Why Get a Quote From Us?
                  </h2>
                  <div className="space-y-6">
                    {[
                      {
                        title: "Free, No-Obligation Estimates",
                        description: "Get a detailed quote at no cost. No pressure, no hidden fees.",
                      },
                      {
                        title: "Fast Response Time",
                        description: "We respond to all quote requests within 2 hours during business hours.",
                      },
                      {
                        title: "Transparent Pricing",
                        description: "Our quotes are all-inclusive. The price we quote is the price you pay.",
                      },
                      {
                        title: "Flexible Scheduling",
                        description: "Same-day service available. We work around your business schedule.",
                      },
                      {
                        title: "Professional Service",
                        description: "Uniformed crews, modern equipment, and a commitment to excellence.",
                      },
                    ].map((item) => (
                      <div key={item.title} className="flex gap-4">
                        <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-foreground">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Call CTA */}
                  <div className="mt-10 p-6 rounded-2xl bg-muted/50 border border-border">
                    <p className="font-bold text-foreground mb-2">Prefer to talk?</p>
                    <p className="text-muted-foreground mb-4">
                      Give us a call and speak directly with our team.
                    </p>
                    <Button variant="default" size="lg" asChild>
                      <a href="tel:+1234567890">
                        <Phone className="w-5 h-5" />
                        (123) 456-7890
                      </a>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
