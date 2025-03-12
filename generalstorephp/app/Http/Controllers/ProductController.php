<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ProductController extends Controller {
    // Get all products
    public function index() {
        return response()->json(Product::with('category')->get(), Response::HTTP_OK);
    }

    // Create a new product by category name
    public function store(Request $request) {
        $request->validate([
            'name' => 'required|string',
            'category_name' => 'required|string|exists:categories,name',
            'count' => 'required|integer|min:0'
        ]);

        // Get category by name
        $category = Category::where('name', $request->category_name)->first();

        $product = Product::create([
            'name' => $request->name,
            'category_id' => $category->id,
            'count' => $request->count
        ]);

        return response()->json($product->load('category'), Response::HTTP_CREATED);
    }

    // Show a single product
    public function show($id) {
        $product = Product::with('category')->find($id);
        if (!$product) {
            return response()->json(['message' => 'Product not found'], Response::HTTP_NOT_FOUND);
        }
        return response()->json($product, Response::HTTP_OK);
    }

    // Update a product by category name
    public function update(Request $request, $id) {
        $product = Product::find($id);
        if (!$product) {
            return response()->json(['message' => 'Product not found'], Response::HTTP_NOT_FOUND);
        }

        $request->validate([
            'name' => 'required|string',
            'category_name' => 'required|string|exists:categories,name',
            'count' => 'required|integer|min:0'
        ]);

        // Find category ID by name
        $category = Category::where('name', $request->category_name)->first();

        $product->update([
            'name' => $request->name,
            'category_id' => $category->id,
            'count' => $request->count
        ]);

        return response()->json($product->load('category'), Response::HTTP_OK);
    }

    // Delete a product
    public function destroy($id) {
        $product = Product::find($id);
        if (!$product) {
            return response()->json(['message' => 'Product not found'], Response::HTTP_NOT_FOUND);
        }

        $product->delete();
        return response()->json(['message' => 'Product deleted successfully'], Response::HTTP_OK);
    }
}
