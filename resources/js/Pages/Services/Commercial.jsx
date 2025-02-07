import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';

export default function Commercial({ meta }) {
  return (
    <AppLayout>
      <Head title={meta.title} />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">{meta.title}</h1>
        <p className="mt-4 text-lg">{meta.description}</p>
        <p className="mt-8">Page de gestion des baux commerciaux...</p>
      </div>
    </AppLayout>
  );
} 