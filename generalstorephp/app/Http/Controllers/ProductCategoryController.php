<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Models\ProductCategory;

class ProductCategoryController extends Controller {
    
    public function index() {
        return response()->json(ProductCategory::all(), 200);
    }

    public function store(Request $request) {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'category_name' => 'required|string|unique:product_categories,category_name'
        ]);

        $category = ProductCategory::create($request->all());
        return response()->json($category, 201);
    }

    public function show($id) {
        $category = ProductCategory::find($id);
        if (!$category) {
            return response()->json(["message" => "Category not found"], 404);
        }
        return response()->json($category, 200);
    }

    public function update(Request $request, $id) {
        Log::info("Updating category with ID: " . $id);

        $category = ProductCategory::find($id);
        if (!$category) {
            return response()->json(["message" => "Category not found"], 404);
        }

        // Validate unique category name if updating
        $request->validate([
            'category_name' => 'required|string|unique:product_categories,category_name,' . $id
        ]);

        $category->update($request->all());
        return response()->json(["message" => "Category updated successfully", "category" => $category], 200);
    }

    public function destroy($id) {
        Log::info("Deleting category with ID: " . $id);

        $category = ProductCategory::find($id);
        if (!$category) {
            return response()->json(["message" => "Category not found"], 404);
        }

        // Check if the category has products
        if ($category->products()->count() > 0) {
            return response()->json(["message" => "Category is not empty, cannot delete"], 400);
        }

        $category->delete();
        return response()->json(["message" => "Category deleted successfully"], 200);
    }
}
