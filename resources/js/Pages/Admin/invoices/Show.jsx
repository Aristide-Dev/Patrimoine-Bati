import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Card, CardContent } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { formatNumber, formatDate } from '@/lib/utils';
import StatusBadge from '@/Components/ui/StatusBadge';
import { 
  Download, 
  Printer, 
  ChevronLeft, 
  Share2, 
  CreditCard, 
  MessageSquare, 
  Clock, 
  File, 
  CheckCircle 
} from 'lucide-react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/Components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/Components/ui/dropdown-menu';
import { Progress } from '@/Components/ui/progress';

export default function InvoiceShow({ invoice }) {
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const [emailAddress, setEmailAddress] = useState('');
  
  // Calcul du statut de paiement en pourcentage pour la barre de progression
  const getPaymentProgress = () => {
    if (invoice.status === 'paid') return 100;
    if (invoice.status === 'partially_paid') {
      // Simulation - dans une vraie application, vous utiliseriez le montant réellement payé
      return 50;
    }
    return 0;
  };
  
  // Déterminer si la date d'échéance est dépassée
  const isDueDate = new Date(invoice.due_date) < new Date() && invoice.status !== 'paid';
  
  // Déterminer le temps restant jusqu'à la date d'échéance
  const getDaysRemaining = () => {
    const today = new Date();
    const dueDate = new Date(invoice.due_date);
    const diffTime = dueDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };
  
  const daysRemaining = getDaysRemaining();
  
  // Simuler un historique des paiements
  const paymentHistory = [
    { date: '2023-06-15', amount: invoice.total * 0.3, method: 'Virement bancaire', status: 'Confirmé' },
    { date: '2023-07-10', amount: invoice.total * 0.2, method: 'Chèque', status: 'En attente' },
  ];
  
  // Simuler un historique des communications
  const communicationHistory = [
    { date: '2023-05-30', type: 'Email', content: 'Envoi de la facture initiale', user: 'admin@example.com' },
    { date: '2023-06-10', type: 'Téléphone', content: 'Rappel de paiement', user: 'admin@example.com' },
    { date: '2023-07-05', type: 'Email', content: 'Confirmation de réception du paiement partiel', user: 'admin@example.com' },
  ];

  return (
    <AuthenticatedLayout>
      <Head title={`Facture ${invoice.invoice_number}`} />

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Actions principales et navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <Link href={route('admin.invoices.index')} className="flex items-center text-blue-600 hover:text-blue-800">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Retour aux factures
          </Link>
          
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" onClick={() => setIsShareDialogOpen(true)}>
              <Share2 className="h-4 w-4 mr-2" />
              Partager
            </Button>
            
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Télécharger PDF
            </Button>
            
            <Button variant="outline" size="sm">
              <Printer className="h-4 w-4 mr-2" />
              Imprimer
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="default" size="sm">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Enregistrer paiement
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Paiement complet</DropdownMenuItem>
                <DropdownMenuItem>Paiement partiel</DropdownMenuItem>
                <DropdownMenuItem>Annuler paiement</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        {/* Statut, date d'échéance et progression du paiement */}
        <Card className="mb-6 overflow-hidden">
          <div className="bg-gray-50 p-4 border-b">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Facture #{invoice.invoice_number}
                </h1>
                <p className="text-gray-600 mt-1">
                  Créée le {formatDate(invoice.created_date)}
                </p>
              </div>
              
              <div className="mt-4 sm:mt-0 flex flex-col items-end">
                <StatusBadge status={invoice.status} className="text-sm mb-2" />
                <div className={`flex items-center ${isDueDate ? 'text-red-600' : 'text-gray-600'}`}>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>
                    {isDueDate 
                      ? `Échéance dépassée de ${Math.abs(daysRemaining)} jours` 
                      : `Échéance dans ${daysRemaining} jours`}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Date d'échéance: {formatDate(invoice.due_date)}
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex items-center mb-2">
              <span className="text-sm font-medium mr-2">Progression du paiement:</span>
              <span className="text-sm font-medium ml-auto">
                {invoice.status === 'paid' 
                  ? '100%' 
                  : invoice.status === 'partially_paid' 
                    ? '50%' 
                    : '0%'}
              </span>
            </div>
            <Progress value={getPaymentProgress()} className="h-2" />
          </div>
        </Card>

        {/* Contenu principal avec onglets */}
        <Tabs defaultValue="details" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="details">
              <File className="h-4 w-4 mr-2" />
              Détails de la facture
            </TabsTrigger>
            <TabsTrigger value="payments">
              <CreditCard className="h-4 w-4 mr-2" />
              Paiements
            </TabsTrigger>
            <TabsTrigger value="communications">
              <MessageSquare className="h-4 w-4 mr-2" />
              Communications
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="details">
            <Card>
              <CardContent className="p-6">
                {/* En-tête de la facture */}
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <img src="/logo.png" alt="Logo" className="h-16 w-auto mb-4" />
                    <div className="mt-4 text-gray-600">
                      <p>Direction Générale du Patrimoine Bâti Public</p>
                      <p>Commune de Kaloum</p>
                      <p>Conakry, Guinée</p>
                      <p>Tel: +224 XXX XX XX XX</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <h2 className="text-xl font-bold text-gray-900">FACTURE</h2>
                      <p className="text-gray-600 mt-1">#{invoice.invoice_number}</p>
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <p className="text-sm">Date d'émission: {formatDate(invoice.created_date)}</p>
                        <p className="text-sm mt-1">Date d'échéance: {formatDate(invoice.due_date)}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Informations client */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold mb-2 text-gray-900">Facturé à</h2>
                    <div className="text-gray-700">
                      <p className="font-medium">{invoice.client.name}</p>
                      <p>{invoice.client.address}</p>
                      <p>Tel: {invoice.client.phone}</p>
                      <p>Email: {invoice.client.email}</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold mb-2 text-gray-900">Informations sur le bien loué</h2>
                    <div className="grid grid-cols-2 gap-2 text-gray-700">
                      <div>
                        <p className="text-sm text-gray-600">Désignation</p>
                        <p className="font-medium">{invoice.property.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Type de bien</p>
                        <p className="font-medium">{invoice.property.type}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Adresse</p>
                        <p className="font-medium">{invoice.property.address}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Surface</p>
                        <p className="font-medium">{invoice.property.surface}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Table des articles */}
                <div className="mb-8 overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900 border border-gray-200">Description</th>
                        <th className="text-right py-3 px-4 font-semibold text-gray-900 border border-gray-200">Quantité</th>
                        <th className="text-right py-3 px-4 font-semibold text-gray-900 border border-gray-200">Prix unitaire</th>
                        <th className="text-right py-3 px-4 font-semibold text-gray-900 border border-gray-200">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {invoice.items.map((item) => (
                        <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="py-4 px-4 border border-gray-200">{item.description}</td>
                          <td className="py-4 px-4 text-right border border-gray-200">{item.quantity}</td>
                          <td className="py-4 px-4 text-right border border-gray-200">
                            {formatNumber(item.unit_price)} GNF
                          </td>
                          <td className="py-4 px-4 text-right border border-gray-200 font-medium">
                            {formatNumber(item.total)} GNF
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Résumé des montants */}
                <div className="flex justify-end mb-8">
                  <div className="w-full md:w-80 bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between mb-2 text-gray-700">
                      <span>Sous-total:</span>
                      <span>{formatNumber(invoice.subtotal)} GNF</span>
                    </div>
                    <div className="flex justify-between mb-2 text-gray-700">
                      <span>TVA (18%):</span>
                      <span>{formatNumber(invoice.tax)} GNF</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg pt-2 mt-2 border-t border-gray-300">
                      <span>Total:</span>
                      <span>{formatNumber(invoice.total)} GNF</span>
                    </div>
                    {invoice.status === 'partially_paid' && (
                      <>
                        <div className="flex justify-between mt-2 pt-2 border-t border-gray-300 text-green-600">
                          <span>Montant payé:</span>
                          <span>{formatNumber(invoice.total * 0.5)} GNF</span>
                        </div>
                        <div className="flex justify-between font-bold text-red-600">
                          <span>Reste à payer:</span>
                          <span>{formatNumber(invoice.total * 0.5)} GNF</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Conditions de paiement */}
                <div className="mb-6 border p-4 rounded-lg bg-blue-50 border-blue-200">
                  <h2 className="text-lg font-semibold mb-2 text-blue-800">Conditions de paiement</h2>
                  <p className="text-blue-700">{invoice.payment_terms}</p>
                </div>

                {/* Notes */}
                {invoice.notes && (
                  <div className="mb-6 border p-4 rounded-lg bg-gray-50">
                    <h2 className="text-lg font-semibold mb-2">Notes</h2>
                    <p className="text-gray-700">{invoice.notes}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="payments">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Historique des paiements</h2>
                
                {paymentHistory.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="text-left py-3 px-4 font-semibold text-gray-900 border border-gray-200">Date</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-900 border border-gray-200">Méthode</th>
                          <th className="text-right py-3 px-4 font-semibold text-gray-900 border border-gray-200">Montant</th>
                          <th className="text-center py-3 px-4 font-semibold text-gray-900 border border-gray-200">Statut</th>
                        </tr>
                      </thead>
                      <tbody>
                        {paymentHistory.map((payment, index) => (
                          <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="py-4 px-4 border border-gray-200">{formatDate(payment.date)}</td>
                            <td className="py-4 px-4 border border-gray-200">{payment.method}</td>
                            <td className="py-4 px-4 text-right border border-gray-200 font-medium">
                              {formatNumber(payment.amount)} GNF
                            </td>
                            <td className="py-4 px-4 text-center border border-gray-200">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                payment.status === 'Confirmé' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {payment.status === 'Confirmé' && <CheckCircle className="h-3 w-3 mr-1" />}
                                {payment.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-8 bg-gray-50 rounded-lg">
                    <p className="text-gray-500">Aucun paiement enregistré pour cette facture.</p>
                  </div>
                )}
                
                <div className="mt-6">
                  <Button>
                    <CreditCard className="h-4 w-4 mr-2" />
                    Enregistrer un nouveau paiement
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="communications">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Historique des communications</h2>
                
                {communicationHistory.length > 0 ? (
                  <div className="space-y-4">
                    {communicationHistory.map((comm, index) => (
                      <div key={index} className="border rounded-lg p-4 hover:bg-gray-50">
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{comm.type}</span>
                          <span className="text-gray-500 text-sm">{formatDate(comm.date)}</span>
                        </div>
                        <p className="text-gray-700 mb-2">{comm.content}</p>
                        <p className="text-gray-500 text-sm">Par: {comm.user}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 bg-gray-50 rounded-lg">
                    <p className="text-gray-500">Aucune communication enregistrée pour cette facture.</p>
                  </div>
                )}
                
                <div className="mt-6">
                  <Button>
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Ajouter une communication
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Boîte de dialogue pour le partage */}
      <Dialog open={isShareDialogOpen} onOpenChange={setIsShareDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Partager la facture</DialogTitle>
            <DialogDescription>
              Envoyez une copie de cette facture par email à votre client ou à un collègue.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Adresse email
              </label>
              <input
                id="email"
                type="email" 
                className="w-full p-2 border rounded-md"
                placeholder="exemple@domaine.com"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message (optionnel)
              </label>
              <textarea
                id="message"
                className="w-full p-2 border rounded-md"
                rows={3}
                placeholder="Veuillez trouver ci-joint votre facture..."
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="attach-pdf" className="rounded" />
              <label htmlFor="attach-pdf" className="text-sm">
                Joindre une copie PDF
              </label>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsShareDialogOpen(false)}>
              Annuler
            </Button>
            <Button type="submit">
              <Share2 className="h-4 w-4 mr-2" />
              Envoyer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AuthenticatedLayout>
  );
}