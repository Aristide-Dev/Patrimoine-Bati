import React from 'react';
import { Download } from 'lucide-react';

// Chargement dynamique de @react-pdf/renderer pour éviter les problèmes en production
const loadPDFRenderer = async () => {
    try {
        return await import('@react-pdf/renderer');
    } catch (error) {
        console.error('Erreur lors du chargement de @react-pdf/renderer:', error);
        return null;
    }
};

// Chargement dynamique des données
const loadProcessusData = async () => {
    try {
        return await import('../data/ProcessusObtentionData');
    } catch (error) {
        console.error('Erreur lors du chargement des données:', error);
        return null;
    }
};

// Composant pour le bouton de téléchargement avec chargement dynamique
const ProcessusObtentionPDF = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [isClient, setIsClient] = React.useState(false);
    const [pdfComponents, setPdfComponents] = React.useState(null);
    const [processusData, setProcessusData] = React.useState(null);

    React.useEffect(() => {
        setIsClient(true);
        // Préchargement des modules
        const preloadModules = async () => {
            const [pdfModule, dataModule] = await Promise.all([
                loadPDFRenderer(),
                loadProcessusData()
            ]);
            
            if (pdfModule && dataModule) {
                setPdfComponents(pdfModule);
                setProcessusData(dataModule);
            }
        };
        
        preloadModules();
    }, []);

    const generatePDF = async () => {
        if (!isClient || !pdfComponents || !processusData) {
            alert('Les composants PDF ne sont pas encore chargés. Veuillez réessayer dans quelques secondes.');
            return;
        }

        setIsLoading(true);
        
        try {
            const { Document, Page, Text, View, StyleSheet, pdf } = pdfComponents;
            const {
                etapesProcessus,
                documentsCommuns,
                documentsFonctionnaire,
                documentsEntreprise,
                documentsParticulier,
                servicesContacts,
                titrePagePrincipal,
                descriptionPagePrincipale,
                introductionTexte
            } = processusData;

            // Styles pour le PDF
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

            // Création du document PDF
            const ProcessusDocument = (
                <Document>
                    <Page size="A4" style={styles.page}>
                        <View style={styles.section}>
                            <Text style={styles.title}>{titrePagePrincipal}</Text>
                            <Text style={styles.text}>{descriptionPagePrincipale}</Text>
                            <Text style={styles.text}>{introductionTexte}</Text>
                        </View>

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
            );

            // Génération et téléchargement du PDF
            const blob = await pdf(ProcessusDocument).toBlob();
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'processus-obtention-bien-immobilier.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);

        } catch (error) {
            console.error('Erreur lors de la génération du PDF:', error);
            alert('Erreur lors de la génération du PDF. Veuillez réessayer.');
        } finally {
            setIsLoading(false);
        }
    };

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

    const isReady = pdfComponents && processusData;

    return (
        <div className="bg-transparent hover:bg-transparent">
            <button
                onClick={generatePDF}
                disabled={isLoading || !isReady}
                className={`flex items-center py-3 px-4 rounded-lg transition-all duration-200 ${
                    isLoading || !isReady
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-primary text-white transform hover:scale-105 shadow-lg group'
                }`}
            >
                <Download className={`mr-2 h-5 w-5 ${!isLoading && isReady ? 'group-hover:rotate-6' : ''} transition-transform`} />
                {isLoading 
                    ? 'Génération du PDF...' 
                    : !isReady 
                        ? 'Chargement des composants...'
                        : 'Télécharger le Guide PDF'
                }
            </button>
        </div>
    );
};

export default ProcessusObtentionPDF; 