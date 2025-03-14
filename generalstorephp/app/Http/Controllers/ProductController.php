<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller {
    public function index() {
        return response()->json(Product::all(), 200);
    }

    public function store(Request $request) {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'category_id' => 'required|exists:product_categories,category_id',
            'product_name' => 'required|string|unique:products,product_name'
        ]);

        $product = Product::create($request->all());
        return response()->json($product, 201);
    }

    public function show($id) {
        $product = Product::findOrFail($id);
        return response()->json($product, 200);
    }

    public function update(Request $request, $id) {
        $product = Product::findOrFail($id);
        $product->update($request->all());
        return response()->json($product, 200);
    }

    public function destroy($id) {
        Product::findOrFail($id)->delete();
        return response()->json(['message' => 'Product deleted'], 200);
    }
}
