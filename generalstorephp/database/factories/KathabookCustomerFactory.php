<?php
namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\KathabookCustomer;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\KathabookCustomer>
 */
class KathabookCustomerFactory extends Factory
{
    protected $model = KathabookCustomer::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'customer_id' => 'CUST' . $this->faker->unique()->numberBetween(1000, 9999),
            'phone' => $this->faker->unique()->numerify('##########'), // 10-digit phone number
        ];
    }
}
