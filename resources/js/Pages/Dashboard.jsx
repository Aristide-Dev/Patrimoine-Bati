import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Users, FileText, Image } from 'lucide-react';

export default function Dashboard({ stats }) {
    return (
        <AuthenticatedLayout>
            <Head title="Tableau de bord" />

            <div className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Tableau de bord</h1>

                {/* Section Statistiques */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white shadow rounded-lg p-6 flex items-center space-x-4">
                        <div className="p-4 bg-primary text-white rounded-full">
                            <Users className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">Utilisateurs</h3>
                            <p className="text-2xl font-semibold text-gray-700">{stats.total_users}</p>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-lg p-6 flex items-center space-x-4">
                        <div className="p-4 bg-primary text-white rounded-full">
                            <Image className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">Médias</h3>
                            <p className="text-2xl font-semibold text-gray-700">{stats.total_medias}</p>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-lg p-6 flex items-center space-x-4">
                        <div className="p-4 bg-primary text-white rounded-full">
                            <FileText className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">Documents</h3>
                            <p className="text-2xl font-semibold text-gray-700">{stats.total_reports}</p>
                        </div>
                    </div>
                </div>

                {/* Section Graphiques ou Résumés */}
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Activité récente</h2>
                    <p className="text-gray-600">À venir : Graphiques et résumés...</p>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
