import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AmericanBBQ from "@/components/AmericanBBQ";
import Differentials from "@/components/Differentials";
import OurStory from "@/components/OurStory";
import TheProcess from "@/components/TheProcess";
import Gallery from "@/components/Gallery";
import Menu from "@/components/Menu";
import Experiences from "@/components/Experiences";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import VideoHighlight from "@/components/VideoHighlight";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Header />
      <Hero />
      <AmericanBBQ />
      <Differentials />
      <OurStory />
      <TheProcess />
      <Gallery />
      <Menu />
      <Experiences />
      <WhyChoose />
      <Testimonials />
      <VideoHighlight />
      <FinalCTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
