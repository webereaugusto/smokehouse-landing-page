import { useState } from "react";
import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const companyMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Rua%20Doutor%20Em%C3%ADlio%20Ribas%2C%201109%2C%20Campinas%2C%20SP";

const salesPoints = [
  { city: "Caraguatatuba-SP", place: "Condomínio Costa Verde Tabatinga" },
  {
    city: "Quadra-SP",
    place: "Casa de Carnes São Bento (Condomínio Aeronáutico Aeroquadra)",
  },
];

const comingSoonLocations = [
  "Piracicaba",
  "São Paulo",
  "Bragança Paulista",
  "Campinas",
];

const representatives = [
  {
    name: "Guilherme Nerceciam",
    region: "São Paulo - SP",
    phone: "+55 11 99918-2008",
    whatsapp: "https://wa.me/5511999182008",
  },
  {
    name: "Paulo Jacomini",
    region: "Maringá - PR",
    phone: "+55 44 99945-3777",
    whatsapp: "https://wa.me/5544999453777",
  },
];

const legalContent = {
  privacy: {
    title: "Política de Privacidade",
    text: "A WEST 1465 respeita a sua privacidade. Os dados enviados por e-mail, WhatsApp ou formulários de contato são usados apenas para atendimento, orçamentos, relacionamento comercial e retorno às solicitações feitas pelo usuário. Não comercializamos suas informações pessoais.",
  },
  terms: {
    title: "Termos de Serviço",
    text: "As informações deste site têm caráter institucional e comercial. Produtos, disponibilidade, condições de atendimento e orçamentos podem variar conforme região, volume e necessidade do cliente. Para confirmar detalhes, entre em contato com a equipe WEST 1465 pelos canais oficiais.",
  },
  careers: {
    title: "Trabalhe Conosco",
    text: "A WEST 1465 preza por novos talentos e por profissionais que compartilham nosso compromisso com qualidade, excelência e atendimento cuidadoso. Para fazer parte do nosso banco de talentos, encaminhe seu currículo para o e-mail principal da empresa.",
    ctaLabel: "Enviar currículo",
    ctaHref: "mailto:contato@west1465.com.br?subject=Curr%C3%ADculo%20-%20Trabalhe%20Conosco%20WEST%201465",
  },
};

type LegalModal = keyof typeof legalContent | null;

