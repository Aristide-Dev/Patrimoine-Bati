import React, { useEffect, useState, useCallback } from 'react';
import { Head, usePage } from '@inertiajs/react';
import PropTypes from 'prop-types';
import { ArrowUp, X, Bell, Menu, Sparkles, CheckCircle, AlertCircle, AlertTriangle, Info } from 'lucide-react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import { Button } from '@/Components/ui/button';
import { DGPBP } from '@/utils/dgpbp';
import { motion, AnimatePresence } from 'framer-motion';

export default function AppLayout({ 
  children,
  title = "PBP - Patrimoine Bâti Public de Guinée",
  description = "Le Patrimoine Bâti Public (PBP- SAU) de Guinée assure la gestion, l'entretien et la valorisation du patrimoine immobilier de l'État guinéen. Services publics, gestion immobilière, valorisation du patrimoine.",
  keywords = "PBP- SAU, patrimoine bâti, Guinée, immobilier public, gestion immobilière, État guinéen, service public, administration, valorisation patrimoine, bâtiments publics, infrastructure publique, Conakry",
  ogImage = "/images/logo/pbp_sau_logo_transparent_blanc.png",
  canonicalUrl,
  ogType = "website",
  twitterCreator = "@pbp",
  datePublished,
  dateModified,
  articleSection,
  alternateLocales = [],
  itemProps = {},
  seo = {}
}) {
  const { flash = {}, url } = usePage().props;
  const [state, setState] = useState({
    showFlash: !!flash?.message,
    showBackToTop: false,
    isMobileMenuOpen: false,
    notifications: [],
    isScrolled: false
  });

  // Sécurisation de l'URL pour éviter les erreurs
  const safeUrl = url || (typeof window !== 'undefined' ? window.location.origin : 'https://dgpbp.gov.gn');
  const currentUrl = safeUrl;
  
  // Merge des props SEO avec les valeurs par défaut
  const seoConfig = {
    title,
    description,
    keywords,
    ogImage,
    canonicalUrl,
    ogType,
    twitterCreator,
    datePublished,
    dateModified,
    articleSection,
    alternateLocales,
    itemProps,
    ...seo
  };
  
  // Simplification des URLs pour éviter les références à window
  const absoluteImageUrl = seoConfig.ogImage?.startsWith('http') ? seoConfig.ogImage : seoConfig.ogImage;

  const updateState = useCallback((updates) => {
    setState(prev => ({ ...prev, ...updates }));
  }, []);

  // Gestion optimisée du scroll
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    updateState({
      showBackToTop: scrollTop > 400,
      isScrolled: scrollTop > 50
    });
  }, [updateState]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (flash?.message) {
      updateState({ showFlash: true });
      const timer = setTimeout(() => updateState({ showFlash: false }), 5000);
      return () => clearTimeout(timer);
    }
  }, [flash?.message, updateState]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        {/* Balises meta de base */}
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta name="keywords" content={seoConfig.keywords} />
        <meta name="author" content="PBP" />
        <meta charSet="UTF-8" />
        
        {/* Directives pour les robots et les navigateurs */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        
        {/* Métadonnées géographiques et linguistiques */}
        <meta name="language" content="fr" />
        <meta name="geo.region" content="GN" />
        <meta name="geo.placename" content="Conakry" />
        <meta name="geo.position" content="9.509167;-13.712222" />
        <meta name="ICBM" content="9.509167, -13.712222" />
        
        {/* Métadonnées pour applications mobiles */}
        <meta name="application-name" content="PBP" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PBP" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#1a365d" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1e293b" media="(prefers-color-scheme: dark)" />
        <meta name="color-scheme" content="light dark" />
        
        {/* Sécurité */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* Open Graph optimisé */}
        <meta property="og:type" content={seoConfig.ogType} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={seoConfig.title} />
        <meta property="og:description" content={seoConfig.description} />
        <meta property="og:image" content={absoluteImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Logo PBP - Direction Générale du Patrimoine Bâti Public" />
        <meta property="og:site_name" content="PBP" />
        <meta property="og:locale" content="fr_GN" />
        
        {/* Article metadata pour les pages de contenu */}
        {seoConfig.ogType === 'article' && (
          <>
            <meta property="article:published_time" content={seoConfig.datePublished} />
            <meta property="article:modified_time" content={seoConfig.dateModified} />
            <meta property="article:author" content="PBP" />
            <meta property="article:publisher" content="PBP" />
            {seoConfig.articleSection && <meta property="article:section" content={seoConfig.articleSection} />}
            <meta property="article:tag" content="patrimoine bâti, Guinée, service public" />
          </>
        )}
        
        {/* Twitter Card optimisé */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content={seoConfig.title} />
        <meta name="twitter:description" content={seoConfig.description} />
        <meta name="twitter:image" content={absoluteImageUrl} />
        <meta name="twitter:image:alt" content="Logo PBP - Direction Générale du Patrimoine Bâti Public" />
        <meta name="twitter:creator" content={seoConfig.twitterCreator} />
        <meta name="twitter:site" content="@pbp" />
        
        {/* Canonical et langues alternatives */}
        <link rel="canonical" href={seoConfig.canonicalUrl || currentUrl} />
        {seoConfig.alternateLocales.map(({locale, url: localeUrl}) => (
          <link key={locale} rel="alternate" hrefLang={locale} href={localeUrl} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={safeUrl} />
        
        {/* PWA Manifest et icônes */}
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/logo/pbp_sau_logo_transparent_blanc.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/logo/pbp_sau_logo_transparent_blanc.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/images/logo/pbp_sau_logo_transparent_blanc.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/logo/pbp_sau_logo_transparent_blanc.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/logo/pbp_sau_logo_transparent_blanc.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/images/logo/pbp_sau_logo_transparent_blanc.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/images/logo/pbp_sau_logo_transparent_blanc.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/images/logo/pbp_sau_logo_transparent_blanc.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/images/logo/pbp_sau_logo_transparent_blanc.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/images/logo/pbp_sau_logo_transparent_blanc.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/images/logo/pbp_sau_logo_transparent_blanc.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/images/logo/pbp_sau_logo_transparent_blanc.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/images/logo/pbp_sau_logo_transparent_blanc.png" />
        
        {/* Métadonnées Safari */}
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="mask-icon" href="/images/logo/pbp_sau_logo_transparent_blanc.png" color="#1a365d" />
        
        {/* Métadonnées Windows */}
        <meta name="msapplication-TileImage" content="/images/logo/pbp_sau_logo_transparent_blanc.png" />
        <meta name="msapplication-TileColor" content="#1a365d" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Préconnexion aux origines externes */}
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.bunny.net" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Préchargement conditionnel uniquement pour la page d'accueil */}
        {url && typeof url.current === 'function' && url.current() === route('accueil') && (
          <link rel="preload" href="/images/logo/pbp_sau_logo_transparent_blanc.png" as="image" fetchpriority="high" />
        )}
        
        {/* Schema.org JSON-LD amélioré */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GovernmentOrganization",
            "name": "PBP - Patrimoine Bâti Public",
            "alternateName": ["PBP - SAU", "Direction Générale du Patrimoine Bâti Public"],
            "url": safeUrl,
            "logo": {
              "@type": "ImageObject",
              "url": `${safeUrl}/images/logo/pbp_sau_logo_transparent_blanc.png`,
              "width": 400,
              "height": 400,
              "caption": "Logo PBP - SAU"
            },
            "description": seoConfig.description,
            "image": absoluteImageUrl,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": DGPBP.contactInfo.address || "Conakry",
              "addressLocality": "Conakry",
              "addressRegion": "Conakry",
              "addressCountry": "GN",
              "postalCode": ""
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": DGPBP.contactInfo.phones?.join(", ") || "",
              "contactType": "customer service",
              "email": DGPBP.contactInfo.emails?.join(", ") || "",
              "availableLanguage": ["French"],
              "hoursAvailable": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": DGPBP.contactInfo.hours?.weekdays || ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": DGPBP.contactInfo.hours?.weekhours?.split(" - ")[0] || "08:00",
                "closes": DGPBP.contactInfo.hours?.weekhours?.split(" - ")[1] || "16:00"
              }
            },
            "parentOrganization": {
              "@type": "GovernmentOrganization",
              "name": "République de Guinée",
              "url": "https://www.gouvernement.gov.gn"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Guinée",
              "iso": "GN"
            },
            "serviceType": [
              "Gestion du patrimoine immobilier public",
              "Entretien des bâtiments publics", 
              "Valorisation immobilière",
              "Services administratifs publics",
              "Maintenance des infrastructures publiques"
            ],
            "foundingDate": "1958",
            "keywords": seoConfig.keywords,
            "sameAs": [
              // Ajouter les liens des réseaux sociaux quand disponibles
            ],
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": currentUrl
            }
          })}
        </script>
        
        {/* Schema.org pour la page web */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": seoConfig.title,
            "description": seoConfig.description,
            "url": currentUrl,
            "image": absoluteImageUrl,
            "publisher": {
              "@type": "GovernmentOrganization",
              "name": "PBP - SAU",
              "logo": {
                "@type": "ImageObject",
                "url": `${safeUrl}/images/logo/pbp_sau_logo_transparent_blanc.png`
              }
            },
            "datePublished": seoConfig.datePublished,
            "dateModified": seoConfig.dateModified,
            "inLanguage": "fr-GN",
            "isPartOf": {
              "@type": "WebSite",
              "name": "PBP - SAU",
              "url": safeUrl
            }
          })}
        </script>

        {/* Schema.org pour le site web */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "PBP - Patrimoine Bâti Public",
            "url": safeUrl,
            "description": seoConfig.description,
            "publisher": {
              "@type": "GovernmentOrganization",
              "name": "PBP - SAU"
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${safeUrl}/search?q={search_term_string}`
              },
              "query-input": "required name=search_term_string"
            },
            "inLanguage": "fr-GN"
          })}
        </script>
      </Head>

      <div className="min-h-screen flex flex-col relative overflow-x-hidden" {...seoConfig.itemProps}>
        {/* Arrière-plan animé avec dégradé amélioré */}
        {/* <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 -z-10" /> */}
        
        {/* Particules flottantes décoratives avec performance optimisée */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          {[
            { top: '25%', left: '25%', size: 'w-2 h-2', color: 'bg-blue-200/40', delay: '0s', duration: '3s' },
            { top: '75%', right: '25%', size: 'w-1 h-1', color: 'bg-purple-200/40', delay: '1s', duration: '4s' },
            { top: '50%', left: '75%', size: 'w-1.5 h-1.5', color: 'bg-pink-200/40', delay: '2s', duration: '3.5s' },
            { top: '33%', right: '33%', size: 'w-1 h-1', color: 'bg-indigo-200/40', delay: '0.5s', duration: '2.5s' }
          ].map((particle, index) => (
            <motion.div 
              key={index}
              className={`absolute ${particle.size} ${particle.color} rounded-full`}
              style={{ 
                top: particle.top, 
                left: particle.left, 
                right: particle.right,
                animationDelay: particle.delay,
                animationDuration: particle.duration
              }}
              animate={{ 
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: parseFloat(particle.duration),
                repeat: Infinity,
                delay: parseFloat(particle.delay)
              }}
            />
          ))}
        </div>

        {/* Header avec effet glassmorphism */}
        <motion.div 
          className="relative z-40"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
        </motion.div>

        {/* Flash Messages Améliorés avec animations */}
        <AnimatePresence>
          {state.showFlash && flash?.message && (
            <motion.div 
              className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
              initial={{ opacity: 0, y: -50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className={`
                max-w-md mx-auto px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-md border border-white/20
                ${flash.type === 'success' 
                  ? 'bg-gradient-to-r from-emerald-500/90 to-green-500/90' 
                  : flash.type === 'error'
                  ? 'bg-gradient-to-r from-rose-500/90 to-red-500/90'
                  : flash.type === 'warning'
                  ? 'bg-gradient-to-r from-amber-500/90 to-orange-500/90'
                  : flash.type === 'info'
                  ? 'bg-gradient-to-r from-cyan-500/90 to-blue-500/90'
                  : 'bg-gradient-to-r from-blue-500/90 to-indigo-500/90'
                } text-white relative overflow-hidden
              `}>
                {/* Effet de brillance */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                />
                
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center space-x-3">
                    {flash.type === 'success' && <CheckCircle className="w-5 h-5 animate-pulse" />}
                    {flash.type === 'error' && <AlertCircle className="w-5 h-5 animate-pulse" />}
                    {flash.type === 'warning' && <AlertTriangle className="w-5 h-5 animate-pulse" />}
                    {flash.type === 'info' && <Info className="w-5 h-5 animate-pulse" />}
                    {!flash.type && <Sparkles className="w-5 h-5 animate-pulse" />}
                    <div>
                      <p className="font-medium text-sm">{flash.message}</p>
                      {flash.type && (
                        <p className="text-xs opacity-80 capitalize">{flash.type}</p>
                      )}
                    </div>
                  </div>
                  <Button
                    onClick={() => updateState({ showFlash: false })}
                    className="p-2 hover:bg-white/20 rounded-full transition-all duration-200 hover:scale-110 ml-4 flex-shrink-0"
                    variant="ghost"
                    size="sm"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contenu principal avec conteneur amélioré */}
        <main 
          className="flex-grow mt-32 sm:pt-24 md:pt-16 z-10 relative"
          role="main"
          aria-label="Contenu principal"
        >
          <div className="relative">
            {/* Effet de dégradé subtil au-dessus du contenu */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/60 via-transparent to-transparent pointer-events-none" />
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {children}
            </motion.div>
          </div>
        </main>

        {/* Bouton retour en haut stylisé et optimisé */}
        <AnimatePresence>
          {state.showBackToTop && (
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed right-6 bottom-6 md:right-8 md:bottom-8 z-50"
            >
              <Button
                onClick={scrollToTop}
                className="
                  p-4 bg-gradient-to-r from-blue-600 to-primary-600 
                  text-white rounded-2xl shadow-2xl 
                  transition-all duration-300 ease-out
                  hover:shadow-blue-500/25 hover:scale-110
                  backdrop-blur-sm border border-white/10
                  group overflow-hidden w-12 h-12
                "
                aria-label="Retour en haut de la page"
              >
                {/* Effet de hover brillant */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.7 }}
                />
                
                <ArrowUp className="w-6 h-6 relative z-10 transition-transform group-hover:-translate-y-1" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer avec séparateur stylisé */}
        <div className="relative mt-20">
          {/* Séparateur décoratif */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8" />
          
          {/* Points décoratifs animés */}
          <div className="flex justify-center space-x-2 mb-8">
            {[0, 0.5, 1].map((delay, index) => (
              <motion.div 
                key={index}
                className="w-1 h-1 bg-gray-300 rounded-full"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, delay, repeat: Infinity }}
              />
            ))}
          </div>
          
          <Footer />
        </div>
      </div>
    </>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  ogImage: PropTypes.string,
  canonicalUrl: PropTypes.string,
  ogType: PropTypes.string,
  twitterCreator: PropTypes.string,
  datePublished: PropTypes.string,
  dateModified: PropTypes.string,
  articleSection: PropTypes.string,
  alternateLocales: PropTypes.arrayOf(
    PropTypes.shape({
      locale: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ),
  itemProps: PropTypes.object,
  seo: PropTypes.object
};