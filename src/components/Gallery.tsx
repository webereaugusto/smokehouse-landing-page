import cupimImage from "@/assets/cupim.webp";
import costelaImage from "@/assets/costela.webp";
import brisketImage from "@/assets/brisket.webp";

const Gallery = () => {
  const images = [
    { src: cupimImage, alt: "Cupim defumado na lenha de café" },
    { src: costelaImage, alt: "Costela defumada com molhos artesanais" },
    { src: brisketImage, alt: "Brisket premium defumado" },
  ];

  return (
    <section id="galeria" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
            Saboreie a <span className="text-primary">diferença</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Cada foto revela a paixão por defumação autêntica
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-card hover:shadow-glow transition-all duration-300 group aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
