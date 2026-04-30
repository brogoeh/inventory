<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderDetailRequest;
use App\Http\Resources\OrderDetailResource;
use App\Models\Item;
use App\Models\Order;
use App\Models\OrderDetail;

class OrderDetailController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if (request()->start_date && request()->end_date) {

            $orderdetails = OrderDetail::with(['item', 'order'])->whereBetween('last_receive_dttm', [request()->start_date, request()->end_date])->paginate();
        } else {
            $orderdetails = OrderDetail::query()->with(['item', 'order'])->paginate();
        }
        return inertia("OrderDetail/Index", ["orderdetails" => OrderDetailResource::collection($orderdetails)]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $orders = Order::all();
        $items  = Item::all();
        return inertia("OrderDetail/Add", compact("orders", "items"));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(OrderDetailRequest $request)
    {
        OrderDetail::create($request->all());
        return to_route("order-detail.index");
    }

    /**
     * Display the specified resource.
     */
    public function show(OrderDetail $orderDetail)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(OrderDetail $orderDetail)
    {
        $orders = Order::all();
        $items  = Item::all();
        $orderDetail = OrderDetail::find($orderDetail->id);
        return inertia("OrderDetail/Edit", compact('orderDetail', 'orders', 'items'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(OrderDetailRequest $request, OrderDetail $orderDetail)
    {
        $orderDetail = OrderDetail::find($orderDetail->id);
        $orderDetail->update($request->all());
        return to_route("order-detail.index");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(OrderDetail $orderDetail)
    {
        $orderDetail = OrderDetail::find($orderDetail->id);
        $orderDetail->delete();
        return to_route("order-detail.index");
    }
}
