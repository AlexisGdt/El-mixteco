import { MapPin, Phone, Clock, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="mb-4">Nous Contacter</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <div>
                  <p>123 Rue de la Gaîté</p>
                  <p>75014 Paris, France</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0" />
                <p>+33 1 45 67 89 01</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="mb-4">Horaires d'Ouverture</h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-start gap-3">
                <Clock size={20} className="mt-1 flex-shrink-0" />
                <div>
                  <p>Lundi - Vendredi: 12h00 - 14h30, 19h00 - 23h00</p>
                  <p>Samedi: 12h00 - 23h00</p>
                  <p>Dimanche: 12h00 - 22h00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4">Suivez-nous</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="#" 
                className="hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p>&copy; 2026 El Mixteco. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
