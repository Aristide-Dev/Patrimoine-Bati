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
        'keywords' => ['patrimoine bâti', 'Guinée', 'service public', 'immobilier', 'État', 'Conakry', 'Kaloum', 'PBP'],
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
