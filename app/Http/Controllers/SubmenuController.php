<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use App\Models\Submenu;
use Illuminate\Http\Request;
// use Illuminate\Support\Str;

class SubmenuController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $menus = Submenu::all();
    return inertia("Submenu/Index", compact('menus'));
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {

    $menus = Menu::query()->select("id", "menu_name", "menu_icon", "menu_link")->where("is_submenu", 1)->where("is_active", 1)->get();
    return inertia("Submenu/Add", compact('menus'));
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $countSub = Submenu::count();
    $validate = $request->validate([
      "menu_id" => "required",
      "submenu_name" => "required|string",
      "submenu_icon" => "required|string",
      "submenu_link" => "required|string",
      "is_active" => "required",
      "role" => "required",
    ]);
    $validate['submenu_sequence'] = str("S" . $countSub + 1);
    $submenu = Submenu::create($validate);
    $submenu->roles()->attach($request->role);
    return to_route("submenu.index");
  }

  /**
   * Display the specified resource.
   */
  public function show(Submenu $menu)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(string $id)
  {
    $menus = Menu::query()->select("id", "menu_name", "menu_icon", "menu_link")->where("is_submenu", 1)->where("is_active", 1)->get();
    $submenu = Submenu::with('roles')->where('id', $id)->first();
    return inertia("Submenu/Edit", compact('submenu', 'menus'));
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, string $id)
  {
    $validate = $request->validate([
      "menu_id" => "required",
      "submenu_name" => "required|string",
      "submenu_icon" => "required|string",
      "submenu_link" => "required|string",
      "is_active" => "required",
    ]);
    $menu = Submenu::where("id", $id)->first();
    $menu->update($validate);
    return to_route("submenu.index");
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(string $id)
  {
    $menu = Submenu::find($id);
    $menu->delete();
    $menu->roles()->detach();
    return to_route("submenu.index");
  }
}
