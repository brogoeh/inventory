<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

#[Fillable("role_code", "role_name", "is_active")]
class Role extends Model
{
    public function menus(): BelongsToMany
    {
        return $this->belongsToMany(Menu::class);
    }
    public function submenus(): BelongsToMany
    {
        return $this->belongsToMany(Submenu::class);
    }
}
