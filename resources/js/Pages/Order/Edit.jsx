import Container from "@/Components/Container";
import AdminDashboard from "@/Layouts/AdminDashboard";
import { Head, router, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Edit() {
    const { errors, suppliers, warehouses, order } = usePage().props;

    const [formData, setFormData] = useState({
        order_number: order.order_number,
        warehouse_id: order.warehouse_id,
        supplier_id: order.supplier_id,
        delivery_start_date: order.delivery_start_date,
        delivery_end_date: order.delivery_end_date,
        order_status_id: order.order_status_id,
        created_id: order.created_id,
        approval_id: order.approval_id,
        last_updated_id: order.last_updated_id,
        verified_id: order.verified_id,
        verified_at: order.verified_at,
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
        router.post(route("order.update", order.id), {
            ...formData,
            _method: "PUT",
        });
    };

    return (
        <div>
            <Container>
                <Head title="Order" />
                <div className="flex sm:w-full items-center justify-center bg-gray-100 mx-auto">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white px-10 py-10 rounded-2xl shadow-md sm:w-full"
                    >
                        <h2 className="text-2xl font-bold mb-6 text-center">
                            Update Order
                        </h2>

                        <div className="grid lg:grid-cols-3 gap-1">
                            <div className="mb-4">
                                <label className="block mb-1 text-sm font-medium">
                                    Order Number
                                </label>
                                <input
                                    type="text"
                                    name="order_number"
                                    value={formData.order_number}
                                    onChange={handleChange}
                                    className="sm:w-full w-fit border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    autoComplete="off"
                                    required
                                />
                                <div className="text-xs ">
                                    {errors.order_number}
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1 text-sm font-medium">
                                    Warehouse
                                </label>
                                <select
                                    name="warehouse_id"
                                    value={formData.warehouse_id}
                                    onChange={handleChange}
                                    className="sm:w-full w-fit border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Choose</option>
                                    {warehouses.length > 0
                                        ? warehouses.map((warehouse, i) => (
                                              <option
                                                  key={i}
                                                  value={warehouse.id}
                                              >
                                                  {warehouse.warehouse_code}
                                              </option>
                                          ))
                                        : null}
                                </select>
                                <div className="text-xs ">
                                    {errors.warehouse_id}
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1 text-sm font-medium">
                                    Supplier
                                </label>
                                <select
                                    name="supplier_id"
                                    value={formData.supplier_id}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Choose</option>
                                    {suppliers.length > 0
                                        ? suppliers.map((supplier, i) => (
                                              <option
                                                  key={i}
                                                  value={supplier.id}
                                              >
                                                  {supplier.supplier_code}
                                              </option>
                                          ))
                                        : null}
                                </select>
                                <div className="text-xs ">
                                    {errors.supplier_id}
                                </div>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-1">
                            <div className="mb-4">
                                <label className="block mb-1 text-sm font-medium">
                                    Delivery start date
                                </label>
                                <input
                                    type="date"
                                    name="delivery_start_date"
                                    value={formData.delivery_start_date}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    autoComplete="off"
                                    required
                                />
                                <div className="text-xs ">
                                    {errors.delivery_start_date}
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1 text-sm font-medium">
                                    Delivery end date
                                </label>
                                <input
                                    type="date"
                                    name="delivery_end_date"
                                    value={formData.delivery_end_date}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    autoComplete="off"
                                    required
                                />
                                <div className="text-xs ">
                                    {errors.delivery_end_date}
                                </div>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-1">
                            <div className="mb-6">
                                <label className="block mb-1 text-sm font-medium">
                                    Order status
                                </label>
                                <select
                                    name="order_status_id"
                                    value={formData.order_status_id}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Choose</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                                <div className="text-xs ">
                                    {errors.order_status_id}
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="block mb-1 text-sm font-medium">
                                    Created
                                </label>
                                <select
                                    name="created_id"
                                    value={formData.created_id}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Choose</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                                <div className="text-xs ">
                                    {errors.created_id}
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="block mb-1 text-sm font-medium">
                                    Approval
                                </label>
                                <select
                                    name="approval_id"
                                    value={formData.approval_id}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Choose</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                                <div className="text-xs ">
                                    {errors.approval_id}
                                </div>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-1">
                            <div className="mb-6">
                                <label className="block mb-1 text-sm font-medium">
                                    Last Updated
                                </label>
                                <select
                                    name="last_updated_id"
                                    value={formData.last_updated_id}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Choose</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                                <div className="text-xs ">
                                    {errors.last_updated_id}
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="block mb-1 text-sm font-medium">
                                    Verified
                                </label>
                                <select
                                    name="verified_id"
                                    value={formData.verified_id}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Choose</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                                <div className="text-xs ">
                                    {errors.verified_id}
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1 text-sm font-medium">
                                    Verified date
                                </label>
                                <input
                                    type="date"
                                    name="verified_at"
                                    value={formData.verified_at}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    autoComplete="off"
                                    required
                                />
                                <div className="text-xs ">
                                    {errors.verified_at}
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

Edit.layout = (page) => <AdminDashboard children={page} />;
