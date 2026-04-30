<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable(
    "id",
    "warehouse_code",
    "warehouse_name",
    "email",
    "phone_number",
    "city",
    "regency",
    "address",
    "status",
    "created_id",
    "updated_id"
)]
class Warehouse extends Model
{
    //
}
