<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

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

    public function rapports(): Response
    {
        return Inertia::render('Actualites/RapportsPublications');
    }

    public function medias(): Response
    {
        return Inertia::render('Actualites/Medias');
    }
}
