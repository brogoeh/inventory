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
    const { stores } = props;

    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    const Deleted = (id) => {
        if (confirm("are you sure delete this data?")) {
            return router.post(route("store.destroy", id), {
                _method: "delete",
            });
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    const filteredUsers = stores.filter((store) =>
        store.store_code.toLowerCase().includes(search.toLowerCase()),
    );

    return (
        <div className="p-6">
            <Head title="Store" />
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold mb-4">Data store</h1>
                <div className="flex items-center hover:bg-blue-600 rounded shadow px-2 py-1 bg-blue-700">
                    <span className="h-4 w-4 text-white">
                        <PlusIcon />
                    </span>
                    <Link
                        href={route("store.create")}
                        className="tracking-tighter text-sm text-gray-100"
                    >
                        Add store
                    </Link>
                </div>
            </div>

            <input
                type="text"
                placeholder="Search store code.."
                className="mb-4 p-2 rounded shadow border-none w-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead>
                        <tr className="bg-blue-200 text-left text-sm capitalize">
                            <th className="p-3">ID</th>
                            <th className="p-3"> Code</th>
                            <th className="p-3"> Name</th>
                            <th className="p-3">email</th>
                            <th className="p-3">phone</th>
                            <th className="p-3">city</th>
                            <th className="p-3">regency</th>
                            <th className="p-3">address</th>
                            <th className="p-3">Status</th>
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
                            filteredUsers.map((store, id) => (
                                <tr
                                    key={store.id}
                                    className="border-t hover:bg-gray-50 text-sm"
                                >
                                    <td className="p-3">{id + 1}</td>
                                    <td className="p-3">{store.store_code}</td>
                                    <td className="p-3 capitalize">
                                        {store.store_name}
                                    </td>
                                    <td className="p-3 capitalize">
                                        {store.email}
                                    </td>
                                    <td className="p-3 capitalize">
                                        {store.phone_number}
                                    </td>
                                    <td className="p-3 capitalize">
                                        {store.city}
                                    </td>
                                    <td className="p-3 capitalize">
                                        {store.regency}
                                    </td>
                                    <td className="p-3 capitalize line-clamp-1">
                                        {store.address}
                                    </td>
                                    <td className="p-3">
                                        {store.status == "C"
                                            ? "inactive"
                                            : "active"}
                                    </td>
                                    <td className="p-3 capitalize">
                                        {store.created_id}
                                    </td>
                                    <td className="p-3 capitalize">
                                        {store.updated_id}
                                    </td>
                                    <td className="p-3 flex gap-2 items-center">
                                        <Link
                                            href={route("store.edit", store.id)}
                                            className="h-5 w-5 text-blue-800"
                                        >
                                            <PencilSquareIcon />
                                        </Link>
                                        <Button
                                            onClick={() => Deleted(store.id)}
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
