<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Media;
use App\Models\Report;

class DashboardController extends Controller
{
    public function index()
    {
        $stats = [
            'total_users' => User::count(),
            'total_medias' => Media::count(),
            'total_reports' => Report::count(),
        ];

        return inertia('Dashboard', ['stats' => $stats]);
    }
}
