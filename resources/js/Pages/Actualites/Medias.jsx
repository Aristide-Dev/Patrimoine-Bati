import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { PlayCircle, Calendar, Search, Filter, ChevronDown } from 'lucide-react';

const photos = [
  {
    id: 1,
    title: "Réunion de travail à la MAMRI",
    image: "https://scontent.fcky4-1.fna.fbcdn.net/v/t39.30808-6/466874192_872730165068095_4636350882492527928_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zf9RGpLoC3sQ7kNvgEMpZwz&_nc_zt=23&_nc_ht=scontent.fcky4-1.fna&_nc_gid=AeQ7ApZiBT54dRgKqB2u0AJ&oh=00_AYAcbtfsZu8z7_U6YWEmX7i4dNEbwqGh9R7EV4xaNbP6uQ&oe=676B6B20",
    date: "14 novembre 2024",
    category: "Réunions",
  },
  {
    id: 2,
    title: "Atelier sur la mobilisation des ressources",
    image: "https://i2.wp.com/mbudget.gov.gn/wp-content/uploads/436447119_730909015916878_9201247975803841543_n-1024x768.jpg",
    date: "09 avril 2024",
    category: "Ateliers",
  },
  {
    id: 3,
    title: "Visite de délégation internationale",
    image: "https://www.guinee360.com/wp-content/uploads/2023/06/355670224_657403483088572_1165891742497353360_n-jpg.webp",
    date: "21 juin 2023",
    category: "Visites",
  },
  {
    id: 4,
    title: "La MAMRI organise sa quatrième session du Cadre de Dialogue et de Concertation",
    image: "https://scontent.fcky4-1.fna.fbcdn.net/v/t39.30808-6/467923416_877693514571760_788362902770483467_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=sKZsVyIXwjIQ7kNvgHRhlkB&_nc_zt=23&_nc_ht=scontent.fcky4-1.fna&_nc_gid=AuGOYvHoy_JfTxq4BD8RaI6&oh=00_AYC_z-LQrKO4CGgDo-ZQiLpspPpCPfKl8jj5Qs7H4frKGg&oe=676B74C6",
    date: "22 Nov 2024",
    category: "Dialogue et de Concertation",
  },
  {
    id: 5,
    title: "Octobre Rose | la MAMRI et l’ADAZZ s’engagent.",
    image: "https://scontent.fcky4-1.fna.fbcdn.net/v/t39.30808-6/465407841_862448009429644_3314792589980233779_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=IjfNrimlkfEQ7kNvgEWBcHu&_nc_zt=23&_nc_ht=scontent.fcky4-1.fna&_nc_gid=Aqj0IDzp-182nMTHE-D2bV6&oh=00_AYCsK8t0uQLDyvWkHl-zt08-KMkUAyG14hLr2YqAAm3QKg&oe=676B6E68",
    date: "231 Oct 2024",
    category: "Visites",
  },
  {
    id: 6,
    title: "Suivi des instructions du CoPil | rencontre technique avec les cadres du Ministère des Mines et de la Géologie",
    image: "https://scontent.fcky4-1.fna.fbcdn.net/v/t39.30808-6/464383776_856757579998687_2673488615872934225_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=OmnCRBdTPn8Q7kNvgGXrRqc&_nc_zt=23&_nc_ht=scontent.fcky4-1.fna&_nc_gid=AI2oMkmOdhQhtTGyywVcnPi&oh=00_AYD9y6VP_QbmKbdM5P85eQTLVASzTeQUP-PRXlDvHNs00Q&oe=676B6C16",
    date: "24 Oct 2024",
    category: "Suivi",
  },
];

const videos = [
  {
    id: 1,
    title: "Formation TADAT des agents de la DNI",
    embedUrl: "https://www.youtube.com/embed/4fpxKpVgoIY",
    date: "17 mai 2021",
    duration: "02:18",
    category: "Formation",
  },
  {
    id: 2,
    title: "MAMRI | Réunion du Comité de Pilotage",
    embedUrl: "https://www.youtube.com/embed/mLwgjL2nW9A",
    date: "11 novembre 2022",
    duration: "10:11",
    category: "Réunions",
  },
  {
    id: 3,
    title: "Présentation de la Mission d'Appui à la Mobilisation des Ressources Internes",
    embedUrl: "https://www.youtube.com/embed/Bk6VE3pbV3M",
    date: "4 mai 2022",
    duration: "06:04",
    category: "Présentation",
  },
  {
    id: 4,
    title: "Webinaire Havas Horizons Mobilisation des ressources internes en Afrique, croissance et inclusion",
    embedUrl: "https://www.youtube.com/embed/ixruQqYnRFc",
    date: "3 févr. 2021",
    duration: "01:33:00",
    category: "Présentation",
  },
  {
    id: 5,
    title: "Mobiliser les ressources intérieures en situation post crise dans les pays en développement",
    embedUrl: "https://www.youtube.com/embed/b_T3tJ6NW-o",
    date: "3 févr. 2021",
    duration: "01:43:55",
    category: "Mobilisation",
  },
];

export default function MediaPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("photos");

  return (
    <AppLayout>
      <Head 
       title="Bienvenue"
       description="Plateforme d'appui à la mobilisation des ressources internes"
      />
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Médiathèque MAMRI</h1>
            <p className="text-xl text-white/90 mb-12">
              Explorez notre collection de photos et vidéos retraçant les moments clés de nos activités.
            </p>

            {/* Barre de recherche */}
            <div className="flex items-center gap-4 max-w-2xl mx-auto">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60" />
                <input
                  type="text"
                  placeholder="Rechercher dans la médiathèque..."
                  className="w-full bg-white/10 backdrop-blur-sm text-white placeholder-white/60 px-12 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white/20 transition-colors flex items-center gap-2">
                <Filter size={20} />
                Filtrer
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl shadow-lg p-1 inline-flex">
            <button
              onClick={() => setActiveTab("photos")}
              className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                activeTab === "photos"
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              Photos
            </button>
            <button
              onClick={() => setActiveTab("videos")}
              className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                activeTab === "videos"
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              Vidéos
            </button>
          </div>
        </div>

        {/* Contenu Photos */}
        {activeTab === "photos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((photo) => (
              <div key={photo.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm mb-3">
                      {photo.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{photo.title}</h3>
                    <div className="flex items-center text-white/80">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">{photo.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Contenu Vidéos */}
        {activeTab === "videos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {video.category}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center">
                      <PlayCircle size={16} className="mr-1" />
                      {video.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <div className="flex items-center text-gray-500">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{video.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
        </AppLayout>
  );
}
