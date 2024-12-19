<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MissionsController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Missions/Index');
    }

    public function generales(): Response
    {
        return Inertia::render('Missions/Generales');
    }

    public function niveauxIntervention(): Response
    {
        return Inertia::render('Missions/NiveauxIntervention');
    }

    public function thematiques(): Response
    {
        return Inertia::render('Missions/Thematiques');
    }
}
