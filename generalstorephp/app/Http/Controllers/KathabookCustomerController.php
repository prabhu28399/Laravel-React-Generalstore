<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\KathabookCustomer;

class KathabookCustomerController extends Controller
{
    // public function index()
    // {
    //     return response()->json(KathabookCustomer::all());
    // }
    public function index()
{
    try {
        $customers = KathabookCustomer::all();
        return response()->json($customers);
    } catch (\Exception $e) {
        return response()->json(['error' => $e->getMessage()], 500);
    }
}


    public function show($id)
    {
        $customer = KathabookCustomer::find($id);
        if (!$customer) {
            return response()->json(['message' => 'Customer not found'], 404);
        }
        return response()->json($customer);
    }

    public function store(Request $request)
    {
        $customer = KathabookCustomer::create($request->validate([
            'name' => 'required|string',
            'customer_id' => 'required|string|unique:kathabook_customers,customer_id',
            'phone' => 'required|string|unique:kathabook_customers,phone',
        ]));

        return response()->json($customer, 201);
    }
}
