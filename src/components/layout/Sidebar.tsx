"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Calendar,
  BedDouble,
  Mail,
  ClipboardList,
  Wallet,
  Star,
  Users,
  Settings,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Reservation", href: "#", icon: ClipboardList },
  { label: "Rooms", href: "#", icon: BedDouble },
  { label: "Messages", href: "#", icon: Mail },
  { label: "Housekeeping", href: "#", icon: Users },
  { label: "Inventory", href: "#", icon: Wallet },
  { label: "Calendar", href: "#", icon: Calendar },
  { label: "Financials", href: "#", icon: Wallet },
  { label: "Reviews", href: "#", icon: Star },
  { label: "Concierge", href: "#", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-muted text-muted-foreground h-screen p-4 border-r border-border fixed">
      <div className="mb-8 px-2">
        <h1 className="text-2xl font-bold text-primary">Lodgify</h1>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-accent transition"
            )}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
