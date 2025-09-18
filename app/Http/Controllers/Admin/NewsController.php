<?php

namespace App\Http\Controllers\Admin;

use App\Models\News;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;


class NewsController extends Controller
{
    public function index(Request $request)
    {
        $query = News::query();

        // Filtrage par catégorie
        if ($request->filled('category') && $request->category !== 'all') {
            $query->where('category', $request->category);
        }

        // Recherche par titre
        if ($request->filled('search')) {
            $query->where('title', 'like', '%' . $request->search . '%');
        }

        // Tri
        $sortBy = $request->get('sort_by', 'published_at');
        $sortDirection = $request->get('sort_direction', 'desc');
        $query->orderBy($sortBy, $sortDirection);

        $news = $query->paginate(20)->withQueryString();

        return inertia('Admin/News/Index', [
            'news' => $news,
            'filters' => $request->only(['search', 'category', 'sort_by', 'sort_direction'])
        ]);
    }

    public function create()
    {
        return inertia('Admin/News/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'excerpt' => 'nullable|string',
            'content' => 'nullable|string',
            'image' => 'nullable|image|max:2048',
            'category' => 'nullable|string|max:255',
            'tags' => 'nullable|array',
            'tags.*' => 'string|max:50',
            'featured' => 'nullable|boolean',
            'published_at' => 'nullable|date',
        ]);
        // dd($request);

        if ($request->featured) {
            $featuredCount = News::where('featured', true)->count();
            if ($featuredCount >= 5) {
                return redirect()->back()->withErrors(['featured' => 'Vous ne pouvez pas avoir plus de 5 articles à la une.']);
            }
        }
        

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('news_images','public');
        }

        $validated['tags'] = json_encode($validated['tags'] ?? []);

        $validated['slug'] = News::generateUniqueSlug($validated['title']);

        News::create($validated);

        return redirect()->route('admin.news.index')->with('success', 'Actualité créée avec succès.');
    }

    public function edit(News $news)
    {
        // dd($news);
        $news->tags = json_decode($news->tags, true) ?? [];
        return inertia('Admin/News/Edit', ['news' => $news]);
    }

    public function update(Request $request, News $news)
    {
        // dd($request);
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'excerpt' => 'nullable|string',
            'content' => 'nullable|string',
            'image' => 'nullable|image|max:2048',
            'category' => 'nullable|string|max:255',
            'tags' => 'nullable|array',
            // 'tags.*' => 'string|max:50',
            'featured' => 'nullable|boolean',
            'published_at' => 'nullable|date',
        ]);

        if ($request->featured) {
            $featuredCount = News::where('featured', true)->count();
            if ($featuredCount >= 5) {
                return redirect()->back()->withErrors(['featured' => 'Vous ne pouvez pas avoir plus de 5 articles à la une.']);
            }
        }

        if ($request->hasFile('image')) {
            // Supprimer l'ancienne image si elle existe
            if ($news->image) {
                Storage::delete($news->image);
            }
            $validated['image'] = $request->file('image')->store('news_images', 'public');
        }else{
            unset($validated['image']);
        }

        $validated['featured'] = $validated['featured'] ? true:false;


        $validated['tags'] = json_encode($validated['tags'] ?? []);

        $validated['slug'] = News::generateUniqueSlug($validated['title'], $news->id);

        $news->update($validated);

        return redirect()->route('admin.news.index')->with('success', 'Actualité mise à jour avec succès.');
    }

    public function destroy(News $news)
    {
        if ($news->image) {
            Storage::delete($news->image);
        }

        $news->delete();

        return redirect()->route('admin.news.index')->with('success', 'Actualité supprimée avec succès.');
    }
}
