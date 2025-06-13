import React, { useState, useCallback, useMemo } from 'react';
import { useForm, Link } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Editor from '@/Components/LexicalEditor/Editor';
import { 
  FileImage, Tags, Calendar, Newspaper, 
  AlignLeft, BookOpen, Save, ArrowLeft, X
} from 'lucide-react';

export default function Create() {
  const { data, setData, post, errors, processing } = useForm({
    title: '',
    excerpt: '',
    content: '', // Stockage en tant que string JSON
    image: null,
    category: '',
    tags: [],
    featured: false,
    published_at: '',
  });

  const [imagePreview, setImagePreview] = useState(null);

  // Mémorisation de la fonction de gestion des images
  const handleImageChange = useCallback((e) => {
    const file = e.target.files[0];
    setData('image', file);
    
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }, [setData]);

  // Fonction mémorisée pour gérer le contenu de l'éditeur
  const handleEditorChange = useCallback((serializedContent) => {
    // serializedContent est déjà une chaîne JSON sérialisée par l'éditeur
    // Pas besoin de re-sérialiser
    console.log('Contenu reçu de l\'éditeur:', typeof serializedContent, serializedContent?.length);
    setData('content', serializedContent);
  }, [setData]);

  // Mémorisation de la fonction de suppression d'image
  const handleImageRemove = useCallback(() => {
    setImagePreview(null);
    setData('image', null);
  }, [setData]);

  // Mémorisation de la fonction de gestion des tags
  const handleTagsChange = useCallback((e) => {
    const tagString = e.target.value;
    const tagsArray = tagString.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
    setData('tags', tagsArray);
  }, [setData]);

  // Mémorisation de la fonction de soumission
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log('Données à envoyer:', data);
    post(route('admin.news.store'));
  }, [data, post]);

  // Mémorisation des valeurs pour éviter les re-renders
  // L'initialContent ne doit être défini qu'une seule fois au montage
  const editorProps = useMemo(() => ({
    onChange: handleEditorChange,
    initialContent: '', // Toujours vide pour un nouvel article
  }), [handleEditorChange]);

  // Mémorisation du display des tags
  const displayTags = useMemo(() => {
    return Array.isArray(data.tags) ? data.tags.join(', ') : '';
  }, [data.tags]);

  return (
    <AuthenticatedLayout>
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* En-tête */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link 
              href={route('admin.news.index')} 
              className="flex items-center text-gray-600 hover:text-primary mb-2"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux actualités
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Créer une actualité</h1>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Colonne principale */}
            <div className="lg:col-span-2 space-y-6">
              {/* Titre */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Newspaper className="w-5 h-5 text-gray-400 mr-2" />
                  <label className="text-lg font-medium text-gray-900">Titre</label>
                </div>
                <input
                  type="text"
                  value={data.title}
                  onChange={(e) => setData('title', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="Entrez le titre de l'actualité"
                />
                <InputError message={errors.title} className="mt-2" />
              </div>

              {/* Résumé */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <AlignLeft className="w-5 h-5 text-gray-400 mr-2" />
                  <label className="text-lg font-medium text-gray-900">Résumé</label>
                </div>
                <textarea
                  value={data.excerpt}
                  onChange={(e) => setData('excerpt', e.target.value)}
                  rows="3"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="Un bref résumé de l'actualité"
                ></textarea>
                <InputError message={errors.excerpt} className="mt-2" />
              </div>

              {/* Contenu - Éditeur Lexical avec support drag & drop */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-5 h-5 text-gray-400 mr-2" />
                  <label className="text-lg font-medium text-gray-900">Contenu</label>
                  <div className="ml-auto text-sm text-gray-500 flex items-center gap-2">
                    <FileImage className="w-4 h-4" />
                    <span>Glissez-déposez vos images directement dans l'éditeur</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="relative">
                <Editor
                      key="news-editor"
                      {...editorProps}
                    />
                    {/* Indicateur visuel pour le drag & drop */}
                    <div className="absolute top-0 right-0 p-2 bg-gray-50 rounded-bl-lg opacity-75">
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <FileImage className="w-3 h-3" />
                        <span>Images supportées</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Aide contextuelle */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <div className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="text-sm text-blue-700">
                        <p className="font-medium mb-1">Intégration d'images dans l'éditeur :</p>
                        <ul className="list-disc list-inside space-y-1 text-xs">
                          <li>🖱️ Cliquez sur l'icône image dans la barre d'outils</li>
                          <li>🖼️ Glissez-déposez vos images directement dans l'éditeur</li>
                          <li>📋 Collez des images depuis le presse-papiers (Ctrl+V)</li>
                          <li>🔗 Insérez des images par URL ou téléchargez des fichiers locaux</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Debug info en mode développement */}
                  {process.env.NODE_ENV === 'development' && (
                    <div className="text-xs text-gray-500 p-2 bg-gray-50 rounded">
                      Contenu actuel: {data.content ? `${data.content.length} caractères` : 'Vide'}
                    </div>
                  )}
                </div>
                <InputError message={errors.content} className="mt-2" />
              </div>
            </div>

            {/* Colonne latérale */}
            <div className="space-y-6">
              {/* Image */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <FileImage className="w-5 h-5 text-gray-400 mr-2" />
                  <label className="text-lg font-medium text-gray-900">Image</label>
                </div>
                <div className="mt-2">
                  {imagePreview ? (
                    <div className="relative rounded-lg overflow-hidden mb-4">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-48 object-cover"
                      />
                      <button
                        type="button"
                        onClick={handleImageRemove}
                        className="absolute top-2 right-2 p-2 bg-red-300 rounded-full shadow-lg hover:bg-red-500 text-white"
                      >
                        <span className="sr-only">Supprimer</span>
                        <X className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                      <div className="space-y-1 text-center">
                        <FileImage className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="text-sm text-gray-600">
                          <label className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-primary">
                            <span>Télécharger une image</span>
                            <input
                              type="file"
                              onChange={handleImageChange}
                              className="sr-only"
                              accept="image/*"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <InputError message={errors.image} className="mt-2" />
              </div>

              {/* Catégorie et Tags */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <Tags className="w-5 h-5 text-gray-400 mr-2" />
                      <label className="text-lg font-medium text-gray-900">Catégorie</label>
                    </div>
                    <input
                      type="text"
                      value={data.category}
                      onChange={(e) => setData('category', e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Catégorie"
                    />
                    <InputError message={errors.category} className="mt-2" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Tags</label>
                    <input
                      type="text"
                      value={displayTags}
                      onChange={handleTagsChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Séparez les tags par des virgules"
                    />
                    <InputError message={errors.tags} className="mt-2" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={data.featured}
                    onChange={(e) => setData('featured', e.target.checked)}
                    className="mr-3 w-5 h-5 text-primary focus:ring-2 focus:ring-primary border-gray-300 rounded"
                  />
                  <label htmlFor="featured" className="text-lg font-medium text-gray-900">Mettre à la une</label>
                </div>
                <InputError message={errors.featured} className="mt-2" />
              </div>

              {/* Date de publication */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                  <label className="text-lg font-medium text-gray-900">Publication</label>
                </div>
                <input
                  type="date"
                  value={data.published_at ? data.published_at.split('T')[0] : ''}
                  onChange={(e) => setData('published_at', e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                />
                <InputError message={errors.published_at} className="mt-2" />
              </div>
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="flex justify-end space-x-4">
            <Link
              href={route('admin.news.index')}
              className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Annuler
            </Link>
            <button
              type="submit"
              disabled={processing}
              className="flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
            >
              <Save className="w-5 h-5 mr-2" />
              {processing ? 'Création...' : 'Créer l\'actualité'}
            </button>
          </div>
        </form>
      </div>
    </AuthenticatedLayout>
  );
}
