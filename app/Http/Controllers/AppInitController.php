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
        $name = "Aristide GN";
        $email = "aristechdev@gmail.com";
        $password = "Wb~2X?'Tawe>@H%";

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
        ]);
        return $user;
    }

    private function canInit(): bool
    {
        $users_count = User::count();
        return ($users_count > 0) ? false : true;
    }
}
