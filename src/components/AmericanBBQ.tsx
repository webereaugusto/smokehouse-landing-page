import { Flame, MapPin, History, Star } from "lucide-react";

const AmericanBBQ = () => {
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--flame)_/_0.05)_0%,_transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Flame className="w-4 h-4 text-primary" />
            <span className="font-heading text-sm font-semibold text-primary">A Tradição Americana</span>
          </div>
          
          <h2 className="font-heading font-bold text-4xl md:text-6xl mb-6 text-foreground">
            Por que o <span className="text-primary">BBQ Americano</span> é tão especial?
          </h2>
          
          <p className="font-body text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            O churrasco americano não é apenas comida — é uma tradição centenária, uma filosofia de paciência e respeito pelo corte. A técnica "low & slow" transforma carnes simples em obras-primas culinárias, onde cada hora de defumação adiciona camadas profundas de sabor.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-secondary/30 to-secondary/10 backdrop-blur-sm rounded-lg p-8 border border-border/50 hover:border-primary/30 transition-all">
            <MapPin className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-heading font-bold text-2xl mb-3 text-foreground">Raízes no Sul dos EUA</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              Texas, Carolina do Norte, Kansas City, Memphis — cada região desenvolveu seu estilo único de defumação e tempero, criando uma cultura rica e diversificada de pit-barbecue que atravessou gerações.
            </p>
          </div>

          <div className="bg-gradient-to-br from-secondary/30 to-secondary/10 backdrop-blur-sm rounded-lg p-8 border border-border/50 hover:border-primary/30 transition-all">
            <History className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-heading font-bold text-2xl mb-3 text-foreground">Séculos de Tradição</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              Desde o século XVII, a defumação lenta sobre madeira nobre é a arte de transformar cortes rústicos em carnes incrivelmente macias, suculentas e repletas de sabor defumado que derrete na boca.
            </p>
          </div>

          <div className="bg-gradient-to-br from-secondary/30 to-secondary/10 backdrop-blur-sm rounded-lg p-8 border border-border/50 hover:border-primary/30 transition-all">
            <Star className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-heading font-bold text-2xl mb-3 text-foreground">Sabor Incomparável</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              O segredo está no tempo: 8 a 16 horas de defumação em temperatura baixa e constante permite que a fumaça penetre profundamente nas fibras, criando aquele anel de fumaça característico e sabor inconfundível.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl p-10 md:p-12 border border-primary/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <Flame className="w-12 h-12 text-primary mx-auto mb-6" />
            
            <h3 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-foreground">
              Nossa Inspiração Nasceu Aqui
            </h3>
            
            <p className="font-body text-lg text-muted-foreground max-w-4xl mx-auto mb-6 leading-relaxed">
              Apaixonados por essa tradição milenar, viajamos pelos Estados Unidos para aprender com os verdadeiros mestres do pit-barbecue. Passamos semanas em smokehouses lendárias, absorvendo cada técnica, cada segredo passado de geração em geração.
            </p>
            
            <p className="font-body text-lg text-foreground max-w-4xl mx-auto font-semibold">
              Voltamos com uma missão: trazer essa experiência autêntica para o Brasil, mantendo a mesma dedicação, as mesmas técnicas e o mesmo respeito pela arte da defumação que faz do BBQ americano uma lenda mundial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmericanBBQ;
