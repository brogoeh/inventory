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
        Schema::create('warehouses', function (Blueprint $table) {
            $table->id();
            $table->string('warehouse_code', 5);
            $table->string('warehouse_name', 150);
            $table->string('email', 150)->unique();
            $table->string('phone_number', 14);
            $table->string('city', 80);
            $table->string('regency', 80);
            $table->string('address', 180);
            $table->enum('status', ['A', 'C']);
            $table->unsignedInteger('created_id');
            $table->unsignedInteger('updated_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('warehouses');
    }
};
