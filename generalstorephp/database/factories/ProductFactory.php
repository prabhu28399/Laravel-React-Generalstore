<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\ProductCategory;
use App\Models\User;

class ProductFactory extends Factory
{
    public function definition()
    {
        return [
            'product_name' => $this->faker->word,
            'product_id' => 'pid' . $this->generateUniqueProductId(),
            'category_id' => ProductCategory::inRandomOrder()->value('category_id') ?? 'pct100', 
            'quantity' => rand(1, 100),
            'user_id' => User::inRandomOrder()->value('id') ?? 1,
        ];
    }

    private function generateUniqueProductId()
    {
        do {
            $uniqueId = rand(100, 999); // Generate a random 3-digit number
            $exists = \App\Models\Product::where('product_id', 'pid' . $uniqueId)->exists();
        } while ($exists);

        return $uniqueId;
    }
}
