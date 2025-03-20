<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\KathabookCustomer;

class KathabookCustomerSeeder extends Seeder
{
    public function run(): void
    {
        KathabookCustomer::factory(10)->create(); // Creates 10 customers
    }
}
