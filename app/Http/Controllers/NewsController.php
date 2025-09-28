<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Traits\SeoTools;

class NewsController extends Controller
{
    use SeoTools;

    /**
     * Affiche la liste des actualités
     */
    public function index(Request $request)
    {
        // Configuration SEO pour la page des actualités
        $this->setSeoMeta(
            'Actualités - PBP',
            'Découvrez les dernières actualités du Patrimoine Bâti Public de Guinée. Informations sur nos activités, projets et développements.',
            ['actualités', 'PBP', 'patrimoine bâti', 'Guinée', 'nouvelles']
        );

        $query = News::where('published_at', '<=', now())
            ->whereNotNull('published_at');

        // Filtrage par catégorie
        if ($request->filled('category') && $request->category !== 'all') {
            $query->where('category', $request->category);
        }

        // Recherche par titre
        if ($request->filled('search')) {
            $query->where('title', 'like', '%' . $request->search . '%');
        }

        // Tri par défaut : plus récent en premier
        $query->orderBy('published_at', 'desc');

        $news = $query->paginate(12)->withQueryString();

        return Inertia::render('Actualites/Index', [
            'news' => $news,
            'filters' => $request->only(['search', 'category']),
            'seo' => $this->getSeoData(),
        ]);
    }

    /**
     * Affiche une actualité spécifique
     */
    public function show(News $news)
    {
        // Vérifier que l'actualité est publiée
        if (!$news->published_at || $news->published_at > now()) {
            abort(404);
        }

        // Configuration SEO pour l'actualité
        $this->setNewsSeoMeta($news);

        // Actualités similaires
        $relatedNews = News::where('published_at', '<=', now())
            ->whereNotNull('published_at')
            ->where('id', '!=', $news->id)
            ->where(function ($query) use ($news) {
                $query->where('category', $news->category)
                      ->orWhere('tags', 'like', '%' . $news->category . '%');
            })
            ->limit(3)
            ->get();

        return Inertia::render('Actualites/Show', [
            'news' => $news,
            'relatedNews' => $relatedNews,
            'seo' => $this->getSeoData(),
        ]);
    }
}
