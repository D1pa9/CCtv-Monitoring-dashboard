'use client';

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-[#1E1E2F] text-white shadow-md">
      {/* Left - Logo */}
      <div className="text-2xl font-bold tracking-wide">MANDALAX</div>

      {/* Center - Navigation Links */}
      <div className="space-x-6 text-sm font-medium">
        <a href="#" className="hover:text-blue-400">Dashboard</a>
        <a href="#" className="hover:text-blue-400">Cameras</a>
        <a href="#" className="hover:text-blue-400">Incidents</a>
      </div>

      {/* Right - User Profile */}
      <div className="flex items-center space-x-2">
        <Avatar>
          <AvatarFallback>DS</AvatarFallback>
        </Avatar>
        <div className="text-sm">DIPA SHARMA</div>
      </div>
    </div>
  );
}
