import { Shield, Leaf, ChefHat, Clock, Award, Heart } from "lucide-react";
import heroGrillImage from "@/assets/hero-grill.jpg";

const WhyChoose = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Qualidade Garantida",
      description: "Certificação de origem e rastreabilidade de todos os cortes",
    },
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Fornecedores sustentáveis e madeira de reflorestamento",
    },
    {
      icon: ChefHat,
      title: "Pit Masters Certificados",
      description: "Equipe treinada nas melhores smokehouses americanas",
    },
    {
      icon: Clock,
      title: "Tradição Respeitada",
      description: "Técnicas centenárias de defumação mantidas à risca",
    },
    {
      icon: Award,
      title: "Prêmios & Reconhecimento",
      description: "Eleito melhor churrasco americano da região 2023/2024",
    },
    {
      icon: Heart,
      title: "Paixão em Cada Detalhe",
      description: "Do corte ao prato, cada etapa feita com dedicação",
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
            Mais do que churrasco, é uma experiência autêntica que combina tradição americana com excelência brasileira
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
