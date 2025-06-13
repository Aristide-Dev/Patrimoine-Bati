import React, { useState, useCallback, useMemo } from 'react';
import { Link, router, usePage } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Editor from '@/Components/LexicalEditor/Editor';
import {
  FileImage,
  Tags,
  Calendar,
  Newspaper,
  AlignLeft,
  BookOpen,
  Save,
  ArrowLeft,
  X
} from 'lucide-react';

export default function Edit({ news }) {
  // État initial du formulaire
  const [formState, setFormState] = useState({
    data: {
      title: news.title || '',
      excerpt: news.excerpt || '',
      content: news.content || '',
      image: null,
      category: news.category || '',
      // Si 'news.tags' est déjà un array, on l'utilise tel quel.
      // Sinon, on split la string s'il y a des virgules, ou on met []
      tags: news.tags || [],
      featured: news.featured ? news.featured === true ? 1 : news.featured === 1 ? 1 : 0 : 0,
      published_at: news.published_at || '',
    },
    imagePreview: news.image ? `/storage/${news.image}` : null,
    processing: false,
  });

  
  const { errors } = usePage().props

  /**
   * Met à jour un champ particulier dans formState.data
   * @param {string} field - nom du champ (ex: 'title', 'tags', ...)
   * @param {any} value - nouvelle valeur
   */
  const handleInputChange = useCallback((field, value) => {
    setFormState((prev) => ({
      ...prev,
      data: { ...prev.data, [field]: value },
    }));
  }, []);

  /**
   * Gestion de l'image : on lit le fichier pour avoir un aperçu
   */
  const handleImageChange = useCallback((e) => {
    const file = e.target.files[0];
    setFormState((prev) => ({
      ...prev,
      data: { ...prev.data, image: file },
    }));

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormState((prev) => ({ ...prev, imagePreview: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  }, []);

  /**
   * Soumet le formulaire via Inertia, en POST + _method=PUT
   */
  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    // On crée un FormData pour l'upload
    const formData = new FormData();
    // Méthode PUT spoofée
    formData.append('_method', 'put');

    // On parcourt chaque champ pour l'insérer dans FormData
    Object.entries(formState.data).forEach(([key, value]) => {
      if (key === 'tags') {
        // On convertit le tableau de tags en une chaîne séparée par des virgules
        // formData.append(key, value.join(','));
        formData.append('tags[]', value);
      } else if (key === 'image' && value) {
        // Image uniquement si elle existe
        formData.append(key, value);
      } else {
        formData.append(key, value || '');
      }
    });

    console.log("formState.data",formState.data);

    // Envoi via Inertia
    router.post(route('admin.news.update', news.id), formData, {
      forceFormData: true,
      _method: 'put',
      onStart: () =>
        setFormState((prev) => ({
          ...prev,
          processing: true,
        })
      ),
      onFinish: () =>
        setFormState((prev) => ({
          ...prev,
          processing: false,
        })
      ),
      onError: (errors) =>
        setFormState((prev) => ({
          ...prev,
          errors,
        })
      ),
    });
  }, [formState.data]);

  // Mémorisation de la fonction de changement d'éditeur pour éviter les re-renders
  const handleEditorChange = useCallback((content) => {
    handleInputChange('content', content);
  }, [handleInputChange]);

  // Props mémorisées pour l'éditeur
  const editorProps = useMemo(() => ({
    initialContent: formState.data.content,
    onChange: handleEditorChange,
  }), [handleEditorChange]);

  return (
    <AuthenticatedLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link
              href={route('admin.news.index')}
              className="flex items-center text-gray-600 hover:text-primary mb-2"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux actualités
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">
              Modifier l'actualité
            </h1>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="space-y-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Colonne principale */}
            <div className="lg:col-span-2 space-y-6">
              {/* Titre */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Newspaper className="w-5 h-5 text-gray-400 mr-2" />
                  <label className="text-lg font-medium text-gray-900">
                    Titre
                  </label>
                </div>
                <input
                  type="text"
                  value={formState.data.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Entrez le titre de l'actualité"
                />
                <InputError message={errors.title} className="mt-2" />
              </div>

              {/* Résumé */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <AlignLeft className="w-5 h-5 text-gray-400 mr-2" />
                  <label className="text-lg font-medium text-gray-900">
                    Résumé
                  </label>
                </div>
                <textarea
                  value={formState.data.excerpt}
                  onChange={(e) =>
                    handleInputChange('excerpt', e.target.value)
                  }
                  rows="3"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Bref résumé de l'actualité"
                ></textarea>
                <InputError
                  message={errors.excerpt}
                  className="mt-2"
                />
              </div>

              {/* Contenu - Éditeur avec support drag & drop d'images */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-5 h-5 text-gray-400 mr-2" />
                  <label className="text-lg font-medium text-gray-900">
                    Contenu
                  </label>
                  <div className="ml-auto text-sm text-gray-500 flex items-center gap-2">
                    <FileImage className="w-4 h-4" />
                    <span>Support drag & drop d'images</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="relative">
                <Editor
                      key="news-editor-edit"
                      {...editorProps}
                    />
                    {/* Badge d'indication */}
                    <div className="absolute top-0 right-0 p-2 bg-green-50 rounded-bl-lg opacity-90">
                      <div className="flex items-center gap-1 text-xs text-green-600">
                        <FileImage className="w-3 h-3" />
                        <span>Images intégrées</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Aide contextuelle pour l'édition */}
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                    <div className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="text-sm text-amber-700">
                        <p className="font-medium mb-1">Modification du contenu :</p>
                        <ul className="list-disc list-inside space-y-1 text-xs">
                          <li>✏️ Le contenu existant est automatiquement chargé</li>
                          <li>🖼️ Ajoutez de nouvelles images par drag & drop ou via la toolbar</li>
                          <li>📝 Modifiez le texte directement dans l'éditeur</li>
                          <li>💾 Les images sont conservées lors de la sauvegarde</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Indicateur de contenu en mode développement */}
                  {process.env.NODE_ENV === 'development' && (
                    <div className="text-xs text-gray-500 p-2 bg-gray-50 rounded">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <strong>Contenu actuel:</strong> {formState.data.content ? `${formState.data.content.length} caractères` : 'Vide'}
                        </div>
                        <div>
                          <strong>Type:</strong> {formState.data.content ? 'JSON Lexical' : 'Aucun contenu'}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <InputError
                  message={errors.content}
                  className="mt-2"
                />
              </div>
            </div>

            {/* Colonne latérale */}
            <div className="space-y-6">
              {/* Image */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <FileImage className="w-5 h-5 text-gray-400 mr-2" />
                  <label className="text-lg font-medium text-gray-900">
                    Image
                  </label>
                </div>
                <div className="mt-2">
                  {formState.imagePreview ? (
                    <div className="relative rounded-lg overflow-hidden mb-4">
                      <img
                        src={formState.imagePreview}
                        alt="Aperçu"
                        className="w-full h-48 object-cover"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setFormState((prev) => ({
                            ...prev,
                            data: { ...prev.data, image: null },
                            imagePreview: null,
                          }))
                        }
                        className="absolute top-2 right-2 p-2 bg-red-300 rounded-full shadow-lg hover:bg-red-500 text-white"
                      >
                        <X className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                      <div className="space-y-2 text-center">
                        <FileImage className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="text-sm text-gray-600">
                          <label className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary-dark">
                            <span>Télécharger une image</span>
                            <input
                              type="file"
                              className="sr-only"
                              accept="image/*"
                              onChange={handleImageChange}
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
                  {/* Catégorie */}
                  <div>
                    <div className="flex items-center mb-2">
                      <Tags className="w-5 h-5 text-gray-400 mr-2" />
                      <label className="text-lg font-medium text-gray-900">
                        Catégorie
                      </label>
                    </div>
                    <input
                      type="text"
                      value={formState.data.category}
                      onChange={(e) =>
                        handleInputChange('category', e.target.value)
                      }
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Catégorie"
                    />
                    <InputError
                      message={errors.category}
                      className="mt-2"
                    />
                  </div>

                  {/* Tags */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Tags
                    </label>
                    <input
                      type="text"
                      // On affiche le tableau de tags comme une seule chaîne séparée par des virgules
                      value={formState.data.tags.join(', ')}
                      onChange={(e) => {
                        // On split la chaîne entrée par l'utilisateur pour recréer un tableau
                        const splitted = e.target.value
                          .split(',')
                          .map((t) => t.trim());
                        // On met à jour formState.data.tags avec ce nouveau tableau
                        handleInputChange('tags', splitted);
                      }}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Séparez les tags par des virgules"
                    />
                    <InputError
                      message={errors.tags}
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>

              {/* Mettre à la une */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="featured"
                    name="featured"
                    checked={formState.data.featured}
                    onChange={(e) => handleInputChange('featured', e.target.checked === true ? 1:0)}
                    className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <label
                    htmlFor="featured"
                    className="ml-3 text-lg font-medium text-gray-900"
                  >
                    Mettre à la une
                  </label>
                </div>
                    <InputError
                      message={errors.featured}
                      className="mt-2"
                    />
              </div>

              {/* Date de publication */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                  <label className="text-lg font-medium text-gray-900">
                    Date de publication
                  </label>
                </div>
                <input
                  type="date"
                  value={formState.data.published_at ? formState.data.published_at.split('T')[0] : ''}
                  onChange={(e) =>
                    handleInputChange('published_at', e.target.value)
                  }
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                />
                <InputError
                  message={errors.published_at}
                  className="mt-2"
                />
              </div>
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="flex justify-end space-x-4">
            <Link
              href={route('admin.news.index')}
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Annuler
            </Link>
            <button
              type="submit"
              disabled={formState.processing}
              className="flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
            >
              <Save className="w-5 h-5 mr-2" />
              {formState.processing ? 'Enregistrement...' : 'Enregistrer'}
            </button>
          </div>
        </form>
      </div>
    </AuthenticatedLayout>
  );
}
