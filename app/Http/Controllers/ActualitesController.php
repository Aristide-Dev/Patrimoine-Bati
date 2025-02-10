<?php

namespace App\Http\Controllers;

use App\Models\News;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Report;
use Illuminate\Http\Request;

class ActualitesController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Actualites/Index');
    }

    public function communiques(): Response
    {
        return Inertia::render('Actualites/CommuniquesAteliersSeminaires');
    }

    public function show($slug)
    {
        $article = News::where('slug',$slug)->first();
        if(!$article)
        {
            abort(404);
        }
        // Incrémenter les vues
        $article->increment('views');
        $similarArticles = News::where('category', $article->category)
            ->where('id', '!=', $article->id)
            ->limit(3)
            ->get();

        return Inertia::render('Actualites/Show', [
            'article' => $article,
            'similarArticles' => $similarArticles,
        ]);
    }


    public function rapports(): Response
    {
        $categories = Report::CATEGORIES_LIST;
        return Inertia::render('Actualites/RapportsPublications', ['categories' => $categories]);
    }

    public function medias(): Response
    {
        return Inertia::render('Actualites/Medias');
    }
}
