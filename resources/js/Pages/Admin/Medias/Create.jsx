import React, { useState, useCallback, useMemo } from "react";
import { useForm } from "@inertiajs/react";
import InputError from '@/Components/InputError';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Upload, Link, Image, Video, FileText, Clock, Calendar, X } from 'lucide-react';

export default function MediaForm({ media = null }) {
    const isExternalUrl = useCallback((url) => {
        return url.startsWith('http://') || url.startsWith('https://') || url.startsWith('www');
    }, []);

    const [isFileUpload, setIsFileUpload] = useState(() => !isExternalUrl(media?.url || ""));
    const [previewUrl, setPreviewUrl] = useState(() =>
        isExternalUrl(media?.url || "") ? media?.url : `/storage/${media?.url}` || null
    );
    const [isNewCategory, setIsNewCategory] = useState(false);

    const { data, setData, post, processing, errors } = useForm({
        type: "image",
        title: "",
        url: "",
        file: null,
        description: "",
        category: "",
        embed_url: "",
        duration: "",
        published_at: "",
    });

    const categories = useMemo(() => [
        "Événements officiels",
        "Réunions",
        "Conférences",
        "Formations",
        "Interviews",
        "Reportages",
        "Autres"
    ], []);

    const handleFileChange = useCallback((e) => {
        const file = e.target.files[0];
        if (file) {
            setData("file", file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    }, [setData]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        const formData = new FormData();
        
        // Ajouter seulement les champs nécessaires selon le type
        formData.append('type', data.type);
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('category', data.category);
        formData.append('published_at', data.published_at);

        // Gérer le fichier ou l'URL selon le mode
        if (isFileUpload) {
            if (data.file) {
                formData.append('file', data.file);
            }
        } else {
            formData.append('url', data.url);
        }

        // Ajouter les champs spécifiques aux vidéos
        if (data.type === 'video') {
            formData.append('embed_url', data.embed_url);
            formData.append('duration', data.duration);
        }

        post(route("admin.medias.store"), formData, {
            forceFormData: true,
            onSuccess: () => {
                // Redirection après succès
                window.location.href = route("admin.medias.index");
            },
        });
    }, [data, isFileUpload, post]);

    return (
        <AuthenticatedLayout>
            <div className="max-w-4xl mx-auto py-8 px-4">
                <div className="bg-white rounded-xl shadow-lg p-8">
                    <header className="border-b pb-6 mb-6">
                        <h1 className="text-3xl font-bold text-gray-900">
                            {media ? "Modifier" : "Ajouter"} un Média
                        </h1>
                        <p className="mt-2 text-gray-600">
                            Remplissez les informations ci-dessous pour {media ? "modifier" : "ajouter"} un média dans la médiathèque.
                        </p>
                    </header>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Type de média */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Type de média
                                </label>
                                <div className="flex space-x-4">
                                    {['image', 'video'].map(type => (
                                        <button
                                            key={type}
                                            type="button"
                                            onClick={() => setData("type", type)}
                                            aria-label={`Type: ${type}`}
                                            className={`flex items-center px-4 py-2 rounded-lg border ${
                                                data.type === type
                                                    ? 'bg-primary text-white border-primary'
                                                    : 'border-gray-300 hover:bg-gray-50'
                                            }`}
                                        >
                                            {type === 'image' ? <Image className="w-5 h-5 mr-2" /> : <Video className="w-5 h-5 mr-2" />}
                                            {type.charAt(0).toUpperCase() + type.slice(1)}
                                        </button>
                                    ))}
                                </div>
                                <InputError message={errors.type} />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Méthode d'ajout
                                </label>
                                <div className="flex space-x-4">
                                    {[
                                        { value: false, label: 'URL', icon: Link },
                                        { value: true, label: 'Fichier', icon: Upload }
                                    ].map(method => (
                                        <button
                                            key={method.label}
                                            type="button"
                                            onClick={() => setIsFileUpload(method.value)}
                                            aria-label={`Méthode: ${method.label}`}
                                            className={`flex items-center px-4 py-2 rounded-lg border ${
                                                isFileUpload === method.value
                                                    ? 'bg-primary text-white border-primary'
                                                    : 'border-gray-300 hover:bg-gray-50'
                                            }`}
                                        >
                                            <method.icon className="w-5 h-5 mr-2" />
                                            {method.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Titre et Catégorie */}
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Titre
                                </label>
                                <input
                                    type="text"
                                    value={data.title}
                                    onChange={(e) => setData("title", e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                                    placeholder="Entrez un titre descriptif"
                                />
                                <InputError message={errors.title} />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Catégorie
                                </label>
                                {!isNewCategory ? (
                                    <select
                                        value={data.category}
                                        onChange={(e) => setData("category", e.target.value)}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                                    >
                                        <option value="">Sélectionnez une catégorie</option>
                                        {categories.map(cat => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                        <option value="new">Nouvelle catégorie...</option>
                                    </select>
                                ) : (
                                    <input
                                        type="text"
                                        value={data.category}
                                        onChange={(e) => setData("category", e.target.value)}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                                        placeholder="Entrez une nouvelle catégorie"
                                    />
                                )}
                                <InputError message={errors.category} />
                            </div>
                        </div>

                        {/* Zone de téléchargement/URL */}
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                            {isFileUpload ? (
                                <div>
                                    <input
                                        type="file"
                                        id="file-upload"
                                        className="hidden"
                                        accept={data.type === 'image' ? 'image/*' : 'video/*'}
                                        onChange={handleFileChange}
                                    />
                                    <label
                                        htmlFor="file-upload"
                                        className="flex items-center justify-center space-y-2 cursor-pointer"
                                    >
                                        <Upload className="w-12 h-12 text-gray-400" />
                                        <span className="text-sm text-gray-600">Cliquez pour sélectionner un fichier ou glissez-le ici</span>
                                    </label>
                                    {previewUrl && (
                                        <div className="relative w-full h-48 mt-4">
                                            {data.type === 'image' ? (
                                                <img
                                                    src={previewUrl}
                                                    alt="Aperçu"
                                                    className="w-full h-full object-cover rounded-lg"
                                                />
                                            ) : (
                                                <video
                                                    src={previewUrl}
                                                    controls
                                                    className="w-full h-full object-cover rounded-lg"
                                                />
                                            )}
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setPreviewUrl(null);
                                                    setData("file", null);
                                                }}
                                                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                                            >
                                                <X className="w-4 h-4" />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <input
                                    type="url"
                                    value={data.url}
                                    onChange={(e) => setData("url", e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                                    placeholder={`Entrez l'URL du ${data.type}`}
                                />
                            )}
                        </div>
                        
                        {/* Date de publication */}
                        <div>
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <div className="flex items-center mb-4">
                                    <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                                    <label className="text-lg font-medium text-gray-900">
                                        Publication
                                    </label>
                                </div>
                                <input
                                    type="date"
                                    id="published_at"
                                    name="published_at"
                                    value={
                                        data?.published_at ?? ''
                                    }
                                    onChange={(e) => setData('published_at', e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                                />
                            </div>
                            <InputError message={errors.published_at} className="mt-2" />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Description
                            </label>
                            <textarea
                                value={data.description}
                                onChange={(e) => setData("description", e.target.value)}
                                rows={4}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                                placeholder="Ajoutez une description détaillée"
                            />
                            <InputError message={errors.description} />
                        </div>

                        {/* Options supplémentaires pour les vidéos */}
                        {data.type === 'video' && (
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        URL d'intégration
                                    </label>
                                    <input
                                        type="url"
                                        value={data.embed_url}
                                        onChange={(e) => setData("embed_url", e.target.value)}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                                        placeholder="URL YouTube/Vimeo"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Durée (en secondes)
                                    </label>
                                    <input
                                        type="number"
                                        value={data.duration}
                                        onChange={(e) => setData("duration", e.target.value)}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                                        placeholder="Durée de la vidéo"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Boutons d'action */}
                        <div className="flex justify-end space-x-4 pt-6 border-t">
                            <button
                                type="button"
                                onClick={() => window.history.back()}
                                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                            >
                                Annuler
                            </button>
                            <button
                                type="submit"
                                disabled={processing}
                                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-700 disabled:opacity-50"
                            >
                                {processing ? "En cours..." : media ? "Mettre à jour" : "Créer"}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
