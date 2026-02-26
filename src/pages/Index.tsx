import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CatalogsSection from "@/components/CatalogsSection";
import EditorialSection from "@/components/EditorialSection";
import PackagingSection from "@/components/PackagingSection";
import MixSection from "@/components/MixSection";
import SocialProofSection from "@/components/SocialProofSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GiftSection from "@/components/GiftSection";
import ROISection from "@/components/ROISection";
import SellOutSupportSection from "@/components/SellOutSupportSection";
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
        <PackagingSection />
        <MixSection />
        <SocialProofSection />
        <section id="depoimentos">
          <TestimonialsSection />
        </section>
        <GiftSection />
        <section id="roi">
          <ROISection />
        </section>
        <SellOutSupportSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
