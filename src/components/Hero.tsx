import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero-grill.jpg";
import hero2 from "@/assets/premium-cuts.jpg";
import hero3 from "@/assets/smoking-technique.jpg";

const Hero = () => {
  const images = [hero1, hero2, hero3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background slideshow layers */}
      <div className="absolute inset-0">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              idx === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        {/* Gradient overlay on top of all images */}
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="font-heading font-extrabold text-5xl md:text-7xl lg:text-8xl mb-6 text-foreground tracking-tight">
          A casa de carnes gourmet<br />
          <span className="text-primary">para o seu churrasco</span>
        </h1>
        
        <p className="font-body text-xl md:text-2xl mb-10 text-muted-foreground max-w-3xl mx-auto">
          Cortes premium e defumados autorais para levar. Visite, escolha seus cortes e leve a experiência WEST 1465 para a sua parrilla.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="hero"
            className="text-lg px-8 py-6 font-heading font-bold"
          >
            Ver Cortes Exclusivos
          </Button>
          <Button 
            size="lg" 
            variant="heroOutline"
            className="text-lg px-8 py-6 font-heading font-bold"
          >
            Reservar pelo WhatsApp
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
