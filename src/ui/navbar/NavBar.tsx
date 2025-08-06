"use client";
import React from "react";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  title?: string;
  navItems?: NavItem[];
}

export const Navbar: React.FC<NavbarProps> = ({
  title = " MyApp",
  navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
}) => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-neutral-light border-b-2 border-black shadow-sm px-4 py-3">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <h1 className="font-mono text-lg font-bold">{title}</h1>
        <nav className="space-x-4 font-mono">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:underline">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
