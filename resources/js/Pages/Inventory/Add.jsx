import Container from "@/Components/Container";
import AdminDashboard from "@/Layouts/AdminDashboard";
import { Head, router, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Add() {
    const { errors, items } = usePage().props;

    const [formData, setFormData] = useState({
        item_id: "",
        on_hand_qty: "",
        on_ordered_qty: "",
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
        router.post(route("inventory.store"), {
            ...formData,
        });
    };

    return (
        <div>
            <Container>
                <Head title="Inventory" />
                <div className="flex w-10/12 items-center justify-center bg-gray-100 mx-auto">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white px-10 py-10 rounded-2xl shadow-md sm:w-full max-w-md"
                    >
                        <h2 className="text-2xl font-bold mb-6 text-center">
                            Add inventory
                        </h2>

                        <div className="mb-6">
                            <label className="block mb-1 text-sm font-medium">
                                Items
                            </label>
                            <select
                                name="item_id"
                                value={formData.item_id}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Choose</option>
                                {items.length > 0
                                    ? items.map((item, i) => (
                                          <option key={i} value={item.id}>
                                              {item.item_name}
                                          </option>
                                      ))
                                    : null}
                            </select>
                            <div className="text-xs">{errors.item_id}</div>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1 text-sm font-medium">
                                Quantity
                            </label>
                            <input
                                type="number"
                                name="on_hand_qty"
                                value={formData.on_hand_qty}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                autoComplete="off"
                                required
                            />
                            <div className="text-xs ">{errors.on_hand_qty}</div>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1 text-sm font-medium">
                                Order
                            </label>
                            <input
                                type="number"
                                name="on_ordered_qty"
                                value={formData.on_ordered_qty}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                autoComplete="off"
                                required
                            />
                            <div className="text-xs ">
                                {errors.on_ordered_qty}
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
