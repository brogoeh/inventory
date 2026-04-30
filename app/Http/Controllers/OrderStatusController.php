<?php

namespace App\Http\Controllers;

use App\Models\OrderStatus;
use Illuminate\Http\Request;

class OrderStatusController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orderStatuses = OrderStatus::all();
        return inertia('StatusOrder/Index', compact('orderStatuses'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('StatusOrder/Add');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = $request->validate([
            'status_code' => "required|string|max:5",
            'status_name' => "required|string|max:100"
        ]);

        OrderStatus::create($validate);
        return to_route('order-status.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(OrderStatus $orderStatus)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(OrderStatus $orderStatus)
    {
        $orderStat = OrderStatus::find($orderStatus->id);
        return inertia("StatusOrder/Edit", compact('orderStat'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, OrderStatus $orderStatus)
    {
        $validate = $request->validate([
            'status_code' => "required|string|max:5",
            'status_name' => "required|string|max:100"
        ]);

        $orderStat = OrderStatus::find($orderStatus->id);
        $orderStat->update($validate);
        return to_route('order-status.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(OrderStatus $orderStatus)
    {
        $orderStat = OrderStatus::find($orderStatus->id);
        $orderStat->delete();
        return to_route('order-status.index');
    }
}
