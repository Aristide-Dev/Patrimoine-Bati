<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class HousingController extends Controller
{
    public function administrative()
    {
        return Inertia::render('Housing/Administrative', [
            'meta' => [
                'title' => 'Logement Administratif',
                'description' => 'Demande de logement administratif'
            ]
        ]);
    }

    public function commercial()
    {
        return Inertia::render('Housing/Commercial', [
            'meta' => [
                'title' => 'Bail Commercial',
                'description' => 'Demande de bail commercial'
            ]
        ]);
    }

    public function storeAdministrative(Request $request)
    {
        $validated = $request->validate([
            'nom' => 'required|string|max:255',
            'prenom' => 'required|string|max:255',
            'email' => 'required|email',
            'telephone' => 'required|string',
            'fonction' => 'required|string',
            'service' => 'required|string',
            // Ajoutez d'autres règles de validation selon vos besoins
        ]);

        // Logique de traitement de la demande
        
        return redirect()->back()->with('success', 'Votre demande a été enregistrée avec succès');
    }

    public function storeCommercial(Request $request)
    {
        $validated = $request->validate([
            'nom_societe' => 'required|string|max:255',
            'responsable' => 'required|string|max:255',
            'email' => 'required|email',
            'telephone' => 'required|string',
            'activite' => 'required|string',
            // Ajoutez d'autres règles de validation selon vos besoins
        ]);

        // Logique de traitement de la demande
        
        return redirect()->back()->with('success', 'Votre demande a été enregistrée avec succès');
    }
} 