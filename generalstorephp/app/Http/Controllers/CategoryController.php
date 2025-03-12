<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CategoryController extends Controller {
    // Get all categories
    public function index() {
        return response()->json(Category::all(), Response::HTTP_OK);
    }

    // Create a new category
    public function store(Request $request) {
        $request->validate([
            'name' => 'required|string|unique:categories,name'
        ]);

        $category = Category::create(['name' => $request->name]);
        return response()->json($category, Response::HTTP_CREATED);
    }

    // Show a single category by ID
    public function show($id) {
        $category = Category::find($id);
        if (!$category) {
            return response()->json(['message' => 'Category not found'], Response::HTTP_NOT_FOUND);
        }
        return response()->json($category, Response::HTTP_OK);
    }

    // Update a category
    public function update(Request $request, $id) {
        $category = Category::find($id);
        if (!$category) {
            return response()->json(['message' => 'Category not found'], Response::HTTP_NOT_FOUND);
        }

        $request->validate([
            'name' => 'required|string|unique:categories,name,' . $id
        ]);

        $category->update(['name' => $request->name]);
        return response()->json($category, Response::HTTP_OK);
    }

    // Delete a category
    public function destroy($id) {
        $category = Category::find($id);
        if (!$category) {
            return response()->json(['message' => 'Category not found'], Response::HTTP_NOT_FOUND);
        }

        $category->delete();
        return response()->json(['message' => 'Category deleted successfully'], Response::HTTP_OK);
    }
}
