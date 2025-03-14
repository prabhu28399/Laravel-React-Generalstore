<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    public function definition()
    {
        return [
            'shopname' => $this->faker->company(),
            'email' => $this->faker->unique()->safeEmail(),
            'password' => Hash::make('password'), // Default password for all users
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
