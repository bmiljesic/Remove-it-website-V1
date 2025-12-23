import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { Industries } from "@/components/home/Industries";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ServiceAreasPreview } from "@/components/home/ServiceAreasPreview";
import { TrustSignals } from "@/components/home/TrustSignals";
import { FinalCTA } from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        {/* ONE Continuous Background Wrapper - spans Hero through TrustSignals */}
        <div className="relative bg-background">
          {/* Single continuous background pattern - spans entire page */}
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
          
          {/* All sections with transparent backgrounds - no gaps */}
          <div className="relative z-10">
            <Hero />
            <ServicesOverview />
            <Industries />
            <WhyChooseUs />
            <ServiceAreasPreview />
            <TrustSignals />
            {/* HowItWorks - dark overlay on same continuous background for pattern alignment */}
            <div className="relative">
              {/* Dark overlay for HowItWorks section - pattern shows through from parent */}
              <div className="absolute inset-0 bg-primary/95 pointer-events-none z-20" />
              <div className="relative z-30">
                <HowItWorks />
              </div>
            </div>
          </div>
        </div>
        
        {/* FinalCTA - separate gradient section */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
};

export default Index;
