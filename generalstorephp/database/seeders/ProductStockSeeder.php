<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ProductStock;

class ProductStockSeeder extends Seeder
{
    public function run()
    {
        ProductStock::factory()->count(50)->create();
    }
}
