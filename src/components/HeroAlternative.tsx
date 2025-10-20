import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo.webp";
import videoFile from "@/assets/video.mp4";
import bgwImage from "@/assets/bgw.webp";

const HeroAlternative = () => {
  return (
    <section 
      className="py-24 px-4 bg-background relative overflow-hidden"
      style={{ 
        backgroundImage: `url(${bgwImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="order-1 md:order-1">
            <img
              src={logoImage}
              alt="WEST 1465 Logo"
              className="w-[200px] h-auto filter brightness-110 mb-6"
            />
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Venha nos conhecer
            </h2>
            <p className="font-heading font-bold text-xl md:text-2xl text-primary mb-6">
              onde cada corte conta uma história
            </p>
            <p className="font-body text-base md:text-lg text-muted-foreground mb-8">
              Prepare-se para uma experiência fantástica! Aqui você encontra cortes premium e únicos, defumados artesanalmente, prontos para transformar seu churrasco e encantar seus convidados.
            </p>
            
            {/* Cortes Nobres & Defumados Premium */}
            <div className="flex items-center gap-2 mb-8">
              <span className="font-heading font-bold text-lg text-foreground">
                Cortes Nobres & Defumados Premium
              </span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
            </div>
            <div className="flex justify-start">
              <Button
                size="lg"
                variant="outline"
                className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black font-condensed font-semibold"
                onClick={() => window.open('https://wa.me/551932733108', '_blank')}
              >
                COMO CHEGAR
              </Button>
            </div>
          </div>

          {/* Right Column: Video */}
          <div className="order-2 md:order-2">
            <div className="max-w-[400px] mx-auto">
              <AspectRatio ratio={9/16} className="w-full">
                <video
                  className="w-full h-full rounded-lg object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={videoFile} type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAlternative;
