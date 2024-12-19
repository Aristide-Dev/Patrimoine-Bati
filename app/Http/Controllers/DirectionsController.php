<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DirectionsController extends Controller
{
    // Ressources Fiscales
    public function fiscales(): Response
    {
        return Inertia::render('Directions/Fiscales/Index');
    }

    public function fiscalesOrganisation(): Response
    {
        return Inertia::render('Directions/Fiscales/OrganisationMissions');
    }

    public function fiscalesContexte(): Response
    {
        return Inertia::render('Directions/Fiscales/ContexteReformesEtudes');
    }

    // Ressources Douanières
    public function douanieres(): Response
    {
        return Inertia::render('Directions/Douanieres/Index');
    }

    public function douanieresOrganisation(): Response
    {
        return Inertia::render('Directions/Douanieres/OrganisationMissions');
    }

    public function douanieresReformes(): Response
    {
        return Inertia::render('Directions/Douanieres/ReformesResultatsPerspectives');
    }

    // Ressources Non Fiscales
    public function nonFiscales(): Response
    {
        return Inertia::render('Directions/NonFiscales/Index');
    }

    public function nonFiscalesDefinition(): Response
    {
        return Inertia::render('Directions/NonFiscales/DefinitionEnjeuxReformes');
    }

    // Dépenses Fiscales et Arriérés
    public function depenses(): Response
    {
        return Inertia::render('Directions/Depenses/Index');
    }

    public function depensesFiscales(): Response
    {
        return Inertia::render('Directions/Depenses/DepensesFiscales');
    }

    public function arrieresFiscaux(): Response
    {
        return Inertia::render('Directions/Depenses/ArrieresFiscaux');
    }

    // Digitalisation
    public function digitalisation(): Response
    {
        return Inertia::render('Directions/Digitalisation/Index');
    }

    public function digitalisationEnjeux(): Response
    {
        return Inertia::render('Directions/Digitalisation/EnjeuxStrategiesDiagnostic');
    }

    public function digitalisationRenforcement(): Response
    {
        return Inertia::render('Directions/Digitalisation/RenforcementCapacitesProjets');
    }
}
