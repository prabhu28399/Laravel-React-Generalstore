<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run()
    {
        // Create an admin user
        User::create([
            'shopname' => 'india',
            'email' => 'india@gmail.com',
            'password' => Hash::make('User@123'),
        ]);

        // Create another default user (KFC)
        User::create([
            'shopname' => 'KFC Outlet',
            'email' => 'kfc@gmail.com',
            'password' => Hash::make('kfc123'),
        ]);
        User::create([
            'shopname' => 'prabhu kiranam',
            'email' => 'prabhu28399@gmail.com',
            'password' => Hash::make('12345678'),
        ]);

        // Generate 10 random users
        User::factory()->count(10)->create();
    }
}
