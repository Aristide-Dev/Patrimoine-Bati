import { Head } from '@inertiajs/react';
import React, { useState, useEffect, useCallback } from 'react';
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


  const handlePrevImage = (e) => {
    e?.stopPropagation();
    setState(prev => ({ ...prev, ...isLoading = true }));
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : state.medias.length - 1));
  };

  const handleNextImage = (e) => {
    e?.stopPropagation();
    setState(prev => ({ ...prev, ...isLoading = true }));
    setCurrentImageIndex((prev) => (prev < state.medias.length - 1 ? prev + 1 : 0));
  };




  const isExternalUrl = (url) => {
    if (!url) return false;
    return url.startsWith('http://') || url.startsWith('https://');
  };

  // Rendu des éléments média
  const renderMediaItem = useCallback((media, index) => {
    const isImage = media.type === 'image';
    const itemClasses = `
      ${state.viewMode === 'grid' ? 'aspect-w-16 aspect-h-9' : 'flex gap-2 items-center'}
      group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl 
      transition-all duration-300 transform hover:-translate-y-1 cursor-pointer
    `;

    // Vérifier si l'URL existe avant de rendre l'élément
    if (!media.url && isImage) {
      return null; // Ne pas afficher les images sans URL
    }

    if (!media.embed_url && !isImage) {
      return null; // Ne pas afficher les vidéos sans URL d'intégration
    }

    return (
      <div key={media.id || index} className={itemClasses} onClick={() => handleMediaClick(media, index)}>
        {isImage ? (
          <div className="relative overflow-hidden">
            <img
              src={isExternalUrl(media.url) ? media.url : `/storage/${media.url}`}
              alt={media.title || 'Image'}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              onError={(e) => {
                console.error('Erreur de chargement de la miniature:', e);
                e.target.src = '/images/placeholder.jpg'; // Image de remplacement
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between text-white">
                  <div>
                    {media.category && (
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-2">
                        {media.category}
                      </span>
                    )}
                    {media.title && (
                      <h3 className="text-lg font-bold line-clamp-2">{media.title}</h3>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                      <ZoomIn size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={media.embed_url}
                title={media.title || 'Vidéo'}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                {media.category && (
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {media.category}
                  </span>
                )}
                {media.duration && (
                  <span className="text-sm text-gray-500 flex items-center">
                    <PlayCircle size={16} className="mr-1" />
                    {media.duration}
                  </span>
                )}
              </div>
              {media.title && (
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                  {media.title}
                </h3>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }, [state.viewMode, handleMediaClick]);


  // Gestion du partage
  const handleShare = useCallback((platform) => {
    const media = state.selectedMedia;
    if (!media) return;

    const shareData = {
      title: media.title,
      url: isExternalUrl(media.url) ? media.url : `${window.location.origin}/storage/${media.url}`
    };

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareData.url)}&text=${encodeURIComponent(shareData.title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareData.url)}`,
    };

    window.open(shareUrls[platform], '_blank');
  }, [state.selectedMedia]);

  // Gestion du téléchargement
  const handleDownload = useCallback(async () => {
    const media = state.selectedMedia;
    if (!media || media.type !== 'image' || !media.url) return;

    try {
      const response = await fetch(isExternalUrl(media.url) ? media.url : `/storage/${media.url}`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;

      // Utiliser un nom de fichier par défaut si le titre est vide
      const fileName = media.title ? `${media.title}.jpg` : `image-${Date.now()}.jpg`;
      link.download = fileName;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Erreur lors du téléchargement:', error);
    }
  }, [state.selectedMedia]);

  // Gestion des raccourcis clavier
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!state.selectedMedia) return;

      const actions = {
        'ArrowLeft': () => handleNavigation('prev'),
        'ArrowRight': () => handleNavigation('next'),
        'Escape': () => updateState({ selectedMedia: null }),
      };

      if (actions[e.key]) {
        e.preventDefault();
        actions[e.key]();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [state.selectedMedia, handleNavigation]);

  // Ajoutons une fonction de débogage pour afficher l'état du média sélectionné
  useEffect(() => {
    if (state.selectedMedia) {
      console.log("État du média sélectionné:", {
        id: state.selectedMedia.id,
        title: state.selectedMedia.title,
        url: state.selectedMedia.url,
        type: state.selectedMedia.type,
        isLoading: state.isLoading
      });
    }
  }, [state.selectedMedia, state.isLoading]);

  return (
    <AppLayout>
      <Head title="Médiathèque DGPBP" />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-primary-800 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Médiathèque DGPBP</h1>
            <p className="text-xl text-white/90 mb-12">
              Explorez notre collection de photos et vidéos
            </p>

            {/* Barre de recherche et filtres */}
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="w-full bg-white/10 backdrop-blur-sm text-white placeholder-white/60 px-12 py-4 rounded-xl"
                  value={state.searchQuery}
                  onChange={(e) => updateState({ searchQuery: e.target.value })}
                />
              </div>

              {/* Contrôles supplémentaires */}
              <div className="flex gap-2">
                <button
                  onClick={() => updateState({ showFilters: !state.showFilters })}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl text-white flex items-center"
                >
                  <Filter className="mr-2" />
                  Filtres
                </button>
                <button
                  onClick={() => updateState({ viewMode: state.viewMode === 'grid' ? 'list' : 'grid' })}
                  className="p-2 bg-white/10 backdrop-blur-sm rounded-xl text-white"
                >
                  {state.viewMode === 'grid' ? <Grid /> : <List />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-6">
        {/* Filtres étendus */}
        {state.showFilters && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Catégorie
                </label>
                <select
                  value={state.selectedCategory}
                  onChange={(e) => updateState({ selectedCategory: e.target.value })}
                  className="w-full border-gray-300 rounded-lg"
                >
                  {state.categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Trier par
                </label>
                <select
                  value={state.sortBy}
                  onChange={(e) => updateState({ sortBy: e.target.value })}
                  className="w-full border-gray-300 rounded-lg"
                >
                  <option value="date">Date</option>
                  <option value="title">Titre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ordre
                </label>
                <button
                  onClick={() => updateState({ sortOrder: state.sortOrder === 'asc' ? 'desc' : 'asc' })}
                  className="flex items-center px-4 py-2 border rounded-lg"
                >
                  {state.sortOrder === 'asc' ? <SortAsc className="mr-2" /> : <SortDesc className="mr-2" />}
                  {state.sortOrder === 'asc' ? 'Croissant' : 'Décroissant'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl shadow-lg p-1 inline-flex">
            <button
              onClick={() => updateState({ activeTab: 'photo' })}
              className={`
                ${state.activeTab === 'photo' ? 'bg-primary text-white' : 'text-gray-500'}
                px-4 py-2 rounded-xl transition-colors duration-300
              `}
            >
              Photos
            </button>
            <button
              onClick={() => updateState({ activeTab: 'video' })}
              className={`
                ${state.activeTab === 'video' ? 'bg-primary text-white' : 'text-gray-500'}
                px-4 py-2 rounded-xl transition-colors duration-300
              `}
            >
              Vidéos
            </button>
          </div>
        </div>

        {/* Contenu des médias */}
        <div className={`grid ${state.viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'} gap-6`}>
          {state.isLoading ? (
            Array.from({ length: 12 }).map((_, index) => (
              <MediaCardSkeleton key={index} />
            ))
          ) : (
            paginatedMedia().map((media, index) => renderMediaItem(media, index))
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => updateState({ currentPage: state.currentPage - 1 })}
            disabled={state.currentPage === 1}
            className="px-4 py-2 bg-white rounded-l-xl border-r border-gray-300 disabled:opacity-50"
          >
            Précédent
          </button>
          <span className="px-4 py-2 bg-white border-r border-gray-300">
            {state.currentPage}
          </span>
          <button
            onClick={() => updateState({ currentPage: state.currentPage + 1 })}
            disabled={state.currentPage * state.itemsPerPage >= filteredMedia().length}
            className="px-4 py-2 bg-white rounded-r-xl border-l border-gray-300 disabled:opacity-50"
          >
            Suivant
          </button>
        </div>
      </div>

      {state.selectedMedia && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => updateState({ selectedMedia: null })}
        >
          <div
            className="relative w-full max-w-6xl px-4"
            onClick={e => e.stopPropagation()}
          >
            <div className="absolute top-4 right-4 flex space-x-2 z-10">
              <button
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                onClick={() => updateState({ showShareMenu: !state.showShareMenu })}
              >
                <Share2 className="w-6 h-6 text-white" />
              </button>
              {state.selectedMedia.type === 'image' && state.selectedMedia.url && (
                <button
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                  onClick={handleDownload}
                >
                  <Download className="w-6 h-6 text-white" />
                </button>
              )}
              <button
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                onClick={() => updateState({ selectedMedia: null })}
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Menu de partage */}
            {state.showShareMenu && (
              <div className="absolute top-16 right-4 bg-white rounded-xl shadow-lg py-2 z-10">
                {[
                  { platform: 'facebook', icon: Facebook, label: 'Facebook' },
                  { platform: 'twitter', icon: Twitter, label: 'Twitter' },
                  { platform: 'linkedin', icon: Linkedin, label: 'LinkedIn' },
                ].map(({ platform, icon: Icon, label }) => (
                  <button
                    key={platform}
                    onClick={() => handleShare(platform)}
                    className="w-full px-4 py-2 flex items-center hover:bg-gray-100 transition-colors"
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {label}
                  </button>
                ))}
              </div>
            )}

            {/* Navigation */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handleNavigation('prev');
              }}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Contenu du média */}
            <div className="relative flex items-center justify-center">
              {state.isLoading ? (
                <div className="w-20 h-20 border-4 border-t-primary border-white/20 rounded-full animate-spin"></div>
              ) : (
                state.selectedMedia.type === 'image' ? (
                  state.selectedMedia.url ? (
                    <SafeImage
                      src={isExternalUrl(state.selectedMedia.url) ? state.selectedMedia.url : `/storage/${state.selectedMedia.url}`}
                      alt={state.selectedMedia.title || 'Image'}
                      className="max-h-[80vh] max-w-full mx-auto rounded-lg transition-opacity duration-300 shadow-xl"
                      onLoad={() => updateState({ isLoading: false })}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-[50vh]">
                      <p className="text-white text-xl">Image non disponible</p>
                    </div>
                  )
                ) : (
                  state.selectedMedia.embed_url ? (
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        src={state.selectedMedia.embed_url}
                        title={state.selectedMedia.title || 'Vidéo'}
                        className="w-full h-full rounded-lg"
                        allowFullScreen
                        onLoad={() => updateState({ isLoading: false })}
                      />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-[50vh]">
                      <p className="text-white text-xl">Vidéo non disponible</p>
                    </div>
                  )
                )
              )}
            </div>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handleNavigation('next');
              }}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Informations du média */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
              <div className="text-white">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                    {state.selectedMedia.category || 'Non catégorisé'}
                  </span>
                  <span className="flex items-center text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {state.selectedMedia.created_at ? new Date(state.selectedMedia.created_at).toLocaleDateString() : 'Date inconnue'}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{state.selectedMedia.title || 'Sans titre'}</h3>
                {state.selectedMedia.description && (
                  <p className="text-white/80">{state.selectedMedia.description}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </AppLayout>
  );
}