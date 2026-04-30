import Container from "@/Components/Container";
import AdminDashboard from "@/Layouts/AdminDashboard";
import { Head, router, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Add({ menus }) {
    const { errors, roles } = usePage().props;

    const [formData, setFormData] = useState({
        menu_id: "",
        submenu_name: "",
        submenu_icon: "",
        submenu_link: "",
        is_active: "",
        role: "",
    });
    console.log(formData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(route("submenu.store"), { ...formData });
    };

    return (
        <div>
            <Container>
                <Head title="Submenu" />
                <div className="flex w-10/12 items-center justify-center bg-gray-100 mx-auto">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white px-10 py-10 rounded-2xl shadow-md sm:w-full max-w-md"
                    >
                        <h2 className="text-2xl font-bold mb-6 text-center">
                            Add Submenu
                        </h2>
                        <div className="mb-4">
                            <label className="block mb-1 text-sm font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                name="submenu_name"
                                value={formData.submenu_name}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                autoComplete="off"
                                required
                            />
                            <div className="text-xs ">
                                {errors.submenu_name}
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block mb-1 text-sm font-medium">
                                Parent Menu
                            </label>
                            <select
                                name="menu_id"
                                value={formData.menu_id}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Choose</option>
                                {menus.length > 0
                                    ? menus.map((menu, i) => (
                                          <option key={i} value={menu.id}>
                                              {menu.menu_name}
                                          </option>
                                      ))
                                    : null}
                            </select>
                            <div className="text-xs ">{errors.is_active}</div>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1 text-sm font-medium">
                                Icon
                            </label>
                            <input
                                type="text"
                                name="submenu_icon"
                                value={formData.submenu_icon}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                autoComplete="off"
                                required
                            />
                            <div className="text-xs ">
                                {errors.submenu_icon}
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1 text-sm font-medium">
                                Link
                            </label>
                            <input
                                type="text"
                                name="submenu_link"
                                value={formData.submenu_link}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                autoComplete="off"
                                required
                            />
                            <div className="text-xs ">
                                {errors.submenu_link}
                            </div>
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

                        <div className="mb-4">
                            <label className="block mb-1 text-sm font-medium">
                                Role
                            </label>
                            <select
                                name="role"
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Choose</option>
                                {roles.length > 0
                                    ? roles.map((role, i) => (
                                          <option key={i} value={role.id}>
                                              {role.role_name}
                                          </option>
                                      ))
                                    : null}
                            </select>
                            <div className="text-xs ">{errors.menu_link}</div>
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
