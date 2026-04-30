import AdminDashboard from "@/Layouts/AdminDashboard";
import { Button } from "@headlessui/react";
import {
    PencilSquareIcon,
    PlusIcon,
    PrinterIcon,
    TrashIcon,
} from "@heroicons/react/24/outline";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

export default function Index({ orderdetails }) {
    const { data: orders, meta } = orderdetails;
    const { data, setData } = useForm({
        start_date: "",
        end_date: "",
    });

    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const print = () => {
        return router.get(route("reports"), { ...data });
    };

    const getDate = (e) => {
        e.preventDefault();
        return router.get(
            route("order-detail.index"),
            { ...data },
            {
                preserveState: true,
            },
        );
    };

    const Deleted = (id) => {
        if (confirm("are you sure delete this data?")) {
            return router.post(route("order-detail.destroy", id), {
                _method: "delete",
            });
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <div className="p-6">
            <Head title="Order Detail" />
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold mb-4">Data Order Detail</h1>
                <div className="flex items-center hover:bg-blue-600 rounded shadow px-2 py-1 bg-blue-700">
                    <span className="h-4 w-4 text-white">
                        <PlusIcon />
                    </span>
                    <Link
                        href={route("order-detail.create")}
                        className="tracking-tighter text-sm text-gray-100"
                    >
                        Add Order Detail
                    </Link>
                </div>
            </div>

            <div className="flex w-1/2 items-center justify-center bg-gray-100 mx-auto mb-4">
                <form
                    onSubmit={getDate}
                    className="bg-white p-2 gap-1 rounded-2xl shadow-md sm:w-full md:flex"
                >
                    <input
                        type="date"
                        value={data.start_date}
                        name="start_date"
                        onChange={handleChange}
                        className="p-2 rounded-xl shadow border-none w-full"
                    />
                    <input
                        type="date"
                        value={data.end_date}
                        name="end_date"
                        onChange={handleChange}
                        className="p-2 rounded-xl shadow border-none w-full"
                    />
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-700 rounded-xl text-white"
                    >
                        Search...
                    </button>
                </form>
            </div>
            <div className="flex justify-center">
                <button
                    className="bg-blue-500 hover:bg-blue-700 shadow-md flex items-center gap-2 text-sm px-2 py-1 rounded mb-4 text-gray-200"
                    onClick={print}
                >
                    <PrinterIcon className="h-5 w-5" />
                    <div>Download PDF</div>
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead>
                        <tr className="bg-blue-200 text-left text-xs capitalize">
                            <th className="p-3">ID</th>
                            <th className="p-3"> Order </th>
                            <th className="p-3"> Item</th>
                            <th className="p-3">Qty. Ordered</th>
                            <th className="p-3">Qty. Received</th>
                            <th className="p-3">Qty. Cancelled</th>
                            <th className="p-3">Reason Cancelled</th>
                            <th className="p-3">Created</th>
                            <th className="p-3">Received</th>
                            <th className="p-3">Received Date</th>
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
                        ) : orders.length > 0 ? (
                            orders.map((detail, i) => (
                                <tr
                                    key={i}
                                    className="border-t hover:bg-gray-50 text-xs"
                                >
                                    <td className="p-3">{meta.from + i}</td>
                                    <td className="p-3">
                                        {detail.order.order_number}
                                    </td>
                                    <td className="p-3">
                                        {detail.item.item_name}
                                    </td>
                                    <td className="p-3 capitalize">
                                        {detail.qty_ordered}
                                    </td>
                                    <td className="p-3 capitalize">
                                        {detail.qty_received}
                                    </td>
                                    <td className="p-3 capitalize">
                                        {detail.qty_cancelled}
                                    </td>
                                    <td className="p-3 capitalize">
                                        {detail.reason_cancelled}
                                    </td>
                                    <td className="p-3 capitalize">
                                        {detail.created_id == 1 ? "Yes" : "No"}
                                    </td>
                                    <td className="p-3 capitalize">
                                        {detail.received_id == 1 ? "Yes" : "No"}
                                    </td>
                                    <td className="p-3 capitalize">
                                        {detail.last_receive_dttm}
                                    </td>
                                    <td className="p-3 flex gap-2 items-center">
                                        <Link
                                            href={route(
                                                "order-detail.edit",
                                                detail.id,
                                            )}
                                            className="h-5 w-5 text-blue-800"
                                        >
                                            <PencilSquareIcon />
                                        </Link>
                                        <Button
                                            onClick={() => Deleted(detail.id)}
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
                <div className="flex gap-2 mt-4 text-sm justify-center">
                    {meta.links.map((link, i) => (
                        <Link
                            key={i}
                            href={`${link.url}`}
                            className={`px-3 py-1 rounded border ${
                                link.active
                                    ? "bg-blue-500 text-white"
                                    : "bg-white"
                            } ${!link.url ? "opacity-50 cursor-not-allowed" : ""}`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

Index.layout = (page) => <AdminDashboard children={page} />;
