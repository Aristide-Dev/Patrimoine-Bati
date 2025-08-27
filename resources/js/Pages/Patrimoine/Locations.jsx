import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';
import { MapPin, Building, Users, TrendingUp, Calendar, Search, Filter } from 'lucide-react';

export default function Locations({ meta }) {
  // Données SEO optimisées pour les localisations du patrimoine
  const seoData = {
    title: "Localisations du Patrimoine Bâti - Répartition Géographique en Guinée",
    description: "Découvrez la répartition géographique du patrimoine bâti public de Guinée par région, préfecture et commune. Statistiques détaillées et localisation des édifices publics sur tout le territoire national.",
    keywords: "localisation patrimoine Guinée, répartition géographique édifices publics, patrimoine Conakry, bâtiments publics régions Guinée, préfectures patrimoine, communes édifices publics",
    canonical: "/patrimoine/localisations",
    type: "WebPage"
  };

  // Données des régions administratives avec patrimoine
  const regions = [
    {
      id: 1,
      name: "Conakry",
      type: "Capitale",
      prefectures: ["Kaloum", "Dixinn", "Matam", "Ratoma", "Matoto"],
      buildings: 1245,
      population: "2 000 000",
      density: "high",
      majorSites: ["Palais du Peuple", "Ministères", "CHU Conakry", "Université Gamal Abdel Nasser"],
      coordinates: { lat: 9.509167, lng: -13.712222 },
      color: "bg-red-500"
    },
    {
      id: 2,
      name: "Kindia", 
      type: "Région Administrative",
      prefectures: ["Kindia", "Coyah", "Dubréka", "Forécariah", "Télimélé"],
      buildings: 456,
      population: "1 561 374",
      density: "medium",
      majorSites: ["Préfecture de Kindia", "Hôpital Régional", "Lycées publics"],
      coordinates: { lat: 10.055556, lng: -12.863889 },
      color: "bg-blue-500"
    },
    {
      id: 3,
      name: "Boké",
      type: "Région Administrative", 
      prefectures: ["Boké", "Boffa", "Fria", "Gaoual", "Koundara"],
      buildings: 312,
      population: "1 083 147",
      density: "low",
      majorSites: ["Fort de Boké", "Cimenterie de Fria", "Mines de bauxite"],
      coordinates: { lat: 10.932578, lng: -14.292449 },
      color: "bg-green-500"
    },
    {
      id: 4,
      name: "Labé",
      type: "Région Administrative",
      prefectures: ["Labé", "Koubia", "Lelouma", "Mali", "Tougué"],
      buildings: 267,
      population: "1 007 419",
      density: "low",
      majorSites: ["Préfecture de Labé", "Centre de santé régional", "Écoles rurales"],
      coordinates: { lat: 11.316667, lng: -12.283333 },
      color: "bg-purple-500"
    },
    {
      id: 5,
      name: "Mamou",
      type: "Région Administrative",
      prefectures: ["Mamou", "Dalaba", "Pita"],
      buildings: 189,
      population: "732 117",
      density: "low", 
      majorSites: ["Gare historique de Mamou", "Station météorologique", "Hôpital régional"],
      coordinates: { lat: 10.375556, lng: -12.090556 },
      color: "bg-orange-500"
    },
    {
      id: 6,
      name: "Faranah",
      type: "Région Administrative",
      prefectures: ["Faranah", "Dabola", "Dinguiraye", "Kissidougou"],
      buildings: 203,
      population: "942 733",
      density: "low",
      majorSites: ["Mosquée de Dinguiraye", "Barrages hydroélectriques", "Centres agricoles"],
      coordinates: { lat: 10.033333, lng: -10.75 },
      color: "bg-teal-500"
    },
    {
      id: 7,
      name: "Kankan",
      type: "Région Administrative",
      prefectures: ["Kankan", "Kérouané", "Kouroussa", "Mandiana", "Siguiri"],
      buildings: 278,
      population: "1 986 329",
      density: "medium",
      majorSites: ["Université de Kankan", "Mines d'or de Siguiri", "Centre commercial"],
      coordinates: { lat: 10.383333, lng: -9.3 },
      color: "bg-indigo-500"
    },
    {
      id: 8,
      name: "Nzérékoré",
      type: "Région Administrative",
      prefectures: ["Nzérékoré", "Beyla", "Guéckédou", "Lola", "Macenta", "Yomou"],
      buildings: 234,
      population: "1 663 870",
      density: "low",
      majorSites: ["Hôpital de Nzérékoré", "Plantations forestières", "Postes frontaliers"],
      coordinates: { lat: 7.755556, lng: -8.816667 },
      color: "bg-pink-500"
    }
  ];

  const totalBuildings = regions.reduce((sum, region) => sum + region.buildings, 0);
  const totalPopulation = regions.reduce((sum, region) => sum + parseInt(region.population.replace(/[^\d]/g, '')), 0);

  return (
    <AppLayout 
      title={seoData.title}
      description={seoData.description}
      keywords={seoData.keywords}
      canonical={seoData.canonical}
      type={seoData.type}
    >
      <Head>
        {/* Schema.org JSON-LD pour les localisations du patrimoine */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": seoData.title,
            "description": seoData.description,
            "url": seoData.canonical,
            "mainEntity": {
              "@type": "ItemList",
              "name": "Répartition Géographique du Patrimoine Bâti Guinéen",
              "description": "Distribution des édifices publics par région administrative en Guinée",
              "numberOfItems": regions.length,
              "itemListElement": regions.map((region, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "AdministrativeArea",
                  "name": region.name,
                  "description": `Région ${region.type} avec ${region.buildings} édifices publics`,
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": region.coordinates.lat,
                    "longitude": region.coordinates.lng
                  },
                  "containedInPlace": {
                    "@type": "Country",
                    "name": "Guinée",
                    "addressCountry": "GN"
                  },
                  "population": region.population
                }
              }))
            },
            "about": {
              "@type": "Thing",
              "name": "Distribution Géographique du Patrimoine Public Guinéen",
              "description": "Analyse spatiale et statistique de la répartition des édifices publics en Guinée"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Accueil",
                  "item": "/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Patrimoine",
                  "item": "/patrimoine"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Localisations",
                  "item": "/patrimoine/localisations"
                }
              ]
            },
            "publisher": {
              "@type": "Organization",
              "name": "DGPBP",
              "logo": {
                "@type": "ImageObject",
                "url": "/images/logo/pbp_sau_logo_transparent_blanc.png"
              }
            }
          })}
        </script>

        {/* Schema.org pour les données géographiques */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dataset",
            "name": "Données Géographiques du Patrimoine Bâti Guinéen",
            "description": "Base de données géolocalisées des édifices publics de Guinée par région",
            "creator": {
              "@type": "Organization",
              "name": "DGPBP - Direction Générale du Patrimoine Bâti Public"
            },
            "spatialCoverage": {
              "@type": "Place",
              "geo": {
                "@type": "GeoShape",
                "box": "7.3 -15.1 12.7 -7.6"
              },
              "name": "République de Guinée"
            },
            "temporalCoverage": "2024",
            "distribution": {
              "@type": "DataDownload",
              "encodingFormat": "application/json",
              "contentUrl": "/api/patrimoine/locations/data"
            }
          })}
        </script>
      </Head>
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-white mb-6">
                Localisations du Patrimoine Bâti
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Répartition géographique des édifices publics à travers les 8 régions de Guinée
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>8 régions administratives</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  <span>{totalBuildings.toLocaleString()} édifices recensés</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{Math.round(totalPopulation / 1000000)}M+ habitants</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center text-sm text-gray-600" aria-label="Breadcrumb">
            <a href="/" className="hover:text-primary transition-colors">Accueil</a>
            <span className="mx-2">/</span>
            <a href="/patrimoine" className="hover:text-primary transition-colors">Patrimoine</a>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Localisations</span>
          </nav>
        </div>

        {/* Filtres et Recherche */}
        <div className="container mx-auto px-4 pb-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Rechercher une région, préfecture..."
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                  <Filter className="w-5 h-5" />
                  Filtrer
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Régions Grid */}
        <div className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {regions.map((region) => (
              <div 
                key={region.id} 
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
                itemScope 
                itemType="https://schema.org/AdministrativeArea"
              >
                <div className={`${region.color} p-4 text-white relative overflow-hidden`}>
                  <div className="absolute -top-2 -right-2 w-16 h-16 bg-white/10 rounded-full"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold" itemProp="name">{region.name}</h3>
                      <MapPin className="w-5 h-5" />
                    </div>
                    <p className="text-white/90 text-sm">{region.type}</p>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Édifices publics</span>
                      <span className="text-lg font-bold text-gray-900">{region.buildings.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Population</span>
                      <span className="text-sm font-medium text-gray-900" itemProp="population">
                        {region.population}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Préfectures</span>
                      <span className="text-sm font-medium text-gray-900">
                        {region.prefectures.length}
                      </span>
                    </div>

                    <div className="pt-3 border-t">
                      <h4 className="text-xs font-semibold text-gray-700 mb-2">Sites majeurs :</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {region.majorSites.slice(0, 2).map((site, index) => (
                          <li key={index} className="flex items-center">
                            <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                            {site}
                          </li>
                        ))}
                        {region.majorSites.length > 2 && (
                          <li className="text-primary font-medium">
                            +{region.majorSites.length - 2} autres...
                          </li>
                        )}
                      </ul>
                    </div>

                    <button className="w-full mt-3 bg-gray-50 hover:bg-primary hover:text-white text-gray-700 py-2 px-3 rounded-lg transition-colors duration-200 text-sm">
                      Voir les détails
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistiques par densité */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Répartition par Densité de Patrimoine
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-10 h-10 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Densité Élevée</h3>
                  <p className="text-gray-600 mb-4">Zones urbaines concentrées</p>
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    {regions.filter(r => r.density === 'high').reduce((sum, r) => sum + r.buildings, 0).toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">
                    édifices ({regions.filter(r => r.density === 'high').length} région)
                  </div>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Densité Moyenne</h3>
                  <p className="text-gray-600 mb-4">Centres régionaux</p>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {regions.filter(r => r.density === 'medium').reduce((sum, r) => sum + r.buildings, 0).toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">
                    édifices ({regions.filter(r => r.density === 'medium').length} régions)
                  </div>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Densité Faible</h3>
                  <p className="text-gray-600 mb-4">Zones rurales étendues</p>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {regions.filter(r => r.density === 'low').reduce((sum, r) => sum + r.buildings, 0).toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">
                    édifices ({regions.filter(r => r.density === 'low').length} régions)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Analyse géographique */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Analyse Géographique du Patrimoine
            </h2>
            <p className="text-lg text-gray-700 mb-12">
              La répartition du patrimoine bâti public guinéen reflète l'organisation administrative 
              du territoire et les priorités de développement régional. Conakry, en tant que capitale, 
              concentre naturellement la majorité des édifices publics, suivie par les centres régionaux 
              de Kankan et Kindia.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">
                  {((regions.find(r => r.name === 'Conakry')?.buildings / totalBuildings) * 100).toFixed(1)}%
                </div>
                <div className="text-sm text-gray-600">Patrimoine à Conakry</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">
                  {regions.reduce((sum, r) => sum + r.prefectures.length, 0)}
                </div>
                <div className="text-sm text-gray-600">Préfectures couvertes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">
                  {Math.round(totalBuildings / regions.length)}
                </div>
                <div className="text-sm text-gray-600">Moyenne par région</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-gray-600">Couverture nationale</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
} 