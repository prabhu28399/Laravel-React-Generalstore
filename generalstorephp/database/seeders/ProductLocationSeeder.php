<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ProductLocation;

class ProductLocationSeeder extends Seeder
{
    public function run()
    {
        ProductLocation::factory()->count(50)->create();
    }
}
