<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Product;
use App\Models\User;

class ProductStockFactory extends Factory
{
    public function definition()
    {
        return [
            'user_id' => User::inRandomOrder()->first()->id ?? 1, // Select a random user or default to ID 1
            'product_id' => Product::inRandomOrder()->first()->product_id ?? 'pid100',
            'quantity' => $this->faker->numberBetween(1, 500),
        ];
    }
}
