import Container from "@/Components/Container";
import AdminDashboard from "@/Layouts/AdminDashboard";
import { Head, router, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Edit() {
    const { errors, menu, roles } = usePage().props;
    const role_id = menu.roles[0].role_name;

    const [formData, setFormData] = useState({
        menu_name: menu.menu_name,
        menu_icon: menu.menu_icon,
        menu_link: menu.menu_link,
        is_submenu: menu.is_submenu,
        is_active: menu.is_active,
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
        router.post(route("menu.update", menu.id), {
            ...formData,
            _method: "put",
        });
    };

    return (
        <div>
            <Container>
                <Head title="Menu" />
                <div className="flex w-10/12 items-center justify-center bg-gray-100 mx-auto">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white px-10 py-10 rounded-2xl shadow-md sm:w-full max-w-md"
                    >
                        <h2 className="text-2xl font-bold mb-6 text-center">
                            Update Menu
                        </h2>

                        <div className="mb-4">
                            <label className="block mb-1 text-sm font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                name="menu_name"
                                value={formData.menu_name}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                autoComplete="off"
                                required
                            />
                            <div className="text-xs ">{errors.menu_name}</div>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1 text-sm font-medium">
                                Icon
                            </label>
                            <input
                                type="text"
                                name="menu_icon"
                                value={formData.menu_icon}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                autoComplete="off"
                                required
                            />
                            <div className="text-xs ">{errors.menu_icon}</div>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1 text-sm font-medium">
                                Link
                            </label>
                            <input
                                type="text"
                                name="menu_link"
                                value={formData.menu_link}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                autoComplete="off"
                                required
                            />
                            <div className="text-xs ">{errors.menu_link}</div>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1 text-sm font-medium">
                                Submenu
                            </label>
                            <select
                                name="is_submenu"
                                value={formData.is_submenu}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                <option value="">Choose</option>
                                <option value="0">No</option>
                                <option value="1">Yes</option>
                            </select>
                            <div className="text-xs ">{errors.is_submenu}</div>
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
                                <option
                                    value="1"
                                    selected={
                                        menu.is_active == 1 ? true : false
                                    }
                                >
                                    Active
                                </option>
                                <option
                                    value="0"
                                    selected={
                                        menu.is_active == 0 ? true : false
                                    }
                                >
                                    Inactive
                                </option>
                            </select>
                            <div className="text-xs ">{errors.is_active}</div>
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1 text-sm font-medium">
                                Role
                            </label>
                            <select
                                name="role"
                                disabled={true}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Choose</option>
                                {roles.length > 0
                                    ? roles.map((role, i) => (
                                          <option
                                              key={i}
                                              value={role.id}
                                              selected={
                                                  role.role_name == role_id
                                                      ? true
                                                      : false
                                              }
                                          >
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

Edit.layout = (page) => <AdminDashboard children={page} />;
