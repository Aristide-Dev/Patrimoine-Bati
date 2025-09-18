<?php

namespace App\Http\Controllers\Api;

use App\Models\News;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ArticleController extends Controller
{
    public function index(Request $request)
    {
        // Appliquer des filtres et pagination
        $articles = News::query()
            ->when($request->search, function ($query, $search) {
                $query->where('title', 'like', "%{$search}%")
                    ->orWhere('excerpt', 'like', "%{$search}%")
                    ->orWhere('content', 'like', "%{$search}%");
            })
            ->when($request->category, function ($query, $category) {
                $query->where('category', $category);
            })
            ->orderBy($request->get('sort', 'created_at'), $request->get('direction', 'desc'))
            ->paginate($request->get('per_page', 6));
            
            // Décoder les tags en tableau pour chaque article
            $articles->getCollection()->transform(function ($article) {
                $article->tags = json_decode($article->tags, true) ?? [];
                return $article;
            });

        return response()->json([
            'data' => $articles->items(),
            'current_page' => $articles->currentPage(),
            'last_page' => $articles->lastPage(),
            'per_page' => $articles->perPage(),
            'total' => $articles->total(),
            'from' => $articles->firstItem(),
            'to' => $articles->lastItem(),
            'has_more_pages' => $articles->hasMorePages(),
            'meta' => [
                'current_page' => $articles->currentPage(),
                'last_page' => $articles->lastPage(),
                'per_page' => $articles->perPage(),
                'total' => $articles->total(),
                'from' => $articles->firstItem(),
                'to' => $articles->lastItem(),
                'has_more_pages' => $articles->hasMorePages(),
            ]
        ]);
    }
    public function featured(Request $request)
    {
        // Appliquer des filtres et pagination
        $articles = News::where('featured', true)
            ->orderBy('created_at', 'desc') // On trie du plus récent au plus ancien
            ->limit(3)
            ->get();
            
            // Décoder les tags en tableau pour chaque article
            // $articles->getCollection()->transform(function ($article) {
            //     $article->tags = json_decode($article->tags, true) ?? [];
            //     return $article;
            // });

        return response()->json($articles);
    }
}
