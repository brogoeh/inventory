import AdminDashboard from "@/Layouts/AdminDashboard";
import { Button } from "@headlessui/react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Head, Link, router } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

export default function Index(props) {
    const { users } = props;

    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    const Deleted = (username) => {
        if (confirm("are you sure delete this data?")) {
            return router.post(route("user.destroy", username), {
                _method: "delete",
            });
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    const filteredUsers = users.filter((user) =>
        user.full_name.toLowerCase().includes(search.toLowerCase()),
    );

    return (
        <div className="p-6">
            <Head title="User" />
            <h1 className="text-2xl font-bold mb-4">Data User</h1>

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
                        <tr className="bg-blue-200 text-left">
                            <th className="p-3">ID</th>
                            <th className="p-3">Username</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Role</th>
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
                        ) : filteredUsers.length > 0 ? (
                            filteredUsers.map((user, id) => (
                                <tr
                                    key={user.id}
                                    className="border-t hover:bg-gray-50"
                                >
                                    <td className="p-3">{id + 1}</td>
                                    <td className="p-3">{user.user_name}</td>
                                    <td className="p-3 capitalize">
                                        {user.full_name}
                                    </td>
                                    <td className="p-3 lowercase">
                                        {user.role.role_name}
                                    </td>
                                    <td className="p-3">
                                        {user.is_active == 0
                                            ? "inactive"
                                            : "active"}
                                    </td>
                                    <td className="p-3 flex gap-2 items-center">
                                        <Link
                                            href={route(
                                                "user.edit",
                                                user.user_name,
                                            )}
                                            className="h-5 w-5 text-blue-800"
                                        >
                                            <PencilSquareIcon />
                                        </Link>
                                        <Button
                                            onClick={() =>
                                                Deleted(user.user_name)
                                            }
                                            className="h-5 w-5 text-red-800"
                                        >
                                            <TrashIcon />
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center p-4">
                                    No users found
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
