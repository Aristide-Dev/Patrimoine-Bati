# SEO React - Documentation d'Implémentation

## Vue d'ensemble

L'adaptation du SEO pour les pages React utilise Inertia.js pour passer les métadonnées depuis Laravel vers React, permettant une gestion dynamique et centralisée du SEO.

## Architecture

### 1. Composant SEO React (`resources/js/Components/SEO.jsx`)

Le composant SEO centralise la gestion des métadonnées pour toutes les pages React :

```jsx
import SEO from '@/Components/SEO';

export default function MyPage({ seo }) {
    return (
        <AppLayout>
            <SEO 
                title={seo?.title}
                description={seo?.description}
                keywords={seo?.keywords}
                canonical={seo?.canonical}
                type={seo?.type}
                image={seo?.image}
                article={seo?.article}
                organization={seo?.organization}
            />
            {/* Contenu de la page */}
        </AppLayout>
    );
}
```

### 2. Trait SeoTools Laravel (`app/Http/Traits/SeoTools.php`)

Le trait Laravel prépare les données SEO pour Inertia.js :

```php
use App\Http\Traits\SeoTools;

class MyController extends Controller
{
    use SeoTools;

    public function index()
    {
        $this->setSeoMeta('Titre', 'Description', ['mots', 'clés']);
        
        return Inertia::render('MyPage', [
            'seo' => $this->getSeoData(),
            // autres données...
        ]);
    }
}
```

## Fonctionnalités SEO

### Métadonnées de Base
- **Titre** : Dynamique par page
- **Description** : Personnalisée selon le contenu
- **Mots-clés** : Contextuels et pertinents
- **URL Canonique** : Pour éviter le contenu dupliqué

### Open Graph (Facebook)
- `og:title`, `og:description`, `og:url`
- `og:site_name` = "PBP - Patrimoine Bâti Public de Guinée"
- `og:type` = "website" ou "article"
- `og:image` = Image de l'article si disponible
- `og:locale` = "fr_GN"

### Twitter Cards
- `twitter:card` = "summary_large_image"
- `twitter:site` = "@pbpsau"
- `twitter:creator` = "@pbpsau"
- `twitter:image` = Image si disponible

### JSON-LD Structuré
- **Type** : `GovernmentOrganization` ou `Article`
- **Organisation** : Informations complètes PBP
- **Contact** : Téléphone, email, adresse
- **Réseaux sociaux** : Facebook, LinkedIn
- **Organisation parente** : République de Guinée

## Pages Adaptées

### Pages Principales
- ✅ **Home** (`resources/js/Pages/Home.jsx`)
- ✅ **About/Index** (`resources/js/Pages/About/Index.jsx`)
- ✅ **Actualites/Index** (`resources/js/Pages/Actualites/Index.jsx`)
- ✅ **Actualites/Show** (`resources/js/Pages/Actualites/Show.jsx`)

### Contrôleurs Mis à Jour
- ✅ **HomeController** : Données organisation complètes
- ✅ **NewsController** : Métadonnées d'articles
- ✅ **AboutController** : Pages à propos
- ✅ **ContactController** : Informations de contact
- ✅ **PatrimoineController** : Pages patrimoine
- ✅ **DemandeController** : Formulaires de demande
- ✅ **ParcImmobilierController** : Parc immobilier
- ✅ **MediaController** : Médias et ressources
- ✅ **ActualitesController** : Actualités legacy

## Types de Métadonnées par Page

### Page d'Accueil
```php
$this->setHomeSeoMeta();
// Génère :
// - Titre : "PBP - Patrimoine Bâti Public de Guinée"
// - Type : "website"
// - Organisation : Données complètes PBP
// - Contact : Téléphone, email, adresse
```

### Articles d'Actualités
```php
$this->setNewsSeoMeta($news);
// Génère :
// - Titre : "{Titre Article} - PBP"
// - Type : "article"
// - Dates : Publication et modification
// - Auteur : "PBP - Patrimoine Bâti Public de Guinée"
// - Image : Image de l'article si disponible
```

### Pages à Propos
```php
$this->setAboutSeoMeta($pageTitle, $description);
// Génère :
// - Titre : "{Page} - PBP"
// - Type : "article"
// - Mots-clés : Organisation, équipe
```

## Avantages de l'Implémentation

### 1. Centralisation
- Un seul composant SEO pour toutes les pages
- Logique métier centralisée dans le trait Laravel
- Cohérence des métadonnées

### 2. Flexibilité
- Métadonnées dynamiques selon le contenu
- Support des articles et pages statiques
- Données d'organisation réutilisables

### 3. Performance
- Pas de dépendance externe problématique
- Génération côté serveur
- Optimisation pour les moteurs de recherche

### 4. Maintenabilité
- Code modulaire et réutilisable
- Facile à étendre pour de nouvelles pages
- Documentation claire

## Utilisation

### Dans un Contrôleur Laravel
```php
public function show($id)
{
    $item = Model::find($id);
    
    // Configurer le SEO
    $this->setSeoMeta(
        $item->title . ' - PBP',
        $item->description,
        ['mots', 'clés', 'pertinents']
    );
    
    // Retourner avec Inertia
    return Inertia::render('Item/Show', [
        'item' => $item,
        'seo' => $this->getSeoData(),
    ]);
}
```

### Dans une Page React
```jsx
export default function ItemShow({ item, seo }) {
    return (
        <AppLayout>
            <SEO 
                title={seo?.title}
                description={seo?.description}
                keywords={seo?.keywords}
                canonical={seo?.canonical}
                type={seo?.type}
            />
            
            <h1>{item.title}</h1>
            <p>{item.description}</p>
        </AppLayout>
    );
}
```

## Données PBP Intégrées

### Informations Organisationnelles
- **Nom** : "PBP - Patrimoine Bâti Public de Guinée"
- **Adresse** : "PORTS CONTENEURS DE CONAKRY, Kaloum, Conakry, GN"
- **Téléphone** : "+224 655 358 284"
- **Email** : "info@pbpguinee.com"

### Réseaux Sociaux
- **Facebook** : "https://www.facebook.com/pbpsau/"
- **LinkedIn** : "https://www.linkedin.com/company/patrimoinebatiguinee/"
- **Twitter** : "@pbpsau"

### Organisation Parente
- **Nom** : "République de Guinée"
- **URL** : "https://www.gouvernement.gov.gn"

## Résultat

Le SEO est maintenant entièrement adapté aux pages React avec :
- ✅ Métadonnées dynamiques et contextuelles
- ✅ Open Graph et Twitter Cards complets
- ✅ JSON-LD structuré pour l'organisation gouvernementale
- ✅ Informations PBP réelles et à jour
- ✅ Architecture modulaire et maintenable
- ✅ Performance optimale sans dépendance externe

L'implémentation est prête pour la production et optimisée pour les moteurs de recherche ! 🚀
