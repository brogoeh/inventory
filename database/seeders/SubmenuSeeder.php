<?php

namespace Database\Seeders;

use App\Models\Submenu;
use Illuminate\Database\Seeder;

class SubmenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([
            [
                'menu_id'   => 3,
                'submenu_sequence' => 'S1',
                'submenu_name' => 'menu',
                'submenu_icon' => 'Cog6ToothIcon',
                'submenu_link' => '/setting/menu',
                'is_active'    => 1
            ],
            [
                'menu_id'   => 3,
                'submenu_sequence' => 'S2',
                'submenu_name' => 'submenu',
                'submenu_icon' => 'Cog6ToothIcon',
                'submenu_link' => '/setting/submenu',
                'is_active'    => 1
            ]
        ])->each(fn($q) => Submenu::create($q));
    }
}
