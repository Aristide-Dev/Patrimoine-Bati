import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { 
  ArrowRight,
  Calculator, 
  Building2, 
  Coins, 
  PiggyBank, 
  Binary,
  Target, 
  TrendingUp, 
  Users,
  Home,
  Newspaper,
  BarChart3,
  FileText,
  BookOpen,
  Link,
  Mail,
  HelpCircle,
  MessageSquare,
  Image,
  Calendar,
  Briefcase,
  PieChart,
  Boxes,
  FileBarChart,
  ChevronRight
} 
from 'lucide-react';

const news = [
  {
    id: 1,
    title: "Lancement du programme de digitalisation",
    date: "15 Mars 2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
    excerpt: "Le PBP lance son programme de transformation numérique des régies financières."
  },
  {
    id: 2,
    title: "Atelier sur la mobilisation des ressources",
    date: "12 Mars 2024",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400",
    excerpt: "Un atelier de formation sur les nouvelles méthodes de mobilisation des ressources."
  },
  {
    id: 3,
    title: "Partenariat avec l'Union Européenne",
    date: "10 Mars 2024",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400",
    excerpt: "Signature d'un accord de partenariat pour le renforcement des capacités."
  }
];

const directions = [
  {
    icon: Calculator,
    title: "Ressources Fiscales",
    description: "Optimisation de la collecte fiscale",
    href: "/directions/fiscales"
  },
  {
    icon: Building2,
    title: "Ressources Douanières",
    description: "Modernisation des douanes",
    href: "/directions/douanieres"
  },
  {
    icon: Coins,
    title: "Ressources Non Fiscales",
    description: "Diversification des revenus",
    href: "/directions/non-fiscales"
  },
  {
    icon: PiggyBank,
    title: "Maîtrise des Dépenses",
    description: "Gestion des exonérations",
    href: "/directions/depenses"
  },
  {
    icon: Binary,
    title: "Digitalisation",
    description: "Transformation numérique",
    href: "/directions/digitalisation"
  }
];

const missions = [
  {
    icon: Target,
    title: "Notre Mission",
    description: "Accroître la mobilisation des ressources internes pour le développement de la Guinée"
  },
  {
    icon: TrendingUp,
    title: "Nos Objectifs",
    description: "Optimiser la collecte des ressources fiscales et douanières"
  },
  {
    icon: Users,
    title: "Notre Approche",
    description: "Une gouvernance collégiale impliquant toutes les parties prenantes"
  }
];

// Présentation des différentes sections du site
const siteSections = [
  {
    icon: FileText,
    title: "À Propos",
    description: "Découvrez l’historique, le cadre juridique, l’organisation et les partenaires qui façonnent la PBP.",
    href: "/a-propos"
  },
  {
    icon: Briefcase,
    title: "Missions",
    description: "Découvrez nos missions générales, nos niveaux d’intervention et nos thématiques clés.",
    href: "/missions"
  },
  {
    icon: Building2,
    title: "Les Directions de Projet",
    description: "Explorez nos directions dédiées aux ressources fiscales, douanières, non fiscales, maîtrise des dépenses et digitalisation.",
    href: "/directions/fiscales"
  },
  {
    icon: Newspaper,
    title: "Actualités et Ressources",
    description: "Consultez nos actualités, rapports, publications, médias et événements récents.",
    href: "/actualites"
  },
  {
    icon: Link,
    title: "Partenariats",
    description: "Informez-vous sur nos partenaires institutionnels et internationaux, leurs rôles et domaines d’expertise.",
    href: "/partenariats"
  },
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Accédez à notre documentation, cadres de référence, notes techniques et ressources informatives.",
    href: "#"
  },
  {
    icon: Mail,
    title: "Contact",
    description: "Besoin d’aide ou d’informations supplémentaires ? Contactez-nous directement.",
    href: "/contact"
  },
];

