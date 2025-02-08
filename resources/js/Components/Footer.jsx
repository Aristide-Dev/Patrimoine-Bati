import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Facebook, Twitter, Youtube, Linkedin,
  Globe, Landmark, Building2, Banknote, FileText, Scale, Users, ScrollText
} from 'lucide-react';

const PreloadResources = () => (
  <>
    <link rel="preload" href="/images/logo/logo-pbp.png" as="image" />
    <link rel="preload" href="/images/logo/brandingGn.png" as="image" />
    <link rel="preload" href="/images/logo/SIMANDOU2024.png" as="image" />
  </>
);

const Footer = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  const usefulLinks = [
    { 
      href: "http://www.presidence.gov.gn/", 
      text: "Présidence de la République de Guinée",
      icon: <Landmark className="w-4 h-4" />
    },
    { 
      href: "https://www.primature.gov.gn/", 
      text: "Primature",
      icon: <Building2 className="w-4 h-4" />
    },
    { 
      href: "http://mef.gov.gn/", 
      text: "Ministère de L'Économie et des Finances",
      icon: <Banknote className="w-4 h-4" />
    },
    { 
      href: "https://mbudget.gov.gn/", 
      text: "Ministère du Budget",
      icon: <FileText className="w-4 h-4" />
    },
    { 
      href: "https://mines.gov.gn/", 
      text: "Ministère des Mines et de La Géologie",
      icon: <Scale className="w-4 h-4" />
    },
    { 
      href: "http://www.mplan.gov.gn/", 
      text: "Ministère du Plan et de la Coopération Internationale (MPCI)",
      icon: <Users className="w-4 h-4" />
    },
    { 
      href: "https://mpten.gov.gn/", 
      text: "Ministère des Postes, des Telecommunications et de l'Economie Numerique",
      icon: <Globe className="w-4 h-4" />
    },
    { 
      href: "https://www.bcrg-guinee.org/", 
      text: "Banque Centrale de la République de Guinée",
      icon: <Landmark className="w-4 h-4" />
    },
    { 
      href: "https://dgi.gov.gn/", 
      text: "Direction Générale des Impôts",
      icon: <ScrollText className="w-4 h-4" />
    },
    { 
      href: "https://dgd.gov.gn/", 
      text: "Direction Générale des Douanes",
      icon: <Building2 className="w-4 h-4" />
    },
  ];

  const socialMedia = [
    { 
      href: "https://www.facebook.com/PBPGN", 
      icon: <Facebook />, 
      label: "Facebook",
      color: "#1877F2",
      hoverBg: "hover:bg-[#1877F2]"
    },
    { 
      href: "https://twitter.com/PBP_GN", 
      icon: <Twitter />, 
      label: "Twitter",
      color: "#1DA1F2",
      hoverBg: "hover:bg-[#1DA1F2]"
    },
    { 
      href: "https://www.linkedin.com/company/PBP-r%C3%A9publique-de-guin%C3%A9e/", 
      icon: <Linkedin />, 
      label: "LinkedIn",
      color: "#0A66C2",
      hoverBg: "hover:bg-[#0A66C2]"
    },
    { 
      href: "https://www.youtube.com/channel/UC-_gdoMNdf_aG_3HMi6QCfA", 
      icon: <Youtube />, 
      label: "YouTube",
      color: "#FF0000",
      hoverBg: "hover:bg-red-600"
    },
  ];

  const contactInfos = [
    {
      icon: <Phone />, 
      content: [
        <a href="tel:+224655358284" className="hover:text-secondary transition-colors">(+224) 655-35-82-84</a>,
        <a href="tel:+224611981928" className="hover:text-secondary transition-colors">(+224) 611-98-19-28</a>
      ]
    },
    {
      icon: <Mail />, 
      content: [
        <a href="mailto:contact@patrimoinebatipublic.com" className="hover:text-secondary transition-colors">contact@patrimoinebatipublic.com</a>,
        <a href="mailto:serviceaccueil@patrimoinebatipublic.com" className="hover:text-secondary transition-colors">serviceaccueil@patrimoinebatipublic.com</a>
      ]
    },
    {
      icon: <MapPin />, 
      content: "PORTS CONTENEURS DE CONAKRY, KALOUM REP. DE GUINEE"
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-primary-700 to-primary-800 text-white shadow-2xl" role="contentinfo">
      <PreloadResources />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          
          {/* Section Logo et Description */}
          <div 
            className="flex flex-col items-center md:items-start space-y-6"
            onMouseEnter={() => setHoveredSection('logo')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div className="group relative overflow-hidden rounded-lg">
              <img
                className="h-20 w-56 object-contain transform transition-all duration-500 group-hover:scale-110"
                src="/images/logo/logo-pbp.png"
                alt="Logo PBP"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <p className="text-lg text-justify text-gray-100 md:text-left leading-relaxed">
              Direction Générale du Patrimoine Bâti Public - Gestion et valorisation du patrimoine immobilier de l'État
            </p>
            
            <div className="group relative overflow-hidden rounded-lg w-full">
              <img
                className="h-32 w-full bg-black/50 object-cover transform transition-all duration-500 group-hover:scale-105"
                src="/images/logo/SIMANDOU2024.png"
                alt="Logo SIMANDOU 2024"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Section Contact */}
          <div 
            className="space-y-6"
            onMouseEnter={() => setHoveredSection('contact')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <h3 className="text-2xl font-bold flex items-center gap-3 text-secondary">
              <Phone className="w-6 h-6" aria-hidden="true" />
              <span>Contact</span>
            </h3>
            
            <address className="not-italic space-y-4">
              {contactInfos.map((item, index) => (
                <div key={index} className="flex items-start group">
                  {React.cloneElement(item.icon, {
                    size: 20,
                    className: "mt-1 mr-3 text-secondary group-hover:scale-110 transition-transform duration-300",
                    'aria-hidden': true
                  })}
                  <span className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    {Array.isArray(item.content) ? (
                      <div className="flex flex-col gap-2">
                        {item.content.map((content, i) => (
                          <span key={i} className="hover:translate-x-1 transition-transform duration-300">
                            {content}
                          </span>
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
          <div 
            className="md:col-span-2 space-y-6"
            onMouseEnter={() => setHoveredSection('links')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <h3 className="text-2xl font-bold text-secondary">Liens utiles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {usefulLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-200 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                >
                  <span className="text-secondary group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    {link.text}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Section Réseaux sociaux */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <h3 className="text-2xl font-bold text-center md:text-left text-secondary">
              Suivez nos actualités
            </h3>
            <nav aria-label="Réseaux sociaux" className="w-full md:w-auto">
              <div className="flex flex-wrap justify-center gap-6">
                {socialMedia.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-500 transform hover:scale-110 group ${social.hoverBg}`}
                    aria-label={`Suivez-nous sur ${social.label}`}
                  >
                    {React.cloneElement(social.icon, {
                      className: "w-6 h-6 text-white transition-colors duration-300",
                      'aria-hidden': true
                    })}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>

        {/* Section Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-center">
          <div className="group relative overflow-hidden rounded-lg">
            <img
              className="h-12 w-auto opacity-90 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"
              src="/images/logo/brandingGn.png"
              alt="Emblème national de la Guinée"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <p className="text-gray-200 text-xl"> 
            © {new Date().getFullYear()} <span className="font-medium text-white">PBP</span> - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;