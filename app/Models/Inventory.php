<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[Fillable("item_id", "on_hand_qty", "on_ordered_qty", "last_updated_at", "created_at")]
class Inventory extends Model
{
    public function item(): BelongsTo
    {
        return $this->belongsTo(Item::class);
    }
}
