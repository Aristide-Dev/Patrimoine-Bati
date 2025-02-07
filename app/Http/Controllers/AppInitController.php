<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;

class AppInitController extends Controller
{
    public function init():RedirectResponse
    {
        $name = config('PBP.appInit.name');
        $email = config('PBP.appInit.email');
        $password = config('PBP.appInit.password');

        if($this->canInit() == false)
        {
            return redirect()->route('login');
        }

        $user = $this->register($name, $email, $password);

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('dashboard', absolute: false));
    }

    private function register($name, $email, $password): User
    {
        $user = User::create([
            'name' => $name,
            'email' => $email,
            'password' => Hash::make($password),
            'role' => 'admin',
        ]);
        return $user;
    }

    private function canInit(): bool
    {
        $users_count = User::count();
        return ($users_count > 0) ? false : true;
    }
}
