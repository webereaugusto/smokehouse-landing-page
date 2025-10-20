
const Contact = () => {
  return (
    <section id="contato" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
            Experiência única em carnes defumadas
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Casa de carnes gourmet. Compre presencialmente ou reserve pelo WhatsApp.
          </p>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <div className="space-y-8">
            <div>
              <h3 className="font-heading font-bold text-xl mb-4 text-foreground">Sede Administrativa</h3>
              <p className="font-body text-muted-foreground text-lg">
                Rua Doutor Emílio Ribas, 1109
              </p>
            </div>

            <div>
              <h3 className="font-heading font-bold text-xl mb-4 text-foreground">WhatsApp</h3>
              <a 
                href="https://wa.me/551932733108" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-body text-muted-foreground text-lg hover:text-primary transition-colors"
              >
                +55-19-3273-3108
              </a>
            </div>

            <div>
              <h3 className="font-heading font-bold text-xl mb-4 text-foreground">E-mail</h3>
              <a 
                href="mailto:contato@west1465.com.br"
                className="font-body text-muted-foreground text-lg hover:text-primary transition-colors"
              >
                contato@west1465.com.br
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
