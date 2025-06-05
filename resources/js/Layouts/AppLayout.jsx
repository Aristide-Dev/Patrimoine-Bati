import React, { useEffect, useState } from 'react';
import { Head, usePage } from '@inertiajs/react';
import PropTypes from 'prop-types';
import { ArrowUp, X, Bell, Menu, Sparkles } from 'lucide-react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import { Button } from '@/Components/ui/button';
import { DGPBP } from '@/utils/dgpbp';

export default function AppLayout({ 
  children,
  title = "DGPBP - Direction Générale du Patrimoine Bâti Public",
  description = "La Direction Générale du Patrimoine Bâti Public (DGPBP) est chargée de la gestion, de l'entretien et de la valorisation du patrimoine immobilier de l'État guinéen.",
  keywords = "DGPBP, patrimoine bâti, Guinée, immobilier public, gestion immobilière, État guinéen",
  ogImage = "/images/logo/logo-pbp.png",
  canonicalUrl,
  ogType = "website",
  twitterCreator = "@dgpbp",
  datePublished,
  dateModified,
  articleSection,
  alternateLocales = [],
  itemProps = {}
}) {
  const { flash = {}, url } = usePage().props;
  const [state, setState] = useState({
    showFlash: !!flash?.message,
    showBackToTop: false,
    isMobileMenuOpen: false,
    notifications: [],
    isScrolled: false
  });

  const baseUrl = window.location.origin;
  const currentUrl = `${baseUrl}${url}`;
  const absoluteImageUrl = ogImage?.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;
  const publishDate = datePublished ?? new Date().toISOString();
  const modifyDate = dateModified ?? new Date().toISOString();

  const updateState = (updates) => {
    setState(prev => ({ ...prev, ...updates }));
  };

  useEffect(() => {
    const handleScroll = () => {
      updateState({
        showBackToTop: window.scrollY > 400,
        isScrolled: window.scrollY > 0
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (flash?.message) {
      updateState({ showFlash: true });
      const timer = setTimeout(() => updateState({ showFlash: false }), 5000);
      return () => clearTimeout(timer);
    }
  }, [flash?.message]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        {/* Balises meta de base */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="DGPBP" />
        <meta charSet="UTF-8" />
        
        {/* Directives pour les robots et les navigateurs */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        
        {/* Métadonnées géographiques et linguistiques */}
        <meta name="language" content="fr" />
        <meta name="geo.region" content="GN" />
        <meta name="geo.placename" content="Conakry" />
        
        {/* Métadonnées pour applications mobiles */}
        <meta name="application-name" content="DGPBP" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="DGPBP" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#1a365d" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1e293b" media="(prefers-color-scheme: dark)" />
        
        {/* Open Graph */}
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={absoluteImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Logo DGPBP" />
        <meta property="og:site_name" content="DGPBP" />
        <meta property="og:locale" content="fr_GN" />
        
        {/* Article metadata */}
        {ogType === 'article' && (
          <>
            <meta property="article:published_time" content={publishDate} />
            <meta property="article:modified_time" content={modifyDate} />
            {articleSection && <meta property="article:section" content={articleSection} />}
          </>
        )}
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={absoluteImageUrl} />
        <meta name="twitter:creator" content={twitterCreator} />
        <meta name="twitter:site" content="@dgpbp" />
        
        {/* Canonical et langues alternatives */}
        <link rel="canonical" href={canonicalUrl || currentUrl} />
        {alternateLocales.map(({locale, url}) => (
          <link key={locale} rel="alternate" hrefLang={locale} href={url} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={baseUrl} />
        
        {/* Préconnexion aux origines externes */}
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.bunny.net" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GovernmentOrganization",
            "name": "DGPBP",
            "url": baseUrl,
            "logo": `${baseUrl}/images/logo/logo-pbp.png`,
            "description": description,
            "image": absoluteImageUrl,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": DGPBP.contactInfo.address,
              "addressLocality": "Conakry",
              "addressCountry": "GN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": DGPBP.contactInfo.phones.join(", "),
              "contactType": "customer service",
              "email": DGPBP.contactInfo.emails.join(", "),
              "availableLanguage": ["French"],
              "hoursAvailable": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": DGPBP.contactInfo.hours.weekdays,
                "opens": DGPBP.contactInfo.hours.weekhours.split(" - ")[0],
                "closes": DGPBP.contactInfo.hours.weekhours.split(" - ")[1]
              }
            }
          })}
        </script>
      </Head>

      <div className="min-h-screen flex flex-col relative overflow-x-hidden">
        {/* Arrière-plan animé avec dégradé */}
        <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 -z-10" />
        
        {/* Particules flottantes décoratives */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-200/40 rounded-full animate-pulse" 
               style={{ animationDelay: '0s', animationDuration: '3s' }} />
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-200/40 rounded-full animate-pulse" 
               style={{ animationDelay: '1s', animationDuration: '4s' }} />
          <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-pink-200/40 rounded-full animate-pulse" 
               style={{ animationDelay: '2s', animationDuration: '3.5s' }} />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-indigo-200/40 rounded-full animate-pulse" 
               style={{ animationDelay: '0.5s', animationDuration: '2.5s' }} />
        </div>

        {/* Header avec effet glassmorphism */}
        <div className="relative z-40">
          <Header />
        </div>

        {/* Flash Messages Améliorés */}
        {state.showFlash && flash?.message && (
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-slideDown z-50">
            <div className={`
              max-w-md mx-auto px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-md border border-white/20
              ${flash.type === 'success' 
                ? 'bg-gradient-to-r from-emerald-500/90 to-green-500/90' 
                : 'bg-gradient-to-r from-rose-500/90 to-red-500/90'
              } text-white relative overflow-hidden
            `}>
              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] animate-[shimmer_2s_ease-in-out_infinite]" />
              
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                  <p className="font-medium">{flash.message}</p>
                </div>
                <Button
                  onClick={() => updateState({ showFlash: false })}
                  className="p-2 hover:bg-white/20 rounded-full transition-all duration-200 hover:scale-110"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Contenu principal avec conteneur amélioré */}
        <main className="flex-grow mt-32 sm:pt-24 md:pt-16 z-10 relative">
          <div className="relative">
            {/* Effet de dégradé subtil au-dessus du contenu */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/60 via-transparent to-transparent pointer-events-none" />
            
            {children}
          </div>
        </main>

        {/* Bouton retour en haut stylisé */}
        <Button
          onClick={scrollToTop}
          className={`
            fixed right-6 bottom-6 md:right-8 md:bottom-8 
            p-4 bg-gradient-to-r from-blue-600 to-primary-600 
            text-white rounded-2xl shadow-2xl 
            transition-all duration-500 ease-out
            hover:shadow-blue-500/25 hover:scale-110
            backdrop-blur-sm border border-white/10
            group overflow-hidden z-50 w-12 h-12
            ${state.showBackToTop 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-10 scale-95 pointer-events-none'
            }
          `}
        >
          {/* Effet de hover brillant */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          
          <ArrowUp className="w-6 h-6 relative z-10 transition-transform group-hover:-translate-y-1" />
        </Button>

        {/* Footer avec séparateur stylisé */}
        <div className="relative mt-20">
          {/* Séparateur décoratif */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8" />
          
          {/* Points décoratifs */}
          <div className="flex justify-center space-x-2 mb-8">
            <div className="w-1 h-1 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
            <div className="w-1 h-1 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="w-1 h-1 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          
          <Footer />
        </div>

        <style>{`
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateX(-50%) translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(-50%) translateY(0);
            }
          }
          
          @keyframes shimmer {
            0% { transform: translateX(-100%) skewX(-12deg); }
            100% { transform: translateX(200%) skewX(-12deg); }
          }
          
          .animate-slideDown {
            animation: slideDown 0.4s ease-out;
          }
        `}</style>
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
  itemProps: PropTypes.object
};