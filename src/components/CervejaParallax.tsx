import { useEffect, useRef } from "react";
import paralaxImage from "@/assets/paralax.jpg";
import logoCerveja from "@/assets/logo-cerveja.png";

const CervejaParallax = () => {
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
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden" role="region" aria-label="Seção parallax da cerveja artesanal">
      {/* Imagem de fundo com efeito parallax */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 w-full h-[120%] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${paralaxImage})`,
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
              src={logoCerveja}
              alt="Logo Cerveja Artesanal West 1465"
              className="h-20 md:h-28 w-auto filter brightness-110 drop-shadow-lg"
              loading="lazy"
            />
          </div>
          
          {/* Subtítulo */}
          <p className="font-heading text-lg md:text-xl text-primary mb-4 tracking-wider uppercase letter-spacing-wider">
            O Autêntico Sabor Americano
          </p>
          
          {/* Título Principal */}
          <h2 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-6 text-foreground drop-shadow-lg">
            Cerveja Artesanal
            <br />
            <span className="text-primary">WEST 1465</span>
          </h2>
          
          {/* Descrição */}
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Sabores exclusivos e marcantes: <strong className="text-foreground">Pilsen</strong> e <strong className="text-foreground">Jaboticaba</strong>. 
            Produzida com os mais altos padrões de qualidade artesanal, criando uma experiência única que harmoniza perfeitamente com nossos cortes defumados.
          </p>
          
          {/* Destaque adicional */}
          <div className="mt-8 pt-8 border-t border-primary/30">
            <p className="font-heading text-sm md:text-base text-primary/90 tracking-widest uppercase">
              Sucesso em Eventos • Qualidade Premium • Harmonização Perfeita
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CervejaParallax;

