import Container from "@/Components/Container";
import AdminDashboard from "@/Layouts/AdminDashboard";
import { Head, router, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Add() {
    const { errors } = usePage().props;

    const [formData, setFormData] = useState({
        status_code: "",
        status_name: "",
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
        router.post(route("order-status.store"), { ...formData });
    };

    return (
        <div>
            <Container>
                <Head title="Status order" />
                <div className="flex w-10/12 items-center justify-center bg-gray-100 mx-auto">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white px-10 py-10 rounded-2xl shadow-md sm:w-full max-w-md"
                    >
                        <h2 className="text-2xl font-bold mb-6 text-center">
                            Add Status Order
                        </h2>

                        <div className="mb-4">
                            <label className="block mb-1 text-sm font-medium">
                                Status Code
                            </label>
                            <input
                                type="text"
                                name="status_code"
                                value={formData.status_code}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                autoComplete="off"
                                required
                            />
                            <div className="text-xs ">{errors.status_code}</div>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1 text-sm font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                name="status_name"
                                value={formData.status_name}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                autoComplete="off"
                                required
                            />
                            <div className="text-xs ">{errors.status_name}</div>
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
