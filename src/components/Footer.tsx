import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal py-12 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-heading font-bold text-2xl mb-4 text-primary">
              WEST 1465
            </h3>
            <p className="font-body text-muted-foreground">
              Autêntico churrasco americano com defumação artesanal e cortes premium.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-foreground">
              Links Rápidos
            </h4>
            <ul className="space-y-2 font-body text-muted-foreground">
              <li>
                <a href="#cardapio" className="hover:text-primary transition-colors">
                  Cardápio
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-primary transition-colors">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-foreground">
              Redes Sociais
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-secondary/50 rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary/50 rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary/50 rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center">
          <p className="font-body text-muted-foreground text-sm">
            © 2025 WEST 1465 – Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
