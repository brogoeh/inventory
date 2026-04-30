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
        Schema::create('items', function (Blueprint $table) {
            $table->id();
            $table->string('item_name', 12);
            $table->string('description', 200);
            $table->enum('status', ['A', 'I', 'C']);
            $table->decimal('std_qty', 4, 2);
            $table->decimal('min_stock', 4, 2);
            $table->decimal('max_stock', 4, 2);
            $table->float('unit_cost', 10, 2);
            $table->float('unit_retail', 12, 2);
            $table->foreignId('supplier_id')->constrained()->onDelete('cascade');
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
        Schema::dropIfExists('items');
    }
};
