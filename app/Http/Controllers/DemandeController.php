<?php

namespace App\Http\Controllers;

use App\Models\Demande;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DemandeController extends Controller
{
    public function formulaire()
    {
        $formData = [
            'typesDemande' => [
                'logement' => 'Logement Administratif',
                'bail' => 'Bail Commercial'
            ],
            'communes' => [
                'Kaloum',
                'Dixinn',
                'Matam',
                'Ratoma',
                'Matoto'
            ],
            'situations' => [
                'Célibataire',
                'Marié(e)',
                'Divorcé(e)',
                'Veuf(ve)'
            ],
            'typesBien' => [
                'logement' => [
                    'Villa',
                    'Appartement',
                    'Studio'
                ],
                'bail' => [
                    'Local Commercial',
                    'Entrepôt',
                    'Bureau'
                ]
            ]
        ];

        return Inertia::render('Demandes/Formulaire', $formData);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nom' => 'required|string|max:255',
            'prenom' => 'required|string|max:255',
            'matricule' => 'required|string|max:255',
            'fonction' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'telephone' => 'required|string|max:255',
            'type_demande' => 'required|in:logement,bail',
            'type_bien' => 'required|in:Villa,Appartement,Studio,Local Commercial,Entrepôt,Bureau',
            'situation_matrimoniale' => 'required|in:Célibataire,Marié(e),Divorcé(e),Veuf(ve)',
            'commune' => 'required|string',
            'quartier' => 'required|string',
            'precision' => 'required|string',
            'photo' => 'required|file|mimes:jpg,jpeg,png,pdf',
            'carte_identite' => 'required|file|mimes:jpg,jpeg,png,pdf',
            'demande_manuscrite' => 'required|file|mimes:jpg,jpeg,png,pdf',
            'bulletin_salaire' => 'required|file|mimes:jpg,jpeg,png,pdf',
        ]);

        // Gérer le téléchargement des fichiers
        $photo = $request->file('photo')->store('demandes/photos', 'public');
        $carteIdentite = $request->file('carte_identite')->store('demandes/cartes', 'public');
        $demandeManuscrite = $request->file('demande_manuscrite')->store('demandes/manuscrites', 'public');
        $bulletinSalaire = $request->file('bulletin_salaire')->store('demandes/bulletins', 'public');

        $demande = Demande::create([
            ...$validated,
            'photo' => $photo,
            'carte_identite' => $carteIdentite,
            'demande_manuscrite' => $demandeManuscrite,
            'bulletin_salaire' => $bulletinSalaire,
        ]);

        return redirect()->back()->with('success', 'Votre demande a été enregistrée avec succès.');
    }

    public function newDemande()
    {
        return Inertia::render('Demandes/NewDemande');
    }
} 