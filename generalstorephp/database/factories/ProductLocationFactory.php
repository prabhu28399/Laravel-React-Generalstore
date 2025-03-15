<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Product;
use App\Models\User;

class ProductLocationFactory extends Factory
{
    public function definition()
    {
        return [
            'user_id' => User::inRandomOrder()->value('id') ?? 1, // Selects a random user ID, defaults to 1
            'product_id' => Product::inRandomOrder()->value('product_id') ?? 'pid100', // Selects a valid product ID
            'room_no' => (string) rand(1, 10), // Enum range (1-10)
            'row_no' => (string) rand(1, 5), // Enum range (1-5)
            'section' => chr(rand(65, 90)), // Random uppercase letter (A-Z)
            'container_no' => (string) rand(1, 30), // Enum range (1-30)
        ];
    }
}
