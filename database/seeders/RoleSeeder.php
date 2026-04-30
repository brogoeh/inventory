<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([

            [
                "role_code" => "Adm",
                "role_name" => "Administrator",
                "is_active" => 1,
            ]

        ])->each(fn($q) => Role::create($q));
    }
}
