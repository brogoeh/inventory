<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $roles = Role::all();
        return inertia("Roles/Index", compact('roles'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Roles/Add");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $roles = $request->validate([
            "role_code" => "required|string|max:8",
            "role_name" => "required|string|max:80",
            "is_active" => "required"
        ]);

        Role::create($roles);
        return to_route("role.index");

        Cache::forget('role_global');
    }

    /**
     * Display the specified resource.
     */
    public function show(Role $role)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Role $role)
    {
        $role = Role::find($role->id);
        return inertia("Roles/Edit", compact('role'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Role $role)
    {
        $validate = $request->validate([
            "role_code" => "required|string|max:8",
            "role_name" => "required|string|max:80",
            "is_active" => "required"
        ]);
        $role = Role::find($role->id);
        $role->update($validate);
        return to_route("role.index");

        Cache::flush();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Role $role)
    {
        $role = Role::find($role->id);
        $role->delete();
        return to_route("role.index")->with(["message"]);
    }
}
