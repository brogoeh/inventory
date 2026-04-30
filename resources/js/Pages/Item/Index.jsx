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
    const { items } = props;

    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    const Deleted = (id) => {
        if (confirm("are you sure delete this data?")) {
            return router.post(route("item.destroy", id), {
                _method: "delete",
            });
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    const filteredUsers = items.filter((item) =>
        item.item_name.toLowerCase().includes(search.toLowerCase()),
    );

    return (
        <div className="p-6">
            <Head title="Items" />
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold mb-4">Item</h1>
                <div className="flex items-center hover:bg-blue-600 rounded shadow px-2 py-1 bg-blue-700">
                    <span className="h-4 w-4 text-white">
                        <PlusIcon />
                    </span>
                    <Link
                        href={route("item.create")}
                        className="tracking-tighter text-sm text-gray-100"
                    >
                        Add Item
                    </Link>
                </div>
            </div>

            <input
                type="text"
                placeholder="Search user..."
                className="mb-4 p-2 rounded shadow border-none w-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead>
                        <tr className="bg-blue-200 text-left text-sm capitalize">
                            <th className="p-3">ID</th>
                            <th className="p-3"> Name</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Quantity</th>
                            <th className="p-3">Min. Stock</th>
                            <th className="p-3">Max. Stock</th>
                            <th className="p-3">Unit Cost</th>
                            <th className="p-3">Unit Retail</th>
                            <th className="p-3">Supplier</th>
                            <th className="p-3">Created</th>
                            <th className="p-3">Updated</th>
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
                            filteredUsers.map((item, id) => (
                                <tr
                                    key={item.id}
                                    className="border-t hover:bg-gray-50 text-sm"
                                >
                                    <td className="p-3">{id + 1}</td>
                                    <td className="p-3">{item.item_name}</td>
                                    <td className="p-3 capitalize">
                                        {item.status}
                                    </td>
                                    <td className="p-3 capitalize">
                                        {item.std_qty}
                                    </td>
                                    <td className="p-3 capitalize">
                                        {item.min_stock}
                                    </td>
                                    <td className="p-3 capitalize">
                                        {item.max_stock}
                                    </td>
                                    <td className="p-3 capitalize">
                                        {item.unit_cost}
                                    </td>
                                    <td className="p-3 capitalize line-clamp-1">
                                        {item.unit_retail}
                                    </td>
                                    <td className="p-3">
                                        {item.supplier.supplier_code}
                                    </td>
                                    <td className="p-3 capitalize">
                                        {item.created_id}
                                    </td>
                                    <td className="p-3 capitalize">
                                        {item.updated_id}
                                    </td>
                                    <td className="p-3 flex gap-2 items-center">
                                        <Link
                                            href={route("item.edit", item.id)}
                                            className="h-5 w-5 text-blue-800"
                                        >
                                            <PencilSquareIcon />
                                        </Link>
                                        <Button
                                            onClick={() => Deleted(item.id)}
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
