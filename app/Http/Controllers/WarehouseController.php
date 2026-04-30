<?php

namespace App\Http\Controllers;

use App\Http\Requests\WarehouseRequest;
use App\Models\Warehouse;
use Illuminate\Http\Request;

class WarehouseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $warehouses = Warehouse::all();
        return inertia("Warehouse/Index", compact('warehouses'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Warehouse/Add");
    }

    /**
     * Warehouse a newly created resource in storage.
     */
    public function store(WarehouseRequest $request)
    {
        Warehouse::create($request->all());
        return to_route("warehouse.index");
    }

    /**
     * Display the specified resource.
     */
    public function show(Warehouse $warehouse)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Warehouse $warehouse)
    {
        $warehouse = Warehouse::find($warehouse->id);
        return inertia("Warehouse/Edit", compact('warehouse'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Warehouse $warehouse)
    {
        $supply = Warehouse::find($warehouse->id);
        $supply->update($request->all());
        return to_route("warehouse.index");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Warehouse $warehouse)
    {
        $supply = Warehouse::find($warehouse->id);
        $supply->delete();
        return to_route("warehouse.index");
    }
}
