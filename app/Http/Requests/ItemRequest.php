<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ItemRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "item_name" => "required|string|max:12",
            "description"   => "required|string|max:200",
            "status"    => "required",
            "std_qty"   => "required|numeric",
            "min_stock" => "required|numeric",
            "max_stock" => "required|numeric",
            "unit_cost" => "required|numeric",
            "unit_retail"   => "required|numeric",
            "supplier_id"   => "required",
            "created_id"    => "required",
            "updated_id"    => "required"
        ];
    }
}
