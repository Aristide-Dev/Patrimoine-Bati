<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PropertyManager extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'matricule',
        'nom',
        'service',
        'poste',
        'telephone',
        'statut',
        'commune',
        'description',
        'statistiques',
        'photo',
        'is_active'
    ];

    protected $casts = [
        'statistiques' => 'array',
        'is_active' => 'boolean'
    ];

    // Constantes pour les statuts
    const STATUT_FONCTIONNAIRE = 'Fonctionnaire de l\'État';
    const STATUT_CONTRACTUEL_PERMANENT = 'Contractuel de l\'État - Permanent';
    const STATUT_CONTRACTUEL_TEMPORAIRE = 'Contractuel de l\'État - Temporaire';
    const STATUT_STAGIAIRE = 'Stagiaire';

    // Liste des communes de Conakry et bâtiments spéciaux
    const COMMUNES = [
        // Communes
        'Kaloum' => 'Centre administratif et commercial de Conakry',
        'Dixinn' => 'Zone résidentielle et universitaire',
        'Matam' => 'Quartier commercial et résidentiel',
        'Ratoma' => 'Plus grande commune de Conakry',
        'Matoto' => 'Zone industrielle et résidentielle',
        'Kaporo' => 'Nouvelle zone d\'expansion urbaine',
        // Bâtiments spéciaux
        'R2000' => 'La Résidence 2000 est un complexe résidentiel moderne situé dans la commune de Ratoma, comprenant des appartements de standing et des espaces commerciaux.',
        'Moussoudougou' => 'Le quartier Moussoudougou abrite un ensemble d\'immeubles résidentiels destinés aux fonctionnaires de l\'État, avec des infrastructures communautaires.',
        'Fria Base' => 'La Base de Fria est un complexe résidentiel historique lié au secteur minier, comprenant des logements et des équipements collectifs.',
        'CPL' => 'Le Complexe Patrice Lumumba est un centre polyvalent majeur comprenant des bureaux administratifs, des espaces commerciaux et des installations culturelles.'
    ];

    // Scope pour les gérants actifs
    public function scopeActif($query)
    {
        return $query->where('is_active', true);
    }

    // Scope pour filtrer par commune
    public function scopeParCommune($query, $commune)
    {
        return $query->where('commune', $commune);
    }

    // Scope pour filtrer par statut
    public function scopeParStatut($query, $statut)
    {
        return $query->where('statut', $statut);
    }

    // Accesseur pour obtenir les statistiques formatées
    public function getStatistiquesFormatteesAttribute()
    {
        $stats = $this->statistiques ?? [];
        return [
            'batiments' => $stats['batiments'] ?? '0',
            'locataires' => $stats['locataires'] ?? '0',
            'taux_occupation' => $stats['taux_occupation'] ?? '0%'
        ];
    }
} 