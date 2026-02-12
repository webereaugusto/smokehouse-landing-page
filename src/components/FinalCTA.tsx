import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-24 px-4 bg-gradient-section relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--flame)_/_0.15)_0%,_transparent_70%)]"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-heading font-bold text-4xl md:text-6xl mb-6 text-foreground">
          Diferencie seu restaurante com qualidade
        </h2>
        
        <p className="font-body text-xl md:text-2xl text-muted-foreground mb-6 max-w-2xl mx-auto">
          Produtos únicos defumados na lenha de café. Mais de 10 anos de experiência em produção artesanal com total exclusividade de sabores e qualidade super premium.
        </p>
        
        {/* Produtos Premium */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <span className="font-heading font-bold text-xl text-foreground">
            Costelinha • Brisket • Cupim Defumados
          </span>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">★</span>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="hero"
            className="text-lg px-10 py-7 font-heading font-bold"
            onClick={() => window.open('https://wa.me/551932733108', '_blank')}
          >
            Solicitar Orçamento
          </Button>
          <Button 
            size="lg" 
            variant="heroOutline"
            className="text-lg px-10 py-7 font-heading font-bold"
            onClick={() => window.open('https://wa.me/551932733108', '_blank')}
          >
            Falar com Consultor
          </Button>
        </div>
        
        <p className="font-body text-sm text-muted-foreground mt-6">
          Atendimento especializado • Orçamentos personalizados via WhatsApp • Qualidade super premium garantida
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
