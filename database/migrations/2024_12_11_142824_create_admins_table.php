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
        Schema::create('admins', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('entity_id')->nullable()->comment('company id | hotel id');

            $table->enum('type', ["kaptan", "company", "hotel"])->index();

            $table->enum('status', ["active", "blocked"])->index();

            $table->string('name');
            $table->string('email');
            $table->string('password');
            $table->dateTime('email_verified_at')->nullable();

            $table->unsignedBigInteger('role_id');
            $table->foreign('role_id')->references('id')->on('roles');

            $table->dateTime('deleted_at')->index('type')->nullable();

            $table->unique(['type', 'email', 'deleted_at']);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('admins');
    }
};
