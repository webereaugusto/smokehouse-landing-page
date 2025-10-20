import Hero from "@/components/Hero";
import Differentials from "@/components/Differentials";
import Gallery from "@/components/Gallery";
import Menu from "@/components/Menu";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Hero />
      <Differentials />
      <Gallery />
      <Menu />
      <Testimonials />
      <FinalCTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
