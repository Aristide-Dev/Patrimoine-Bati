import React from 'react';
import { Download } from 'lucide-react';

// Import des données
import { 
    etapesProcessus, 
    documentsCommuns, 
    documentsFonctionnaire, 
    documentsEntreprise, 
    documentsParticulier,
    servicesContacts,
    titrePagePrincipal,
    descriptionPagePrincipale,
    introductionTexte
} from '../data/ProcessusObtentionData';

const ProcessusObtentionPDF = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [useAlternative, setUseAlternative] = React.useState(false);

    // Fonction alternative avec jsPDF (sans dépendances problématiques)
    const generateJsPDF = async () => {
        setIsLoading(true);
        try {
            const { default: jsPDF } = await import('jspdf');
            
            const doc = new jsPDF();
            let yPosition = 20;
            const lineHeight = 7;
            const margin = 20;
            const pageHeight = doc.internal.pageSize.height;

            // Fonction pour ajouter du texte avec retour à la ligne automatique
            const addText = (text, x, y, maxWidth = 170) => {
                const splitText = doc.splitTextToSize(text, maxWidth);
                doc.text(splitText, x, y);
                return y + (splitText.length * lineHeight);
            };

            // Fonction pour vérifier si on doit changer de page
            const checkPageBreak = (currentY, spaceNeeded = 20) => {
                if (currentY + spaceNeeded > pageHeight - 20) {
                    doc.addPage();
                    return 20;
                }
                return currentY;
            };

            // Titre principal
            doc.setFontSize(20);
            doc.setFont('helvetica', 'bold');
            yPosition = addText(titrePagePrincipal, margin, yPosition);
            yPosition += 10;

            // Description
            doc.setFontSize(12);
            doc.setFont('helvetica', 'normal');
            yPosition = addText(descriptionPagePrincipale, margin, yPosition);
            yPosition += 5;
            yPosition = addText(introductionTexte, margin, yPosition);
            yPosition += 15;

            // Étapes du processus
            yPosition = checkPageBreak(yPosition, 30);
            doc.setFontSize(16);
            doc.setFont('helvetica', 'bold');
            yPosition = addText('Processus d\'Obtention et Délais', margin, yPosition);
            yPosition += 10;

            doc.setFontSize(12);
            etapesProcessus.forEach((etape, index) => {
                yPosition = checkPageBreak(yPosition, 25);
                
                doc.setFont('helvetica', 'bold');
                yPosition = addText(`${index + 1}. ${etape.nom}`, margin, yPosition);
                yPosition += 3;
                
                doc.setFont('helvetica', 'normal');
                yPosition = addText(`Description: ${etape.description}`, margin + 5, yPosition);
                yPosition = addText(`Délai: ${etape.delai}`, margin + 5, yPosition);
                yPosition = addText(`Service: ${etape.service}`, margin + 5, yPosition);
                yPosition += 8;
            });

            // Documents communs
            doc.addPage();
            yPosition = 20;
            doc.setFontSize(16);
            doc.setFont('helvetica', 'bold');
            yPosition = addText('Documents Communs Requis', margin, yPosition);
            yPosition += 10;

            doc.setFontSize(12);
            documentsCommuns.forEach((docItem) => {
                yPosition = checkPageBreak(yPosition, 15);
                doc.setFont('helvetica', 'bold');
                yPosition = addText(`• ${docItem.nom}`, margin, yPosition);
                doc.setFont('helvetica', 'normal');
                yPosition = addText(`  ${docItem.description}`, margin + 5, yPosition);
                yPosition += 5;
            });

            // Documents fonctionnaires
            yPosition += 10;
            yPosition = checkPageBreak(yPosition, 20);
            doc.setFontSize(16);
            doc.setFont('helvetica', 'bold');
            yPosition = addText('Documents Spécifiques - Fonctionnaires', margin, yPosition);
            yPosition += 10;

            doc.setFontSize(12);
            documentsFonctionnaire.forEach((docItem) => {
                yPosition = checkPageBreak(yPosition, 15);
                doc.setFont('helvetica', 'bold');
                yPosition = addText(`• ${docItem.nom}`, margin, yPosition);
                doc.setFont('helvetica', 'normal');
                yPosition = addText(`  ${docItem.description}`, margin + 5, yPosition);
                yPosition += 5;
            });

            // Documents entreprises
            doc.addPage();
            yPosition = 20;
            doc.setFontSize(16);
            doc.setFont('helvetica', 'bold');
            yPosition = addText('Documents Spécifiques - Entreprises', margin, yPosition);
            yPosition += 10;

            doc.setFontSize(12);
            documentsEntreprise.forEach((docItem) => {
                yPosition = checkPageBreak(yPosition, 15);
                doc.setFont('helvetica', 'bold');
                yPosition = addText(`• ${docItem.nom}`, margin, yPosition);
                doc.setFont('helvetica', 'normal');
                yPosition = addText(`  ${docItem.description}`, margin + 5, yPosition);
                yPosition += 5;
            });

            // Documents particuliers
            yPosition += 10;
            yPosition = checkPageBreak(yPosition, 20);
            doc.setFontSize(16);
            doc.setFont('helvetica', 'bold');
            yPosition = addText('Documents Spécifiques - Particuliers', margin, yPosition);
            yPosition += 10;

            doc.setFontSize(12);
            documentsParticulier.forEach((docItem) => {
                yPosition = checkPageBreak(yPosition, 15);
                doc.setFont('helvetica', 'bold');
                yPosition = addText(`• ${docItem.nom}`, margin, yPosition);
                doc.setFont('helvetica', 'normal');
                yPosition = addText(`  ${docItem.description}`, margin + 5, yPosition);
                yPosition += 5;
            });

            // Services et contacts
            doc.addPage();
            yPosition = 20;
            doc.setFontSize(16);
            doc.setFont('helvetica', 'bold');
            yPosition = addText('Coordonnées des Services', margin, yPosition);
            yPosition += 10;

            doc.setFontSize(12);
            servicesContacts.forEach((service) => {
                yPosition = checkPageBreak(yPosition, 25);
                doc.setFont('helvetica', 'bold');
                yPosition = addText(service.nom, margin, yPosition);
                yPosition += 3;
                
                doc.setFont('helvetica', 'normal');
                yPosition = addText(service.description, margin + 5, yPosition);
                yPosition = addText(`Téléphone: ${service.telephone}`, margin + 5, yPosition);
                yPosition = addText(`Email: ${service.email}`, margin + 5, yPosition);
                yPosition = addText(`Horaires: ${service.horaires}`, margin + 5, yPosition);
                yPosition += 8;
            });

            // Téléchargement
            doc.save('processus-obtention-bien-immobilier.pdf');

        } catch (error) {
            console.error('Erreur jsPDF:', error);
            alert('Erreur lors de la génération du PDF. Veuillez réessayer.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-transparent hover:bg-transparent">
            <button
                onClick={generateJsPDF}
                disabled={isLoading}
                className={`flex items-center py-3 px-4 rounded-lg transition-all duration-200 ${
                    isLoading
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-primary text-white transform hover:scale-105 shadow-lg group'
                }`}
            >
                <Download className={`mr-2 h-5 w-5 ${!isLoading ? 'group-hover:rotate-6' : ''} transition-transform`} />
                {isLoading ? 'Génération du PDF...' : 'Télécharger le Guide PDF'}
            </button>
        </div>
    );
};

export default ProcessusObtentionPDF; 