<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRequest;
use App\Models\Store;
use Illuminate\Http\Request;

class StoreController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $stores = Store::all();
        return inertia("Store/Index", compact('stores'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Store/Add");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request)
    {
        Store::create($request->all());
        return to_route("store.index");
    }

    /**
     * Display the specified resource.
     */
    public function show(Store $store)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Store $store)
    {
        $store = Store::find($store->id);
        return inertia("Store/Edit", compact('store'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Store $store)
    {
        $supply = Store::find($store->id);
        $supply->update($request->all());
        return to_route("store.index");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Store $store)
    {
        $supply = Store::find($store->id);
        $supply->delete();
        return to_route("store.index");
    }
}
