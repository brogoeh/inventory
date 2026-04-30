<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable(
    "store_code",
    "store_name",
    "email",
    "phone_number",
    "city",
    "regency",
    "address",
    "status",
    "created_id",
    "updated_id"
)]
class Store extends Model
{
    //
}
