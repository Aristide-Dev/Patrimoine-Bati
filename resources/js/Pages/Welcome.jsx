import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import * as Icons from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState, useEffect, useCallback } from 'react';

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
  ChevronRight,
  ChevronLeft,
  Gavel,
  Scale,
  Shield,
  CheckCircle
}
  from 'lucide-react';

const news = [
  {
    id: 1,
    title: "Réunion | Mission d’évaluation du potentiel fiscal en Guinée par le FMI",
    date: "14 novembre 2024",
    image: "/images/actualites/Mission_d_evaluation_du_potentiel_fiscal_en_Guinée_par_le_FMI.jpg",
    excerpt: "Une équipe du FMI, sous la direction de M. BADY EBE, Conseiller en Analyses macroéconomiques et budgétaires, a été reçue à la MAMRI."
  },
  {
    id: 2,
    title: "Réunion | échanges fructueux entre la MAMRI et le Ministère des Transports",
    date: "09 Octobre 2024",
    image: "/images/actualites/echanges_fructueux_entre_la_MAMRI_et_le_Ministère_des_Transports.jpg",
    excerpt: "En présence des Directeurs Généraux, Directeurs Généraux Adjoints et Président du Conseil d'Administration des différentes entités du Ministère, la mission a présenté le rapport final relatif à l'identification des ressources et des réformes visant à renforcer la Mobilisation des Ressources au sein du Ministère."
  },
  {
    id: 3,
    title: "Le comité de pilotage de la MAMRI s’engage à améliorer la mobilisation des ressources internes de la Guinée",
    date: "21 Juin 2023",
    image: "/images/actualites/améliorer_la_mobilisation_des_ressources_internes_d_la_Guinée.webp",
    excerpt: "Selon le Général de Brigade Amara Camara, le monde traverse une crise multiforme qui affecte l’économie guinéenne."
  },
];

const directions = [
  {
    icon: Calculator,
    title: "Ressources Fiscales",
    description: "Optimisation de la collecte fiscale",
    href: route('directions.fiscales')
  },
  {
    icon: Building2,
    title: "Ressources Douanières",
    description: "Modernisation des douanes",
    href: route('directions.douanieres')
  },
  {
    icon: Coins,
    title: "Ressources Non Fiscales",
    description: "Diversification des revenus",
    href: route('directions.non_fiscales')
  },
  {
    icon: PiggyBank,
    title: "Maîtrise des Dépenses",
    description: "Gestion des exonérations",
    href: route('directions.depenses')
  },
  {
    icon: Binary,
    title: "Digitalisation",
    description: "Transformation numérique",
    href: route('directions.digitalisation')
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
    href: route('about.index')
  },
  {
    icon: Briefcase,
    title: "Missions",
    description: "Découvrez nos missions générales, nos niveaux d’intervention et nos thématiques clés.",
    href: route('about.missions')
  },
  {
    icon: Building2,
    title: "Les Directions de Projet",
    description: "Explorez nos directions dédiées aux ressources fiscales, douanières, non fiscales, maîtrise des dépenses et digitalisation.",
    href: route('directions.projets')
  },
  {
    icon: Newspaper,
    title: "Actualités et Ressources",
    description: "Consultez nos actualités, rapports, publications, médias et événements récents.",
    href: route('actualites.index')
  },
  {
    icon: Link,
    title: "Partenaires",
    description: "Informez-vous sur nos partenaires institutionnels et internationaux, leurs rôles et domaines d’expertise.",
    href: route('partenariats.index')
  },
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Accédez à notre documentation, cadres de référence, notes techniques et ressources informatives.",
    href: route('actualites.rapports')
  },
  {
    icon: Mail,
    title: "Contact",
    description: "Besoin d’aide ou d’informations supplémentaires ? Contactez-nous directement.",
    href: route('contact.index')
  },
];

const slides = [
  {
    image: 'images/hero/CoverSite-PRG.jpg',
    title: 'Construire une Guinée plus forte',
    description: 'Mobilisation des Ressources Internes pour un développement durable.',
    buttons: [
      { label: 'En savoir plus', href: route('about.index'), style: 'primary' },
      { label: 'Nous contacter', href: route('contact.index'), style: 'secondary' },
    ],
  },
  {
    image: 'images/hero/mot_du_coordinateur_cover.jpg',
    title: 'Renforcer les capacités fiscales',
    description: 'Des réformes innovantes pour élargir l’assiette fiscale.',
    buttons: [{ label: 'Découvrir les projets', href: route('directions.projets'), style: 'primary' }],
  },
  {
    image: 'images/hero/mamri_cover.jpg',
    title: 'Digitalisation et Traçabilité',
    description: 'Améliorer la gouvernance grâce à des outils modernes.',
    buttons: [
      { label: 'Explorer les initiatives', href: route('directions.digitalisation'), style: 'primary' },
    ],
  },
];

