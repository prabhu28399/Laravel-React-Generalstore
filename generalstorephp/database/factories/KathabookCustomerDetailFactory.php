<?php
namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\KathabookCustomer;
use App\Models\KathabookCustomerDetail;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\KathabookCustomerDetail>
 */
class KathabookCustomerDetailFactory extends Factory
{
    protected $model = KathabookCustomerDetail::class;

    public function definition(): array
    {
        return [
            'customer_id' => KathabookCustomer::factory(), // Create a customer if not already existing
            'you_gave' => $this->faker->randomElement([null, $this->faker->randomFloat(2, 100, 1000)]),
            'you_got' => $this->faker->randomElement([null, $this->faker->randomFloat(2, 100, 1000)]),
            'note' => $this->faker->optional()->sentence(),
        ];
    }
}
