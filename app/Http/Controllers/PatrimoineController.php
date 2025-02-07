<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class PatrimoineController extends Controller
{
    public function map()
    {
        return Inertia::render('Patrimoine/Map', [
            'meta' => [
                'title' => 'Carte Interactive',
                'description' => 'Carte interactive du patrimoine bâti public'
            ]
        ]);
    }

    public function categories()
    {
        return Inertia::render('Patrimoine/Categories', [
            'meta' => [
                'title' => 'Catégories',
                'description' => 'Patrimoine bâti par catégorie'
            ]
        ]);
    }

    public function locations()
    {
        return Inertia::render('Patrimoine/Locations', [
            'meta' => [
                'title' => 'Localisations',
                'description' => 'Patrimoine bâti par localisation'
            ]
        ]);
    }

    public function historic()
    {
        return Inertia::render('Patrimoine/Historic', [
            'meta' => [
                'title' => 'Bâtiments Historiques',
                'description' => 'Patrimoine bâti historique'
            ]
        ]);
    }
} 