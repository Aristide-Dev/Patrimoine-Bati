<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'flash' => function () use ($request) {
                $flash = [];
                
                // Message générique
                if ($request->session()->has('message')) {
                    $flash['message'] = $request->session()->get('message');
                    $flash['type'] = $request->session()->get('type', 'info');
                }
                
                // Message de succès
                if ($request->session()->has('success')) {
                    $flash['message'] = $request->session()->get('success');
                    $flash['type'] = 'success';
                }
                
                // Message d'erreur
                if ($request->session()->has('error')) {
                    $flash['message'] = $request->session()->get('error');
                    $flash['type'] = 'error';
                }
                
                // Message d'information
                if ($request->session()->has('info')) {
                    $flash['message'] = $request->session()->get('info');
                    $flash['type'] = 'info';
                }
                
                // Message d'avertissement
                if ($request->session()->has('warning')) {
                    $flash['message'] = $request->session()->get('warning');
                    $flash['type'] = 'warning';
                }
                
                return $flash;
            },
        ];
    }
}
