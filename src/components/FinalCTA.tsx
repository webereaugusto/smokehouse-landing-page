import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-24 px-4 bg-gradient-section relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--flame)_/_0.15)_0%,_transparent_70%)]"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-heading font-bold text-4xl md:text-6xl mb-6 text-foreground">
          Não espere mais
        </h2>
        
        <p className="font-body text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Reserve sua mesa ou peça agora e viva a experiência de churrasco à americana
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="hero"
            className="text-lg px-10 py-7 font-heading font-bold"
          >
            Fazer Pedido
          </Button>
          <Button 
            size="lg" 
            variant="heroOutline"
            className="text-lg px-10 py-7 font-heading font-bold"
          >
            Falar no WhatsApp
          </Button>
        </div>
        
        <p className="font-body text-sm text-muted-foreground mt-6">
          Atendemos de terça a domingo • Aceite cartões e PIX
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
