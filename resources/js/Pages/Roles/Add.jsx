import Container from "@/Components/Container";
import AdminDashboard from "@/Layouts/AdminDashboard";
import { Head, router, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Add() {
    const { errors } = usePage().props;

    const [formData, setFormData] = useState({
        role_code: "",
        role_name: "",
        is_active: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(route("role.store"), { ...formData });
    };

    return (
        <div>
            <Container>
                <Head title="Role" />
                <div className="flex w-10/12 items-center justify-center bg-gray-100 mx-auto">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white px-10 py-10 rounded-2xl shadow-md sm:w-full max-w-md"
                    >
                        <h2 className="text-2xl font-bold mb-6 text-center">
                            Add Roles
                        </h2>

                        <div className="mb-4">
                            <label className="block mb-1 text-sm font-medium">
                                Code
                            </label>
                            <input
                                type="text"
                                name="role_code"
                                value={formData.role_code}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                autoComplete="off"
                                required
                            />
                            <div className="text-xs ">{errors.role_code}</div>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1 text-sm font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                name="role_name"
                                value={formData.role_name}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                autoComplete="off"
                                required
                            />
                            <div className="text-xs ">{errors.role_name}</div>
                        </div>

                        <div className="mb-6">
                            <label className="block mb-1 text-sm font-medium">
                                Status
                            </label>
                            <select
                                name="is_active"
                                value={formData.is_active}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Choose</option>
                                <option value="1">Active</option>
                                <option value="0">Inactive</option>
                            </select>
                            <div className="text-xs ">{errors.is_active}</div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Save
                        </button>
                    </form>
                </div>
            </Container>
        </div>
    );
}

Add.layout = (page) => <AdminDashboard children={page} />;
