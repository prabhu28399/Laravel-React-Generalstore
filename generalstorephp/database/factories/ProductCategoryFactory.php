<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ProductCategoryFactory extends Factory
{
    public function definition()
    {
        return [
            'category_name' => $this->faker->word(),
            'category_id' => 'pct' . rand(100, 999), // Auto-generate category ID
            'user_id' => \App\Models\User::inRandomOrder()->first()->id ?? 1, // Assign an existing user
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
    
}
