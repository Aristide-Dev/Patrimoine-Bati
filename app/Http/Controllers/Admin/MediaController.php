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
        $medias = Media::latest()->get();
        return Inertia::render('Admin/Medias/Index', ['medias' => $medias]);
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
        return Inertia::render('Admin/Medias/Create', ['media' => $media]);
    }

    public function update(Request $request, Media $media)
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
        ]);

        // Si un fichier est téléchargé
        if ($request->hasFile('file')) {
            // Supprimer l'ancien fichier si nécessaire
            if ($media->url && Storage::disk('public')->exists($media->url)) {
                Storage::disk('public')->delete($media->url);
            }

            $validatedData['url'] = $request->file('file')->store('uploads/media', 'public');
        }

        $media->update($validatedData);

        return redirect()->route('admin.medias.index')->with('success', 'Média mis à jour avec succès.');
    }

    public function destroy(Media $media)
    {
         // Supprimer le fichier si nécessaire
         if ($media->url && Storage::disk('public')->exists($media->url)) {
            Storage::disk('public')->delete($media->url);
        }

        $media->delete();
        return redirect()->back()->with('success', 'Média supprimé avec succès.');
    }
}
