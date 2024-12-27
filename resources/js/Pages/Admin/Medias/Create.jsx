import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import InputError from '@/Components/InputError';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Upload, Link, Image, Video, FileText, Clock, Tag, X } from 'lucide-react';

export default function MediaForm({ media = null }) {
    const [isFileUpload, setIsFileUpload] = useState(false);
    const [previewUrl, setPreviewUrl] = useState(media?.url || null);
    const [isNewCategory, setIsNewCategory] = useState(false);
    
    const { data, setData, post, put, processing, errors } = useForm({
        type: media?.type || "image",
        title: media?.title || "",
        url: media?.url || "",
        file: null,
        description: media?.description || "",
        category: media?.category || "",
        embed_url: media?.embed_url || "",
        duration: media?.duration || "",
    });

    const categories = [
        "Événements officiels",
        "Réunions",
        "Conférences",
        "Formations",
        "Interviews",
        "Reportages",
        "Autres"
    ];

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData("file", file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(data).forEach(key => {
            if (data[key] !== null) formData.append(key, data[key]);
        });

        const form_route = media ? 
            route("admin.medias.update", media.id) : 
            route("admin.medias.store");

        if (media) {
            put(form_route, formData);
        } else {
            post(form_route, formData);
        }
    };

    return (
        <AuthenticatedLayout>
            <div className="max-w-4xl mx-auto py-8 px-4">
                <div className="bg-white rounded-xl shadow-lg p-8">
                    <div className="border-b pb-6 mb-6">
                        <h1 className="text-3xl font-bold text-gray-900">
                            {media ? "Modifier" : "Ajouter"} un Média
                        </h1>
                        <p className="mt-2 text-gray-600">
                            Remplissez les informations ci-dessous pour {media ? "modifier" : "ajouter"} un média dans la médiathèque.
                        </p>
                    </div>

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
                                    <div>
                                        <select
                                            value={data.category}
                                            onChange={(e) => setData("category", e.target.value)}
                                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                                        >
                                            <option value="">Sélectionnez une catégorie</option>
                                            {categories.map(cat => (
                                                <option key={cat} value={cat}>{cat}</option>
                                            ))}
                                            <option className="bg-yellow-400 hover:bg-yellow-500 focus:bg-yellow-500" value="new">Nouvelle Categorie...</option>
                                        </select>
                                        {data.category === "new" && (
                                            <button
                                                type="button"
                                                onClick={() => setIsNewCategory(true)}
                                                className="text-blue-500 mt-2"
                                            >
                                                Ajouter une nouvelle catégorie
                                            </button>
                                        )}
                                    </div>
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
                                <div className="space-y-4">
                                    <div className="flex items-center justify-center">
                                        <input
                                            type="file"
                                            onChange={handleFileChange}
                                            className="hidden"
                                            id="file-upload"
                                            accept={data.type === 'image' ? 'image/*' : 'video/*'}
                                        />
                                        <label
                                            htmlFor="file-upload"
                                            className="cursor-pointer flex flex-col items-center space-y-2"
                                        >
                                            <Upload className="w-12 h-12 text-gray-400" />
                                            <span className="text-sm text-gray-600">
                                                Cliquez pour sélectionner un fichier ou glissez-le ici
                                            </span>
                                        </label>
                                    </div>
                                    {previewUrl && (
                                        <div className="relative w-full h-48">
                                            {data.type === 'image' ? (
                                                <img
                                                    src={previewUrl}
                                                    alt="Aperçu"
                                                    className="w-full h-full object-cover rounded-lg"
                                                />
                                            ) : (
                                                <video
                                                    src={previewUrl}
                                                    className="w-full h-full object-cover rounded-lg"
                                                    controls
                                                />
                                            )}
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setPreviewUrl(null);
                                                    setData("file", null);
                                                }}
                                                className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                                            >
                                                <X className="w-4 h-4" />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <input
                                        type="url"
                                        value={data.url}
                                        onChange={(e) => setData("url", e.target.value)}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                                        placeholder={`Entrez l'URL du ${data.type}`}
                                    />
                                    <InputError message={errors.url} />
                                </div>
                            )}
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
