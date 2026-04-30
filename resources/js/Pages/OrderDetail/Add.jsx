import Container from "@/Components/Container";
import AdminDashboard from "@/Layouts/AdminDashboard";
import { Head, router, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Add() {
    const { errors, orders, items } = usePage().props;

    const [formData, setFormData] = useState({
        order_id: "",
        item_id: "",
        qty_ordered: "",
        qty_received: "",
        qty_cancelled: "",
        reason_cancelled: "",
        created_id: "",
        received_id: "",
        last_receive_dttm: "",
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
        router.post(route("order-detail.store"), { ...formData });
    };

    return (
        <div>
            <Container>
                <Head title="Order Detail" />
                <div className="flex sm:w-full items-center justify-center bg-gray-100 mx-auto">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white px-10 py-10 rounded-2xl shadow-md sm:w-full"
                    >
                        <h2 className="text-2xl font-bold mb-6 text-center">
                            Add Order Detail
                        </h2>

                        <div className="grid lg:grid-cols-3 gap-1">
                            <div className="mb-4">
                                <label className="block mb-1 text-sm font-medium">
                                    Order Number
                                </label>
                                <select
                                    name="order_id"
                                    value={formData.order_id}
                                    onChange={handleChange}
                                    className="sm:w-full w-fit border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Choose</option>
                                    {orders.length > 0
                                        ? orders.map((order, i) => (
                                              <option key={i} value={order.id}>
                                                  {order.order_number}
                                              </option>
                                          ))
                                        : null}
                                </select>
                                <div className="text-xs ">
                                    {errors.order_id}
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1 text-sm font-medium">
                                    Item
                                </label>
                                <select
                                    name="item_id"
                                    value={formData.item_id}
                                    onChange={handleChange}
                                    className="sm:w-full w-fit border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                <div className="text-xs ">{errors.item_id}</div>
                            </div>

                            <div className="mb-4">
                                <label className="block mb-1 text-sm font-medium">
                                    Qty. Ordered
                                </label>
                                <input
                                    type="number"
                                    name="qty_ordered"
                                    value={formData.qty_ordered}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    autoComplete="off"
                                    required
                                />
                                <div className="text-xs ">
                                    {errors.qty_ordered}
                                </div>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-1">
                            <div className="mb-4">
                                <label className="block mb-1 text-sm font-medium">
                                    Qty. Cancelled
                                </label>
                                <input
                                    type="number"
                                    name="qty_cancelled"
                                    value={formData.qty_cancelled}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    autoComplete="off"
                                    required
                                />
                                <div className="text-xs ">
                                    {errors.qty_cancelled}
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block mb-1 text-sm font-medium">
                                    Qty. Received
                                </label>
                                <input
                                    type="number"
                                    name="qty_received"
                                    value={formData.qty_received}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    autoComplete="off"
                                    required
                                />
                                <div className="text-xs ">
                                    {errors.qty_received}
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block mb-1 text-sm font-medium">
                                    Reason Cancelled
                                </label>
                                <input
                                    type="text"
                                    name="reason_cancelled"
                                    value={formData.reason_cancelled}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    autoComplete="off"
                                    required
                                />
                                <div className="text-xs ">
                                    {errors.reason_cancelled}
                                </div>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-1">
                            <div className="mb-4">
                                <label className="block mb-1 text-sm font-medium">
                                    Created
                                </label>
                                <input
                                    type="text"
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
                                    Received
                                </label>
                                <input
                                    type="text"
                                    name="received_id"
                                    value={formData.received_id}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    autoComplete="off"
                                    required
                                />
                                <div className="text-xs ">
                                    {errors.received_id}
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1 text-sm font-medium">
                                    Created
                                </label>
                                <input
                                    type="date"
                                    name="last_receive_dttm"
                                    value={formData.last_receive_dttm}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    autoComplete="off"
                                    required
                                />
                                <div className="text-xs ">
                                    {errors.last_receive_dttm}
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
