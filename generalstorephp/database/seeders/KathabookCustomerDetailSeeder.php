<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\KathabookCustomer;
use App\Models\KathabookCustomerDetail;

class KathabookCustomerDetailSeeder extends Seeder
{
    public function run(): void
    {
        // Fetch all customers and assign 5 transactions each
        KathabookCustomer::all()->each(function ($customer) {
            KathabookCustomerDetail::factory(5)->create([
                'customer_id' => $customer->id,
            ]);
        });
    }
}
