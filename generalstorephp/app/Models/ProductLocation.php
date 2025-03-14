<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductLocation extends Model {
    use HasFactory;
    protected $fillable = ['user_id', 'product_id', 'room_no', 'row_no', 'section', 'container_no'];

    public function product() {
        return $this->belongsTo(Product::class, 'product_id', 'product_id');
    }
}
