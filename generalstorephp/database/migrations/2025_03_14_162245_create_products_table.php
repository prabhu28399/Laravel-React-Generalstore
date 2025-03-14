<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up() {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->string('category_id');
            $table->string('product_id')->unique();
            $table->string('product_name');
            $table->integer('quantity');
            $table->timestamps();

            $table->foreign('category_id')->references('category_id')->on('product_categories')->onDelete('cascade');
        });
    }

    public function down() {
        Schema::dropIfExists('products');
    }
};
