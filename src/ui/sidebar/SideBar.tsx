"use client";
import React from "react";
import Link from "next/link";

interface SidebarItem {
  label: string;
  href: string;
  isDanger?: boolean;
}

interface SidebarProps {
  items?: SidebarItem[];
  title?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  title = "📁 Menu",
  items = [
    { label: "Dashboard", href: "/" },
    { label: "Form Page", href: "/form" },
    { label: "Settings", href: "/settings" },
    { label: "Logout", href: "/logout", isDanger: true },
  ],
}) => {
  return (
    <aside className="w-64 h-[calc(100vh-56px)] mt-[56px] fixed top-0 left-0 border-r-2 border-black bg-neutral-light shadow-md p-4 font-mono">
      <h2 className="text-lg font-bold mb-6">{title}</h2>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`hover:underline ${
                item.isDanger ? "text-red-600" : ""
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
