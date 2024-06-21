import React from "react";
import { cn } from "@/utils/cn";
import { IconHome, IconMail, IconInfoOctagon } from "@tabler/icons-react";

import Link from "next/link";
const navItems = [
  { label: "Home", href: "/", icon: IconHome },
  { label: "Zip", href: "/zip", icon: IconInfoOctagon },
  { label: "Find", href: "/find", icon: IconMail },
];
const Header = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "fixed md:top-10 inset-x-0 md:max-w-2xl mx-auto z-50 border border-black bg-white/90 md:rounded-full px-4 py-2 text-white shadow-lg",
        className
      )}
    >
      <nav className="flex justify-between">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center space-x-2 group px-2 py-3"
          >
            <button className="px-4 py-2 rounded-full border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
              <item.icon className="  md:hidden" />
              <span className="hidden md:flex">{item.label}</span>
            </button>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Header;
