<?php

namespace App\Http\Controllers;

use App\Models\OrderDetail;
use Barryvdh\DomPDF\Facade\Pdf;

class ReportingController extends Controller
{
    public function generatePDF()
    {
        // dd(request()->start_date);
        $query = OrderDetail::query();

        if (request()->start_date && request()->end_date) {
            $query->with(['item', 'order'])->whereBetween('last_receive_dttm', [request()->start_date, request()->end_date])->paginate();
        }

        $orderdetail = $query->with(['item', 'order'])->paginate();

        $pdf = Pdf::loadView('pdf.report', ['orderdetail' => $orderdetail]);

        return $pdf->download('report-order-detail.pdf');
    }
}
