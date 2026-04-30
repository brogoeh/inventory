import AdminDashboard from "@/Layouts/AdminDashboard";
import { Button } from "@headlessui/react";
import {
    PencilSquareIcon,
    PlusIcon,
    TrashIcon,
} from "@heroicons/react/24/outline";
import { Link, router } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

export default function Index({ menus }) {
    const [loading, setLoading] = useState(true);

    const Deleted = (id) => {
        if (confirm("are you sure delete this data?")) {
            return router.post(route("submenu.destroy", id), {
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
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold mb-4">Menu</h1>
                <div className="flex items-center hover:bg-blue-600 rounded shadow px-2 py-1 bg-blue-700">
                    <span className="h-4 w-4 text-white">
                        <PlusIcon />
                    </span>
                    <Link
                        href={route("submenu.create")}
                        className="tracking-tighter text-sm text-gray-100"
                    >
                        Add Submenu
                    </Link>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead>
                        <tr className="bg-blue-200 text-left">
                            <th className="p-3">ID</th>
                            <th className="p-3">Menu</th>
                            <th className="p-3">Icon</th>
                            <th className="p-3">Link</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td
                                    colSpan="6"
                                    className="text-center p-4 tracking-tighter "
                                >
                                    Loading...
                                </td>
                            </tr>
                        ) : menus.length > 0 ? (
                            menus.map((menu, id) => (
                                <tr
                                    key={menu.id}
                                    className="border-t hover:bg-gray-50"
                                >
                                    <td className="p-3">{id + 1}</td>
                                    <td className="p-3">{menu.submenu_name}</td>
                                    <td className="p-3 capitalize">
                                        {menu.submenu_icon}
                                    </td>
                                    <td className="p-3">{menu.submenu_link}</td>
                                    <td className="p-3">
                                        {menu.is_active == 1
                                            ? "Active"
                                            : "Inactive"}
                                    </td>
                                    <td className="p-3 flex gap-2 items-center">
                                        <Link
                                            href={route(
                                                "submenu.edit",
                                                menu.id,
                                            )}
                                            className="h-5 w-5 text-blue-800"
                                        >
                                            <PencilSquareIcon />
                                        </Link>
                                        <Button
                                            onClick={() => Deleted(menu.id)}
                                            className="h-5 w-5 text-red-800"
                                        >
                                            <TrashIcon />
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="text-center p-4">
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
