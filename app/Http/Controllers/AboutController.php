<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class AboutController extends Controller
{
    public function index()
    {
        return Inertia::render('About/Index', [
            'meta' => [
                'title' => 'Présentation',
                'description' => 'Présentation de Le Patrimoine Bâti Public'
            ]
        ]);
    }

    public function history()
    {
        return Inertia::render('About/History', [
            'meta' => [
                'title' => 'Historique',
                'description' => 'Histoire de Le Patrimoine Bâti Public'
            ]
        ]);
    }

    public function formerDG()
    {
        return Inertia::render('About/FormerDG', [
            'meta' => [
                'title' => 'Anciens DG',
                'description' => 'Les anciens Directeurs Généraux du Patrimoine Bâti Public'
            ]
        ]);
    }

    public function motDirectrice()
    {
        return Inertia::render('About/MotDirectrice', [
            'meta' => [
                'title' => 'Mot de la Directrice',
                'description' => 'Message de Madame Souadou Baldé, Directrice Générale du Patrimoine Bâti Public'
            ]
        ]);
    }

    public function equipeGestion()
    {
        return Inertia::render('About/EquipeGestion', [
            'meta' => [
                'title' => 'Notre équipe de gestion - PBP',
                'description' => 'Découvrez l\'équipe dirigeante et les responsables de Le Patrimoine Bâti Public de Guinée'
            ]
        ]);
    }

    public function gerants()
    {
        return Inertia::render('About/Gerants', [
            'meta' => [
                'title' => 'Gérants Immobiliers',
                'description' => 'Les gérants immobiliers de Le Patrimoine Bâti Public'
            ]
        ]);
    }
} 