export default function Welcome() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState({});
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleHover = useCallback((id, value) => {
    setIsHovered(prev => ({ ...prev, [id]: value }));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    beforeChange: (_, next) => setActiveSlide(next),
    nextArrow: <Icons.ChevronRight className="slick-arrow slick-next" />,
    prevArrow: <Icons.ChevronLeft className="slick-arrow slick-prev" />,
    customPaging: i => (
      <div className={`w-3 h-3 rounded-full transition-all duration-300 ${i === activeSlide ? 'bg-primary-600 scale-125' : 'bg-white/50'}`} />
    ),
  };

  const fetchArticles = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(route('public.articles.featured'));
      setArticles(response.data);
      console.log("response.data",response.data);
    } catch (error) {
      console.error('Erreur lors du chargement des articles:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  return (
    <AppLayout>
      <Head title="Bienvenue" description="Plateforme d'appui à la mobilisation des ressources internes" />

      {/* Hero Section avec animations améliorées */}
      <section className="relative overflow-hidden">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative h-[50vh] min-h-[500px]">
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover transform scale-105 animate-ken-burns"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
              </div>
              <div className="relative container mx-auto px-4 h-full flex items-center">
                <div className="text-white max-w-2xl animate-fade-in-up">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl mb-10 leading-relaxed text-gray-200">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {slide.buttons.map((button, idx) => (
                      <a
                        key={idx}
                        href={button.href}
                        className={`group px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center transform hover:scale-105 ${button.style === 'primary'
                          ? 'bg-primary text-white hover:bg-primary-800'
                          : 'bg-white text-gray-900 hover:bg-gray-100'
                          }`}
                      >
                        {button.label}
                        <Icons.ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <section className="relative mx-auto bg-gray-100 w-full">
        <div className="container mx-auto px-4 py-20  bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Colonne gauche : Profil du Coordinateur */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/mohamed_lamine_doumbouya_coordinateur_mamri_2024.png"
                  alt="Dr Mohamed Lamine DOUMBOUYA"
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Dr Mohamed Lamine DOUMBOUYA</h3>
                  <p className="text-white/90">Coordonnateur Général de la MAMRI</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6 line-clamp-4">
                  "Notre mission est de renforcer la mobilisation des ressources internes pour
                  un développement durable de la Guinée."
                </p>
                <a
                  href={route('about.mot_Coordinateur')}
                  className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg 
                     shadow-lg hover:bg-primary-800 transition-all duration-300 group-hover:translate-y-[-2px]"
                >
                  Mot du Coordonnateur
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Colonne centrale : Chantiers de la transition */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-primary to-primary-800 text-white">
                <h2 className="text-2xl font-bold text-center">Chantiers de la Transition</h2>
              </div>
              <div className="p-6 space-y-6">
                {[
                  {
                    icon: Users,
                    title: "LA REFONDATION DE L'ETAT",
                    description: "Prôner un fonctionnement dépersonnalisé et dépolitisé des institutions."
                  },
                  {
                    icon: Scale,
                    title: "L'APAISEMENT SOCIOPOLITIQUE",
                    description: "Apaiser les esprits et détendre une atmosphère sociopolitique."
                  },
                  {
                    icon: Gavel,
                    title: "LES RÉFORMES INSTITUTIONNELLES",
                    description: "Modernisation et renforcement des institutions publiques."
                  },
                  {
                    icon: Shield,
                    title: "LA LUTTE CONTRE LES PRÉVARICATIONS",
                    description: "Combat contre la corruption et les détournements."
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group p-4 rounded-xl hover:bg-gray-50 transition-all duration-300
                       transform hover:translate-x-2"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <item.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Colonne droite : Mission */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="p-6 bg-gradient-to-r from-primary to-primary-800 rounded-t-2xl text-white">
                <h2 className="text-2xl font-bold text-center">Notre Mission</h2>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {[
                    "Intensifier la mobilisation des ressources internes pour le développement.",
                    "Moderniser les systèmes de collecte et de gestion des ressources.",
                    "Renforcer la transparence et l'efficacité des processus.",
                    "Développer des partenariats stratégiques nationaux et internationaux."
                  ].map((mission, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 group hover:translate-x-2 transition-transform"
                    >
                      <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <p className="text-gray-700">{mission}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    href={route('about.index')}
                    className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg
                       shadow-lg hover:bg-primary-800 transition-all duration-300 group"
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
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
        
      {/* <a href="/">
          <img src="/images/logo/Armoiries-Republique-de-Guinee-V2.png" alt="Logo de la MAMRI" className="w-1/2 md:w-1/4 mx-auto" />
        </a> */}
        <img src="/images/logo/Armoiries-Republique-de-Guinee-V2.png" alt="Logo de la MAMRI" className="w-1/2 rounded-full md:w-1/4 mx-auto bg-white" />
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
              href="#"
              className="bg-gray-100 text-primary hover:bg-white hover:text-primary-800 px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Contactez-nous
            </a>
            <a
              href="#"
              className="bg-primary-800 text-white hover:bg-primary px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </section>

      {/* Actualités */}
      <section className="py-16 bg-white">
        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
          </div>
        ) : (
          <>
            {/* Articles Grid */}
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">Actualités</h2>
                <a href={route('actualites.index')} className="flex items-center text-primary hover:text-primary-800">
                  Toutes les actualités
                  <ArrowRight size={20} className="ml-2" />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {articles?.map((item) => (
                  <article key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                      src={"/storage/"+item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <span className="text-sm text-gray-500">{new Date(item.published_at).toLocaleDateString()}</span>
                      <h3 className="text-xl font-semibold mt-2 mb-3">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.excerpt}</p>
                      <a
                        href={route('actualites.show', {slug:item.slug})}
                        // href={`/actualites/${item.id}`}
                        className="text-primary hover:text-primary-800 font-medium"
                      >
                        Lire la suite
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </>
        )}
      </section>

      <style jsx>{`
        /* Animations personnalisées */
        @keyframes ken-burns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-ken-burns {
          animation: ken-burns 20s ease-out infinite alternate;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        /* Styles du slider */
        .slick-dots {
          bottom: 2rem;
        }

        .slick-arrow {
          z-index: 10;
          width: 3rem;
          height: 3rem;
          background: white;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .slick-arrow:hover {
          background: #f3f4f6;
          transform: scale(1.1);
        }

        /* Autres styles personnalisés... */
      `}</style>
    </AppLayout>
  );
}
