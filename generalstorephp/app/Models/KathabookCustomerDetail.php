<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KathabookCustomerDetail extends Model
{
    use HasFactory;

    protected $table = 'kathabook_customer_details'; // Specify the table name

    protected $fillable = [
        'customer_id',
        'you_gave',
        'you_got',
        'note',
    ];

    public function customer()
    {
        return $this->belongsTo(KathabookCustomer::class, 'customer_id', 'id');
    }
}
