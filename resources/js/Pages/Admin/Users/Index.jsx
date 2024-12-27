import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Index({ users }) {

    return (
        <AuthenticatedLayout>
            <div className="max-w-7xl mx-auto py-8 px-4">
                <div className="mb-4">
                    <Link
                        href={route('admin.users.create')}
                        className="px-4 py-2 bg-primary text-white rounded"
                    >
                        Ajouter un utilisateur
                    </Link>
                </div>

                <div className="bg-white shadow rounded">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-50">
                                <th className="border p-4 text-left">Nom</th>
                                <th className="border p-4 text-left">Email</th>
                                <th className="border p-4 text-left">Rôle</th>
                                <th className="border p-4 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.data.map((user) => (
                                <tr key={user.id}>
                                    <td className="border p-4">{user.name}</td>
                                    <td className="border p-4">{user.email}</td>
                                    <td className="border p-4">{user.role}</td>
                                    <td className="border p-4 space-x-2">
                                        <Link
                                            href={route('admin.users.edit', user.id)}
                                            className="text-blue-500"
                                        >
                                            Modifier
                                        </Link>
                                        <Link
                                            method="delete"
                                            as="button"
                                            href={route('admin.users.destroy', user.id)}
                                            className="text-red-500"
                                        >
                                            Supprimer
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
