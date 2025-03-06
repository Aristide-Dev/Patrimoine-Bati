// resources/js/Components/ui/StatusBadge.jsx

import React from 'react';

export default function StatusBadge({ status }) {
    const statusConfig = {
        // Statuts de paiement principaux
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
            // Exemple: Loyer de 2 000 000 GNF, acompte de 1 000 000 GNF versé
        },
        
        // Statuts de vérification
        pending_verification: {
            color: 'bg-yellow-100 text-yellow-800',
            label: 'En attente de vérification'
            // Exemple: Paiement effectué par virement, en attente de confirmation bancaire
        },
        pending_approval: {
            color: 'bg-yellow-100 text-yellow-800',
            label: 'En attente d\'approbation'
            // Exemple: Demande de délai de paiement soumise à la direction
        },
        
        // Statuts de paiement spécifiques
        pending_payment: {
            color: 'bg-yellow-100 text-yellow-800',
            label: 'En attente de paiement'
            // Exemple: Facture envoyée, délai de paiement non expiré
        },
        late_payment: {
            color: 'bg-red-100 text-red-800',
            label: 'Paiement en retard'
            // Exemple: Délai de paiement dépassé de plus de 5 jours
        },
        payment_plan: {
            color: 'bg-purple-100 text-purple-800',
            label: 'Échéancier en cours'
            // Exemple: Accord de paiement en 3 versements
        },
        
        // Statuts administratifs
        under_review: {
            color: 'bg-blue-100 text-blue-800',
            label: 'En cours d\'examen'
            // Exemple: Révision des charges locatives
        },
        disputed: {
            color: 'bg-red-100 text-red-800',
            label: 'Contesté'
            // Exemple: Contestation du montant des charges
        },
        
        // Statuts exceptionnels
        cancelled: {
            color: 'bg-gray-100 text-gray-800',
            label: 'Annulé'
            // Exemple: Annulation suite à une erreur administrative
        },
        refunded: {
            color: 'bg-green-100 text-green-800',
            label: 'Remboursé'
            // Exemple: Trop-perçu remboursé au locataire
        }
    };

    const config = statusConfig[status] || statusConfig.pending;

    return (
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${config.color}`}>
            {config.label}
        </span>
    );
};