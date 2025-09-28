import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';

/**
 * Composant SEO simplifié pour éviter les problèmes avec les Symboles
 * Version de fallback en cas de problème avec le composant SEO principal
 */
export default function SimpleSEO({ 
    title, 
    description, 
    keywords = [], 
    canonical = null
}) {
    const { url } = usePage();
    const currentUrl = canonical || url;
    
    // Métadonnées par défaut PBP
    const defaultTitle = 'PBP - Patrimoine Bâti Public de Guinée';
    const defaultDescription = 'Le Patrimoine Bâti Public (PBP) de Guinée assure la gestion, l\'entretien et la valorisation du patrimoine immobilier de l\'État guinéen. Situé aux Ports Conteneurs de Conakry, Kaloum.';
    const defaultKeywords = ['patrimoine bâti', 'Guinée', 'service public', 'immobilier', 'État', 'Conakry', 'Kaloum', 'PBP'];
    
    // Utiliser les valeurs fournies ou les valeurs par défaut
    const seoTitle = title || defaultTitle;
    const seoDescription = description || defaultDescription;
    const seoKeywords = Array.isArray(keywords) && keywords.length > 0 ? keywords : defaultKeywords;
    
    // Fonction pour obtenir l'URL de base de manière sécurisée
    const getBaseUrl = () => {
        if (typeof window !== 'undefined') {
            return window.location.origin;
        }
        return 'https://pbpguinee.com'; // URL par défaut pour le SSR
    };
    
    const seoImage = `${getBaseUrl()}/images/logo/pbp-logo.png`;
    
    return (
        <Head>
            {/* Métadonnées de base */}
            <title>{seoTitle}</title>
            <meta name="description" content={seoDescription} />
            <meta name="keywords" content={seoKeywords.join(', ')} />
            {canonical && <link rel="canonical" href={canonical} />}
            
            {/* Open Graph */}
            <meta property="og:title" content={seoTitle} />
            <meta property="og:description" content={seoDescription} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:site_name" content="PBP - Patrimoine Bâti Public de Guinée" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={seoImage} />
            <meta property="og:locale" content="fr_GN" />
            
            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seoTitle} />
            <meta name="twitter:description" content={seoDescription} />
            <meta name="twitter:site" content="@pbpsau" />
            <meta name="twitter:creator" content="@pbpsau" />
            <meta name="twitter:image" content={seoImage} />
            
            {/* JSON-LD simple */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "GovernmentOrganization",
                        "name": "PBP - Patrimoine Bâti Public de Guinée",
                        "description": seoDescription,
                        "url": getBaseUrl(),
                        "logo": seoImage,
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "PORTS CONTENEURS DE CONAKRY",
                            "addressLocality": "Kaloum",
                            "addressRegion": "Conakry",
                            "addressCountry": "GN"
                        },
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+224 655 358 284",
                            "email": "info@pbpguinee.com",
                            "contactType": "customer service",
                            "areaServed": "GN",
                            "availableLanguage": "French"
                        }
                    }, null, 2)
                }}
            />
        </Head>
    );
}
