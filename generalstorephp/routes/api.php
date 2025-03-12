<?php


use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

// User Routes
Route::post('/user/register', [AuthController::class, 'registerUser']);
Route::post('/user/login', [AuthController::class, 'loginUser']);

// Admin Routes
Route::post('/admin/login', [AuthController::class, 'loginAdmin']);

// Protected Routes (Requires Authentication)
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/profile', [AuthController::class, 'profile']);
});


use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;

Route::apiResource('categories', CategoryController::class);
Route::apiResource('products', ProductController::class);