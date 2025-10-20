import { AspectRatio } from "@/components/ui/aspect-ratio";

const VideoHighlight = () => {
  const videoId = "JR8cC9Czn6g";
  const src = `https://www.youtube.com/embed/${videoId}?playlist=${videoId}&loop=1&controls=0&modestbranding=1&rel=0`;

  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--brand-gold)_/_0.06)_0%,_transparent_70%)]"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground">
            Um pouco da nossa <span className="text-primary">experiência</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4">
            Vídeo vertical com momentos do nosso BBQ para inspirar o seu churrasco
          </p>
        </div>

        <div className="rounded-xl border border-border/60 bg-secondary/20 backdrop-blur-sm shadow-card overflow-hidden">
          <AspectRatio ratio={9/16} className="w-full">
            <iframe
              className="w-full h-full"
              src={src}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};

export default VideoHighlight;


