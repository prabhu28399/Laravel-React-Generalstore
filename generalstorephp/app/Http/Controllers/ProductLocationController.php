<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProductLocation;

class ProductLocationController extends Controller {
    public function index() {
        return response()->json(ProductLocation::all(), 200);
    }

    public function store(Request $request) {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'product_id' => 'required|exists:products,product_id',
            'room_no' => 'required|integer|between:1,10',
            'row_no' => 'required|integer|between:1,5',
            'section' => 'required|alpha|size:1',
            'container_no' => 'required|integer|between:1,30'
        ]);

        $location = ProductLocation::create($request->all());
        return response()->json($location, 201);
    }

    public function show($id) {
        $location = ProductLocation::findOrFail($id);
        return response()->json($location, 200);
    }

    // public function update(Request $request, $id) {
    //     $location = ProductLocation::findOrFail($id);
    //     $location->update($request->all());
    //     return response()->json($location, 200);
    // }
    public function update(Request $request, $id) {
        $location = ProductLocation::findOrFail($id);
    
        // Validate only the updatable fields
        $request->validate([
            'room_no' => 'required|integer|between:1,10',
            'row_no' => 'required|integer|between:1,5',
            'section' => 'required|alpha|size:1',
            'container_no' => 'required|integer|between:1,30'
        ]);
    
        // Update only allowed fields
        $location->update([
            'room_no' => $request->room_no,
            'row_no' => $request->row_no,
            'section' => $request->section,
            'container_no' => $request->container_no
        ]);
    
        return response()->json($location, 200);
    }
    

    public function destroy($id) {
        ProductLocation::findOrFail($id)->delete();
        return response()->json(['message' => 'Location deleted'], 200);
    }
}
