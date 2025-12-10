import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroAlternative from "@/components/HeroAlternative";
import AmericanBBQ from "@/components/AmericanBBQ";
import Differentials from "@/components/Differentials";
import OurStory from "@/components/OurStory";
import TheProcess from "@/components/TheProcess";
import Gallery from "@/components/Gallery";
import Menu from "@/components/Menu";
import CervejaArtisanal from "@/components/CervejaArtisanal";
import CervejaParallax from "@/components/CervejaParallax";
import Events from "@/components/Events";
import Experiences from "@/components/Experiences";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import Parallax2 from "@/components/Parallax2";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Header />
      <Hero />
      <HeroAlternative />
      <AmericanBBQ />
      <Differentials />
      <OurStory />
      <TheProcess />
      <Gallery />
      <Menu />
      <CervejaArtisanal />
      <CervejaParallax />
      <Events />
      <Experiences />
      <WhyChoose />
      <Testimonials />
      <Parallax2 />
      <FinalCTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
