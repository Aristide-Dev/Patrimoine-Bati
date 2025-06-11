<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Contact extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom',
        'email',
        'telephone',
        'sujet',
        'message',
        'status',
        'ip_address',
        'user_agent',
        'lu',
        'lu_le'
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
        'lu_le' => 'datetime',
        'lu' => 'boolean',
    ];

    /**
     * Scope pour les messages non lus
     */
    public function scopeUnread($query)
    {
        return $query->where('lu', false);
    }

    /**
     * Scope pour les messages lus
     */
    public function scopeRead($query)
    {
        return $query->where('lu', true);
    }

    /**
     * Accesseur pour formater le nom complet
     */
    public function getFullNameAttribute()
    {
        return $this->nom;
    }

    /**
     * Accesseur pour vérifier si le message est récent (moins de 24h)
     */
    public function getIsRecentAttribute()
    {
        return $this->created_at->diffInHours(now()) < 24;
    }
} 