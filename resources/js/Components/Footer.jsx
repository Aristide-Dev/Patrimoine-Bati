import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex flex-col gap-0 items-center">
              
    <img
      className="h-8"
      src="/images/logo/brandingGn.png"
      alt="Logo Lassiri"
      loading="lazy"
    />
    <img
      className="h-16"
      src="/images/logo/logo-mamri-02.png"
      alt="Logo Lassiri"
      loading="lazy"
    />
            </div>
            <h3 className="text-xl font-bold mb-4">À propos</h3>
            <p className="text-gray-300">
              La Mission d'appui à la mobilisation des ressources internes en République de Guinée.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>+224 99 99 99 99</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>contact@matd.gov.gn</span>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>Conakry, République de Guinée</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><a href="/ministere" className="hover:text-primary">Le Ministère</a></li>
              <li><a href="/services" className="hover:text-primary">Nos Services</a></li>
              <li><a href="/actualites" className="hover:text-primary">Actualités</a></li>
              <li><a href="/contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-primary">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-primary">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} MAMRI - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;