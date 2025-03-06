import React, { useState, useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { Input } from '@/Components/ui/input';
import { Select } from '@/Components/ui/select';
import { Button } from '@/Components/ui/button';
import { formatNumber, formatDate } from '@/lib/utils';
import StatusBadge from '@/Components/ui/StatusBadge';
import { Eye, Download, Printer, Filter, X, FileText, Plus } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/Components/ui/dropdown-menu';
import { Badge } from '@/Components/ui/badge';
// import { Pagination } from '@/Components/ui/pagination';

export default function InvoiceIndex({ invoices: initialInvoices, filters: initialFilters }) {
  const [invoices, setInvoices] = useState(initialInvoices);
  const [filters, setFilters] = useState(initialFilters);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.ceil(invoices.length / 10));

  // Simulation d'une fonction pour appliquer les filtres
  const applyFilters = () => {
    // Dans une implémentation réelle, vous feriez un appel API ici
    console.log('Filtres appliqués:', filters);
    // Simule un délai de chargement
    setTimeout(() => {
      // Pour la démonstration, nous filtrons juste le tableau initial
      setIsFilterVisible(false);
    }, 300);
  };

  const handleSearch = (value) => {
    setFilters({ ...filters, search: value });
  };

  const handleStatusFilter = (value) => {
    setFilters({ ...filters, status: value });
  };

  const handleDateFilter = (type, value) => {
    setFilters({ ...filters, [`date_${type}`]: value });
  };

  const resetFilters = () => {
    setFilters({
      search: '',
      status: '',
      date_from: '',
      date_to: '',
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid':
        return 'bg-green-50 text-green-700';
      case 'pending':
        return 'bg-yellow-50 text-yellow-700';
      case 'partially_paid':
        return 'bg-blue-50 text-blue-700';
      default:
        return 'bg-gray-50 text-gray-700';
    }
  };

  return (
    <AuthenticatedLayout>
      <Head title="Liste des Factures" />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Liste des Factures</h1>
            <p className="text-gray-500 mt-1">Gérez et suivez toutes vos factures</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" onClick={() => setIsFilterVisible(!isFilterVisible)}>
              {isFilterVisible ? <X className="h-4 w-4 mr-2" /> : <Filter className="h-4 w-4 mr-2" />}
              {isFilterVisible ? 'Masquer les filtres' : 'Filtres'}
            </Button>
            
            <Link href='#'>
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Nouvelle facture
              </Button>
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="default" size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  Exporter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Download className="h-4 w-4 mr-2" />
                  Export PDF
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Download className="h-4 w-4 mr-2" />
                  Export Excel
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Printer className="h-4 w-4 mr-2" />
                  Imprimer
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Filtres améliorés avec animation et résumé des filtres actifs */}
        {isFilterVisible && (
          <Card className="p-4 mb-6 animate-in fade-in-0 slide-in-from-top-5 duration-300">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-lg font-medium">Filtres avancés</CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Recherche</label>
                  <Input
                    placeholder="Numéro, département..."
                    value={filters.search}
                    onChange={e => handleSearch(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Statut</label>
                  <Select
                    value={filters.status}
                    onChange={e => handleStatusFilter(e.target.value)}
                    className="w-full"
                  >
                    <option value="">Tous les statuts</option>
                    <option value="paid">Payé</option>
                    <option value="pending">En attente</option>
                    <option value="partially_paid">Partiellement payé</option>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Date de début</label>
                  <Input
                    type="date"
                    value={filters.date_from}
                    onChange={e => handleDateFilter('from', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Date de fin</label>
                  <Input
                    type="date"
                    value={filters.date_to}
                    onChange={e => handleDateFilter('to', e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-end mt-4 gap-2">
                <Button variant="outline" size="sm" onClick={resetFilters}>
                  Réinitialiser
                </Button>
                <Button variant="default" size="sm" onClick={applyFilters}>
                  Appliquer les filtres
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Résumé des filtres actifs */}
        {(filters.search || filters.status || filters.date_from || filters.date_to) && (
          <div className="flex flex-wrap gap-2 mb-4">
            {filters.search && (
              <Badge variant="outline" className="flex items-center gap-1">
                Recherche: {filters.search}
                <X className="h-3 w-3 cursor-pointer" onClick={() => handleSearch('')} />
              </Badge>
            )}
            {filters.status && (
              <Badge variant="outline" className="flex items-center gap-1">
                Statut: {filters.status === 'paid' ? 'Payé' : filters.status === 'pending' ? 'En attente' : 'Partiellement payé'}
                <X className="h-3 w-3 cursor-pointer" onClick={() => handleStatusFilter('')} />
              </Badge>
            )}
            {filters.date_from && (
              <Badge variant="outline" className="flex items-center gap-1">
                À partir du: {filters.date_from}
                <X className="h-3 w-3 cursor-pointer" onClick={() => handleDateFilter('from', '')} />
              </Badge>
            )}
            {filters.date_to && (
              <Badge variant="outline" className="flex items-center gap-1">
                Jusqu'au: {filters.date_to}
                <X className="h-3 w-3 cursor-pointer" onClick={() => handleDateFilter('to', '')} />
              </Badge>
            )}
          </div>
        )}

        {/* Tableau des factures amélioré */}
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Numéro</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Département</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Création</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Échéance</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Montant</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {invoices.length > 0 ? (
                  invoices.map((invoice) => (
                    <tr key={invoice.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link href={route('admin.invoices.show', invoice.id)} className="text-blue-600 hover:text-blue-800 font-medium">
                          #{invoice.invoice_number}
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{invoice.department}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{formatDate(invoice.created_date)}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={new Date(invoice.due_date) < new Date() && invoice.status !== 'paid' ? 'text-red-600 font-medium' : ''}>
                          {formatDate(invoice.due_date)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right font-medium">{formatNumber(invoice.amount)} GNF</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <StatusBadge status={invoice.status} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex justify-center space-x-2">
                          <Link href={route('admin.invoices.show', invoice.id)}>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Eye className="h-4 w-4 text-gray-500 hover:text-blue-600" />
                            </Button>
                          </Link>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Download className="h-4 w-4 text-gray-500 hover:text-blue-600" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Printer className="h-4 w-4 text-gray-500 hover:text-blue-600" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="px-6 py-12 text-center text-gray-500">
                      Aucune facture ne correspond à vos critères de recherche.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="py-4 px-6 border-t border-gray-200 flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Affichage de <span className="font-medium">1</span> à <span className="font-medium">{Math.min(10, invoices.length)}</span> sur <span className="font-medium">{invoices.length}</span> factures
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </Card>
      </div>
    </AuthenticatedLayout>
  );
}

// Composant de pagination (à ajouter dans Components/ui/pagination.jsx)
export function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="outline"
        size="sm"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="h-8 w-8 p-0"
      >
        &lt;
      </Button>
      {[...Array(Math.min(5, totalPages))].map((_, i) => (
        <Button
          key={i}
          variant={currentPage === i + 1 ? "default" : "outline"}
          size="sm"
          onClick={() => onPageChange(i + 1)}
          className="h-8 w-8 p-0"
        >
          {i + 1}
        </Button>
      ))}
      {totalPages > 5 && <span>...</span>}
      <Button
        variant="outline"
        size="sm"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="h-8 w-8 p-0"
      >
        &gt;
      </Button>
    </div>
  );
}