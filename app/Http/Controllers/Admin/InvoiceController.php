<?php
// app/Http/Controllers/Admin/InvoiceController.php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class InvoiceController extends Controller
{
    public function index(Request $request)
    {
        // Données fictives pour la liste des factures de loyer
        $invoices = [
            [
                'id' => 1,
                'invoice_number' => 'LOY-0001',
                'department' => 'Direction des Infrastructures',
                'created_date' => '2024-03-01',
                'due_date' => '2024-03-31',
                'amount' => 2500000,
                'status' => 'paid',
                'property' => 'Bureau 101, Immeuble Administratif'
            ],
            [
                'id' => 2,
                'invoice_number' => 'LOY-0002',
                'department' => 'Direction Administrative',
                'created_date' => '2024-03-02',
                'due_date' => '2024-03-31',
                'amount' => 1800000,
                'status' => 'pending_payment',
                'property' => 'Local Commercial 205'
            ],
            [
                'id' => 3,
                'invoice_number' => 'LOY-0003',
                'department' => 'Service des Archives',
                'created_date' => '2024-03-01',
                'due_date' => '2024-03-31',
                'amount' => 3200000,
                'status' => 'partially_paid',
                'property' => 'Entrepôt Zone Portuaire'
            ],
            [
                'id' => 4,
                'invoice_number' => 'LOY-0004',
                'department' => 'Direction du Commerce',
                'created_date' => '2024-02-28',
                'due_date' => '2024-03-31',
                'amount' => 2100000,
                'status' => 'pending_verification',
                'property' => 'Boutique 304, Marché Central'
            ],
            [
                'id' => 5,
                'invoice_number' => 'LOY-0005',
                'department' => 'Direction de la Santé',
                'created_date' => '2024-03-01',
                'due_date' => '2024-03-31',
                'amount' => 4500000,
                'status' => 'payment_plan',
                'property' => 'Centre Médical, Ratoma'
            ],
            [
                'id' => 6,
                'invoice_number' => 'LOY-0006',
                'department' => 'Service Postal',
                'created_date' => '2024-03-01',
                'due_date' => '2024-03-31',
                'amount' => 1500000,
                'status' => 'late_payment',
                'property' => 'Bureau de Poste Principal'
            ],
            [
                'id' => 7,
                'invoice_number' => 'LOY-0007',
                'department' => 'Direction de l\'Éducation',
                'created_date' => '2024-03-01',
                'due_date' => '2024-03-31',
                'amount' => 3800000,
                'status' => 'under_review',
                'property' => 'Centre de Formation, Matam'
            ],
            [
                'id' => 8,
                'invoice_number' => 'LOY-0008',
                'department' => 'Police Nationale',
                'created_date' => '2024-03-01',
                'due_date' => '2024-03-31',
                'amount' => 2800000,
                'status' => 'disputed',
                'property' => 'Poste de Police, Dixinn'
            ],
            [
                'id' => 9,
                'invoice_number' => 'LOY-0009',
                'department' => 'Service des Sports',
                'created_date' => '2024-03-01',
                'due_date' => '2024-03-31',
                'amount' => 5000000,
                'status' => 'pending_approval',
                'property' => 'Complexe Sportif'
            ],
            [
                'id' => 10,
                'invoice_number' => 'LOY-0010',
                'department' => 'Direction des Finances',
                'created_date' => '2024-03-01',
                'due_date' => '2024-03-31',
                'amount' => 4200000,
                'status' => 'processing',
                'property' => 'Trésorerie Principale'
            ],
            [
                'id' => 11,
                'invoice_number' => 'LOY-0011',
                'department' => 'Service Juridique',
                'created_date' => '2024-03-01',
                'due_date' => '2024-03-31',
                'amount' => 2900000,
                'status' => 'awaiting_documents',
                'property' => 'Palais de Justice'
            ],
            [
                'id' => 12,
                'invoice_number' => 'LOY-0012',
                'department' => 'Direction de l\'Agriculture',
                'created_date' => '2024-03-01',
                'due_date' => '2024-03-31',
                'amount' => 1900000,
                'status' => 'payment_confirmed',
                'property' => 'Centre Agricole'
            ],
            [
                'id' => 13,
                'invoice_number' => 'LOY-0013',
                'department' => 'Service des Douanes',
                'created_date' => '2024-03-01',
                'due_date' => '2024-03-31',
                'amount' => 3500000,
                'status' => 'bank_transfer_pending',
                'property' => 'Bureau des Douanes'
            ],
            [
                'id' => 14,
                'invoice_number' => 'LOY-0014',
                'department' => 'Direction de l\'Environnement',
                'created_date' => '2024-03-01',
                'due_date' => '2024-03-31',
                'amount' => 2600000,
                'status' => 'payment_scheduled',
                'property' => 'Centre Écologique'
            ],
            [
                'id' => 15,
                'invoice_number' => 'LOY-0015',
                'department' => 'Service des Mines',
                'created_date' => '2024-03-01',
                'due_date' => '2024-03-31',
                'amount' => 4800000,
                'status' => 'first_reminder_sent',
                'property' => 'Bureau des Mines'
            ],
            [
                'id' => 16,
                'invoice_number' => 'LOY-0016',
                'department' => 'Direction du Tourisme',
                'created_date' => '2024-03-01',
                'due_date' => '2024-03-31',
                'amount' => 3100000,
                'status' => 'second_reminder_sent',
                'property' => 'Office du Tourisme'
            ],
            [
                'id' => 17,
                'invoice_number' => 'LOY-0017',
                'department' => 'Service des Transports',
                'created_date' => '2024-03-01',
                'due_date' => '2024-03-31',
                'amount' => 2700000,
                'status' => 'final_notice',
                'property' => 'Gare Routière'
            ],
            [
                'id' => 18,
                'invoice_number' => 'LOY-0018',
                'department' => 'Direction de l\'Urbanisme',
                'created_date' => '2024-03-01',
                'due_date' => '2024-03-31',
                'amount' => 3900000,
                'status' => 'legal_action_pending',
                'property' => 'Centre Urbanisme'
            ],
            [
                'id' => 19,
                'invoice_number' => 'LOY-0019',
                'department' => 'Service Social',
                'created_date' => '2024-03-01',
                'due_date' => '2024-03-31',
                'amount' => 2200000,
                'status' => 'payment_arrangement_requested',
                'property' => 'Centre Social'
            ],
            [
                'id' => 20,
                'invoice_number' => 'LOY-0020',
                'department' => 'Direction de la Culture',
                'created_date' => '2024-03-01',
                'due_date' => '2024-03-31',
                'amount' => 4100000,
                'status' => 'payment_arrangement_approved',
                'property' => 'Centre Culturel'
            ],
            [
                'id' => 21,
                'invoice_number' => 'LOY-0021',
                'department' => 'Service Vétérinaire',
                'created_date' => '2024-03-01',
                'due_date' => '2024-03-31',
                'amount' => 1700000,
                'status' => 'payment_arrangement_declined',
                'property' => 'Clinique Vétérinaire'
            ],
            [
                'id' => 22,
                'invoice_number' => 'LOY-0022',
                'department' => 'Direction de la Pêche',
                'created_date' => '2024-03-01',
                'due_date' => '2024-03-31',
                'amount' => 3300000,
                'status' => 'partial_payment_received',
                'property' => 'Port de Pêche'
            ],
            [
                'id' => 23,
                'invoice_number' => 'LOY-0023',
                'department' => 'Service Météorologique',
                'created_date' => '2024-03-01',
                'due_date' => '2024-03-31',
                'amount' => 2400000,
                'status' => 'overpayment_received',
                'property' => 'Station Météo'
            ],
            [
                'id' => 24,
                'invoice_number' => 'LOY-0024',
                'department' => 'Direction de l\'Artisanat',
                'created_date' => '2024-03-01',
                'due_date' => '2024-03-31',
                'amount' => 1600000,
                'status' => 'refund_in_process',
                'property' => 'Village Artisanal'
            ],
            [
                'id' => 25,
                'invoice_number' => 'LOY-0025',
                'department' => 'Service des Eaux',
                'created_date' => '2024-03-01',
                'due_date' => '2024-03-31',
                'amount' => 2900000,
                'status' => 'payment_on_hold',
                'property' => 'Station de Traitement'
            ],
            [
                'id' => 26,
                'invoice_number' => 'LOY-0026',
                'department' => 'Direction des Télécommunications',
                'created_date' => '2024-03-01',
                'due_date' => '2024-03-31',
                'amount' => 5200000,
                'status' => 'technical_issue',
                'property' => 'Centre Télécom'
            ],
            [
                'id' => 27,
                'invoice_number' => 'LOY-0027',
                'department' => 'Service de l\'Immigration',
                'created_date' => '2024-03-01',
                'due_date' => '2024-03-31',
                'amount' => 3700000,
                'status' => 'waiting_for_approval',
                'property' => 'Bureau Immigration'
            ],
            [
                'id' => 28,
                'invoice_number' => 'LOY-0028',
                'department' => 'Direction de l\'Énergie',
                'created_date' => '2024-03-01',
                'due_date' => '2024-03-31',
                'amount' => 4400000,
                'status' => 'contract_review',
                'property' => 'Centre Énergétique'
            ],
            [
                'id' => 29,
                'invoice_number' => 'LOY-0029',
                'department' => 'Service des Pompiers',
                'created_date' => '2024-03-01',
                'due_date' => '2024-03-31',
                'amount' => 3000000,
                'status' => 'budget_allocation_pending',
                'property' => 'Caserne Pompiers'
            ],
            [
                'id' => 30,
                'invoice_number' => 'LOY-0030',
                'department' => 'Direction des Archives',
                'created_date' => '2024-03-01',
                'due_date' => '2024-03-31',
                'amount' => 2800000,
                'status' => 'payment_processing',
                'property' => 'Centre Archives'
            ]
        ];

        return Inertia::render('Admin/invoices/Index', [
            'invoices' => $invoices,
            'filters' => $request->all(['search', 'status', 'date_from', 'date_to']),
        ]);
    }

    public function show($id)
    {
        // Données fictives pour une facture de loyer spécifique
        $invoice = [
            'id' => $id,
            'invoice_number' => 'LOY-000' . $id,
            'created_date' => '2024-03-01',
            'due_date' => '2024-03-31',
            'status' => 'paid',
            'client' => [
                'name' => 'Direction des Infrastructures',
                'address' => 'Commune de Kaloum, Conakry',
                'phone' => '+224 666 12 34 56',
                'email' => 'contact@infrastructures.gov.gn'
            ],
            'property' => [
                'name' => 'Bureau 101',
                'address' => 'Immeuble Administratif, Kaloum',
                'type' => 'Bureau',
                'surface' => '75m²'
            ],
            'items' => [
                [
                    'id' => 1,
                    'description' => 'Loyer mensuel - Bureau 101',
                    'quantity' => 1,
                    'unit_price' => 2000000,
                    'total' => 2000000
                ],
                [
                    'id' => 2,
                    'description' => 'Charges communes (eau, électricité)',
                    'quantity' => 1,
                    'unit_price' => 500000,
                    'total' => 500000
                ]
            ],
            'subtotal' => 2500000,
            'tax' => 450000,
            'total' => 2950000,
            'payment_terms' => 'Paiement à effectuer avant le 5 du mois',
            'notes' => 'En cas de retard, des pénalités seront appliquées conformément au contrat de bail'
        ];

        return Inertia::render('Admin/invoices/Show', [
            'invoice' => $invoice
        ]);
    }
}