const Footer = () => {
  const [activeModal, setActiveModal] = useState<LegalModal>(null);
  const modalContent = activeModal ? legalContent[activeModal] : null;

  return (
    <footer id="contato" className="bg-charcoal border-t border-border/40" role="contentinfo">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 lg:py-20">
        <div className="mx-auto mb-16 max-w-5xl text-center">
          <h2 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
            Qualidade Premium para seu restaurante
          </h2>
          <p className="mt-5 font-body text-base leading-8 text-muted-foreground md:text-lg">
            Carnes nobres defumadas na lenha de café. Mais de 10 anos de experiência em produção artesanal com total exclusividade de sabores e qualidade super premium.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.95fr_1fr_0.95fr] lg:gap-16">
          <div className="space-y-9">
            <div>
              <h3 className="font-brand text-xl tracking-[0.28em] text-primary">
                WEST 1465
              </h3>
              <p className="mt-6 max-w-xs font-body text-sm leading-7 text-muted-foreground">
                Excelência artesanal com paciência, fumaça e os melhores cortes da tradição defumada.
              </p>
            </div>

            <div className="flex items-center gap-5 text-muted-foreground">
              <a
                href="https://www.instagram.com/west.1465/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
                aria-label="Instagram da WEST 1465"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={companyMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
                aria-label="Localização da WEST 1465 no Google Maps"
              >
                <MapPin className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/551932733108"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
                aria-label="WhatsApp da WEST 1465"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.52 0 .18 5.34.18 11.9c0 2.1.55 4.15 1.6 5.96L.08 24l6.29-1.65a11.88 11.88 0 0 0 5.7 1.45h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.23-6.17-3.46-8.42ZM12.08 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.73.98 1-3.64-.23-.37a9.88 9.88 0 0 1-1.51-5.28c0-5.45 4.43-9.88 9.89-9.88a9.8 9.8 0 0 1 6.98 2.9 9.82 9.82 0 0 1 2.89 6.98c0 5.45-4.44 9.9-9.89 9.9Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.4-1.48a9 9 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.08-.12-.27-.2-.57-.35Z" />
                </svg>
              </a>
            </div>

            <address className="not-italic border border-border/70 bg-background/10 p-7 md:p-8">
              <h4 className="font-condensed text-[0.68rem] font-bold uppercase tracking-[0.35em] text-primary">
                Sede Administrativa
              </h4>
              <div className="mt-6 space-y-5 font-body text-sm text-muted-foreground">
                <p className="flex gap-4 leading-6">
                  <MapPin className="mt-1 h-4 w-4 flex-none text-primary" />
                  <span>
                    Rua Doutor Emílio Ribas, 1109
                    <br />
                    Campinas, SP
                  </span>
                </p>
                <a
                  href="https://wa.me/551932733108"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 flex-none text-primary" />
                  <span>+55 19 3273-3108</span>
                </a>
                <a
                  href="mailto:contato@west1465.com.br"
                  className="flex gap-4 transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 flex-none text-primary" />
                  <span>contato@west1465.com.br</span>
                </a>
              </div>
            </address>
          </div>

          <div>
            <h4 className="border-b border-border/70 pb-4 font-condensed text-[0.68rem] font-bold uppercase tracking-[0.35em] text-primary">
              Pontos de venda
            </h4>
            <ul className="mt-7 space-y-5">
              {salesPoints.map((location) => (
                <li key={location.city}>
                  <a
                    href="#contato"
                    className="block"
                    aria-label={`Ver ponto de venda em ${location.city}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="whitespace-nowrap font-heading text-xl font-semibold tracking-[0.08em] text-foreground md:text-2xl">
                        {location.city}
                      </span>
                      <span className="h-px flex-1 bg-border/60" />
                    </div>
                    <span className="mt-1 block font-condensed text-[0.58rem] uppercase tracking-[0.18em] text-muted-foreground/70">
                      {location.place}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-9 border-t border-border/60 pt-6">
              <p className="font-condensed text-[0.62rem] font-bold uppercase tracking-[0.32em] text-primary">
                Em breve
              </p>
              <ul className="mt-5 space-y-4">
                {comingSoonLocations.map((location) => (
                  <li key={location} className="flex items-center gap-4">
                    <span className="font-heading text-xl font-semibold tracking-[0.12em] text-muted-foreground md:text-2xl">
                      {location}
                    </span>
                    <span className="h-px flex-1 bg-border/50" />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-12">
            <section aria-labelledby="sales-representative">
              <h4
                id="sales-representative"
                className="border-b border-border/70 pb-4 font-condensed text-[0.68rem] font-bold uppercase tracking-[0.35em] text-primary"
              >
                Representantes Comerciais
              </h4>
              <div className="mt-7 space-y-5">
                {representatives.map((representative) => (
                  <article
                    key={representative.phone}
                    className="border border-border/70 bg-background/10 p-6"
                  >
                    <p className="font-heading text-xl font-semibold tracking-[0.14em] text-foreground">
                      {representative.name}
                    </p>
                    <p className="mt-2 font-condensed text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground">
                      {representative.region}
                    </p>
                    <a
                      href={representative.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 flex items-center gap-4 font-body text-sm text-muted-foreground transition-colors hover:text-primary"
                      aria-label={`Chamar ${representative.name} no WhatsApp`}
                    >
                      <MessageCircle className="h-4 w-4 flex-none fill-primary text-primary" />
                      <span>{representative.phone}</span>
                    </a>
                  </article>
                ))}
              </div>
            </section>

            <nav aria-labelledby="footer-information">
              <h4
                id="footer-information"
                className="border-b border-border/70 pb-4 font-condensed text-[0.68rem] font-bold uppercase tracking-[0.35em] text-primary"
              >
                Informações
              </h4>
              <ul className="mt-5 space-y-2 font-body text-sm leading-tight text-muted-foreground">
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveModal("privacy")}
                    className="text-left transition-colors hover:text-primary"
                  >
                    Política de Privacidade
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveModal("terms")}
                    className="text-left transition-colors hover:text-primary"
                  >
                    Termos de Serviço
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveModal("careers")}
                    className="text-left transition-colors hover:text-primary"
                  >
                    Trabalhe Conosco
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="border-t border-border/40">
        <div className="mx-auto grid max-w-4xl gap-8 px-5 py-10 md:grid-cols-3 md:px-8">
          <div>
            <h4 className="font-heading text-sm font-semibold text-primary">
              WEST 1465
            </h4>
            <p className="mt-4 max-w-xs font-body text-xs leading-6 text-muted-foreground">
              Autêntico churrasco americano com defumação artesanal e cortes premium.
            </p>
          </div>

          <nav aria-label="Links rápidos do rodapé">
            <h4 className="font-heading text-sm font-semibold text-foreground">
              Links Rápidos
            </h4>
            <ul className="mt-4 space-y-2 font-body text-xs text-muted-foreground">
              <li>
                <a href="#cardapio" className="transition-colors hover:text-primary">
                  Cardápio
                </a>
              </li>
              <li>
                <a href="#galeria" className="transition-colors hover:text-primary">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#contato" className="transition-colors hover:text-primary">
                  Contato
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground">
              Redes Sociais
            </h4>
            <a
              href="https://www.instagram.com/west.1465/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-muted-foreground transition-colors hover:text-primary"
              aria-label="Instagram da WEST 1465"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <p className="mt-3 font-body text-xs text-muted-foreground">
              @west.1465
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-border/50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 font-condensed text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground/70 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2026 WEST 1465 Artisan Smokehouse. Criado para paladares exigentes.</p>
          <div className="flex items-center gap-5">
            <span>Brasil</span>
            <span className="h-4 w-px bg-border" aria-hidden="true" />
            <span>Português</span>
          </div>
        </div>
      </div>

      {modalContent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 px-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="footer-legal-title"
        >
          <div className="max-w-lg border border-border/80 bg-charcoal p-7 shadow-card">
            <h3 id="footer-legal-title" className="font-heading text-2xl font-semibold text-foreground">
              {modalContent.title}
            </h3>
            <p className="mt-5 font-body text-sm leading-7 text-muted-foreground">
              {modalContent.text}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {"ctaHref" in modalContent && (
                <a
                  href={modalContent.ctaHref}
                  className="border border-primary bg-primary px-5 py-2 text-center font-condensed text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/80"
                >
                  {modalContent.ctaLabel}
                </a>
              )}
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="border border-primary px-5 py-2 font-condensed text-xs font-semibold uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
