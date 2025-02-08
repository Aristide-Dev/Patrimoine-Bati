<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('demandes', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->string('prenom');
            $table->string('matricule')->nullable();
            $table->string('fonction');
            $table->string('email');
            $table->string('telephone');
            $table->string('situation_matrimoniale');
            $table->string('type_demande');
            $table->string('type_bien');
            $table->string('commune')->nullable();
            $table->string('quartier')->nullable();
            $table->string('precision')->nullable();
            $table->string('photo')->nullable();


            $table->string('carte_identite')->nullable();
            $table->string('demande_manuscrite')->nullable();
            $table->string('bulletin_salaire')->nullable();
            $table->enum('status', ['en_attente', 'en_cours', 'accepte', 'refuse'])->default('en_attente');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('demandes');
    }
}; 