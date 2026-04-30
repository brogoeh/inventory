<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[Fillable("item_name", "description", "status", "std_qty", "min_stock", "max_stock", "unit_cost", "unit_retail", "supplier_id", "created_id", "updated_id")]
class Item extends Model
{
    function supplier(): BelongsTo
    {
        return $this->belongsTo(Supplier::class);
    }
}
