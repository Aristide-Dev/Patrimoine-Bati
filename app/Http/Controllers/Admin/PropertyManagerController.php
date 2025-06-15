<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\PropertyManager;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

class PropertyManagerController extends Controller
{
    public function index(Request $request)
    {
        $query = PropertyManager::query()
            ->when($request->search, function($query, $search) {
                $query->where(function($q) use ($search) {
                    $q->where('nom', 'like', "%{$search}%")
                      ->orWhere('matricule', 'like', "%{$search}%")
                      ->orWhere('service', 'like', "%{$search}%");
                });
            })
            ->when($request->commune, function($query, $commune) {
                $query->where('commune', $commune);
            })
            ->when($request->statut, function($query, $statut) {
                $query->where('statut', $statut);
            });

        $managers = $query->latest()->paginate(100)->withQueryString();

        return Inertia::render('Admin/PropertyManagers/Index', [
            'managers' => $managers,
            'filters' => $request->only(['search', 'commune', 'statut']),
            'communes' => PropertyManager::COMMUNES,
            'statuts' => [
                PropertyManager::STATUT_FONCTIONNAIRE,
                PropertyManager::STATUT_CONTRACTUEL_PERMANENT,
                PropertyManager::STATUT_CONTRACTUEL_TEMPORAIRE,
                PropertyManager::STATUT_STAGIAIRE,
            ]
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/PropertyManagers/Create', [
            'communes' => PropertyManager::COMMUNES,
            'statuts' => [
                PropertyManager::STATUT_FONCTIONNAIRE,
                PropertyManager::STATUT_CONTRACTUEL_PERMANENT,
                PropertyManager::STATUT_CONTRACTUEL_TEMPORAIRE,
                PropertyManager::STATUT_STAGIAIRE,
            ]
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'matricule' => ['required', 'string', 'unique:property_managers,matricule'],
            'nom' => ['required', 'string', 'max:255'],
            'service' => ['required', 'string', 'max:255'],
            'poste' => ['required', 'string', 'max:255'],
            'telephone' => ['nullable', 'string', 'max:20'],
            'statut' => ['required', Rule::in([
                PropertyManager::STATUT_FONCTIONNAIRE,
                PropertyManager::STATUT_CONTRACTUEL_PERMANENT,
                PropertyManager::STATUT_CONTRACTUEL_TEMPORAIRE,
                PropertyManager::STATUT_STAGIAIRE,
            ])],
            'commune' => ['nullable', 'string', Rule::in(array_keys(PropertyManager::COMMUNES))],
            'description' => ['nullable', 'string'],
            'statistiques' => ['nullable', 'array'],
            'photo' => ['nullable', 'image', 'max:2048'],
            'is_active' => ['boolean'],
        ]);

        if ($request->hasFile('photo')) {
            $path = $request->file('photo')->store('managers', 'public');
            $validated['photo'] = $path;
        }

        PropertyManager::create($validated);

        return redirect()->route('admin.property-managers.index')
            ->with('success', 'Gérant ajouté avec succès.');
    }

    public function edit(PropertyManager $propertyManager)
    {
        return Inertia::render('Admin/PropertyManagers/Edit', [
            'manager' => $propertyManager,
            'communes' => PropertyManager::COMMUNES,
            'statuts' => [
                PropertyManager::STATUT_FONCTIONNAIRE,
                PropertyManager::STATUT_CONTRACTUEL_PERMANENT,
                PropertyManager::STATUT_CONTRACTUEL_TEMPORAIRE,
                PropertyManager::STATUT_STAGIAIRE,
            ]
        ]);
    }

    public function update(Request $request, PropertyManager $propertyManager)
    {
        $validated = $request->validate([
            'matricule' => ['required', 'string', Rule::unique('property_managers')->ignore($propertyManager->id)],
            'nom' => ['required', 'string', 'max:255'],
            'service' => ['required', 'string', 'max:255'],
            'poste' => ['required', 'string', 'max:255'],
            'telephone' => ['nullable', 'string', 'max:20'],
            'statut' => ['required', Rule::in([
                PropertyManager::STATUT_FONCTIONNAIRE,
                PropertyManager::STATUT_CONTRACTUEL_PERMANENT,
                PropertyManager::STATUT_CONTRACTUEL_TEMPORAIRE,
                PropertyManager::STATUT_STAGIAIRE,
            ])],
            'commune' => ['nullable', 'string', Rule::in(array_keys(PropertyManager::COMMUNES))],
            'description' => ['nullable', 'string'],
            'statistiques' => ['nullable', 'array'],
            'photo' => ['nullable', 'image', 'max:2048'],
            'is_active' => ['boolean'],
        ]);

        if ($request->hasFile('photo')) {
            // Supprimer l'ancienne photo si elle existe
            if ($propertyManager->photo) {
                Storage::disk('public')->delete($propertyManager->photo);
            }
            $path = $request->file('photo')->store('managers', 'public');
            $validated['photo'] = $path;
        }

        $propertyManager->update($validated);

        return redirect()->route('admin.property-managers.index')
            ->with('success', 'Gérant mis à jour avec succès.');
    }

    public function destroy(PropertyManager $propertyManager)
    {
        if ($propertyManager->photo) {
            Storage::disk('public')->delete($propertyManager->photo);
        }
        
        $propertyManager->delete();

        return redirect()->route('admin.property-managers.index')
            ->with('success', 'Gérant supprimé avec succès.');
    }
} 