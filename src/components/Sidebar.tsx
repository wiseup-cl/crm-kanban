"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
  icon: string;
}

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/", icon: "📊" },
  { label: "Leads", href: "/leads", icon: "👥" },
  { label: "Opportunities", href: "/opportunities", icon: "💼" },
  { label: "Accounts", href: "/accounts", icon: "🏢" },
  { label: "Contacts", href: "/contacts", icon: "📞" },
  { label: "Reports", href: "/reports", icon: "📈" },
  { label: "Settings", href: "/settings", icon: "⚙️" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-4 flex flex-col">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">CRM Kanban</h1>
        <p className="text-gray-400 text-sm mt-1">Sales Pipeline Manager</p>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-800 text-gray-300 hover:text-white"
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-gray-700 pt-4 mt-4">
        <div className="flex items-center gap-3 px-4 py-2">
          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium">JD</span>
          </div>
          <div>
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-gray-400">john@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}