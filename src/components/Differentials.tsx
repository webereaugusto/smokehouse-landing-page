import { Flame, Clock, Users } from "lucide-react";
import premiumCuts from "@/assets/premium-cuts.jpg";
import smokingTechnique from "@/assets/smoking-technique.jpg";
import ambiente from "@/assets/ambiente.jpg";

const Differentials = () => {
  const items = [
    {
      icon: Flame,
      title: "Ingredientes Premium & Origem Selecionada",
      description: "Cortes nobremente escolhidos, maturados e defumados com precisão.",
      image: premiumCuts,
    },
    {
      icon: Clock,
      title: "Técnicas Tradicionais de Defumação",
      description: "Low & Slow como manda o ritual americano de BBQ – sabor profundo, textura irrepreensível.",
      image: smokingTechnique,
    },
    {
      icon: Users,
      title: "Ambiente & Atendimento Especializado",
      description: "Ambiente inspirador de smoke-house americana, pronto para receber você e sua turma.",
      image: ambiente,
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
            O que nos torna <span className="text-primary">únicos</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada corte conta uma história. Cada defumação é uma arte.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="group bg-secondary/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent"></div>
              </div>
              
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="font-heading font-bold text-xl mb-3 text-foreground">
                  {item.title}
                </h3>
                
                <p className="font-body text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
