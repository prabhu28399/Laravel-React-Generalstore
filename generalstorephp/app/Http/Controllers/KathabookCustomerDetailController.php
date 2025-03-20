<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\KathabookCustomerDetail;

class KathabookCustomerDetailController extends Controller
{
    public function index($customer_id)
    {
        $transactions = KathabookCustomerDetail::where('customer_id', $customer_id)->get();
        return response()->json($transactions);
    }

    public function store(Request $request)
    {
        $transaction = KathabookCustomerDetail::create($request->validate([
            'customer_id' => 'required|exists:kathabook_customers,id',
            'you_gave' => 'nullable|numeric',
            'you_got' => 'nullable|numeric',
            'note' => 'nullable|string',
        ]));

        return response()->json($transaction, 201);
    }
}
