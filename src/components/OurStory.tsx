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
              Mais de <span className="text-primary">10 anos</span> de exclusividade
            </h2>
            
            <div className="space-y-4 font-body text-muted-foreground text-lg">
              <p>
                A WEST 1465 é especializada em <strong>carnes nobres defumadas</strong> para restaurantes premium. Nossa expertise única combina tradição americana com inovação brasileira, criando produtos de exclusividade total que diferenciam seu estabelecimento.
              </p>
              
              <p>
                <strong>Defumação exclusiva na lenha de café</strong> - uma técnica artesanal que desenvolvemos ao longo de mais de uma década. A lenha de café confere um sabor único e inconfundível, impossível de replicar com outras madeiras.
              </p>
              
              <p>
                Produção artesanal com <strong>total exclusividade de sabores, apresentação e qualidade super premium</strong>. Cada corte é selecionado criteriosamente e defumado seguindo nossos protocolos únicos, garantindo consistência e excelência para seus clientes mais exigentes.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-secondary/50 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <div className="text-4xl font-heading font-bold text-primary mb-2">10+</div>
              <div className="font-body text-muted-foreground">Anos de experiência</div>
            </div>
            
            <div className="bg-secondary/50 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <div className="text-4xl font-heading font-bold text-primary mb-2">100%</div>
              <div className="font-body text-muted-foreground">Lenha de café exclusiva</div>
            </div>
            
            <div className="bg-secondary/50 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <div className="text-4xl font-heading font-bold text-primary mb-2">3</div>
              <div className="font-body text-muted-foreground">Produtos exclusivos</div>
            </div>
            
            <div className="bg-secondary/50 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <div className="text-4xl font-heading font-bold text-primary mb-2">100%</div>
              <div className="font-body text-muted-foreground">Foco em restaurantes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
