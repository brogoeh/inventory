<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

#[Fillable(
    "supplier_code",
    "supplier_name",
    "email",
    "phone_number",
    "city",
    "regency",
    "address",
    "is_active",
    "created_id",
    "updated_id"
)]
class Supplier extends Model
{
    function items(): HasMany
    {
        return $this->hasMany(Item::class);
    }
}
