<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;


class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $menus = Menu::all();
        return inertia("Menu/Index", compact('menus'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Menu/Add");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $menu = Menu::count();
        $validate = $request->validate([
            "menu_name" => "required|string",
            "menu_icon" => "required|string",
            "menu_link" => "required|string",
            "is_submenu" => "required",
            "is_active" => "required",
            "role" => "required",
        ]);
        $validate['menu_sequence'] = str("M" . $menu + 1);
        $menu = Menu::create($validate);
        $menu->roles()->attach($request->role);
        return to_route("menu.index");
    }

    /**
     * Display the specified resource.
     */
    public function show(Menu $menu)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Menu $menu)
    {
        $menu = Menu::with('roles')->find($menu->id);
        return inertia("Menu/Edit", compact('menu'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Menu $menu)
    {
        $validate = $request->validate([
            "menu_name" => "required|string",
            "menu_icon" => "required|string",
            "menu_link" => "required|string",
            "is_submenu" => "required",
            "is_active" => "required",
        ]);
        $menu = Menu::where("id", $menu->id)->first();
        $menu->update($validate);

        return to_route("menu.index");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Menu $menu)
    {
        $menu = Menu::with('roles')->find($menu->id);
        $menu->delete();
        $menu->roles()->detach();
        return to_route("menu.index");
    }
}
