<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrderDetailRequest extends FormRequest
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
            "order_id" => "required",
            "item_id"   => "required",
            "qty_ordered"   => "required",
            "qty_received"  => "required",
            "qty_cancelled" => "required",
            "reason_cancelled"  => "required|string|max:150",
            "created_id"    => "required",
            "received_id"   => "required",
            "last_receive_dttm"    => "required",
        ];
    }
}
