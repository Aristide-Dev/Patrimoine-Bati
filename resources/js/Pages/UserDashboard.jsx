// resources/js/Pages/UserDashboard.jsx

import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Users, FileText, Building2, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Card } from '@/Components/ui/card';
import { formatNumber, formatDate } from '@/lib/utils';

export default function UserDashboard({ stats }) {
    return (
        <AuthenticatedLayout>
            <Head title="Tableau de bord" />

            <div className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Tableau de bord</h1>

                {/* Statistiques */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card className="p-6 bg-white shadow-lg rounded-xl">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Total Demandes</p>
                                <h3 className="text-2xl font-bold text-gray-900 mt-2">
                                    {stats.demandes.total}
                                </h3>
                            </div>
                            <div className="p-3 bg-blue-100 rounded-full">
                                <FileText className="w-6 h-6 text-blue-600" />
                            </div>
                        </div>
                    </Card>

                    <Card className="p-6 bg-white shadow-lg rounded-xl">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Demandes Payées</p>
                                <h3 className="text-2xl font-bold text-green-600 mt-2">
                                    {stats.demandes.paid}
                                </h3>
                            </div>
                            <div className="p-3 bg-green-100 rounded-full">
                                <CheckCircle className="w-6 h-6 text-green-600" />
                            </div>
                        </div>
                    </Card>

                    <Card className="p-6 bg-white shadow-lg rounded-xl">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Demandes en Attente</p>
                                <h3 className="text-2xl font-bold text-orange-600 mt-2">
                                    {stats.demandes.pending}
                                </h3>
                            </div>
                            <div className="p-3 bg-orange-100 rounded-full">
                                <Clock className="w-6 h-6 text-orange-600" />
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Liste des factures récentes */}
                <Card className="mt-8">
                    <div className="p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Factures Récentes</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-left border-b border-gray-200">
                                        <th className="pb-3 font-medium text-gray-600">#</th>
                                        <th className="pb-3 font-medium text-gray-600">Numéro</th>
                                        <th className="pb-3 font-medium text-gray-600">Département</th>
                                        <th className="pb-3 font-medium text-gray-600">Date Création</th>
                                        <th className="pb-3 font-medium text-gray-600">Date Échéance</th>
                                        <th className="pb-3 font-medium text-gray-600">Montant</th>
                                        <th className="pb-3 font-medium text-gray-600">Statut</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {stats.recent_invoices.map((invoice) => (
                                        <tr key={invoice.id} className="border-b border-gray-100">
                                            <td className="py-4">{invoice.id}</td>
                                            <td className="py-4 text-blue-600">
                                                #{invoice.invoice_number}
                                            </td>
                                            <td className="py-4">{invoice.department}</td>
                                            <td className="py-4">
                                                {formatDate(invoice.created_date)}
                                            </td>
                                            <td className="py-4">
                                                {formatDate(invoice.due_date)}
                                            </td>
                                            <td className="py-4">
                                                {formatNumber(invoice.amount)} GNF
                                            </td>
                                            <td className="py-4">
                                                <StatusBadge status={invoice.status} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}

// Composant pour afficher le statut
function StatusBadge({ status }) {
    const statusConfig = {
        paid: {
            color: 'bg-green-100 text-green-800',
            label: 'Payé'
        },
        pending: {
            color: 'bg-orange-100 text-orange-800',
            label: 'En attente'
        },
        partially_paid: {
            color: 'bg-blue-100 text-blue-800',
            label: 'Partiellement payé'
        }
    };

    const config = statusConfig[status] || statusConfig.pending;

    return (
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${config.color}`}>
            {config.label}
        </span>
    );
}