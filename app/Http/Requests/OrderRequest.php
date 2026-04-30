<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrderRequest extends FormRequest
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
            "order_number" => "required|string|max:10",
            "warehouse_id"  => "required|numeric",
            "supplier_id" => "required|numeric",
            "delivery_start_date" => "required",
            "delivery_end_date" => "required",
            "order_status_id"   => "required|numeric",
            "created_id"    => "required|numeric",
            "approval_id"   => "required|numeric",
            "last_updated_id"   => "required|numeric",
            "verified_id"   => "required|numeric",
            "verified_at"   => "required"
        ];
    }
}
