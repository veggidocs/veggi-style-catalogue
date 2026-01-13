import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CatalogsSection from "@/components/CatalogsSection";
import EditorialSection from "@/components/EditorialSection";
import SocialProofSection from "@/components/SocialProofSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GiftSection from "@/components/GiftSection";
import ROISection from "@/components/ROISection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <section id="catalogos">
          <CatalogsSection />
        </section>
        <section id="linhas">
          <EditorialSection />
        </section>
        <section id="sobre">
          <SocialProofSection />
        </section>
        <TestimonialsSection />
        <GiftSection />
        <ROISection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
