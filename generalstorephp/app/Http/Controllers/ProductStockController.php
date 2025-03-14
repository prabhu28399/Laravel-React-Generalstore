<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProductStock;

class ProductStockController extends Controller {
    public function index() {
        return response()->json(ProductStock::all(), 200);
    }

    public function store(Request $request) {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'product_id' => 'required|exists:products,product_id',
            'quantity' => 'required|integer|min:0'
        ]);

        $stock = ProductStock::create($request->all());
        return response()->json($stock, 201);
    }

    public function show($id) {
        $stock = ProductStock::findOrFail($id);
        return response()->json($stock, 200);
    }

    public function update(Request $request, $id) {
        $stock = ProductStock::findOrFail($id);
        $stock->update($request->all());
        return response()->json($stock, 200);
    }

    public function destroy($id) {
        ProductStock::findOrFail($id)->delete();
        return response()->json(['message' => 'Stock deleted'], 200);
    }
}
