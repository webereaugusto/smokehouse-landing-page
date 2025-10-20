import { Flame } from "lucide-react";

const OurStory = () => {
  return (
    <section id="sobre" className="py-24 px-4 bg-gradient-section relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,_hsl(var(--flame)_/_0.1)_0%,_transparent_50%)]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Flame className="w-4 h-4 text-primary" />
              <span className="font-heading text-sm font-semibold text-primary">Nossa História</span>
            </div>
            
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-foreground">
              Paixão por <span className="text-primary">autenticidade</span>
            </h2>
            
            <div className="space-y-4 font-body text-muted-foreground text-lg">
              <p>
                A WEST 1465 nasceu do sonho de trazer a verdadeira experiência do churrasco americano para o Brasil. Inspirados pelas tradicionais smokehouses do sul dos Estados Unidos, criamos um espaço onde cada corte é tratado com respeito e cada defumação é uma arte.
              </p>
              
              <p>
                Nossa jornada começou com uma viagem pelo Texas, Kansas City e Carolina do Norte, onde aprendemos os segredos da defumação low & slow com os mestres do pit-barbecue. Voltamos determinados a replicar essa experiência autêntica.
              </p>
              
              <p>
                Hoje, selecionamos pessoalmente cada corte, utilizamos apenas madeiras nobres na defumação e seguimos rigorosamente os tempos e temperaturas que transformam carne em uma experiência inesquecível.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-secondary/50 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <div className="text-4xl font-heading font-bold text-primary mb-2">12h+</div>
              <div className="font-body text-muted-foreground">Defumação média por brisket</div>
            </div>
            
            <div className="bg-secondary/50 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <div className="text-4xl font-heading font-bold text-primary mb-2">100%</div>
              <div className="font-body text-muted-foreground">Madeira nobre na defumação</div>
            </div>
            
            <div className="bg-secondary/50 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <div className="text-4xl font-heading font-bold text-primary mb-2">5★</div>
              <div className="font-body text-muted-foreground">Avaliação média dos clientes</div>
            </div>
            
            <div className="bg-secondary/50 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <div className="text-4xl font-heading font-bold text-primary mb-2">2020</div>
              <div className="font-body text-muted-foreground">Ano de fundação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
