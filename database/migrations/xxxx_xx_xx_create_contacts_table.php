<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->string('email');
            $table->string('telephone')->nullable();
            $table->string('sujet');
            $table->text('message');
            $table->enum('status', ['non_lu', 'lu', 'traite'])->default('non_lu');
            $table->boolean('lu')->default(false);
            $table->timestamp('lu_le')->nullable();
            $table->string('ip_address')->nullable();
            $table->text('user_agent')->nullable();
            $table->timestamps();
            
            // Index pour améliorer les performances
            $table->index(['lu', 'created_at']);
            $table->index('email');
            $table->index('created_at');
        });
    }

    public function down()
    {
        Schema::dropIfExists('contacts');
    }
}; 