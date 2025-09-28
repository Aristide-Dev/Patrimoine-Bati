# Stratégie SEO PBP - Documentation

## Vue d'ensemble

Cette documentation décrit la nouvelle stratégie SEO mise en place pour le site PBP (Patrimoine Bâti Public) utilisant les packages `artesaos/seotools` et `spatie/laravel-sitemap`.

## Packages installés

### 1. artesaos/seotools (v1.3.2)
- **Objectif** : Gestion centralisée des métadonnées SEO
- **Fonctionnalités** :
  - Métadonnées dynamiques (title, description, keywords)
  - Open Graph pour les réseaux sociaux
  - Twitter Cards
  - JSON-LD pour les données structurées
  - Configuration centralisée

### 2. spatie/laravel-sitemap (v7.3.7)
- **Objectif** : Génération automatique de sitemap XML
- **Fonctionnalités** :
  - Crawling automatique du site
  - Ajout manuel d'URLs
  - Priorités et fréquences de mise à jour
  - Génération programmée

## Configuration

### Fichier de configuration SEO
- **Fichier** : `config/seotools.php`
- **Contenu** : Métadonnées par défaut, configuration Open Graph, Twitter Cards, JSON-LD

### Trait SEO
- **Fichier** : `app/Http/Traits/SeoTools.php`
- **Méthodes disponibles** :
  - `setSeoMeta()` : Configuration de base
  - `setNewsSeoMeta()` : Pour les actualités
  - `setMediaSeoMeta()` : Pour les médias
  - `setReportSeoMeta()` : Pour les rapports
  - `setHomeSeoMeta()` : Pour la page d'accueil
  - `setAboutSeoMeta()` : Pour les pages à propos

## Utilisation

### Dans les contrôleurs

```php
use App\Http\Traits\SeoTools;

class MonController extends Controller
{
    use SeoTools;

    public function index()
    {
        // Configuration SEO automatique
        $this->setHomeSeoMeta();
        
        // Ou configuration personnalisée
        $this->setSeoMeta(
            'Mon Titre - PBP',
            'Ma description',
            ['mot-clé1', 'mot-clé2'],
            'https://example.com/canonical'
        );
        
        return Inertia::render('MaPage');
    }
}
```

### Dans les vues Blade

Le fichier `resources/views/app.blade.php` a été mis à jour pour utiliser les helpers SEO Tools :

```blade
{{-- Métadonnées dynamiques --}}
{!! SEOMeta::generate() !!}

{{-- Open Graph et Twitter Card --}}
{!! OpenGraph::generate() !!}
{!! TwitterCard::generate() !!}

{{-- JSON-LD --}}
{!! JsonLd::generate() !!}
```

## Génération du Sitemap

### Commande Artisan
```bash
php artisan sitemap:generate
```

### Planification automatique
Le sitemap est généré automatiquement tous les jours à minuit via la tâche planifiée dans `routes/console.php`.

### Contenu du sitemap
- Pages statiques (accueil, à propos, contact, etc.)
- Actualités publiées
- Médias publiés
- Rapports publiés
- URLs avec priorités et fréquences de mise à jour

## Routes SEO optimisées

### Nouvelles routes
- `/actualites/` : Liste des actualités avec SEO
- `/actualites/{slug}` : Actualité individuelle avec SEO
- `/actualites/medias/` : Liste des médias avec SEO
- `/actualites/medias/{slug}` : Média individuel avec SEO

### Routes de compatibilité
Les anciennes routes restent disponibles avec le préfixe `/legacy/` pour éviter les conflits.

## Métadonnées par défaut

### Configuration de base
- **Titre** : "PBP - Patrimoine Bâti Public de Guinée"
- **Description** : "Le Patrimoine Bâti Public (PBP) de Guinée assure la gestion, l'entretien et la valorisation du patrimoine immobilier de l'État guinéen. Situé aux Ports Conteneurs de Conakry, Kaloum."
- **Mots-clés** : patrimoine bâti, Guinée, service public, immobilier, État, Conakry, Kaloum, PBP
- **Langue** : Français (fr)
- **Région** : Guinée (GN-C)
- **Localisation** : Conakry, Kaloum
- **Adresse** : PORTS CONTENEURS DE CONAKRY, KALOUM REP. DE GUINEE
- **Téléphone** : +224 655 358 284
- **Email** : info@pbpguinee.com
- **Horaires** : Lundi - Vendredi, 8h00 - 17h00

### Open Graph
- **Type** : website (par défaut), article (pour le contenu)
- **Site** : PBP - Patrimoine Bâti Public de Guinée
- **Locale** : fr_GN
- **Images** : Logo PBP par défaut

### Twitter Card
- **Type** : summary_large_image
- **Site** : @pbpsau
- **Créateur** : @pbpsau

## Données structurées (JSON-LD)

### Organisation gouvernementale (page d'accueil)
```json
{
  "@type": "GovernmentOrganization",
  "name": "PBP - Patrimoine Bâti Public de Guinée",
  "description": "Le Patrimoine Bâti Public (PBP) de Guinée assure la gestion, l'entretien et la valorisation du patrimoine immobilier de l'État guinéen.",
  "url": "...",
  "logo": "...",
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
}
```

### Article (actualités)
```json
{
  "@type": "Article",
  "title": "...",
  "description": "...",
  "url": "...",
  "datePublished": "...",
  "dateModified": "...",
  "author": {
    "@type": "GovernmentOrganization",
    "name": "PBP - Patrimoine Bâti Public de Guinée",
    "url": "...",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "PORTS CONTENEURS DE CONAKRY",
      "addressLocality": "Kaloum",
      "addressRegion": "Conakry",
      "addressCountry": "GN"
    }
  },
  "publisher": {
    "@type": "GovernmentOrganization",
    "name": "PBP - Patrimoine Bâti Public de Guinée",
    "logo": {
      "@type": "ImageObject",
      "url": "..."
    },
    "url": "...",
    "sameAs": [
      "https://www.facebook.com/pbpsau/",
      "https://www.linkedin.com/company/patrimoinebatiguinee/"
    ]
  }
}
```

## Avantages de cette approche

1. **Centralisation** : Toute la configuration SEO est centralisée
2. **Réutilisabilité** : Le trait SeoTools peut être utilisé dans tous les contrôleurs
3. **Maintenabilité** : Modifications faciles via la configuration
4. **Automatisation** : Sitemap généré automatiquement
5. **Performance** : Métadonnées optimisées pour chaque page
6. **Compatibilité** : Respect des standards SEO modernes

## Prochaines étapes

1. **Test** : Vérifier le fonctionnement sur toutes les pages
2. **Optimisation** : Ajuster les métadonnées selon les besoins
3. **Monitoring** : Surveiller les performances SEO
4. **Extension** : Ajouter d'autres types de contenu si nécessaire

## Commandes utiles

```bash
# Générer le sitemap manuellement
php artisan sitemap:generate

# Vérifier les tâches planifiées
php artisan schedule:list

# Exécuter les tâches planifiées
php artisan schedule:run

# Vider le cache de configuration
php artisan config:clear
```

## Support

Pour toute question ou problème lié à la configuration SEO, consulter :
- Documentation artesaos/seotools : https://github.com/artesaos/seotools
- Documentation spatie/laravel-sitemap : https://github.com/spatie/laravel-sitemap
