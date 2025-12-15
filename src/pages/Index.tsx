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
        <Hero />
        <ServicesOverview />
        <Industries />
        <WhyChooseUs />
        <HowItWorks />
        <ServiceAreasPreview />
        <TrustSignals />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
};

export default Index;
