import React, { useState } from 'react';
import { useForm, Head, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { 
  Search, Filter, Grid, List, Image, Video, 
  Download, Share2, Trash2, Edit, Plus, ChevronLeft, ChevronRight, X, ImageIcon, VideoIcon,
  ArrowUp, ArrowDown, Calendar, Tag, Eye, Star, Clock
} from 'lucide-react';

export default function MediaIndex({ medias, categories = [], filters: initialFilters = {} }) {

  const { delete:destroy } = useForm({
    id: null,
  });
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [view, setView] = useState('grid');
  const [filters, setFilters] = useState({
    search: initialFilters.search || '',
    type: initialFilters.type || 'all',
    category: initialFilters.category || 'all',
    sort_by: initialFilters.sort_by || 'created_at',
    sort_direction: initialFilters.sort_direction || 'desc',
  });

  const handleSearch = (value) => {
    setFilters({ ...filters, search: value });
    router.get(route('admin.medias.index'), {
      search: value,
      type: filters.type,
      category: filters.category,
      sort_by: filters.sort_by,
      sort_direction: filters.sort_direction
    }, {
      preserveState: true,
      replace: true
    });
  };

  const handleTypeChange = (value) => {
    setFilters({ ...filters, type: value });
    router.get(route('admin.medias.index'), {
      search: filters.search,
      type: value,
      category: filters.category,
      sort_by: filters.sort_by,
      sort_direction: filters.sort_direction
    }, {
      preserveState: true,
      replace: true
    });
  };

  const handleCategoryChange = (value) => {
    setFilters({ ...filters, category: value });
    router.get(route('admin.medias.index'), {
      search: filters.search,
      type: filters.type,
      category: value,
      sort_by: filters.sort_by,
      sort_direction: filters.sort_direction
    }, {
      preserveState: true,
      replace: true
    });
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (filters.sort_by === key && filters.sort_direction === 'asc') {
      direction = 'desc';
    }
    setFilters({ ...filters, sort_by: key, sort_direction: direction });
    
    router.get(route('admin.medias.index'), {
      search: filters.search,
      type: filters.type,
      category: filters.category,
      sort_by: key,
      sort_direction: direction
    }, {
      preserveState: true,
      replace: true
    });
  };

  const handleDelete = async (id) => {
    setSelectedMedia(id);
    setDeleteModalVisible(true);
  };

  const confirmDelete = async () => {
    try {
      await destroy(`/admin-panel/medias/${selectedMedia}`);
      router.reload();
      setDeleteModalVisible(false);
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
    }
  };

  const handleShare = (media) => {
    if (!media.url) {
      alert('Aucune URL disponible pour ce média');
      return;
    }
    
    const baseUrl = window.location.origin;
    const fullUrl = isExternalUrl(media.url) 
      ? media.url 
      : `${baseUrl}/storage/${media.url}`;
    
    navigator.clipboard.writeText(fullUrl);
    alert('URL copiée dans le presse-papier');
  };

  const isExternalUrl = (url) => url.startsWith('http://') || url.startsWith('https://');

  return (
    <AuthenticatedLayout>
      <Head title="Médiathèque" />

      {/* Ajouter le modal de confirmation avant le contenu principal */}
      {deleteModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Confirmer la suppression</h3>
            <p className="text-gray-600 mb-6">Êtes-vous sûr de vouloir supprimer ce média ?</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setDeleteModalVisible(false)}
                className="px-4 py-2 rounded-lg border hover:bg-gray-50"
              >
                Annuler
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* En-tête avec statistiques */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Médiathèque</h1>
            <a
              href={route('admin.medias.create')}
              className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-700 transition"
            >
              <Plus className="w-5 h-5 mr-2" />
              Ajouter un média
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { label: 'Total', value: medias.total, icon: Tag },
              { label: 'Images', value: medias.data.filter(m => m.type === 'image').length, icon: Image },
              { label: 'Vidéos', value: medias.data.filter(m => m.type === 'video').length, icon: Video },
              { label: 'Ce mois', value: medias.data.filter(m => new Date(m.created_at).getMonth() === new Date().getMonth()).length, icon: Calendar }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                    <p className="text-2xl font-semibold mt-1">{stat.value}</p>
                  </div>
                  <stat.icon className="w-8 h-8 text-primary opacity-80" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Barre de filtres */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher par titre ou description..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                value={filters.search}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary appearance-none"
                value={filters.type}
                onChange={(e) => handleTypeChange(e.target.value)}
              >
                <option value="all">Tous les types</option>
                <option value="image">Images</option>
                <option value="video">Vidéos</option>
              </select>
            </div>
            <div className="relative">
              <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary appearance-none"
                value={filters.category}
                onChange={(e) => handleCategoryChange(e.target.value)}
              >
                <option value="all">Toutes les catégories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative">
              <ArrowUp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary appearance-none"
                value={`${filters.sort_by}-${filters.sort_direction}`}
                onChange={(e) => {
                  const [field, direction] = e.target.value.split('-');
                  handleSort(field);
                }}
              >
                <option value="created_at-desc">Date (récent)</option>
                <option value="created_at-asc">Date (ancien)</option>
                <option value="title-asc">Titre (A-Z)</option>
                <option value="title-desc">Titre (Z-A)</option>
                <option value="type-asc">Type (A-Z)</option>
                <option value="type-desc">Type (Z-A)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Liste des médias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {medias.data.map((media) => (
              <div key={media.id} className="bg-white rounded-xl shadow-sm overflow-hidden group">
                <div className="relative aspect-video">
                  {media.type === 'image' ? (
                    media.url ? (
                      <img
                        src={isExternalUrl(media.url) ? media.url : `/storage/${media.url}`}
                        alt={media.title || 'Image'}
                        className="w-full h-full object-cover"
                        onClick={() => setSelectedMedia(media)}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null
                  ) : (
                    media.embed_url ? (
                      <iframe
                        className="w-full h-full object-cover"
                        src={isExternalUrl(media.embed_url) ? media.embed_url : `/storage/${media.embed_url}`}
                        title={media.title || 'Vidéo'}
                        frameBorder="0"
                        allowFullScreen
                      />
                    ) : null
                  )}
                  {/* Placeholder si pas d'image/vidéo */}
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center" style={{ display: media.url || media.embed_url ? 'none' : 'flex' }}>
                    {media.type === 'image' ? (
                      <Image className="w-12 h-12 text-gray-400" />
                    ) : (
                      <Video className="w-12 h-12 text-gray-400" />
                    )}
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleShare(media)}
                        className="p-2 bg-white rounded-full hover:bg-gray-100"
                      >
                        <Share2 className="w-5 h-5" />
                      </button>
                      {media.url && (
                        <a
                          href={isExternalUrl(media.url) ? media.url : `/storage/${media.url}`}
                          download
                          className="p-2 bg-white rounded-full hover:bg-gray-100"
                        >
                          <Download className="w-5 h-5" />
                        </a>
                      )}
                      <a
                        href={route('admin.medias.edit', media)}
                        className="p-2 bg-white rounded-full hover:bg-gray-100"
                      >
                        <Edit className="w-5 h-5" />
                      </a>
                      <button
                        onClick={() => handleDelete(media.id)}
                        className="p-2 bg-white rounded-full hover:bg-gray-100"
                      >
                        <Trash2 className="w-5 h-5 text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{media.title}</h3>
                  <p className="text-sm text-gray-500">{media.category}</p>
                </div>
              </div>
            ))}
          </div>

        {medias.data.length === 0 && (
          <div className="text-center py-6 bg-white rounded-xl shadow-sm">
            <div className="mx-auto h-12 w-12 text-gray-400 mb-4">
              <Image className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="mt-2 text-sm font-medium text-gray-900">Aucun média trouvé</h3>
            <p className="mt-1 text-sm text-gray-500">
              Commencez par ajouter un nouveau média ou modifiez vos filtres.
            </p>
          </div>
        )}

        {/* Pagination */}
        {medias.links && medias.links.length > 3 && (
          <div className="mt-8 flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Affichage de {medias.from} à {medias.to} sur {medias.total} résultats
            </div>
            <div className="flex items-center space-x-2">
              {medias.links.map((link, index) => {
                // Parser le label pour extraire le texte et les icônes
                const getLabelText = (label) => {
                  if (typeof label === 'string') {
                    // Supprimer les balises HTML et garder seulement le texte
                    return label.replace(/<[^>]*>/g, '').trim();
                  }
                  return label;
                };

                const getLabelIcon = (label) => {
                  if (typeof label === 'string') {
                    if (label.includes('Previous')) return <ChevronLeft className="w-4 h-4" />;
                    if (label.includes('Next')) return <ChevronRight className="w-4 h-4" />;
                  }
                  return null;
                };

                return (
                  <button
                    key={index}
                    onClick={() => {
                      if (link.url) {
                        router.get(link.url, {}, { preserveState: true });
                      }
                    }}
                    disabled={!link.url}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1 ${
                      link.active
                        ? 'bg-primary text-white'
                        : link.url
                        ? 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {getLabelIcon(link.label)}
                    {getLabelText(link.label)}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </AuthenticatedLayout>
  );
}
