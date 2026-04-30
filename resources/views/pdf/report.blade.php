<!-- resources/views/pdf/users.blade.php -->
<!DOCTYPE html>
<html>
<head>
    <title>Data Users</title>
    <style>
        body { font-family: sans-serif; }
        table { width: 100%; border-collapse: collapse; }
        th, td { border: 1px solid #000; padding: 8px; }
    </style>
</head>
<body>

    <h2>Data Order</h2>

    <table>
        <thead>
            <tr>
                <th>No</th>
                <th>Number</th>
                <th>Items</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            @foreach($orderdetail as $i => $order)
            <tr>
                <td>{{ $i + 1 }}</td>
                <td>{{ $order->order->order_number }}</td>
                <td>{{ $order->item->item_name }}</td>
                <td>{{ $order->last_receive_dttm }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>

</body>
</html>