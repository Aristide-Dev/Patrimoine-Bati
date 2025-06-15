import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Facebook, Twitter, Youtube, Linkedin,
  Globe, Landmark, Building2, Banknote, FileText, Scale, Users, ScrollText,
  ChevronRight, ExternalLink
} from 'lucide-react';
import { motion } from 'framer-motion';
import { DGPBP } from '@/utils/dgpbp';

// Composant optimisé pour le préchargement des ressources critiques uniquement
const PreloadCriticalResources = () => (
  <>
    <link rel="preload" href="/images/logo/logo-pbp.png" as="image" fetchpriority="high" />
  </>
);

// Composant pour charger les images non critiques de manière paresseuse
const LazyImage = ({ src, alt, className, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => setIsLoaded(true);
  const handleError = () => setHasError(true);

  if (hasError) {
    return (
      <div className={`${className} bg-gray-200 flex items-center justify-center text-gray-500 text-sm`}>
        Image non disponible
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      loading="lazy"
      onLoad={handleLoad}
      onError={handleError}
      {...props}
    />
  );
};

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
      href: "https://habitat.gov.gn/", 
      text: "Ministère de l'Urbanisme, de l'Habitat et de l'Aménagement du territoire",
      icon: <Building2 className="w-4 h-4" />
    },
    { 
      href: "https://www.sonapign.com/", 
      text: "Société Nationale d'Aménagement et de Promotion Immobilière",
      icon: <FileText className="w-4 h-4" />
    },
    { 
      href: "https://inscription.aguifil.com/users/sign_in", 
      text: "Agence Guinéenne pour le Financement du Logement",
      icon: <Scale className="w-4 h-4" />
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

  return (
    <footer className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white shadow-2xl overflow-hidden" role="contentinfo">
      {/* Effet de brillance subtil */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-700 via-primary-900 to-primary-700 opacity-50" />
      
      {/* Effet de particules subtil */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={`glow-${i}`}
            className="absolute rounded-full bg-white/10 animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 4}px`,
              height: `${Math.random() * 10 + 4}px`,
              animationDelay: `${i * 500}ms`,
            }}
          />
        ))}
      </div>

      <PreloadCriticalResources />
      
      <div className="relative container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
          {/* Section Logo et Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start space-y-6"
            onMouseEnter={() => setHoveredSection('logo')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div className="group relative overflow-hidden rounded-2xl p-2 -m-2">
              <div className="absolute  w-full -inset-0.5 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative w-full">
                <img
                  className="h-20 w-96 object-contain transform transition-all duration-500 group-hover:scale-110"
                  src="/images/logo/logo-pbp.png"
                  alt="Logo PBP"
                  loading="eager"
                  fetchpriority="high"
                />
              </div>
            </div>
            
            <p className="text-lg text-justify text-gray-100 md:text-left leading-relaxed backdrop-blur-sm bg-white/5 p-4 rounded-xl">
              Direction Générale du Patrimoine Bâti Public - Gestion et valorisation du patrimoine immobilier de l'État
            </p>
            
            <div className="group relative overflow-hidden rounded-xl w-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative">
                <LazyImage
                  className="h-32 w-full bg-black/50 object-cover transform transition-all duration-500 group-hover:scale-105 rounded-xl"
                  src="/images/logo/SIMANDOU2024.png"
                  alt="Logo SIMANDOU 2024"
                />
              </div>
            </div>
          </motion.div>

          {/* Section Contact */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 backdrop-blur-sm bg-white/5 p-6 rounded-xl"
            onMouseEnter={() => setHoveredSection('contact')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <h3 className="text-2xl font-bold flex items-center gap-3 text-secondary">
              <Phone className="w-6 h-6" aria-hidden="true" />
              <span>Contact</span>
            </h3>
            
            <address className="not-italic space-y-4">
              {DGPBP.contactInfo.unespace_phones.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start group hover:bg-white/10 p-2 rounded-lg transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="mt-1 mr-3 text-secondary group-hover:scale-110 transition-transform duration-300"/>
                  <span className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <div className="flex flex-col gap-2">
                      <a href={`tel:${item}`} className="hover:text-secondary transition-colors">
                        {DGPBP.contactInfo.phones[index]}
                      </a>
                    </div>
                  </span>
                </motion.div>
              ))}
              {DGPBP.contactInfo.emails.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start group hover:bg-white/10 p-2 rounded-lg transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="mt-1 mr-3 text-secondary group-hover:scale-110 transition-transform duration-300"/>
                  <span className="text-gray-200 group-hover:text-white transition-colors duration-300">
                    <div className="flex flex-col gap-2">
                      <a href={`mailto:${item}`} className="hover:text-secondary transition-colors">
                        {item}
                      </a>
                    </div>
                  </span>
                </motion.div>
              ))}
            </address>
          </motion.div>

          {/* Section Liens utiles */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 space-y-4 backdrop-blur-sm bg-white/5 p-6 rounded-xl"
            onMouseEnter={() => setHoveredSection('links')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <h3 className="text-xl font-bold text-secondary flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Liens utiles
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {usefulLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-200 hover:text-white p-3 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                  whileHover={{ x: 5, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                  <span className="p-2 rounded-lg bg-white/10 text-secondary group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </span>
                  <span className="flex-1">{link.text}</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Section Copyright */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="relative border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-center"
        >
          <div className="group relative overflow-hidden rounded-2xl p-2 -m-2">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative">
              <img
                className="h-12 w-auto opacity-90 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"
                src="/images/logo/brandingGn.png"
                alt="Emblème national de la Guinée"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <p className="text-gray-200 text-xl backdrop-blur-sm bg-white/5 px-6 py-2 rounded-full"> 
            © {new Date().getFullYear()} <span className="font-medium text-white">DGPBP</span> - Tous droits réservés
          </p>
        </motion.div>
      </div>

      {/* Styles pour les animations personnalisées */}
      <style>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .bg-noise {
          background-image: 
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0);
          background-size: 20px 20px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;