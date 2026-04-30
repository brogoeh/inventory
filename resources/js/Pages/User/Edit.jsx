import Container from "@/Components/Container";
import AdminDashboard from "@/Layouts/AdminDashboard";
import { Head, router, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Edit() {
    const { user, roles } = usePage().props;
    const [formData, setFormData] = useState({
        user_name: user.user_name,
        full_name: user.full_name,
        role_id: user.role_id,
        is_active: user.is_active,
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
        router.put(route("user.update", user.user_name), {
            ...formData,
            _method: "put",
        });
    };

    return (
        <div>
            <Container>
                <Head title="User" />
                <div className="flex w-10/12 items-center justify-center bg-gray-100 mx-auto">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white px-10 py-10 rounded-2xl shadow-md sm:w-full max-w-md"
                    >
                        <h2 className="text-2xl font-bold mb-6 text-center shadow-md p-2 rounded tracking-tighter text-gray-600">
                            Update User{" "}
                            <span className="capitalize italic underline">
                                {user.full_name}
                            </span>
                        </h2>

                        <div className="mb-4">
                            <label className="block mb-1 text-sm font-medium">
                                Username
                            </label>
                            <input
                                disabled={true}
                                type="text"
                                name="user_name"
                                value={formData.user_name}
                                onChange={handleChange}
                                className="w-full border bg-gray-100 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                autoComplete="off"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1 text-sm font-medium">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="full_name"
                                value={formData.full_name}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                autoComplete="off"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1 text-sm font-medium">
                                Role
                            </label>
                            <select
                                name="role_id"
                                value={formData.role_id}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                <option value="">Pilih Role</option>
                                {roles.length > 0
                                    ? roles.map((role, i) => (
                                          <option key={i} value={role.id}>
                                              {role.role_name}
                                          </option>
                                      ))
                                    : null}
                            </select>
                        </div>

                        <div className="mb-6">
                            <label className="block mb-1 text-sm font-medium">
                                Status
                            </label>
                            <select
                                name="is_active"
                                value={formData.status}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option
                                    value="1"
                                    selected={
                                        user.is_active == 1 ? true : false
                                    }
                                >
                                    Active
                                </option>
                                <option
                                    value="0"
                                    selected={
                                        user.is_active == 0 ? true : false
                                    }
                                >
                                    Inactive
                                </option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Update
                        </button>
                    </form>
                </div>
            </Container>
        </div>
    );
}

Edit.layout = (page) => <AdminDashboard children={page} />;
