<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="description" content="{{ config('app.description', 'La Direction Générale du Patrimoine Bâti Public (DGPBP) de Guinée assure la gestion, l\'entretien et la valorisation du patrimoine immobilier de l\'État guinéen.') }}">
        <meta name="author" content="DGPBP">
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
        <meta name="format-detection" content="telephone=no">
        <meta name="theme-color" content="#1a365d" media="(prefers-color-scheme: light)">
        <meta name="theme-color" content="#1e293b" media="(prefers-color-scheme: dark)">
        <meta name="color-scheme" content="light dark">
        <meta name="application-name" content="{{ config('app.name', 'DGPBP') }}">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="default">
        <meta name="apple-mobile-web-app-title" content="{{ config('app.name', 'DGPBP') }}">

        {{-- Métadonnées géographiques et linguistiques --}}
        <meta name="language" content="fr">
        <meta name="geo.region" content="GN">
        <meta name="geo.placename" content="Conakry">

        {{-- Sécurité --}}
        <meta http-equiv="X-Content-Type-Options" content="nosniff">
        <meta http-equiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()">
        <meta name="referrer" content="strict-origin-when-cross-origin">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        {{-- Script de détection du mode sombre --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Style de base --}}
        <style>
            html {
                background-color: oklch(1 0 0);
                scroll-behavior: smooth;
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <title inertia>{{ config('app.name', 'DGPBP') }}</title>

        {{-- Favicons optimisés --}}
        <link rel="icon" href="/PBP.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180">
        <link rel="manifest" href="/site.webmanifest" crossorigin="use-credentials">
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1a365d">
        <meta name="msapplication-TileColor" content="#1a365d">
        <meta name="msapplication-TileImage" content="/mstile-144x144.png">
        <meta name="msapplication-config" content="/browserconfig.xml">

        {{-- Préconnexion et préchargement optimisés --}}
        <link rel="preconnect" href="https://fonts.bunny.net" crossorigin>
        <link rel="dns-prefetch" href="//fonts.bunny.net">
        
        {{-- Préchargement conditionnel des polices --}}
        @if(request()->is('/') || request()->is('accueil'))
            <link rel="preload" href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
            <noscript><link rel="stylesheet" href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap"></noscript>
        @else
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        @endif

        {{-- Open Graph optimisé pour DGPBP --}}
        <meta property="og:site_name" content="{{ config('app.name', 'DGPBP') }}">
        <meta property="og:locale" content="{{ str_replace('_', '-', app()->getLocale()) }}">
        <meta property="og:type" content="website">
        <meta property="og:title" content="{{ config('app.name', 'DGPBP') }} - Direction Générale du Patrimoine Bâti Public">
        <meta property="og:description" content="{{ config('app.description', 'La Direction Générale du Patrimoine Bâti Public (DGPBP) de Guinée assure la gestion, l\'entretien et la valorisation du patrimoine immobilier de l\'État guinéen.') }}">
        <meta property="og:url" content="{{ url()->current() }}">
        <meta property="og:image" content="{{ url('/images/logo/logo-pbp.png') }}">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="630">
        <meta property="og:image:alt" content="Logo DGPBP - Direction Générale du Patrimoine Bâti Public">

        {{-- Twitter Card --}}
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@dgpbp">
        <meta name="twitter:creator" content="@dgpbp">
        <meta name="twitter:title" content="{{ config('app.name', 'DGPBP') }} - Direction Générale du Patrimoine Bâti Public">
        <meta name="twitter:description" content="{{ config('app.description', 'La Direction Générale du Patrimoine Bâti Public (DGPBP) de Guinée assure la gestion, l\'entretien et la valorisation du patrimoine immobilier de l\'État guinéen.') }}">
        <meta name="twitter:image" content="{{ url('/images/logo/logo-pbp.png') }}">

        {{-- DNS Prefetch optimisé --}}
        <link rel="dns-prefetch" href="//fonts.googleapis.com">
        <link rel="dns-prefetch" href="//fonts.gstatic.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">

        {{-- Scripts Inertia et Vite --}}
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
        
        {{-- Message pour utilisateurs sans JavaScript --}}
        <noscript>
            <div style="padding: 20px; text-align: center; background-color: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;">
                Pour une expérience optimale, veuillez activer JavaScript dans votre navigateur.
            </div>
        </noscript>

        {{-- Schema.org JSON-LD pour DGPBP --}}
        <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "GovernmentOrganization",
            "name": "DGPBP - Direction Générale du Patrimoine Bâti Public",
            "alternateName": "DGPBP",
            "url": "{{ url('/') }}",
            "logo": "{{ asset('/images/logo/logo-pbp.png') }}",
            "description": "La Direction Générale du Patrimoine Bâti Public (DGPBP) de Guinée assure la gestion, l'entretien et la valorisation du patrimoine immobilier de l'État guinéen.",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Conakry",
                "addressLocality": "Conakry",
                "addressRegion": "Conakry",
                "addressCountry": "GN"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": ["fr"],
                "hoursAvailable": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "08:00",
                    "closes": "16:00"
                }
            },
            "parentOrganization": {
                "@type": "GovernmentOrganization",
                "name": "République de Guinée",
                "url": "https://www.gouvernement.gov.gn"
            },
            "areaServed": {
                "@type": "Country",
                "name": "Guinée"
            },
            "serviceType": [
                "Gestion du patrimoine immobilier public",
                "Entretien des bâtiments publics",
                "Valorisation immobilière",
                "Services administratifs publics"
            ]
        }
        </script>
    </body>
</html>
