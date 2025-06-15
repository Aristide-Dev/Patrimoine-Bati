<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\PropertyManager;

class PropertyManagerSeeder extends Seeder
{
    private $defaultStats = [
        'Kaloum' => ['batiments' => 157, 'locataires' => 423, 'taux_occupation' => '92%'],
        'Dixinn' => ['batiments' => 143, 'locataires' => 385, 'taux_occupation' => '88%'],
        'Matam' => ['batiments' => 128, 'locataires' => 342, 'taux_occupation' => '85%'],
        'Ratoma' => ['batiments' => 198, 'locataires' => 524, 'taux_occupation' => '94%'],
        'Matoto' => ['batiments' => 167, 'locataires' => 456, 'taux_occupation' => '89%'],
        'Kaporo' => ['batiments' => 112, 'locataires' => 298, 'taux_occupation' => '82%'],
        'R2000' => ['batiments' => 1, 'locataires' => 245, 'taux_occupation' => '95%'],
        'Moussoudougou' => ['batiments' => 1, 'locataires' => 178, 'taux_occupation' => '87%'],
        'Fria Base' => ['batiments' => 1, 'locataires' => 156, 'taux_occupation' => '91%'],
        'CPL' => ['batiments' => 1, 'locataires' => 312, 'taux_occupation' => '94%']
    ];

    private function getGerantCommune($service)
    {
        $communeMapping = [
            'Gérances Communales Kaloum' => 'Kaloum',
            'Gérances Communales Dixinn' => 'Dixinn',
            'Gérances Communales Matam' => 'Matam',
            'Gérances Communales Ratoma' => 'Ratoma',
            'Gérances Communales Matoto' => 'Matoto',
            'Gérances Communales Kassa' => 'Kaporo',
            'Gérances Speciales R2000' => 'R2000',
            'Gérances Speciales Moussoudougou' => 'Moussoudougou',
            'R200 /FRIA BASE' => 'Fria Base',
            'Gérances Speciales CPL' => 'CPL'
        ];

        return $communeMapping[$service] ?? null;
    }

    private function getDescription($commune)
    {
        $descriptions = [
            'R2000' => 'La Résidence 2000 est un complexe résidentiel moderne situé dans la commune de Ratoma, comprenant des appartements de standing et des espaces commerciaux.',
            'Moussoudougou' => 'Le quartier Moussoudougou abrite un ensemble d\'immeubles résidentiels destinés aux fonctionnaires de l\'État, avec des infrastructures communautaires.',
            'Fria Base' => 'La Base de Fria est un complexe résidentiel historique lié au secteur minier, comprenant des logements et des équipements collectifs.',
            'CPL' => 'Le Complexe Patrice Lumumba est un centre polyvalent majeur comprenant des bureaux administratifs, des espaces commerciaux et des installations culturelles.'
        ];

        return $descriptions[$commune] ?? PropertyManager::COMMUNES[$commune] ?? null;
    }

    private function getStatistiques($commune)
    {
        return $this->defaultStats[$commune] ?? [
            'batiments' => '0',
            'locataires' => '0',
            'taux_occupation' => '0%'
        ];
    }

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Vider la table avant d'insérer les nouvelles données
        PropertyManager::truncate();

