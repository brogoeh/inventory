<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Menu;
use Illuminate\Database\Seeder;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([
            [
                "menu_sequence" => "M1",
                "menu_name" => "users",
                "menu_icon" => "UsersIcon",
                "menu_link" => "/user",
                "is_submenu" => 1,
                "is_active" => 1
            ],
            [
                "menu_sequence" => "M2",
                "menu_name" => "roles",
                "menu_icon" => "UsersIcon",
                "menu_link" => "/role",
                "is_submenu" => 0,
                "is_active" => 1
            ],
            [
                "menu_sequence" => "M3",
                "menu_name" => "settings",
                "menu_icon" => "Cog8ToothIcon",
                "menu_link" => "/setting",
                "is_submenu" => 1,
                "is_active" => 1
            ],
            [
                "menu_sequence" => "M4",
                "menu_name" => "menu",
                "menu_icon" => "Cog8ToothIcon",
                "menu_link" => "/setting/menu",
                "is_submenu" => 0,
                "is_active" => 1
            ],
            [
                "menu_sequence" => "M4",
                "menu_name" => "submenu",
                "menu_icon" => "Cog8ToothIcon",
                "menu_link" => "/setting/submenu",
                "is_submenu" => 0,
                "is_active" => 1
            ]

        ])->each(fn($v) => Menu::create($v));
    }
}
