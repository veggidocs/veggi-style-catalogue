import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CatalogsSection from "@/components/CatalogsSection";
import SocialProofSection from "@/components/SocialProofSection";
import ProductLinesSection from "@/components/ProductLinesSection";
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
        <section id="sobre">
          <SocialProofSection />
        </section>
        <section id="linhas">
          <ProductLinesSection />
        </section>
        <GiftSection />
        <ROISection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
