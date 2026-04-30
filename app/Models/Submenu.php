<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

#[Fillable("menu_id", "submenu_sequence", "submenu_name", "submenu_icon", "submenu_link", "is_active")]
class Submenu extends Model
{
    function menu(): BelongsTo
    {
        return $this->belongsTo(Menu::class);
    }

    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(Role::class);
    }
}
