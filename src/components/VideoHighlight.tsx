import { AspectRatio } from "@/components/ui/aspect-ratio";
import logoImage from "@/assets/logo.webp";

const VideoHighlight = () => {
  const videoId = "JR8cC9Czn6g";
  const src = `https://www.youtube.com/embed/${videoId}?playlist=${videoId}&loop=1&controls=0&modestbranding=1&rel=0`;

  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--brand-gold)_/_0.06)_0%,_transparent_70%)]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Video Column */}
          <div className="order-2 md:order-1">
            <div className="max-w-[400px] mx-auto md:mx-0">
              <AspectRatio ratio={9/16} className="w-full">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={src}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </AspectRatio>
            </div>
          </div>

          {/* Copy Column */}
          <div className="order-1 md:order-2">
            <div className="mb-8">
              <img
                src={logoImage}
                alt="WEST 1465 Logo"
                className="w-[300px] h-auto filter brightness-110 mb-6"
              />
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground">
                Um pouco da nossa <span className="text-primary">experiência</span>
              </h2>
            </div>
            
            <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed">
              Vídeo vertical com momentos do nosso BBQ para inspirar o seu churrasco
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <p className="font-body text-foreground">
                  Cortes premium selecionados e defumados artesanalmente
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <p className="font-body text-foreground">
                  Embalagem a vácuo para manter a qualidade e sabor
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <p className="font-body text-foreground">
                  Pronto para finalizar na sua grelha e impressionar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHighlight;


