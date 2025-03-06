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
        if(auth()->user()->role === 'user')
        {
            // Données fictives pour le tableau de bord
            $stats = [
                'demandes' => [
                    'total' => 1170,
                    'paid' => 98,
                    'pending' => 1072,
                ],
                'recent_invoices' => [
                    [
                        'id' => 1,
                        'invoice_number' => 'INV-0001',
                        'department' => 'Direction des Infrastructures',
                        'created_date' => '2024-03-01',
                        'due_date' => '2024-03-08',
                        'amount' => 2500000,
                        'status' => 'paid'
                    ],
                    [
                        'id' => 2,
                        'invoice_number' => 'INV-0002',
                        'department' => 'Direction Administrative',
                        'created_date' => '2024-03-02',
                        'due_date' => '2024-03-09',
                        'amount' => 1800000,
                        'status' => 'pending'
                    ],
                    [
                        'id' => 3,
                        'invoice_number' => 'INV-0003',
                        'department' => 'Direction Technique',
                        'created_date' => '2024-03-03',
                        'due_date' => '2024-03-10',
                        'amount' => 3200000,
                        'status' => 'partially_paid'
                    ],
                ]
            ];
            return inertia('UserDashboard', ['stats' => $stats]);
        }


        $stats = [
            'total_users' => User::count(),
            'total_medias' => Media::count(),
            'total_reports' => Report::count(),
        ];

        return inertia('Dashboard', ['stats' => $stats]);
    }
}