        $managers = [
            [
                'matricule' => 'PBP-S-056',
                'nom' => 'ABDOUL RAHIMI BAH',
                'service' => 'Service Maintenance et Rénovation',
                'poste' => 'Assistant',
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '622541798',
            ],
            [
                'matricule' => 'PBP-S-017',
                'nom' => 'ABDOULAYE CAMARA',
                'service' => 'Service Suivi-Evaluation',
                'poste' => 'Chef (fe) de service',
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '622437428',
            ],
            [
                'matricule' => 'PBP-S-006-A',
                'nom' => 'ABDOULAYE SOUMAH',
                'service' => 'Gérances Communales Kassa',
                'poste' => 'Gérant Principal',
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '628268902',
            ],
            [
                'matricule' => 'PBP-S-053',
                'nom' => 'ABDOURAHAMANE KEITA',
                'service' => 'Direction Immobilière Préfectorale Coyah',
                'poste' => 'Directeur Adjoint',
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '628594538',
            ],
            [
                'matricule' => 'PBP-S-016',
                'nom' => 'ABOUBACAR CAMARA',
                'service' => null,
                'poste' => null,
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '628366797',
            ],
            [
                'matricule' => 'PBP-S-061',
                'nom' => 'ABOUBACAR CONDE',
                'service' => 'Service Accueil',
                'poste' => 'Chef (fe) de service',
                'statut' => 'Stagiaire',
                'telephone' => '664881334',
            ],
            [
                'matricule' => 'PBP-S-036',
                'nom' => 'ABOUBACAR SIDIKI DIAGNE',
                'service' => null,
                'poste' => null,
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '624955555',
            ],
            [
                'matricule' => 'PBP-S-010',
                'nom' => 'ABOUBACAR SY SAVANE',
                'service' => 'Service Recouvrement des Recettes Locatives',
                'poste' => 'Assistant',
                'statut' => 'Contractuel de l\'État - Temporaire',
                'telephone' => '625489880',
            ],
            [
                'matricule' => 'PBP-S-071',
                'nom' => 'AFIDOU SOW',
                'service' => null,
                'poste' => null,
                'statut' => 'Stagiaire',
                'telephone' => '622206560',
            ],
            [
                'matricule' => 'PBP-S-059',
                'nom' => 'AICHA KEITA',
                'service' => null,
                'poste' => null,
                'statut' => 'Stagiaire',
                'telephone' => '624534301',
            ],
            [
                'matricule' => 'PBP-S-038',
                'nom' => 'AICHA TOURE',
                'service' => 'Gérances Communales Dixinn',
                'poste' => 'Gérante Principale',
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '622902339',
            ],
            [
                'matricule' => 'PBP-S-020',
                'nom' => 'AISSATA FOFANA',
                'service' => 'Service Recouvrement des Recettes Locatives',
                'poste' => 'Chargé de recouvrement CM',
                'statut' => 'Stagiaire',
                'telephone' => '628793079',
            ],
            [
                'matricule' => 'PBP-S-046',
                'nom' => 'AISSATA SAM CAMARA',
                'service' => 'Gérances Speciales Sig madina',
                'poste' => 'Adjointe',
                'statut' => 'Stagiaire',
                'telephone' => '626583924',
            ],
            [
                'matricule' => 'PBP-S-021',
                'nom' => 'AISSATOU SIDIBE',
                'service' => 'Gérances Communales Ratoma',
                'poste' => 'Adjointe',
                'statut' => 'Stagiaire',
                'telephone' => '628777159',
            ],
            [
                'matricule' => 'PBP-S-043',
                'nom' => 'ALHASSANE CAMARA',
                'service' => 'Service Maintenance et Rénovation',
                'poste' => 'Assistant',
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '622594746',
            ],
            [
                'matricule' => 'PBP-S-011',
                'nom' => 'ALPHA TRAORE',
                'service' => 'Gérance des Magasins et entrepôts',
                'poste' => 'Gérant Principal',
                'statut' => 'Stagiaire',
                'telephone' => '622067585',
            ],
            [
                'matricule' => 'PBP-S-068',
                'nom' => 'ALSENY KEBE',
                'service' => null,
                'poste' => null,
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '628508665',
            ],
            [
                'matricule' => 'PBP-S-035',
                'nom' => 'ALSENY BEN CONTE',
                'service' => 'Service Suivi-Evaluation',
                'poste' => 'Assistant',
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '625000361',
            ],
            [
                'matricule' => 'PBP-S-048',
                'nom' => 'AMADOU OURY BARRY',
                'service' => 'Service Règlementation',
                'poste' => 'Chef (fe) de service',
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '627083943',
            ],
            [
                'matricule' => 'PBP-S-057',
                'nom' => 'BANGALY DIALLO',
                'service' => 'Direction Immobilière Préfectorale Coyah',
                'poste' => 'Directeur (trice) préfectoral (e)',
                'statut' => 'Contractuel de l\'État - Permanent',
                'telephone' => '628636896',
            ],
            [
                'matricule' => 'PBP-S-012',
                'nom' => 'BINTOU JEANNE MANSARE',
                'service' => 'R200 /FRIA BASE',
                'poste' => 'Responsable logistique et maintenance',
                'statut' => 'Contractuel de l\'État - Permanent',
                'telephone' => '623955541',
            ],
            [
                'matricule' => 'PBP-S-003',
                'nom' => 'BOH SARAN CAMARA',
                'service' => 'Service Ressources Humaines',
                'poste' => 'Assistante RH',
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '628343895',
            ],
            [
                'matricule' => 'PBP-S-009',
                'nom' => 'BOUBACAR KOUKOU TOURE',
                'service' => 'Gérances Communales Matoto',
                'poste' => 'Assistant',
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '628214851',
            ],
            [
                'matricule' => 'PBP-S-014',
                'nom' => 'CHEIKH TIDIANE NDOYE',
                'service' => 'Service Construction et Aménagement',
                'poste' => 'Chef (fe) de service',
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '628543763',
            ],
            [
                'matricule' => 'PBP-S-040',
                'nom' => 'DAVID TOUNKARA',
                'service' => 'Gérances Communales Kaloum',
                'poste' => 'Gérant Principal',
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '622384545',
            ],
            [
                'matricule' => 'PBP-S-029',
                'nom' => 'DEMBA BANGOURA',
                'service' => 'Service Suivi-Evaluation',
                'poste' => 'Assistant',
                'statut' => 'Stagiaire',
                'telephone' => '628950199',
            ],
            [
                'matricule' => 'PBP-S-045',
                'nom' => 'ELISABETH KISLING',
                'service' => 'Direction des batiments et usage communautaire et professionnel',
                'poste' => 'Gérante Principale',
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '628624081',
            ],
            [
                'matricule' => 'PBP-S-001',
                'nom' => 'FODE DOUMBASSA',
                'service' => 'Service Ressources Humaines',
                'poste' => 'Chef (fe) de service',
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '624421218',
            ],
            [
                'matricule' => 'PBP-S-054',
                'nom' => 'FRANCOIS KAMANO',
                'service' => 'Gérances Communales Ratoma',
                'poste' => 'Gérant Principal',
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '622061915',
            ],
            [
                'matricule' => 'PBP-S-022-A',
                'nom' => 'HELENE BENJAMIN',
                'service' => 'Gérances Communales Matam',
                'poste' => 'Adjointe',
                'statut' => 'Stagiaire',
                'telephone' => '622858172',
            ],
            [
                'matricule' => 'PBP-S-060',
                'nom' => 'ISMAEL FOFANA',
                'service' => 'Gérances Speciales Sig madina',
                'poste' => 'Assistant',
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '624882268',
            ],
            [
                'matricule' => 'PBP-S-013',
                'nom' => 'KADIATOU BAH',
                'service' => 'Direction juridique et contentieux',
                'poste' => 'Assistante',
                'statut' => 'Stagiaire',
                'telephone' => '626965452',
            ],
            [
                'matricule' => 'PBP-S-051',
                'nom' => 'KASSIM CONDE',
                'service' => 'Direction Immobilière Préfectorale N\'Zerekoré',
                'poste' => 'Directeur (trice) préfectoral (e)',
                'statut' => 'Stagiaire',
                'telephone' => '622633411',
            ],
            [
                'matricule' => 'PBP-S-027',
                'nom' => 'KERFALA SYLLA',
                'service' => 'Direction Maintenance et Logistique',
                'poste' => 'Directeur (trice)',
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '620937454',
            ],
            [
                'matricule' => 'PBP-S-039',
                'nom' => 'KOHO CAMARA',
                'service' => 'Service Maintenance et Rénovation',
                'poste' => 'Assistant',
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '664239137',
            ],
            [
                'matricule' => 'PBP-S-062',
                'nom' => 'KOMA CAMARA',
                'service' => 'Direction Générale',
                'poste' => 'Assistante',
                'statut' => 'Stagiaire',
                'telephone' => '623883472',
            ],
            [
                'matricule' => 'PBP-S-026',
                'nom' => 'LAMARANA BAH',
                'service' => 'Direction Maintenance et Logistique',
                'poste' => 'Assistant',
                'statut' => 'Contractuel de l\'État - Permanent',
                'telephone' => '623531932',
            ],
            [
                'matricule' => 'PBP-S-041',
                'nom' => 'M\'BALIA SOUMAH',
                'service' => 'Service Modernisation, Communication et Documentation',
                'poste' => 'Assistante',
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '622841393',
            ],
            [
                'matricule' => 'PBP-S-031',
                'nom' => 'M\'BALIA SOUMAH',
                'service' => 'Gérances Communales Matoto',
                'poste' => 'Adjointe',
                'statut' => 'Stagiaire',
                'telephone' => '624062740',
            ],
            [
                'matricule' => 'PBP-S-025',
                'nom' => 'M\'BEMBA CAMARA',
                'service' => 'Service Maintenance et Rénovation',
                'poste' => 'Assistant',
                'statut' => 'Stagiaire',
                'telephone' => '622337887',
            ],
            [
                'matricule' => 'PBP-S-064',
                'nom' => 'MAKALE BANGOURA',
                'service' => 'Direction Générale Adjoint',
                'poste' => 'Secrétaire particulière',
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '628815674',
            ],
            [
                'matricule' => 'PBP-S-032',
                'nom' => 'MAMA AISSATA BANGOURA',
                'service' => 'Gérance des Magasins et entrepôts',
                'poste' => 'Adjointe',
                'statut' => 'Stagiaire',
                'telephone' => '625082324',
            ],
            [
                'matricule' => 'PBP-S-030',
                'nom' => 'MAMADAMA SYLLA',
                'service' => 'Service Modernisation, Communication et Documentation',
                'poste' => 'Assistant',
                'statut' => 'Stagiaire',
                'telephone' => '622401193',
            ],
            [
                'matricule' => 'PBP-S-058',
                'nom' => 'MARCEL AGUETEY GUNN',
                'service' => 'Service Modernisation, Communication et Documentation',
                'poste' => 'Assistant',
                'statut' => 'Stagiaire',
                'telephone' => '629963440',
            ],
            [
                'matricule' => 'PBP-S-063',
                'nom' => 'MARCELINE RITA KABA',
                'service' => 'Direction Générale',
                'poste' => 'Assistante',
                'statut' => 'Stagiaire',
                'telephone' => '623946114',
            ],
            [
                'matricule' => 'PBP-S-024',
                'nom' => 'MARIAMA ODIE BANGOURA',
                'service' => 'Gérances Communales Ratoma',
                'poste' => 'Assistante',
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '622672629',
            ],
            [
                'matricule' => 'PBP-S-034',
                'nom' => 'MARIAMA SACKO',
                'service' => 'Gérances Communales Kaloum',
                'poste' => 'Adjointe',
                'statut' => 'Stagiaire',
                'telephone' => '621951221',
            ],
            [
                'matricule' => 'PBP-S-015',
                'nom' => 'MOHAMED CAMARA',
                'service' => 'Service Maintenance et Rénovation',
                'poste' => 'Plombier',
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '628696315',
            ],
            [
                'matricule' => 'PBP-S-044',
                'nom' => 'MOHAMED CAMARA',
                'service' => 'Gérance des Magasins et entrepôts',
                'poste' => 'Assistant',
                'statut' => 'Contractuel de l\'État - Temporaire',
                'telephone' => '628234232',
            ],
            [
                'matricule' => 'PBP-S-023',
                'nom' => 'MOHAMED CISSE',
                'service' => 'Service Maintenance et Rénovation',
                'poste' => 'Chef (fe) de service',
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '623079611',
            ],
            [
                'matricule' => 'PBP-S-022-B',
                'nom' => 'MOHAMED CISSE',
                'service' => null,
                'poste' => null,
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '623079611',
            ],
            [
                'matricule' => 'PBP-S-037',
                'nom' => 'MOHAMED LAMINE BANGOURA',
                'service' => 'Direction juridique et contentieux',
                'poste' => 'Assistant',
                'statut' => 'Stagiaire',
                'telephone' => '622856769',
            ],
            [
                'matricule' => 'PBP-S-055',
                'nom' => 'MOHAMED LAMINE CISSE',
                'service' => 'Service Contentieux et Suivi des Différends',
                'poste' => 'Chef (fe) de service',
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '628594626',
            ],
            [
                'matricule' => 'PBP-S-004',
                'nom' => 'MOHAMED LAMINE DOUMBOUYA',
                'service' => 'Service Ressources Humaines',
                'poste' => 'Assistant',
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '628343860',
            ],
            [
                'matricule' => 'PBP-S-072',
                'nom' => 'MOUSSA L SANGARE',
                'service' => null,
                'poste' => null,
                'statut' => 'Stagiaire',
                'telephone' => '622289258',
            ],
            [
                'matricule' => 'PBP-S-066',
                'nom' => 'MOUSSA CAMARA',
                'service' => null,
                'poste' => null,
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '622591217',
            ],
            [
                'matricule' => 'PBP-S-047',
                'nom' => 'MOUSTAPHA CONDE',
                'service' => null,
                'poste' => null,
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '621998236',
            ],
            [
                'matricule' => 'PBP-S-019',
                'nom' => 'NANSARA TRAORE',
                'service' => 'Service Administratif et Financier',
                'poste' => 'Assistante',
                'statut' => 'Stagiaire',
                'telephone' => '610060121',
            ],
            [
                'matricule' => 'PBP-S-007',
                'nom' => 'OUMAR TRAORE',
                'service' => 'Service Modernisation, Communication et Documentation',
                'poste' => 'Chef (fe) de service',
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '622514251',
            ],
            [
                'matricule' => 'PBP-S-006-B',
                'nom' => 'OUMOU CAMARA',
                'service' => 'Service Administratif et Financier',
                'poste' => 'Chef (fe) de service',
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '622561367',
            ],
            [
                'matricule' => 'PBP-S-008',
                'nom' => 'OUSMANE KEITA',
                'service' => 'Direction des batiments et usage communautaire et professionnel',
                'poste' => 'Gérant adjoint',
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '622957493',
            ],
            [
                'matricule' => 'PBP-S-067',
                'nom' => 'OUSMANE MAOMY',
                'service' => 'Gérances Speciales CPL',
                'poste' => 'Gérant Principal',
                'statut' => 'Stagiaire',
                'telephone' => '628636331',
            ],
            [
                'matricule' => 'PBP-S-033',
                'nom' => 'SANASSA CAMARA',
                'service' => 'Gérances Communales Kaloum',
                'poste' => 'Assistante',
                'statut' => 'Stagiaire',
                'telephone' => '622343684',
            ],
            [
                'matricule' => 'PBP-S-065',
                'nom' => 'SAYON SOLANO',
                'service' => 'Service Maintenance et Rénovation',
                'poste' => 'Assistant',
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '620943421',
            ],
            [
                'matricule' => 'PBP-S-070',
                'nom' => 'SEKOU CONDE',
                'service' => null,
                'poste' => null,
                'statut' => 'Stagiaire',
                'telephone' => '621357969',
            ],
            [
                'matricule' => 'PBP-S-049',
                'nom' => 'SEKOU TOUMANE CONTE',
                'service' => 'Gérances Communales Matam',
                'poste' => 'Gérant Principal',
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '625252655',
            ],
            [
                'matricule' => 'PBP-S-002',
                'nom' => 'SOULE YAMNE DIALLO',
                'service' => 'Conseiller à la direction chargé des questions immobilières',
                'poste' => 'Conseiller',
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '623273703',
            ],
            [
                'matricule' => 'PBP-S-028',
                'nom' => 'THIERNO MADOU BAH',
                'service' => 'Gérances Communales Matoto',
                'poste' => null,
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '628487278',
            ],
            [
                'matricule' => 'PBP-S-005',
                'nom' => 'TIOUDANDE DIALLO',
                'service' => 'Service Recouvrement des Recettes Locatives',
                'poste' => 'Chef (fe) de service',
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '622175338',
            ],
            [
                'matricule' => 'PBP-S-042-A',
                'nom' => 'VADE SOUMAHORO',
                'service' => 'Direction Immobilière Préfectorale Dubréka',
                'poste' => 'Directeur (trice) préfectoral (e)',
                'statut' => 'Contractuel de l\'État - Permanent',
                'telephone' => '623449139',
            ],
            [
                'matricule' => 'PBP-S-042-B',
                'nom' => 'YACOUBA KEITA',
                'service' => 'Direction des batiments et usage communautaire et professionnel',
                'poste' => 'Assistant',
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '622391846',
            ],
            [
                'matricule' => 'PBP-S-018',
                'nom' => 'YAYA KOUROUMA',
                'service' => 'Gérances Speciales Sig madina',
                'poste' => 'Gérant Principal',
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '622225752',
            ],
            // Ajout des gérants pour les bâtiments spéciaux
            [
                'matricule' => 'PBP-S-R2000',
                'nom' => 'MOHAMED SYLLA',
                'service' => 'Gérances Speciales R2000',
                'poste' => 'Gérant Principal',
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '622123456',
            ],
            [
                'matricule' => 'PBP-S-MOUSS',
                'nom' => 'AISSATOU BALDE',
                'service' => 'Gérances Speciales Moussoudougou',
                'poste' => 'Gérante Principale',
                'statut' => 'Fonctionnaire de l\'État',
                'telephone' => '622234567',
            ],
            [
                'matricule' => 'PBP-S-FRIA',
                'nom' => 'BINTOU JEANNE MANSARE',
                'service' => 'R200 /FRIA BASE',
                'poste' => 'Responsable logistique et maintenance',
                'statut' => 'Contractuel de l\'État - Permanent',
                'telephone' => '623955541',
            ],
            [
                'matricule' => 'PBP-S-CPL',
                'nom' => 'OUSMANE MAOMY',
                'service' => 'Gérances Speciales CPL',
                'poste' => 'Gérant Principal',
                'statut' => 'Stagiaire',
                'telephone' => '628636331',
            ],
        ];

        foreach ($managers as $manager) {
            $commune = $this->getGerantCommune($manager['service']);
            $description = $commune ? $this->getDescription($commune) : null;
            $statistiques = $commune ? $this->getStatistiques($commune) : [
                'batiments' => '0',
                'locataires' => '0',
                'taux_occupation' => '0%'
            ];

            // Déterminer si le gérant est principal pour sa commune
            $isGerantPrincipal = $manager['poste'] === 'Gérant Principal' || 
                                $manager['poste'] === 'Gérante Principale' ||
                                $manager['poste'] === 'Directeur (trice) préfectoral (e)' ||
                                $manager['poste'] === 'Responsable logistique et maintenance';

            PropertyManager::create([
                'matricule' => $manager['matricule'],
                'nom' => $manager['nom'],
                'service' => $manager['service'],
                'poste' => $manager['poste'],
                'telephone' => $manager['telephone'],
                'statut' => $manager['statut'],
                'commune' => $commune,
                'description' => $description,
                'statistiques' => $isGerantPrincipal ? $statistiques : [
                    'batiments' => '0',
                    'locataires' => '0',
                    'taux_occupation' => '0%'
                ],
                'photo' => null,
                'is_active' => true
            ]);
        }
    }
}
