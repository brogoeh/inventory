<?php

namespace App\Http\Controllers;

use App\Models\Inventory;
use App\Models\Item;
use Illuminate\Http\Request;

class InventoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $inventories    = Inventory::with('item')->get();
        return inertia("Inventory/Index", compact('inventories'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $items = Item::all();
        return inertia("Inventory/Add", compact('items'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = $request->validate([
            'item_id'   => "required",
            'on_hand_qty' => "required|numeric",
            'on_ordered_qty' => "required|numeric",
        ]);

        Inventory::create($validate);
        return to_route("inventory.index");
    }

    /**
     * Display the specified resource.
     */
    public function show(Inventory $inventory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Inventory $inventory)
    {
        $items = Item::all();
        $inventory  = Inventory::find($inventory->id);
        return inertia("Inventory/Edit", compact('inventory', 'items'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Inventory $inventory)
    {
        $inventory  = Inventory::find($inventory->id);
        $validate   = $request->validate([
            'item_id'   => "required",
            'on_hand_qty' => "required|numeric",
            'on_ordered_qty' => "required|numeric",
        ]);
        $inventory->update($validate);
        return to_route("inventory.index");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Inventory $inventory)
    {
        $inventory = Inventory::find($inventory->id);
        $inventory->delete();
        return to_route("inventory.index");
    }
}