export default function Welcome() {
  return (
    <AppLayout>
      <Head 
       title="Bienvenue"
       description="Plateforme d'appui à la mobilisation des ressources internes"
      />

      {/* Hero Section */}
      <section className="relative h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://prod.cdn-medias.jeuneafrique.com/cdn-cgi/image/q=auto,f=auto,metadata=none,width=1215,fit=cover/https://prod.cdn-medias.jeuneafrique.com/medias/2020/09/01/ja14072111150031.jpg"
            alt="PBP Hero"
            className="w-full h-full object-fill transform scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-primary/90 text-white rounded-full text-sm font-medium mb-6 transform hover:scale-105 transition-transform uppercase">
              Mission d'Appui à la Mobilisation des Ressources Internes
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Construire une Guinée plus forte par la mobilisation des ressources
            </h1>
            <p className="text-xl mb-10 leading-relaxed text-gray-200">
              Notre mission est de renforcer la capacité de la Guinée à mobiliser ses ressources internes 
              pour un développement durable et autonome.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/about"
                className="group bg-primary hover:bg-primary-800 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center transform hover:scale-105"
              >
                Découvrir notre mission
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/contact"
                className="group bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center transform hover:scale-105"
              >
                Nous contacter
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Missions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Ce que nous faisons</h2>
            <p className="text-xl text-gray-600">
              Découvrez notre mission, nos objectifs et notre approche pour le développement durable de la Guinée.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missions.map((mission, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center p-8 bg-white rounded-lg shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-lg"
              >
                <div className="flex items-center justify-center w-16 h-16 mb-4 bg-secondary-100 rounded-full">
                  <mission.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{mission.title}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {mission.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Directions de Projet */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">Nos Directions de Projet</h2>
            <p className="text-xl text-gray-100">Accédez rapidement aux principales initiatives visant à renforcer la mobilisation des ressources.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {directions.map((direction, index) => (
              <a
                key={index}
                href={direction.href}
                className="flex flex-col items-start p-6 bg-white rounded-lg shadow-md transform transition duration-200 hover:scale-105 hover:shadow-lg hover:bg-gray-100"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-secondary-100 mb-4">
                  <direction.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{direction.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{direction.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Le Comité de Pilotage de la PBP
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto text-justify">
            Le Comité de Pilotage est placé sous l’autorité du Président de la République. Il regroupe les ministres et responsables clés chargés de la mobilisation des ressources internes, ainsi que des personnalités qualifiées indépendantes.
          </p>

          {/* Organigramme */}
          <div className="flex flex-col items-center relative mx-auto shadow px-2 py-6 rounded-xl bg-white">
            {/* Niveau 1 : Président de la République */}
            <div className="mb-6 relative">
              <div className="inline-block bg-red-600 text-white px-6 py-3 rounded-md shadow-md font-semibold border-2 border-red-700">
                Président de la République
              </div>
            </div>

            {/* Ligne verticale de raccord */}
            <div className="w-0 h-6 border-l-4 border-gray-400"></div>

            {/* Niveau 2 : Ministres principaux */}
            <div className="flex items-start justify-center space-x-16 relative mb-8">
              {[
                {
                  title: "Ministre en charge",
                  role: "de l’économie et des finances",
                  bgColor: "bg-yellow-100",
                  textColor: "text-yellow-800",
                  borderColor: "border-yellow-300",
                },
                {
                  title: "Ministre en charge",
                  role: "du budget",
                  bgColor: "bg-yellow-100",
                  textColor: "text-yellow-800",
                  borderColor: "border-yellow-300",
                },
              ].map((minister, index) => (
                <div key={index} className="flex flex-col items-center relative">
                  {/* Ligne verticale */}
                  <div className="w-0 h-6 border-l-4 border-gray-400"></div>
                  {/* Box */}
                  <div
                    className={`${minister.bgColor} ${minister.textColor} px-4 py-2 rounded-md shadow-md font-medium border ${minister.borderColor} text-center`}
                  >
                    {minister.title}
                    <br />
                    {minister.role}
                  </div>
                </div>
              ))}
            </div>

            {/* Ligne horizontale vers le niveau 3 */}
            <div className="w-full flex justify-center relative mb-6">
              <div className="border-t-4 border-gray-400 w-full md:w-2/3 h-4"></div>
            </div>

            {/* Niveau 3 : Ministres et autres membres */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
              {[
                "Ministre en charge des mines et de la géologie",
                "Ministre en charge du plan et du développement économique",
                "Ministre en charge des télécommunications et de l’économie numérique",
                "Gouverneur de la Banque Centrale de la République de Guinée (BCRG)",
                "Coordinateur général du PBP Rapporteur du Comité de pilotage",
                "Personnalité qualifiée indépendante",
                "Personnalité qualifiée indépendante",
              ].map((texte, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  {/* Ligne verticale */}
                  <div className="w-0 h-6 border-l-4 border-gray-400"></div>
                  {/* Box */}
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-md shadow font-medium border border-green-300 text-sm text-center max-w-xs">
                    {texte}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto rounded-3xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="lg:w-3/4 bg-gray-50 w-full">
                <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl">
                Rôle et responsabilités
                </h2>
                <p className="mt-3 text-gray-800">
                Le Comité de Pilotage (COPIL) est chargé d’examiner, valider et superviser les initiatives stratégiques de la PBP. Il garantit une coordination interministérielle efficace et promeut des synergies avec les partenaires au développement.
                </p>
              </div>

              <div className="space-y-6 lg:space-y-10 bg-white p-5 w-full">
                <div className="flex gap-2 items-center">
                  <span className="shrink-0 inline-flex justify-center items-center size-[35px] rounded-full border border-red-800 bg-red-500 shadow-sm mx-auto">
                  </span>
                  <div className="grow">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    Direction suprême <span className='font-bold'>(Président)</span>
                    </h3>
                    <p className="mt-1 text-gray-600">
                      <ul>
                        <li>Le Président de la République (Président du COPIL)</li>
                        <li>Le Premier Ministre (Représentant du Président du COPIL)</li>
                      </ul>
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 items-center">
                  <span className="shrink-0 inline-flex justify-center items-center size-[35px] rounded-full border border-yellow-800 bg-yellow-500 shadow-sm mx-auto">
                  </span>
                  <div className="grow">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    Direction exécutive <span className='font-bold'>(Ministres principaux)</span>
                    </h3>
                    <p className="mt-1 text-gray-600">
                      <ul>
                        <li>Le Ministre de l’Economie et des Finances (1er VP)</li>
                        <li>Le Ministre du Budget (2ème VP)</li>
                      </ul>
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 items-center">
                  <span className="shrink-0 inline-flex justify-center items-center size-[35px] rounded-full border border-green-800 bg-green-500 shadow-sm mx-auto">
                  </span>
                  <div className="grow">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    Membres <span className='font-bold'>(Autres ministres et personnalités)</span>
                    </h3>
                    <p className="mt-1 text-gray-600">
                      <ul>
                        <li>Le Ministre chargé des Mines et de la Géologie</li>
                        <li>Le Ministre chargé des Télécommunications et de l’Economie numérique</li>
                        <li>Le Gouverneur de la Banque Centrale de la République de Guinée</li>
                        <li>Le Coordinateur général et Rapporteur du Comité de pilotage de la PBP</li>
                        <li>2 personnalités qualifiées indépendantes</li>
                        <li>Les Partenaires au développement (invités observateurs )</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Légende */}
          <div className="mt-12 bg-gray-50 rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Légende</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-red-600 rounded"></div>
                <span className="text-sm text-gray-600">Direction suprême (Président)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                <span className="text-sm text-gray-600">Direction exécutive (Ministres principaux)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="text-sm text-gray-600">Membres (Autres ministres et personnalités)</span>
              </div>
            </div>
          </div>

          {/* Détails supplémentaires */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Détails et Responsabilités</h3>
            <p className="text-gray-700 mb-6">
              Le Comité de Pilotage (COPIL) est chargé d’examiner, valider et superviser les initiatives stratégiques de la PBP. Il garantit une coordination interministérielle efficace et promeut des synergies avec les partenaires au développement.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Examine et valide les propositions de réforme soumises.</li>
              <li>Supervise la mise en œuvre des réformes et initiatives stratégiques.</li>
              <li>Évalue les résultats obtenus et décide des actions correctrices.</li>
              <li>Garantit une collaboration efficace entre les ministères et les partenaires.</li>
              <li>Assure le suivi de la mobilisation des ressources internes.</li>
            </ul>
          </div>
        </div>
      </section>



      {/* Présentation des Sections du Site */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Explorez l’ensemble de nos Sections</h2>
            <p className="text-xl text-gray-600">
              Naviguez parmi les différentes rubriques pour en savoir plus sur notre mission, nos initiatives, nos partenaires et nos ressources.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {siteSections.map((section, index) => (
              <a
                key={index}
                href={section.href}
                className="flex flex-col p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow hover:bg-gray-100 text-center items-center"
              >
                <div className="flex items-center justify-center w-16 h-16 mb-4 bg-secondary-100 rounded-full">
                  <section.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{section.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{section.description}</p>
                <span className="text-primary-700 hover:underline font-medium">En savoir plus</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      

      {/* Section Contact / FAQ */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ensemble, construisons l'avenir de la Guinée
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Découvrez comment nous pouvons collaborer pour renforcer la mobilisation 
            des ressources internes et contribuer au développement durable de notre pays.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Contactez-nous
            </a>
            <a 
              href="/about"
              className="bg-primary-800 text-white hover:bg-[#8B1429] px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </section>

      {/* Actualités */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Actualités</h2>
            <a href="/actualites" className="flex items-center text-primary hover:text-primary-800">
              Toutes les actualités
              <ArrowRight size={20} className="ml-2" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item) => (
              <article key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <a
                    href={`/actualites/${item.id}`}
                    className="text-primary hover:text-primary-800 font-medium"
                  >
                    Lire la suite
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      
    </AppLayout>
  );
}
