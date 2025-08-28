import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';
import { Building, Castle, Church, School, Hospital, Factory, Home, MapPin, Calendar, Camera } from 'lucide-react';

export default function Categories({ meta }) {
  // Données SEO optimisées pour les catégories du patrimoine
  const seoData = {
    title: "Catégories du Patrimoine Bâti - Classification des Édifices Publics Guinéens",
    description: "Découvrez les différentes catégories du patrimoine bâti public de Guinée : édifices administratifs, religieux, éducatifs, sanitaires, industriels et résidentiels. Classification et inventaire des biens immobiliers de l'État.",
    keywords: "catégories patrimoine Guinée, classification édifices publics, bâtiments administratifs Guinée, patrimoine religieux Conakry, écoles publiques Guinée, hôpitaux publics, industrie guinéenne, logements sociaux",
    canonical: "/patrimoine/categories",
    type: "WebPage"
  };

  // Catégories du patrimoine avec données
  const categories = [
    {
      id: 1,
      name: "Édifices Administratifs",
      description: "Bâtiments gouvernementaux, ministères, préfectures et administrations publiques",
      icon: Building,
      count: 245,
      examples: ["Palais du Peuple", "Ministères", "Préfectures", "Mairies"],
      color: "bg-blue-500"
    },
    {
      id: 2,
      name: "Patrimoine Religieux",
      description: "Mosquées, églises, temples et autres lieux de culte publics",
      icon: Church,
      count: 156,
      examples: ["Grande Mosquée de Conakry", "Cathédrale Sainte-Marie", "Mosquées historiques"],
      color: "bg-purple-500"
    },
    {
      id: 3,
      name: "Édifices Éducatifs", 
      description: "Écoles, lycées, universités et centres de formation publics",
      icon: School,
      count: 834,
      examples: ["Université Gamal Abdel Nasser", "Lycées publics", "Écoles primaires"],
      color: "bg-green-500"
    },
    {
      id: 4,
      name: "Établissements Sanitaires",
      description: "Hôpitaux, centres de santé et infrastructures médicales",
      icon: Hospital,
      count: 312,
      examples: ["Hôpital National Ignace Deen", "CHU de Conakry", "Centres de santé"],
      color: "bg-red-500"
    },
    {
      id: 5,
      name: "Patrimoine Industriel",
      description: "Usines, ateliers et complexes industriels publics",
      icon: Factory,
      count: 67,
      examples: ["Cimenterie de Fria", "Usines de bauxite", "Complexes miniers"],
      color: "bg-orange-500"
    },
    {
      id: 6,
      name: "Logements Sociaux",
      description: "Résidences et cités de logements publics",
      icon: Home,
      count: 423,
      examples: ["Cité Chemin de Fer", "Logements FEGUIFOOT", "Cités administratives"],
      color: "bg-teal-500"
    },
    {
      id: 7,
      name: "Monuments Historiques",
      description: "Sites et monuments d'importance historique et culturelle",
      icon: Castle,
      count: 89,
      examples: ["Mausolée Ahmed Sékou Touré", "Monuments aux Morts", "Sites coloniaux"],
      color: "bg-amber-500"
    }
  ];

  const totalBuildings = categories.reduce((sum, cat) => sum + cat.count, 0);

  return (
    <AppLayout 
      title={seoData.title}
      description={seoData.description}
      keywords={seoData.keywords}
      canonical={seoData.canonical}
      type={seoData.type}
    >
      <Head>
        {/* Schema.org JSON-LD pour les catégories du patrimoine */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": seoData.title,
            "description": seoData.description,
            "url": seoData.canonical,
            "mainEntity": {
              "@type": "ItemList",
              "name": "Catégories du Patrimoine Bâti Public Guinéen",
              "description": "Classification des différents types d'édifices publics en Guinée",
              "numberOfItems": categories.length,
              "itemListElement": categories.map((category, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "DefinedTerm",
                  "name": category.name,
                  "description": category.description,
                  "inDefinedTermSet": {
                    "@type": "DefinedTermSet",
                    "name": "Classification du Patrimoine Public Guinéen"
                  }
                }
              }))
            },
            "about": {
              "@type": "Thing",
              "name": "Patrimoine Bâti Public de Guinée",
              "description": "Ensemble des édifices et infrastructures publiques de la République de Guinée"
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
                  "name": "Catégories",
                  "item": "/patrimoine/categories"
                }
              ]
            },
            "publisher": {
              "@type": "Organization",
              "name": "PBP",
              "logo": {
                "@type": "ImageObject",
                "url": "/images/logo/pbp_sau_logo_transparent_blanc.png"
              }
            }
          })}
        </script>

        {/* Schema.org pour les statistiques */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dataset",
            "name": "Inventaire du Patrimoine Bâti Public Guinéen par Catégories",
            "description": "Données statistiques sur la répartition du patrimoine bâti public de Guinée par catégories",
            "creator": {
              "@type": "Organization",
              "name": "PBP - Patrimoine Bâti Public"
            },
            "includedInDataCatalog": {
              "@type": "DataCatalog",
              "name": "Catalogue du Patrimoine Public Guinéen"
            },
            "distribution": {
              "@type": "DataDownload",
              "encodingFormat": "application/json",
              "contentUrl": "/api/patrimoine/categories/statistics"
            }
          })}
        </script>
      </Head>
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary to-primary-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-white mb-6">
                Catégories du Patrimoine Bâti
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Classification et inventaire des édifices publics de la République de Guinée
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  <span>{totalBuildings.toLocaleString()} édifices recensés</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>Tout le territoire national</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>Dernière mise à jour: {new Date().toLocaleDateString('fr-FR')}</span>
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
            <span className="text-gray-900 font-medium">Catégories</span>
          </nav>
        </div>

        {/* Introduction */}
        <div className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-8">
              Le patrimoine bâti public de Guinée est organisé en plusieurs catégories principales, 
              reflétant la diversité des fonctions et des usages des édifices publics à travers le pays.
            </p>
          </div>
        </div>

        {/* Catégories Grid */}
        <div className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={category.id} 
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
                  itemScope 
                  itemType="https://schema.org/DefinedTerm"
                >
                  <div className={`${category.color} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full"></div>
                    <div className="relative">
                      <IconComponent className="w-12 h-12 mb-4" />
                      <h3 className="text-xl font-bold mb-2" itemProp="name">
                        {category.name}
                      </h3>
                      <p className="text-white/90 text-sm" itemProp="description">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-gray-900">
                        {category.count.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-500">édifices</span>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Exemples :</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {category.examples.map((example, index) => (
                          <li key={index} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="w-full bg-gray-50 hover:bg-primary hover:text-white text-gray-700 py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                      <Camera className="w-4 h-4" />
                      Voir les édifices
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Statistiques Summary */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Répartition du Patrimoine Public
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {categories.find(c => c.name.includes('Éducatifs'))?.count.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Établissements éducatifs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {categories.find(c => c.name.includes('Sanitaires'))?.count.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Centres de santé</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {categories.find(c => c.name.includes('Administratifs'))?.count.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Bâtiments administratifs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {categories.find(c => c.name.includes('Logements'))?.count.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Logements sociaux</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
} 