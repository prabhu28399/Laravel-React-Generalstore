<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Product;

class ProductStockFactory extends Factory
{
    public function definition()
    {
        return [
            'product_id' => Product::inRandomOrder()->first()->product_id ?? 'pid100',
            'stock_quantity' => $this->faker->numberBetween(1, 500),
        ];
    }
}
