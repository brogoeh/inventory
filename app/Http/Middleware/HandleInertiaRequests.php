<?php

namespace App\Http\Middleware;

use App\Models\Menu;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        Cache::forget('role_global');
        Cache::forget('menu_sidebar');
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'ziggy' => fn() => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            'menus_global' => Cache::rememberForever('menu_sidebar', fn() => Menu::where('is_active', 1)->get()->map(
                fn($q) =>
                [
                    'menu_name' => $q->menu_name,
                    'menu_icon' => $q->menu_icon,
                    'menu_link' => $q->menu_link,
                    'submenus' => $q->submenus,
                    'roles'     => $q->roles
                ],
            )),
            'roles' => Cache::rememberForever('role_global', fn() => Role::where('is_active', 1)->get()->map(
                fn($q) => [
                    'id' => $q->id,
                    'role_code' => $q->role_code,
                    'role_name' => $q->role_name,
                ]
            ))
        ];
    }
}
