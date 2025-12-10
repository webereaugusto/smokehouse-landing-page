import { Button } from "@/components/ui/button";
import { Calendar, ChefHat, Users, Star } from "lucide-react";

const Events = () => {
  const eventFeatures = [
    {
      icon: ChefHat,
      title: "Chef Defumador",
      description: "Nossos pit masters especializados comandam toda a operação, garantindo a perfeição de cada corte defumado no local.",
    },
    {
      icon: Users,
      title: "Estrutura Completa",
      description: "Levamos toda a infraestrutura necessária: defumadores, equipamentos profissionais e equipe especializada.",
    },
    {
      icon: Star,
      title: "Cortes Premium e Cerveja Artesanal",
      description: "Costelinha, Brisket e Cupim defumados na lenha de café, além de Cerveja Artesanal West 1465, preparados especialmente para impressionar seus convidados.",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-section relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--flame)_/_0.08)_0%,_transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="font-heading text-sm font-semibold text-primary">Eventos Especiais</span>
          </div>
          
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
            WEST 1465 <span className="text-primary">em Eventos</span>
          </h2>
          
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Leve o autêntico churrasco BBQ Americano para seu evento. Estrutura completa, chef defumador especializado e os melhores cortes para encantar seu público e enriquecer qualquer ocasião especial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {eventFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-secondary/30 backdrop-blur-sm rounded-lg p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="font-heading font-bold text-2xl mb-4 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="font-body text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl p-10 md:p-12 border border-primary/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <h3 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-foreground">
              Transforme seu Evento em uma Experiência Inesquecível
            </h3>
            
            <p className="font-body text-lg text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
              <strong>Casamentos, aniversários, confraternizações corporativas</strong> - qualquer ocasião especial merece o melhor. Nossa equipe leva até você toda a magia do BBQ Americano autêntico, com defumação ao vivo e cortes que impressionam até os paladares mais exigentes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="hero"
                className="text-lg px-8 py-6 font-heading font-bold"
                onClick={() => window.open('https://wa.me/551932733108', '_blank')}
              >
                Solicitar Orçamento para Evento
              </Button>
              <Button 
                size="lg" 
                variant="heroOutline"
                className="text-lg px-8 py-6 font-heading font-bold"
                onClick={() => window.open('https://wa.me/551932733108', '_blank')}
              >
                Falar com Especialista
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;


