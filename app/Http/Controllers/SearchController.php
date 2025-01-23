<?php

namespace App\Http\Controllers;

use App\Models\News;
use Inertia\Inertia;
use App\Models\Media;
use App\Models\Report;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function index(Request $request)
    {
        $query = $request->input('q');
    
        if (!$query) {
            return Inertia::render('Search/Index', [
                'query' => '',
                'articles' => [],
                'medias' => [],
                'documents' => [],
            ]);
        }
    
        $articles = News::where('title', 'like', "%{$query}%")
                        ->orWhere('content', 'like', "%{$query}%")
                        ->orWhere('excerpt', 'like', "%{$query}%")
                        ->get();
    
        $medias = Media::where('title', 'like', "%{$query}%")
                        ->orWhere('description', 'like', "%{$query}%")
                        ->get();
    
        $documents = Report::where('title', 'like', "%{$query}%")
                        ->orWhere('description', 'like', "%{$query}%")
                        ->get();
    
        // if ($request->ajax()) {
        //     return response()->json([
        //         'articles' => $articles,
        //         'medias' => $medias,
        //         'documents' => $documents,
        //     ]);
        // }
    
        return Inertia::render('Search/Index', [
            'query' => $query,
            'articles' => $articles,
            'medias' => $medias,
            'documents' => $documents,
        ]);
    }
    
} 