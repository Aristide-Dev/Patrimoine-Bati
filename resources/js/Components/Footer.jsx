import React from 'react';
import { 
  Phone, Mail, MapPin, Facebook, Twitter, Youtube, Linkedin,
  Globe, Building2, Landmark, Hammer, Scale, Banknote, BadgeDollarSign,
  ScrollText, Gem, ScaleIcon, Users, FileText
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-primary-800 text-white" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Section Logo et Description */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <img
              className="h-16 w-48 object-contain hover:scale-105 transition-transform duration-300"
              src="/images/logo/logo-mamri-02.png"
              alt="Logo MAMRI"
              loading="lazy"
            />
            <p className="text-gray-300 text-center md:text-left text-balance">
              La Mission d'Appui à la Mobilisation des Ressources Internes en République de Guinée.
            </p>
          </div>

          {/* Section Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary-200" />
              Contact
            </h3>
            <address className="not-italic space-y-3">
              <div className="flex items-start group">
                <Phone size={18} className="mt-1 mr-3 text-primary-200 shrink-0" />
                <a href="tel:+224629001379" className="hover:text-primary-200 hover:underline transition-colors">
                  (+224) 629 00 13 79
                </a>
              </div>
              <div className="flex items-start group">
                <Mail size={18} className="mt-1 mr-3 text-primary-200 shrink-0" />
                <a href="mailto:contacts@mamri.gov.gn" className="hover:text-primary-200 hover:underline transition-colors">
                  contacts@mamri.gov.gn
                </a>
              </div>
              <div className="flex items-start">
                <MapPin size={18} className="mt-1 mr-3 text-primary-200 shrink-0" />
                <span>Sandervalia 6ème AV, Conakry- République de Guinée</span>
              </div>
            </address>
          </div>

          {/* Section Liens institutionnels complets */}
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary-200" />
              Liens utiles
            </h3>
            <nav aria-label="Liens institutionnels">
              <ul className="grid grid-cols-1 gap-2">
                {[
                  { href: "http://www.presidence.gov.gn/", text: "Présidence", icon: <Landmark size={16} /> },
                  { href: "https://www.primature.gov.gn/", text: "Primature", icon: <Building2 size={16} /> },
                  { href: "http://mef.gov.gn/", text: "Ministère Économie", icon: <Banknote size={16} /> },
                  { href: "https://mbudget.gov.gn/", text: "Ministère Budget", icon: <BadgeDollarSign size={16} /> },
                  { href: "https://mines.gov.gn/", text: "Ministère Mines", icon: <Hammer size={16} /> },
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-primary-200 hover:underline transition-colors py-1"
                    >
                      {link.icon}
                      <span className="text-balance">{link.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary-200" />
              Liens utiles
            </h3>
            <nav aria-label="Liens institutionnels">
              <ul className="grid grid-cols-1 gap-2">
                {[
                  { href: "http://www.mplan.gov.gn/", text: "MPCI", icon: <Scale size={16} /> },
                  { href: "https://mpten.gov.gn/", text: "Postes et Télécoms", icon: <Users size={16} /> },
                  { href: "https://www.bcrg-guinee.org/", text: "Banque Centrale", icon: <Gem size={16} /> },
                  { href: "https://dni.gov.gn/", text: "Direction Générale Impôts", icon: <ScrollText size={16} /> },
                  { href: "https://dgd.gov.gn/", text: "Direction Générale Douanes", icon: <ScaleIcon size={16} /> },
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-primary-200 hover:underline transition-colors py-1"
                    >
                      {link.icon}
                      <span className="text-balance">{link.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Section Réseaux sociaux séparée */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <h3 className="text-xl font-bold text-center md:text-left">
              Suivez nos actualités
            </h3>
            <nav aria-label="Réseaux sociaux">
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { 
                    icon: <Facebook className="w-7 h-7" />,
                    href: "https://www.facebook.com/MAMRIGN",
                    label: "Facebook"
                  },
                  {
                    icon: <Twitter className="w-7 h-7" />,
                    href: "https://twitter.com/MAMRI_GN",
                    label: "Twitter"
                  },
                  {
                    icon: <Linkedin className="w-7 h-7" />,
                    href: "https://www.linkedin.com/company/mamri-r%C3%A9publique-de-guin%C3%A9e/",
                    label: "LinkedIn"
                  },
                  {
                    icon: <Youtube className="w-7 h-7" />,
                    href: "https://www.youtube.com/channel/UC-_gdoMNdf_aG_3HMi6QCfA",
                    label: "YouTube"
                  }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:scale-110 ${
                      social.label === 'Facebook' ? 'hover:text-[#1877F2]' :
                      social.label === 'Twitter' ? 'hover:text-[#1DA1F2]' :
                      social.label === 'LinkedIn' ? 'hover:text-[#0A66C2]' :
                      'hover:text-[#FF0000]'
                    }`}
                    aria-label={`Suivez-nous sur ${social.label}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>

        {/* Section Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <img
            className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
            src="/images/logo/brandingGn.png"
            alt="Emblème national"
            loading="lazy"
          />
          <p className="text-gray-300 text-xl">
            <span className="font-medium text-white">Simandou 2040</span> - 
            © {new Date().getFullYear()} <span className="font-medium text-white">MAMRI</span> - 
            Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;