import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';
import { Castle, MapPin, Camera, History, Award, Users, Clock, Star, } from 'lucide-react';
import { motion } from "framer-motion";

export default function Historic({ meta }) {
  // Animations avec Framer Motion
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Données SEO optimisées pour le patrimoine historique
  const seoData = {
    title: "Patrimoine Historique de Guinée - Monuments et Sites Culturels Authentiques",
    description: "Explorez le riche patrimoine historique de Guinée : mausolée Ahmed Sékou Touré, Fort de Boké, mosquée de Dinguiraye d'El Hadj Omar Tall, vestiges coloniaux et sites de résistance anticoloniale. Découvrez l'héritage culturel guinéen.",
    keywords: "patrimoine historique Guinée, mausolée Ahmed Sékou Touré, Fort de Boké, mosquée Dinguiraye El Hadj Omar Tall, Samory Touré, architecture coloniale Guinée, monuments historiques Conakry, résistance anticoloniale, sites UNESCO Guinée",
    canonical: "/patrimoine/historique",
    type: "WebPage"
  };

  // Sites historiques majeurs avec vraies informations
  const historicSites = [
    {
      id: 1,
      name: "Mausolée Ahmed Sékou Touré",
      period: "République de Guinée",
      year: "1984",
      location: "Camayenne, Conakry",
      region: "Conakry",
      description: "Monument funéraire du premier président de la Guinée indépendante (1922-1984), figure emblématique de l'indépendance africaine et leader du Parti Démocratique de Guinée.",
      importance: "Nationale",
      status: "Conservé",
      visitors: "45 000+/an",
      details: "Ahmed Sékou Touré dirigea la Guinée de 1958 à 1984. Le mausolée fut construit après sa mort survenue le 26 mars 1984 aux États-Unis. Site de pèlerinage politique et lieu de mémoire nationale.",
      heritage: "Mémoire de l'indépendance",
      image: "/images/historic/sekou-toure.jpg",
      coordinates: { lat: 9.538362, lng: -13.677793 },
      architect: "Architectes guinéens et cubains",
      materials: "Pierre, marbre, bronze",
      category: "independence"
    },
    {
      id: 2,
      name: "Fort de Boké",
      period: "Époque coloniale française",
      year: "1878",
      location: "Boké",
      region: "Boké",
      description: "Forteresse coloniale construite par les Français, théâtre de l'emprisonnement d'Alpha Yaya Diallo (roi de Labé) et du roi Nalou. Aujourd'hui transformé en musée.",
      importance: "Historique majeure",
      status: "Restauré (1982)",
      visitors: "12 000+/an",
      details: "Construit en 1878, le fort servit de prison pour les résistants à la colonisation. Alpha Yaya Diallo (1840-1912) et le roi Nalou y furent détenus. Restauré en 1982 par l'Association des Amis du Musée.",
      heritage: "Résistance anticoloniale",
      image: "/images/historic/musee-boke.jpeg",
      coordinates: { lat: 10.932578, lng: -14.292449 },
      architect: "Ingénieurs militaires français",
      materials: "Pierre locale, fer",
      category: "resistance"
    },
    {
      id: 3,
      name: "Grande Mosquée de Dinguiraye",
      period: "XIXe siècle",
      year: "1850",
      location: "Dinguiraye",
      region: "Faranah",
      description: "Première mosquée construite par El Hadj Omar Tall (1794-1864), grand réformateur religieux et résistant. Centre spirituel et politique de l'empire toucouleur.",
      importance: "Religieuse et historique",
      status: "Patrimoine protégé",
      visitors: "35 000+/an",
      details: "El Hadj Omar Tall fonda Dinguiraye vers 1850 comme capitale de son état théocratique. La mosquée symbolise l'islamisation du Fouta-Djalon et la résistance à la conquête coloniale française.",
      heritage: "Architecture islamique soudanaise",
      image: "/images/historic/grande-mosquee-dinguiraye.jpeg",
      coordinates: { lat: 11.3, lng: -10.72 },
      architect: "Maîtres maçons mandingues",
      materials: "Banco, bois, chaume",
      category: "religious"
    },
    {
      id: 4,
      name: "Musée National de Conakry",
      period: "Époque coloniale",
      year: "1960 (musée), vestige colonial antérieur",
      location: "Sandervalia, Conakry",
      region: "Conakry",
      description: "Ancien bâtiment colonial reconverti en musée national. Abrite la case d'Olivier de Sanderval (1896) et la statue d'Eugène Ballay, gouverneur de Guinée française.",
      importance: "Culturelle nationale",
      status: "Partiellement restauré",
      visitors: "18 000+/an",
      details: "Le musée conserve des objets ethnographiques des principales ethnies guinéennes, des masques nimba et baga. La case de Sanderval témoigne des premiers projets d'exploration européenne du Fouta-Djalon.",
      heritage: "Ethnographie et mémoire coloniale",
      image: "/images/historic/national-museum-musee.jpg",
      coordinates: { lat: 9.509167, lng: -13.712222 },
      architect: "Architecture coloniale française",
      materials: "Pierre, béton, bois tropical",
      category: "cultural"
    },
    {
      id: 5,
      name: "Site de Gberedou/Hamana",
      period: "XIe-XVIe siècles",
      year: "Civilisation mandingue ancienne",
      location: "Kouroussa-Kankan",
      region: "Kankan", 
      description: "Centre historique mandingue inscrit sur la liste indicative UNESCO. Mares sacrées, architecture vernaculaire et traditions orales préservées.",
      importance: "UNESCO (Liste indicative)",
      status: "Patrimoine culturel vivant",
      visitors: "8 000+/an",
      details: "Site spirituel avec les mares sacrées de Baro, Balato et Koumana. Centre de préservation de la tradition orale mandingue et de l'histoire de l'Afrique de l'Ouest. Village de Fadama réputé pour ses griots.",
      heritage: "Civilisation mandingue",
      image: "/images/historic/Site-Gberedou-Hamana.jpg",
      coordinates: { lat: 10.883333, lng: -9.216667 },
      architect: "Architecture vernaculaire mandingue",
      materials: "Banco, paille, bois",
      category: "traditional"
    },
    {
      id: 6,
      name: "Vestiges de l'Empire de Samory",
      period: "XIXe siècle",
      year: "1870-1898",
      location: "Bisandugu et région",
      region: "Kankan",
      description: "Sites liés à Samory Touré (1830-1900), résistant à la colonisation française. Traces de fortifications et lieux de mémoire de l'Empire wassoulou.",
      importance: "Résistance historique",
      status: "Sites dispersés",
      visitors: "5 000+/an",
      details: "Samory Touré créa un vaste empire de 1870 à 1898, résistant pendant 28 ans à la conquête française. Capturé en 1898, il mourut en exil au Gabon. Ses stratégies militaires sont étudiées dans les académies.",
      heritage: "Résistance anticoloniale",
      image: "/images/historic/Almamy_Samory_Touré.jpg",
      coordinates: { lat: 10.4, lng: -9.5 },
      architect: "Fortifications militaires wassoulou",
      materials: "Terre battue, palissades",
      category: "resistance"
    }
  ];

  // Périodes historiques avec chronologie réelle
  const historicalPeriods = [
    {
      period: "Royaumes précoloniaux",
      timespan: "XIe-XIXe siècles",
      description: "Empires du Mali, Songhaï, royaumes du Fouta-Djalon, États mandingues",
      sites: 2,
      color: "from-amber-500 to-orange-500",
      icon: Castle,
      textColor: "text-amber-600"
    },
    {
      period: "Résistances et conquête",
      timespan: "1850-1900",
      description: "El Hadj Omar Tall, Samory Touré, Alpha Yaya, résistance à la colonisation",
      sites: 3,
      color: "from-red-500 to-rose-500",
      icon: Award,
      textColor: "text-red-600"
    },
    {
      period: "Époque coloniale",
      timespan: "1890-1958",
      description: "Administration française, infrastructures coloniales, mouvements d'indépendance",
      sites: 2,
      color: "from-blue-500 to-indigo-500",
      icon: History,
      textColor: "text-blue-600"
    },
    {
      period: "Guinée indépendante",
      timespan: "1958-présent",
      description: "Ahmed Sékou Touré, République de Guinée, patrimoine national",
      sites: 1,
      color: "from-emerald-500 to-green-500",
      icon: Users,
      textColor: "text-emerald-600"
    }
  ];

  const totalSites = historicSites.length;
  const totalVisitors = historicSites.reduce((sum, site) => {
    const visitors = parseInt(site.visitors.replace(/[^\d]/g, ''));
    return sum + visitors;
  }, 0);

  // Couleurs thématiques cohérentes
  const getCategoryColor = (category) => {
    const colors = {
      independence: "border-emerald-500 bg-emerald-50 text-emerald-700",
      resistance: "border-red-500 bg-red-50 text-red-700",
      religious: "border-primary-500 bg-primary-50 text-primary-700",
      cultural: "border-blue-500 bg-blue-50 text-blue-700",
      traditional: "border-amber-500 bg-amber-50 text-amber-700"
    };
    return colors[category] || "border-gray-500 bg-gray-50 text-gray-700";
  };

  const StatCard = ({ icon: Icon, title, value, subtitle, gradient, iconColor }) => (
    <div className="group relative h-full">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-primary-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
      <div className="relative h-full bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-center">
          <div className={`p-4 rounded-2xl ${gradient} bg-opacity-10 mr-6`}>
            <Icon className={`h-8 w-8 ${iconColor}`} />
          </div>
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-gray-900 mb-1">{value}</h3>
            <p className="text-gray-700 font-semibold text-lg">{title}</p>
            {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
          </div>
        </div>
      </div>
    </div>
  );

  const SiteCard = ({ site }) => (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-primary-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
      <div className="relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
        <div className="relative h-64 overflow-hidden">
          <img 
            src={site.image} 
            alt={site.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            onError={(e) => {
              e.target.src = "/images/patrimoine/default-historic.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          
          {/* Badge année */}
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
            <span className="text-sm font-bold text-gray-800">{site.year}</span>
          </div>
          
          {/* Badge période */}
          <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full">
            <span className="text-sm font-medium">{site.period}</span>
          </div>
          
          {/* Étoile */}
          <div className="absolute top-4 left-4 bg-yellow-500 p-2 rounded-full shadow-lg">
            <Star className="h-4 w-4 text-white fill-current" />
          </div>
        </div>
        
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900 line-clamp-2 leading-tight">{site.name}</h3>
          </div>
          
          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="h-5 w-5 mr-3 text-gray-400" />
            <span className="text-base">{site.location}, {site.region}</span>
          </div>
          
          <p className="text-gray-700 text-base mb-6 line-clamp-3 leading-relaxed">{site.description}</p>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Importance</span>
              <span className="font-semibold text-blue-600">{site.importance}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">État</span>
              <span className="font-semibold text-emerald-600">{site.status}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Visiteurs</span>
              <span className="font-semibold text-primary-600">{site.visitors}</span>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-6">
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">{site.details}</p>
            <div className="flex items-center justify-between">
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium border ${getCategoryColor(site.category)}`}>
                {site.heritage}
              </span>
              {/* <button className="flex items-center text-blue-600 hover:text-blue-800 font-semibold group/btn transition-colors">
                Découvrir
                <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const PeriodCard = ({ period, index }) => {
    const Icon = period.icon;
    return (
      <div className="group relative h-full">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-primary-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
        <div className={`relative h-full bg-gradient-to-br ${period.color} rounded-xl p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}>
          <div className="flex items-center justify-between mb-6">
            <Icon className="h-10 w-10 text-white/90" />
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-sm font-bold">{period.sites} sites</span>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-3">{period.period}</h3>
          <p className="text-white/90 text-lg font-medium mb-4">{period.timespan}</p>
          <p className="text-white/80 text-base leading-relaxed">{period.description}</p>
          
          <div className="mt-6 flex items-center">
            <Clock className="h-5 w-5 mr-3" />
            <span className="text-sm font-medium">Période #{index + 1}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <AppLayout 
      title={seoData.title}
      description={seoData.description}
      keywords={seoData.keywords}
      canonical={seoData.canonical}
      type={seoData.type}
    >
      <Head>
        {/* Métadonnées de base pour le patrimoine historique */}
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:image" content="/images/historic/patrimoine-historique-guinee.jpg" />
        <meta property="og:site_name" content="DGPBP - Direction Générale du Patrimoine Bâti Public" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content="/images/historic/patrimoine-historique-guinee.jpg" />
        
        {/* Canonical */}
        <link rel="canonical" href={seoData.canonical} />

        {/* Schema.org JSON-LD pour le patrimoine historique */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": seoData.title,
            "description": seoData.description,
            "url": "https://dgpbp.gov.gn" + seoData.canonical,
            "mainEntity": {
              "@type": "ItemList",
              "name": "Sites Historiques du Patrimoine Guinéen",
              "description": "Collection authentique des principaux monuments et sites historiques de République de Guinée",
              "numberOfItems": historicSites.length,
              "itemListElement": historicSites.map((site, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "HistoricalBuilding",
                  "name": site.name,
                  "description": site.description,
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": site.location,
                    "addressRegion": site.region,
                    "addressCountry": "GN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": site.coordinates.lat,
                    "longitude": site.coordinates.lng
                  },
                  "dateCreated": site.year,
                  "historicalSignificance": site.importance,
                  "maintenanceStatus": site.status,
                  "image": site.image,
                  "architect": site.architect,
                  "material": site.materials,
                  "culturalHeritage": site.heritage
                }
              }))
            },
            "about": {
              "@type": "Thing",
              "name": "Patrimoine Historique de République de Guinée",
              "description": "Ensemble des monuments, sites archéologiques et lieux de mémoire d'importance historique et culturelle nationale"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Accueil",
                  "item": "https://dgpbp.gov.gn/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Patrimoine Bâti",
                  "item": "https://dgpbp.gov.gn/patrimoine"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Patrimoine Historique",
                  "item": "https://dgpbp.gov.gn/patrimoine/historique"
                }
              ]
            },
            "publisher": {
              "@type": "GovernmentOrganization",
              "name": "Direction Générale du Patrimoine Bâti Public",
              "alternateName": "DGPBP",
              "url": "https://dgpbp.gov.gn",
              "logo": {
                "@type": "ImageObject",
                "url": "https://dgpbp.gov.gn/images/logo/logo-dgpbp.png"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ministère des Travaux Publics",
                "addressLocality": "Conakry",
                "addressCountry": "GN"
              }
            }
          })}
        </script>

        {/* Schema.org pour la données touristiques */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristAttraction",
            "name": "Circuit du Patrimoine Historique Guinéen",
            "description": "Découverte guidée des sites historiques majeurs et monuments emblématiques de République de Guinée",
            "location": {
              "@type": "Country",
              "name": "République de Guinée",
              "addressCountry": "GN"
            },
            "touristType": ["Tourisme culturel", "Tourisme historique", "Patrimoine UNESCO"],
            "availableLanguage": ["fr", "fr-GN"],
            "isAccessibleForFree": true,
            "hasMap": "https://dgpbp.gov.gn/patrimoine/carte"
          })}
        </script>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-primary-50/20">
        {/* Hero Section amélioré */}
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden" itemScope itemType="https://schema.org/TouristAttraction">
          {/* Background animé */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-primary-900 to-indigo-900"></div>
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Motifs décoratifs */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yellow-300 rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              itemProp="name"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                Patrimoine Historique
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                de Guinée
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-blue-100 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              itemProp="description"
            >
              Découvrez l'héritage authentique de la République de Guinée : des monuments emblématiques 
              aux sites de résistance, explorez l'histoire vivante de notre nation
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full">
                <span className="text-white font-semibold">UNESCO • Patrimoine Mondial</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full">
                <span className="text-white font-semibold">{totalSites} Sites Historiques</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full">
                <span className="text-white font-semibold">{totalVisitors.toLocaleString()}+ Visiteurs/an</span>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a 
                href={route('demandes.processus')}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:-translate-y-1 shadow-2xl inline-flex items-center"
                aria-label="Explorer la carte interactive du patrimoine historique"
              >
                <MapPin className="h-6 w-6 mr-3" aria-hidden="true" />
                Demande de logement
              </a>
              <a 
                href="#sites"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all duration-300 inline-flex items-center text-lg"
                aria-label="Découvrir les sites historiques"
              >
                <Camera className="h-6 w-6 mr-3" aria-hidden="true" />
                Découvrir les Sites
              </a>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Statistiques avec design amélioré */}
        <section className="relative mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Statistiques du patrimoine historique">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <StatCard 
              icon={Castle} 
              title="Sites Historiques" 
              value={totalSites}
              subtitle="Monuments authentiques"
              gradient="bg-blue-500"
              iconColor="text-blue-600"
            />
            <StatCard 
              icon={Users} 
              title="Visiteurs Annuels" 
              value={`${Math.round(totalVisitors/1000)}k+`}
              subtitle="Tourisme culturel"
              gradient="bg-emerald-500"
              iconColor="text-emerald-600"
            />
            <StatCard 
              icon={Award} 
              title="Périodes Couvertes" 
              value={historicalPeriods.length}
              subtitle="XIe siècle à nos jours"
              gradient="bg-primary-500"
              iconColor="text-primary-600"
            />
            <StatCard 
              icon={MapPin} 
              title="Régions" 
              value="8"
              subtitle="Couverture nationale"
              gradient="bg-orange-500"
              iconColor="text-orange-600"
            />
          </motion.div>
        </section>

        {/* Périodes Historiques */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24" aria-label="Chronologie historique">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Chronologie 
              <span className="ml-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary-600">
                Historique
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Du XIe siècle à nos jours, parcourez les grandes périodes qui ont façonné le patrimoine guinéen
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 h-full"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {historicalPeriods.map((period, index) => (
              <motion.div key={index} variants={fadeIn}>
                <PeriodCard period={period} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Sites Historiques */}
        <section id="sites" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24" aria-label="Sites et monuments historiques">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sites et Monuments 
              <span className="ml-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary-600">
                Historiques
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explorez les lieux emblématiques qui témoignent de la richesse historique et culturelle de la Guinée
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            itemScope 
            itemType="https://schema.org/ItemList"
          >
            {historicSites.map((site, index) => (
              <motion.div key={site.id} variants={fadeIn}>
                <SiteCard site={site} />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Section Informative avec design amélioré */}
        <section className="bg-gradient-to-br from-white via-blue-50/50 to-primary-50/30 py-24" aria-label="Conservation du patrimoine">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  Conservation du 
                  <span className="ml-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary-600">
                    Patrimoine Historique
                  </span>
                </h2>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  La Direction Générale du Patrimoine Bâti Public œuvre pour la préservation et la valorisation 
                  du patrimoine historique guinéen. Ces sites témoignent de notre riche histoire, 
                  de la résistance héroïque de nos ancêtres aux réalisations de la Guinée moderne.
                </p>
                <div className="space-y-6">
                  {[
                    { icon: History, text: "Inventaire scientifique du patrimoine", color: "text-blue-600" },
                    { icon: Award, text: "Restauration selon les normes UNESCO", color: "text-primary-600" },
                    { icon: Users, text: "Sensibilisation et éducation patrimoniale", color: "text-emerald-600" },
                    { icon: Camera, text: "Documentation photographique et digitale", color: "text-orange-600" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center group">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-blue-100 to-primary-100 mr-4 group-hover:scale-110 transition-transform">
                        <item.icon className={`h-6 w-6 ${item.color}`} />
                      </div>
                      <span className="text-gray-700 text-lg font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { 
                    title: "Résistance Anticoloniale", 
                    desc: "Samory Touré, El Hadj Omar Tall, Alpha Yaya : héros de la résistance",
                    gradient: "from-red-500 to-pink-500"
                  },
                  { 
                    title: "Architecture Traditionnelle", 
                    desc: "Styles mandingue, peul, soussou authentiques préservés",
                    gradient: "from-emerald-500 to-green-500"
                  },
                  { 
                    title: "Sites Religieux", 
                    desc: "Mosquées historiques, mares sacrées, lieux de pèlerinage",
                    gradient: "from-primary-500 to-violet-500"
                  },
                  { 
                    title: "Mémoire Nationale", 
                    desc: "Monuments de l'indépendance et figures emblématiques",
                    gradient: "from-amber-500 to-orange-500"
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className={`group relative p-6 rounded-2xl bg-gradient-to-br ${item.gradient} text-white hover:scale-105 transition-all duration-300 ${index % 2 === 1 ? 'mt-8' : ''}`}
                  >
                    <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action amélioré */}
        <section className="relative py-24 overflow-hidden" aria-label="Appel à l'action">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-primary-900 to-indigo-900"></div>
          <div className="absolute inset-0 bg-black/30"></div>
          
          <motion.div 
            className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Explorez Notre 
              <span className="ml-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                Patrimoine
              </span>
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto text-blue-100 leading-relaxed">
              Planifiez votre visite des sites historiques guinéens et découvrez l'authenticité de notre héritage culturel
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href={route('demandes.processus')}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-10 py-4 rounded-xl font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:-translate-y-1 shadow-2xl inline-flex items-center text-lg"
                aria-label="Accéder à la carte interactive du patrimoine"
              >
                <MapPin className="h-6 w-6 mr-3" aria-hidden="true" />
                Demande de logement
              </a>
              {/* <a 
                href="/patrimoine/localisations"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/20 transition-all duration-300 inline-flex items-center text-lg"
                aria-label="Voir tous les sites du patrimoine"
              >
                <Camera className="h-6 w-6 mr-3" aria-hidden="true" />
                Tous les Sites
              </a> */}
            </div>
          </motion.div>
        </section>
      </div>
    </AppLayout>
  );
} 