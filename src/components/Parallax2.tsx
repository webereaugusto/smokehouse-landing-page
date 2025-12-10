import ParallaxSection from "./ParallaxSection";
import paralax2Image from "@/assets/paralax2.jpg";

const Parallax2 = () => {
  return (
    <ParallaxSection
      image={paralax2Image}
      subtitle="Qualidade Premium"
      title="WEST 1465"
      titleHighlight="Experiência Única"
      description="Carnes premium defumadas na lenha de café e cerveja artesanal com sabores exclusivos. Mais de 10 anos de experiência em produção artesanal, criando uma experiência gastronômica memorável para seu restaurante."
      footerText="Sabores Únicos • Qualidade Super Premium • Diferenciação Garantida"
    />
  );
};

export default Parallax2;

