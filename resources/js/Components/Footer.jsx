import React from 'react';
import { 
  Phone, Mail, MapPin, Facebook, Twitter, Youtube, Linkedin,
  Globe, Landmark, Building2, Banknote, FileText, Scale, Users, ScrollText
} from 'lucide-react';
import { motion } from 'framer-motion';

// Composant pour le préchargement des ressources
const PreloadResources = () => (
  <>
    <link rel="preload" href="/images/logo/logo-PBP-02.png" as="image" />
    <link rel="preload" href="/images/logo/brandingGn.png" as="image" />
    <link rel="preload" href="/images/logo/Logo-S2040-pour-Fond-Noir.png" as="image" />
  </>
);

const Footer = () => {
  const usefulLinks = [
    { 
      href: "http://www.presidence.gov.gn/", 
      text: "Présidence de la République de Guinée",
    },
    { 
      href: "https://www.primature.gov.gn/", 
      text: "Primature",
    },
    { 
      href: "http://www.habitat.gov.gn/", 
      text: "Ministère de l'Habitat",
    },
    { 
      href: "http://www.investinguinea.gov.gn/", 
      text: "Agence de Promotion des Investissements Privés",
    },
  ];

  const socialMedia = [
    { 
      href: "https://www.facebook.com/PBPGN", 
      icon: <Facebook />, 
      label: "Facebook",
      color: "#1877F2" 
    },
    { 
      href: "https://twitter.com/PBP_GN", 
      icon: <Twitter />, 
      label: "Twitter",
      color: "#1DA1F2" 
    },
    { 
      href: "https://www.linkedin.com/company/PBP-r%C3%A9publique-de-guin%C3%A9e/", 
      icon: <Linkedin />, 
      label: "LinkedIn",
      color: "#0A66C2" 
    },
    { 
      href: "https://www.youtube.com/channel/UC-_gdoMNdf_aG_3HMi6QCfA", 
      icon: <Youtube />, 
      label: "YouTube",
      color: "#FF0000" 
    },
  ];

  const contactInfos = [
    {
      icon: <Phone />, 
      content: [
        <a href="tel:+224655358284">(+224) 655-35-82-84</a>,
        <a href="tel:+224611981928">(+224) 611-98-19-28</a>
      ]
    },
    {
      icon: <Mail />, 
      content: [
        <a href="mailto:contact@patrimoinebatipublic.com">contact@patrimoinebatipublic.com</a>,
        <a href="mailto:serviceaccueil@patrimoinebatipublic.com">serviceaccueil@patrimoinebatipublic.com</a>
      ]
    },
    {
      icon: <MapPin />, 
      content: "PORTS CONTENEURS DE CONAKRY, KALOUM REP. DE GUINEE"
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-primary to-primary-800 text-white" role="contentinfo">
      <PreloadResources />
      
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Section Logo et Description */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <img
              className="h-16 w-48 object-contain hover:scale-105 transition-transform duration-300"
              src="/images/logo/logo-pbp.png"
              alt="Logo PBP"
              loading="eager"
            />
            <p className="text-lg text-justify text-gray-300 md:text-left text-balance">
              Direction Générale du Patrimoine Bâti Public - Gestion et valorisation du patrimoine immobilier de l'État
            </p>
          </div>

          {/* Section Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Phone className="w-5 h-5 text-secondary" aria-hidden="true" />
              <span>Contact</span>
            </h3>
            <address className="not-italic space-y-3">
              {contactInfos.map((item, index) => (
                <div key={index} className="flex items-start group">
                  {React.cloneElement(item.icon, {
                    size: 18,
                    className: "mt-1 mr-3 text-secondary shrink-0",
                    'aria-hidden': true
                  })}
                  <span className="hover:text-secondary transition-colors">
                    {Array.isArray(item.content) ? (
                      <div className="flex flex-col gap-1">
                        {item.content.map((content, i) => (
                          <span key={i}>{content}</span>
                        ))}
                      </div>
                    ) : (
                      item.content
                    )}
                  </span>
                </div>
              ))}
            </address>
          </div>

          {/* Section Liens utiles */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Liens utiles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {usefulLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Section Réseaux sociaux */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <h3 className="text-xl font-bold text-center md:text-left">
              Suivez nos actualités
            </h3>
            <nav aria-label="Réseaux sociaux">
              <div className="flex flex-wrap justify-center gap-4">
                {socialMedia.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:scale-110"
                    style={{ color: social.color }}
                    aria-label={`Suivez-nous sur ${social.label}`}
                  >
                    {React.cloneElement(social.icon, {
                      className: "w-7 h-7",
                      'aria-hidden': true
                    })}
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
            alt="Emblème national de la Guinée"
            loading="lazy"
            decoding="async"
          />
          <p className="text-gray-300 text-xl"> 
            © {new Date().getFullYear()} <span className="font-medium text-white">PBP</span> - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;