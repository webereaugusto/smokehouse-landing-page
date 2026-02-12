import { Flame, MapPin, History, Star } from "lucide-react";

const AmericanBBQ = () => {
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--flame)_/_0.05)_0%,_transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Flame className="w-4 h-4 text-primary" />
            <span className="font-heading text-sm font-semibold text-primary">A Tradição Americana</span>
          </div>
          
          <h2 className="font-heading font-bold text-4xl md:text-6xl mb-6 text-foreground">
            O <span className="text-primary">Segredo da WEST 1465</span>: Defumação com Lenha de Café
          </h2>
          
          <p className="font-body text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Nossa <strong>defumação com lenha de café</strong> confere um sabor intenso, autêntico e inesquecível aos nossos produtos. Uma técnica artesanal desenvolvida ao longo de mais de 10 anos, que combina tradição americana com inovação brasileira para criar sabores impossíveis de replicar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-secondary/30 to-secondary/10 backdrop-blur-sm rounded-lg p-8 border border-border/50 hover:border-primary/30 transition-all">
            <MapPin className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-heading font-bold text-2xl mb-3 text-foreground">Lenha de Café Especial</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              Nossa defumação utiliza apenas lenha de café, conferindo um sabor intenso, autêntico e inesquecível que diferencia nossos produtos no mercado. Uma técnica artesanal desenvolvida ao longo de mais de 10 anos.
            </p>
          </div>

          <div className="bg-gradient-to-br from-secondary/30 to-secondary/10 backdrop-blur-sm rounded-lg p-8 border border-border/50 hover:border-primary/30 transition-all">
            <History className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-heading font-bold text-2xl mb-3 text-foreground">10+ Anos de Experiência</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              Mais de uma década dedicada ao aperfeiçoamento da arte da defumação. Cada produto é resultado de anos de experiência, refinamento e dedicação à excelência culinária.
            </p>
          </div>

          <div className="bg-gradient-to-br from-secondary/30 to-secondary/10 backdrop-blur-sm rounded-lg p-8 border border-border/50 hover:border-primary/30 transition-all">
            <Star className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-heading font-bold text-2xl mb-3 text-foreground">Qualidade Super Premium</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              Produção artesanal com sabores únicos, apresentação e qualidade super premium. Cada corte é selecionado criteriosamente e defumado seguindo protocolos únicos.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl p-10 md:p-12 border border-primary/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <Flame className="w-12 h-12 text-primary mx-auto mb-6" />
            
            <h3 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-foreground">
              Qualidade Total para seu Restaurante
            </h3>
            
            <p className="font-body text-lg text-muted-foreground max-w-4xl mx-auto mb-6 leading-relaxed">
              Nossa <strong>defumação especial na lenha de café</strong> é resultado de mais de 10 anos de experiência e refinamento. Cada produto é desenvolvido especificamente para restaurantes que buscam diferenciação e qualidade em seus pratos.
            </p>
            
            <p className="font-body text-lg text-foreground max-w-4xl mx-auto font-semibold">
              <strong>Costelinha, Brisket e Cupim</strong> defumados com sabores únicos, apresentação e qualidade super premium. Produtos únicos que elevam o nível do seu estabelecimento e encantam os clientes mais exigentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmericanBBQ;
