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
    
    // Utiliser les valeurs fournies ou les valeurs par défaut
    const seoTitle = title || defaultTitle;
    const seoDescription = description || defaultDescription;
    const seoKeywords = keywords.length > 0 ? keywords : defaultKeywords;
    const seoImage = image || `${window.location.origin}/images/logo/pbp-logo.png`;
    
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
        "url": window.location.origin,
        "logo": `${window.location.origin}/images/logo/pbp-logo.png`,
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
        jsonLd["@type"] = "Article";
        jsonLd["headline"] = seoTitle;
        jsonLd["datePublished"] = article.published_at;
        jsonLd["dateModified"] = article.updated_at;
        jsonLd["author"] = {
            "@type": "GovernmentOrganization",
            "name": "PBP - Patrimoine Bâti Public de Guinée"
        };
        jsonLd["publisher"] = {
            "@type": "GovernmentOrganization",
            "name": "PBP - Patrimoine Bâti Public de Guinée",
            "logo": {
                "@type": "ImageObject",
                "url": `${window.location.origin}/images/logo/pbp-logo.png`
            }
        };
        
        // Ajouter les données Open Graph pour les articles
        ogData.type = 'article';
        ogData.article = {
            published_time: article.published_at,
            modified_time: article.updated_at,
            author: 'PBP - Patrimoine Bâti Public de Guinée',
            section: article.section || 'Actualités',
            tag: article.tags || ['patrimoine bâti', 'Guinée', 'service public']
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
            {article && (
                <>
                    <meta property="article:published_time" content={article.published_at} />
                    <meta property="article:modified_time" content={article.updated_at} />
                    <meta property="article:author" content="PBP - Patrimoine Bâti Public de Guinée" />
                    <meta property="article:section" content={article.section || 'Actualités'} />
                    {article.tags && article.tags.map((tag, index) => (
                        <meta key={index} property="article:tag" content={tag} />
                    ))}
                </>
            )}
            
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
