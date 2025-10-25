import { Button } from "@/components/ui/button";

const Menu = () => {
  const menuItems = [
    {
      name: "COSTELINHA DEFUMADA",
      description: "Corte nobre defumado apenas na lenha de café. Sabor único e inconfundível que diferencia seu restaurante. Produção artesanal com sabores únicos.",
      highlight: "Lenha de café especial",
    },
    {
      name: "BRISKET PREMIUM",
      description: "Maturado e defumado por 12+ horas na lenha de café. Textura única e sabor profundo impossível de replicar. Qualidade super premium para clientes exigentes.",
      highlight: "12h+ defumação artesanal",
    },
    {
      name: "CUPIM DEFUMADO",
      description: "Corte brasileiro elevado à excelência com defumação na lenha de café. Sabor exclusivo que combina tradição nacional com técnica americana refinada.",
      highlight: "Qualidade total",
    },
  ];

  return (
    <section id="cardapio" className="py-24 px-4 bg-gradient-section" role="region" aria-labelledby="menu-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="menu-heading" className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
            Produtos <span className="text-primary">Únicos</span> para seu Restaurante
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-6">
            Carnes nobres defumadas na lenha de café. Mais de 10 anos de experiência em produção artesanal com sabores únicos de sabores e qualidade super premium.
          </p>
          
          {/* Produtos Premium */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="font-heading font-bold text-lg text-foreground">
              Costelinha • Brisket • Cupim Defumados
            </span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-secondary/30 backdrop-blur-sm rounded-lg p-8 shadow-card hover:shadow-glow transition-all duration-300 border border-border/50 group hover:border-primary/30"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-heading font-bold text-2xl text-foreground group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <span className="text-xs font-body bg-primary/20 text-primary px-3 py-1 rounded-full">
                  {item.highlight}
                </span>
              </div>
              
              <p className="font-body text-muted-foreground mb-6">
                {item.description}
              </p>
              
              <Button 
                variant="menuItem" 
                size="sm" 
                className="font-heading"
                onClick={() => window.open('https://wa.me/551932733108', '_blank')}
              >
                Solicitar Orçamento
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
