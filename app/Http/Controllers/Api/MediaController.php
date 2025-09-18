<?php

namespace App\Http\Controllers\Api;

use App\Models\Media;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MediaController extends Controller
{
    /**
     * Récupérer les médias avec filtres (type, catégorie, recherche) et pagination.
     */
    public function index(Request $request)
    {
        $query = Media::query();

        // Appliquer le filtre par type (image, video)
        if ($request->has('type') && $request->type !== 'all' && $request->type !== 'photo') {
            $query->where('type', $request->type);
        } elseif ($request->has('type') && $request->type === 'photo') {
            $query->where('type', 'image');
        }

        // Appliquer le filtre par catégorie
        if ($request->has('category') && $request->category !== 'all' && $request->category !== 'Tous') {
            $query->where('category', $request->category);
        }

        // Appliquer le filtre par recherche
        if ($request->has('search') && $request->search) {
            $query->where(function ($q) use ($request) {
                $q->where('title', 'LIKE', '%' . $request->search . '%')
                  ->orWhere('description', 'LIKE', '%' . $request->search . '%')
                  ->orWhere('category', 'LIKE', '%' . $request->search . '%');
            });
        }

        // Tri
        $sortBy = $request->get('sort_by', 'created_at');
        $sortOrder = $request->get('sort_order', 'desc');
        
        // Mapper les valeurs de tri
        $sortMapping = [
            'date' => 'created_at',
            'title' => 'title',
            'category' => 'category'
        ];
        
        $actualSortBy = $sortMapping[$sortBy] ?? 'created_at';
        $query->orderBy($actualSortBy, $sortOrder);

        // Pagination
        $perPage = $request->get('per_page', 12);
        $medias = $query->paginate($perPage);

        return response()->json([
            'data' => $medias->items(),
            'current_page' => $medias->currentPage(),
            'last_page' => $medias->lastPage(),
            'per_page' => $medias->perPage(),
            'total' => $medias->total(),
            'from' => $medias->firstItem(),
            'to' => $medias->lastItem(),
            'has_more_pages' => $medias->hasMorePages(),
            'links' => $medias->links()->elements
        ]);
    }
}
