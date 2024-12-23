import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { FileText, ArrowRight, Calendar } from 'lucide-react';

const reports = [
  {
    id: 1,
    title: "Rapport Annuel 2023",
    date: "15 janvier 2024",
    category: "Rapports Annuels",
    fileUrl: "#",
    description: "Ce rapport présente les activités et les réalisations de la MAMRI pour l'année 2023.",
  },
  {
    id: 2,
    title: "Analyse des réformes fiscales",
    date: "10 décembre 2023",
    category: "Réformes",
    fileUrl: "#",
    description: "Une analyse approfondie des réformes fiscales mises en œuvre par la MAMRI.",
  },
  {
    id: 3,
    title: "Étude sur la digitalisation",
    date: "20 novembre 2023",
    category: "Études",
    fileUrl: "#",
    description: "Une étude détaillée sur la transformation numérique des régies financières.",
  },
];

const categories = [
  { name: "Tous", href: "#tous" },
  { name: "Rapports Annuels", href: "?category=rapports-annuels" },
  { name: "Réformes", href: "?category=reformes" },
  { name: "Études", href: "?category=etudes" },
];

export default function RapportsPublications() {
  return (
    <AppLayout>
      <Head 
        title="Rapports et Publications"
        description="Consultez les rapports annuels, les études et les publications de la MAMRI."
      />

      
        {/* Titre principal */}
        <div className="bg-gradient-to-t from-primary to-primary-800 relative overflow-hidden">
          {/* <div className="absolute inset-0 bg-[url('https://scontent.fcky4-1.fna.fbcdn.net/v/t39.30808-6/242563153_221129380040121_6567925895488409499_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=1uESlPC7-egQ7kNvgGIjMkZ&_nc_zt=23&_nc_ht=scontent.fcky4-1.fna&_nc_gid=ALnqg5_1YksVk0pPrglfcg-&oh=00_AYAIFUQb-ZWA-V5rxLNOqNdDgXiPREjjoH93Ou-jWTgsfQ&oe=676B6417')] bg-contain bg-center bg-no-repeat opacity-80"></div> */}
          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-6xl font-bold text-white mb-6">
                Rapports et Publications
              </h1>
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Accédez aux rapports annuels, aux analyses des réformes et aux études menées par la MAMRI.
              </p>
            </div>
          </div>
        </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Titre principal */}

          {/* Catégories */}
          <div className="flex justify-center items-center space-x-4 mb-12">
            {categories.map((category, index) => (
              <a
                key={index}
                href={category.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200 rounded-lg transition"
              >
                {category.name}
              </a>
            ))}
          </div>

          {/* Liste des rapports */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reports.map((report) => (
              <div
                key={report.id}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary-500 text-white rounded-full text-xs font-medium mb-4">
                    {report.category}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {report.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{report.description}</p>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar className="mr-2" size={16} />
                    {report.date}
                  </div>
                  <a
                    href={report.fileUrl}
                    className="text-primary-500 hover:text-primary-700 font-medium flex items-center mt-auto"
                    download
                  >
                    Télécharger <ArrowRight className="ml-2" size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex space-x-2">
              <a
                href="#"
                className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300"
              >
                Précédent
              </a>
              <a
                href="#"
                className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
              >
                1
              </a>
              <a
                href="#"
                className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300"
              >
                2
              </a>
              <a
                href="#"
                className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300"
              >
                Suivant
              </a>
            </nav>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
