import { Head } from '@inertiajs/react';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import AppLayout from '@/Layouts/AppLayout';
import {
  PlayCircle, Calendar, X, Download, Share2, ChevronLeft, ChevronRight,
  Search, Filter, ChevronDown, Eye, ZoomIn, Facebook, Twitter, Linkedin,
  Instagram, Grid, List, SortAsc, SortDesc, FileText, Image as ImageIcon,
  Minimize, Maximize, Clock, FileX
} from 'lucide-react';
import { Skeleton, MediaCardSkeleton, MediaModalSkeleton } from "@/Components/Skeleton";
import { motion, AnimatePresence } from 'framer-motion';

// Composant d'image avec fallback
const SafeImage = ({ src, alt, className, onLoad, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = () => {
    console.log("Image error, using fallback");
    setImgSrc('/images/placeholder.jpg');
  };

  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  return (
    <div className="relative">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-lg">
          <div className="w-10 h-10 border-4 border-t-primary border-white/20 rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        className={className}
        onError={handleError}
        onLoad={handleLoad}
        {...props}
      />
    </div>
  );
};

// Composant de filtre amélioré
const FilterButton = ({ active, onClick, children }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`px-4 py-2 rounded-xl transition-all duration-300 ${
      active 
        ? 'bg-primary text-white shadow-lg shadow-primary/30' 
        : 'bg-white/10 backdrop-blur-sm text-white/90 hover:bg-white/20'
    }`}
  >
    {children}
  </motion.button>
);

