import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
            Venha nos <span className="text-primary">visitar</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Casa de carnes gourmet. Compre presencialmente ou reserve pelo WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl mb-2 text-foreground">Localização</h3>
                <p className="font-body text-muted-foreground">
                  Rua West 1465, Jardim América<br />
                  São Paulo - SP, 01234-000
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl mb-2 text-foreground">WhatsApp / Telefone</h3>
                <p className="font-body text-muted-foreground">
                  (11) 98765-4321<br />
                  (11) 3456-7890
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl mb-2 text-foreground">E-mail</h3>
                <p className="font-body text-muted-foreground">
                  contato@west1465.com.br
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl mb-2 text-foreground">Horário</h3>
                <p className="font-body text-muted-foreground">
                  Terça a Quinta: 18h - 23h<br />
                  Sexta e Sábado: 18h - 00h<br />
                  Domingo: 12h - 22h<br />
                  Segunda: Fechado
                </p>
              </div>
            </div>
          </div>

          <div className="bg-secondary/30 rounded-lg overflow-hidden shadow-card h-[400px] flex items-center justify-center border border-border/50">
            <div className="text-center p-8">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="font-body text-muted-foreground">
                Mapa de localização
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
