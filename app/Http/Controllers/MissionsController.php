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

    public function motDuCoordinateur(): Response
    {
        return Inertia::render('Missions/MotDuCoordinateur');
    }

    public function niveauxIntervention(): Response
    {
        return Inertia::render('Missions/NiveauxIntervention');
    }
}
