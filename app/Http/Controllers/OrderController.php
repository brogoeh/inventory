<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderRequest;
use App\Models\Order;
use App\Models\OrderStatus;
use App\Models\Supplier;
use App\Models\Warehouse;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = Order::with("warehouse", "supplier")->get();
        return inertia("Order/Index", compact('orders'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $statOrders = OrderStatus::all();
        $suppliers = Supplier::query()->select("id", "supplier_code", "supplier_name")->where("is_active", 1)->get();
        $warehouses = Warehouse::query()->select("id", "warehouse_code", "warehouse_name")->where("status", "A")->get();
        return inertia("Order/Add", compact("suppliers", "warehouses", "statOrders"));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(OrderRequest $request)
    {
        Order::create($request->all());
        return to_route("order.index");
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        $suppliers = Supplier::query()->select("id", "supplier_code", "supplier_name")->where("is_active", 1)->get();
        $warehouses = Warehouse::query()->select("id", "warehouse_code", "warehouse_name")->where("status", "A")->get();
        $order = Order::find($order->id);
        return inertia("Order/Edit", compact('order', 'suppliers', 'warehouses'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order)
    {
        $order = Order::find($order->id);
        $order->update($request->all());
        return to_route("order.index");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        $order = Order::find($order->id);
        $order->delete();
        return to_route("order.index");
    }
}
