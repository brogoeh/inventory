<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([
            [
                "user_name" =>  "brogoeh",
                "full_name" =>  "teguh pramono",
                "password" =>  bcrypt("password"),
                "role_id" => 1,
                "is_active" => 1,
                "must_change_password" => 0,
                "is_login" => 0
            ]
        ])->each(fn($q) => User::create($q));
    }
}
