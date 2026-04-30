<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[Fillable(
    "order_number",
    "warehouse_id",
    "supplier_id",
    "delivery_start_date",
    "delivery_end_date",
    "order_status_id",
    "created_id",
    "approval_id",
    "last_updated_id",
    "verified_id",
    "verified_at"
)]
class Order extends Model
{
    public function warehouse(): BelongsTo
    {
        return $this->belongsTo(Warehouse::class);
    }

    public function supplier(): BelongsTo
    {
        return $this->belongsTo(Supplier::class);
    }

    public function status(): BelongsTo
    {
        return $this->belongsTo(OrderStatus::class);
    }
}
