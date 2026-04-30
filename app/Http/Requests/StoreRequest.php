<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
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
            "store_code" => "required|string|max:5",
            "store_name" => "required|string|max:150",
            "email" => "required|string|max:150",
            "phone_number" => "required|string|max:14",
            "city" => "required|string|max:80",
            "regency" => "required|string|max:80",
            "address" => "required|string|max:180",
            "status" => "required",
            "created_id" => "required",
            "updated_id" => "required"
        ];
    }
}
