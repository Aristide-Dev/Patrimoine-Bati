import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { 
  PlayCircle, Calendar, X, Download, Share2, ChevronLeft, ChevronRight,
  Search, Filter, ChevronDown, Eye, ZoomIn, Facebook, Twitter, Linkedin, Instagram
} from 'lucide-react';




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
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Filtrage des éléments
  const filteredItems = activeTab === "photos" ? photos : videos;
  const filteredAndSearchedItems = filteredItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === "all" || item.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  // Navigation dans le modal
  const handlePrevImage = (e) => {
    e?.stopPropagation();
    setIsLoading(true);
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : photos.length - 1));
  };

  const handleNextImage = (e) => {
    e?.stopPropagation();
    setIsLoading(true);
    setCurrentImageIndex((prev) => (prev < photos.length - 1 ? prev + 1 : 0));
  };

  // Gestion du partage
  const handleShare = (platform) => {
    const url = photos[currentImageIndex].image;
    const title = photos[currentImageIndex].title;
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`
    };

    window.open(shareUrls[platform], '_blank');
    setShowShareMenu(false);
  };

  // Gestion du téléchargement
  const handleDownload = async () => {
    try {
      const response = await fetch(photos[currentImageIndex].image);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${photos[currentImageIndex].title}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Erreur lors du téléchargement:', error);
    }
  };

  // Gestion du plein écran
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (selectedImage) {
        if (e.key === 'ArrowLeft') handlePrevImage();
        if (e.key === 'ArrowRight') handleNextImage();
        if (e.key === 'Escape') setSelectedImage(null);
        if (e.key === 'f') toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage]);

  // Gestion du chargement des images
  useEffect(() => {
    if (selectedImage) {
      const img = new Image();
      img.src = photos[currentImageIndex].image;
      img.onload = () => setIsLoading(false);
    }
  }, [currentImageIndex, selectedImage]);

  return (
    <AppLayout>
      <Head title="Médiathèque MAMRI" />

      {/* Hero Section avec recherche et filtres */}
      <div className="relative bg-gradient-to-t from-primary to-primary-800 overflow-hidden">
        {/* <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0')] bg-cover bg-center opacity-10"></div> */}
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold text-white mb-6">
              Médiathèque MAMRI
            </h1>
            <p className="text-xl text-white/90 mb-12">
              Explorez notre collection de photos et vidéos retraçant les moments clés de nos activités
            </p>
            
            {/* Barre de recherche et filtres */}
            <div className="flex flex-col md:flex-row items-center gap-4 max-w-2xl mx-auto">
              <div className="flex-1 relative w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60" />
                <input
                  type="text"
                  placeholder="Rechercher dans la médiathèque..."
                  className="w-full bg-white/10 backdrop-blur-sm text-white placeholder-white/60 px-12 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-xl shadow-lg p-1 inline-flex">
              <button
                onClick={() => setActiveTab("photos")}
                className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === "photos"
                    ? "bg-primary text-white shadow-md transform scale-105"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                Photos ({photos.length})
              </button>
              <button
                onClick={() => setActiveTab("videos")}
                className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === "videos"
                    ? "bg-primary text-white shadow-md transform scale-105"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                Vidéos ({videos.length})
              </button>
            </div>
          </div>

          {/* Grille de contenu */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSearchedItems.map((item, index) => (
              activeTab === "photos" ? (
                <div
                  key={item.id}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                  onClick={() => {
                    setSelectedImage(item.image);
                    setCurrentImageIndex(index);
                    setIsLoading(true);
                  }}
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm mb-3">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-white/80">
                          <Calendar size={16} className="mr-2" />
                          <span className="text-sm">{item.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                            <ZoomIn size={20} className="text-white" />
                          </button>
                          <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                            <Share2 size={20} className="text-white" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src={item.embedUrl}
                      title={item.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {item.category}
                      </span>
                      <span className="text-sm text-gray-500 flex items-center">
                        <PlayCircle size={16} className="mr-1" />
                        {item.duration}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">{item.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                          <Eye size={20} className="text-gray-500" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                          <Share2 size={20} className="text-gray-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>

      {/* Modal amélioré */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl mx-auto px-4" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} className="text-white" />
            </button>
            
            <div className="relative">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
                </div>
              )}
              <img
                src={photos[currentImageIndex].image}
                alt={photos[currentImageIndex].title}
                className={`max-w-full max-h-[80vh] mx-auto rounded-lg transition-opacity duration-300 ${
                  isLoading ? 'opacity-0' : 'opacity-100'
                }`}
                onLoad={() => setIsLoading(false)}
              />
              
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                onClick={handlePrevImage}
              >
                <ChevronLeft size={24} className="text-white" />
              </button>
              
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                onClick={handleNextImage}
              >
                <ChevronRight size={24} className="text-white" />
              </button>
            </div>

            <div className="mt-4 text-white">
              <h3 className="text-xl font-bold mb-2">{photos[currentImageIndex].title}</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                    {photos[currentImageIndex].category}
                  </span>
                  <span className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {photos[currentImageIndex].date}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <button 
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    onClick={handleDownload}
                  >
                    <Download size={20} className="text-white" />
                  </button>
                  <div className="relative">
                    <button 
                      className="p-2 hover:bg-white/10 rounded-full transition-colors"
                      onClick={() => setShowShareMenu(!showShareMenu)}
                    >
                      <Share2 size={20} className="text-white" />
                    </button>
                    {showShareMenu && (
                      <div className="absolute right-0 mt-2 bg-white rounded-xl shadow-lg py-2 z-10">
                        {[
                          { icon: Facebook, label: 'Facebook', platform: 'facebook' },
                          { icon: Twitter, label: 'Twitter', platform: 'twitter' },
                          { icon: Linkedin, label: 'LinkedIn', platform: 'linkedin' },
                          { icon: X, label: 'WhatsApp', platform: 'whatsapp' }
                        ].map(({ icon: Icon, label, platform }) => (
                          <button
                            key={platform}
                            onClick={() => handleShare(platform)}
                            className="w-full px-4 py-2 flex items-center hover:bg-gray-100 text-gray-700"
                          >
                            <Icon size={20} className="mr-2" />
                            {label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </AppLayout>
  );
}