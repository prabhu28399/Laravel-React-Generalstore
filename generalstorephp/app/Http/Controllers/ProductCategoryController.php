<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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
        $category = ProductCategory::findOrFail($id);
        return response()->json($category, 200);
    }

    public function update(Request $request, $id) {
        $category = ProductCategory::findOrFail($id);
        $category->update($request->all());
        return response()->json($category, 200);
    }

    public function destroy($id) {
        ProductCategory::findOrFail($id)->delete();
        return response()->json(['message' => 'Category deleted'], 200);
    }
}
