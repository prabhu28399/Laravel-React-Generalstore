<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('kathabook_customer_details', function (Blueprint $table) {
            $table->id(); // Auto-incrementing primary key
            $table->foreignId('customer_id')->constrained('kathabook_customers')->onDelete('cascade');
            $table->decimal('you_gave', 10, 2)->nullable(); // Amount given to customer
            $table->decimal('you_got', 10, 2)->nullable(); // Amount received from customer
            $table->text('note')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('kathabook_customer_details');
    }
};
