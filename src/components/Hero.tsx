import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-grill.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="font-heading font-extrabold text-5xl md:text-7xl lg:text-8xl mb-6 text-foreground tracking-tight">
          Experimente o autêntico<br />
          <span className="text-primary">churrasco americano</span>
        </h1>
        
        <p className="font-body text-xl md:text-2xl mb-10 text-muted-foreground max-w-3xl mx-auto">
          Defumação artesanal • Cortes selecionados • Sabor inesquecível
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="hero"
            className="text-lg px-8 py-6 font-heading font-bold"
          >
            Ver Cardápio
          </Button>
          <Button 
            size="lg" 
            variant="heroOutline"
            className="text-lg px-8 py-6 font-heading font-bold"
          >
            Reserve Agora
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
