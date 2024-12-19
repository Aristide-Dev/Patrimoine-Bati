<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AProposController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('APropos/Index');
    }

    public function contexte(): Response
    {
        return Inertia::render('APropos/Contexte');
    }

    public function cadreJuridique(): Response
    {
        return Inertia::render('APropos/CadreJuridique');
    }

    public function objectifsEnjeux(): Response
    {
        return Inertia::render('APropos/ObjectifsEnjeux');
    }

    public function principesAction(): Response
    {
        return Inertia::render('APropos/PrincipesAction');
    }

    public function organisation(): Response
    {
        return Inertia::render('APropos/Organisation');
    }

    public function partenaires(): Response
    {
        return Inertia::render('APropos/Partenaires');
    }
}
