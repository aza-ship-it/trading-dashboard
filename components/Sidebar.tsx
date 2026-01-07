"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  BookOpen, 
  Library, 
  Target,
  TrendingUp
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Journal de Trading",
    href: "/journal",
    icon: BookOpen,
  },
  {
    title: "Base de Connaissances",
    href: "/knowledge",
    icon: Library,
  },
  {
    title: "Playbooks",
    href: "/playbooks",
    icon: Target,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-slate-800 bg-slate-950">
      <div className="flex h-full flex-col">
        {/* Logo / Header */}
        <div className="flex h-16 items-center gap-2 border-b border-slate-800 px-6">
          <TrendingUp className="h-6 w-6 text-emerald-500" />
          <div>
            <h1 className="text-lg font-bold text-slate-50">Trading Pro</h1>
            <p className="text-xs text-slate-400">Dashboard</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-slate-800 text-slate-50"
                    : "text-slate-400 hover:bg-slate-900 hover:text-slate-50"
                )}
              >
                <Icon className="h-5 w-5" />
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-slate-800 p-4">
          <div className="rounded-lg bg-slate-900 p-3">
            <p className="text-xs font-medium text-slate-300">Version 1.0.0</p>
            <p className="text-xs text-slate-500 mt-1">
              Dashboard de Trading
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
