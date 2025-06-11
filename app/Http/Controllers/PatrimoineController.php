<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PatrimoineController extends Controller
{
    public function categories()
    {
        return Inertia::render('Patrimoine/Categories', [
            'meta' => [
                'title' => 'Catégories du Patrimoine Bâti - Classification des Édifices Publics Guinéens',
                'description' => 'Découvrez les différentes catégories du patrimoine bâti public de Guinée : édifices administratifs, religieux, éducatifs, sanitaires, industriels et résidentiels.',
                'keywords' => 'catégories patrimoine Guinée, classification édifices publics, bâtiments administratifs Guinée'
            ]
        ]);
    }

    public function historic()
    {
        return Inertia::render('Patrimoine/Historic', [
            'meta' => [
                'title' => 'Patrimoine Historique Guinéen - Monuments et Sites d\'Importance Culturelle',
                'description' => 'Découvrez le patrimoine historique de Guinée : monuments historiques, sites coloniaux, édifices d\'époque et lieux de mémoire nationale.',
                'keywords' => 'patrimoine historique Guinée, monuments historiques Conakry, sites coloniaux Guinée'
            ]
        ]);
    }

    public function locations()
    {
        return Inertia::render('Patrimoine/Locations', [
            'meta' => [
                'title' => 'Localisations du Patrimoine Bâti - Répartition Géographique en Guinée',
                'description' => 'Découvrez la répartition géographique du patrimoine bâti public de Guinée par région, préfecture et commune.',
                'keywords' => 'localisation patrimoine Guinée, répartition géographique édifices publics'
            ]
        ]);
    }
} 