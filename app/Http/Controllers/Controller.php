<?php

namespace App\Http\Controllers;

abstract class Controller
{
    public function getRegions()
    {
        return [
            ['id' => 'boké', 'nom' => 'Boké'],
            ['id' => 'conakry', 'nom' => 'Conakry'],
            ['id' => 'faranah', 'nom' => 'Faranah'],
            ['id' => 'kankan', 'nom' => 'Kankan'],
            ['id' => 'kindia', 'nom' => 'Kindia'],
            ['id' => 'labe', 'nom' => 'Labé'],
            ['id' => 'mamou', 'nom' => 'Mamou'],
            ['id' => 'nzérékoré', 'nom' => 'Nzérékoré']
        ];
    }

    public function getPrefectures()
    {
        return [
            // Region Boké
            ['id' => 'boke', 'nom' => 'Boké', 'region_id' => 'boké'],
            ['id' => 'boffa', 'nom' => 'Boffa', 'region_id' => 'boké'],
            ['id' => 'fria', 'nom' => 'Fria', 'region_id' => 'boké'],
            ['id' => 'gaoual', 'nom' => 'Gaoual', 'region_id' => 'boké'],
            ['id' => 'koundara', 'nom' => 'Koundara', 'region_id' => 'boké'],

            // Region Conakry
            ['id' => 'dixinn', 'nom' => 'Dixinn', 'region_id' => 'conakry'],
            ['id' => 'gbessia', 'nom' => 'Gbessia', 'region_id' => 'conakry'],
            ['id' => 'kaloum', 'nom' => 'Kaloum', 'region_id' => 'conakry'],
            ['id' => 'kassa', 'nom' => 'Kassa', 'region_id' => 'conakry'],
            ['id' => 'lambanyi', 'nom' => 'Lambanyi', 'region_id' => 'conakry'],
            ['id' => 'matam', 'nom' => 'Matam', 'region_id' => 'conakry'],
            ['id' => 'matoto', 'nom' => 'Matoto', 'region_id' => 'conakry'],
            ['id' => 'ratoma', 'nom' => 'Ratoma', 'region_id' => 'conakry'],
            ['id' => 'sonfonia', 'nom' => 'Sonfonia', 'region_id' => 'conakry'],
            ['id' => 'tombolia', 'nom' => 'Tombolia', 'region_id' => 'conakry'],

            // Region Faranah
            ['id' => 'dabola', 'nom' => 'Dabola', 'region_id' => 'faranah'],
            ['id' => 'dinguiraye', 'nom' => 'Dinguiraye', 'region_id' => 'faranah'],
            ['id' => 'faranah', 'nom' => 'Faranah', 'region_id' => 'faranah'],
            ['id' => 'kissidougou', 'nom' => 'Kissidougou', 'region_id' => 'faranah'],

            // Region Kankan
            ['id' => 'kankan', 'nom' => 'Kankan', 'region_id' => 'kankan'],
            ['id' => 'kouroussa', 'nom' => 'Kouroussa', 'region_id' => 'kankan'],
            ['id' => 'kerouane', 'nom' => 'Kérouané', 'region_id' => 'kankan'],
            ['id' => 'mandiana', 'nom' => 'Mandiana', 'region_id' => 'kankan'],
            ['id' => 'siguiri', 'nom' => 'Siguiri', 'region_id' => 'kankan'],

            // Region kindia
            ['id' => 'coyah', 'nom' => 'Coyah', 'region_id' => 'kindia'],
            ['id' => 'dubreka', 'nom' => 'Dubréka', 'region_id' => 'kindia'],
            ['id' => 'forecariah', 'nom' => 'Forécariah', 'region_id' => 'kindia'],
            ['id' => 'kindia', 'nom' => 'Kindia', 'region_id' => 'kindia'],
            ['id' => 'telimele', 'nom' => 'Télimelé', 'region_id' => 'kindia'],

            // Region Labe
            ['id' => 'koubia', 'nom' => 'Koubia', 'region_id' => 'labe'],
            ['id' => 'labe', 'nom' => 'Labé', 'region_id' => 'labe'],
            ['id' => 'lelouma', 'nom' => 'Lelouma', 'region_id' => 'labe'],
            ['id' => 'mali', 'nom' => 'Mali', 'region_id' => 'labe'],
            ['id' => 'tougue', 'nom' => 'Tougué', 'region_id' => 'labe'],

            // Region Mamou
            ['id' => 'dalaba', 'nom' => 'Dalaba', 'region_id' => 'mamou'],
            ['id' => 'mamou', 'nom' => 'Mamou', 'region_id' => 'mamou'],
            ['id' => 'pita', 'nom' => 'Pita', 'region_id' => 'mamou'],

            // Region Nzérékoré
            ['id' => 'nzérékoré', 'nom' => 'Nzérékoré', 'region_id' => 'nzérékoré'],
            ['id' => 'beyla', 'nom' => 'Beyla', 'region_id' => 'nzérékoré'],
            ['id' => 'gueckedou', 'nom' => 'Gueckédou', 'region_id' => 'nzérékoré'],
            ['id' => 'lola', 'nom' => 'Lola', 'region_id' => 'nzérékoré'],
        ];
    }

    public function getCommunes()
    {
        return [
            // Quelques communes pour Conakry
            ['id' => 'madina', 'nom' => 'Madina', 'prefecture_id' => 'matam'],
            ['id' => 'almamya', 'nom' => 'Almamya', 'prefecture_id' => 'kaloum'],
            ['id' => 'hamdallaye', 'nom' => 'Hamdallaye', 'prefecture_id' => 'ratoma'],
            ['id' => 'cosa', 'nom' => 'Cosa', 'prefecture_id' => 'ratoma'],
            ['id' => 'sonfonia', 'nom' => 'Sonfonia', 'prefecture_id' => 'ratoma'],
            ['id' => 'lansanaya', 'nom' => 'Lansanaya', 'prefecture_id' => 'ratoma'],
            ['id' => 'taouyah', 'nom' => 'Taouyah', 'prefecture_id' => 'ratoma'],
            ['id' => 'dixinn_port', 'nom' => 'Dixinn Port', 'prefecture_id' => 'dixinn'],
            ['id' => 'belle_vue', 'nom' => 'Belle Vue', 'prefecture_id' => 'dixinn'],
            ['id' => 'bonfi', 'nom' => 'Bonfi', 'prefecture_id' => 'matoto'],
            ['id' => 'enta', 'nom' => 'Enta', 'prefecture_id' => 'matoto'],
            // Autres communes...
        ];
    }

    public function getTypesBien()
    {
        return [
            ['id' => 'villa', 'nom' => 'Villa'],
            ['id' => 'appartement', 'nom' => 'Appartement'],
            ['id' => 'bureau', 'nom' => 'Bureau'],
            ['id' => 'magasin', 'nom' => 'Magasin/Local commercial'],
            ['id' => 'entrepot', 'nom' => 'Entrepôt'],
            ['id' => 'terrain', 'nom' => 'Terrain'],
            ['id' => 'immeuble', 'nom' => 'Immeuble'],
        ];
    }
    

    public function getZones()
    {
        return [
            ['id' => 'urbaine', 'nom' => 'Zone urbaine'],
            ['id' => 'rurale', 'nom' => 'Zone rurale'],
        ];
    }
    
}
