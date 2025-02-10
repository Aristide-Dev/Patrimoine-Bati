import React from 'react';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Form({ user = null, roles }) {
    const { data, setData, post, put, processing, errors } = useForm({
        name: user?.name || '',
        email: user?.email || '',
        password: '',
        role: user?.role || 'user',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (user) {
            put(route('admin.users.update', user.id));
        } else {
            post(route('admin.users.store'));
        }
    };

    return (
        <AuthenticatedLayout>
            <div className="max-w-4xl mx-auto py-8 px-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label>Nom</label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className="w-full border"
                        />
                        {errors.name && <div className="text-red-500">{errors.name}</div>}
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className="w-full border"
                        />
                        {errors.email && <div className="text-red-500">{errors.email}</div>}
                    </div>
                    {!user && (
                        <div>
                            <label>Mot de passe</label>
                            <input
                                type="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                className="w-full border"
                            />
                            {errors.password && <div className="text-red-500">{errors.password}</div>}
                        </div>
                    )}
                    <div>
                        <label>Rôle</label>
                        <select
                            value={data.role}
                            onChange={(e) => setData('role', e.target.value)}
                            className="w-full border"
                        >
                            {Object.keys(roles).map((role) => (
                                <option key={role} value={role}>
                                    {roles[role]}
                                </option>
                            ))}
                        </select>
                        {errors.role && <div className="text-red-500">{errors.role}</div>}
                    </div>
                    <button
                        type="submit"
                        disabled={processing}
                        className="px-4 py-2 bg-primary text-white rounded"
                    >
                        {processing ? 'En cours...' : user ? 'Modifier' : 'Créer'}
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
