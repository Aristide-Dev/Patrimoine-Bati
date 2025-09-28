import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';

/**
 * Composant SEO pour Inertia.js
 * Gère les métadonnées dynamiques pour les pages React
 */
export default function SEO({ 
    title, 
    description, 
    keywords = [], 
    canonical = null,
    type = 'website',
    image = null,
    article = null,
    organization = null
}) {
    const { url } = usePage();
    const currentUrl = canonical || url;
    
    // Métadonnées par défaut PBP
    const defaultTitle = 'PBP - Patrimoine Bâti Public de Guinée';
    const defaultDescription = 'Le Patrimoine Bâti Public (PBP) de Guinée assure la gestion, l\'entretien et la valorisation du patrimoine immobilier de l\'État guinéen. Situé aux Ports Conteneurs de Conakry, Kaloum.';
    const defaultKeywords = ['patrimoine bâti', 'Guinée', 'service public', 'immobilier', 'État', 'Conakry', 'Kaloum', 'PBP'];
    
    // Fonction pour obtenir l'URL de base de manière sécurisée
    const getBaseUrl = () => {
        if (typeof window !== 'undefined') {
            return window.location.origin;
        }
        return 'https://pbpguinee.com'; // URL par défaut pour le SSR
    };
    
    // Fonction pour nettoyer les valeurs et éviter les Symboles
    const sanitizeValue = (value) => {
        if (value === null || value === undefined) return null;
        if (typeof value === 'symbol') return value.toString();
        if (typeof value === 'string') return value;
        if (typeof value === 'number') return value.toString();
        if (typeof value === 'boolean') return value.toString();
        if (Array.isArray(value)) return value.map(sanitizeValue);
        if (typeof value === 'object') {
            const sanitized = {};
            for (const [key, val] of Object.entries(value)) {
                sanitized[key] = sanitizeValue(val);
            }
            return sanitized;
        }
        return String(value);
    };
    
    // Utiliser les valeurs fournies ou les valeurs par défaut
    const seoTitle = sanitizeValue(title) || defaultTitle;
    const seoDescription = sanitizeValue(description) || defaultDescription;
    const seoKeywords = Array.isArray(keywords) && keywords.length > 0 ? keywords.map(sanitizeValue) : defaultKeywords;
    const seoImage = sanitizeValue(image) || `${getBaseUrl()}/images/logo/pbp-logo.png`;
    
    // Configuration Open Graph
    const ogData = {
        title: seoTitle,
        description: seoDescription,
        url: currentUrl,
        site_name: 'PBP - Patrimoine Bâti Public de Guinée',
        type: type,
        image: seoImage,
        locale: 'fr_GN'
    };
    
    // Configuration Twitter Card
    const twitterData = {
        card: 'summary_large_image',
        title: seoTitle,
        description: seoDescription,
        site: '@pbpsau',
        creator: '@pbpsau',
        image: seoImage
    };
    
    // JSON-LD pour l'organisation gouvernementale
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": organization?.type || "GovernmentOrganization",
        "name": organization?.name || "PBP - Patrimoine Bâti Public de Guinée",
        "description": seoDescription,
        "url": getBaseUrl(),
        "logo": `${getBaseUrl()}/images/logo/pbp-logo.png`,
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
            "availableLanguage": "French",
            "hoursAvailable": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "17:00"
            }
        },
        "sameAs": [
            "https://www.facebook.com/pbpsau/",
            "https://www.linkedin.com/company/patrimoinebatiguinee/"
        ],
        "parentOrganization": {
            "@type": "GovernmentOrganization",
            "name": "République de Guinée",
            "url": "https://www.gouvernement.gov.gn"
        }
    };
    
    // Ajouter les données d'article si fournies
    if (article) {
        const sanitizedArticle = sanitizeValue(article);
        
        jsonLd["@type"] = "Article";
        jsonLd["headline"] = seoTitle;
        jsonLd["datePublished"] = sanitizedArticle.published_at;
        jsonLd["dateModified"] = sanitizedArticle.updated_at;
        jsonLd["author"] = {
            "@type": "GovernmentOrganization",
            "name": "PBP - Patrimoine Bâti Public de Guinée"
        };
        jsonLd["publisher"] = {
            "@type": "GovernmentOrganization",
            "name": "PBP - Patrimoine Bâti Public de Guinée",
            "logo": {
                "@type": "ImageObject",
                "url": `${getBaseUrl()}/images/logo/pbp-logo.png`
            }
        };
        
        // Ajouter les données Open Graph pour les articles
        ogData.type = 'article';
        ogData.article = {
            published_time: sanitizedArticle.published_at,
            modified_time: sanitizedArticle.updated_at,
            author: 'PBP - Patrimoine Bâti Public de Guinée',
            section: sanitizedArticle.section || 'Actualités',
            tag: Array.isArray(sanitizedArticle.tags) ? sanitizedArticle.tags : ['patrimoine bâti', 'Guinée', 'service public']
        };
    }
    
    return (
        <Head>
            {/* Métadonnées de base */}
            <title>{seoTitle}</title>
            <meta name="description" content={seoDescription} />
            <meta name="keywords" content={seoKeywords.join(', ')} />
            {canonical && <link rel="canonical" href={canonical} />}
            
            {/* Open Graph */}
            <meta property="og:title" content={ogData.title} />
            <meta property="og:description" content={ogData.description} />
            <meta property="og:url" content={ogData.url} />
            <meta property="og:site_name" content={ogData.site_name} />
            <meta property="og:type" content={ogData.type} />
            <meta property="og:image" content={ogData.image} />
            <meta property="og:locale" content={ogData.locale} />
            
            {/* Données Open Graph pour les articles */}
            {article && (() => {
                const sanitizedArticle = sanitizeValue(article);
                return (
                    <>
                        <meta property="article:published_time" content={sanitizedArticle.published_at} />
                        <meta property="article:modified_time" content={sanitizedArticle.updated_at} />
                        <meta property="article:author" content="PBP - Patrimoine Bâti Public de Guinée" />
                        <meta property="article:section" content={sanitizedArticle.section || 'Actualités'} />
                        {sanitizedArticle.tags && Array.isArray(sanitizedArticle.tags) && sanitizedArticle.tags.map((tag, index) => (
                            <meta key={index} property="article:tag" content={sanitizeValue(tag)} />
                        ))}
                    </>
                );
            })()}
            
            {/* Twitter Card */}
            <meta name="twitter:card" content={twitterData.card} />
            <meta name="twitter:title" content={twitterData.title} />
            <meta name="twitter:description" content={twitterData.description} />
            <meta name="twitter:site" content={twitterData.site} />
            <meta name="twitter:creator" content={twitterData.creator} />
            <meta name="twitter:image" content={twitterData.image} />
            
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd, null, 2)
                }}
            />
        </Head>
    );
}

/**
 * Hook personnalisé pour les métadonnées SEO
 */
export function useSEO() {
    const { props } = usePage();
    
    return {
        title: props.seo?.title,
        description: props.seo?.description,
        keywords: props.seo?.keywords || [],
        canonical: props.seo?.canonical,
        type: props.seo?.type || 'website',
        image: props.seo?.image,
        article: props.seo?.article,
        organization: props.seo?.organization
    };
}
