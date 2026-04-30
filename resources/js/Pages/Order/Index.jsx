import AdminDashboard from "@/Layouts/AdminDashboard";
import { Button } from "@headlessui/react";
import {
    PencilSquareIcon,
    PlusIcon,
    TrashIcon,
} from "@heroicons/react/24/outline";
import { Head, Link, router } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

export default function Index(props) {
    const { orders } = props;

    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    const Deleted = (id) => {
        if (confirm("are you sure delete this data?")) {
            return router.post(route("order.destroy", id), {
                _method: "delete",
            });
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    const filteredUsers = orders.filter((order) =>
        order.order_number.toLowerCase().includes(search.toLowerCase()),
    );

    return (
        <div className="p-6">
            <Head title="Order" />
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold mb-4">Data Order</h1>
                <div className="flex items-center hover:bg-blue-600 rounded shadow px-2 py-1 bg-blue-700">
                    <span className="h-4 w-4 text-white">
                        <PlusIcon />
                    </span>
                    <Link
                        href={route("order.create")}
                        className="tracking-tighter text-sm text-gray-100"
                    >
                        Add Order
                    </Link>
                </div>
            </div>

            <input
                type="text"
                placeholder="Search order number..."
                className="mb-4 p-2 rounded shadow border-none w-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead>
                        <tr className="bg-blue-200 text-left text-xs capitalize">
                            <th className="p-3">ID</th>
                            <th className="p-3"> Order Number</th>
                            <th className="p-3"> Warehouse</th>
                            <th className="p-3">Supplier</th>
                            <th className="p-3">Delivery Start</th>
                            <th className="p-3">Delivery End</th>
                            <th className="p-3">Order Status</th>
                            <th className="p-3">Created</th>
                            <th className="p-3">Approval</th>
                            <th className="p-3">Last Updated</th>
                            <th className="p-3">Verified</th>
                            <th className="p-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td
                                    colSpan="12"
                                    className="text-center p-4 tracking-tighter "
                                >
                                    Loading...
                                </td>
                            </tr>
                        ) : filteredUsers.length > 0 ? (
                            filteredUsers.map((order, id) => (
                                <tr
                                    key={order.id}
                                    className="border-t hover:bg-gray-50 text-xs"
                                >
                                    <td className="p-3">{id + 1}</td>
                                    <td className="p-3">
                                        {order.order_number}
                                    </td>
                                    <td className="p-3">
                                        {order.warehouse.warehouse_code}
                                    </td>
                                    <td className="p-3 capitalize">
                                        {order.supplier.supplier_code}
                                    </td>
                                    <td className="p-3 capitalize">
                                        {order.delivery_start_date}
                                    </td>
                                    <td className="p-3 capitalize">
                                        {order.delivery_end_date}
                                    </td>
                                    <td className="p-3 capitalize">
                                        {order.order_status_id}
                                    </td>
                                    <td className="p-3 capitalize">
                                        {order.created_id == 1 ? "Yes" : "No"}
                                    </td>
                                    <td className="p-3 capitalize">
                                        {order.approval_id == 1 ? "Yes" : "No"}
                                    </td>
                                    <td className="p-3">
                                        {order.last_updated_id == 1
                                            ? "Yes"
                                            : "No"}
                                    </td>
                                    <td className="p-3 capitalize">
                                        {order.verified_at}
                                    </td>
                                    <td className="p-3 flex gap-2 items-center">
                                        <Link
                                            href={route("order.edit", order.id)}
                                            className="h-5 w-5 text-blue-800"
                                        >
                                            <PencilSquareIcon />
                                        </Link>
                                        <Button
                                            onClick={() => Deleted(order.id)}
                                            className="h-5 w-5 text-red-800"
                                        >
                                            <TrashIcon />
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="12" className="text-center p-4">
                                    No data available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

Index.layout = (page) => <AdminDashboard children={page} />;
