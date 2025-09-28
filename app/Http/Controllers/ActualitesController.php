<?php

namespace App\Http\Controllers;

use App\Models\News;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Report;
use Illuminate\Http\Request;
use App\Http\Traits\SeoTools;

class ActualitesController extends Controller
{
    use SeoTools;

    public function index(): Response
    {
        // Configuration SEO pour la page des actualités
        $this->setSeoMeta(
            'Actualités - PBP',
            'Découvrez les dernières actualités du Patrimoine Bâti Public de Guinée. Informations sur nos activités, projets et développements.',
            ['actualités', 'PBP', 'patrimoine bâti', 'Guinée', 'nouvelles']
        );

        // Récupérer les actualités publiées
        $news = News::where('published_at', '<=', now())
            ->whereNotNull('published_at')
            ->orderBy('published_at', 'desc')
            ->paginate(12);

        return Inertia::render('Actualites/Index', [
            'news' => $news,
            'seo' => $this->getSeoData(),
        ]);
    }

    public function communiques(): Response
    {
        $this->setSeoMeta(
            'Communiqués, Ateliers et Séminaires - PBP',
            'Consultez les communiqués officiels, ateliers et séminaires organisés par le Patrimoine Bâti Public de Guinée.',
            ['communiqués', 'ateliers', 'séminaires', 'PBP', 'événements']
        );

        return Inertia::render('Actualites/CommuniquesAteliersSeminaires', [
            'seo' => $this->getSeoData(),
        ]);
    }

    public function show($slug)
    {
        $article = News::where('slug',$slug)->first();
        if(!$article)
        {
            abort(404);
        }

        // Configuration SEO pour l'actualité
        $this->setNewsSeoMeta($article);

        // Incrémenter les vues
        $article->increment('views');
        $similarArticles = News::where('category', $article->category)
            ->where('id', '!=', $article->id)
            ->limit(3)
            ->get();

        return Inertia::render('Actualites/Show', [
            'seo' => $this->getSeoData(),
            'article' => $article,
            'similarArticles' => $similarArticles,
        ]);
    }

    public function rapports(): Response
    {
        $this->setSeoMeta(
            'Rapports et Publications - PBP',
            'Accédez aux rapports officiels, publications et documents du Patrimoine Bâti Public de Guinée.',
            ['rapports', 'publications', 'documents', 'PBP', 'rapports officiels']
        );

        $categories = Report::CATEGORIES_LIST;
        return Inertia::render('Actualites/RapportsPublications', [
            'seo' => $this->getSeoData(),
            'categories' => $categories]);
    }

    public function medias(): Response
    {
        $this->setSeoMeta(
            'Médias et Ressources - PBP',
            'Consultez nos médias et ressources visuelles du Patrimoine Bâti Public de Guinée. Photos, vidéos et documents officiels.',
            ['médias', 'ressources', 'photos', 'vidéos', 'PBP']
        );

        return Inertia::render('Actualites/Medias', [
            'seo' => $this->getSeoData(),
        ]);
    }
}
