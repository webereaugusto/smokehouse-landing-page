import { Button } from "@/components/ui/button";
import { Search, Clock, Flame } from "lucide-react";

const Experiences = () => {
  const processes = [
    {
      icon: Search,
      name: "Seleção de Carnes Premium",
      description: "Selecionamos criteriosamente apenas os melhores cortes nobres. Cada peça é avaliada por nossos especialistas para garantir a qualidade super premium que diferencia nossos produtos.",
      highlight: "Qualidade garantida",
    },
    {
      icon: Clock,
      name: "Maturação e Temperos",
      description: "Processo de maturação controlada seguido de temperos artesanais exclusivos. Cada corte recebe tratamento individual com especiarias selecionadas e técnicas desenvolvidas ao longo de 10+ anos.",
      highlight: "Técnica exclusiva",
    },
    {
      icon: Flame,
      name: "Defumação na Lenha de Café",
      description: "Defumação exclusiva na lenha de café por 12+ horas. Técnica artesanal que confere sabor único e inconfundível, impossível de replicar com outras madeiras.",
      highlight: "Exclusividade total",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-section relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--flame)_/_0.08)_0%,_transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
            Nosso <span className="text-primary">Processo</span> Artesanal
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Mais de 10 anos de experiência em produção artesanal com total exclusividade de sabores e qualidade super premium
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <div
              key={index}
              className="bg-secondary/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 border border-border/50 group"
            >
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-6 border-b border-border/50">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/30 transition-colors">
                  <process.icon className="w-8 h-8 text-primary" />
                </div>
                
                <span className="inline-block bg-primary/10 text-primary text-xs font-heading font-semibold px-3 py-1 rounded-full mb-2">
                  {process.highlight}
                </span>
                
                <h3 className="font-heading font-bold text-2xl text-foreground text-center">
                  {process.name}
                </h3>
              </div>
              
              <div className="p-6">
                <p className="font-body text-muted-foreground mb-6 min-h-[120px]">
                  {process.description}
                </p>
                
                <div className="flex items-center justify-center">
                  <span className="font-heading font-semibold text-primary text-sm">
                    Processo exclusivo WEST 1465
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;