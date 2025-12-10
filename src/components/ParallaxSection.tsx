import { useEffect, useRef } from "react";
import logoImage from "@/assets/logo.webp";

interface ParallaxSectionProps {
  image: string;
  subtitle?: string;
  title: string;
  titleHighlight?: string;
  description: string;
  footerText?: string;
}

const ParallaxSection = ({ 
  image, 
  subtitle, 
  title, 
  titleHighlight, 
  description, 
  footerText 
}: ParallaxSectionProps) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const rect = parallaxRef.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const elementTop = rect.top + scrolled;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Calcula a posição relativa do elemento na viewport
        const elementCenter = elementTop + elementHeight / 2;
        const scrollPosition = scrolled + windowHeight / 2;
        const distance = scrollPosition - elementCenter;
        const speed = 0.3;
        
        parallaxRef.current.style.transform = `translateY(${distance * speed}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Chama uma vez para posicionar inicialmente
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden" role="region" aria-label="Seção parallax">
      {/* Imagem de fundo com efeito parallax */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 w-full h-[120%] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${image})`,
          willChange: "transform",
        }}
        aria-hidden="true"
      />
      
      {/* Camada sobreposta preta com 0.5 de transparência */}
      <div 
        className="absolute inset-0 bg-black/50 z-10"
        aria-hidden="true"
      />
      
      {/* Conteúdo */}
      <div className="relative z-20 h-full flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img
              src={logoImage}
              alt="WEST 1465 Logo"
              className="h-20 md:h-28 w-auto filter brightness-110 drop-shadow-lg"
              loading="lazy"
            />
          </div>
          
          {/* Subtítulo */}
          {subtitle && (
            <p className="font-heading text-lg md:text-xl text-primary mb-4 tracking-wider uppercase letter-spacing-wider">
              {subtitle}
            </p>
          )}
          
          {/* Título Principal */}
          <h2 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-6 text-foreground drop-shadow-lg">
            {title}
            {titleHighlight && (
              <>
                <br />
                <span className="text-primary">{titleHighlight}</span>
              </>
            )}
          </h2>
          
          {/* Descrição */}
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            {description}
          </p>
          
          {/* Destaque adicional */}
          {footerText && (
            <div className="mt-8 pt-8 border-t border-primary/30">
              <p className="font-heading text-sm md:text-base text-primary/90 tracking-widest uppercase">
                {footerText}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;

