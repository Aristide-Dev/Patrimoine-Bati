<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Media;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class MediaController extends Controller
{
    public function index()
    {
        // $medias = Media::latest()->paginate(10);
        // $medias = Media::latest()->get();
        $categories = [
            "Événements officiels",
            "Réunions",
            "Conférences",
            "Formations",
            "Interviews",
            "Reportages",
            "Autres",
        ];
        return Inertia::render('Admin/Medias/Index', ['categories' =>$categories]);
    }

    public function create()
    {
        return Inertia::render('Admin/Medias/Create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'type' => 'required|in:image,video',
            'title' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'category' => 'nullable|string|max:255',
            'url' => 'nullable|url',
            'file' => 'nullable|file',
            'embed_url' => 'nullable|url',
            'duration' => 'nullable|integer',
            'published_at' => 'nullable|date',
        ]);

        // Si un fichier est téléchargé
        if ($request->hasFile('file')) {
            $validatedData['url'] = $request->file('file')->store('uploads/media', 'public');
        }

        // Enregistrer le média
        Media::create($validatedData);

        return redirect()->route('admin.medias.index')->with('success', 'Média créé avec succès.');
    }

    public function edit(Media $media)
    {
        // dd($media);
        return Inertia::render('Admin/Medias/Create', ['media' => $media]);
    }

    public function update(Request $request, Media $media)
    {
        // Validation des données entrantes
        $validatedData = $request->validate([
            'type' => 'required|in:image,video',
            'title' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'category' => 'nullable|string|max:255',
            'url' => 'nullable|url',
            'file' => 'nullable|file|mimes:jpeg,png,jpg,gif,mp4,avi,mkv|max:10240', // Limite de 10 Mo pour les fichiers
            'embed_url' => 'nullable|url',
            'duration' => 'nullable|integer',
            'published_at' => 'nullable|date',
        ]);
        // dd($validatedData);

        try {
            // Gestion du fichier téléchargé
            if ($request->hasFile('file')) {
                // Supprimer l'ancien fichier si nécessaire
                if ($media->url && Storage::disk('public')->exists($media->url)) {
                    Storage::disk('public')->delete($media->url);
                }

                // Stocker le nouveau fichier
                $validatedData['url'] = $request->file('file')->store('uploads/media', 'public');
            }

            if($validatedData['url'] == null || $validatedData['url'] == '')
            {
                unset($validatedData['url']);
            }

            // dd($validatedData);

            // Mettre à jour les données du média
            $media->update($validatedData);

            // Rediriger avec un message de succès
            return redirect()->route('admin.medias.index')
                ->with('success', 'Média mis à jour avec succès.');
        } catch (\Exception $e) {
            // Gestion des erreurs
            return redirect()->route('admin.medias.index')
                ->with('error', 'Une erreur s\'est produite lors de la mise à jour du média : ' . $e->getMessage());
        }
    }


    public function destroy(Media $media)
    {
         // Supprimer le fichier si nécessaire
         if ($media->url && Storage::disk('public')->exists($media->url)) {
            Storage::disk('public')->delete($media->url);
        }

        $media->delete();
        return back()->with('success', 'Média supprimé avec succès.');
    }
}
