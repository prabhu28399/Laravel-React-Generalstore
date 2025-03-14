<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductCategory extends Model {
    use HasFactory;
    protected $fillable = ['user_id', 'category_name', 'category_id'];

    protected static function boot() {
        parent::boot();
        static::creating(function ($category) {
            $category->category_id = 'pct' . rand(100, 999); // pctXYZ
        });
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
    public function products() {
        return $this->hasMany(Product::class, 'category_id', 'category_id');
    }
}
