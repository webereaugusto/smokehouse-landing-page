import ParallaxSection from "./ParallaxSection";
import paralax2Image from "@/assets/paralax2.jpg";

const Parallax2 = () => {
  return (
    <ParallaxSection
      image={paralax2Image}
      subtitle="Cerveja Artesanal"
      title="WEST 1465"
      titleHighlight="Sabor Autêntico"
      description="Cerveja artesanal premium WEST 1465, disponível nos estilos Pilsen e Jaboticaba. Sabores exclusivos, marcantes e equilibrados, criados para harmonizar com cortes defumados e encantar os paladares mais exigentes."
      footerText="Sabores Exclusivos • Qualidade Super Premium • Sucesso em Eventos"
      showLogo={false}
    />
  );
};

export default Parallax2;

