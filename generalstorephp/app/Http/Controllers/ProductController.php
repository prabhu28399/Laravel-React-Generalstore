<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;


class ProductController extends Controller {
    public function index()
    {
        $products = Product::with(['category', 'stock'])->get();
        return response()->json($products, 200);
    }
    
    public function store(Request $request) {
        try {
            $request->validate([
                'product_name' => 'required|string|max:255',
                'category_id' => 'required|string|exists:product_categories,category_id',
                'quantity' => 'required|integer|min:0',
            ]);
    
            $productId = 'pid' . $this->generateUniqueProductId();
    
            $product = Product::create([
                'user_id' => auth()->id() ?? null,
                'category_id' => $request->category_id,
                'product_name' => $request->product_name,
                'product_id' => $productId,
            ]);
    
            $product->stock()->updateOrCreate(
                [],
                [
                    'quantity' => $request->quantity,
                    'user_id' => auth()->id() ?? null, // Add user_id here
                ]
            );
    
            return response()->json($product->load('stock', 'category'), 201);
        } catch (ValidationException $validationException) {
            return response()->json(['errors' => $validationException->errors()], 422);
        } catch (\Exception $e) {
            Log::error('Product Store Error: ' . $e->getMessage());
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    // Function to generate a unique product_id
    private function generateUniqueProductId() {
        do {
            $uniqueId = rand(100, 999); // Generate a random 3-digit number
            $exists = Product::where('product_id', 'pid' . $uniqueId)->exists();
        } while ($exists);
    
        return $uniqueId;
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
