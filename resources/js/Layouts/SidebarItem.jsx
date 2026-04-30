import { ChevronDownIcon } from "@heroicons/react/24/outline";
import * as HeroIcons from "@heroicons/react/24/outline";

import { Link, usePage } from "@inertiajs/react";

export default function SidebarItem({ item, collapsed, isOpen, onToggle }) {
    const { auth } = usePage().props;
    const Icon = HeroIcons[item.menu_icon];
    const hasChildren = item.submenus.length > 0;
    const Roles = item.roles[0].pivot.role_id == auth.user.role_id;

    return (
        <div>
            <button
                onClick={() => hasChildren && onToggle()}
                className="w-full flex items-center justify-between p-2 rounded hover:bg-gray-700"
            >
                <div className="flex items-center">
                    {Icon && <Icon className="w-5 h-5" />}
                    {!collapsed && !hasChildren && (
                        <>
                            <Link href={item.menu_link} className="ml-3">
                                {item.menu_name}
                            </Link>
                        </>
                    )}
                    {!collapsed && hasChildren && (
                        <span className="ml-3">{item.menu_name}</span>
                    )}
                </div>

                {hasChildren && !collapsed && (
                    <ChevronDownIcon
                        className={`w-4 h-4 transition-transform ${
                            isOpen ? "rotate-180" : ""
                        }`}
                    />
                )}
            </button>

            {hasChildren && isOpen && !collapsed && (
                <div className="ml-8 mt-1 space-y-1">
                    {item.submenus.map((child, i) => (
                        <Link
                            key={i}
                            href={child.submenu_link}
                            className="block p-2 text-sm rounded hover:bg-gray-700"
                        >
                            {child.submenu_name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
