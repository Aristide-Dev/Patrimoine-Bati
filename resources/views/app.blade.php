<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        
        {{-- SEO Tools - Métadonnées dynamiques --}}
        @if(session('seo_title'))
            <title>{{ session('seo_title') }}</title>
            <meta name="description" content="{{ session('seo_description') }}">
            @if(session('seo_keywords'))
                <meta name="keywords" content="{{ implode(', ', session('seo_keywords')) }}">
            @endif
            @if(session('seo_canonical'))
                <link rel="canonical" href="{{ session('seo_canonical') }}">
            @endif
            
            {{-- Open Graph --}}
            <meta property="og:title" content="{{ session('seo_title') }}">
            <meta property="og:description" content="{{ session('seo_description') }}">
            <meta property="og:url" content="{{ session('seo_canonical') ?? request()->url() }}">
            <meta property="og:site_name" content="PBP - Patrimoine Bâti Public de Guinée">
            @if(session('seo_type'))
                <meta property="og:type" content="{{ session('seo_type') }}">
            @endif
            @if(session('seo_image'))
                <meta property="og:image" content="{{ session('seo_image') }}">
            @endif
            
            {{-- Twitter Card --}}
            <meta name="twitter:card" content="summary_large_image">
            <meta name="twitter:title" content="{{ session('seo_title') }}">
            <meta name="twitter:description" content="{{ session('seo_description') }}">
            <meta name="twitter:site" content="@pbpsau">
            <meta name="twitter:creator" content="@pbpsau">
            @if(session('seo_image'))
                <meta name="twitter:image" content="{{ session('seo_image') }}">
            @endif
        @else
            {{-- Métadonnées par défaut --}}
            <title>PBP - Patrimoine Bâti Public de Guinée</title>
            <meta name="description" content="Le Patrimoine Bâti Public (PBP) de Guinée assure la gestion, l'entretien et la valorisation du patrimoine immobilier de l'État guinéen. Situé aux Ports Conteneurs de Conakry, Kaloum.">
            <meta name="keywords" content="patrimoine bâti, Guinée, service public, immobilier, État, Conakry, Kaloum, PBP">
        @endif
        
        {{-- Métadonnées techniques uniquement --}}
        <meta name="theme-color" content="#1a365d" media="(prefers-color-scheme: light)">
        <meta name="theme-color" content="#1e293b" media="(prefers-color-scheme: dark)">
        <meta name="color-scheme" content="light dark">

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

        <title inertia>{{ config('app.name', 'PBP') }}</title>

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

        {{-- Open Graph et Twitter Card dynamiques --}}
        {{-- Déjà inclus dans la section SEO ci-dessus --}}

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

        {{-- JSON-LD dynamique --}}
        @if(session('seo_organization_name'))
        <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "{{ session('seo_organization_type', 'GovernmentOrganization') }}",
            "name": "{{ session('seo_organization_name') }}",
            "description": "{{ session('seo_description', 'Le Patrimoine Bâti Public (PBP) de Guinée assure la gestion, l\'entretien et la valorisation du patrimoine immobilier de l\'État guinéen.') }}",
            "url": "{{ config('app.url') }}",
            @if(session('seo_address'))
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "PORTS CONTENEURS DE CONAKRY",
                "addressLocality": "Kaloum",
                "addressRegion": "Conakry",
                "addressCountry": "GN"
            },
            @endif
            @if(session('seo_contact_phone'))
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "{{ session('seo_contact_phone') }}",
                @if(session('seo_contact_email'))
                "email": "{{ session('seo_contact_email') }}",
                @endif
                "contactType": "customer service",
                "areaServed": "GN",
                "availableLanguage": "French"
            },
            @endif
            @if(session('seo_social_facebook') || session('seo_social_linkedin'))
            "sameAs": [
                @if(session('seo_social_facebook'))"{{ session('seo_social_facebook') }}"@endif
                @if(session('seo_social_facebook') && session('seo_social_linkedin')),@endif
                @if(session('seo_social_linkedin'))"{{ session('seo_social_linkedin') }}"@endif
            ],
            @endif
            "parentOrganization": {
                "@type": "GovernmentOrganization",
                "name": "République de Guinée",
                "url": "https://www.gouvernement.gov.gn"
            }
        }
        </script>
        @endif
    </body>
</html>
