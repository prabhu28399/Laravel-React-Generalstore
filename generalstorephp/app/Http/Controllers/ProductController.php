<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Validation\ValidationException;


class ProductController extends Controller {
    public function index()
    {
        $products = Product::with(['category', 'stock'])->get();
        return response()->json($products, 200);
    }
    
    
    public function store(Request $request) {
        try {
            $request->validate([
                'user_id' => 'required|exists:users,id',
                'category_id' => 'required|exists:product_categories,category_id',
                'product_name' => 'required|string|unique:products,product_name',
                'quantity' => 'required|integer|min:1', // ✅ Still validating quantity
            ]);
    
            // Generate unique product ID (pidXYZ)
            $productId = 'pid' . rand(100, 999);
    
            // ✅ Create the product
            $product = Product::create([
                'user_id' => $request->user_id,
                'category_id' => $request->category_id,
                'product_id' => $productId,
                'product_name' => $request->product_name,
            ]);
    
            // ✅ Store quantity in the stock table
            $product->stock()->create([
                'product_id' => $product->product_id,
                'quantity' => $request->quantity,
            ]);
    
            return response()->json($product->load('stock'), 201);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Failed to add product',
                'message' => $e->getMessage(),
            ], 500);
        }
    }
    
    
    
    

    public function show($id) {
        $product = Product::findOrFail($id);
        return response()->json($product, 200);
    }

    
    public function update(Request $request, $id) {
        $product = Product::where('product_id', $id)->firstOrFail(); // ✅ Search by product_id instead of id
    
        $request->validate([
            'product_name' => 'required|string|max:255',
            'quantity' => 'required|integer|min:0'
        ]);
    
        $product->update([
            'product_name' => $request->product_name,
        ]);
    
        // ✅ Ensure stock is updated correctly
        if ($product->stock) {
            $product->stock()->updateOrCreate(
                ['product_id' => $product->product_id], // Ensure it updates the correct stock record
                ['quantity' => $request->quantity]
            );
        } else {
            // If stock doesn't exist, create a new stock entry
            $product->stock()->create([
                'product_id' => $product->product_id,
                'quantity' => $request->quantity
            ]);
        }
    
        return response()->json($product->load('stock','category'), 200);
    }
    
    public function destroy($product_id) {
        $product = Product::where('product_id', $product_id)->firstOrFail();
    
        // Delete product stock entry (if exists)
        if ($product->stock) {
            $product->stock->delete();
        }
    
        // Delete the product itself
        $product->delete();
    
        return response()->json(['message' => 'Product deleted successfully'], 200);
    }
    
    
}
