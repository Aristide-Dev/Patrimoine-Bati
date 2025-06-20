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
        Schema::table('news', function (Blueprint $table) {
            // Attention : Laravel ne fournit pas de méthode directe pour longText() dans "alter",
            // donc on utilise un raw SQL via DB::statement() si nécessaire, sinon longText() peut marcher
            $table->longText('content')->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('news', function (Blueprint $table) {
            $table->text('content')->change(); // Revenir à TEXT
        });
    }
};
