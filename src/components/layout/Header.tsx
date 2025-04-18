"use client";

import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full h-16 px-6 flex items-center justify-between border-b border-border bg-background sticky top-0 z-10">
      {/* Search */}
      <div className="flex-1 max-w-md">
        <Input
          type="search"
          placeholder="Search room, guest, booking, etc"
          className="w-full"
        />
      </div>

      {/* User + Icons */}
      <div className="flex items-center gap-4 ml-6">
        {/* Notifications */}
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5 text-muted-foreground" />
        </Button>

        {/* Settings */}
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5 text-muted-foreground" />
        </Button>

        {/* User Avatar */}
        <div className="flex items-center gap-3 ml-2">
          <div className="text-right leading-tight">
            <p className="text-sm font-medium">Jaylon Dowart</p>
            <p className="text-xs text-muted-foreground">Admin</p>
          </div>
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/40" alt="@jaylon" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
