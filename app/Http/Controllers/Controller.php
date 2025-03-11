<?php

namespace App\Http\Controllers;

abstract class Controller
{
    public function getRegions()
    {
        return [
            ['id' => 'conakry', 'nom' => 'Conakry'],
            ['id' => 'kindia', 'nom' => 'Kindia'],
            ['id' => 'boké', 'nom' => 'Boké'],
            ['id' => 'mamou', 'nom' => 'Mamou'],
            ['id' => 'labé', 'nom' => 'Labé'],
            ['id' => 'faranah', 'nom' => 'Faranah'],
            ['id' => 'kankan', 'nom' => 'Kankan'],
            ['id' => 'nzérékoré', 'nom' => 'Nzérékoré']
        ];
    }

    public function getPrefectures()
    {
        return [
            // Conakry (communes)
            ['id' => 'kaloum', 'nom' => 'Kaloum', 'region_id' => 'conakry'],
            ['id' => 'dixinn', 'nom' => 'Dixinn', 'region_id' => 'conakry'],
            ['id' => 'matam', 'nom' => 'Matam', 'region_id' => 'conakry'],
            ['id' => 'ratoma', 'nom' => 'Ratoma', 'region_id' => 'conakry'],
            ['id' => 'matoto', 'nom' => 'Matoto', 'region_id' => 'conakry'],
            // Région de Kindia
            ['id' => 'kindia_pref', 'nom' => 'Kindia', 'region_id' => 'kindia'],
            ['id' => 'forecariah', 'nom' => 'Forécariah', 'region_id' => 'kindia'],
            ['id' => 'coyah', 'nom' => 'Coyah', 'region_id' => 'kindia'],
            ['id' => 'telimele', 'nom' => 'Télimélé', 'region_id' => 'kindia'],
            ['id' => 'dubreka', 'nom' => 'Dubréka', 'region_id' => 'kindia'],
            // Région de Boké
            ['id' => 'boke_pref', 'nom' => 'Boké', 'region_id' => 'boké'],
            ['id' => 'boffa', 'nom' => 'Boffa', 'region_id' => 'boké'],
            ['id' => 'fria', 'nom' => 'Fria', 'region_id' => 'boké'],
            ['id' => 'gaoual', 'nom' => 'Gaoual', 'region_id' => 'boké'],
            ['id' => 'koundara', 'nom' => 'Koundara', 'region_id' => 'boké'],
            // Autres régions...
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
