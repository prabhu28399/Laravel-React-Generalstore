<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model {
    use HasFactory;
    protected $fillable = ['user_id', 'category_id', 'product_name', 'product_id'];

    protected static function boot() {
        parent::boot();
        static::creating(function ($product) {
            $product->product_id = 'pid' . rand(100, 999); // pidXYZ
        });
    }

    public function category() {
        return $this->belongsTo(ProductCategory::class, 'category_id', 'category_id');
    }
    public function stock() {
        return $this->hasOne(ProductStock::class, 'product_id', 'product_id');
    }
}
