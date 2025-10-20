import { Button } from "@/components/ui/button";
import { Users, Award, Heart } from "lucide-react";

const Experiences = () => {
  const experiences = [
    {
      icon: Users,
      name: "Combo Família",
      description: "Brisket, costela suína, linguiça artesanal, acompanhamentos para 4 pessoas.",
      serves: "4-6 pessoas",
      highlight: "Perfeito para reunir",
    },
    {
      icon: Award,
      name: "Experiência Premium",
      description: "Degustação completa: 5 cortes defumados, molhos especiais, sides artesanais.",
      serves: "2-3 pessoas",
      highlight: "Melhor escolha",
    },
    {
      icon: Heart,
      name: "Romântico BBQ",
      description: "Seleção de 3 cortes premium, vinho da casa, sobremesa especial.",
      serves: "2 pessoas",
      highlight: "Experiência única",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-section relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--flame)_/_0.08)_0%,_transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
            <span className="text-primary">Experiências</span> Especiais
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Combos pensados para tornar sua visita ainda mais memorável
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-secondary/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 border border-border/50 group"
            >
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-6 border-b border-border/50">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/30 transition-colors">
                  <exp.icon className="w-8 h-8 text-primary" />
                </div>
                
                <span className="inline-block bg-primary/10 text-primary text-xs font-heading font-semibold px-3 py-1 rounded-full mb-2">
                  {exp.highlight}
                </span>
                
                <h3 className="font-heading font-bold text-2xl text-foreground text-center">
                  {exp.name}
                </h3>
              </div>
              
              <div className="p-6">
                <p className="font-body text-muted-foreground mb-4 min-h-[80px]">
                  {exp.description}
                </p>
                
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/50">
                  <span className="font-body text-sm text-muted-foreground">Serve</span>
                  <span className="font-heading font-semibold text-primary">{exp.serves}</span>
                </div>
                
                <Button variant="menuItem" className="w-full font-heading">
                  Reservar Agora
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
