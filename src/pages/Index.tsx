import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroAlternative from "@/components/HeroAlternative";
import AmericanBBQ from "@/components/AmericanBBQ";
import Differentials from "@/components/Differentials";
import OurStory from "@/components/OurStory";
import TheProcess from "@/components/TheProcess";
import Gallery from "@/components/Gallery";
import Menu from "@/components/Menu";
import Events from "@/components/Events";
import Experiences from "@/components/Experiences";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
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
      <Events />
      <Experiences />
      <WhyChoose />
      <Testimonials />
      <FinalCTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
