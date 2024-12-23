import React, { useState, useEffect, useCallback } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { 
  PlayCircle, Calendar, X, Download, Share2, ChevronLeft, ChevronRight,
  Search, Filter, ChevronDown, Eye, ZoomIn, Facebook, Twitter, Linkedin, 
  Whatsapp, Maximize2, Minimize2
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

const categories = [...new Set([...photos, ...videos].map(item => item.category))];

export default function MediaPage() {
  const [state, setState] = useState({
    searchQuery: "",
    activeTab: "photos",
    selectedImage: null,
    currentImageIndex: 0,
    selectedFilter: "all",
    isFullscreen: false,
    showShareMenu: false,
    isLoading: false,
    isZoomed: false,
    touchStart: null,
    touchEnd: null
  });

  const updateState = (updates) => {
    setState(prev => ({ ...prev, ...updates }));
  };

  // Optimisation des filtres avec useMemo
  const filteredItems = React.useMemo(() => {
    const items = state.activeTab === "photos" ? photos : videos;
    return items.filter(item => {
      const searchLower = state.searchQuery.toLowerCase();
      const matchesSearch = !state.searchQuery || 
        item.title.toLowerCase().includes(searchLower) ||
        item.category.toLowerCase().includes(searchLower);
      const matchesFilter = state.selectedFilter === "all" || 
        item.category === state.selectedFilter;
      return matchesSearch && matchesFilter;
    });
  }, [state.activeTab, state.searchQuery, state.selectedFilter]);

  // Gestion optimisée de la navigation
  const navigate = useCallback((direction) => {
    updateState({ isLoading: true });
    const newIndex = direction === 'next'
      ? (state.currentImageIndex + 1) % photos.length
      : state.currentImageIndex === 0 
        ? photos.length - 1 
        : state.currentImageIndex - 1;
    updateState({ currentImageIndex: newIndex });
  }, [state.currentImageIndex]);

  // Gestion du zoom
  const handleZoom = useCallback(() => {
    updateState({ isZoomed: !state.isZoomed });
  }, [state.isZoomed]);

  // Gestion optimisée du plein écran
  const toggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        updateState({ isFullscreen: true });
      } else {
        await document.exitFullscreen();
        updateState({ isFullscreen: false });
      }
    } catch (err) {
      console.error('Erreur de plein écran:', err);
    }
  }, []);

  // Gestion optimisée du téléchargement
  const handleDownload = useCallback(async () => {
    try {
      const response = await fetch(photos[state.currentImageIndex].image);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${photos[state.currentImageIndex].title}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Erreur lors du téléchargement:', error);
    }
  }, [state.currentImageIndex]);

  // Gestion du partage
  const handleShare = useCallback((platform) => {
    const url = photos[state.currentImageIndex].image;
    const title = photos[state.currentImageIndex].title;
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`
    };

    window.open(shareUrls[platform], '_blank');
    updateState({ showShareMenu: false });
  }, [state.currentImageIndex]);

  // Gestion du swipe sur mobile
  const handleTouchStart = (e) => {
    updateState({ touchStart: e.touches[0].clientX });
  };

  const handleTouchMove = (e) => {
    updateState({ touchEnd: e.touches[0].clientX });
  };

  const handleTouchEnd = () => {
    if (!state.touchStart || !state.touchEnd) return;
    
    const distance = state.touchStart - state.touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      navigate('next');
    } else if (isRightSwipe) {
      navigate('prev');
    }

    updateState({ touchStart: null, touchEnd: null });
  };

  // Gestion des raccourcis clavier
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (state.selectedImage) {
        const actions = {
          'ArrowLeft': () => navigate('prev'),
          'ArrowRight': () => navigate('next'),
          'Escape': () => updateState({ selectedImage: null }),
          'f': toggleFullscreen,
          'z': handleZoom
        };
        
        if (actions[e.key]) {
          e.preventDefault();
          actions[e.key]();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [state.selectedImage, navigate, toggleFullscreen, handleZoom]);

  // Gestion du chargement des images
  useEffect(() => {
    if (state.selectedImage) {
      const img = new Image();
      img.src = photos[state.currentImageIndex].image;
      img.onload = () => updateState({ isLoading: false });
    }
  }, [state.currentImageIndex, state.selectedImage]);

  return (
    <AppLayout>
      <Head title="Médiathèque MAMRI" />

      {/* Hero Section avec recherche et filtres */}
      <div className="relative bg-gradient-to-r from-primary to-primary-700 overflow-hidden">
        {/* ... (reste du code du hero inchangé) ... */}
      </div>

      {/* Contenu principal */}
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
        {/* ... (reste du code du contenu principal inchangé) ... */}
      </div>

      {/* Modal amélioré avec zoom et gestion tactile */}
      {state.selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
          onClick={() => updateState({ selectedImage: null })}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="relative max-w-7xl mx-auto px-4" 
            onClick={e => e.stopPropagation()}
          >
            {/* Barre d'outils supérieure */}
            <div className="absolute top-4 right-4 flex items-center space-x-2">
              <button
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                onClick={handleZoom}
              >
                {state.isZoomed ? (
                  <Minimize2 size={24} className="text-white" />
                ) : (
                  <Maximize2 size={24} className="text-white" />
                )}
              </button>
              <button
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                onClick={toggleFullscreen}
              >
                {state.isFullscreen ? (
                  <Minimize2 size={24} className="text-white" />
                ) : (
                  <Maximize2 size={24} className="text-white" />
                )}
              </button>
              <button
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                onClick={() => updateState({ selectedImage: null })}
              >
                <X size={24} className="text-white" />
              </button>
            </div>
            
            {/* Image avec zoom */}
            <div className="relative">
              {state.isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
                </div>
              )}
              <div className={`
                relative overflow-hidden transition-all duration-300
                ${state.isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}
              `}>
                <img
                  src={photos[state.currentImageIndex].image}
                  alt={photos[state.currentImageIndex].title}
                  className={`
                    max-w-full mx-auto rounded-lg transition-all duration-300
                    ${state.isLoading ? 'opacity-0' : 'opacity-100'}
                    ${state.isZoomed ? 'scale-150' : 'scale-100'}
                  `}
                  onClick={handleZoom}
                  onLoad={() => updateState({ isLoading: false })}
                />
              </div>
              
              {/* Boutons de navigation */}
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('prev');
                }}
              >
                <ChevronLeft size={24} className="text-white" />
              </button>
              
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('next');
                }}
              >
                <ChevronRight size={24} className="text-white" />
              </button>
            </div>

            {/* Informations et actions */}
            <div className="mt-4 text-white">
              <h3 className="text-xl font-bold mb-2">
                {photos[state.currentImageIndex].title}
              </h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                    {photos[state.currentImageIndex].category}
                  </span>
                  <span className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {photos[state.currentImageIndex].date}
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
                      onClick={() => updateState({ 
                        showShareMenu: !state.showShareMenu 
                      })}
                    >
                      <Share2 size={20} className="text-white" />
                    </button>
                    {state.showShareMenu && (
                      <div className="absolute right-0 mt-2 bg-white rounded-xl shadow-lg py-2 z-10">
                        {[
                          { icon: Facebook, label: 'Facebook', platform: 'facebook' },
                          { icon: Twitter, label: 'Twitter', platform: 'twitter' },
                          { icon: Linkedin, label: 'LinkedIn', platform: 'linkedin' },
                          { icon: Whatsapp, label: 'WhatsApp', platform: 'whatsapp' }
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