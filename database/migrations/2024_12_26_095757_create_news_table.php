<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('news', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('excerpt')->nullable();
            $table->text('content')->nullable();
            $table->string('image')->nullable(); // URL de l'image principale
            $table->string('category')->nullable();
            $table->json('tags')->nullable(); // Tags sous forme de chaîne JSON
            $table->boolean('featured')->default(false); // à la une
            $table->unsignedInteger('views')->default(0);
            $table->unsignedInteger('read_time')->default(0); // Temps de lecture en minutes
            $table->timestamp('published_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('news');
    }
};
