import Container from "@/Components/Container";
import AdminDashboard from "@/Layouts/AdminDashboard";
import { Head, router, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Edit({ item, suppliers }) {
    const { errors } = usePage().props;

    const [formData, setFormData] = useState({
        item_name: item.item_name,
        description: item.description,
        status: item.status,
        std_qty: item.std_qty,
        min_stock: item.min_stock,
        max_stock: item.max_stock,
        unit_cost: item.unit_cost,
        unit_retail: item.unit_retail,
        supplier_id: item.supplier_id,
        created_id: item.created_id,
        updated_id: item.updated_id,
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
        router.post(route("item.update", item.id), {
            ...formData,
            _method: "PUT",
        });
    };

    return (
        <div>
            <Container>
                <Head title="Items" />
                <div className="flex w-10/12 items-center justify-center bg-gray-100 mx-auto">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white px-10 py-10 rounded-2xl shadow-md sm:w-full "
                    >
                        <h2 className="text-2xl font-bold mb-6 text-center">
                            Add item
                        </h2>

                        <div className="mb-4">
                            <label className="block mb-1 text-sm font-medium">
                                Item
                            </label>
                            <input
                                type="text"
                                name="item_name"
                                value={formData.item_name}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                autoComplete="off"
                                required
                            />
                            <div className="text-xs ">{errors.item_name}</div>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1 text-sm font-medium">
                                Description
                            </label>
                            <textarea
                                type="text"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                autoComplete="off"
                                required
                            ></textarea>
                            <div className="text-xs ">{errors.description}</div>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-1">
                            <div className="mb-6">
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
                                    <option value="I">I</option>
                                    <option value="C">C</option>
                                </select>
                                <div className="text-xs ">{errors.status}</div>
                            </div>
                            <div className="mb-6">
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
                            <div className="mb-4">
                                <label className="block mb-1 text-sm font-medium">
                                    Quantity
                                </label>
                                <input
                                    type="number"
                                    name="std_qty"
                                    value={formData.std_qty}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    autoComplete="off"
                                    required
                                />
                                <div className="text-xs ">{errors.std_qty}</div>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-1">
                            <div className="mb-4">
                                <label className="block mb-1 text-sm font-medium">
                                    Min. Stock
                                </label>
                                <input
                                    type="number"
                                    name="min_stock"
                                    value={formData.min_stock}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    autoComplete="off"
                                    required
                                />
                                <div className="text-xs ">
                                    {errors.min_stock}
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1 text-sm font-medium">
                                    Max. Stock
                                </label>
                                <input
                                    type="number"
                                    name="max_stock"
                                    value={formData.max_stock}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    autoComplete="off"
                                    required
                                />
                                <div className="text-xs ">
                                    {errors.max_stock}
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1 text-sm font-medium">
                                    Unit Cost
                                </label>
                                <input
                                    type="text"
                                    name="unit_cost"
                                    value={formData.unit_cost}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    autoComplete="off"
                                    required
                                />
                                <div className="text-xs ">
                                    {errors.unit_cost}
                                </div>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-1">
                            <div className="mb-4">
                                <label className="block mb-1 text-sm font-medium">
                                    Unit Retail
                                </label>
                                <input
                                    type="text"
                                    name="unit_retail"
                                    value={formData.unit_retail}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    autoComplete="off"
                                    required
                                />
                                <div className="text-xs ">
                                    {errors.unit_retail}
                                </div>
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

Edit.layout = (page) => <AdminDashboard children={page} />;
