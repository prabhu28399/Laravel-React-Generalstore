<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up() {
        Schema::create('product_categories', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->string('category_id')->unique();
            $table->string('category_name');
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('product_categories');
    }
};
