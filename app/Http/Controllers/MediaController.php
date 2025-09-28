<?php

namespace App\Http\Controllers;

use App\Models\Media;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Traits\SeoTools;

class MediaController extends Controller
{
    use SeoTools;

    /**
     * Affiche la liste des médias
     */
    public function index(Request $request)
    {
        // Configuration SEO pour la page des médias
        $this->setSeoMeta(
            'Médias - PBP',
            'Consultez nos médias et ressources visuelles du Patrimoine Bâti Public de Guinée. Photos, vidéos et documents officiels.',
            ['médias', 'PBP', 'patrimoine bâti', 'Guinée', 'ressources']
        );

        $query = Media::where('published_at', '<=', now())
            ->whereNotNull('published_at');

        // Filtrage par type
        if ($request->filled('type') && $request->type !== 'all') {
            $query->where('type', $request->type);
        }

        // Recherche par titre
        if ($request->filled('search')) {
            $query->where('title', 'like', '%' . $request->search . '%');
        }

        // Tri par défaut : plus récent en premier
        $query->orderBy('published_at', 'desc');

        $medias = $query->paginate(12)->withQueryString();

        return Inertia::render('Actualites/Medias', [
            'seo' => $this->getSeoData(),
            'medias' => $medias,
            'filters' => $request->only(['search', 'type'])
        ]);
    }

    /**
     * Affiche un média spécifique
     */
    public function show(Media $media)
    {
        // Vérifier que le média est publié
        if (!$media->published_at || $media->published_at > now()) {
            abort(404);
        }

        // Configuration SEO pour le média
        $this->setMediaSeoMeta($media);

        // Médias similaires
        $relatedMedias = Media::where('published_at', '<=', now())
            ->whereNotNull('published_at')
            ->where('id', '!=', $media->id)
            ->where('type', $media->type)
            ->limit(3)
            ->get();

        return Inertia::render('Actualites/Medias/Show', [
            'seo' => $this->getSeoData(),
            'media' => $media,
            'relatedMedias' => $relatedMedias
        ]);
    }
}