// Composant de carte média amélioré
const MediaCard = ({ media, onClick, viewMode }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isImage = media.type === 'image';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => onClick(media)}
      className={`
        ${viewMode === 'grid' ? 'aspect-w-16 aspect-h-9' : 'flex gap-4'}
        group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl 
        transition-all duration-500 cursor-pointer
      `}
    >
      {isImage ? (
        <div className="relative overflow-hidden">
          <motion.img
            src={'/storage/'+media.url}
            alt={media.title}
            className="w-full h-full object-cover"
            initial={false}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
          />
          <motion.div
            initial={false}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
          >
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center justify-between text-white">
                <div className="space-y-2">
                  {media.category && (
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="inline-block px-3 py-1 bg-primary/80 backdrop-blur-sm rounded-full text-sm font-medium"
                    >
                      {media.category}
                    </motion.span>
                  )}
                  {media.title && (
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-lg font-bold line-clamp-2"
                    >
                      {media.title}
                    </motion.h3>
                  )}
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex space-x-2"
                >
                  <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                    <ZoomIn className="w-5 h-5" />
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      ) : (
        <div className="relative h-full">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={media.embed_url}
              title={media.title}
              className="w-full h-full rounded-t-xl"
              allowFullScreen
            />
          </div>
          <motion.div
            initial={false}
            animate={{ opacity: isHovered ? 1 : 0.9 }}
            className="p-6 bg-white"
          >
            <div className="flex items-center justify-between mb-3">
              {media.category && (
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {media.category}
                </span>
              )}
              {media.duration && (
                <span className="text-sm text-gray-500 flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {media.duration}
                </span>
              )}
            </div>
            {media.title && (
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                {media.title}
              </h3>
            )}
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

// Amélioration du modal de visualisation
const MediaModal = ({ media, onClose, onPrev, onNext, isLoading }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeout = useRef(null);

  useEffect(() => {
    const handleMouseMove = () => {
      setShowControls(true);
      if (controlsTimeout.current) {
        clearTimeout(controlsTimeout.current);
      }
      controlsTimeout.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (controlsTimeout.current) {
        clearTimeout(controlsTimeout.current);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed inset-0 bg-black/95 ${isFullscreen ? 'z-[9999]' : 'z-50'}`}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full h-full flex items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        {/* Contrôles supérieurs */}
        <motion.div
          initial={false}
          animate={{ opacity: showControls ? 1 : 0 }}
          className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10"
        >
          <div className="flex items-center space-x-4">
            {media.category && (
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl text-white">
                {media.category}
              </span>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-2 hover:bg-white/10 rounded-xl transition-colors text-white"
            >
              {isFullscreen ? <Minimize className="w-6 h-6" /> : <Maximize className="w-6 h-6" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-xl transition-colors text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={false}
          animate={{ opacity: showControls ? 1 : 0 }}
          className="absolute inset-y-0 left-4 flex items-center"
        >
          <button
            onClick={onPrev}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
        </motion.div>

        {/* Contenu principal */}
        <div className="relative max-w-7xl mx-auto px-4">
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-t-primary border-white/20 rounded-full animate-spin"></div>
            </div>
          ) : (
            media.type === 'image' ? (
              <SafeImage
                src={'/storage/'+media.url}
                alt={media.title}
                className="max-h-[85vh] max-w-full mx-auto rounded-xl shadow-2xl"
              />
            ) : (
              <div className="aspect-w-16 aspect-h-9 max-w-5xl mx-auto">
                <iframe
                  src={media.embed_url}
                  title={media.title}
                  className="w-full h-full rounded-xl"
                  allowFullScreen
                />
              </div>
            )
          )}
        </div>

        <motion.div
          initial={false}
          animate={{ opacity: showControls ? 1 : 0 }}
          className="absolute inset-y-0 right-4 flex items-center"
        >
          <button
            onClick={onNext}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </motion.div>

        {/* Informations inférieures */}
        <motion.div
          initial={false}
          animate={{ opacity: showControls ? 1 : 0 }}
          className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent"
        >
          <div className="max-w-3xl mx-auto text-white">
            <h3 className="text-2xl font-bold mb-2">{media.title}</h3>
            {media.description && (
              <p className="text-white/80">{media.description}</p>
            )}
            <div className="flex items-center space-x-4 mt-4">
              <span className="flex items-center text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(media.created_at).toLocaleDateString()}
              </span>
              {media.duration && (
                <span className="flex items-center text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {media.duration}
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default function MediaPage() {
  // États
  const [state, setState] = useState({
    medias: [],
    searchQuery: "",
    activeTab: "photo",
    selectedMedia: null,
    currentIndex: 0,
    selectedFilter: "all",
    isFullscreen: false,
    showShareMenu: false,
    isLoading: false,
    viewMode: 'grid',
    sortBy: 'date',
    sortOrder: 'desc',
    showFilters: false,
    currentPage: 1,
    itemsPerPage: 12,
    categories: ['Tous', 'Réunions', 'Formations', 'Événements', 'Présentations'],
    selectedCategory: 'Tous'
  });

  // Fonction utilitaire pour mettre à jour l'état
  const updateState = useCallback((updates) => {
    setState(prev => ({ ...prev, ...updates }));
  }, []);

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  // Gestion des filtres et de la recherche
  const filteredMedia = useCallback(() => {
    return state.medias.filter(media => {
      // Si la recherche est vide, on inclut tous les médias
      if (!state.searchQuery) {
        const matchesCategory = state.selectedCategory === 'Tous' || (media.category && media.category === state.selectedCategory);
        const matchesType = state.activeTab === 'photo' ? media.type === 'image' : media.type === 'video';
        return matchesCategory && matchesType;
      }

      // Sinon, on filtre selon les critères de recherche
      const matchesSearch = (media.title && media.title.toLowerCase().includes(state.searchQuery.toLowerCase())) ||
        (media.category && media.category.toLowerCase().includes(state.searchQuery.toLowerCase()));
      const matchesCategory = state.selectedCategory === 'Tous' || (media.category && media.category === state.selectedCategory);
      const matchesType = state.activeTab === 'photo' ? media.type === 'image' : media.type === 'video';
      return matchesSearch && matchesCategory && matchesType;
    }).sort((a, b) => {
      const order = state.sortOrder === 'asc' ? 1 : -1;
      switch (state.sortBy) {
        case 'title':
          // Gérer le cas où l'un des titres est null ou undefined
          if (!a.title && !b.title) return 0;
          if (!a.title) return order;
          if (!b.title) return -order;
          return order * a.title.localeCompare(b.title);
        case 'date':
          // Utiliser created_at si published_at n'existe pas
          const dateA = a.published_at || a.created_at;
          const dateB = b.published_at || b.created_at;
          if (!dateA && !dateB) return 0;
          if (!dateA) return order;
          if (!dateB) return -order;
          return order * (new Date(dateB) - new Date(dateA));
        default:
          return 0;
      }
    });
  }, [state.medias, state.searchQuery, state.selectedCategory, state.activeTab, state.sortBy, state.sortOrder]);

  // Pagination
  const paginatedMedia = useCallback(() => {
    const filtered = filteredMedia();
    const start = (state.currentPage - 1) * state.itemsPerPage;
    return filtered.slice(start, start + state.itemsPerPage);
  }, [filteredMedia, state.currentPage, state.itemsPerPage]);

  // Chargement des médias
  const fetchMedia = useCallback(async () => {
    updateState({ isLoading: true });

    // await delay(5000);
    try {
      const response = await axios.get('/api/medias', {
        params: {
          type: state.activeTab == 'photo' ? 'image' : state.activeTab,
          category: state.selectedCategory !== 'Tous' ? state.selectedCategory : undefined,
          search: state.searchQuery || undefined,
        }
      });
      updateState({ medias: response.data });
    } catch (error) {
      console.error('Erreur lors du chargement des médias:', error);
    } finally {
      updateState({ isLoading: false });
    }
  }, [state.activeTab, state.selectedCategory, state.searchQuery]);

  useEffect(() => {
    fetchMedia();
  }, [fetchMedia]);

  // Gestion du modal et de la navigation
  const handleMediaClick = useCallback((media, index) => {
    console.log("Média sélectionné:", media);

    // Vérifier si le média existe
    if (!media) {
      console.error("Média invalide:", media);
      return;
    }

    // S'assurer que le média a toutes les propriétés nécessaires
    const safeMedia = {
      ...media,
      id: media.id || `temp-${Date.now()}`,
      title: media.title || 'Sans titre',
      category: media.category || 'Non catégorisé',
      description: media.description || '',
      type: media.type || 'image',
      url: media.url || '',
      embed_url: media.embed_url || '',
      created_at: media.created_at || new Date().toISOString()
    };

    console.log("Média sécurisé:", safeMedia);

    updateState({
      selectedMedia: safeMedia,
      currentIndex: index,
      isLoading: true
    });
  }, []);

  const handleNavigation = useCallback((direction) => {
    const filtered = filteredMedia();
    const newIndex = direction === 'next'
      ? (state.currentIndex + 1) % filtered.length
      : state.currentIndex === 0 ? filtered.length - 1 : state.currentIndex - 1;

    const media = filtered[newIndex];
    // S'assurer que le média a toutes les propriétés nécessaires
    const safeMedia = {
      ...media,
      title: media.title || 'Sans titre',
      category: media.category || 'Non catégorisé',
      description: media.description || '',
      type: media.type || 'image',
      url: media.url || '',
      embed_url: media.embed_url || '',
      created_at: media.created_at || new Date().toISOString()
    };

    updateState({
      currentIndex: newIndex,
      selectedMedia: safeMedia,
      isLoading: true
    });
  }, [state.currentIndex, filteredMedia]);

  const isExternalUrl = (url) => {
    if (!url) return false;
    return url.startsWith('http://') || url.startsWith('https://');
  };

  return (
    <AppLayout>
      <Head title="Médiathèque DGPBP" />

      {/* Hero Section améliorée */}
      <div className="relative bg-gradient-to-br from-primary via-primary-600 to-primary-800 py-32">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl font-bold text-white mb-6"
            >
              Médiathèque DGPBP
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/90 mb-12"
            >
              Explorez notre collection de photos et vidéos
            </motion.p>

            {/* Barre de recherche et filtres */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col md:flex-row gap-4"
            >
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="w-full bg-white/10 backdrop-blur-sm text-white placeholder-white/60 px-12 py-4 rounded-xl border border-white/20 focus:border-white/40 focus:ring-2 focus:ring-white/10 transition-all duration-300"
                  value={state.searchQuery}
                  onChange={(e) => updateState({ searchQuery: e.target.value })}
                />
              </div>

              <div className="flex gap-2">
                <FilterButton
                  active={state.showFilters}
                  onClick={() => updateState({ showFilters: !state.showFilters })}
                >
                  <Filter className="w-5 h-5 mr-2" />
                  Filtres
                </FilterButton>
                <FilterButton
                  active={false}
                  onClick={() => updateState({ viewMode: state.viewMode === 'grid' ? 'list' : 'grid' })}
                >
                  {state.viewMode === 'grid' ? <Grid className="w-5 h-5" /> : <List className="w-5 h-5" />}
                </FilterButton>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contenu principal amélioré */}
      <div className="container mx-auto px-4 py-12">
        {/* Filtres étendus */}
        <AnimatePresence>
          {state.showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Catégorie
                    </label>
                    <select
                      value={state.selectedCategory}
                      onChange={(e) => updateState({ selectedCategory: e.target.value })}
                      className="w-full border-gray-300 rounded-xl focus:border-primary focus:ring-primary"
                    >
                      {state.categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Trier par
                    </label>
                    <select
                      value={state.sortBy}
                      onChange={(e) => updateState({ sortBy: e.target.value })}
                      className="w-full border-gray-300 rounded-xl focus:border-primary focus:ring-primary"
                    >
                      <option value="date">Date</option>
                      <option value="title">Titre</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Ordre
                    </label>
                    <button
                      onClick={() => updateState({ sortOrder: state.sortOrder === 'asc' ? 'desc' : 'asc' })}
                      className="w-full flex items-center justify-center px-4 py-2 border rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      {state.sortOrder === 'asc' ? (
                        <>
                          <SortAsc className="w-5 h-5 mr-2" />
                          Croissant
                        </>
                      ) : (
                        <>
                          <SortDesc className="w-5 h-5 mr-2" />
                          Décroissant
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tabs améliorés */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-1.5 inline-flex">
            <FilterButton
              active={state.activeTab === 'photo'}
              onClick={() => updateState({ activeTab: 'photo' })}
            >
              <ImageIcon className="w-5 h-5 mr-2" />
              Photos
            </FilterButton>
            <FilterButton
              active={state.activeTab === 'video'}
              onClick={() => updateState({ activeTab: 'video' })}
            >
              <PlayCircle className="w-5 h-5 mr-2" />
              Vidéos
            </FilterButton>
          </div>
        </div>

        {/* Grille de médias */}
        <div className={`grid ${
          state.viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        } gap-6`}>
          <AnimatePresence>
            {state.isLoading ? (
              Array.from({ length: 12 }).map((_, index) => (
                <MediaCardSkeleton key={index} />
              ))
            ) : (
              paginatedMedia().map((media, index) => (
                <MediaCard
                  key={media.id}
                  media={media}
                  onClick={() => handleMediaClick(media, index)}
                  viewMode={state.viewMode}
                />
              ))
            )}
          </AnimatePresence>
        </div>

        {/* Pagination améliorée */}
        <div className="flex justify-center mt-12">
          <div className="inline-flex rounded-xl overflow-hidden shadow-lg">
            <button
              onClick={() => updateState({ currentPage: state.currentPage - 1 })}
              disabled={state.currentPage === 1}
              className="px-6 py-3 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white border-r border-gray-200 transition-colors flex items-center"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Précédent
            </button>
            <div className="px-6 py-3 bg-white border-r border-gray-200 font-medium">
              {state.currentPage}
            </div>
            <button
              onClick={() => updateState({ currentPage: state.currentPage + 1 })}
              disabled={state.currentPage * state.itemsPerPage >= filteredMedia().length}
              className="px-6 py-3 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white transition-colors flex items-center"
            >
              Suivant
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>

        {/* Modal de visualisation */}
        <AnimatePresence>
          {state.selectedMedia && (
            <MediaModal
              media={state.selectedMedia}
              onClose={() => updateState({ selectedMedia: null })}
              onPrev={() => handleNavigation('prev')}
              onNext={() => handleNavigation('next')}
              isLoading={state.isLoading}
            />
          )}
        </AnimatePresence>
      </div>
    </AppLayout>
  );
}