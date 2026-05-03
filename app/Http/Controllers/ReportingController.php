<?php

namespace App\Http\Controllers;

use App\Models\OrderDetail;
use Barryvdh\DomPDF\Facade\Pdf;

class ReportingController extends Controller
{
    public function generatePDF()
    {
        $page = request()->page ?? "1";
        $query = OrderDetail::query();
        $start = request()->start_date;
        $end = request()->end_date;
        if ($start && $end) {
            $query->with(['item', 'order'])->whereBetween('last_receive_dttm', [$start, $end])->paginate();
        }

        $orderdetail = $query->with(['item', 'order'])->paginate();

        $pdf = Pdf::loadView('pdf.report', ['orderdetail' => $orderdetail]);

        return $pdf->download('report-order-detail.pdf');
    }
}
