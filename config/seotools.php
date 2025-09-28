<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Default Meta Tags
    |--------------------------------------------------------------------------
    |
    | Default meta tags that will be used in your pages, you can override the
    | tags in each page.
    |
    */
    'defaults' => [
        'title' => 'PBP - Patrimoine Bâti Public de Guinée',
        'titleBefore' => false,
        'description' => 'Le Patrimoine Bâti Public (PBP) de Guinée assure la gestion, l\'entretien et la valorisation du patrimoine immobilier de l\'État guinéen. Situé aux Ports Conteneurs de Conakry, Kaloum.',
        'separator' => ' - ',
        'keywords' => [
            // Mots-clés principaux (8)
            'patrimoine bâti', 'Guinée', 'service public', 'immobilier', 'État', 'Conakry', 'Kaloum', 'PBP',
            
            // Mots-clés géographiques (15)
            'Conakry', 'Kaloum', 'Guinée Conakry', 'Afrique de l\'Ouest', 'République de Guinée',
            'Capitale Guinée', 'Port de Conakry', 'Zone portuaire', 'Kaloum Conakry', 'Centre ville Conakry',
            'Guinée maritime', 'Région de Conakry', 'Préfecture de Conakry', 'Commune de Kaloum', 'Quartier Kaloum',
            
            // Mots-clés sectoriels (25)
            'patrimoine immobilier', 'gestion immobilière', 'administration publique', 'service immobilier',
            'bâtiments publics', 'infrastructures publiques', 'patrimoine national', 'biens immobiliers',
            'patrimoine architectural', 'architecture publique', 'urbanisme Conakry', 'développement urbain',
            'immobilier d\'État', 'propriété publique', 'domaine public', 'patrimoine collectif',
            'bâtiments institutionnels', 'infrastructures gouvernementales', 'patrimoine culturel', 'patrimoine historique',
            'architecture coloniale', 'architecture moderne', 'urbanisme Guinée', 'aménagement urbain', 'développement territorial',
            
            // Mots-clés fonctionnels (30)
            'entretien bâtiments', 'maintenance immobilière', 'valorisation patrimoine', 'gestion patrimoine',
            'administration immobilière', 'service public immobilier', 'patrimoine étatique', 'gestion locative',
            'maintenance préventive', 'rénovation bâtiments', 'réhabilitation patrimoine', 'restauration patrimoine',
            'conservation patrimoine', 'préservation patrimoine', 'mise en valeur', 'exploitation patrimoine',
            'gestion technique', 'gestion financière', 'gestion administrative', 'gestion opérationnelle',
            'planification maintenance', 'programmation travaux', 'suivi travaux', 'contrôle qualité',
            'audit patrimoine', 'inventaire patrimoine', 'évaluation patrimoine', 'expertise patrimoine',
            'conseil patrimoine', 'assistance technique', 'formation personnel', 'compétences techniques',
            
            // Mots-clés techniques (35)
            'immobilier public', 'bâtiments administratifs', 'infrastructures étatiques', 'patrimoine bâti public',
            'gestion locative publique', 'entretien infrastructures', 'maintenance bâtiments', 'rénovation patrimoine',
            'valorisation immobilière', 'administration patrimoine', 'service patrimoine', 'bâtiments gouvernementaux',
            'infrastructures publiques', 'équipements publics', 'installations publiques', 'ouvrages publics',
            'constructions publiques', 'aménagements publics', 'espaces publics', 'voirie publique',
            'réseaux publics', 'utilités publiques', 'services publics', 'facilities management',
            'gestion technique bâtiment', 'gestion énergétique', 'efficacité énergétique', 'performance énergétique',
            'sécurité bâtiments', 'sécurité incendie', 'accessibilité bâtiments', 'normes construction',
            'réglementation bâtiment', 'certification bâtiment', 'qualité bâtiment', 'durabilité bâtiment',
            
            // Mots-clés sectoriels spécifiques (40)
            'ministères Guinée', 'administrations publiques', 'bâtiments gouvernementaux', 'infrastructures publiques',
            'patrimoine architectural', 'architecture publique', 'urbanisme Conakry', 'développement urbain',
            'ministère économie', 'ministère finances', 'ministère éducation', 'ministère santé', 'ministère justice',
            'ministère défense', 'ministère intérieur', 'ministère affaires étrangères', 'ministère agriculture',
            'ministère mines', 'ministère énergie', 'ministère transports', 'ministère travaux publics',
            'ministère environnement', 'ministère culture', 'ministère sport', 'ministère jeunesse',
            'ministère emploi', 'ministère commerce', 'ministère industrie', 'ministère tourisme',
            'ministère communication', 'ministère technologie', 'ministère innovation', 'ministère développement',
            'ministère planification', 'ministère statistiques', 'ministère budget', 'ministère contrôle',
            'ministère audit', 'ministère inspection', 'ministère régulation', 'ministère supervision',
            
            // Mots-clés de services (35)
            'location bâtiments', 'gestion locative publique', 'entretien infrastructures', 'maintenance bâtiments',
            'rénovation patrimoine', 'valorisation immobilière', 'administration patrimoine', 'service patrimoine',
            'location bureaux', 'location salles', 'location espaces', 'location terrains', 'location parkings',
            'gestion locative', 'gestion locataires', 'gestion contrats', 'gestion loyers', 'gestion charges',
            'gestion réparations', 'gestion améliorations', 'gestion travaux', 'gestion interventions',
            'gestion urgences', 'gestion plannings', 'gestion équipes', 'gestion fournisseurs',
            'gestion prestataires', 'gestion sous-traitants', 'gestion budgets', 'gestion comptabilité',
            'gestion facturation', 'gestion recouvrement', 'gestion contentieux', 'gestion juridique',
            'gestion assurance', 'gestion sinistres', 'gestion prévention', 'gestion sécurité',
            
            // Mots-clés institutionnels (25)
            'PBP Guinée', 'Patrimoine Bâti Public', 'service public Guinée', 'administration Guinée',
            'gouvernement Guinée', 'État guinéen', 'institutions publiques', 'services publics',
            'établissement public', 'organisme public', 'agence publique', 'office public',
            'société publique', 'entreprise publique', 'structure publique', 'entité publique',
            'autorité publique', 'administration centrale', 'administration déconcentrée', 'administration territoriale',
            'collectivité publique', 'territoire public', 'domaine public', 'propriété publique',
            'patrimoine public', 'biens publics', 'actifs publics', 'investissements publics',
            
            // Mots-clés économiques et financiers (20)
            'investissement public', 'financement public', 'budget public', 'comptabilité publique',
            'gestion financière', 'contrôle financier', 'audit public', 'évaluation économique',
            'rentabilité patrimoine', 'performance patrimoine', 'optimisation patrimoine', 'maximisation valeur',
            'coût maintenance', 'coût exploitation', 'coût possession', 'coût cycle vie',
            'économie énergie', 'économie maintenance', 'économie exploitation', 'économie gestion',
            
            // Mots-clés technologiques et innovation (15)
            'numérisation patrimoine', 'digitalisation patrimoine', 'informatisation gestion', 'système information',
            'base données patrimoine', 'géolocalisation patrimoine', 'cartographie patrimoine', 'inventaire numérique',
            'gestion assistée ordinateur', 'logiciel gestion patrimoine', 'application mobile', 'portail web',
            'télégestion', 'télésurveillance', 'télémaintenance', 'télédiagnostic',
            
            // Mots-clés environnementaux et durables (15)
            'développement durable', 'construction durable', 'bâtiment durable', 'patrimoine durable',
            'efficacité énergétique', 'performance énergétique', 'économie énergie', 'énergies renouvelables',
            'isolation thermique', 'climatisation', 'chauffage', 'ventilation', 'éclairage LED',
            'matériaux écologiques', 'construction écologique', 'rénovation écologique',
            
            // Mots-clés de formation et compétences (10)
            'formation personnel', 'compétences techniques', 'expertise patrimoine', 'savoir-faire',
            'qualification professionnelle', 'certification professionnelle', 'apprentissage', 'perfectionnement',
            'recyclage professionnel', 'mise à niveau compétences',
            
            // Mots-clés de communication et relations (10)
            'communication institutionnelle', 'relations publiques', 'information publique', 'transparence',
            'communication interne', 'communication externe', 'partenariat', 'collaboration',
            'coopération', 'synergie', 'réseau professionnel', 'partage expérience',
            
            // Mots-clés de qualité et certification (10)
            'qualité service', 'certification qualité', 'normes qualité', 'processus qualité',
            'amélioration continue', 'excellence opérationnelle', 'satisfaction client', 'performance service',
            'indicateurs performance', 'tableau bord', 'reporting', 'suivi performance',
            
            // Mots-clés de sécurité et conformité (10)
            'sécurité bâtiments', 'sécurité incendie', 'sécurité personnes', 'prévention risques',
            'conformité réglementaire', 'normes sécurité', 'audit sécurité', 'inspection sécurité',
            'formation sécurité', 'consignes sécurité', 'équipements sécurité', 'système sécurité',
            
            // Mots-clés de maintenance et travaux (15)
            'maintenance préventive', 'maintenance corrective', 'maintenance prédictive', 'maintenance conditionnelle',
            'planification maintenance', 'programmation travaux', 'suivi travaux', 'contrôle qualité travaux',
            'gestion travaux', 'coordination travaux', 'supervision travaux', 'réception travaux',
            'garantie travaux', 'maintenance après travaux', 'exploitation après travaux',
            
            // Mots-clés de location et commercial (10)
            'commercialisation espaces', 'marketing immobilier', 'promotion patrimoine', 'valorisation commerciale',
            'stratégie commerciale', 'politique tarifaire', 'négociation commerciale', 'contrats location',
            'gestion clientèle', 'relation client', 'satisfaction locataire', 'fidélisation client',
            
            // Mots-clés de développement et expansion (10)
            'développement patrimoine', 'expansion patrimoine', 'croissance patrimoine', 'extension patrimoine',
            'modernisation patrimoine', 'amélioration patrimoine', 'optimisation patrimoine', 'transformation patrimoine',
            'évolution patrimoine', 'adaptation patrimoine', 'innovation patrimoine', 'renouvellement patrimoine'
        ],
        'other' => [
            'viewport' => 'width=device-width, initial-scale=1.0, shrink-to-fit=no',
            'robots' => 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
            'author' => 'PBP - Patrimoine Bâti Public de Guinée',
            'language' => 'fr',
            'geo.region' => 'GN-C',
            'geo.placename' => 'Conakry, Kaloum',
            'geo.position' => '9.509167;-13.712222',
            'ICBM' => '9.509167, -13.712222',
            'format-detection' => 'telephone=no',
            'application-name' => 'PBP',
            'mobile-web-app-capable' => 'yes',
            'apple-mobile-web-app-capable' => 'yes',
            'apple-mobile-web-app-status-bar-style' => 'default',
            'apple-mobile-web-app-title' => 'PBP',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Webmaster Tools
    |--------------------------------------------------------------------------
    |
    | Webmaster tools verification.
    |
    */
    'webmaster_tools' => [
        'google' => env('GOOGLE_SITE_VERIFICATION', ''),
        'bing' => env('BING_SITE_VERIFICATION', ''),
        'alexa' => env('ALEXA_SITE_VERIFICATION', ''),
        'pinterest' => env('PINTEREST_SITE_VERIFICATION', ''),
        'yandex' => env('YANDEX_SITE_VERIFICATION', ''),
        'norton' => env('NORTON_SITE_VERIFICATION', ''),
    ],

    /*
    |--------------------------------------------------------------------------
    | Open Graph
    |--------------------------------------------------------------------------
    |
    | The Open Graph protocol enables any web page to become a rich object in a social graph.
    |
    */
    'open_graph' => [
        'enabled' => true,
        'prefix' => 'og:',
        'type' => 'website',
        'title' => '',
        'description' => '',
        'image' => '',
        'url' => '',
        'site_name' => 'PBP - Patrimoine Bâti Public de Guinée',
        'locale' => 'fr_GN',
    ],

    /*
    |--------------------------------------------------------------------------
    | Twitter Card
    |--------------------------------------------------------------------------
    |
    | With Twitter Cards, you can attach rich photos, videos and media experience to Tweets
    | that drive traffic to your website.
    |
    */
    'twitter' => [
        'enabled' => true,
        'card' => 'summary_large_image',
        'site' => '@pbpsau',
        'creator' => '@pbpsau',
        'title' => '',
        'description' => '',
        'image' => '',
    ],

    /*
    |--------------------------------------------------------------------------
    | JSON-LD
    |--------------------------------------------------------------------------
    |
    | Structured data for search engines.
    |
    */
    'json_ld' => [
        'enabled' => true,
        'type' => 'GovernmentOrganization',
        'name' => 'PBP - Patrimoine Bâti Public de Guinée',
        'description' => 'Le Patrimoine Bâti Public (PBP) de Guinée assure la gestion, l\'entretien et la valorisation du patrimoine immobilier de l\'État guinéen.',
        'url' => '',
        'logo' => '',
        'sameAs' => [
            'https://www.facebook.com/pbpsau/',
            'https://www.linkedin.com/company/patrimoinebatiguinee/'
        ],
    ],
];
