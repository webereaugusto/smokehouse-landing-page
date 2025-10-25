import { useState } from "react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo.webp";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="relative z-50 w-full bg-background/95 backdrop-blur-sm border-b border-brand-gold/20" role="banner">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <a href="/" aria-label="WEST 1465 - Página inicial">
              <img
                src={logoImage}
                alt="WEST 1465 - Casa de Carnes Gourmet"
                className="h-14 w-auto filter brightness-110"
                width="auto"
                height="56"
              />
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Menu principal">
            <a href="#sobre" className="text-foreground hover:text-brand-gold transition-colors font-condensed font-medium" aria-label="Ir para seção Sobre">
              Sobre
            </a>
            <a href="#cardapio" className="text-foreground hover:text-brand-gold transition-colors font-condensed font-medium" aria-label="Ir para seção Cardápio">
              Cardápio
            </a>
            <a href="#galeria" className="text-foreground hover:text-brand-gold transition-colors font-condensed font-medium" aria-label="Ir para seção Galeria">
              Galeria
            </a>
            <a href="#contato" className="text-foreground hover:text-brand-gold transition-colors font-condensed font-medium" aria-label="Ir para seção Contato">
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
                  Chamar no WhatsApp
                </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={toggleMobileMenu}
              aria-label="Abrir menu mobile"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-brand-gold/20 shadow-lg">
            <nav className="px-4 py-6 space-y-4" role="navigation" aria-label="Menu mobile">
              <a 
                href="#sobre" 
                className="block text-foreground hover:text-brand-gold transition-colors font-condensed font-medium py-2"
                onClick={closeMobileMenu}
                aria-label="Ir para seção Sobre"
              >
                Sobre
              </a>
              <a 
                href="#cardapio" 
                className="block text-foreground hover:text-brand-gold transition-colors font-condensed font-medium py-2"
                onClick={closeMobileMenu}
                aria-label="Ir para seção Cardápio"
              >
                Cardápio
              </a>
              <a 
                href="#galeria" 
                className="block text-foreground hover:text-brand-gold transition-colors font-condensed font-medium py-2"
                onClick={closeMobileMenu}
                aria-label="Ir para seção Galeria"
              >
                Galeria
              </a>
              <a 
                href="#contato" 
                className="block text-foreground hover:text-brand-gold transition-colors font-condensed font-medium py-2"
                onClick={closeMobileMenu}
                aria-label="Ir para seção Contato"
              >
                Contato
              </a>
              <div className="pt-4 border-t border-border/50">
                <Button
                  variant="outline"
                  className="w-full border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black font-condensed font-semibold"
                  onClick={() => {
                    window.open('https://wa.me/551932733108', '_blank');
                    closeMobileMenu();
                  }}
                >
                  Chamar no WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
