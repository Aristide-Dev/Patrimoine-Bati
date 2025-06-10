import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
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
import { Download } from 'lucide-react';

// Création des styles pour le PDF
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 30
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#1a365d',
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#2c5282',
        marginTop: 15
    },
    text: {
        fontSize: 12,
        marginBottom: 5,
        lineHeight: 1.5
    },
    etape: {
        marginBottom: 15,
        padding: 8,
        backgroundColor: '#f7fafc'
    },
    etapeTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#2d3748',
        marginBottom: 5
    },
    documentItem: {
        marginBottom: 10,
        paddingLeft: 15
    },
    serviceItem: {
        marginBottom: 15,
        padding: 8,
        backgroundColor: '#edf2f7'
    }
});

// Composant pour le contenu du PDF
const ProcessusObtentionDocument = React.memo(() => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* En-tête */}
            <View style={styles.section}>
                <Text style={styles.title}>{titrePagePrincipal}</Text>
                <Text style={styles.text}>{descriptionPagePrincipale}</Text>
                <Text style={styles.text}>{introductionTexte}</Text>
            </View>

            {/* Étapes du processus */}
            <View style={styles.section}>
                <Text style={styles.subtitle}>Processus d'Obtention et Délais</Text>
                {etapesProcessus.map((etape, index) => (
                    <View key={index} style={styles.etape}>
                        <Text style={styles.etapeTitle}>{index + 1}. {etape.nom}</Text>
                        <Text style={styles.text}>Description: {etape.description}</Text>
                        <Text style={styles.text}>Délai: {etape.delai}</Text>
                        <Text style={styles.text}>Service: {etape.service}</Text>
                    </View>
                ))}
            </View>
        </Page>

        <Page size="A4" style={styles.page}>
            {/* Documents requis */}
            <View style={styles.section}>
                <Text style={styles.subtitle}>Documents Communs Requis</Text>
                {documentsCommuns.map((doc, index) => (
                    <View key={index} style={styles.documentItem}>
                        <Text style={styles.text}>• {doc.nom}</Text>
                        <Text style={styles.text}>  {doc.description}</Text>
                    </View>
                ))}

                <Text style={styles.subtitle}>Documents Spécifiques - Fonctionnaires</Text>
                {documentsFonctionnaire.map((doc, index) => (
                    <View key={index} style={styles.documentItem}>
                        <Text style={styles.text}>• {doc.nom}</Text>
                        <Text style={styles.text}>  {doc.description}</Text>
                    </View>
                ))}
            </View>
        </Page>

        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.subtitle}>Documents Spécifiques - Entreprises</Text>
                {documentsEntreprise.map((doc, index) => (
                    <View key={index} style={styles.documentItem}>
                        <Text style={styles.text}>• {doc.nom}</Text>
                        <Text style={styles.text}>  {doc.description}</Text>
                    </View>
                ))}

                <Text style={styles.subtitle}>Documents Spécifiques - Particuliers</Text>
                {documentsParticulier.map((doc, index) => (
                    <View key={index} style={styles.documentItem}>
                        <Text style={styles.text}>• {doc.nom}</Text>
                        <Text style={styles.text}>  {doc.description}</Text>
                    </View>
                ))}
            </View>
        </Page>

        <Page size="A4" style={styles.page}>
            {/* Services et contacts */}
            <View style={styles.section}>
                <Text style={styles.subtitle}>Coordonnées des Services</Text>
                {servicesContacts.map((service, index) => (
                    <View key={index} style={styles.serviceItem}>
                        <Text style={styles.etapeTitle}>{service.nom}</Text>
                        <Text style={styles.text}>{service.description}</Text>
                        <Text style={styles.text}>Téléphone: {service.telephone}</Text>
                        <Text style={styles.text}>Email: {service.email}</Text>
                        <Text style={styles.text}>Horaires: {service.horaires}</Text>
                    </View>
                ))}
            </View>
        </Page>
    </Document>
));

// Composant pour le bouton de téléchargement avec gestion d'erreur
const ProcessusObtentionPDF = () => {
    const [isClient, setIsClient] = React.useState(false);

    React.useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return (
            <div className="bg-transparent hover:bg-transparent">
                <div className="flex items-center py-3 px-4 bg-primary text-white rounded-lg">
                    <Download className="mr-2 h-5 w-5" />
                    Chargement...
                </div>
            </div>
        );
    }

    try {
        return (
            <div className="bg-transparent hover:bg-transparent">
                <PDFDownloadLink
                    document={<ProcessusObtentionDocument />}
                    fileName="processus-obtention-bien-immobilier.pdf"
                    className="flex items-center py-0 px-4 bg-primary text-white transform hover:scale-105 transition-all duration-200 shadow-lg group rounded-lg"
                >
                    {({ blob, url, loading, error }) => {
                        if (error) {
                            return (
                                <div className="flex items-center py-3 px-4 text-red-500">
                                    Erreur lors de la génération du PDF
                                </div>
                            );
                        }
                        
                        return loading ? 'Génération du PDF...' : (
                            <div className="flex items-center py-3 px-4">
                                <Download className="mr-2 h-5 w-5 group-hover:rotate-6 transition-transform" />
                                Télécharger le Guide PDF
                            </div>
                        );
                    }}
                </PDFDownloadLink>
            </div>
        );
    } catch (error) {
        console.error('Erreur PDF:', error);
        return (
            <div className="bg-transparent hover:bg-transparent">
                <div className="flex items-center py-3 px-4 bg-gray-500 text-white rounded-lg">
                    <Download className="mr-2 h-5 w-5" />
                    PDF temporairement indisponible
                </div>
            </div>
        );
    }
};

export default ProcessusObtentionPDF; 