<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KathabookCustomer extends Model
{
    use HasFactory;

    protected $table = 'kathabook_customers'; // Specify the table name

    protected $fillable = [
        'name',
        'customer_id',
        'phone',
    ];

    public function customerDetails()
    {
        return $this->hasMany(KathabookCustomerDetail::class, 'customer_id', 'id');
    }
}
