import { Thermometer, Timer, TreePine, Award } from "lucide-react";

const TheProcess = () => {
  const steps = [
    {
      icon: Award,
      number: "01",
      title: "Seleção de Cortes Premium",
      description: "Escolhemos apenas cortes nobres de fornecedores certificados. Cada peça passa por rigorosa inspeção de qualidade e maturação controlada.",
    },
    {
      icon: TreePine,
      number: "02",
      title: "Madeira Nobre",
      description: "Utilizamos exclusivamente madeira de nogueira, carvalho e cerejeira para conferir camadas complexas de sabor durante a defumação.",
    },
    {
      icon: Thermometer,
      number: "03",
      title: "Low & Slow",
      description: "Temperatura baixa e constante entre 107-135°C. O verdadeiro segredo do BBQ americano está na paciência e no controle preciso do calor.",
    },
    {
      icon: Timer,
      number: "04",
      title: "Tempo é Sabor",
      description: "De 8 a 16 horas de defumação dependendo do corte. Não há atalhos quando se busca perfeição - cada minuto importa.",
    },
  ];

  return (
    <section className="py-24 px-4 bg-background relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
            O <span className="text-primary">Processo</span> Low & Slow
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            A tradicional técnica de pit-barbecue americano, onde o tempo e a temperatura trabalham juntos para criar sabores incomparáveis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-secondary/50 to-secondary/20 backdrop-blur-sm rounded-lg p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="absolute top-6 right-6 text-6xl font-heading font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                {step.number}
              </div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="font-heading font-bold text-2xl mb-4 text-foreground">
                  {step.title}
                </h3>
                
                <p className="font-body text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-lg p-8 border border-primary/20 text-center">
          <p className="font-body text-lg text-foreground italic">
            "A defumação low & slow é uma tradição centenária americana. Na WEST 1465, honramos essa tradição com cada peça que servimos."
          </p>
          <p className="font-heading font-semibold text-primary mt-4">— Chef Pit Master</p>
        </div>
      </div>
    </section>
  );
};

export default TheProcess;
