import { Button } from "@/components/ui/button";

const Menu = () => {
  const menuItems = [
    {
      name: "Brisket Premium",
      description: "Maturado, defumado por 12 horas, servido em fatias suculentas.",
      highlight: "12h de defumação",
    },
    {
      name: "Costela Suína Defumada",
      description: "Fumada com madeira de nogueira, desossada e fatiada.",
      highlight: "Madeira de nogueira",
    },
    {
      name: "Linguiça Artesanal BBQ",
      description: "Feita internamente, defumada e grelhada, sabor marcante.",
      highlight: "Produção própria",
    },
    {
      name: "Pulled Pork",
      description: "Lombo suíno desfiado após 10 horas de low & slow, derrete na boca.",
      highlight: "Low & Slow",
    },
    {
      name: "Tri-Tip Defumado",
      description: "Corte californiano macio, com crosta crocante e interior rosado.",
      highlight: "Especialidade da casa",
    },
    {
      name: "Frango Inteiro Defumado",
      description: "Marinado 24h, defumado até ficar com pele crocante e carne suculenta.",
      highlight: "Marinada especial",
    },
    {
      name: "Costela Bovina (Beef Ribs)",
      description: "Gigante, suculenta, defumada por 8 horas com blend de especiarias.",
      highlight: "Porção generosa",
    },
    {
      name: "Peito de Peru Defumado",
      description: "Temperado com ervas finas, defumado lentamente, extremamente macio.",
      highlight: "Opção leve",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
            Nossos <span className="text-primary">Destaques</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Defumados artesanais que levam você direto aos EUA
          </p>
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
                Saiba Mais
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
