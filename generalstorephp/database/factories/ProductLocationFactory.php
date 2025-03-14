<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Product;

class ProductLocationFactory extends Factory
{
    public function definition()
    {
        return [
            'product_id' => Product::inRandomOrder()->first()->product_id ?? 'pid100',
            'room_no' => $this->faker->numberBetween(1, 10),
            'row_no' => $this->faker->numberBetween(1, 5),
            'section' => chr(rand(65, 90)), // Random letter A-Z
            'container_no' => $this->faker->numberBetween(1, 30),
        ];
    }
}
