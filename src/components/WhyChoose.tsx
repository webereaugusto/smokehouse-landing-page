import { Shield, Leaf, ChefHat, Clock, Award, Heart } from "lucide-react";
import heroGrillImage from "@/assets/hero-grill.jpg";

const WhyChoose = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Qualidade Total",
      description: "Defumação especial na lenha de café - sabor único e inconfundível",
    },
    {
      icon: Leaf,
      title: "10+ Anos de Experiência",
      description: "Mais de uma década dedicada ao aperfeiçoamento da arte da defumação",
    },
    {
      icon: ChefHat,
      title: "Qualidade Super Premium",
      description: "Produção artesanal com total exclusividade de sabores e apresentação",
    },
    {
      icon: Clock,
      title: "Foco Especializado",
      description: "Produtos desenvolvidos especificamente para restaurantes premium",
    },
    {
      icon: Award,
      title: "Produtos Únicos",
      description: "Costelinha, Brisket, Cupim e Cerveja Artesanal com sabores impossíveis de replicar",
    },
    {
      icon: Heart,
      title: "Diferenciação Garantida",
      description: "Produtos que elevam o nível do seu estabelecimento",
    },
  ];

  return (
    <section 
      className="py-24 px-4 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `url(${heroGrillImage})`
      }}
    >
      {/* Overlay escuro para melhorar legibilidade */}
      <div className="absolute inset-0 bg-black/85"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
            Por que escolher a <span className="text-primary">WEST 1465</span>?
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Qualidade premium para seu restaurante. Defumação na lenha de café com mais de 10 anos de experiência em produção artesanal
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-secondary/40 to-secondary/10 backdrop-blur-sm rounded-lg p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="font-heading font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
                {reason.title}
              </h3>
              
              <p className="font-body text-muted-foreground text-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
