import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ui/animations";

const benefits = [
  "Free, no-obligation quotes",
  "Same-day service available",
  "Transparent pricing",
  "Fully insured",
];

export function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-hero overflow-hidden relative">
      {/* Logo background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url('/logo.png')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '300px 300px',
          backgroundPosition: 'center',
        }}
      />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="relative">
          {/* Background Elements */}
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
          
          <ScrollReveal>
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Get Started Today
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Ready for a Cleaner Workspace?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you need daily office cleaning or a one-time deep clean, 
                we're here to make it fast, easy, and hassle-free.
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta" size="xl" asChild>
                  <Link 
                    to="/contact"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    Get Free Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
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
  );
}
