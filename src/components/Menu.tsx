import { Button } from "@/components/ui/button";

const Menu = () => {
  const menuItems = [
    {
      name: "Brisket Premium (para levar)",
      description: "Maturado e defumado por ~12 horas. Embalado a vácuo, pronto para finalizar em casa.",
      highlight: "12h de defumação",
    },
    {
      name: "Costela Suína Defumada (para levar)",
      description: "Defumada com madeira nobre. Embalada e refrigerada. Ideal para aquecer e servir.",
      highlight: "Madeira de nogueira",
    },
    {
      name: "Linguiça Artesanal BBQ",
      description: "Produção própria. Ideal para a grelha. Vendida por peso.",
      highlight: "Produção própria",
    },
    {
      name: "Pulled Pork (para levar)",
      description: "Cozido lentamente e desfiado. Perfeito para sanduíches. Embalado e refrigerado.",
      highlight: "Low & Slow",
    },
    {
      name: "Tri-Tip Defumado",
      description: "Corte californiano selecionado. Ideal para fatiar na hora do churrasco.",
      highlight: "Especialidade da casa",
    },
    {
      name: "Frango Inteiro Defumado (para levar)",
      description: "Marinado 24h e defumado lentamente. Vai embalado e pronto para finalizar no forno.",
      highlight: "Marinada especial",
    },
    {
      name: "Costela Bovina (Beef Ribs)",
      description: "Defumada por ~8 horas. Vendida por peça. Finalize na grelha para crocância.",
      highlight: "Porção generosa",
    },
    {
      name: "Peito de Peru Defumado",
      description: "Temperado com ervas finas. Perfeito fatiado frio ou aquecido. Vendido por peso.",
      highlight: "Opção leve",
    },
  ];

  return (
    <section id="cardapio" className="py-24 px-4 bg-gradient-section" role="region" aria-labelledby="menu-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="menu-heading" className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
            Cortes <span className="text-primary">Exclusivos</span> para o seu churrasco
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-6">
            Selecione, leve e finalize em casa. O verdadeiro BBQ americano para encantar seus convidados.
          </p>
          
          {/* Cortes Nobres & Defumados Premium */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="font-heading font-bold text-lg text-foreground">
              Cortes Nobres & Defumados Premium
            </span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
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
              
              <Button variant="menuItem" size="sm" className="font-heading">
                Reservar pelo WhatsApp
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
