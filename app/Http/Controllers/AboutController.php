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
                'description' => 'Présentation de la Direction Générale du Patrimoine Bâti Public'
            ]
        ]);
    }

    public function history()
    {
        return Inertia::render('About/History', [
            'meta' => [
                'title' => 'Historique',
                'description' => 'Histoire de la Direction Générale du Patrimoine Bâti Public'
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
} 