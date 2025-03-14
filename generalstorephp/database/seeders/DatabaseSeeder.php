<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            AdminSeeder::class,
            UserSeeder::class,
            ProductCategorySeeder::class,
            ProductSeeder::class,
            ProductLocationSeeder::class,
            ProductStockSeeder::class,
        ]);
    }
}
