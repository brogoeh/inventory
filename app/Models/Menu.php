<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

#[Fillable("menu_sequence", "menu_name", "menu_icon", "menu_link", "is_submenu", "is_active")]
class Menu extends Model
{

  public function submenus(): HasMany
  {
    return $this->hasMany(Submenu::class)->chaperone();
  }

  public function roles(): BelongsToMany
  {
    return $this->belongsToMany(Role::class);
  }
}
