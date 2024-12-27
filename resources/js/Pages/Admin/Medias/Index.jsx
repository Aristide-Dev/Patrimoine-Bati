import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { 
  Search, Filter, Grid, List, Image, Video, 
  Download, Share2, Trash2, Edit, Plus, Calendar,
  ChevronLeft, ChevronRight, X
} from 'lucide-react';

export default function Index({ medias, categories = [] }) {
    console.log('medias', medias)
  const [view, setView] = useState('grid');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [filters, setFilters] = useState({
    search: '',
    type: 'all',
    category: 'all'
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const filteredMedia = medias.filter(media => {
    return (
      (filters.search === '' || 
        media.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        media.description.toLowerCase().includes(filters.search.toLowerCase())) &&
      (filters.type === 'all' || media.type === filters.type) &&
      (filters.category === 'all' || media.category === filters.category)
    );
  });

  const isExternalUrl = (url) => {
    return url.startsWith('http://') || url.startsWith('https://') || url.startsWith('wwww');
  };
  

  const paginatedMedia = filteredMedia.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredMedia.length / itemsPerPage);

  const handleDelete = async (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce média ?')) {
      try {
        await axios.delete(route('admin.medias.destroy', id));
        // Rafraîchir la liste
      } catch (error) {
        console.error('Erreur lors de la suppression:', error);
      }
    }
  };

  const handleShare = (media) => {
    navigator.clipboard.writeText(media.url);
    // Afficher une notification de succès
  };

  return (
    <AuthenticatedLayout>
      <Head title="Médiathèque" />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* En-tête avec recherche et filtres */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Médiathèque</h1>
          <a
            href={route('admin.medias.create')}
            className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-700 transition"
          >
            <Plus className="w-5 h-5 mr-2" />
            Ajouter un média
          </a>
        </div>

        {/* Barre de filtres */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={filters.search}
                  onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
            </div>

            <select
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            >
              <option value="all">Tous les types</option>
              <option value="image">Images</option>
              <option value="video">Vidéos</option>
            </select>

            <select
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            >
              <option value="all">Toutes les catégories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            <div className="flex items-center gap-2 border-l pl-4">
              <button
                onClick={() => setView('grid')}
                className={`p-2 rounded-lg ${view === 'grid' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setView('list')}
                className={`p-2 rounded-lg ${view === 'list' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Liste des médias */}
        {view === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {paginatedMedia.map((media) => (
              <div key={media.id} className="bg-white rounded-xl shadow-sm overflow-hidden group">
                <div className="relative aspect-video">
                  {media.type === 'image' ? (
                    <img
                      src={isExternalUrl(media.url) ? media.url : `/storage/${media.url}`}
                      alt={media.title}
                      className="w-full h-full object-cover"
                      onClick={() => setSelectedMedia(media)}
                    />
                  ) : (
                    <video
                      src={isExternalUrl(media.url) ? media.url : `/storage/${media.url}`}
                      className="w-full h-full object-cover"
                      onClick={() => setSelectedMedia(media)}
                    />
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleShare(media)}
                        className="p-2 bg-white rounded-full hover:bg-gray-100"
                      >
                        <Share2 className="w-5 h-5" />
                      </button>
                      <a
                        href={media.url}
                        download
                        className="p-2 bg-white rounded-full hover:bg-gray-100"
                      >
                        <Download className="w-5 h-5" />
                      </a>
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
        ) : (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Média
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Catégorie
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedMedia.map((media) => (
                  <tr key={media.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          {media.type === 'image' ? (
                            <img
                              src={media.url}
                              alt={media.title}
                              className="h-10 w-10 rounded-lg object-cover"
                            />
                          ) : (
                            <video
                              src={media.url}
                              className="h-10 w-10 rounded-lg object-cover"
                            />
                          )}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{media.title}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                        {media.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {media.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(media.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => handleShare(media)}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <Share2 className="w-5 h-5" />
                        </button>
                        <a
                          href={media.url}
                          download
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <Download className="w-5 h-5" />
                        </a>
                        <button
                          onClick={() => handleDelete(media.id)}
                          className="text-red-400 hover:text-red-500"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8">
            <nav className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border hover:bg-gray-50 disabled:opacity-50"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === page
                      ? 'bg-primary text-white'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border hover:bg-gray-50 disabled:opacity-50"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </nav>
          </div>
        )}

        {/* Modal de prévisualisation */}
        {selectedMedia && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="max-w-4xl w-full mx-4 bg-white rounded-xl overflow-hidden">
              <div className="p-4 flex justify-between items-center border-b">
                <h3 className="text-lg font-semibold">{selectedMedia.title}</h3>
                <button
                  onClick={() => setSelectedMedia(null)}
                  className="p-1 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="relative aspect-video">
                {selectedMedia.type === 'image' ? (
                  <img
                    src={selectedMedia.url}
                    alt={selectedMedia.title}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <video
                    src={selectedMedia.url}
                    controls
                    className="w-full h-full"
                  />
                )}
              </div>
              <div className="p-4 bg-gray-50">
                <p className="text-sm text-gray-600">{selectedMedia.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </AuthenticatedLayout>
  );
}
