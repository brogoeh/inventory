<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\User;

use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users  = User::query()->with('role')->get();
        return inertia("User/Index", compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("User/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserRequest $request)
    {
        User::create($request->all());
        return to_route('user.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $username)
    {
        $user = User::where("user_name", $username)->first();
        return inertia("User/Edit", compact('user'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $username)
    {
        $validate = $request->validate([
            "full_name" => "required|string|max:50",
            "is_active" => "required",
            "role_id" => "required",
        ]);
        $user = User::where("user_name", $username)->first();
        $user->update($validate);
        return to_route("user.index");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $username)
    {
        $user = User::where("user_name", $username)->first();
        $user->delete();
        return to_route("user.index");
    }
}
