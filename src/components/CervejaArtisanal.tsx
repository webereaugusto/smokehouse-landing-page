import { Button } from "@/components/ui/button";
import beerWest1465 from "@/assets/beer_west_1465.jpg";
import logoCerveja from "@/assets/logo-cerveja.png";
import { Beer } from "lucide-react";

const CervejaArtisanal = () => {

  return (
    <section id="cerveja" className="py-24 px-4 bg-background relative overflow-hidden" role="region" aria-labelledby="beer-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Beer className="w-4 h-4 text-primary" />
            <span className="font-heading text-sm font-semibold text-primary">Cerveja Artesanal</span>
          </div>
          
          <div className="flex justify-center mb-6">
            <img
              src={logoCerveja}
              alt="Logo Cerveja Artesanal West 1465"
              className="h-24 md:h-32 w-auto filter brightness-110"
              loading="eager"
            />
          </div>
          
          <h2 id="beer-heading" className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
            Cerveja Artesanal <span className="text-primary">WEST 1465</span>
          </h2>
          
          <p className="font-body text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            Cerveja artesanal premium produzida com os mais altos padrões de qualidade. Disponível nos sabores <strong>Pilsen</strong> e <strong>Jaboticaba</strong>, com sabores exclusivos e marcantes. Perfeita harmonização com nossas carnes defumadas e um verdadeiro sucesso em eventos, criando uma experiência gastronômica única e memorável para seu restaurante.
          </p>
        </div>

        {/* Destaque Principal */}
        <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl p-10 md:p-12 border border-primary/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Texto */}
              <div>
                <div className="mb-6">
                  <img
                    src={logoCerveja}
                    alt="Logo Cerveja Artesanal West 1465"
                    className="h-16 md:h-20 w-auto filter brightness-110"
                    loading="lazy"
                  />
                </div>
                
                <h3 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-foreground">
                  Harmonização Perfeita
                </h3>
                
                <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed">
                  Nossa <strong>Cerveja Artesanal West 1465</strong> foi desenvolvida especialmente para harmonizar com nossos cortes defumados. Produzida com ingredientes selecionados e seguindo técnicas artesanais, disponível nos sabores <strong>Pilsen</strong> e <strong>Jaboticaba</strong>, com sabores exclusivos e marcantes que complementam perfeitamente o sabor único das carnes defumadas na lenha de café.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="font-body text-muted-foreground">
                      <strong className="text-foreground">Sabores Exclusivos:</strong> Pilsen e Jaboticaba com sabores marcantes e únicos
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="font-body text-muted-foreground">
                      <strong className="text-foreground">Sucesso em Eventos:</strong> Aprovada e muito solicitada em eventos especiais
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="font-body text-muted-foreground">
                      <strong className="text-foreground">Harmonização Perfeita:</strong> Desenvolvida para complementar nossos cortes defumados
                    </p>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  variant="hero"
                  className="text-lg px-8 py-6 font-heading font-bold"
                  onClick={() => window.open('https://wa.me/551932733108', '_blank')}
                >
                  Solicitar Orçamento
                </Button>
              </div>
              
              {/* Imagem Destaque */}
              <div className="relative">
                <div className="aspect-[3/4] rounded-lg overflow-hidden border border-border/50 shadow-card">
                  <img
                    src={beerWest1465}
                    alt="Cerveja Artesanal West 1465"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CervejaArtisanal;

