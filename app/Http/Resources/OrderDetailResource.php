<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderDetailResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'    => $this->id,
            'order'   => $this->order,
            'item'   => $this->item,
            'qty_ordered'   => $this->qty_ordered,
            'qty_received'   => $this->qty_received,
            'qty_cancelled'   => $this->qty_cancelled,
            'reason_cancelled'   => $this->item_id,
            'created_id'   => $this->created_id,
            'received_id'   => $this->received_id,
            'last_receive_dttm'   => $this->last_receive_dttm,
        ];
    }
}
