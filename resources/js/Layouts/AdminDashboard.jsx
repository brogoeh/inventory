import { useState, useEffect } from "react";
import {
    HomeIcon,
    UsersIcon,
    ChartBarIcon,
    Cog6ToothIcon,
    Bars3Icon,
    ArrowRightStartOnRectangleIcon,
    MegaphoneIcon,
} from "@heroicons/react/24/outline";
import { Link, usePage } from "@inertiajs/react";
import SidebarItem from "@/Layouts/SidebarItem";

// Custom Hook for LocalStorage
function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        try {
            const stored = localStorage.getItem(key);
            return stored !== null ? JSON.parse(stored) : initialValue;
        } catch {
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch {}
    }, [key, value]);

    return [value, setValue];
}

export default function AdminDashboard({ children }) {
    const { auth, menus_global, roles } = usePage().props;

    const getRole = roles.filter((role) => role.id == auth.user.role_id);

    const [collapsed, setCollapsed] = useLocalStorage(
        "sidebar-collapsed",
        false,
    );

    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (index) => {
        setOpenMenu(openMenu === index ? null : index);
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div
                className={`bg-gray-800 text-white transition-all duration-300 flex flex-col ${
                    collapsed ? "w-20" : "w-64"
                }`}
            >
                <div className="flex items-center justify-between p-4">
                    {!collapsed && (
                        <div>
                            <span className="text-lg font-bold block">
                                Admin
                            </span>
                            <div className="capitalize italic text-sm">
                                Welcome, <strong>{auth.user.user_name}</strong>
                            </div>
                        </div>
                    )}
                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        className="text-gray-300 hover:text-white"
                    >
                        <Bars3Icon className="w-6 h-6" />
                    </button>
                </div>
                <nav className="flex-1 px-2 space-y-2">
                    {menus_global.map((item, index) => (
                        <SidebarItem
                            key={index}
                            item={item}
                            collapsed={collapsed}
                            isOpen={openMenu === index}
                            onToggle={() => toggleMenu(index)}
                        />
                    ))}
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <header className="bg-white shadow p-4 justify-between flex items-center">
                    <h1 className="text-xl font-semibold">
                        Dashboard ({getRole[0].role_name})
                    </h1>
                    <Link
                        className="italic tracking-tighter hover:text-red-400 text-red-800 text-base font-medium flex items-center gap-1"
                        href={route("logout")}
                        method="post"
                    >
                        Sign Out
                        <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
                    </Link>
                </header>
                <main className="p-6">{children}</main>
            </div>
        </div>
    );
}
