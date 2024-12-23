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
    title: "Réunion | Mission d’évaluation du potentiel fiscal en Guinée par le FMI",
    date: "14 novembre 2024",
    image: "https://scontent.fcky4-1.fna.fbcdn.net/v/t39.30808-6/466874192_872730165068095_4636350882492527928_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zf9RGpLoC3sQ7kNvgEMpZwz&_nc_zt=23&_nc_ht=scontent.fcky4-1.fna&_nc_gid=AyDuXHtsP5zdVHJW9h5u-jH&oh=00_AYD2V14RsAiQZh5cKQzHcMFLOGJfN1WnxXjswUOlwkpeYA&oe=676B32E0",
    excerpt: "Une équipe du FMI, sous la direction de M. BADY EBE, Conseiller en Analyses macroéconomiques et budgétaires, a été reçue à la MAMRI."
  },
  {
    id: 2,
    title: "Réunion MAMRI – Ministère du Budget",
    date: "09 avril 2024",
    image: "https://i2.wp.com/mbudget.gov.gn/wp-content/uploads/436447119_730909015916878_9201247975803841543_n-1024x768.jpg?ssl=1",
    excerpt: "L’objectif de cette" + " rencontre était d’évaluer l’avancement des projets de réformes identifiés lors des précédents Comités de Pilotage (CoPil) de la MAMRI. Parmi les sujets abordés, on peut citer\n La modernisation du processus de validation des listes minières."
  },
  {
    id: 3,
    title: "Le comité de pilotage de la MAMRI s’engage à améliorer la mobilisation des ressources internes de la Guinée",
    date: "21 Juin 2023",
    image: "https://www.guinee360.com/wp-content/uploads/2023/06/355670224_657403483088572_1165891742497353360_n-jpg.webp",
    excerpt: "Selon le Général de Brigade Amara Camara, le monde traverse une crise multiforme qui affecte l’économie guinéenne."
  },
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
    description: "Découvrez l’historique, le cadre juridique, l’organisation et les partenaires qui façonnent la MAMRI.",
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
      <section className="relative h-[750px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://presidence.gov.gn/wp-content/uploads/2024/12/CoverSite-PRG.jpg"
            alt="MAMRI Hero"
            className="w-full h-full object-left transform scale-105 animate-slow-zoom"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" /> */}
        </div>

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="w-52 sm:w-80 md:w-xl lg:w-full max-w-2xl text-white animate-fade-in-up">
            <span className="hidden md:inline-block px-4 py-2 bg-primary/90 text-white rounded-full text-sm font-medium mb-6 transform hover:scale-105 transition-transform uppercase">
              Mission d'Appui à la Mobilisation des Ressources Internes
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              Construire une Guinée plus forte par la Mobilisation des Ressources Internes
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
