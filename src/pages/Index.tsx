import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import LargeHero from "../components/content/LargeHero";
import FiftyFiftySection from "../components/content/FiftyFiftySection";
import ProductCarousel from "../components/content/ProductCarousel";
import OneThirdTwoThirdsSection from "../components/content/OneThirdTwoThirdsSection";
import EditorialSection from "../components/content/EditorialSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <LargeHero />
        <FiftyFiftySection />
        <ProductCarousel />
        <OneThirdTwoThirdsSection />
        <EditorialSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
