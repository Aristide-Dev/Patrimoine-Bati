import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { 
  Users, Target, Building2, ChevronRight, 
  FileText, Calendar, Award, Globe, Shield,
  BookOpen, Briefcase, MessageSquare, ArrowRight,
  CheckCircle, Star, Clock, MapPin,
} from 'lucide-react';

export default function AProposPage() {
  const historique = [
    { year: '2021', event: 'Création de la MAMRI par décret présidentiel' },
    { year: '2022', event: 'Lancement des premières réformes structurelles' },
    { year: '2023', event: 'Mise en place de la digitalisation des services' },
    { year: '2024', event: 'Extension des programmes de mobilisation' }
  ];

  const chiffresClés = [
    { label: 'Recettes mobilisées', value: '15.7 Mds GNF' },
    { label: 'Projets réalisés', value: '45+' },
    { label: 'Partenaires', value: '12' },
    { label: 'Agents formés', value: '500+' }
  ];

  const valeurs = [
    { icon: Shield, title: 'Intégrité', description: 'Transparence et éthique dans toutes nos actions' },
    { icon: Target, title: 'Excellence', description: 'Recherche constante de la performance' },
    { icon: Users, title: 'Collaboration', description: 'Travail d\'équipe et synergie' },
    { icon: Globe, title: 'Innovation', description: 'Modernisation continue des processus' }
  ];

  const linkedPages = [
    {
      title: "Mission et Objectifs",
      description: "Découvrez notre mission d'intensification et d'accélération de la mobilisation des ressources internes, ainsi que nos objectifs stratégiques pour le développement de la Guinée.",
      icon: Target,
      image: "/images/Armoiries-Republique-de-Guinee-V1-1.png",
      link: route('about.index'),
      highlights: [
        "Mobilisation des ressources",
        "Réformes structurelles",
        "Objectifs stratégiques"
      ]
    },
    {
      title: "Équipe et Départements",
      description: "Rencontrez notre équipe de professionnels dévoués et explorez nos différents départements spécialisés qui œuvrent ensemble pour atteindre nos objectifs.",
      icon: Users,
      image: "/images/408793365_755748986587354_4612216314183945735_n-735x400.jpg",
      link: route('about.index'),
      highlights: [
        "Structure organisationnelle",
        "Départements spécialisés",
        "Expertise sectorielle"
      ]
    },
    {
      title: "Mot du Coordinateur",
      description: "Message du Dr Mohamed Lamine DOUMBOUYA, Coordinateur Général de la MAMRI, sur notre vision et nos engagements pour l'avenir.",
      icon: MessageSquare,
      image: "/images/mohamed-lamine-doumbouya.png",
      link: route('about.index'),
      highlights: [
        "Vision stratégique",
        "Engagements",
        "Perspectives d'avenir"
      ]
    }
  ];

  return (
    <AppLayout>
      <Head title="À Propos - MAMRI" />

      {/* Hero Section Améliorée */}
      <div className="relative bg-gradient-to-r from-primary to-primary-800 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0')] bg-cover bg-center opacity-10" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold text-white mb-6">À Propos de la MAMRI</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Une institution dédiée à la mobilisation efficace des ressources pour 
            le développement durable de la Guinée
          </p>
          <div className="mt-12 flex justify-center space-x-6">
            <a href="#mission" className="bg-white text-primary px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Notre Mission
            </a>
            <a href="#contact" className="bg-primary-700 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-600 transition-colors">
              Nous Contacter
            </a>
          </div>
        </div>
      </div>

      {/* Présentation Principale */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 bg-gradient-to-r from-primary/10 to-transparent">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Mission d'Appui à la Mobilisation des Ressources Internes
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                La MAMRI est un organe stratégique rattaché à la Présidence de la République, 
                créée par le décret D/2021/064/PRG/SGG du 25 février 2021. Notre mission 
                principale est d'intensifier et d'accélérer la mobilisation des ressources 
                internes pour répondre aux besoins de financement de l'économie nationale.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Coordination des réformes fiscales et douanières",
                  "Modernisation des processus de collecte",
                  "Renforcement des capacités institutionnelles",
                  "Développement des partenariats stratégiques"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historique et Chiffres */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Timeline */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Notre Histoire</h3>
              {historique.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-24">
                    <span className="text-primary font-bold">{item.year}</span>
                  </div>
                  <div className="flex-grow pb-8 border-l-2 border-primary pl-8 relative">
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
                    <p className="text-gray-700">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chiffres clés */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Chiffres Clés</h3>
              <div className="grid grid-cols-2 gap-6">
                {chiffresClés.map((stat, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Newsletter Section */}
<section className="py-20 bg-gradient-to-r from-primary to-primary-800">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold text-white mb-6">
      Restez informé
    </h2>
    <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
      Abonnez-vous à notre newsletter pour recevoir les dernières actualités, initiatives, 
      et opportunités pour contribuer au développement de la Guinée.
    </p>
    <form className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
      <input
        type="email"
        placeholder="Entrez votre email"
        className="w-full md:w-auto px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-light"
        required
      />
      <button
        type="submit"
        className="bg-white text-primary px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
      >
        S’abonner
      </button>
    </form>
    <p className="text-sm text-white/80 mt-6">
      Nous respectons votre vie privée. Votre adresse email ne sera jamais partagée.
    </p>
  </div>
</section>


      {/* Nouvelle section pour les pages liées */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">En Savoir Plus</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explorez en détail nos différentes sections pour mieux comprendre notre organisation
              et notre engagement envers le développement de la Guinée
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {linkedPages.map((page, idx) => (
              <div key={idx} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={page.image}
                    alt={page.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <page.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{page.title}</h3>
                  <p className="text-gray-600 mb-6">{page.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {page.highlights.map((point, pidx) => (
                      <div key={pidx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-primary mr-2" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={page.link}
                    className="inline-flex items-center text-primary hover:text-primary-700 font-medium group"
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {valeurs.map((valeur, idx) => (
              <div key={idx} className="text-center group hover:bg-primary hover:text-white rounded-xl p-6 transition-all duration-300">
                <valeur.icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:text-white transition-colors" />
                <h3 className="text-xl font-bold mb-2">{valeur.title}</h3>
                <p className="text-gray-600 group-hover:text-white/90">{valeur.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
