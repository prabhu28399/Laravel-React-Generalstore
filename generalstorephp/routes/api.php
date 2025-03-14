<?php



use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductCategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductLocationController;
use App\Http\Controllers\ProductStockController;

// User Authentication Routes
Route::post('/user/register', [AuthController::class, 'registerUser']);
Route::post('/user/login', [AuthController::class, 'loginUser']);

// Admin Authentication Routes
Route::post('/admin/login', [AuthController::class, 'loginAdmin']);

// Protected Routes (Requires Authentication)
Route::middleware('auth:sanctum')->group(function () {
    // Logout and Profile
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/profile', [AuthController::class, 'profile']);

    // Product Category Routes
    Route::get('/categories', [ProductCategoryController::class, 'index']);
    Route::post('/categories', [ProductCategoryController::class, 'store']);
    Route::get('/categories/{id}', [ProductCategoryController::class, 'show']);
    Route::put('/categories/{id}', [ProductCategoryController::class, 'update']);
    Route::delete('/categories/{id}', [ProductCategoryController::class, 'destroy']);

    // Product Routes
    Route::get('/products', [ProductController::class, 'index']);
    Route::post('/products', [ProductController::class, 'store']);
    Route::get('/products/{id}', [ProductController::class, 'show']);
    Route::put('/products/{id}', [ProductController::class, 'update']);
    Route::delete('/products/{id}', [ProductController::class, 'destroy']);

    // Product Location Routes
    Route::get('/locations', [ProductLocationController::class, 'index']);
    Route::post('/locations', [ProductLocationController::class, 'store']);
    Route::get('/locations/{id}', [ProductLocationController::class, 'show']);
    Route::put('/locations/{id}', [ProductLocationController::class, 'update']);
    Route::delete('/locations/{id}', [ProductLocationController::class, 'destroy']);

    // Product Stock Routes
    Route::get('/stocks', [ProductStockController::class, 'index']);
    Route::post('/stocks', [ProductStockController::class, 'store']);
    Route::get('/stocks/{id}', [ProductStockController::class, 'show']);
    Route::put('/stocks/{id}', [ProductStockController::class, 'update']);
    Route::delete('/stocks/{id}', [ProductStockController::class, 'destroy']);
});









