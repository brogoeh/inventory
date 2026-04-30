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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('order_number', 10);
            $table->foreignId('warehouse_id')->constrained()->onDelete('cascade');
            $table->foreignId('supplier_id')->constrained()->onDelete('cascade');
            $table->date('delivery_start_date');
            $table->date('delivery_end_date');
            $table->foreignId('order_status_id')->constrained()->onDelete('cascade');
            $table->unsignedInteger('created_id');
            $table->unsignedInteger('approval_id');
            $table->unsignedInteger('last_updated_id');
            $table->unsignedInteger('verified_id');
            $table->dateTime('verified_at');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
