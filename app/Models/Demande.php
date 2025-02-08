<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Demande extends Model
{
    protected $fillable = [
        'nom',
        'prenom',
        'matricule',
        'fonction',
        'email',
        'telephone',
        'situation_matrimoniale',
        'type_demande',
        'type_bien',
        'commune',
        'quartier',
        'precision',
        'photo',


        'carte_identite',
        'demande_manuscrite',
        'bulletin_salaire',
        'status'
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
} 