import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo.webp";

const Header = () => {
  return (
    <header className="relative z-50 w-full bg-background/95 backdrop-blur-sm border-b border-brand-gold/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src={logoImage}
              alt="WEST 1465 Logo"
              className="h-14 w-auto filter brightness-110"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#sobre" className="text-foreground hover:text-brand-gold transition-colors font-condensed font-medium">
              Sobre
            </a>
            <a href="#cardapio" className="text-foreground hover:text-brand-gold transition-colors font-condensed font-medium">
              Cardápio
            </a>
            <a href="#galeria" className="text-foreground hover:text-brand-gold transition-colors font-condensed font-medium">
              Galeria
            </a>
            <a href="#contato" className="text-foreground hover:text-brand-gold transition-colors font-condensed font-medium">
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  className="hidden sm:flex border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black font-condensed font-semibold"
                  onClick={() => window.open('https://wa.me/551932733108', '_blank')}
                >
                  Reserve Agora
                </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
