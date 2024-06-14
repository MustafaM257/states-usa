import React from "react";
import { cn } from "@/utils/cn";
import { IconHome, IconMail, IconInfoOctagon } from "@tabler/icons-react";
import Link from "next/link";
const navItems = [
  { label: "Home", href: "/", icon: IconHome },
  { label: "About", href: "/about", icon: IconInfoOctagon },
  { label: "Contact", href: "/contact", icon: IconMail },
];
const Header = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "fixed md:top-10 inset-x-0 max-w-2xl mx-auto z-50 bg-gradient-to-r from-red-600 to-blue-600 rounded-full px-4 py-2 text-red-100 shadow-lg",
        className
      )}
    >
      <nav className="flex justify-between">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center space-x-2 group"
          >
            <item.icon className="shadow-md group-hover:text-red-600" />
            <span className="text-2xl hidden md:flex">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Header;
