import Container from "@/Components/Container";
import AdminDashboard from "@/Layouts/AdminDashboard";
import { Head, router, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Add() {
    const { errors } = usePage().props;

    const [formData, setFormData] = useState({
        store_code: "",
        store_name: "",
        email: "",
        phone_number: "",
        city: "",
        regency: "",
        address: "",
        status: "",
        created_id: "",
        updated_id: "",
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
        router.post(route("store.store"), { ...formData });
    };

    return (
        <div>
            <Container>
                <Head title="Store" />
                <div className="flex w-10/12 items-center justify-center bg-gray-100 mx-auto">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white px-10 py-10 rounded-2xl shadow-md sm:w-full"
                    >
                        <h2 className="text-2xl font-bold mb-6 text-center">
                            Add store
                        </h2>

                        <div className="grid lg:grid-cols-2 gap-2">
                            <div className="mb-4">
                                <label className="block mb-1 text-sm font-medium">
                                    store Code
                                </label>
                                <input
                                    type="text"
                                    name="store_code"
                                    value={formData.store_code}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    autoComplete="off"
                                    required
                                />
                                <div className="text-xs ">
                                    {errors.store_code}
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1 text-sm font-medium">
                                    store Name
                                </label>
                                <input
                                    type="text"
                                    name="store_name"
                                    value={formData.store_name}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    autoComplete="off"
                                    required
                                />
                                <div className="text-xs ">
                                    {errors.store_name}
                                </div>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-2">
                            <div className="mb-4">
                                <label className="block mb-1 text-sm font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    autoComplete="off"
                                    required
                                />
                                <div className="text-xs ">{errors.email}</div>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1 text-sm font-medium">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    name="phone_number"
                                    value={formData.phone_number}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    autoComplete="off"
                                    required
                                />
                                <div className="text-xs ">
                                    {errors.phone_number}
                                </div>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-2">
                            <div className="mb-4">
                                <label className="block mb-1 text-sm font-medium">
                                    City
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    autoComplete="off"
                                    required
                                />
                                <div className="text-xs ">{errors.city}</div>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1 text-sm font-medium">
                                    Regency
                                </label>
                                <input
                                    type="text"
                                    name="regency"
                                    value={formData.regency}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    autoComplete="off"
                                    required
                                />
                                <div className="text-xs ">{errors.regency}</div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1 text-sm font-medium">
                                Address
                            </label>
                            <textarea
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                autoComplete="off"
                                required
                            ></textarea>
                            <div className="text-xs ">{errors.address}</div>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-1">
                            <div className="mb-4">
                                <label className="block mb-1 text-sm font-medium">
                                    Status
                                </label>
                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Choose</option>
                                    <option value="A">A</option>
                                    <option value="C">C</option>
                                </select>
                                <div className="text-xs ">{errors.status}</div>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1 text-sm font-medium">
                                    Created
                                </label>
                                <input
                                    type="number"
                                    name="created_id"
                                    value={formData.created_id}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    autoComplete="off"
                                    required
                                />
                                <div className="text-xs ">
                                    {errors.created_id}
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1 text-sm font-medium">
                                    Updated
                                </label>
                                <input
                                    type="number"
                                    name="updated_id"
                                    value={formData.updated_id}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    autoComplete="off"
                                    required
                                />
                                <div className="text-xs ">
                                    {errors.updated_id}
                                </div>
                            </div>
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
