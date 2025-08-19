"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  Palette, 
  Type, 
  Square, 
  CreditCard, 
  FlipHorizontal, 
  FileText, 
  TextCursorInput, 
  Navigation as NavIcon, 
  Sidebar as SidebarIcon, 
  Loader2
} from "lucide-react";

const navigationItems = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/", icon: Home },
      { title: "Installation", href: "/docs/installation", icon: Type },
      { title: "Theming", href: "/docs/theming", icon: Palette },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Badge", href: "/docs/components/badge", icon: Square },
      { title: "Button", href: "/docs/components/button", icon: Square },
      { title: "Card", href: "/docs/components/card", icon: CreditCard },
      { title: "FlipCard", href: "/docs/components/flipcard", icon: FlipHorizontal },
      { title: "Form", href: "/docs/components/form", icon: FileText },
      { title: "Input", href: "/docs/components/input", icon: TextCursorInput },
      { title: "Navbar", href: "/docs/components/navbar", icon: NavIcon },
      { title: "Sidebar", href: "/docs/components/sidebar", icon: SidebarIcon },
      { title: "Spinner", href: "/docs/components/spinner", icon: Loader2 },
    ],
  },
];

interface DocsNavigationProps {
  currentSection?: string;
}

export const DocsNavigation = ({ }: DocsNavigationProps) => {
  const pathname = usePathname(); // ✅ correct for Next.js

  return (
    <nav className="h-full overflow-y-auto p-6">
      <div className="space-y-8">
        {navigationItems.map((section) => (
          <div key={section.title}>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              {section.title}
            </h4>
            <div className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                      isActive && "bg-accent text-accent-foreground font-medium"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};
