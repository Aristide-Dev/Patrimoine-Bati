<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->role === 'admin';
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, User $model): bool
    {
        return $user->role === 'admin' || $user->id === $model->id;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->role === 'admin';
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, User $model): bool
    {
        // L'admin peut modifier n'importe quel utilisateur
        if ($user->role === 'admin') {
            return true;
        }

        // Un utilisateur ne peut pas modifier un admin
        if ($model->role === 'admin' && $user->role !== 'admin') {
            return false;
        }

        // Un utilisateur peut modifier son propre profil
        return $user->id === $model->id;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, User $model): bool
    {
        // Un admin ne peut pas se supprimer lui-même
        if ($user->id === $model->id) {
            return false;
        }

        // Seul un admin peut supprimer des utilisateurs
        return $user->role === 'admin';
    }
} 