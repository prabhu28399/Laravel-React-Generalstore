<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up() {
        Schema::create('product_locations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->string('product_id');
            $table->enum('room_no', range(1, 10));
            $table->enum('row_no', range(1, 5));
            $table->char('section', 1);
            $table->enum('container_no', range(1, 30));
            $table->timestamps();

            $table->foreign('product_id')->references('product_id')->on('products')->onDelete('cascade');
        });
    }

    public function down() {
        Schema::dropIfExists('product_locations');
    }
};
