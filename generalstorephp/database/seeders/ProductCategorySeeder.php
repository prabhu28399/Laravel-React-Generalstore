<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ProductCategory;

class ProductCategorySeeder extends Seeder
{
    public function run()
    {
        \App\Models\ProductCategory::create([
            'category_name' => 'Electronics',
            'category_id' => 'pct' . rand(100, 999),
            'user_id' => 1, // Ensure a valid user ID
        ]);
    
        \App\Models\ProductCategory::factory()->count(10)->create(); // Generate 10 fake categories
    }
    
}
    