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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" role="banner" aria-label="Seção principal">
      {/* Background slideshow layers */}
      <div className="absolute inset-0" aria-hidden="true">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              idx === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
            aria-hidden="true"
          />
        ))}
        {/* Gradient overlay on top of all images */}
        <div className="absolute inset-0 bg-gradient-hero" aria-hidden="true"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl mb-6 text-foreground tracking-tight">
          Carnes Premium Defumadas<br />
          <span className="text-primary">ao Estilo BBQ Americano</span><br />
          <span className="text-xl md:text-2xl lg:text-3xl font-normal text-muted-foreground">
            Sabores Raros e Autênticos para seu Restaurante
          </span>
        </h1>
        
        <p className="font-body text-base md:text-lg mb-10 text-muted-foreground max-w-3xl mx-auto">
          <strong>Costelinha, Brisket e Cupim</strong> defumados na lenha de café. Mais de 10 anos de experiência em produção artesanal com sabores únicos e qualidade super premium.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="hero"
            className="text-base px-6 py-4 font-heading font-bold"
            onClick={() => window.open('https://wa.me/551932733108', '_blank')}
          >
            Solicitar Orçamento
          </Button>
          <Button 
            size="lg" 
            variant="heroOutline"
            className="text-base px-6 py-4 font-heading font-bold"
            onClick={() => window.open('https://wa.me/551932733108', '_blank')}
          >
            Falar com Consultor
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
