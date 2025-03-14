<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\ProductCategory;
use Illuminate\Support\Str;

class ProductFactory extends Factory
{
    public function definition()
    {
        return [
            'product_name' => $this->faker->word,
            'product_id' => 'pid' . rand(100, 999), // Generates a truly unique ID
            'category_id' => \App\Models\ProductCategory::inRandomOrder()->first()->category_id, // Get a random category
            'quantity' => rand(1, 100), // Random quantity
            'user_id' => \App\Models\User::inRandomOrder()->first()->id, // Assign a random user
        ];
    }
}
